<template>
    <Teleport to="#pageWrap">
        <van-dialog v-model:show="props.show" className="dia_signature" closeOnClickOverlay :showConfirmButton="false"
            :showCancelButton="false">
            <!-- <div> -->
            <div id="sign_box">
                <div class="canvaspanel">
                    <div class="canvasborder">
                        <p class="title" v-if="member.isAdult == 1">请使用正楷签署：{{ member.name }}</p>
                        <p class="title" v-else>请使用正楷签署：未成年子女需由监护人父母代为签署，签署格式：{{ member.name }}（父亲/母亲XXX代签） </p>
                        <div class="close" @click="emit('update:show', false)"><img alt=""
                                src="@/assets/image/close.png" />
                        </div>
                        <Vue3Esign ref="vueEsignRef" class="canvas" :width="clientWidth" :height="clientHeight"
                            :is-crop="isCrop" :line-width="lineWidth" :line-color="lineColor" />

                        <div>
                            <!-- <canvas ref="signatureCanvas" id="signCanvas"
                                :style="{ width: clientWidth + 'px', height: clientHeight + 'px' }"></canvas> -->
                        </div>
                    </div>

                </div>
            </div>
            <!-- </div> -->
            <div class="buttongroup">
                <!-- <van-button color="#fff" style="width:100px;color: #333333;" @click="showToggle(false)">
                    关闭
                </van-button> -->
                <van-button color="#fff" style="width:100px;color: #333333" @click="esignReset">
                    清除
                </van-button>
                <van-button color="#05917F" :loading="loadShow" style="width:100px;margin-top: 30px;" @click="submit">
                    提交
                </van-button>
            </div>
        </van-dialog>
    </Teleport>
</template>
<script lang='ts' setup>
import { uploadImg } from '@/api/user';
import { getLocalStorage } from '@/utils/storage';
import { showToast } from 'vant';
import { useToggle } from '@vant/use';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

export interface Props {
    show: boolean
}

const props = withDefaults(defineProps<Props>(), {

})

const emit = defineEmits(['update:show'])

const [loadShow, loadShowToggle] = useToggle(false);

let countTime = ref(15)
const countdown = (isRun: Boolean) => {
    if (isRun == true) {
        countTime.value = 15;  //初始化60秒倒计时
    }
    else {
        if (countTime.value <= 1) {
            countTime.value = 0;   //计时器归零
            return;
        }
    }
    countTime.value--;  //计时器递减rmdata
    setTimeout(function () {
        countdown(false);
    }, 1000);
}
//     const btof = (data:string, fileName:string) => {
//         const dataArr = data.split(',')
//         const byteString = atob(dataArr[1])
//         const options = {
//           type: 'image/jpeg',
//           endings: 'native'
//         } as EmptyObjectType
//         const u8Arr = new Uint8Array(byteString.length)
//         for (let i = 0; i < byteString.length; i++) {
//           u8Arr[i] = byteString.charCodeAt(i)
//         }
//         return new File([u8Arr], fileName + '.jpg', options)
// }

// 签字
const vueEsignRef = ref<any>(null)
const lineWidth = ref(5)
const lineColor = ref('#000000')
const isCrop = ref<boolean>(true)
// const clientWidth = ref<number>(330)
// const clientHeight = ref<number>(600)
const clientWidth = ref<number>(600)
const clientHeight = ref<number>(330)
const esignReset = async () => {
    vueEsignRef.value.reset()
}
const submit = async () => {
    try {
        const imgUrl = await vueEsignRef.value.generate()
        loadShowToggle(true)
        console.log(imgUrl);

        // let fd = new FormData()
        // const image = btof(res, '签名.png')
        // fd.append('fileData', image as any)
        // fd.append('type', '1729')
        let data = {
            trid: member.value.trid,
            pngtxt: imgUrl
        }
        uploadImg(data).then(res => {
            if (res.code == 0) {
                showToast('上传成功')
                router.push({ name: 'person' })
            }
        }).finally(() => {
            loadShowToggle(false)
            emit('update:show', false);
        })
    }
    catch (error) {
        showToast('请先签字')
    }
}
let member = ref()

onBeforeMount(() => {
    countdown(true)
    member.value = getLocalStorage('membertMsg')
})


onMounted(() => {
    // 获取屏幕宽度和高度
    clientWidth.value = window.innerWidth - 70;
    clientHeight.value = window.innerHeight - 200;
    // // 监听窗口大小变化
    window.addEventListener('resize', () => {
        clientWidth.value = window.innerWidth - 70;
        clientHeight.value = window.innerHeight - 200;
    });
});


</script>
<style scoped lang="less">
@media (min-width : 786px) {

    .page-wrap {
        --view-width: 430px;

        :deep(.van-popup) {
            width: var(--view-width);
            left: 50%;
            right: 0;
            top: 0;
            transform: translateX(-50%);
        }
    }

    .dia_signature {
        width: var(--view-width);
    }
}
</style>
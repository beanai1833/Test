<template>
    <div class="page" @scroll="onScroll" style="background-color: #EFEFEF">
        <div class="page-wrap" id="pageWrap">
            <div class="page-header">
                <van-nav-bar left-arrow placeholder fixed title="签署文件" @click-left="onBack" :border="false" />
            </div>

            <div class="page-body">
                <p class="title mb10">签证办理声明</p>
                <p>一、安利(中国)日用品有限公司（以下简称“安利”）委托新澳国际旅行社（上海）有限公司（以下简称“新澳”）为预估符合“2023/24考评年度安利（中国）营销菁英海外进修研讨会”出席资格者办理澳大利亚签证事务。
                </p>
                <p class="mt20">
                    二、签证申请人的签证申请是否成功，完全由该国的签证官根据签证申请人递交的申请材料独立判断，安利与新澳不以任何方式干预或参与交涉，并且在任何情况下，安利与新澳均不对签证申请人的签证申请等结果做出任何承诺和承担任何责任，签证申请人在此承诺并同意不因本人签证出签结果向新澳提出任何索赔、请求、争议或要求新澳承担任何责任和义务。一切出签信息均应以签证官签发的签证内容为唯一依据。
                </p>
                <p class="mt20">
                    三、签证申请资料的真实性是使领馆审核签证申请的最关键的因素之一，签证申请人有义务确保所提供的各项申请资料均真实、准确、完整和无误。新澳在收取申请人资料过程中，如发现有不符合签证申请资格的，有权但无义务作出不受理申请人签证申请的要求。签证申请人在此确认并同意对自己所提供签证申请材料的真实性、准确性和完整性承担一切法律责任与后果，且因签证申请人提供虚假材料而给新澳公司造成损失的，签证申请人应向新澳公司承担赔偿责任。
                </p>
                <p class="mt20">
                    四、“工作日”、“申请时间”为使馆签发签证时正常情况下的处理时间；若遇特殊原因，包括但不限于政治干涉、假期或其他使领馆内部原因，可能会产生延迟出签的情况，因此新澳公布的相关的签证处理时间信息仅供参考，非法定承诺，请签证申请人自行决定是否待拿到本人签证及护照后再<span
                        class="red">购买</span>机票或与酒店确认付款，以避免不必要的经济损失。对于因签证延迟签发而可能产生的任何损失，签证申请人在此确认并同意新澳对此无需承担任何责任。</p>
                <p class="mt20">
                    五、当签证申请人获得签证时，新澳承诺该等签证系来自相关国家合法签证机构签发的真实、有效的签证，但是提请特别注意，各国海关边检仍然拥有权利因各种原因而自行决定是否拒绝旅客入境，因此最终签证申请人是否能够入境，均由该国的边检官员决定，签证申请人在此确认并同意，若其被边检官员拒绝入境，由此产生的任何损失均由签证申请人自行承担，且新澳对此无需承担任何责任。
                </p>
                <p class="mt20">六
                    、签证申请人如未按照相关国家使领馆签发的签证有效期在境外进行合法停留，因此产生任何滞留不归、被遭返、罚款或列入黑名单的情况的，一切责任和相关费用均由签证申请人自行承担，新澳对此无需承担任何责任。
                </p>
                <p class="mt20">七 、新澳仅为申请人提供签证申请过程中的相关服务，签证申请如因任何原因中止、终止<span
                        class="red">或拒签</span>的，申请费用均无需退还。签证申请人在此确认并同意签证费用会因为各种政治、经济等因素而发生变动，最终将以新澳确认的费用为准，其中新澳收取的签证费用包含签证费和<span
                        class="black">服务费</span>。</p>
                <p>八、使领馆保留要求签证申请人补充资料或要求申请人前往使领馆面试、及前往使领馆指定医院进行体检等操作的权利，由此产生的全部费用(包括但不限于交通、住宿、体检等)均由签证申请人自行承担。</p>
                <p><span
                        class="red">九、新澳仅为预估符合“2023/24考评年度安利（中国）营销菁英海外进修研讨会”出席资格者办理澳大利亚签证事务并用于出席本次研讨会，</span>如签证申请人最终未按预定计划<span
                        class="red">出席</span>，新澳将有权向相关使领馆申请撤销已签发的签证。</p>
                <p class="title mb10 mt20">机票办理声明（仅适用于公司安排交通出席者）</p>
                <p>一、安利(中国)日用品有限公司（以下简称“安利”）委托新澳国际旅行社（上海）有限公司（以下简称“新澳”）为预估符合“2023/24考评年度安利（中国）营销菁英海外进修研讨会”出席资格者购买由中国往返澳大利亚的机票事务。
                </p>
                <p class="mt20">二
                    、新澳为具有上述“2023/24考评年度安利（中国）营销菁英海外进修研讨会”出席资格的客户所提供的机票服务类别，均属于协助办理性质，机票申请人是否能顺利完成出行，完全由出入境国家海关边检根据机票申请人的情况独立判断，新澳不以任何方式的干预或参与交涉，并且在任何情况下，新澳均不对出入境国家海关边检的判断结果做出任何承诺和承担任何责任，机票申请人在此承诺并同意不因出入境国家海关边检的判断结果向新澳提出任何索赔、请求、争议或要求新澳承担任何责任和义务。
                </p>
                <p class="mt20">三、机票申请人在此确认并同意新澳有权按“2023/24考评年度安利（中国）营销菁英海外进修研讨会”的实际出席情况以及安利公司分配原则自行确定和指定机票申请人所适用的<span
                        class="red">出入境口岸、</span>航空公司、航班和舱位，机票申请人同意接受并遵守“服从团体安排”的原则<span
                        class="red">往返出入境</span>口岸的交通食宿、<span class="red">免费托运行李以外的行李托运及超重费</span>等各项费用均由机票申请人自行承担。</p>
                <p class="mt20">
                    四、新澳以及安利公司将根据航班情况统一安排领队服务、口岸住宿、用餐以及墨尔本当地抵离日行程，无论最终实际航班对应行程是否产生口岸住宿、用餐或墨尔本当地抵离日行程等，均不涉及需向机票申请人退还与<span
                        class="red">上述</span>服务有关费用的情形。</p>
                <p class="mt20">
                    五、如遇恶劣天气等不可抗力的因素、航司机械检测、签证申请人个人原因（包括但不限于个人行程延误、个人签证未出签等各项原因）导致机票申请人行程延误、行程日期缩短、行程变更或取消的，由此产生的相关费用均由机票申请人自行承担，新澳无需对机票申请人承担任何责任和义务，且无需向机票申请人支付任何补偿或赔偿。
                </p>
                <p class="mt20 red">六
                    、航空公司规定团队机票“不改不退不签转”,机票订金支付后或订购成功后如申请人要求退、改，则该机票之退改将根据航空公司制定之相应退改规则进行处理并结算。若机票申请人在机票定金支付后、机票订购成功后，取消该机票，机票全款不予退还。
                </p>
                <p class="mt20 red">
                    以上，新澳在提供服务前，需和签证申请人/机票申请人签订该声明，如有未能涵盖的事项，新澳有权视具体情况在法律法规允许的范围内作出权宜处理。因办理签证或机票需收集您的个人信息（如有需要，包括您的健康信息），在处理您的个人信息时，我们将严格注意不向非必要单位透露您的信息，保护您的个人隐私，敬请理解。
                    本人已仔细阅读上述声明的全部内容并充分准确地理解其中的含义，且本人有权利提问并已获得清晰回复，对声明内容不存任何异议。本人签署本声明文件完全出于自愿，是本人真实意思表示。本人认可上述声明内容具有法律约束力。
                </p>
            </div>

            <div class="page-footer borderColor" v-if="member.type == 1">
                <!-- <div class="page-footer borderColor" v-if="true"> -->
                <div class="mg-b20">
                    <van-checkbox style="line-height: 36px;" icon-size="16px" shape="square" v-model="checked">
                        <!-- <van-checkbox :disabled="soll < 200" style="line-height: 36px;" icon-size="16px" shape="square"
                        v-model="checked"> -->
                        <span class="font14" style="vertical-align: middle;">我已阅读并同意以上信息</span>
                    </van-checkbox>
                </div>
                <van-button @click="showToggle(true)" block type="primary" loading-type="circular" loading-size="24px"
                    :disabled="!checked || countTime > 0">
                    签字<span v-show="countTime > 0">（{{ countTime }}）</span>
                </van-button>
            </div>
            <div class="page-footer borderColor" v-else>
                <div class="mg-b20 font14">
                    已签署
                </div>
                <div class="button">
                    <a :href="wordUrl" download="在读证明模板.docx">下载</a>
                </div>
            </div>

        </div>


        <!-- <Teleport to="#pageWrap">
            <van-dialog v-model:show="backShow" className="dia_signature" closeOnClickOverlay :showConfirmButton="false"
                :showCancelButton="false">
                <div id="sign_box">
                    <div class="canvaspanel">
                        <div class="canvasborder">
                            <p class="title" v-if="member.isAdult == 1">请使用正楷签署：{{ member.name }}</p>
                            <p class="title" v-else>请使用正楷签署：未成年子女需由监护人父母代为签署，签署格式：{{ member.name }}（父亲/母亲XXX代签） </p>
                            <div class="close" @click="showToggle(false)"><img alt="" src="@/assets/image/close.png" />
                            </div>
                            <Vue3Esign ref="vueEsignRef" class="canvas" :width="clientWidth" :height="clientHeight"
                                :is-crop="isCrop" :line-width="lineWidth" :line-color="lineColor" />

                        </div>

                    </div>
                </div>
                <div class="buttongroup">
                    <van-button color="#fff" style="width:100px;color: #333333" @click="esignReset">
                        清除
                    </van-button>
                    <van-button color="#05917F" :loading="loadShow" style="width:100px;margin-top: 30px;"
                        @click="submit">
                        提交
                    </van-button>
                </div>
            </van-dialog>
        </Teleport> -->

        <van-dialog v-model:show="backShow" className="dia_signature" closeOnClickOverlay :showConfirmButton="false"
            :showCancelButton="false">

            <template #default v-if="isPC()">
                <div class="is-pc">
                    <div id="sign_box">
                        <div class="canvaspanel">
                            <div class="canvasborder">
                                <p class="title" v-if="member.isAdult == 1">请使用正楷签署：{{ member.name }}</p>
                                <p class="title" v-else>请使用正楷签署：未成年子女需由监护人父母代为签署，签署格式：{{ member.name }}（父亲/母亲XXX代签） </p>

                                <div class="canvas-wrap">
                                    <Vue3Esign ref="vueEsignRef" class="canvas" :height="600" :is-crop="isCrop"
                                        :line-width="lineWidth" :line-color="lineColor" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="close" @click="showToggle(false)"><img alt="" src="@/assets/image/close.png" />
                    </div>
                    <div class="buttongroup">
                        <van-button color="#fff" style="width:100px;color: #333333" @click="esignReset">
                            清除
                        </van-button>
                        <van-button color="#05917F" :loading="loadShow" style="width:100px;margin-left: 30px"
                            @click="submit">
                            提交
                        </van-button>
                    </div>
                </div>
            </template>


            <template v-else #default>
                <div id="sign_box">
                    <div class="canvaspanel">
                        <div class="canvasborder">
                            <p class="title" v-if="member.isAdult == 1">请使用正楷签署：{{ member.name }}</p>
                            <p class="title" v-else>请使用正楷签署：未成年子女需由监护人父母代为签署，签署格式：{{ member.name }}（父亲/母亲XXX代签） </p>
                            <div class="close" @click="showToggle(false)"><img alt="" src="@/assets/image/close.png" />
                            </div>
                            <Vue3Esign ref="vueEsignRef" id="vueCanvas" class="canvas" :width="clientWidth"
                                :height="clientHeight" :is-crop="isCrop" :line-width="lineWidth"
                                :line-color="lineColor" />

                        </div>

                    </div>
                </div>
                <div class="buttongroup">
                    <van-button color="#fff" style="width:100px;color: #333333" @click="esignReset">
                        清除
                    </van-button>
                    <van-button color="#05917F" :loading="loadShow" style="width:100px;margin-top: 30px;"
                        @click="submit">
                        提交
                    </van-button>
                </div>
            </template>
        </van-dialog>


        <!-- <SignatureDialog v-model:show="backShow"></SignatureDialog> -->
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, ref, } from "vue";
import { useRouter } from "vue-router";
import { showToast } from 'vant';
import { useToggle } from '@vant/use';
import { getLocalStorage } from '@/utils/storage'
import { uploadImg } from '@/api/user'
// import SignatureDialog from "@/components/signature.vue";

// const SignatureDialog = defineAsyncComponent(() => import('@/components/signature.vue'));


const router = useRouter();
// const soll = ref<number>(0);
const checked = ref<boolean>(false);
let wordUrl = ref('')
const onScroll = (e: Event) => {
    console.log(e);
}
const [backShow, showToggle] = useToggle(false);
const [loadShow, loadShowToggle] = useToggle(false);
const onBack = () => {
    router.push({ name: 'person' })
}
let countTime = ref(15)
// let countTime = ref(0)
const countdown = (isRun: Boolean) => {
    if (isRun == true) {
        countTime.value = 15;  //初始化60秒倒计时
        // countTime.value = 0;  //初始化60秒倒计时
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
        console.log(imgUrl, vueEsignRef.value);

        // let fd = new FormData()
        // const image = btof(res, '签名.png')
        // fd.append('fileData', image as any)
        // fd.append('type', '1729')
        let data = {
            trid: member.value.trid,
            pngtxt: imgUrl,
            rotation: !isPC() //是否需要旋转90
        }
        uploadImg(data).then(res => {
            if (res.code == 0) {
                showToast('上传成功')
                router.push({ name: 'person' })
            }
        }).finally(() => {
            loadShowToggle(false)
            showToggle(false)
        })

    }
    catch (error) {
        showToast('请先签字')
    }
}


function isPC() {
    // 判断是否为PC设备
    const userAgent = navigator.userAgent.toLowerCase();
    return /windows|macintosh|linux/.test(userAgent);  // 判断PC平台
}

let member = ref()


onBeforeMount(() => {
    setTimeout(() => {
        countdown(true);
    }, 1000)
    member.value = getLocalStorage('membertMsg')
    wordUrl.value = member.value.file
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
:deep(.van-overlay) {
    background: rgba(0, 0, 0, .9) !important;
}

:deep(.dia_signature) {
    background-color: rgba(0, 0, 0, 0);
    // padding-top: 30%;
    padding-top: 50px;
    width: 100%;
    height: 100%;
    // position: fixed;
    top: 50%;
    // left: 0;
    z-index: 9999;

    .van-dialog__content {
        width: 100%;
        height: 100%;
    }
}


// @media (min-width : 786px) {

//     .page {
//         --view-width: 430px;

//         display: flex;
//         justify-content: center;

//         .page-wrap {
//             width: var(--view-width);

//             .page-header {
//                 width: var(--view-width);

//                 :deep(.van-nav-bar--fixed) {
//                     width: var(--view-width);
//                     left: 50%;
//                     right: 0;
//                     top: 0;
//                     transform: translateX(-50%);
//                 }
//             }

//             .page-footer {
//                 width: var(--view-width);
//                 left: 50%;
//                 right: 0;
//                 transform: translateX(-50%);
//             }


//         }
//     }


//     :deep(.dia_signature) {
//         width: var(--view-width) !important;

//         .van-dialog__content {
//             width: 100%;
//             height: 100%;
//         }
//     }
// }

.page-wrap {
    position: relative;
}

#sign_box {
    position: relative;

    //横向操作
    .nav-bar.van-nav-bar__placeholder {
        width: 100%;
        height: 46px !important;
        transform: rotate(90deg);
        position: fixed;
        top: 0;
        right: -100%;
        transform-origin: 0% 0%;
        z-index: 10;
    }

    .title {
        transform: rotate(90deg);
        transform-origin: 0 0;
        color: #fff;
        position: absolute;
        font-size: 14px;
        left: 390px;
        width: 600px;
    }

    .canvas {
        background: #fff !important;
    }

    .canvaspanel {
        position: relative;
    }

    .close {
        position: absolute;
        right: 0;
        bottom: -130px;
        background: #fff;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        img {
            width: 20px;
            object-fit: cover;
        }
    }

    .text {
        color: #919191;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(90deg);
        z-index: 10;
        right: -16vw;
        position: fixed;
        top: 32vw;
    }
}


.buttongroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
    z-index: 10;
    position: absolute;
    bottom: 20px;
    left: 10px;
}

.button {
    // padding: 8px;
    border: 1px solid #5E5E5E;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;

    a {
        color: #333333;
        padding: 8px;
        display: block;
    }

}


.is-pc {
    padding-top: 80px;
    width: 100%;

    .canvas-wrap {
        margin-top: 24px;
    }

    .canvas {
        width: 100% !important;
        height: 300px !important;
    }

    .title {
        transform: none !important;
        position: relative !important;
        left: 0 !important;
        top: 0 !important;
        width: 100% !important;
    }


    .close {
        position: absolute;
        top: 24px;
        right: 0;
        background: #fff;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        img {
            width: 20px;
            object-fit: cover;
        }
    }

    .buttongroup {
        width: 100%;
        transform: none !important;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        left: 0;
    }
}

.page-body {
    padding-bottom: 132px;
    font-size: 12px;
    color: #333;
    background-color: #fff;
    overflow: auto;

    .title {
        text-align: center;
        color: #000;
        font-weight: bold;
    }

    .black {
        color: #000;
        font-weight: bold
    }

    .red {
        // color: red;
    }

    p {
        text-indent: 2ch;
        line-height: 1.5;
    }

    li {
        text-indent: 2ch;
    }

    .mt20 {
        margin-top: 20px;
    }

    .mb10 {
        margin-bottom: 10px;
    }
}
</style>
<template>
  <div class="home">
    <van-nav-bar title="办签人员" fixed placeholder />
    <div class="content">
      <div class="title_number flex align-middle space-between">
        <p>户籍号：</p>
        <p>{{ number }}</p>
      </div>
      <div class="person_list">
        <template v-if="personList && personList.length">
          <div class="list" v-for="item in personList">
            <div class="title flex align-middle space-between">
              <div class="name">{{ item.brName }}</div>
              <div>{{ item.trTypeName }}</div>
            </div>
            <van-cell title="签署办理声明" is-link @click="goRouter(item)">
              <template #value>
                <span :style="{ 'color': order_status3[item.tr41] }">{{ item.tr41Name }}</span>
              </template>
            </van-cell>
            <!--  v-if="item.trVisas !== 2 && item.trVisas !== 3" -->
            <template v-if="item.tr41 == 2">
              <van-cell title="签证信息表" is-link @click="iframeClick(item.brid, item.trid)">
                <template #value>
                  <span :style="{ 'color': order_status[item.trVisainfoStatus] }">{{ item.trVisainfoStatusName }}</span>
                </template>
              </van-cell>
              <van-cell title="证件材料" is-link @click="upClick(item.trid)" v-if="item.trVisainfoStatus == 3">
                <template #value>
                  <span :style="{ 'color': order_status[item.trPickupStatus] }">{{ item.trPickupStatusName }}</span>
                </template>
              </van-cell>
              <van-cell title="办理状态" v-if="item.trPickupStatus == 3">
                <template #value>
                  <span :style="{ 'color': order_status2[item.trVisaResult] }">{{ item.trVisaStepStatusName }}</span>
                </template>
              </van-cell>
              <van-cell title="签证下载" v-if="item.trPickupStatus == 3">
                <template #value>
                  <!-- <span style="color:#0486FE" v-if="item.trVisaResult == 5" @click="upLoad(item.visaFile)" -->
                  <span style="color:#0486FE" v-if="item.trVisaResult == 5 && item.visaFile"
                    @click="goview(item.visaFile)" class="flex align-middle justify-end"><img
                      src="../../assets/image/word.png" alt="">
                    <div style="line-height: 24px;">下载</div>
                  </span>
                  <span v-else-if="item.trVisaResult == 4">拒签</span>
                  <span v-else>出签后可下载</span>
                </template>
              </van-cell>
            </template>
          </div>
        </template>
      </div>

      <!-- 退出 -->
      <van-dialog v-model:show="backShow" className="dia_close" :showConfirmButton="false" :showCancelButton="false">

        <div class="txt">确认退出当前账号？</div>
        <div class="flex align-middle space-between" style="margin: 24px">
          <m-button width="45%" @close="confirm" title="确认" />
          <m-button title="返回" type="default" width="45%" @click="showToggle(false)" />
        </div>
      </van-dialog>
      <!-- <addPersonDia ref="addPerson" @refresh="getList" /> -->
    </div>
    <div class="hint_title">
      <!-- <div>说明</div> -->
      <!-- <ul>
        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">1、</label>

          <div>
            <p class="li-text">操作流程：</p>
            <p>
              1)填写个人信息表：准确无误且完整地填写所有信息；
            </p>
            <p>
              2)上传材料：根据网站上的提示逐个上传所需的文件。
            </p>
          </div>
        </li>


        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">2、</label>
          <p class="li-text">
            收件日期为 <span style="color: red;">**月**日-**月**日</span>，为确保出行前可以顺利完成您的签证申请，请务必于截止收件日期<span
              style="color: red">（**月**日）</span>前，通过签证办理系统完成个人信息表在线填写并上传所有签证材料。
          </p>
        </li>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">3、</label>
          <p class="li-text">
            签证材料审核通过后，我社会将材料提交至领馆进行审批。
          </p>
        </li>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">4、</label>
          <p class="li-text">
            签证申请递交后，澳大利亚使领馆可能会电话抽查，我社客服人员会致电提醒您注意接听领馆的抽查电话，请保持所有手机电话畅通。
          </p>
        </li>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">5、</label>
          <div>
            <p class="li-text">
              客服信息：
            </p>
            <p>
              1)客服电话：021-61611822
            </p>

            <div class="flex inset-text">
              <label class="inset-text" style="flex-shrink: 0;">2)工作时间：</label>
              <div>
                <p>周一至周五：（周六、周日及节假日休息）</p>
                <p>上午09:30-12:30；下午13:30-18:30</p>
              </div>
            </div>
          </div>
        </li>


        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">6、</label>
          <p class="li-text">
            签证申请结果和有效期均以领馆最终签发为准。
          </p>
        </li>

      </ul> -->




      <div style="margin-bottom: 16px;">签证说明：</div>
      <ul>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">1）</label>
          <p class="li-text">
            根据澳大利亚领事馆要求，本次研讨会出席者的签证属于专案申请，将以家庭为单位递交签证资料（即同一个户籍内的夫妻、二代及同游家属），仅当户籍内所有出席者（选择公司办理签证者）签证材料完备方可递交申请。
          </p>
        </li>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">2）</label>
          <div>
            <p class="li-text">
              所有签证申请材料均为电子资料，请务必于截止收件日期<span style="color: red;">（2024年12月31日）</span>前，完成线上填报。
              <!-- <a href="mailto:amway_mel@mandarintravel.com.cn">amway_mel@mandarintravel.com.cn</a> -->
            </p>
            <p class="li-text">
              *如是18岁以下未成年同游家属，则需根据《墨尔本研讨会通知函二-签证办理须知》，由监护人通过线下形式代为填写，请于收件截止日期前发送至指定邮箱：amway_mel@mandarintravel.com.cn
            </p>
          </div>

        </li>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">3）</label>
          <p class="li-text">
            材料审核通过后，旅行社将分批递交签证申请，并安排客服专员致电申请人告知签证已完成递交，需保持手机通畅，注意接听澳大利亚领事馆抽查电话。
          </p>
        </li>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">4）</label>
          <p class="li-text">
            签证申请结果和签证有效期均以领馆最终实际签发为准。
          </p>
        </li>

        <li class="flex" style="margin-bottom: 8px;">
          <label style="flex-shrink: 0;">5）</label>

          <div>
            <p class="li-text">
              客服电话：021-61611822
              <!-- <a href="tel:+86 021 61611822">021-61611822</a> -->
            </p>
            <div class="flex">
              <label style="flex-shrink: 0;">工作时间：</label>

              <p class="li-text">周一至周五：上午09:30-12:30；下午13:30-18:30（周六、周日及节假日休息）</p>
            </div>
          </div>

        </li>

      </ul>




      <!-- <h3>1、操作流程：</h3>
      <p>1)填写个人信息表：准确无误且完整地填写所有信息；</p>
      <p>2)上传材料：根据网站上的提示逐个上传所需的文件。</p>
      <h3>2、收件日期为**月**日-**月**日，为确保出行前可以顺利完成您的签证申请，请务必于截止收件日期（**月**日）前，通过签证办理系统完成个人信息表在线填写并上传所有签证材料。</h3>
      <h3>3、签证材料审核通过后，我社会将材料提交至领馆进行审批。</h3>
      <h3>4、签证申请递交后，澳大利亚使领馆可能会电话抽查，我社客服人员会致电提醒您注意接听领馆的抽查电话，请保持所有手机电话畅通。</h3>
      <h3>5、客服信息：</h3>
      <p>1)客服电话：021-61611822</p>
      <div style="display: flex;">
        <p style="min-width: 100px;">2)工作时间：</p>
        <div style="flex: 1;">
          <div style="display: flex;">
            <span>周一至周五：</span>
            <div style="flex: 1;">
              <span>上午09:30-12:30；</span>
              <span>下午13:30-18:30</span>
            </div>
          </div>
          <span>（周六、周日及节假日休息）</span>
        </div>

      </div>
      <h3>6、签证申请结果和有效期均以领馆最终签发为准。</h3> -->
    </div>

    <!-- <div style="height: 72px;"></div>
      <div class="btn flex align-middle space-between" style="background-color: #fff;">
        <m-button :status="1" color="#6D7278" width="45%" @close="back" title="退出" />
        <m-button :status="2" title="添加" @close="addClick" width="45%" />
      </div> -->
    <div class="line92"></div>
    <div class="btn">
      <m-button :status="1" color="#6D7278" @close="back" title="退出" />
    </div>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref, defineAsyncComponent, onBeforeMount } from "vue";
import { useToggle } from '@vant/use';
import { useRouter } from 'vue-router';
import { getPersonList } from '@/api/user'
import { removeLocalStorage } from '@/utils/storage'
import { setLocalStorage } from '@/utils/storage'
const router = useRouter();
// const addPersonDia = defineAsyncComponent(() => import('@/components/addPerson.vue'));
const MButton = defineAsyncComponent(() => import('@/components/m-button.vue'));
const personList = ref([] as EmptyArrayType)
let order_status = {
  1: "#FA6401",
  2: "#FF0000",
  3: "#4CAF50",
} as EmptyObjectType
let order_status2 = {
  1: "#6D7278",
  2: "#FA6401",
  3: "#0486FE",
  4: "#E02020",
  5: "#4CAF50"
} as EmptyObjectType
const [backShow, showToggle] = useToggle(false);
let order_status3 = {
  1: "#FA6401",
  2: "#4CAF50",
} as EmptyObjectType
// 退出
const back = () => {
  showToggle(true)
}
// 确认退出
const confirm = () => {
  showToggle(false)
  removeLocalStorage('anliMelToken')
  router.push({ name: 'login' })
}
// 新增人员
// let addPerson = ref()
// const addClick = () => {
//   addPerson.value.openDialog()
// }
// 去签字
const goRouter = (item: EmptyObjectType) => {
  let data = {
    name: item.brName,
    type: item.tr41,
    isAdult: item.isAdult,
    trid: item.trid,
    file: item.file
  }
  setLocalStorage('membertMsg', data)
  router.push({ name: 'signature' })
}
// 请求数据列表
let number = ref(0)
const getList = () => {
  getPersonList().then(res => {
    if (res.code == 0) {
      personList.value = res.data.passengerCollection
      number.value = res.data.brNumber
    }
  })
}
// 签证
const iframeClick = (brid: string, trid: string) => {
  // window.open(`https://e.mmice.com.cn/visa_info/transit.aspx?cid=18&gid=112&type=2&brid=${brid}&trid=${trid}&backurl=${window.location.href}`)
  window.location.href = (`https://e.mmice.com.cn/visa_info/transit.aspx?cid=18&gid=112&type=2&brid=${brid}&trid=${trid}&backurl=${window.location.href}`)
}
// 上传材料
const upClick = (id: number) => {
  router.push({ name: 'uploadCertificate', query: { id: id } })
}

const goview = (url: string): void => {

  window.location.href = window.origin + import.meta.env.VITE_BASE_URL + '/pdfJS/web/viewer.html?file=' + url;
}


// 下载文件
// const upLoad = (url: string) => { //直接将地址传进来即可
//   url = 'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf';
//   const x = new window.XMLHttpRequest();
//   x.open('GET', url, true);
//   x.responseType = 'blob'; //转换返回的格式
//   x.onload = () => {
//     const url = window.URL.createObjectURL(x.response);
//     const a = document.createElement('a');
//     console.log(url, 'url');

//     a.href = url;
//     a.download = 'dsad.pdf'
//     document.body.appendChild(a)
//     a.click();
//   };
//   x.send();
// }

onBeforeMount(() => {
  getList()
})
</script>

<style scoped lang="less">
.title_number {
  padding: 13px 24px;
  line-height: 24px;
  font-size: 18px;
  background-color: rgba(5, 145, 127, .6);
  color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: bold;
}

.person_list {
  // min-height: 70vh;
  font-size: 18px;
  overflow-y: auto;

  .list {
    width: 100%;
    border: 1px solid rgba(5, 145, 127, .3);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-bottom: 30px;

    &:first-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      .title {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }

    .title {
      padding: 13px 24px;
      line-height: 24px;
      background-color: rgba(5, 145, 127, .3);
      color: #5e5e5e;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      margin-bottom: 16px;

      .name {
        font-weight: bold;
        color: #000;
      }
    }

    :deep(.van-cell) {
      margin-bottom: 24px;
      font-size: 18px;
      color: #5e5e5e;
      padding: 20px 24px;

      &:last-child {
        margin-bottom: 0
      }
    }
  }
}

.home {
  .content {
    padding: 30px 24px;
    min-height: 70vh;
    // height: calc(100vh - 120px);
    // overflow-y: auto
  }

  .hint_title {
    font-size: 18px;
    padding: 0 24px;
    line-height: 24px;

    .inset-text {
      font-size: 14px;
    }

    h3 {
      color: #333;
      font-size: 16px;
      margin-top: 8px;
    }

    .li-text {
      color: #333;
      font-size: 16px;
    }

    label {
      color: #333;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      // text-indent: 1em;
    }


    span {
      font-size: 14px;
      display: inline-block
    }
  }

  .line92 {
    height: 110px;
  }

  .btn {
    background: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 24px
  }
}

:deep(.dia_close) {
  .txt {
    text-align: center;
    font-size: 16px;
    margin: 40px 24px 60px
  }

  .van-dialog__header {
    font-size: 18px;
  }
}

:deep(.van-nav-bar .van-nav-bar__title) {
  color: #fff;
}
</style>
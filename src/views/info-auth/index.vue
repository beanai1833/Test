<template>
    <div class="page" @scroll="onScroll" style="background-color: #EFEFEF">
        <div class="page-header">
            <van-nav-bar placeholder fixed title="信息授权" :border="false" />
        </div>

        <div class="page-body">
            <p class="title">个人信息保护告知书</p>
            <p>为了保护您的个人信息，新澳国际旅行社（上海）有限公司（以下简称“我们”）遵循《中华人民共和国网络安全法》《中华人民共和国个人信息保护法》等现行法律法规及相关政策要求，采取相应的措施严格保护您的个人信息安全。
            </p>
            <p class="black">
                我们为了接收澳大利亚签证申请业务收集个人信息，并根据合法程序收集、存储、使用、加工、传输、提供、公开、删除个人信息。在申请办理澳大利亚签证业务前，请您务必仔细阅读并理解本告知书的全部内容。</p>
            <p class="black">内容包括：</p>
            <ul>
                <li>一、我们如何收集和使用您的个人信息</li>
                <li>二、我们如何共享、公开您的个人信息</li>
                <li>三、我们如何保护您的个人信息</li>
                <li>四、您在个人信息处理活动中的权利</li>
                <li>五、我们如何处理未成年人的个人信息</li>
                <li>六、您如何撤回同意及更正、补充个人信息</li>
                <li>七、告知书、同意书如何更新</li>
                <li>八、如何联系我们</li>
            </ul>
            <p class="mt20 black">一、我们如何收集和使用您的个人信息</p>
            <p>我们收集与使用您的个人信息，是为了向您更好提供服务，避免重复提交相关信息和资料，也是为了防范身份冒用，在办理签证业务过程中更好保护您的个人隐私和商业秘密。</p>
            <p class="black">(一）个人信息与敏感个人信息</p>
            <p>个人信息是以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息。敏感个人信息是一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的个人信息，包括生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹等信息，以及不满十四周岁未成年人的个人信息。下文对以上两种信息统称为“个人信息”。
            </p>
            <p class="black">(二）个人信息的处理方式</p>
            <p>个人信息的处理方式包括个人信息的收集、存储、使用、加工、传输、提供、公开、删除等。</p>
            <p class="black">（三）需要提供的具体信息种类</p>
            <p>1.如果您希望更便利地办理澳大利亚签证申请业务，您需要提供姓名、护照信息、国籍、手机号码、经常居住地址和户籍所在地址等信息。</p>
            <p>2.根据不同的业务情形，您需要提供以下信息，如电子邮箱、个人履历、学历、职业、联系方式、资产现状、家族事项和申请签证所需的其他信息及资料（具体信息种类依签证类型而定）。</p>
            <p class="black">（四）其他</p>
            <p>当您与我们联系时，我们可能会保存您的通信/通话记录内容或您留下的联系方式等信息，以便与您联系或帮助您解决问题。</p>
            <p class="mt20 black">二、我们如何共享、公开您的个人信息</p>
            <p class="black">(一）共享</p>
            <p>我们不会向澳大利亚领馆以外的第三方共享您的个人信息，但以下情况除外：</p>
            <p>1.在获取明确同意的情况下提供：获得您的单独同意后，我们会向第三方共享您的个人信息，并向您告知第三方个人信息处理者的名称或者姓名、联系方式、处理目的、处理方式和个人信息的种类。如为提供申请签证服务，我们将向澳大利亚驻华使领馆共享您申请签证的必要信息。
            </p>
            <p>2.法定情形下的共享：我们可能会根据法律法规的规定或按行政、司法等机关依法提出的要求，向相关部门共享您的个人信息而无需征得您的同意。</p>
            <p>3.向被授权方提供：仅为实现本告知书中声明的目的，我们的某些服务将由我们和被授权方共同提供。我们仅会出于合法、正当、必要、特定、明确的目的提供您的个人信息，并且只会提供业务所必要的个人信息。我们的被授权方无权将提供的个人信息用于业务无关的其他用途。如果您同意向第三方授权，将视为您已允许第三方获取您的个人信息；对于您在使用该第三方服务时产生的信息，请您参考第三方服务提供者的相关服务协议及隐私政策中关于信息收集和使用、保管、共享的相关约定。
            </p>
            <p>4.我们可能会向移动运营商提供您的部分信息，以便进行身份验证或向您的移动设备发送消息或服务通知。</p>
            <p class="black">(二）公开</p>
            <p>我们仅会在以下情况下，公开您的个人信息：1.依法依规进行公开。2.出现违法违规或违反本告知书的情况，我们可能依法或依据本告知书披露您的相关个人信息，包括相关违法违规行为。</p>
            <p class="black">(三）共享、公开个人信息时事先征得同意的例外</p>
            <p>根据相关法律法规，在以下情形中，共享、公开您的个人信息无需事先征得您的授权同意：</p>
            <p>1.为订立、履行个人作为一方当事人的合同所必需；</p>
            <p>2.为履行法定职责或者法定义务所必需；</p>
            <p>3.为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需；</p>
            <p>4.为公共利益实施新闻报道、舆论监督等行为，在合理范围内处理个人信息；</p>
            <p>5.依照规定在合理的范围内处理个人自行公开或者其他已经合法公开的个人信息；</p>
            <p>6.法律、行政法规规定的其他情形。</p>
            <p class="black">三、我们如何保护您的个人信息</p>
            <p>我们努力为申请人的信息安全提供保障，以防止信息的丢失、不当使用、未经授权访问或公开。</p>
            <p>（一）为了保障您的信息安全，我们将在法律法规和现有技术水平下使用符合相关标准的安全保护措施保护您提供的个人信息，采取技术和管理措施降低丢失、误用、非授权访问、公开和修改的风险，尽力防止数据遭到未经授权的访问、公开、使用、修改、损坏或丢失。
            </p>
            <p>（二）建立专门管理制度以保障信息的安全，对个人信息实行分类管理。严格限制访问信息的人员范围，定期对信息管理人员进行安全教育和培训。采取相应的加密、去标识化等安全技术措施，制定并组织实施个人信息安全事件应急预案。定期对其处理个人信息遵守法律、行政法规的情况进行合规审计，必要时事前进行个人信息保护影响评估，并对处理情况进行记录。
            </p>
            <p>（三）由于技术水平限制及可能存在的各种恶意手段，安全问题有可能因我们可控范围外的因素而出现。在发生个人信息安全事件后，我们将按照相关法律法规及监管政策的要求，及时向您告知。难以逐一告知个人信息主体时，我们会采取合理方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。
            </p>
            <p>（四）我们在运营中收集和产生的个人信息，存储在中华人民共和国境内。为保护您的数据安全，备份数据也将在中华人民共和国境内转移。非经中华人民共和国主管机关批准，我们不会向外国司法或者执法机构提供存储于中华人民共和国境内的个人信息。
            </p>
            <p class="mt20 black">四、您在个人信息处理活动中的权利</p>
            <p>（一）除法律另有规定外，您有权查阅、复制您的个人信息，对信息处理享有知情权、决定权，有权限制或者拒绝他人对您的个人信息进行处理。</p>
            <p>（二）您发现您的个人信息不准确或者不完整时，有权请求更正、补充。我们对您的个人信息予以核实，并及时更正、补充。</p>
            <p class="mt20 black">五、我们如何处理未成年人的个人信息</p>
            <p>如您为未成年人，请您的父母或法定监护人仔细阅读本告知书，并由您的父母或法定监护人确定是否提供您的个人信息。对于经父母或法定监护人同意而收集未成年人信息的情况，我们只会在受到法律允许、父母或法定监护人明确同意或者保护未成年人所必要的情况下处理相关信息。
            </p>
            <p class="mt20 black">六、您如何撤回同意及更正、补充个人信息</p>
            <p>根据《中华人民共和国个人信息保护法》等现行法律法规及相关政策规定，基于个人同意处理个人信息的，在信息保存期内个人有权撤回。您可以凭有效身份证件信息申请撤回已签署同意的《个人信息处理同意书》。若您选择撤回《个人信息处理同意书》，我们将删除您提供的原个人信息。已办结的签证申请不受影响，但未办结的签证申请将视情况转为待申请/审核状态。
            </p>
            <p class="mt20 black">七、告知书、同意书如何更新</p>
            <p>在相关法律法规发生变化或相关签证业务发生变动等必要情形下，我们将适时对告知书、同意书做出修改，并取代此前相关内容。</p>
            <p class="mt20 black">八、如何联系我们</p>
            <p>如果您对告知书、同意书有任何疑问、意见或建议，可以通过客服热线电话与我们联系，电话： 021-61611822时间：周一至周五：09:30-12:30 至13:30-18:30，周六、周日及节假日休息</p>
            <p class="title mt20">个人信息处理同意书</p>
            <p>为了接收澳大利亚签证申请业务并切实保护您的个人信息，根据《中华人民共和国个人信息保护法》等法律法规及政策要求，新澳国际旅行社（上海）有限公司（以下简称“我们”）将处理您的个人信息,包括但不限于姓名、护照信息、联系方式、地址及邮箱、个人履历、学历、职业、联系方式、资产现状、家族事项和您为申请签证所提供的其他信息及资料（具体信息种类依签证类型而定）。我们将按照相关制度要求通过收集、存储、使用、加工、传输、提供、公开、删除等方式处理您的个人信息，详见《个人信息保护告知书》正文。我们在收集个人信息的过程中，不存在任何欺骗、隐瞒、强制等行为，不存在任何刻意隐瞒收集个人信息的情况。我们禁止通过非法渠道处理个人信息，不会做任何法律法规禁止的处理行为。我们提供的个人信息仅用于申请澳大利亚签证、提供相关统计数据及服务，不用于除此之外的其他目的。除法律规定的特殊情况外，未经您的书面同意，不会向澳大利亚领馆以外的第三方共享您的个人信息。
            </p>
            <!-- <div>
                <div class="mb10 check">
                    <van-checkbox  icon-size="14px" shape="square" v-model="checked">
                        <span class="font12 black" style="vertical-align: middle;">本人已充分理解并确认《个人信息保护告知书》和《个人信息处理同意书》的全部内容，同意提交申请签证所需的各种信息，以及各种证明材料的原件和复印件</span>
                    </van-checkbox>
                </div>
                <van-button @click="toNext" block type="primary" loading-type="circular" loading-size="24px"
                    :disabled="!checked">
                    下一步
                </van-button>
            </div> -->
        </div>

        <div class="page-footer borderColor">
            <div class="mg-b20 check">
                <van-checkbox style="line-height: 36px;" icon-size="14px" shape="square" v-model="checked">
                    <span class="font12 black"
                        style="vertical-align: middle;">本人已充分理解并确认《个人信息保护告知书》和《个人信息处理同意书》的全部内容，同意提交申请签证所需的各种信息，以及各种证明材料的原件和复印件</span>
                </van-checkbox>
            </div>
            <van-button @click="toNext" block type="primary" loading-type="circular" loading-size="24px"
                :disabled="!checked || countTime > 0 || !sollEnd"
                :color="(!checked || countTime > 0 || !sollEnd) ? '#999999' : ''">
                下一步 <span v-if="countTime > 0">（{{ countTime }}）</span>
            </van-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { putStatement } from "@/api/user";
import { showToast } from 'vant';
const router = useRouter();
// const soll = ref<number>(0);
const checked = ref<boolean>(false);
const sollEnd = ref<boolean>(false);


let countTime = ref(10)
// let countTime = ref(0)
const countdown = (isRun: Boolean) => {
    if (isRun == true) {
        countTime.value = 10;  //初始化60秒倒计时
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

onMounted(() => {
    setTimeout(() => {
        countdown(true);
    }, 1000)
})

const onScroll = (e: Event) => {
    console.log(e);
    const { scrollTop, scrollHeight, clientHeight } = e.target as any;
    if (scrollHeight - (scrollTop + clientHeight) <= 180) {
        console.log('滚动到底部了');
        sollEnd.value = true;
    }
}

const toNext = () => {
    putStatement().then(res => {
        if (res.code == 0) {
            router.push({
                name: 'person'
            })
        } else {
            showToast(res.message)
        }
    })
}
</script>

<style scoped lang="less">
.page-body {
    font-size: 12px;
    padding-bottom: 200px;
    color: #333;
    background-color: #fff;
    overflow: auto;

    .title {
        text-align: center;
        color: #000;
        font-weight: bold;
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

    // .check {
    //     margin-top: 5px;
    //     :deep(.van-checkbox) {
    //         align-items: flex-start;
    //     }
    //    :deep(.van-checkbox__label) {
    //     line-height: 1.5;
    //    }
    //    :deep(.van-checkbox__icon) {
    //     padding-top: 5px;
    //    }
    //  }
}

.black {
    color: #000;
    font-weight: bold
}

.check {
    :deep(.van-checkbox) {
        align-items: flex-start;
    }

    :deep(.van-checkbox__label) {
        line-height: 1.5;
    }

    :deep(.van-checkbox__icon) {
        padding-top: 5px;
    }
}
</style>
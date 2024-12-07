<template>
  <div class="login flex  flex-column space-between home text-center">
    <div style="height: inherit;">
      <header class="header">
        <img alt="" src="@/assets/image/logo.png" />
      </header>

      <!-- <strong class="title1">澳大利亚签证办理</strong>

      <p class="title2">安利2025墨尔本专案</p> -->

      <van-form @submit="onSubmit" ref="loginForm">
        <div class="form-item mg-r-l-24 text-left">
          <label class="mg-b16 font14 color-rgb94" style="display: inline-block;">手机号码</label>
          <van-field class="border-bottom1" type="tel" style="padding:0 0 8px 0;" border v-model="form.phone" name="手机号"
            placeholder="手机号" right-icon="phone-o"
            :rules="[{ required: true, message: '请填写手机号' }, { validator, message: '手机格式不正确' }]">
            <template #label>
              <van-field @click="showPickerToggle(true)" readonly class="pd0 font14" v-model="activeCode"
                input-align="top" right-icon="arrow-down" />
            </template>
          </van-field>
        </div>

        <div style="margin-top:28px;" class="mg24">
          <van-button block type="primary" loading-type="circular" loading-text="发送验证码" :disabled="disabled"
            :loading="loading" native-type="submit">
            {{ time > 0 ? time + 'S 重新发送' : '发送验证码' }}
          </van-button>
        </div>
      </van-form>

      <div class="login-tips mg-r-l-24 ">
        <div class="login-tips-item flex">
          <label style="flex-shrink: 0;">手机号码：</label>
          <p style="text-align: left;">请输入“安利带你看世界”系统报名时填写的手机号码</p>
        </div>
        <!-- <div class="login-tips-item flex align-middle text-left">
          <label>开放时间：</label>
          <p class="flex-1">2024年9月30日至12月30日</p>
        </div> -->
        <div class="login-tips-item flex align-middle">
          <label>服务电话：</label>
          <p>021-61611822</p>
        </div>
        <div class="login-tips-item flex text-left">
          <label style="flex-shrink: 0;">服务时间：</label>
          <div>
            <div class="flex">周一至周五：
              <div>
                <p>上午09:30-12:30 </p>
                <p>下午13:30-18:30</p>
              </div>
            </div>
            <p>周六、周日及节假日休息</p>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="login-footer text-center">
      <unline-text size="14px" color="#333333">登录遇到问题?</unline-text>
    </div> -->

    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker v-model="form.countryCode" :columns-field-names="{ value: 'id' }" :columns="columns"
        @confirm="onConfirm" @cancel="showPickerToggle(false)">
      </van-picker>
    </van-popup>

    <check-code v-model:show="showCode" v-model:time="time" :countryCode="form.countryCode[0]"
      :phone="form.phone"></check-code>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
import { reactive, ref, computed } from 'vue';
import { useToggle } from '@vant/use';
import { FormInstance, PickerConfirmEventParams, PickerOption } from 'vant';
import country from "@/json/country.json";
import { type LoginData, loginPassword } from "@/api/user";
import validate from "@/utils/ys-validate";
import { showToast } from 'vant';

// import { useUserStore } from '@/store/modules/user';

// const userStore = useUserStore(); 
export type LoginForm = {
  countryCode: number[]
} & Omit<LoginData, 'countryCode'>

const loginForm = ref<FormInstance>();

const [loading, loadingToggle] = useToggle();
const [showPicker, showPickerToggle] = useToggle(false);
const [showCode, showCodeToggle] = useToggle(false);

const form = reactive<LoginForm>({
  phone: '',
  countryCode: [86]
})

let time = ref<number>(0);

const columns: PickerOption[] = country.map(item => ({
  ...item,
  text: item.name + ' + ' + item.id
}));


const activeCode = computed(() => '+ ' + form.countryCode[0]);
const disabled = computed(() => time.value > 0);

const validator = () => validate.isAllPhone(form.phone, form.countryCode[0]);

const onConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
  form.countryCode = selectedValues as number[];
  showPickerToggle(false)
};

const onSubmit = async () => {
  await loginForm.value?.validate();
  loadingToggle(true)
  let data = {
    countryCode: form.countryCode[0],
    phone: form.phone
  }
  loginPassword(data).then(res => {
    if (res.code == 0) {
      showCodeToggle(true)
    } else {
      showToast(res.message);
    }
  }).finally(() => loadingToggle(false))
};
</script>

<style scoped lang="less">
.login {
  height: 100%;

  .header {
    padding: 70px 24px;
    text-align: center;

    img {
      width: 100%;
    }
  }


  &-tips {
    margin-top: 40px;
    font-size: 16px;
    color: rgb(94, 94, 94);

    &-item {
      margin-bottom: 4px;
    }
  }

  &-footer {
    padding-top: 30px;
    padding-bottom: 50px;
  }


  .title1 {
    color: #05917F;
    font-size: 24px;
  }

  .title2 {
    font-size: 20px;
    margin: 30px 0 70px;
  }

  :deep(.van-button) {
    border-radius: 6px;
    font-size: 18px;
  }

}
</style>

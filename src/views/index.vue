<template>
  <div class="home text-center">
    <header class="header" style="width: 100%; text-align: center">
      <img alt="" src="../assets/logo.png" />
    </header>
    <strong class="title1">澳大利亚签证办理</strong>
    <p class="title2">安利2025墨尔本专案</p>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="form.phone"
          name="手机号"
          placeholder="手机号"
          right-icon="phone-o"
          :rules="[{ required: true, message: '请填写手机号' }]"
        >
        <template #label>
          <van-field v-model="form.phoneCode"  input-align="top" placeholder="+ 86" right-icon="arrow-down"/>
        </template>
        </van-field>
    
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button square block type="primary"  loading-type="circular" loading-size="24px" loading-text="发送验证码" :loading="loading" native-type="submit">
          发送验证码
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup name="index">
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router'
  let color = ref('red')
  const router = useRouter()
  let form = reactive({
    phone:'',
    phoneCode:''
  })
  let loading = ref(false)
  const onSubmit = () => {
    console.log(form);
    loading.value = true
    setTimeout(() => {
      router.push({name:'Person'})
      loading.value = false
    },2000)
  }
</script>

<style scoped lang="less">
  .text-color {
    color: v-bind(color);
    font-size: 43px
  }
  .header {
    margin: 70px 0 40px;
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
</style>

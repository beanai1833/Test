<template>
	<van-popup v-model:show="props.show" @open="onOpen" position="right" class="check-code-pop text-left">
		<div class="header">
			<van-nav-bar left-arrow :border="false" @click-left="backShow" style="background-color: initial;">
			</van-nav-bar>
		</div>

		<div class="body pd24 pd-t0">
			<h2 class="title mg-t24 text-left">输入验证码</h2>

			<div class="tips font14 mg-b24">
				<p class="color-rgb94" style="line-height: 20px;"> 验证码已发送至</p>
				<p style="line-height: 20px;">+ {{ props.countryCode }} {{ props.phone }}</p>
			</div>

			<div style="position: relative;">
				<van-password-input :mask="false" :length="codeMaxLength" gutter="10px" style="margin: 0;"
					:value="checkCode?.toString()" :focused="showKeyboard" @focus="showKeyToggle(true)">
				</van-password-input>
				<input maxlength="6" @input="onInput" class="code-input" v-model="checkCode"
					@focus="showKeyToggle(true)" />
			</div>


			<!-- <van-number-keyboard :maxlength="4" v-model="checkCode" :show="showKeyboard" @blur="showKeyToggle(false)" /> -->

			<p class="font14 color-rgb94" style="margin-top: 32px;">
				<template v-if="!isFinish"> <van-count-down @change="onCountDownChange" ref="countDownRef"
						style="display: inline-block;" format="ss" :time="time"
						@finish="setIsFinish(true)" />秒后重新发送</template>
				<template v-else>
					<span style="color: initial;" @click="handleSend">点击重新发送</span>
				</template>
			</p>
		</div>

		<div class="mg16" style="margin-top: 0;">
			<van-button block type="primary" :disabled="disabled" loading-type="circular" :loading="loginLoading"
				loading-text="登录" @click="login">
				登录
			</van-button>
		</div>

	</van-popup>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useToggle } from '@vant/use';
import { type LoginData, loginPhone, loginPassword } from "@/api/user";
import { useRouter } from "vue-router";
import { closeToast, CountDownInstance, showLoadingToast } from 'vant';
import { showToast } from 'vant';
import { setLocalStorage } from '@/utils/storage'

export interface Props extends LoginData {
	size?: string
	color?: string
	show: boolean
	time: number | string
}

const props = withDefaults(defineProps<Props>(), {
	size: '16px',
	color: '#000000',
	countryCode: 86
})

const emit = defineEmits(['update:show', 'update:time'])

const router = useRouter();

const countDownRef = ref<CountDownInstance>();

const [loginLoading, loginLoadingToggle] = useToggle(false)
const [showKeyboard, showKeyToggle] = useToggle(false)
const [isFinish, setIsFinish] = useToggle(false)

const checkCode = ref<string | number | undefined>();
const codeMaxLength = ref<number>(6);
let time = ref<number>(60 * 1000);

const disabled = computed(() => checkCode.value?.toString()?.length !== codeMaxLength.value)

const onOpen = () => {
	countDownRef.value?.start();
	setIsFinish(false);
}

const login = async () => {
	console.log(time.value);
	loginLoadingToggle(true)
	try {
		let data = {
			countryCode: props.countryCode,
			phone: props.phone,
			code: checkCode.value
		}
		const res = await loginPhone(data);
		if (res.code == 0) {
			if (res.data.tr16 == 0) {
				router.push({
					name: 'auth'
				});
			} else {
				router.push({
					name: 'person'
				});
			}
			setLocalStorage('anliMelToken', res.data.accessToken)
		} else {
			showToast(res.message);
		}
	} finally {
		loginLoadingToggle(false)
	}
}

const onCountDownChange = (currentTime: Record<string, any>) => {
	const { seconds } = currentTime;
	emit('update:time', seconds);
}
// 返回输入电话页面
const backShow = () => {
	emit('update:show', false)
	checkCode.value = ''
}


const onInput = () => {
	if (checkCode.value && checkCode.value?.toString().length > codeMaxLength.value) {
		checkCode.value = checkCode.value?.toString().substring(0, codeMaxLength.value);
	}
}

const handleSend = () => {
	// time.value = 60 * 1000;
	countDownRef.value?.start();
	showLoadingToast({
		message: '发送中',
		forbidClick: true,
	});

	try {
		let data = {
			countryCode: props.countryCode,
			phone: props.phone
		}
		loginPassword(data).then(res => {
			if (res.code == 0) {
				showToast('发送成功');
			} else {
				showToast(res.message);
			}
		})
	} finally {
		setTimeout(() => {
			setIsFinish(false)
			closeToast();
		}, 1000)

	}
}
</script>

<style lang="less" scoped>
.check-code-pop {
	height: 100%;
	width: 100vw;

	.body {
		// padding: 16px;

		.title {
			font-size: 24px;
			font-family: bold;
			margin-bottom: 64px;
		}

		.code-input {
			height: 50px;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
		}

	}

	:deep(.van-password-input__security li) {
		border: 1px solid #5E5E5E;
		border-radius: 8px;
		height: 55px;
		width: 55px;
	}
}
</style>
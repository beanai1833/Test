<template>
    <van-button :type="type" class="btn_size" :style="{ width, height }" :loading="loading" :loading-text="title"
        :color="color" @click="clickSub">
        <template #icon>
            <img v-if="status == 1" src="../assets/image/back.png" alt="">
            <img v-if="status == 2" src="../assets/image/add.png" alt="">
        </template>
        {{ title }}
    </van-button>
</template>

<script lang="ts" setup>
//    import { useRouter } from 'vue-router';
//         const router = useRouter();
const props = defineProps({
    // 列表内容
    loading: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },
    src: {
        type: String,
        default: '',
    },
    width: {
        type: String,
        default: '100%',
    },
    height: {
        type: String,
        default: '48px',
    },
    size: {
        type: String,
        default: '18px',
    },
    color: {
        type: String,
        default: '',
    },
    type: {
        type: String as any,
        default: 'primary',
    },
    status: {
        type: Number,
        default: 0,
    },
});
const emit = defineEmits(['close']);
const clickSub = () => {
    emit('close');
    console.log(props);

}
</script>

<style scoped lang="less">
.btn_size {
    :deep(.van-button__text) {
        font-size: 18px;
        line-height: 1;
    }

    :deep(.van-button__icon) {
        line-height: 0.8;
    }
}
</style>
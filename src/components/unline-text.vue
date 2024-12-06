<template>
	<div class="unline-text" :style="{ color }" @click="$emit('click')">
		<text class="text" :style="{ color: props.color, fontSize: props.size }">
			<slot></slot>
		</text>
		<div class="line" :style="{ backgroundColor: props.color }">
		</div>
	</div>
</template>

<script setup lang="ts">
export interface Props {
	size?: string
	color?: string
}

const props = withDefaults(defineProps<Props>(), {
	size: '16px',
	color: '#000000'
})

</script>

<script lang="ts">
export default {
	name: 'unlineText'
}
</script>


<style lang="less" scoped>
.unline-text {
	display: inline-block;
	width: auto;
	color: rgb(94, 94, 94);

	.text {
		color: inherit;
		font-size: 16px;
		font-weight: 400;
	}

	.line {
		color: inherit;
		width: inherit;
		height: 1px;
	}
}
</style>
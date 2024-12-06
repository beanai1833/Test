<template>
    <div class="page">
        <div class="page-header">
            <van-nav-bar left-arrow placeholder fixed :title="navTitle" :border="false" @click-left="onBack" />
        </div>
        <div class="pdf-container " ref="pdfContainer">
            <!-- <canvas :id="`pdf-canvas`" /> -->
        </div>
        <!-- <div class="page-tool">
            <div class="page-tool-item" @click="lastPage">上一页</div>
            <div class="page-tool-item" @click="nextPage">下一页</div>
            <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
            <div class="page-tool-item" @click="pageZoomOut">放大</div>
            <div class="page-tool-item" @click="pageZoomIn">缩小</div>
        </div> -->
    </div>
</template>

<script lang="ts" setup>

import * as PDFJS from 'pdfjs-dist'
import * as PdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url'
import { showLoadingToast, showToast } from 'vant';
import { windowWidth } from 'vant/lib/utils';
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const pdfContainer = ref<HTMLElement | null>();

const state = reactive({
    source: "", //预览pdf文件地址
    pageNum: 1, //当前页面
    scale: 1, // 缩放比例
    numPages: 0, // 总页数
    showpdf: true,
});

const navTitle = ref<string>();
let pdfDoc: any = null;
const pdfPages = ref<number>(0)
const pdfScale = ref<number>(1)
const pages = ref<any>([]);

onMounted(() => {
    loadFile(atob(route.query.file as string));
    navTitle.value = route.query.pdf_name as string;

})


const loadFile = async (url: string) => {
    const loadingToast = showLoadingToast({
        message: '加载中',
        forbidClick: true
    })
    // 设定pdfjs的 workerSrc 参数

    PDFJS.GlobalWorkerOptions.workerSrc = PdfWorker.default;
    const loadingTask = PDFJS.getDocument(url)
    loadingTask.promise.then(async (pdf: any) => {
        pdfDoc = pdf // 保存加载的pdf文件流
        state.numPages = pdfPages.value = pdfDoc.numPages // 获取pdf文件的总页数
        for (let index = 1; index <= pdf.numPages; index++) {
            //渲染所有页面
            renderPage(index, pdf) // 将pdf文件内容渲染到canvas
            // await nextTick(() => {
            //     //渲染所有页面
            //     renderPage(index, pdf) // 将pdf文件内容渲染到canvas
            // })
            // renderPage(1) // 将pdf文件内容渲染到canvas
        }
        loadingToast.close()
    }).catch((error: any) => {
        loadingToast.close()
        showToast({ message: "访问失败！请稍后重试" })
        //可以用自己组件库弹出提示框
        console.log(error)
    })
}

const renderPage = (num: any, _pdfDoc?: any) => {
    if (!_pdfDoc) return;
    _pdfDoc.getPage(num).then(async (page: any) => {
        page.cleanup()
        // const canvas: any = document.getElementById(`pdf-canvas`)
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d')

            const outputScale = window.devicePixelRatio || 1;

            const desiredWidth = windowWidth.value;
            const viewport = page.getViewport({ scale: pdfScale.value, });
            const scale = desiredWidth / viewport.width;
            const scaledViewport = page.getViewport({ scale: scale, });


            canvas.width = Math.floor(scaledViewport.width * outputScale);
            canvas.height = Math.floor(scaledViewport.height * outputScale);
            canvas.style.width = Math.floor(scaledViewport.width) + "px";
            canvas.style.height = Math.floor(scaledViewport.height) + "px";
            canvas.style.marginBottom = '16px';
            canvas.style.borderBottom = '1px solid #EEEEEE';

            pdfContainer.value?.appendChild(canvas);

            const transform = outputScale !== 1
                ? [outputScale, 0, 0, outputScale, 0, 0]
                : null;

            const renderContext = {
                canvasContext: ctx,
                transform: transform,
                viewport: scaledViewport
            };
            const renderTask = page.render(renderContext)

            renderTask.promise.then(function () {
                console.log('Page rendered');
            });

            state.pageNum = num;

            pages.value.push(page);
            // if (num < pdfPages.value) {
            //   renderPage(num + 1)
            // }
        }
    })
}
// function lastPage() {
//     if (state.pageNum > 1) {
//         renderPage(state.pageNum - 1);
//     }
// }
// function nextPage() {
//     if (state.pageNum < state.numPages) {
//         renderPage(state.pageNum + 1);
//     }
// }
// function pageZoomOut() {
//     if (pdfScale.value < 5) {
//         pdfScale.value += 0.1;
//         renderPage(state.pageNum);
//     }
// }
// function pageZoomIn() {
//     if (pdfScale.value > 0.5) {
//         pdfScale.value -= 0.1;
//         renderPage(state.pageNum);
//     }
// }

// 实现缩放功能的函数
// function zoomPages() {
//     // 假设你有一个canvas容器数组，与页面数量相同
//     const canvases = document.querySelectorAll('.pdf-container canvas');
//     console.log(canvases[0]);

//     pages.value.forEach(function (page: any, index: number) {
//         const canvas = canvases[index] as HTMLCanvasElement;
//         const outputScale = window.devicePixelRatio || 1;

//         const desiredWidth = windowWidth.value;
//         const viewport = page.getViewport({ scale: pdfScale.value, });
//         const scale = desiredWidth / viewport.width;
//         const scaledViewport = page.getViewport({ scale: scale, });


//         canvas.width = Math.floor(scaledViewport.width * outputScale);
//         canvas.height = Math.floor(scaledViewport.height * outputScale);
//         canvas.style.width = Math.floor(scaledViewport.width) + "px";
//         canvas.style.height = Math.floor(scaledViewport.height) + "px";
//         console.log(page);

//         // canvas.style.marginBottom = '16px';
//         // canvas.style.borderBottom = '1px solid #EEEEEE';

//         // pdfContainer.value?.appendChild(canvas);

//         // renderTask.promise.then(function () {
//         //     console.log('Page rendered');
//         // });
//     });
// }

// function lastPage() {
//     if (state.pageNum > 1) {
//         renderPage(state.pageNum - 1);
//     }
// }
// function nextPage() {
//     if (state.pageNum < state.numPages) {
//         renderPage(state.pageNum + 1);
//     }
// }
// async function pageZoomOut() {
//     if (pdfScale.value < 5) {
//         pdfScale.value += 0.1;
//         zoomPages();
//     }
// }
// function pageZoomIn() {
//     if (pdfScale.value > 0.5) {
//         pdfScale.value -= 0.1;
//         // renderPage(state.pageNum);
//         zoomPages();
//     }
// }

const onBack = () => router.back();

// const debouncedLoadFile = debounce((pdf: any) => loadFile(pdf), 1000)
// watch(() => props.pdf, (newValue: any) => {
//     !isEmpty(newValue) && debouncedLoadFile(newValue)
// }, {
//     immediate: true
// })
</script>

<style scoped lang="less">
.page-tool {
    position: fixed;
    bottom: 35px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    background: rgb(66, 66, 66);
    color: white;
    border-radius: 19px;
    z-index: 100;
    cursor: pointer;
    margin-left: 50%;
    transform: translateX(-50%);
}

.page-tool-item {
    padding: 8px 15px;
    padding-left: 10px;
    cursor: pointer;
}

.pdf-container {
    width: 100%;
    // height: 100vh;
    resize: both;
    // overflow: auto;
    /* 启用滚动条 */
}
</style>
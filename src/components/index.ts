import { AsyncComponentLoader, createApp, defineAsyncComponent } from 'vue'

const app = createApp({})

// 寻找所有组件
// const Components = require.context('./', true, /\.vue/)
const components = import.meta.glob("./**/*.vue");
// console.log(components);

for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
    console.log(name);
    app.component(name, defineAsyncComponent(value as AsyncComponentLoader));
}

<template>
  <h3>1、响应式api: ref, reactive, 浅层响应性: shallowRef shallowReactive</h3>
  <pre>
    const state = shallowRef({ count: 1 })

    // 不会触发更改
    state.value.count = 2

    // 会触发更改
    state.value = { count: 2 }
  </pre>
  <pre>
    // reactive结构丢失响应式
    const state = reactive({ count: 0 })

    // 当解构时,count 已经与 state.count 断开连接
    let { count } = state
    // 不会影响原始的 state
    count++

  </pre>
  <h3>2、更新时机: await nextTick()</h3>
  <h3>3、计算属性:compoted(不要在 getter 中做异步请求或者更改 DOM)</h3>
  <h3>绑定类和样式</h3>
  <pre>
    :class="{ active: isActive, 'text-danger': hasError }"
    :class="[activeClass, errorClass]"
    :class="[{ active: isActive }, errorClass]
    // style
    :style="{ color: activeColor, fontSize: fontSize + 'px' }
    :style="styleObject"
    const styleObject = reactive({
      color: 'red',
      fontSize: '13px'
    })
    :style="[baseStyles, overridingStyles]"
  </pre>
</template>
<script setup>
import { reactive } from 'vue';
let state = reactive({ count: 0 });

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = { count: 1 };
</script>

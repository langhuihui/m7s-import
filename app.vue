<script lang="ts" setup>
  import './assets/css/reset.less'
  import './assets/iconfont/iconfont.css'
  import 'element-plus/dist/index.css'
  const show = ref(false)
  setTimeout(() => {
    show.value = true
  }, 0)
</script>

<template>
  <div v-if="show">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

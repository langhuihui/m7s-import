<template>
  <div class="app">
    <Head></Head>
    <div class="app-main">
      <slot />
    </div>
    <div class="app-footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
  var _LTracker = _LTracker || []
  _LTracker.push({
    logglyKey: '758a662d-f630-40cb-95ed-2502a5e9c872',
    sendConsoleErrors: true,
    tag: 'homepage',
  })
</script>

<style lang="less" scoped>
  .app {
    min-height: 100vh;
    position: relative;
    &-main {
      min-height: calc(100vh - 245px);
      padding-bottom: 116px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-footer {
    }
  }
</style>

<template>
  <div>
    <!-- 头部 -->
    <Head></Head>
    <slot />
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>
<script>
  var _LTracker = _LTracker || []
  _LTracker.push({
    logglyKey: '758a662d-f630-40cb-95ed-2502a5e9c872',
    sendConsoleErrors: true,
    tag: 'homepage'
  })
</script>

<template>
  <a class="VPNavBarTitle" href="/">
    <Logo></Logo>
    <div class="logo">Monibuca</div>
  </a>
</template>

<script lang="ts" setup>
import { Logo } from '@m7s/ui/vue'
</script>


<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  font-size: 30px;
  position: relative;
}
::v-deep .cls-1 {
  color: #000 !important;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>

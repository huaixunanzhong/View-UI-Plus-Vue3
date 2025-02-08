<script lang="ts" setup>
import Logo from './Logo.vue'
</script>

<template>
  <div>
    <div
      :class="{ 'i-layout-sider-logo-dark': true }"
      class="i-layout-sider-logo"
    >
      <transition name="fade-quick">
        <Logo :hideLogo="false" :menuCollapse="true" :siderTheme="'dark'" />
      </transition>
    </div>
  </div>
</template>

<style scoped></style>

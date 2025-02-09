<script lang="ts" setup>
import { useLayoutStore } from '@/store'
import IMenu from './IMenu.vue'
import Logo from './Logo.vue'

interface Props {
  hideLogo: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hideLogo: false
})

const layoutStore = useLayoutStore()
const { siderTheme, menuCollapse, menuAccordion } = layoutStore.layoutSetting
</script>

<template>
  <div>
    <div
      :class="{ 'i-layout-sider-logo-dark': siderTheme === 'dark' }"
      class="i-layout-sider-logo"
    >
      <transition name="fade-quick">
        <Logo
          :hide-logo="props.hideLogo"
          :menu-collapse="menuCollapse"
          :sider-theme="siderTheme"
        />
      </transition>
    </div>
    <IMenu
      :menu-accordion="menuAccordion"
      :menu-collapse="menuCollapse"
      :sider-theme="siderTheme"
    />
  </div>
</template>

<style scoped></style>

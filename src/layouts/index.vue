<script lang="ts" setup>
import MenuSide from '@/layouts/components/menu-side/index.vue'
import Setting from '@/setting'
import { useLayoutStore, useMenuStore } from '@/store'

const layoutStore = useLayoutStore()
const { layoutSetting } = layoutStore
const menuStore = useMenuStore()
const { menuSetting } = menuStore

const headerVisible = ref(true)

const isHeaderStick = computed(() => {
  let state = layoutSetting.headerStick
  if (menuSetting.hideSider) state = true
  return state
})
const showHeader = computed(() => {
  let visible = true
  if (
    layoutSetting.headerFix
    && layoutSetting.headerHide
    && !headerVisible.value
  ) {
    visible = false
  }
  return visible
})
const isMobile = computed(() => layoutSetting.isMobile)
const hideSider = computed(() => menuSetting.hideSider)
const siderClasses = computed(() => ({
  'i-layout-sider-fix': layoutSetting.siderFix,
  'i-layout-sider-dark': layoutSetting.siderTheme === 'dark'
}))
const menuSideWidth = computed(() =>
  layoutSetting.menuCollapse ? 80 : Setting.menuSideWidth
)
</script>

<template>
  <Layout class="i-layout">
    <Sider
      v-if="!isMobile && !hideSider"
      :class="siderClasses"
      :width="menuSideWidth"
      class="i-layout-sider"
    >
      <MenuSide
        :hide-logo="isHeaderStick && layoutSetting.headerFix && showHeader"
      />
    </Sider>
    <Layout class="i-layout-inside">
      <Content class="i-layout-content">
        <div class="i-layout-content-main">
          <router-view />
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<style lang="less" scoped>
.i-layout-content:has(div.ivu-footer-toolbar) {
  padding-bottom: 80px;
}
</style>

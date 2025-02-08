<script lang="ts" setup>
import MenuSide from '@/layouts/components/menu-side/index.vue'

const menuSideWidth = computed(() => 80)
</script>

<template>
  <Layout class="i-layout">
    <Sider :width="menuSideWidth" class="i-layout-sider">
      <MenuSide />
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

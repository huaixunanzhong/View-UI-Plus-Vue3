<script lang="ts" setup>
import IMenuItem from './IMenuItem.vue'
import IMenuTitle from './IMenuTitle.vue'

interface Props {
  menu: Sider
  badge: Record<string, any>
}

const props = defineProps<Props>()
</script>

<template>
  <Submenu :name="props.menu.path">
    <template #title>
      <IMenuTitle :menu="props.menu" />
      <Badge v-if="badge" class="i-layout-menu-side-badge" v-bind="badge" />
    </template>
    <template v-for="(item, index) in props.menu.children" :key="index">
      <IMenuItem
        v-if="item.children === undefined || !item.children.length"
        :data-introname="item.introName || ''"
        :menu="item"
      />
      <ISubMenu v-else :badge="badge" :menu="item" />
    </template>
  </Submenu>
</template>

<style scoped></style>

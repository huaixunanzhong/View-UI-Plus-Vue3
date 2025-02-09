<script lang="ts" setup>
import IMenuTitle from '@/layouts/components/menu-side/IMenuTitle.vue'
import ISubMenu from '@/layouts/components/menu-side/ISubMenu.vue'
import { useBadge } from '../../hooks'

interface Props {
  menu: Sider
  hideTitle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  menu: () => ({}),
  hideTitle: false
})

const badgeData = useBadge()
</script>

<template>
  <div
    v-if="props.menu.children === undefined || !props.menu.children.length"
    :key="props.menu.path"
    :data-introname="props.menu.introName || ''"
  >
    <MenuItem
      :name="props.menu.path"
      :replace="props.menu.replace"
      :target="props.menu.target"
      :to="props.menu.path"
    >
      <IMenuTitle :hide-title="props.hideTitle" :menu="props.menu" />
      <Badge
        v-if="badgeData"
        class="i-layout-menu-side-badge"
        v-bind="badgeData"
      />
    </MenuItem>
  </div>
  <ISubMenu v-else :badge="badgeData" :menu="menu" />
</template>

<style scoped></style>

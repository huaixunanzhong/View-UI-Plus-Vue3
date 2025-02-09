<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  menu: Sider
  hideTitle?: boolean
  // 用于侧边栏收起 Dropdown 当前高亮
  selected?: boolean
  // 侧边栏折叠状态
  collapse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  menu: () => ({}),
  hideTitle: false,
  selected: false,
  collapse: false
})

const withIcon = computed(
  () => props.menu.icon || props.menu.custom || props.menu.img
)

const tTitle = (title) => {
  return title
}
</script>

<template>
  <span
    :class="{ 'i-layout-menu-side-title-with-collapse': props.collapse }"
    class="i-layout-menu-side-title"
  >
    <span
      v-if="withIcon"
      :class="{ 'i-layout-menu-side-title-icon-single': props.hideTitle }"
      class="i-layout-menu-side-title-icon"
    >
      <Icon v-if="props.menu.icon" :type="props.menu.icon" />
      <Icon v-else-if="props.menu.custom" :custom="props.menu.custom" />
      <img v-else-if="props.menu.img" :src="props.menu.img" alt="" />
    </span>
    <span
      v-if="!props.hideTitle"
      :class="{
        'i-layout-menu-side-title-text-selected': props.selected,
        'i-layout-menu-side-title-text-with-subtitle': props.menu.subtitle,
        'i-layout-menu-side-title-text-with-icon': withIcon,
      }"
      class="i-layout-menu-side-title-text"
    >
      {{ tTitle(props.menu.title) }}
      <em v-if="props.menu.subtitle">{{ tTitle(props.menu.subtitle) }}</em>
    </span>
  </span>
</template>

<style scoped></style>

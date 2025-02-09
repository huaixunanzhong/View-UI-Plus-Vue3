<script lang="ts" setup>
import IMenuCollapse from '@/layouts/components/menu-side/IMenuCollapse.vue'
import { useMenuStore } from '@/store'
import IMenuItem from './IMenuItem.vue'

interface Props {
  menuAccordion: boolean
  menuCollapse: boolean
  siderTheme: string
}

const props = withDefaults(defineProps<Props>(), {
  menuAccordion: false,
  menuCollapse: false,
  siderTheme: 'dark'
})

const menuStore = useMenuStore()
const { openNames, activePath, isGuideGlobalStatus } = menuStore.menuSetting
const menuRef = ref(null)

const filterSider = computed(() => menuStore._filterSider())
// 计算菜单手风琴模式
const getMenuAccordion = computed(() =>
  isGuideGlobalStatus ? props.menuAccordion : false
)
</script>

<template>
  <Menu
    ref="menuRef"
    :accordion="getMenuAccordion"
    :active-name="activePath"
    :class="{ 'i-layout-menu-side-collapse': props.menuCollapse }"
    :open-names="openNames"
    :theme="props.siderTheme"
    class="i-layout-menu-side i-scrollbar-hide"
    width="auto"
  >
    <template v-for="(item, index) in filterSider">
      <IMenuItem v-if="!props.menuCollapse" :key="index" :menu="item" />
      <template v-else>
        <Tooltip
          v-if="item.children === undefined || !item.children.length"
          :key="index"
          :content="item.title"
          placement="right"
        >
          <IMenuItem
            :data-introname="item.introName || ''"
            :menu="item"
            hide-title
          />
        </Tooltip>
        <IMenuCollapse v-else :key="item" :menu="item" top-level />
      </template>
    </template>
  </Menu>
</template>

<style scoped></style>

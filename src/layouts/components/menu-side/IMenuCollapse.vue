<script lang="ts" setup>
import IMenuCollapse from '@/layouts/components/menu-side/IMenuCollapse.vue'
import { useLayoutStore, useMenuStore } from '@/store'
import { computed } from 'vue'
import IMenuTitle from './IMenuTitle.vue'

defineOptions({ name: 'IMenuCollapse' })

const props = withDefaults(defineProps<Props>(), {
  menu: () => ({}),
  topLevel: false
})

interface Props {
  menu: Sider
  topLevel?: boolean
}

const { siderTheme, showCollapseMenuTitle } = useLayoutStore().layoutSetting
const { openNames, activePath } = useMenuStore().menuSetting
const dropdownClasses = computed(() => {
  return {
    'i-layout-menu-side-collapse-top': props.topLevel,
    'i-layout-menu-side-collapse-dark': siderTheme === 'dark'
  }
})
const menuItemClasses = computed(() => {
  return [
    'ivu-menu-item i-layout-menu-side-collapse-top-item',
    {
      // -active 在高亮时，有背景
      'ivu-menu-item-selected ivu-menu-item-active': openNames.includes(
        props.menu.path
      )
    }
  ]
})
</script>

<template>
  <Dropdown :class="dropdownClasses" :transfer="false" placement="right-start">
    <li v-if="props.topLevel" :class="menuItemClasses">
      <IMenuTitle :menu="props.menu" collapse hide-title />
    </li>
    <DropdownItem v-else>
      <IMenuTitle
        :menu="props.menu"
        :selected="openNames.indexOf(props.menu.path) >= 0"
        collapse
      />
      <Icon class="i-layout-menu-side-arrow" type="ios-arrow-forward" />
    </DropdownItem>
    <template #list>
      <DropdownMenu>
        <div
          v-if="showCollapseMenuTitle"
          class="i-layout-menu-side-collapse-title"
        >
          <IMenuTitle :menu="props.menu" collapse />
        </div>
        <template v-for="(item, index) in props.menu.children" :key="index">
          <Ilink
            v-if="item.children === undefined || !item.children.length"
            :target="item.target"
            :to="item.path"
          >
            <DropdownItem
              :class="{
                'i-layout-menu-side-collapse-item-selected':
                  item.path === activePath,
              }"
              :divided="item.divided"
            >
              <IMenuTitle :menu="item" collapse />
            </DropdownItem>
          </Ilink>
          <IMenuCollapse v-else :menu="item" />
        </template>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>

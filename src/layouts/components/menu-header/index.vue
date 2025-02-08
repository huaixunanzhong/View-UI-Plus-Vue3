<script lang="ts" setup>
import { useMenuStore } from '@/store/index' // 导入 Pinia store
import iMenuHeadTitle from './title'

const menuRef = ref(null)
const menu = ref(null)

const menuStore = useMenuStore()

const isMenuLimit = ref(false)
const menuMaxWidth = ref(0)

const isMobile = computed(() => menuStore.isMobile)
const headerName = computed(() => menuStore.headerName)
const filterHeader = computed(() => menuStore.filterHeader)

const handleGetMenuHeight = () => {
  const menuWidth = menuRef.value?.offsetWidth
  if (menu.value) {
    const menuHeight = menuRef.value?.offsetHeight
    if (menuHeight > 64) {
      if (!isMenuLimit.value) {
        menuMaxWidth.value = menuWidth
      }
      isMenuLimit.value = true
    }
  } else if (menuWidth >= menuMaxWidth.value) {
    isMenuLimit.value = false
  }
}

watch(() => filterHeader.value, handleGetMenuHeight)
watch(() => isMobile.value, handleGetMenuHeight)

onMounted(() => {
  handleGetMenuHeight()
})
</script>

<template>
  <div
    ref="menuRef"
    :class="{ 'i-layout-menu-head-mobile': isMobile }"
    class="i-layout-menu-head"
  >
    <Menu
      v-if="!isMobile && !isMenuLimit"
      ref="menu"
      :active-name="headerName"
      mode="horizontal"
    >
      <template v-for="(item, index) in filterHeader">
        <Submenu
          v-if="item.children && item.children.length"
          :key="index"
          :name="item.name"
        >
          <template #title>
            <i-menu-head-title :item="item" />
          </template>
          <MenuItem
            v-for="subitem in item.children"
            :key="subitem.path"
            :name="item.name"
            :replace="subitem.replace"
            :target="subitem.target"
            :to="subitem.path"
            @click.native="handleClick(subitem.path, 'header')"
          >
            <i-menu-head-title :item="subitem" />
          </MenuItem>
        </Submenu>
        <MenuItem
          v-else
          :key="item.path"
          :name="item.name"
          :replace="item.replace"
          :target="item.target"
          :to="item.path"
          @click.native="handleClick(item.path, 'header')"
        >
          <i-menu-head-title :key="item.path" :item="item" />
        </MenuItem>
      </template>
    </Menu>
    <div
      v-else
      class="i-layout-header-trigger i-layout-header-trigger-min i-layout-header-trigger-in i-layout-header-trigger-no-height"
    >
      <Dropdown
        :class="{ 'i-layout-menu-head-mobile-drop': isMobile }"
        trigger="click"
      >
        <Icon type="ios-apps" />
        <template v-slot:list>
          <DropdownMenu>
            <template v-for="(item, index) in filterHeader">
              <template v-if="item.children && item.children.length">
                <DropdownItem
                  :key="index"
                  class="i-layout-menu-head-mobile-subtitle"
                  disabled
                >
                  <i-menu-head-title :item="item" />
                </DropdownItem>
                <i-link
                  v-for="subitem in item.children"
                  :key="subitem.path"
                  :replace="subitem.replace"
                  :target="subitem.target"
                  :to="subitem.path"
                  @click.native="handleClick(subitem.path, 'header')"
                >
                  <DropdownItem>
                    <i-menu-head-title :item="subitem" />
                  </DropdownItem>
                </i-link>
              </template>
              <i-link
                v-else
                :key="item.path"
                :replace="item.replace"
                :target="item.target"
                :to="item.path"
                @click.native="handleClick(item.path, 'header')"
              >
                <DropdownItem>
                  <i-menu-head-title :item="item" />
                </DropdownItem>
              </i-link>
            </template>
          </DropdownMenu>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped></style>

import { useIncludeArray } from '@/hooks/useIncloudArray'
import { useUserStore } from '@/store/modules/user'
import { cloneDeep } from 'lodash'
import { defineStore } from 'pinia'

// 根据 menu 配置的权限，过滤菜单
const filterMenu = (menuList: Sider[], access: string[], lastList: any[]) => {
  menuList.forEach((menu) => {
    if (!menu.auth || useIncludeArray(menu.auth, access)) {
      const newMenu: Omit<Sider, 'children'> & { children?: Sider[] } = {}
      for (const i in menu) {
        if (i !== 'children') {
          newMenu[i] = cloneDeep(menu[i])
        }
      }
      if (menu.children && menu.children.length) newMenu.children = []

      lastList.push(newMenu)
      menu.children && filterMenu(menu.children, access, newMenu.children)
    }
  })
  return lastList
}

const storeSetup = () => {
  const menuSetting: MenuSetting = {
    header: [], // 顶部菜单
    hideSider: false, // 隐藏侧边菜单
    sider: [], // 侧边菜单
    headerName: '', // 当前选中的顶部菜单
    activePath: '', // 当前激活的路由路径
    openNames: [], // 当前展开的菜单项
    menuSider: [], // 动态侧边菜单
    menuBadge: [], // 菜单徽章
    isGuideGlobalStatus: false, // 全局引导状态
    isGuideOrderCreateStatus: false, // 订单创建引导状态
    isGuideOrderStatus: false, // 订单引导状态
    isGuideCompanyDetailStatus: false, // 公司详情引导状态
    companyInfo: {}, // 公司信息
    _cachedFilterSider: [] // 缓存的侧边菜单过滤结果
  }

  const userInfo = useUserStore()

  // 根据 user 里登录用户权限，对侧边菜单进行鉴权过滤
  const _filterSider = () => {
    const { access } = userInfo.user.info
    if (access && access.length) {
      return filterMenu(menuSetting.sider, access, [])
    } else {
      return filterMenu(menuSetting.sider, [], [])
    }
  }

  // 设置侧边栏菜单
  const setSider = (menu: Sider[]) => {
    menuSetting.sider = menu
  }
  // 设置当前顶栏菜单 name
  const setHeaderName = (name: string) => {
    menuSetting.headerName = name
  }
  // 设置所有菜单
  const setMenuSider = (menuSider: any[]) => {
    menuSetting.menuSider = menuSider
  }
  // 设置当前所在菜单的 path，用于侧栏菜单高亮当前项
  const setActivePath = (path: string) => {
    menuSetting.activePath = path
  }
  // 设置当前所在菜单的全部展开父菜单的 names 集合
  const setOpenNames = (names: any[]) => {
    menuSetting.openNames = names
  }

  return {
    menuSetting,
    _filterSider,
    setSider,
    setHeaderName,
    setMenuSider,
    setActivePath,
    setOpenNames
  }
}

export const useMenuStore = defineStore('menu', storeSetup, { persist: true })

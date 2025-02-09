/**
 * 系统基础配置
 */
interface Setting {
  titleSuffix: string
  routerMode: string
  routerBase: string
  showProgressBar: boolean
  apiBaseURL: string
  VITE_APP_PUSHER_KEY: string
  VUE_PUSHER_CLUSTER: string
  modalDuration: number
  errorModalType: string
  cookiesExpires: number
  i18n: {
    default: string
    auto: boolean
  }
  menuSideWidth: number
  layout: Layout
  page: {
    opened: any[]
    loadOpenedTabs: boolean
  }
  sameRouteForceUpdate: boolean
  dynamicSiderMenu: boolean
  errorMessages: Record<string, any>
}

interface Layout {
  siderTheme: string
  headerTheme: string
  headerStick: boolean
  tabs: boolean
  showTabsIcon: boolean
  tabsFix: boolean
  tabsReload: boolean
  tabsOrder: boolean
  siderFix: boolean
  headerFix: boolean
  headerHide: boolean
  headerMenu: boolean
  menuAccordion: boolean
  showSiderCollapse: boolean
  menuCollapse: boolean
  menuSiderReload: boolean
  menuHeaderReload: boolean
  showCollapseMenuTitle: boolean
  showReload: boolean
  showSearch: boolean
  showNotice: boolean
  showFullscreen: boolean
  showMobileLogo: boolean
  showBreadcrumb: boolean
  showBreadcrumbIcon: boolean
  showLog: boolean
  showI18n: boolean
  enableSetting: boolean
  logoutConfirm: boolean
}

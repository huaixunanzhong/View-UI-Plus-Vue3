interface Sider {
  path?: string
  introName?: string
  title?: string
  header?: string
  icon?: string
  color?: string
  auth?: string[]
  children?: Sider[]
}

interface MenuSetting {
  header: any[]
  hideSider: boolean
  sider: Sider[]
  headerName: string
  activePath: string
  openNames: any[]
  menuSider: any[]
  menuBadge: any[]
  isGuideGlobalStatus: boolean
  isGuideOrderCreateStatus: boolean
  isGuideOrderStatus: boolean
  isGuideCompanyDetailStatus: boolean
  companyInfo: Record<string, any>
  _cachedFilterSider: Record<string, any>
}

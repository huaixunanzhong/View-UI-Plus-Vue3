// 定义 OrderPageInfo 的类型
type OrderPageInfo = {
  ids: any[]
  type: string
}

type LayoutSetting = Layout & {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isFullscreen: boolean
  orderPageInfo: OrderPageInfo
  isAdminOrderPage: boolean
  purchasePageInfo: Record<string, any>
  salesPageInfo: Record<string, any>
}

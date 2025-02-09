import Setting from '@/setting'
import { defineStore } from 'pinia'

const storeSetup = () => {
  const layoutSetting: LayoutSetting = {
    ...Setting.layout,
    isMobile: false, // 是否为手机
    isTablet: false, // 是否为平板
    isDesktop: true, // 是否为桌面
    isFullscreen: false, // 是否切换到了全屏
    orderPageInfo: {
      // order 详情页面切换记录信息
      ids: [], // order 列表所有 order id 的集合
      type: 'details' // order 详情页当前活动 tab
    },

    isAdminOrderPage: false, // 是否是 admin order 页面
    purchasePageInfo: localStorage.getItem('purchasePageInfo')
      ? JSON.parse(localStorage.getItem('purchasePageInfo'))
      : {},
    salesPageInfo: localStorage.getItem('salesPageInfo')
      ? JSON.parse(localStorage.getItem('salesPageInfo'))
      : {}
  }
  return {
    layoutSetting
  }
}

export const useLayoutStore = defineStore('layout', storeSetup, {
  persist: true
})

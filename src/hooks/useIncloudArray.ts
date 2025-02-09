import { useUserStore } from '@/store'

/**
 * @description 判断列表1中是否包含了列表2中的某一项
 * 因为用户权限 access 为数组，includes 方法无法直接得出结论
 */
export function useIncludeArray(list1: string[], list2: string[], isConfirm?) {
  const info = useUserStore().user.info
  const isAllowAuctionPortal = info.is_allow_auction_portal as boolean
  const isAuthedSuppier = isAllowAuctionPortal === true
  if (isConfirm && !isAuthedSuppier) {
    return false
  } else {
    let status = false
    list2.forEach((item) => {
      if (list1.includes(item)) status = true
    })
    return status
  }
}

import { useMenuStore } from '@/store'

export function useBadge() {
  let data = null
  const { menuBadge } = useMenuStore().menuSetting

  if (menuBadge) {
    data = menuBadge.find((item) => item.path === this.menu.path)
  }

  return {
    data
  }
}

import { useRouter } from 'vue-router'

export const useLink = (props: any) => {
  const { to, replace, append, target } = props
  const linkUrl = computed(() => {
    const type = typeof to
    if (type !== 'string') {
      return null
    }
    if (to.includes('//')) {
      /* 绝对URL，我们不需要路由 */
      return to
    }
    const router = useRouter()
    if (router) {
      const current = useRoute()
      const route = router.resolve(to, current, this.append)
      return route ? route.href : to
    }
    return to
  })

  const handleOpenTo = () => {
    const router = useRouter()
    let _to = to
    if (router) {
      const current = useRoute()
      const route = router.resolve(to, current, this.append)
      _to = route ? route.href : to
    }
    if (typeof to === 'string') return // 会跳转两次
    window.open(_to)
  }

  const handleClick = (new_window = false) => {
    const router = useRouter()

    if (new_window) {
      handleOpenTo()
    } else {
      if (router) {
        if (typeof to === 'string' && to.includes('//')) {
          window.location.href = to
        } else {
          this.replace
            ? this.$router.replace(to, () => {})
            : this.$router.push(to, () => {})
        }
      } else {
        window.location.href = to
      }
    }
  }
  const handleCheckClick = (event, new_window = false) => {
    if (to) {
      if (this.target === '_blank') {
        this.handleOpenTo()
        return false
      } else {
        event.preventDefault()
        this.handleClick(new_window)
      }
    }
  }
  return {
    linkUrl,
    handleCheckClick,
  }
}

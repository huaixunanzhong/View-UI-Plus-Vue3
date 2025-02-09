// import { cancelAllRequest } from '@/plugins/request/index'
// import ViewUIPlus from 'view-ui-plus'
// import {
//   getHeaderName,
//   getMenuSider,
//   getSiderSubmenu,
//   includeArray,
// } from '@/libs/system'
import menuSider from '@/menu/sider'
import Setting from '@/setting'
import { useMenuStore } from '@/store'
import { getHeaderName, getMenuSider, getSiderSubmenu } from '@/utils/menu'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  // // const userStore = useUserStore()
  // // const accountStore = useAccountStore()
  const menuStore = useMenuStore()
  // // const layoutStore = useLayoutStore()
  let path = to.matched[to.matched.length - 1].path
  if (!Setting.dynamicSiderMenu) {
    let headerName = getHeaderName(path, menuSider)
    if (headerName === null) {
      path = to.path
      headerName = getHeaderName(path, menuSider)
    }
    // 在 404 时，是没有 headerName 的
    if (headerName !== null) {
      menuStore.setHeaderName(headerName)
      menuStore.setMenuSider(menuSider)

      const filterMenuSider = getMenuSider(menuSider, headerName)
      menuStore.setSider(filterMenuSider)
      menuStore.setActivePath(to.path)

      const openNames = getSiderSubmenu(path, menuSider)
      menuStore.setOpenNames(openNames)
    }
  }

  //
  next()
  //
  // this.appRouteChange(to, from)
  // if (!Setting.dynamicSiderMenu) {
  //   // if (headerName !== null) {
  //   //   menuStore.setHeaderName(headerName)
  //   //   menuStore.setMenuSider(menuSider)
  //   //
  //   //   const filterMenuSider = getMenuSider(menuSider, headerName)
  //   //   menuStore.setSider(filterMenuSider)
  //   //   menuStore.setActivePath(to.path)
  //   //
  //   //   const openNames = getSiderSubmenu(path, menuSider)
  //   //   menuStore.setOpenNames(openNames)
  //   // }
  // }
  // // Cancel all pending requests
  // await cancelAllRequest()
  //
  // // Start the progress bar if enabled
  // if (Setting.showProgressBar) {
  //   // ViewUIPlus.LoadingBar.start()
  // }
  //
  // if (to.matched.some((record) => record.meta.auth)) {
  //   const authenticated = accountStore.authenticated
  //   if (authenticated) {
  //     let userInfo = userStore.userInfo
  //
  //     if (!userInfo || Object.keys(userInfo).length === 0) {
  //       await accountStore.getUserInfo()
  //       userInfo = userStore.userInfo
  //     }
  //
  //     const access = userInfo.access
  //
  //     if (to.meta.auth === true) {
  //       next()
  //     } else {
  //       const isPermission = includeArray(
  //         to.meta.auth,
  //         access,
  //         to.meta.isConfirm,
  //       )
  //
  //       if (isPermission) {
  //         const emailNotice = userStore.emailNotice
  //
  //         if (userInfo.email_verified_at === null && !emailNotice) {
  //           userStore.setEmailNotice(true)
  //           next()
  //           return
  //         }
  //
  //         if (
  //           includeArray(
  //             [
  //               'Company Principal',
  //               'Company Staff',
  //               'Supplier Principal',
  //               'Supplier Staff',
  //               'AVV Principal',
  //               'AVV Staff',
  //               'MRE Principal',
  //               'MRE Staff',
  //             ],
  //             access,
  //           )
  //         ) {
  //           if (!userInfo.company_id && to.name !== 'setting-company-details') {
  //             next({ name: 'setting-company-details' })
  //             return
  //           }
  //         }
  //
  //         let orderPages = [
  //           'admin-orders-create',
  //           'admin-orders-home',
  //           'admin-orders-manage',
  //           'admin-shipments-manage',
  //           'admin-shipments-create',
  //           'admin-shipments-home',
  //         ]
  //         layoutStore.updateIsAdminOrderPage(false)
  //
  //         if (orderPages.includes(to.name)) {
  //           let text = to.name.substring(0, 5)
  //           if (text === 'admin') {
  //             layoutStore.updateIsAdminOrderPage(true)
  //           }
  //         }
  //
  //         next()
  //       } else {
  //         if (
  //           includeArray(['MRE Principal', 'MRE Staff'], access) &&
  //           to.name !== 'mres-home'
  //         ) {
  //           next({ name: 'mres-manage' })
  //           return
  //         }
  //         next({ name: '403' })
  //       }
  //     }
  //   } else {
  //     next({
  //       name: 'login',
  //       query: { redirect: to.fullPath },
  //     })
  //   }
  // } else {
  //   next()
  // }
})

// router.afterEach((to) => {
//   // const pageStore = usePageStore()
//   if (Setting.showProgressBar) {
//     // ViewUIPlus.LoadingBar.finish()
//   }
//
//   if (
//     !('meta' in to) ||
//     (to.meta && !('tabs' in to.meta)) ||
//     (to.meta && to.meta.tabs)
//   ) {
//     pageStore.open(to)
//   }
//
//   // util.title({ title: to.meta?.title })
//
//   window.scrollTo(0, 0)
// })

export default router

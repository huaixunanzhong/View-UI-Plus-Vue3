const BasicLayout = () => import('@/layouts/index.vue')

const meta = {
  auth: true,
}

const pre = 'dashboard-'

export default {
  path: '/dashboard/',
  meta,
  component: BasicLayout,
  children: [
    {
      path: '/dashboard/',
      name: `${pre}console`,
      meta: {
        ...meta,
        title: '$t:menu.dashboard',
        closable: true,
      },
      component: () => import('@/pages/dashboard/console/index.vue'),
    },
  ],
}

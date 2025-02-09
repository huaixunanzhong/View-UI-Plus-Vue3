// import { useLayoutStore } from '@/store'
//
// // Find components upward
// function findComponentUpward(context, componentName, componentNames) {
//   if (typeof componentName === 'string') {
//     componentNames = [componentName]
//   } else {
//     componentNames = componentName
//   }
//
//   let parent = context.$parent
//   let name = parent.$options.name
//   while (parent && (!name || !componentNames.includes(name))) {
//     parent = parent.$parent
//     if (parent) name = parent.$options.name
//   }
//   return parent
// }
//
// export const useClickItem = () => {
//   const layout = useLayoutStore()
//
//   const handleReload = () => {
//     const $layout = findComponentUpward(this, 'BasicLayout')
//     if ($layout) $layout.handleReload()
//   }
//
//   const handleClick = (path, type = 'sider') => {
//     const route = useRoute()
//     if (route.path === path) {
//       if (type === 'sider' && layout.menuSiderReload) {
//         handleReload()
//       } else if (type === 'header' && layout.menuHeaderReload) {
//         handleReload()
//       }
//     }
//   }
//
//   return {
//     handleClick,
//     handleReload
//   }
// }

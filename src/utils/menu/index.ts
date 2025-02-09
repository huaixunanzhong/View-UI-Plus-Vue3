/**
 * @description 根据当前路由，找打顶部菜单名称
 */
export function getHeaderName(currentPath: string, menuList: any[]) {
  const allMenus = []
  menuList.forEach((menu) => {
    const headerName = menu.header || ''
    const menus = transferMenu(menu, headerName)
    allMenus.push({
      path: menu.path,
      header: headerName
    })
    menus.forEach((item) => allMenus.push(item))
  })

  const currentMenu = allMenus.find((item) => item.path === currentPath)
  return currentMenu ? currentMenu.header : null
}

function transferMenu(menu, headerName) {
  if (menu.children && menu.children.length) {
    return menu.children.reduce((all, item) => {
      all.push({
        path: item.path,
        header: headerName
      })
      const foundChildren = transferMenu(item, headerName)
      return all.concat(foundChildren)
    }, [])
  } else {
    return [menu]
  }
}

/**
 * @description 根据当前路由，找到其所有父菜单 path，作为展开侧边栏 open-names 依据
 * @param currentPath 当前路径
 * @param menuList 所有路径
 */
export function getSiderSubmenu(currentPath: string, menuList: any[]) {
  const allMenus = []
  menuList.forEach((menu) => {
    const menus = transferSubMenu(menu, [])
    allMenus.push({
      path: menu.path,
      openNames: []
    })
    menus.forEach((item) => allMenus.push(item))
  })

  const currentMenu = allMenus.find((item) => item.path === currentPath)
  return currentMenu ? currentMenu.openNames : []
}

function transferSubMenu(menu, openNames) {
  if (menu.children && menu.children.length) {
    const itemOpenNames = openNames.concat([menu.path])
    return menu.children.reduce((all, item) => {
      all.push({
        path: item.path,
        openNames: itemOpenNames
      })
      const foundChildren = transferSubMenu(item, itemOpenNames)
      return all.concat(foundChildren)
    }, [])
  } else {
    return [menu].map((item) => {
      return {
        path: item.path,
        openNames
      }
    })
  }
}

/**
 * @description 根据当前顶栏菜单 name，找到对应的二级菜单
 * @param menuList 所有的二级菜单
 * @param headerName 当前顶栏菜单的 name
 */
export function getMenuSider(menuList: any[], headerName: string = '') {
  if (headerName) {
    return menuList.filter((item) => item.header === headerName)
  } else {
    return menuList
  }
}

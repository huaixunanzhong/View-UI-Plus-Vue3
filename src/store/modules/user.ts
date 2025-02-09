import { defineStore } from 'pinia'

const storeSetup = () => {
  const user: User = {
    // 用户信息
    info: {},
    checkAddress: false,
    countryList: [],
    checkCompany: false,
    emailNotice: false,
    ownerOrderShowStatus: true
  }

  return {
    user
  }
}

export const useUserStore = defineStore('user', storeSetup, { persist: true })

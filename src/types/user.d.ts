interface Info extends Record<string, any> {
  access: string[]
}

interface User {
  info: Info | Record<string, any>
  checkAddress: boolean
  countryList: any[]
  checkCompany: boolean
  emailNotice: boolean
  ownerOrderShowStatus: boolean
}

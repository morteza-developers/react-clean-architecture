export interface IPermissionItem {
  base: boolean;
  menu: boolean;
  add: boolean;
  delete: boolean;
  edit: boolean;
  preview: boolean;
}

export interface IIPermissions {
  setPermission: (permissions: any) => void;
  pony: IPermissionItem;
  ponyRequest: IPermissionItem;
  transactions: IPermissionItem;
  awardsCoupon: IPermissionItem;
  awardCouponCode: IPermissionItem;
  blogCategory: IPermissionItem;
  blog: IPermissionItem;
  comments: IPermissionItem;
  card: IPermissionItem;
  about: IPermissionItem;
  rules: IPermissionItem;
  social: IPermissionItem;
  commentCategory: IPermissionItem;
  commentUser: IPermissionItem;
  notificationFireBase: IPermissionItem;
  adminMessages: IPermissionItem;
  incomingWareHouses: IPermissionItem;
  transformers: IPermissionItem;
  timeDefine: IPermissionItem;
  lotteryDefine: IPermissionItem;
  participants: IPermissionItem;
  repoSubScriber: IPermissionItem;
  repoCountSubScriber: IPermissionItem;
  repoDeliveredWareHouse: IPermissionItem;
  reportRequest: IPermissionItem;
  repoDailyPerformance: IPermissionItem;
  reportRequestFull: IPermissionItem;
  reportTransactions: IPermissionItem;
  reportCitizenshipCredit: IPermissionItem;
  reportCitizenshipDebt: IPermissionItem;
  permission: IPermissionItem;
  accounts: IPermissionItem;
  managers: IPermissionItem;
  profile: IPermissionItem;
  changePass: IPermissionItem;
  phoneBook: IPermissionItem;
  sendSms: IPermissionItem;
  charge: IPermissionItem;
  smsTransaction: IPermissionItem;
  items: IPermissionItem;
  pakban: IPermissionItem;
  residueRequest: IPermissionItem;
  residueSetting: IPermissionItem;
  warehouse: IPermissionItem;
  warehouseInventory: IPermissionItem;
  warehouseDiscrepancy: IPermissionItem;
  newPakban: IPermissionItem;
  festival: IPermissionItem;
  userScore: IPermissionItem;
  charities: IPermissionItem;
  charitiesPony: IPermissionItem;
  areas: IPermissionItem;
  schedulingAreas: IPermissionItem;
}

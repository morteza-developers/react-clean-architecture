import { IIPermissions, IPermissionItem } from "./permission.types";

class Permission implements IIPermissions {
  private permissions: any = {};
  private static _instance: Permission;
  constructor() {
    if (Permission._instance!) {
      return Permission._instance;
    }
    Permission._instance = this;
  }
  setPermission = (permissions: any): void => {
    this.permissions = this.convertPermission(permissions);
  };
  private convertPermission = (p: any[]): any => {
    let data: any = {};
    p.forEach((i) => {
      if (Array.isArray(i.child)) {
        data = { ...data, ...this.convertPermission(i.child) };
      } else {
        data[i.req] = i.permission;
        data[i.req].base = true;
      }
    });
    return data;
  };
  private rejectedAll: IPermissionItem = {
    base: false,
    menu: false,
    add: false,
    delete: false,
    edit: false,
    preview: false,
  };
  get pony(): IPermissionItem {
    if (!this.permissions?.pony) return this.rejectedAll;
    return this.permissions?.pony;
  }
  get ponyRequest(): IPermissionItem {
    if (!this.permissions?.ponyrequest) return this.rejectedAll;
    return this.permissions?.ponyrequest;
  }
  get transactions(): IPermissionItem {
    if (!this.permissions?.transactions) return this.rejectedAll;
    return this.permissions?.transactions;
  }
  get awardsCoupon(): IPermissionItem {
    if (!this.permissions?.awardcoupondef) return this.rejectedAll;
    return this.permissions?.awardcoupondef;
  }
  get awardCouponCode(): IPermissionItem {
    if (!this.permissions?.awardcouponcode) return this.rejectedAll;
    return this.permissions?.awardcouponcode;
  }
  get blogCategory(): IPermissionItem {
    if (!this.permissions?.blogcategory) return this.rejectedAll;
    return this.permissions?.blogcategory;
  }
  get blog(): IPermissionItem {
    if (!this.permissions?.blog) return this.rejectedAll;
    return this.permissions?.blog;
  }
  get comments(): IPermissionItem {
    if (!this.permissions?.comments) return this.rejectedAll;
    return this.permissions?.comments;
  }
  get card(): IPermissionItem {
    if (!this.permissions?.card) return this.rejectedAll;
    return this.permissions?.card;
  }
  get about(): IPermissionItem {
    if (!this.permissions?.about) return this.rejectedAll;
    return this.permissions?.about;
  }
  get rules(): IPermissionItem {
    if (!this.permissions?.rules) return this.rejectedAll;
    return this.permissions?.rules;
  }
  get social(): IPermissionItem {
    if (!this.permissions?.social) return this.rejectedAll;
    return this.permissions?.social;
  }
  get commentCategory(): IPermissionItem {
    if (!this.permissions?.commentcategory) return this.rejectedAll;
    return this.permissions?.commentcategory;
  }
  get commentUser(): IPermissionItem {
    if (!this.permissions?.comment) return this.rejectedAll;
    return this.permissions?.comment;
  }
  get notificationFireBase(): IPermissionItem {
    if (!this.permissions?.notificationfirebase) return this.rejectedAll;
    return this.permissions?.notificationfirebase;
  }
  get adminMessages(): IPermissionItem {
    if (!this.permissions?.adminmessages) return this.rejectedAll;
    return this.permissions?.adminmessages;
  }
  get incomingWareHouses(): IPermissionItem {
    if (!this.permissions?.incomingwarehouses) return this.rejectedAll;
    return this.permissions?.incomingwarehouses;
  }
  get transformers(): IPermissionItem {
    if (!this.permissions?.transformers) return this.rejectedAll;
    return this.permissions?.transformers;
  }
  get timeDefine(): IPermissionItem {
    if (!this.permissions?.timedef) return this.rejectedAll;
    return this.permissions?.timedef;
  }
  get lotteryDefine(): IPermissionItem {
    if (!this.permissions?.lotterydef) return this.rejectedAll;
    return this.permissions?.lotterydef;
  }
  get participants(): IPermissionItem {
    if (!this.permissions?.participants) return this.rejectedAll;
    return this.permissions?.participants;
  }
  get repoSubScriber(): IPermissionItem {
    if (!this.permissions?.reposubscriber) return this.rejectedAll;
    return this.permissions?.reposubscriber;
  }
  get repoCountSubScriber(): IPermissionItem {
    if (!this.permissions?.repocountsubscriber) return this.rejectedAll;
    return this.permissions?.repocountsubscriber;
  }
  get repoDeliveredWareHouse(): IPermissionItem {
    if (!this.permissions?.repodeliveredwarehouse) return this.rejectedAll;
    return this.permissions?.repodeliveredwarehouse;
  }
  get reportRequest(): IPermissionItem {
    if (!this.permissions?.repopasmandrequest) return this.rejectedAll;
    return this.permissions?.repopasmandrequest;
  }
  get repoDailyPerformance(): IPermissionItem {
    if (!this.permissions?.repodailyperformance) return this.rejectedAll;
    return this.permissions?.repodailyperformance;
  }
  get reportRequestFull(): IPermissionItem {
    if (!this.permissions?.repopasmandrequestfull) return this.rejectedAll;
    return this.permissions?.repopasmandrequestfull;
  }
  get reportTransactions(): IPermissionItem {
    if (!this.permissions?.repotransactions) return this.rejectedAll;
    return this.permissions?.repotransactions;
  }
  get reportCitizenshipCredit(): IPermissionItem {
    if (!this.permissions?.repocitizenshipcredit) return this.rejectedAll;
    return this.permissions?.repocitizenshipcredit;
  }
  get reportCitizenshipDebt(): IPermissionItem {
    if (!this.permissions?.repocitizenshipdebt) return this.rejectedAll;
    return this.permissions?.repocitizenshipdebt;
  }
  get permission(): IPermissionItem {
    if (!this.permissions?.permission) return this.rejectedAll;
    return this.permissions?.permission;
  }
  get accounts(): IPermissionItem {
    if (!this.permissions?.accounts) return this.rejectedAll;
    return this.permissions?.accounts;
  }
  get managers(): IPermissionItem {
    if (!this.permissions?.managers) return this.rejectedAll;
    return this.permissions?.managers;
  }
  get profile(): IPermissionItem {
    if (!this.permissions?.profile) return this.rejectedAll;
    return this.permissions?.profile;
  }
  get changePass(): IPermissionItem {
    if (!this.permissions?.changepass) return this.rejectedAll;
    return this.permissions?.changepass;
  }
  get phoneBook(): IPermissionItem {
    if (!this.permissions?.phonebook) return this.rejectedAll;
    return this.permissions?.phonebook;
  }
  get sendSms(): IPermissionItem {
    if (!this.permissions?.sendsms) return this.rejectedAll;
    return this.permissions?.sendsms;
  }
  get charge(): IPermissionItem {
    if (!this.permissions?.charge) return this.rejectedAll;
    return this.permissions?.charge;
  }
  get smsTransaction(): IPermissionItem {
    if (!this.permissions?.smstransaction) return this.rejectedAll;
    return this.permissions?.smstransaction;
  }
  get items(): IPermissionItem {
    if (!this.permissions?.items) return this.rejectedAll;
    return this.permissions?.items;
  }
  get pakban(): IPermissionItem {
    if (!this.permissions?.pakban) return this.rejectedAll;
    return this.permissions?.pakban;
  }
  get residueRequest(): IPermissionItem {
    if (!this.permissions?.pasmandrequest) return this.rejectedAll;
    return this.permissions?.pasmandrequest;
  }
  get residueSetting(): IPermissionItem {
    if (!this.permissions?.pasmandsetting) return this.rejectedAll;
    return this.permissions?.pasmandsetting;
  }
  get warehouse(): IPermissionItem {
    if (!this.permissions?.warehouse) return this.rejectedAll;
    return this.permissions?.warehouse;
  }
  get warehouseInventory(): IPermissionItem {
    if (!this.permissions?.warehouseinventory) return this.rejectedAll;
    return this.permissions?.warehouseinventory;
  }
  get warehouseDiscrepancy(): IPermissionItem {
    if (!this.permissions?.warehousediscrepancy) return this.rejectedAll;
    return this.permissions?.warehousediscrepancy;
  }
  get newPakban(): IPermissionItem {
    if (!this.permissions?.newpakban) return this.rejectedAll;
    return this.permissions?.newpakban;
  }
  get festival(): IPermissionItem {
    if (!this.permissions?.festival) return this.rejectedAll;
    return this.permissions?.festival;
  }
  get userScore(): IPermissionItem {
    if (!this.permissions?.userscore) return this.rejectedAll;
    return this.permissions?.userscore;
  }
  get charities(): IPermissionItem {
    if (!this.permissions?.charities) return this.rejectedAll;
    return this.permissions?.charities;
  }
  get charitiesPony(): IPermissionItem {
    if (!this.permissions?.charitiespony) return this.rejectedAll;
    return this.permissions?.charitiespony;
  }

  get areas(): IPermissionItem {
    if (!this.permissions?.areas) return this.rejectedAll;
    return this.permissions?.areas;
  }

  get schedulingAreas(): IPermissionItem {
    if (!this.permissions?.schedulingareas) return this.rejectedAll;
    return this.permissions?.schedulingareas;
  }
}

export default Permission;

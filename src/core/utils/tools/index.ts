import { LIMIT } from "../constants/mixins";

export function separate(number?: number | string) {
  if (number == "0") return "0";
  if (!number) return "";
  number = String(number);
  number = number.replace(",", "");
  var x = number.split(".");
  var y = x[0];
  var z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}

export class ClientCookie {
  isClient: boolean = false;

  constructor() {
    if (typeof window != "undefined") this.isClient = true;
  }
  set(name: string, value: string, days: number) {
    if (this.isClient) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  }
  get(name: string) {
    if (!this.isClient) return;
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return;
  }
  delete(name: string) {
    if (this.isClient) {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }
}

export const countToPage = (count: number, limit?: number): number => {
  if (!count) return 0;
  if (limit) return Math.ceil(count / limit);
  return Math.ceil(count / LIMIT);
};

export const removeList = (name: string, key: any, list: any[]) => {
  return list.filter((i) => i[name] != key);
};

export const getUniqueId = (): string =>
  `${new Date().getTime()}-${Math.random()}`;

export const convertToFullDate = (date?: Date) => {
  let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  let month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${year}-${month}-${day}`;
};

export class QueryUrl {
  constructor() {}
  private removeEmptyProperties<T extends object>(object: T) {
    return Object.keys(object).reduce<T>((acc, ac) => {
      if (
        typeof (object as any)[ac] !== "boolean" &&
        (!(object as any)[ac] || (object as any)[ac] === "")
      ) {
        return acc;
      }
      return {
        ...acc,
        [ac]: (object as any)[ac],
      };
    }, Object.assign({}));
  }
  getURLSearchParams = (data: any) => {
    return new URLSearchParams(this.removeEmptyProperties(data));
  };
  getQueryString = (data: any): string => {
    const pathname: string =
      window.location.pathname == "/" ? "" : window.location.pathname;
    if (this.isEmptyObject(data)) return pathname;
    return `${pathname}?${this.getURLSearchParams(data)}`;
  };

  parseQuery = (otherParams: any) => {
    return Array.from(otherParams.keys()).reduce<any>((acc, ac, index) => {
      const value = Array.from(otherParams.values())[index] as string;

      if (!isNaN(parseInt(value)) && !value.includes("-")) {
        return {
          ...acc,
          [ac as string]: parseInt(value),
        };
      }

      return {
        ...acc,
        [ac as string]: value,
      };
    }, Object.assign({}));
  };
  parseQueryFromUrl = () => {
    return this.parseQuery(new URLSearchParams(window.location.search));
  };
  private isEmptyObject = (obj: any) => {
    if (!obj) return true;
    if (typeof obj !== "object") return true;

    for (const key in obj) {
      if (key) return false;
    }
    return true;
  };
}

export const replaceHistoryState = (filter?: string) => {
  if (filter) {
    window.history.replaceState({}, "", filter);
  }
};

export const isEmptyObject = (obj: any) => {
  if (!obj) return true;
  if (typeof obj !== "object") return true;

  for (const key in obj) {
    if (key) return false;
  }
  return true;
};

export const findFromListById = <I>(list: I[], id: any): I | undefined => {
  if (!id) return undefined;
  return list.find((i: any) => i.id == id);
};

export const exportExcelLink = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = url;
  link.click();
};

export const isExistsFilter = <T extends object>(data: T): boolean => {
  for (let key in data) {
    if (data[key]) return true;
  }
  return false;
};
export const errorPlaceHolderImage = (src: string) => {
  return {
    onError: (e: any) => {
      e.target.src = src;
    },
  };
};

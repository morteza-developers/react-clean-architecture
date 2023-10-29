import { useState, useLayoutEffect, useEffect } from "react";
import { FilterContextType } from "./types";

const windowIsLoaded = typeof window !== "undefined";

function removeEmptyProperties<T extends object>(object: T) {
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

export function useQueryFilter<TFilter extends Object>(
  initialState: TFilter = {} as TFilter,
  callbackOnInit: (state: TFilter) => void = () => null
): FilterContextType<TFilter> {
  if (typeof initialState !== "object" || Array.isArray(initialState)) {
    throw Error("`initialState` argument should be an object.");
  }

  if (typeof callbackOnInit !== "function") {
    throw Error("`callbackOnInit` argument should be a function.");
  }
  const [filter, setFilter] = useState<TFilter>(
    windowIsLoaded
      ? parseObjectFilter(new URLSearchParams(window.location.search))
      : ({} as TFilter)
  );

  useEffect(() => {
    if (windowIsLoaded) {
      setFilter(parseObjectFilter(new URLSearchParams(window.location.search)));
    }
  }, [window]);

  function parseObjectFilter(otherParams: any) {
    return Array.from(otherParams.keys()).reduce<TFilter>((acc, ac, index) => {
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
  }

  function set(tvalue: Partial<TFilter> | ((filter: TFilter) => TFilter)) {
    const value = typeof tvalue === "function" ? tvalue(filter) : tvalue;
    const newData = { ...filter, ...value };
    const filteredEmpty = removeEmptyProperties(newData);
    const params = new URLSearchParams(filteredEmpty as any);
    replaceWindowState(params);
    setFilter(newData);
    return newData;
  }

  const add = (tvalue: Partial<TFilter> | ((filter: TFilter) => TFilter)) => {
    const value = typeof tvalue === "function" ? tvalue(filter) : tvalue;
    const newData = { ...filter, ...value };
    return new Promise<TFilter>((resolve) => {
      setFilter(newData);
      resolve(newData);
    });
  };

  const setToQuery = () => {
    const params = new URLSearchParams(removeEmptyProperties(filter) as any);
    replaceWindowState(params);
  };

  async function reset(fn?: (e: TFilter) => void) {
    setFilter(initialState);
    const params = new URLSearchParams(initialState as {});
    replaceWindowState(params);

    return new Promise<TFilter>((resolve) => {
      typeof fn === "function" && fn(initialState);
      resolve(initialState);
    });
  }

  function replaceWindowState(params: any) {
    if (windowIsLoaded) {
      const pathname: string =
        window.location.pathname == "/" ? "" : window.location.pathname;
      window.history.replaceState({}, "", `${pathname}?${params}`);
    }
  }

  useLayoutEffect(() => {
    if (windowIsLoaded) {
      const urlSearch = window.location.search;
      const params = parseObjectFilter(new URLSearchParams(urlSearch));
      if (!!urlSearch) {
        setFilter(params);
        callbackOnInit?.(params);
      } else {
        set({ ...params, ...initialState });
        callbackOnInit?.({ ...params, ...initialState });
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    filter,
    add,
    setToQuery,
    set,
    reset,
    query: windowIsLoaded ? window.location.search : "",
  };
}

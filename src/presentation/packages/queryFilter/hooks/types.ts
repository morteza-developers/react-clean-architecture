export type FilterContextType<TInputs> = 
  {
    filter: TInputs;
    add: (
      values: Partial<TInputs> | ((values: TInputs) => TInputs)
    ) => Promise<TInputs>;
    
    setToQuery: () => void;

    set: (
      values: Partial<TInputs> | ((values: TInputs) => TInputs)
    ) => TInputs;
    reset: (fn?: (e: TInputs) => void) => Promise<TInputs>;
    query: string;
  }



  
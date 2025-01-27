import { createContext, useCallback, useState } from "react";

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
}

interface DashboardProviderProps {
  children: React.ReactNode;
}

const DashboardContext = createContext({} as DashboardContextValue);

function DashboardProvider({ children }: DashboardProviderProps) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardContext, DashboardProvider };

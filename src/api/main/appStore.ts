import { createContext, useContext } from "react";
import { CommonStore } from "../storeCollection/commonStore";
import { FailureComponentStore } from "../storeCollection/failureComponentStore";
import { MaintenanceItemStore } from "../storeCollection/maintenanceItemStore";
import { StandardRepairFeatureStore } from "../storeCollection/standardRepairFeatureStore";

interface Store {
  commonStore: CommonStore;
  failureComponentStore: FailureComponentStore;
  standardRepairFeatureStore: StandardRepairFeatureStore;
  maintenanceItemStore: MaintenanceItemStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  failureComponentStore: new FailureComponentStore(),
  standardRepairFeatureStore: new StandardRepairFeatureStore(),
  maintenanceItemStore: new MaintenanceItemStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}

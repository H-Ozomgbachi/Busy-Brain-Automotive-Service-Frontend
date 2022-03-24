import { makeAutoObservable } from "mobx";
import agent from "../main/apiAgent";
import { store } from "../main/appStore";
import { FailureComponentData } from "../models/failureComponent";

export class FailureComponentStore {
  failureComponents: FailureComponentData[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  getFailureComponents = async (pageNumber = 1, pageSize = 25) => {
    try {
      store.commonStore.setLoading(true);
      const data = await agent.FailureComponents.getAllFailureComponents(
        pageNumber,
        pageSize
      );

      return data.data;
    } catch (error) {
      throw error;
    } finally {
      store.commonStore.setLoading(false);
    }
  };
}

import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../main/apiAgent";
import { apiUrl } from "../main/apiConfig";
import { store } from "../main/appStore";
import { MaintenanceItemData } from "../models/maintenanceItem";
import {
  PayloadForQuotation,
  Quotation,
} from "../models/standardRepairFeature";

export class StandardRepairFeatureStore {
  maintenanceItemsFromFailureIds: MaintenanceItemData[] = [];

  currentlyCheckedQuotation: Quotation[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  resetQuotation = () => {
    this.currentlyCheckedQuotation = [];
  };

  getMaintenanceItemsByFailureIds = async (failureComponentIds: number[]) => {
    try {
      store.commonStore.setLoading(true);

      return await agent.StandardRepairFeature.maintenanceItemsByMultipleFeatureComponent(
        failureComponentIds
      );
    } catch (error) {
      throw error;
    } finally {
      store.commonStore.setLoading(false);
    }
  };

  checkQuotation = async (payload: PayloadForQuotation) => {
    try {
      const data = await agent.StandardRepairFeature.checkQuotation(
        payload.maintenanceItems
      );
      runInAction(() => {
        this.currentlyCheckedQuotation = data;
      });
    } catch (error) {
      throw error;
    }
  };

  downloadRepairQuotation = async (values: Quotation[]) => {
    try {
      store.commonStore.setLoading(true);
      axios({
        url: `${apiUrl}/standard-repair/download-quotation`,
        method: "POST",
        responseType: "blob",
        data: values,
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `quotation-${Date.now()}.pdf`);
        document.body.appendChild(link);
        link.click();
      });
    } catch (error) {
      throw error;
    } finally {
      store.commonStore.setLoading(false);
    }
  };
}

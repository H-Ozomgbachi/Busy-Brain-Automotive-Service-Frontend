import requests from "../main/apiConfig";
import { MaintenanceItemData } from "../models/maintenanceItem";
import { Quotation } from "../models/standardRepairFeature";

export const StandardRepairFeature = {
  maintenanceItemsByMultipleFeatureComponent: (ids: number[]) =>
    requests.post<MaintenanceItemData[]>(
      "/standard-repair/maintenance-items-by-multiple-failure-components",
      ids
    ),

  checkQuotation: (codes: string[]) =>
    requests.post<Quotation[]>("/standard-repair/check-quotation", codes),

  downloadQuotation: (values: Quotation[]) =>
    requests.post<BlobPart>("/standard-repair/download-quotation", values),
};

export interface Quotation {
  repairName: string;
  repairCode: string;
  repairAmount: number;
}

export interface PayloadForQuotation {
  failureComponentIds: number[];
  maintenanceItems: string[];
}

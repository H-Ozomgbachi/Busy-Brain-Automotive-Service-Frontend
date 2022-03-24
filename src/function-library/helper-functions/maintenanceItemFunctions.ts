import { MaintenanceItemData } from "../../api/models/maintenanceItem";

export const MaintenanceItemOptions = (values: MaintenanceItemData[]) => {
  return values.map((el) => {
    return {
      text: el.title,
      value: el.code,
    };
  });
};

import { FailureComponents } from "../endpoints/failureComponentEndpoint";
import { MaintenanceItem } from "../endpoints/maintenanceItemEndpoint";
import { StandardRepairFeature } from "../endpoints/standardRepairFeatureEndpoint";

const agent = {
  FailureComponents: FailureComponents,
  StandardRepairFeature: StandardRepairFeature,
  MaintenanceItem: MaintenanceItem,
};

export default agent;

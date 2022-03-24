import requests from "../main/apiConfig";
import { AllFailureComponent } from "../models/failureComponent";

export const FailureComponents = {
  getAllFailureComponents: (PageNumber: number, PageSize: number) =>
    requests.get<AllFailureComponent>(
      `/failure-components?PageNumber=${PageNumber}&PageSize=${PageSize}`
    ),
};

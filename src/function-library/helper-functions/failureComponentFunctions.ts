import { FailureComponentData } from "../../api/models/failureComponent";

export const FailureComponentOptions = (values: FailureComponentData[]) => {
  return values.map((el) => {
    return {
      text: el.title,
      value: el.id,
    };
  });
};

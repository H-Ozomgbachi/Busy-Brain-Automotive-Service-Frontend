import { Formik, Form } from "formik";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import { useStore } from "../../../api/main/appStore";
import { FailureComponentData } from "../../../api/models/failureComponent";
import { MaintenanceItemData } from "../../../api/models/maintenanceItem";
import { FailureComponentOptions } from "../../../function-library/helper-functions/failureComponentFunctions";
import { MaintenanceItemOptions } from "../../../function-library/helper-functions/maintenanceItemFunctions";
import { MyMultipleSelectInput } from "../../inputs/MySelectInput";
import "./css/StandardRepairForm.css";

export default observer(function StandardRepairForm() {
  const [maintenanceItems, setMaintenanceItems] = useState<
    MaintenanceItemData[]
  >([]);
  const [failureComponents, setFailureComponents] = useState<
    FailureComponentData[]
  >([]);
  const { failureComponentStore, standardRepairFeatureStore } = useStore();

  useEffect(() => {
    (async function initializeData() {
      const result = await failureComponentStore.getFailureComponents();
      setFailureComponents(result);
    })();
  }, [failureComponentStore]);

  const handleGetMaintenanceItems = async (values: any) => {
    const result =
      await standardRepairFeatureStore.getMaintenanceItemsByFailureIds(
        values.failureComponentIds
      );
    setMaintenanceItems(result);
  };

  return (
    <div className="standard-repair-form-container shadow-lg ">
      <h2 className="standard-repair-form-title">
        Check Repair Cost for Medium &amp; Heavy duty Trucks
      </h2>
      <hr />

      <Formik
        initialValues={{
          failureComponentIds: [],
          maintenanceItems: [],
          error: null,
        }}
        onSubmit={async (values, { setErrors }) =>
          standardRepairFeatureStore.checkQuotation(values)
        }
        validationSchema={Yup.object({
          failureComponentIds: Yup.array().required(
            "failure component is a required"
          ),
          maintenanceItems: Yup.array().required("this field is required"),
        })}
      >
        {({ handleSubmit, errors, isSubmitting, isValid, dirty, values }) => (
          <Form className="ui form">
            <MyMultipleSelectInput
              name="failureComponentIds"
              placeholder="Select Failure Component"
              options={FailureComponentOptions(failureComponents)}
              label={
                <span className="standard-repair-form-label">
                  Choose Failure Component
                </span>
              }
              onClose={() => handleGetMaintenanceItems(values)}
            />

            <MyMultipleSelectInput
              name="maintenanceItems"
              placeholder="Select Maintenance Items"
              options={MaintenanceItemOptions(maintenanceItems)}
              label={
                <span className="standard-repair-form-label">
                  Choose Maintenance Items
                </span>
              }
            />

            <Button
              loading={isSubmitting}
              content="Continue"
              type="submit"
              className="standard-repair-form-btn"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
});

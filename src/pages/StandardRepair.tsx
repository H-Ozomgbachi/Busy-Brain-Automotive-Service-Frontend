import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import { useStore } from "../api/main/appStore";
import StandardRepairForm from "../components/pages-components/standard-repair-feature/StandardRepairForm";
import StandardRepairQuotationTable from "../components/pages-components/standard-repair-feature/StandardRepairQuotationTable";
import "./css/StandardRepair.css";

export default observer(function StandardRepair() {
  const [isQuotationChecked, setIsQuotationChecked] = useState(false);

  const { standardRepairFeatureStore } = useStore();

  useEffect(() => {
    if (standardRepairFeatureStore.currentlyCheckedQuotation.length > 0) {
      setIsQuotationChecked(true);
    } else {
      setIsQuotationChecked(false);
    }
  }, [standardRepairFeatureStore.currentlyCheckedQuotation]);

  return (
    <div className="standard-repair-container">
      <h1 className="company-name">BBAS Ltd.</h1>

      {isQuotationChecked ? (
        <StandardRepairQuotationTable
          data={standardRepairFeatureStore.currentlyCheckedQuotation}
        />
      ) : (
        <StandardRepairForm />
      )}
    </div>
  );
});

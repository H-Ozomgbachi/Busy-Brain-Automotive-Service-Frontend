import { observer } from "mobx-react-lite";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import { useStore } from "../../../api/main/appStore";
import { NairaFormatter } from "../../../api/main/coreMethods";
import { Quotation } from "../../../api/models/standardRepairFeature";
import "./css/StardRepairQuotationTable.css";

interface Props {
  data: Quotation[];
}

export default observer(function StandardRepairQuotationTable({ data }: Props) {
  const { standardRepairFeatureStore } = useStore();
  return (
    <div className="standard-repair-table-container shadow-lg">
      <h2 className="standard-repair-form-title">
        Standard Maintenance Invoice
      </h2>
      <div className="table-responsive bg-light">
        <table className="table table-bordered table-striped">
          <thead>
            <tr className="standard-repair-table-heading">
              <th>Maintenance item</th>
              <th>Code</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody className="border-top-0">
            {data.map((el) => (
              <tr key={el.repairCode}>
                <td>{el.repairName}</td>
                <td>{el.repairCode}</td>
                <td>{NairaFormatter(el.repairAmount)}</td>
              </tr>
            ))}
          </tbody>

          <tfoot className="border-top-0 standard-repair-table-footer">
            <tr>
              <td className="standard-repair-table-footer-empty"></td>
              <td>Total</td>
              <td>
                {" "}
                {NairaFormatter(_.sumBy(data, (el) => el.repairAmount))}{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <Button
        content="Download as Pdf"
        type="submit"
        fluid
        className="standard-repair-form-btn mt-3"
        onClick={() => standardRepairFeatureStore.downloadRepairQuotation(data)}
      />

      <span
        className="standard-repair-table-go-back"
        onClick={() => standardRepairFeatureStore.resetQuotation()}
      >
        <i className="icon arrow left"></i>
        Go Back to Widget
      </span>
    </div>
  );
});

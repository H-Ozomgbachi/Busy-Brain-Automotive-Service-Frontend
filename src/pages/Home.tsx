import { customHistory } from "..";

export default function Home() {
  return (
    <div className="container">
      <button
        className="btn btn-success mt-3"
        onClick={() => customHistory.push("/standard-repair")}
      >
        Go to Standard Repair
      </button>
    </div>
  );
}

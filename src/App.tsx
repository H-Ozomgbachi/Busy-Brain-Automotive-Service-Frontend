import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { useStore } from "./api/main/appStore";
import "./App.css";
import ErrorDisplay from "./components/error-display/ErrorDisplay";
import Footer from "./components/footer/Footer";
import LoadingComponent from "./components/loading-spinner/LoadingComponent";
import Home from "./pages/Home";
import StandardRepair from "./pages/StandardRepair";

export default observer(function App() {
  const { commonStore } = useStore();
  return (
    <>
      <LoadingComponent active={commonStore.loading} />

      <div className="page-container">
        <ErrorDisplay visible={commonStore.isThereError} />

        <main className="content-wrap min-vh-100">
          <Routes>
            <Route index element={<Home />} />

            <Route path="standard-repair">
              <Route index element={<StandardRepair />} />
              <Route path="create" element={<></>} />
            </Route>

            <Route path="server-error" />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
});

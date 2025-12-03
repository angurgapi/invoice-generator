import "./App.css";
import InvoiceForm from "./components/InvoiceForm";
import { useHealthCheck } from "./hooks/useHealthCheck";

function App() {
  useHealthCheck();

  return (
    <>
      <InvoiceForm />
    </>
  );
}

export default App;

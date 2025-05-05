import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { ProductsProvider } from "./context/ProductsContext.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store/Store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);

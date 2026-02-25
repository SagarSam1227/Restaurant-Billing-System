import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { CategoryProvider } from "./contextApi/CategoryContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contextApi/SearchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <CategoryProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
      </CategoryProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
);

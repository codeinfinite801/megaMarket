import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto">
          <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
          </AuthProvider>
        </div>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

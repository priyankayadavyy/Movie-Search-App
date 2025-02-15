import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTNjMTNjYWJiNTlmZjk4MjRlMjY4NDk3NjRkMzcxMiIsIm5iZiI6MTczNTQ2NTU4My44MDcwMDAyLCJzdWIiOiI2NzcxMWE2Zjc3ZTJiNmQ0Nzg5Mjc4ODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.npmXEeNilCMmJIa8TVViq0Gu-RpvuI7Kf3g68BT8dVE";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

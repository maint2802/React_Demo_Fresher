import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routers";
import AuthProvider from "./contextAPIs/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

// router

// Route, Routes,

// createBrowserRouter
// Layout

// webpack

// router: navigate, redirect
// params URL
// call api
// ContextAPI -> useContext
// global state: localstorage, contexAPI, lib (redux, zustand)

// contextAPI: themeColor, language, dark/light mode, auth
// lib:

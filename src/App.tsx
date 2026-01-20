import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

import Loading from "./pages/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

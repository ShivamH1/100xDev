import { lazy, startTransition, Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

const Landing = lazy(() => import("../components/Landing")); 
const Dashboard = lazy(() => import("../components/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() { 
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
            // startTransition(() => {
            //   navigate("/");
            // }); 
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
            // startTransition(() => {
            //   navigate("/dashboard");
            // });
          }}
        >
          Dashboard
        </button>

        {/* <button onClick={() => window.location.href = "/"}>Landing</button>
        <button onClick={() => window.location.href = "/dashboard"}>Dashboard</button>       */}
      </div>
    </div>
  );
}

export default App;

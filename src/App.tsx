import { Route, Routes, BrowserRouter } from "react-router-dom";
import PageHome from "@/pages/Home/Home";
import Layout from "@/pages/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


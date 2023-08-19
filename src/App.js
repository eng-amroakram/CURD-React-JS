import React from "react";
import ReadPage from "./pages/ReadPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReadPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

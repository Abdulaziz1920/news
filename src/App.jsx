import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Business from "./pages/Business";
import Content from "./components/Content";
import Entertainment from "./pages/Entertainment";
import General from "./pages/General";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Content />
        <Routes path="/">
          <Route path="business" title="Dashboard" element={<Business />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="general" element={<General />} />
          <Route path="health" element={<Health />} />
          <Route path="science" element={<Science />} />
          <Route path="sport" element={<Sport />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

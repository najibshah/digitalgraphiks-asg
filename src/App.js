// using React Router v6
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MobileBottomAppBar, Header, NoPage, Footer } from "./layout";
import { HomePage } from "./home-page";

function App() {
  return (
    <Fragment>
      <Header />
      <div style={{ marginBottom: "110px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <MobileBottomAppBar />
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;

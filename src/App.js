// using React Router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MobileBottomAppBar, Header, NoPage, Footer } from "./layout";
import { HomePage } from "./home-page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// NOTE: Code may be a little undercooked, As i mentioned in the interview i had some prior
// commitments to attend to over the weekend hence i was only able to start working on this
// at 5PM on sunday.
// Code also maybe a little undercooked because it'w written in one go without any time for
// refactoring or applying best practices and proper commenting.
// NOTE: I would be very grateful if proper feedback is given back on this attempt so i can
// take note of what to write better next time and any topics i may need to prepare

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <MobileBottomAppBar />
      <Footer />
    </>
  );
}

export default App;

import { HomePage, AboutPage, ProgramPage, ErrorPage } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="relative z-0 overflow-hidden bg-white">
      <header className="fixed top-0 z-30 block w-full">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

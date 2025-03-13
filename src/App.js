import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Info from "./components/info";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
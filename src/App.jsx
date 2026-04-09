import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Collection from "./pages/Collections";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";   // ✅ NEW
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";


// collections


// import Bride from "./pages/Bride";
// import Groom from "./pages/Groom";
// import Party from "./pages/Party";
// import Beachwear from "./pages/Beachwear";
import Nightwear from "./layouts/Nightwear.jsx";
// import Designer from "./pages/Designer";



function App() {
  return (
   <BrowserRouter>
  <Navbar />   {/* ✅ ONLY HERE */}

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/men" element={<Men />} />
    <Route path="/women" element={<Women />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/collections" element={<Collection />} />

{/* collections */}
{/* <Route path="/bride" element={<Bride />} />
<Route path="/groom" element={<Groom />} />
<Route path="/party" element={<Party />} />
<Route path="/beachwear" element={<Beachwear />} /> */}
<Route path="/nightwear" element={<Nightwear />} />
{/* <Route path="/designer" element={<Designer />} /> */}

  </Routes>
  <Footer />   {/* ✅ ONLY HERE */}


</BrowserRouter>
  );
}

export default App;
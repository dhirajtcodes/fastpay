import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Login, Error } from "./routes/routes";
import Service from "./pages/Service";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;

import React from "react";
import Footer from "../Footer/Footer";
import {
  Navbar,
  Header,
  HowitsWork,
  AboutUs,
  Support,
  HowtoSendMoney,
  ContactForm,
} from "../routes/routes";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowitsWork />
      <AboutUs />
      <Support />
      <HowtoSendMoney />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

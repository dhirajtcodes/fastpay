import React from "react";

export const Login = React.lazy(() => import("../Login/Login"));
export const About = React.lazy(() => import("../pages/About"));
export const Contact = React.lazy(() => import("../pages/Contact"));
export const Home = React.lazy(() => import("../pages/Home"));
export const Service = React.lazy(() => import("../pages/Service"));
export const Error = React.lazy(() => import("../pages/Errors"));
export const Navbar = React.lazy(() => import("../Navbar/Navbar"));
export const Header = React.lazy(() => import("../Header/Header"));
export const HowitsWork = React.lazy(() => import("../Header/HowitsWork"));
export const AboutUs = React.lazy(() => import("../About/AboutUs"));
export const Support = React.lazy(() => import("../About/support"));
export const HowtoSendMoney = React.lazy(() =>
  import("../About/HowtoSendMoney")
);
export const ContactForm = React.lazy(() => import("../Contact/ContactForm"));
export const Footer = React.lazy(() => import("../Footer/Footer"));

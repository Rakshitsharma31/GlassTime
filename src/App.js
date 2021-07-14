import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Aboutus from "./Aboutus.js";
import Contactus from "./Contactus.js";
import Subscribed from "./Subscribed.js";
import Newsp from "./Newsp.js";
import Magazines from "./Magazine.js";
import Homep from "./Home.js";
import Eventp from "./Events.js";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homep />
      <Footer />
    </>
  );
};

const Magazine = () => {
  return (
    <>
      <Navbar />
      <Magazines/>
      <Footer />
    </>
  );
};

const Events = () => {
  return (
    <>
      <Navbar />
      <Eventp/>
      <Footer />
    </>
  );
};
const News = () => {
  return (
    <>
      <Navbar />
      <Newsp />
      <Footer />
    </>
  );
};
const Subscribe = () => {
  return (
    <>
      <Navbar />
      <Subscribed />
      <Footer />
    </>
  );
};
const Contact = () => {
  return (
    <>
      <Navbar/>
      <Contactus/>
      <Footer/>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <Aboutus />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/magazine">
        <Magazine />
      </Route>

      <Route path="/events">
        <Events />
      </Route>

      <Route path="/news">
        <News />
      </Route>

      <Route path="/subscribe">
        <Subscribe />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/about">
        <About />
      </Route>

    </Switch>
  );
};

export default App;

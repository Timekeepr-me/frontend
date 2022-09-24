import React from "react";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-b from-primary to-ternary">
        <LandingPage />
      </div>
    </React.Fragment>
  );
}

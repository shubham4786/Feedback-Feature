"use client";
import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import FeedbackFAB from "../components/FeedbackFAB";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <NavigationBar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLogin={handleLogIn}
      />
      <FeedbackFAB isLoin={isLoggedIn} />
    </div>
  );
}

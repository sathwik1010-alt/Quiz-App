import React from "react";

const Header = () => (
  <header style={styles.header}>
    <h1>Quiz App</h1>
    <p>by <strong>GATTU SATHWIK</strong></p>
  </header>
);

const styles = {
  header: {
    background: "#007bff",
    color: "white",
    padding: "20px 0",
    width: "100%",
    marginBottom: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

export default Header;
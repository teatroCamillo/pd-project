import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
            >
            <Link to="/">Home</Link> |{" "}
            <Link to="/login">Login</Link> |{" "}
            <Link to="/test">Test</Link> |{" "}
            <Link to="/risk">FormRisk</Link>
        </nav>
    </div>
  )
}

export default Home
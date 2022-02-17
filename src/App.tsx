import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);

  return (
    <div className="App">
      <header>
        <h1>Login</h1>
        <nav>
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/private">
            <a>Private Area</a>
          </Link>
          {auth.user && <a href="javascript:;">Sair</a>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

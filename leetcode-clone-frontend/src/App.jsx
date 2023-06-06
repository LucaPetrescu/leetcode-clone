import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import { ThemeContextProvider } from "./Components/Contexts/ThemeContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;

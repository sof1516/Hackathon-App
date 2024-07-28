import "./App.css";
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Login } from "./login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

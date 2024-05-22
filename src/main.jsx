import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SidebarProvider } from "./context/SidebarContex.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeProvider>
);

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActionIcon from "./components/FloatingActionIcon";

// You may need to adapt your ClientProviders if they used Next.js specifics
import { InteractiveCanvas, ScrollProgress, CustomCursor, SmoothScroll } from "./components/LayoutWrappers";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <InteractiveCanvas />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <AppRoutes />
        <Footer />
        <FloatingActionIcon />
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;


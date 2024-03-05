import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <main>
      <Header />
      <AppRoutes />
      <Footer />
    </main>
  );
}

export default App;

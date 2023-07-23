import "./App.css";
import InitialPage from "./components/InitialPage/InitialPage";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import DownloadExtension from "./components/DownloadExtension/DownloadExtension";

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <InitialPage />
        <Features />
        <DownloadExtension />
      </main>
    </div>
  );
}

export default App;

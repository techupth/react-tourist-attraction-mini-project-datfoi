import "./App.css";
import { Header, SearchBar } from "./components/HeaderAndSearchBar";

function App() {
  return (
    <div className="App">
      <>
        <div className="flex flex-col justify-center items-center h-screen">
          <Header />
          <SearchBar />
        </div>
      </>
    </div>
  );
}

export default App;

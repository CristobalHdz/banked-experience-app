// React imports
import { Route, Routes, Navigate } from "react-router-dom";

// Views imports
import Mainview from "./views/Mainview";

// Redux imports
import ItemXpProvider from "./store/ItemXpProvider";

// CSS imports
import "./App.css";

function App() {
  return (
    <ItemXpProvider className="App">
      <main>
        <Mainview />
        {/* <Routes>
          <Route path="/" element={<Mainview />} />
        </Routes> */}
      </main>
    </ItemXpProvider>
  );
}

export default App;

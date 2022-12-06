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
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Mainview />} />

          {/* <Route path="/welcome" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>}></Route>
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} /> */}
        </Routes>
      </main>
    </ItemXpProvider>
  );
}

export default App;

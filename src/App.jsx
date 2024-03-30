import "./App.css";
import MenuList from "./components/MenuList";
import foodItems from "./Data.js";

function App() {
  return (
      <article>
        <h1>Wild Restaurant Menu</h1>
        <MenuList foodItems={foodItems} />
      </article>
  );
}

export default App;

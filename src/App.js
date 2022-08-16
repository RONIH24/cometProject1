import "./App.css";
import items from "./data.js";
import Card from "./card.js";

function App() {
  return (
    <button>
      <div className="grid">
        <Card items={items[0]}></Card>
        <Card items={items[1]}></Card>
        <Card items={items[2]}></Card>
        <Card items={items[3]}></Card>
        <Card items={items[4]}></Card>
        <Card items={items[5]}></Card>
      </div>
    </button>
  );
}

export default App;

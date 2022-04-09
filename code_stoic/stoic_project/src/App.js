import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Hello from "./components/Hello";
import Profile from "./components/Profile";
import Counter from "./components/Component";
import ChoresForm from "./components/ChoresForm";
import ConditionalComponent from "./components/ConditionalComponents";
import Products from "./components/Products";
import ToDoForm from "./components/ToDoForm";
import StyleComponent from "./components/StyleComponent";
function App() {
  const productItemList = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Bags", price: 200 },
    { id: 3, name: "Chair", price: 300 },
    { id: 4, name: "Desk", price: 5000 },
  ];

  function alertNameHandler(name) {
    alert("hello" + name);
  }

  return (
    <div className="App">
      <Hello />
      <Message />
      <Profile alertName={alertNameHandler} name="helen" />
      <Profile alertName={alertNameHandler} name="keller" />
      <Counter />
      <ConditionalComponent />
      <Products products={productItemList} />
      <StyleComponent />
      <ChoresForm />
      <ToDoForm />
    </div>
  );
}

export default App;

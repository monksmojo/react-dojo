import { useState, useEffect } from "react";

import Form from "./components/Form";
import ItemList from "./components/ItemList";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [requestType, setRequestType] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URL}${requestType}`, {
          method: "GET",
        });
        const data = await response.json();
        setItems([...data]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItem();
  }, [requestType]);

  return (
    <div>
      <Form requestType={requestType} setRequestType={setRequestType} />
      <ItemList items={items} />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import "./styles.css";
import "semantic-ui-css/semantic.min.css";

import List from "./list";

const generateItems = n => {
  let items = [];
  while (n > 0) {
    items.push({
      name: faker.lorem.sentence(3)
    });
    n--;
  }
  return items;
};

function App() {
  const items = generateItems(7);
  return (
    <div className="wrapper">
      <List items={items} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

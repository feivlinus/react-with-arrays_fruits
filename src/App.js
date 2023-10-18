import { Fragment } from "react";
import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 1, name: "🍎 apple", color: "red" },
    { id: 2, name: "🍍 pineapple", color: "yellow" },
    { id: 3, name: "🥝 kiwi", color: "green" },
    { id: 4, name: "🫐 blueberry", color: "purple" },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map(({ id, name, color }) => (
        <Fragment key={id}>
          <Card name={name} color={color} />
        </Fragment>
      ))}
    </div>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl font-bold underline flex justify-center items-center">
          Hello world!
        </h1>
      </div>
    </>
  );
}

export default App;

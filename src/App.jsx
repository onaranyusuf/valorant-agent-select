import { useState } from "react";
import "./App.css";
import AgentsData from "./components/AgentsData";
import AgentIcons from './components/AgentIcons';



function App() {
  console.log(AgentsData);

  return (
    <>
      <div className="">
        <AgentIcons />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import AgentsData from "./components/AgentsData";
import Sunset from "./components/Sunset";
import ChamberIcon from "./assets/agent_icons/Chamber_icon.webp";
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

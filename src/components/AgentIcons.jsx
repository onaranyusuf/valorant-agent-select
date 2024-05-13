import React, { useState, useRef } from "react";
import AgentsData from "./AgentsData";
import AgentInfo from "./AgentInfo"; // Import the AgentInfo component

const AgentsGallery = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const videoRef = useRef(null); // Create a ref for the video element
  const [hoveredAgent, setHoveredAgent] = useState(null); // Track hovered agent for background color

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
    setHoveredAgent(null); // Reset hovered agent when an agent is selected
    if (videoRef.current) { // Check if video element exists before playback
      videoRef.current.play();
    }
  };

  return (
    <div className="flex justify-center items-end h-screen pb-5">
      <div className="grid grid-cols-10 grid-flow-row gap-x-1.5 gap-y-1 position-relative z-10">
        {AgentsData.map((agent, index) => (
          <div key={index} className="">
            <div
              className={`relative w-[50px] h-[50px] cursor-pointer ${
                selectedAgent === agent ? "bg-gray-300" : ""
              }`}
              onClick={() => handleAgentClick(agent)}
              onMouseEnter={() => setHoveredAgent(agent)} // Set hovered agent on mouse enter
              onMouseLeave={() => setHoveredAgent(null)} // Reset hovered agent on mouse leave
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-auto rounded-sm border-[0.1px] border-gray-400 shadow-lg bg-transparent"
              />
            </div>
          </div>
        ))}
      </div>
      {selectedAgent && <AgentInfo agent={selectedAgent} />} {/* Render AgentInfo if an agent is selected */}
      {selectedAgent && (
        <video
          ref={videoRef}
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          src={selectedAgent.video}
          autoPlay
          muted={false}
          loop={true}
          controls={false}
          onClick={false}
        />
      )}
      {/* Set background for hovered agent */}
      {hoveredAgent && (
        <div
          className="fixed bottom-0 left-0 right-0 h-[55px] bg-gray-300 z-0"
          style={{ transform: "translateY(100%)" }}
        />
      )}
    </div>
  );
};

export default AgentsGallery;

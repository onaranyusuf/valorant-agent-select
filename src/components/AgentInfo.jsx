import React, { useState, useEffect } from "react";

const Icon = ({ label, onClick }) => {
  return (
    <div className="inline-block cursor-pointer" onClick={onClick}>
      <span className="text-xs text-[#dee68c] mr-1">{label}</span>
    </div>
  );
};

const AgentInfo = ({ agent }) => {
  const [activeInfo, setActiveInfo] = useState(agent.info);

  const handleInfoChange = (newInfo) => {
    setActiveInfo(newInfo);
  };

  // Yeni ajan seçildiğinde info'ya geri dön
  useEffect(() => {
    setActiveInfo(agent.info);
  }, [agent]);

  return (
    <div className="absolute top-[40px] right-0 m-5 p-3 bg-transparent shadow-lg rounded-md z-50 text-gray-600 w-[450px]">
      <h1 className="text-md font-semibold uppercase tracking-[1px] text-white">
        {agent.role}
      </h1>
      <h1 className="text-7xl text-[#dee68c] font-semibold uppercase anton-regular tracking-[1px]">
        {agent.name}
      </h1>

      <div className="flex items-center mb-3">
        <Icon label="INFO" onClick={() => handleInfoChange(agent.info)} />
        <Icon label="C" onClick={() => handleInfoChange(agent.abilities_c)} />
        <Icon label="Q" onClick={() => handleInfoChange(agent.abilities_q)} />
        <Icon label="E" onClick={() => handleInfoChange(agent.abilities_e)} />
        <Icon label="X" onClick={() => handleInfoChange(agent.abilities_x)} />
      </div>

      <p className="text-xs max-w-[350px] font-medium tracking-[1px]">
        {
          activeInfo === agent.info ? (
            <>
              <p className="text-xs text-[#dee68c] max-w-[350px] font-medium tracking-[1px]">
                {agent.info}
              </p>
              <p className="text-lg uppercase text-white pt-3 anton-regular tracking-[1px]">
                {agent.role}
              </p>
              <p className="text-xs text-white max-w-[350px]">
                {agent.role_info}
              </p>
            </>
          ) : activeInfo === agent.abilities_c ? (
            <>
              <p className="text-lg uppercase text-white pt-3 anton-regular tracking-[2px]">
                {agent.abilities_c_name}
              </p>
              <p className="text-xs text-white max-w-[350px] font-normal tracking-[1px] pt-1">
                {agent.abilities_c}
              </p>
            </>
          ) : activeInfo === agent.abilities_q ? (
            <>
              <p className="text-lg uppercase text-white pt-3 anton-regular tracking-[2px]">
                {agent.abilities_q_name}
              </p>
              <p className="text-xs text-white max-w-[350px] font-normal tracking-[1px] pt-1">
                {agent.abilities_q}
              </p>
            </>
          ) : activeInfo === agent.abilities_e ? (
            <>
              <p className="text-lg uppercase text-white pt-3 anton-regular tracking-[2px]">
                {agent.abilities_e_name}
              </p>
              <p className="text-xs text-white max-w-[350px] font-normal tracking-[1px] pt-1">
                {agent.abilities_e}
              </p>
            </>
          ) : activeInfo === agent.abilities_x ? (
            <>
              <p className="text-lg uppercase text-white pt-3 anton-regular tracking-[2px]">
                {agent.abilities_x_name}
              </p>
              <p className="text-xs text-white max-w-[350px] font-normal tracking-[1px]">
                {agent.abilities_x}
              </p>
            </>
          ) : (
            <p className="text-xs text-[#dee68c] max-w-[350px] font-medium tracking-[1px]">
              {agent.info}
            </p>
          )
        }
      </p>
    </div>
  );
};

export default AgentInfo;

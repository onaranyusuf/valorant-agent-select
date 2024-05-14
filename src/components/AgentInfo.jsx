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

  const AbilityButton = ({ label, icon, active, onClick }) => (
    <div
      className={`w-[90px] flex flex-col items-center justify-center relative`}
      onClick={onClick}
    >
      <span
        className={`text-center text-white font-bold w-[90px] ${
          active ? "bg-transparent-gray2" : ""
        }`}
      >
        {label}
      </span>
      <div className="w-[90px] flex justify-center pt-1">
        <div
          className={`w-[90px] flex justify-center ${
            active ? "bg-transparent-gray" : ""
          }`}
        >
          <img
            src={icon}
            alt="Ability Icon"
            className="w-[30px] h-[30px] my-1"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="absolute top-[40px] right-0 m-5 p-3 bg-transparent shadow-lg rounded-md z-50 text-gray-600 w-[450px]">
      <h1 className="text-md font-semibold uppercase tracking-[1px] text-white">
        {agent.role}
      </h1>
      <h1 className="text-7xl text-[#dee68c] font-semibold uppercase anton-regular tracking-[1px]">
        {agent.name}
      </h1>

      <div className="flex items-center mb-3 mt-7 w-[450px]">
        <div className="flex-col-5 flex">
          {[
            { key: "info", label: "INFO", icon: agent.role_icon },
            { key: "abilities_c", label: "C", icon: agent.abilities_c_icon },
            { key: "abilities_q", label: "Q", icon: agent.abilities_q_icon },
            { key: "abilities_e", label: "E", icon: agent.abilities_e_icon },
            { key: "abilities_x", label: "X", icon: agent.abilities_x_icon },
          ].map(({ key, label, icon }) => (
            <AbilityButton
              key={key}
              label={label}
              icon={icon}
              active={activeInfo === agent[key]}
              onClick={() => handleInfoChange(agent[key])}
            />
          ))}
        </div>
      </div>

      <p className="text-xs max-w-[350px] font-medium tracking-[1px]">
        {activeInfo === agent.info ? (
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
        )}
      </p>
    </div>
  );
};

export default AgentInfo;

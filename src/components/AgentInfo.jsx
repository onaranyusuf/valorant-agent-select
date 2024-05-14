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

  // Tüm ability icon gösterimi ve info gösterimi
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
            className="w-[35px] h-[35px] my-1"
          />
        </div>
      </div>
    </div>
  );

  // Tüm ability açıklamaları ve ajan info açıklaması
  const InfoBlock = ({ title, subtitle, description }) => (
    <>
      {description && (
        <p className="text-xs text-[#dee68c] max-w-[350px] font-medium tracking-[1px]">
          {description}
        </p>
      )}
      <p className="text-lg uppercase text-white pt-3 anton-regular tracking-[2px]">
        {title}
      </p>
      <p className="text-xs text-white max-w-[350px] font-normal tracking-[1px] pt-1">
        {subtitle}
      </p>
    </>
  );

  const ActiveContent = ({ activeInfo, agent }) => {
    switch (activeInfo) {
      case agent.abilities_c:
        return (
          <InfoBlock
            title={agent.abilities_c_name}
            subtitle={agent.abilities_c}
          />
        );
      case agent.abilities_q:
        return (
          <InfoBlock
            title={agent.abilities_q_name}
            subtitle={agent.abilities_q}
          />
        );
      case agent.abilities_e:
        return (
          <InfoBlock
            title={agent.abilities_e_name}
            subtitle={agent.abilities_e}
          />
        );
      case agent.abilities_x:
        return (
          <InfoBlock
            title={agent.abilities_x_name}
            subtitle={agent.abilities_x}
          />
        );
      default:
        return (
          <InfoBlock
            title={agent.role}
            subtitle={agent.role_info}
            description={agent.info}
          />
        );
    }
  };

  return (
    <div className="absolute top-[40px] right-0 m-5 p-3 bg-transparent shadow-lg rounded-md z-50 text-gray-600 w-[450px]">
      <h1 className="text-md font-semibold uppercase tracking-[1px] text-white">
        {agent.role}
      </h1>
      <h1 className="text-7xl text-[#dee68c] font-semibold uppercase anton-regular tracking-[1px]">
        {agent.name}
      </h1>
      {/* Tüm ability icon gösterimi ve info gösterimi */}
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

      {/* Tüm ability açıklamaları ve ajan info açıklaması */}
      <p className="text-xs max-w-[350px] font-medium tracking-[1px]">
        <ActiveContent activeInfo={activeInfo} agent={agent} />
      </p>
    </div>
  );
};

export default AgentInfo;

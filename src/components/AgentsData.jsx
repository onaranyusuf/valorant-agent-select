const importAllIcons = async (icons) => {
  let importedIcons = {};
  await Promise.all(
    icons.map(async (icon) => {
      const { default: importedIcon } = await import(
        `../assets/agent_icons/${icon}.webp`
      );
      importedIcons[icon] = importedIcon;
    })
  );
  return importedIcons;
};

const importAllVideos = async (videos) => {
  let importedVideos = {};
  await Promise.all(
    videos.map(async (video) => {
      const { default: importedVideo } = await import(
        `../assets/agent_videos/${video}.mp4`
      );
      importedVideos[video] = importedVideo;
    })
  );
  return importedVideos;
};

const iconsToImport = [
  "Brimstone_icon",
  "Chamber_icon",
  "Viper_icon",
  "Raze_icon",
  "Omen_icon",
  "Sage_icon",
  "Skye_icon",
  "Killjoy_icon",
  "Cypher_icon",
  "Breach_icon",
  "Sova_icon",
  "Neon_icon",
  "KAYO_icon",
  "Jett_icon",
  "Reyna_icon",
  "Phoenix_icon",
  "Clove_icon",
  "Yoru_icon",
  "Astra_icon",
  "Fade_icon",
  "Harbor_icon",
  "Gekko_icon",
  "Deadlock_icon",
  "Iso_icon",
];

const videosToImport = ["Sage_video", "Yoru_video"];

const agentIcons = await importAllIcons(iconsToImport);

const agentVideos = await importAllVideos(videosToImport);

const AgentsData = [
  {
    name: "Brimstone",
    image: agentIcons["Brimstone_icon"],
    video: "https://example.com/brimstone-intro.mp4",
    selected: false,
    role: "DENEME",
    role_info: "DENEME",
    info: "INFO VAR ",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c: "C SKYE",
    abilities_q: "Q SKYE",
    abilities_e: "E SKYE.",
    abilities_x: "X SKYE ",
  },
  {
    name: "Chamber",
    image: agentIcons["Chamber_icon"],
    video: "https://example.com/chamber-intro.mp4",
    selected: false,
  },
  {
    name: "Viper",
    image: agentIcons["Viper_icon"],
    video: "https://example.com/viper-intro.mp4",
    selected: false,
  },
  {
    name: "Raze",
    image: agentIcons["Raze_icon"],
    video: "https://example.com/raze-intro.mp4",
    selected: false,
  },
  {
    name: "Omen",
    image: agentIcons["Omen_icon"],
    video: "https://example.com/omen-intro.mp4",
    selected: false,
  },
  {
    name: "Sage",
    image: agentIcons["Sage_icon"],
    video: agentVideos["Sage_video"],
    selected: false,
    role: "Sentinel",
    role_info:
      "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
    info: "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    abilities_c_name: "BARRIER ORB",
    abilities_q_name: "SLOW ORB",
    abilities_e_name: "HEALING ORB",
    abilities_x_name: "RESURRECTION",
    abilities_c:
      "EQUIP a barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.",
    abilities_q:
      "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that Slows players caught inside of it.",
    abilities_e:
      "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a Heal-Over-Time on them. ALT FIRE while Sage is damaged to activate a self Heal-Over-Time.",
    abilities_x:
      "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
  },
  {
    name: "Skye",
    image: agentIcons["Skye_icon"],
    video: "https://example.com/skye-intro.mp4",
    selected: false,
    role: "DENEME",
    role_info: "DENEME",
    info: "INFO VAR ",
    abilities_c: "C SKYE",
    abilities_q: "Q SKYE",
    abilities_e: "E SKYE.",
    abilities_x: "X SKYE ",
  },
  {
    name: "Killjoy",
    image: agentIcons["Killjoy_icon"],
    video: "https://example.com/killjoy-intro.mp4",
    selected: false,
  },
  {
    name: "Cypher",
    image: agentIcons["Cypher_icon"],
    video: "https://example.com/cypher-intro.mp4",
    selected: false,
  },
  {
    name: "Breach",
    image: agentIcons["Breach_icon"],
    video: "https://example.com/breach-intro.mp4",
    selected: false,
  },
  {
    name: "Sova",
    image: agentIcons["Sova_icon"],
    video: "https://example.com/sova-intro.mp4",
    selected: false,
  },
  {
    name: "Neon",
    image: agentIcons["Neon_icon"],
    video: "https://example.com/neon-intro.mp4",
    selected: false,
  },
  {
    name: "KAY/O",
    image: agentIcons["KAYO_icon"],
    video: "https://example.com/kayo-intro.mp4",
    selected: false,
  },
  {
    name: "Jett",
    image: agentIcons["Jett_icon"],
    video: "https://example.com/jett-intro.mp4",
    selected: false,
  },
  {
    name: "Reyna",
    image: agentIcons["Reyna_icon"],
    video: "https://example.com/reyna-intro.mp4",
    selected: false,
  },
  {
    name: "Phoenix",
    image: agentIcons["Phoenix_icon"],
    video: "https://example.com/phoenix-intro.mp4",
    selected: false,
  },
  {
    name: "Clove",
    image: agentIcons["Clove_icon"],
    video: "https://example.com/clove-intro.mp4",
    selected: false,
  },
  {
    name: "Yoru",
    image: agentIcons["Yoru_icon"],
    video: agentVideos["Yoru_video"],
    selected: false,
  },
  {
    name: "Astra",
    image: agentIcons["Astra_icon"],
    video: "https://example.com/astra-intro.mp4",
    selected: false,
  },
  {
    name: "Fade",
    image: agentIcons["Fade_icon"],
    video: "https://example.com/fade-intro.mp4",
    selected: false,
  },
  {
    name: "Harbor",
    image: agentIcons["Harbor_icon"],
    video: "https://example.com/harbor-intro.mp4",
    selected: false,
  },
  {
    name: "Gekko",
    image: agentIcons["Gekko_icon"],
    video: "https://example.com/gekko-intro.mp4",
    selected: false,
  },
  {
    name: "Deadlock",
    image: agentIcons["Deadlock_icon"],
    video: "https://example.com/deadlock-intro.mp4",
    selected: false,
  },
  {
    name: "Iso",
    image: agentIcons["Iso_icon"],
    video: "https://example.com/iso-intro.mp4",
    selected: false,
  },
];

export default AgentsData;

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

const importAllAbilities = async (abilities) => {
  let importedAbilities = {};
  await Promise.all(
    abilities.map(async (ability) => {
      const { default: importedAbility } = await import(
        `../assets/agent_abilities_icon/${ability}.webp`
      );
      importedAbilities[ability] = importedAbility;
    })
  );
  return importedAbilities;
};

const iconsToImport = [
  "Brimstone_icon", "Chamber_icon", "Viper_icon", "Raze_icon", "Omen_icon",
  "Sage_icon", "Skye_icon", "Killjoy_icon", "Cypher_icon", "Breach_icon",
  "Sova_icon", "Neon_icon", "KAYO_icon", "Jett_icon", "Reyna_icon",
  "Phoenix_icon", "Clove_icon", "Yoru_icon", "Astra_icon", "Fade_icon",
  "Harbor_icon", "Gekko_icon", "Deadlock_icon", "Iso_icon",
  "Sentinel_icon", "Duelist_icon", "Initiator_icon", "Controller_icon"
];


const videosToImport = ["Sage_video", "Yoru_video"];

const abilitiesToImport = [
  "Sage_c", "Sage_q", "Sage_e", "Sage_x",
  "Brimstone_c", "Brimstone_q", "Brimstone_e", "Brimstone_x",
  "Chamber_c", "Chamber_q", "Chamber_e", "Chamber_x",
  "Viper_c", "Viper_q", "Viper_e", "Viper_x",
  "Raze_c", "Raze_q", "Raze_e", "Raze_x",
  "Omen_c", "Omen_q", "Omen_e", "Omen_x",
  "Skye_c", "Skye_q", "Skye_e", "Skye_x",

];

const DuelistInfo = "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first."
const ControllerInfo = "Controllers are experts in slicing up dangerous territory to set their team up for success."
const InitiatorInfo = "Initiators challenge angles by setting up their team to enter contested ground and push defenders away."
const SentinelInfo = "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds."


const agentIcons = await importAllIcons(iconsToImport);

const agentVideos = await importAllVideos(videosToImport);

const agentAbilities = await importAllAbilities(abilitiesToImport);

const AgentsData = [
  {
    name: "Brimstone",
    image: agentIcons["Brimstone_icon"],
    video: agentVideos["Yoru_video"],
    selected: false,
    role: "Controller",
    role_icon: agentIcons["Controller_icon"],
    role_info: ControllerInfo,
    info: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
    abilities_c_name: "STIM BEACON",
    abilities_q_name: "INCENDIARY",
    abilities_e_name: "SKY SMOKE",
    abilities_x_name: "ORBITAL STRIKE",
    abilities_c_icon: agentAbilities["Brimstone_c"],
    abilities_q_icon: agentAbilities["Brimstone_q"],
    abilities_e_icon: agentAbilities["Brimstone_e"],
    abilities_x_icon: agentAbilities["Brimstone_x"],
    abilities_c:
      "INSTANTLY toss down a stim beacon. Upon landing, it creates a field that grants players a Combat Stim and a Speed Boost.",
    abilities_q:
      "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
    abilities_e:
      "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
    abilities_x:
      "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
  },
  {
    name: "Chamber",
    image: agentIcons["Chamber_icon"],
    video: agentVideos["Yoru_video"],
    selected: false,
    role: "Sentinel",
    role_icon: agentIcons["Sentinel_icon"],
    role_info: SentinelInfo,
    info: 
      "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
    abilities_c_name: "TRADEMARK",
    abilities_q_name: "HEADHUNTER",
    abilities_e_name: "RENDEZVOUS",
    abilities_x_name: "TOUR DE FORCE",
    abilities_c_icon: agentAbilities["Chamber_c"],
    abilities_q_icon: agentAbilities["Chamber_q"],
    abilities_e_icon: agentAbilities["Chamber_e"],
    abilities_x_icon: agentAbilities["Chamber_x"],
    abilities_c:
      "EQUIP a trap that scans for enemies. FIRE to place it on the ground. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that Slows players caught inside of it. The trap can be picked up to be REDEPLOYED.",
    abilities_q:
      "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
    abilities_e:
      "EQUIP a teleport anchor. FIRE to place it on the ground. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.",
    abilities_x:
      "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body. ALT FIRE to aim down sights. Killing an enemy creates a lingering field that Slows players caught inside of it.",
  },
  {
    name: "Viper",
    image: agentIcons["Viper_icon"],
    video: "https://example.com/viper-intro.mp4",
    selected: false,
    role: "Controller",
    role_icon: agentIcons["Controller_icon"],
    role_info: ControllerInfo,
    info: 
      "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    abilities_c_name: "SNAKE BITE",
    abilities_q_name: "POISON CLOUD",
    abilities_e_name: "TOXIC SCREEN",
    abilities_x_name: "VIPER'S PIT",
    abilities_c_icon: agentAbilities["Viper_c"],
    abilities_q_icon: agentAbilities["Viper_q"],
    abilities_e_icon: agentAbilities["Viper_e"],
    abilities_x_icon: agentAbilities["Viper_x"],
    abilities_c:
      "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and applies Vulnerable.",
    abilities_q:
      "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. ALT FIRE to lob. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
    abilities_e:
      "EQUIP a gas emitter launcher that penetrates terrain. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
    abilities_x:
      "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that Nearsights players and Decays the health of enemies inside of it. HOLD the ability key to disperse the cloud early.",
  },
  {
    name: "Raze",
    image: agentIcons["Raze_icon"],
    video: "https://example.com/raze-intro.mp4",
    selected: false,
    role: "Duelist",
    role_icon: agentIcons["Duelist_icon"],
    role_info: DuelistInfo,
    info: 
      "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
    abilities_c_name: "BOOM BOT",
    abilities_q_name: "BLAST PACK",
    abilities_e_name: "PAINT SHELLS",
    abilities_x_name: "SHOWSTOPPER",
    abilities_c_icon: agentAbilities["Raze_c"],
    abilities_q_icon: agentAbilities["Raze_q"],
    abilities_e_icon: agentAbilities["Raze_e"],
    abilities_x_icon: agentAbilities["Raze_x"],
    abilities_c:
      "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
    abilities_q:
      "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.",
    abilities_e:
      "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.",
    abilities_x:
      "EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything.",
  },
  {
    name: "Omen",
    image: agentIcons["Omen_icon"],
    video: "https://example.com/omen-intro.mp4",
    selected: false,
    role: "Controller",
    role_icon: agentIcons["Controller_icon"],
    role_info: ControllerInfo,
    info: 
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities_c_name: "SHROUDED STEP",
    abilities_q_name: "PARANOIA",
    abilities_e_name: "DARK COVER",
    abilities_x_name: "FROM THE SHADOWS",
    abilities_c_icon: agentAbilities["Omen_c"],
    abilities_q_icon: agentAbilities["Omen_q"],
    abilities_e_icon: agentAbilities["Omen_e"],
    abilities_x_icon: agentAbilities["Omen_x"],
    abilities_c:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
    abilities_q:
      "EQUIP a blinding orb. FIRE to throw it forward, briefly Nearsighting and Deafening all players it touches. This projectile can pass straight through walls.",
    abilities_e:
      "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.",
    abilities_x:
      "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport, or PRESS EQUIP for Omen to cancel his teleport.",
  },
  {
    name: "Sage",
    image: agentIcons["Sage_icon"],
    video: agentVideos["Sage_video"],
    selected: false,
    role: "Sentinel",
    role_icon: agentIcons["Sentinel_icon"],
    role_info: SentinelInfo,
    info: "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    abilities_c_name: "BARRIER ORB",
    abilities_q_name: "SLOW ORB",
    abilities_e_name: "HEALING ORB",
    abilities_x_name: "RESURRECTION",
    abilities_c_icon: agentAbilities["Sage_c"],
    abilities_q_icon: agentAbilities["Sage_q"],
    abilities_e_icon: agentAbilities["Sage_e"],
    abilities_x_icon: agentAbilities["Sage_x"],
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
    role: "Initiator",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
    abilities_c_name: "REGROWTH",
    abilities_q_name: "TRAILBLAZER",
    abilities_e_name: "GUIDING LIGHT",
    abilities_x_name: "SEEKERS",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "EQUIP a healing trinket. HOLD FIRE to channel, Healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
    abilities_q:
      "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a Concussive blast and damaging directly hit enemies.",
    abilities_e:
      "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight.",
    abilities_x:
      "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers.",
  },
  {
    name: "Killjoy",
    image: agentIcons["Killjoy_icon"],
    video: "https://example.com/killjoy-intro.mp4",
    selected: false,
    role: "Sentinel",
    role_icon: agentIcons["Sentinel_icon"],
    role_info: SentinelInfo,
    info:  
      "The genius of Germany, Killjoy effortlessly secures key battlefield positions with her arsenal of inventions. If their damage doesn't take her enemies out, the debuff her robots provide will make short work of them.",
    abilities_c_name: "NANOSWARM",
    abilities_q_name: "ALARMBOT",
    abilities_e_name: "TURRET",
    abilities_x_name: "LOCKDOWN",
    abilities_c_icon: agentAbilities["Killjoy_c"],
    abilities_q_icon: agentAbilities["Killjoy_q"],
    abilities_e_icon: agentAbilities["Killjoy_e"],
    abilities_x_icon: agentAbilities["Killjoy_x"],
    abilities_c:
      "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ALT FIRE to lob. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.",
    abilities_q:
      "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot.",
    abilities_e:
      "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. ALT FIRE to swap turret direction. HOLD EQUIP to recall the deployed turret.",
    abilities_x:
      "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
  },
  {
    name: "Cypher",
    image: agentIcons["Cypher_icon"],
    video: "https://example.com/cypher-intro.mp4",
    selected: false,
    role: "Sentinel",
    role_icon: agentIcons["Sentinel_icon"],
    role_info: SentinelInfo,
    info:  
      "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    abilities_c_name: "TRAPWIRE",
    abilities_q_name: "CYBER CAGE",
    abilities_e_name: "SPYCAM",
    abilities_x_name: "NEURAL THEFT",
    abilities_c_icon: agentAbilities["Cypher_c"],
    abilities_q_icon: agentAbilities["Cypher_q"],
    abilities_e_icon: agentAbilities["Cypher_e"],
    abilities_x_icon: agentAbilities["Cypher_x"],
    abilities_c:
      "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be Tethered, Revealed, and Concussed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
    abilities_q:
      "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it.",
    abilities_e:
      "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.",
    abilities_x:
      "INSTANTLY use on a targeted dead enemy to download information on their team. After a brief delay, the location of all living enemy players will be Revealed twice.",
  },
  {
    name: "Breach",
    image: agentIcons["Breach_icon"],
    video: "https://example.com/breach-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Sova",
    image: agentIcons["Sova_icon"],
    video: "https://example.com/sova-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Neon",
    image: agentIcons["Neon_icon"],
    video: "https://example.com/neon-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "KAY/O",
    image: agentIcons["KAYO_icon"],
    video: "https://example.com/kayo-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Jett",
    image: agentIcons["Jett_icon"],
    video: "https://example.com/jett-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Reyna",
    image: agentIcons["Reyna_icon"],
    video: "https://example.com/reyna-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Phoenix",
    image: agentIcons["Phoenix_icon"],
    video: "https://example.com/phoenix-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Clove",
    image: agentIcons["Clove_icon"],
    video: "https://example.com/clove-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Yoru",
    image: agentIcons["Yoru_icon"],
    video: agentVideos["Yoru_video"],
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Astra",
    image: agentIcons["Astra_icon"],
    video: "https://example.com/astra-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Fade",
    image: agentIcons["Fade_icon"],
    video: "https://example.com/fade-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Harbor",
    image: agentIcons["Harbor_icon"],
    video: "https://example.com/harbor-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Gekko",
    image: agentIcons["Gekko_icon"],
    video: "https://example.com/gekko-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Deadlock",
    image: agentIcons["Deadlock_icon"],
    video: "https://example.com/deadlock-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
  {
    name: "Iso",
    image: agentIcons["Iso_icon"],
    video: "https://example.com/iso-intro.mp4",
    selected: false,
    role: "",
    role_icon: agentIcons["Initiator_icon"],
    role_info: InitiatorInfo,
    info:  
      "",
    abilities_c_name: "",
    abilities_q_name: "",
    abilities_e_name: "",
    abilities_x_name: "",
    abilities_c_icon: agentAbilities["Skye_c"],
    abilities_q_icon: agentAbilities["Skye_q"],
    abilities_e_icon: agentAbilities["Skye_e"],
    abilities_x_icon: agentAbilities["Skye_x"],
    abilities_c:
      "",
    abilities_q:
      "",
    abilities_e:
      "",
    abilities_x:
      "",
  },
];

export default AgentsData;

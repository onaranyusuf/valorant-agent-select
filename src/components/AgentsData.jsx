//import videos
//--------------------------
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

const videosToImport = ["Sage_video", "Yoru_video"];
let agentVideos = {};

// Asynchronous initialization function
const initialize = async () => {
  agentVideos = await importAllVideos(videosToImport);
  fetchAgentDataAndSave();
};

// Initialize the data
initialize();

//--------------------------

const AgentsDataKey = 'agentsData';

// Verileri yerel depolama kullanarak kaydetme
function saveAgentsDataToLocalStorage(data) {
  localStorage.setItem(AgentsDataKey, JSON.stringify(data));
}

// Verileri yerel depolamadan geri alma
function getAgentsDataFromLocalStorage() {
  const storedData = localStorage.getItem(AgentsDataKey);
  return storedData ? JSON.parse(storedData) : [];
}

let AgentsData = getAgentsDataFromLocalStorage();

async function fetchAgentData(uuid) {
  try {
    const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
    if (!response.ok) {
      throw new Error('Failed to fetch agent data');
    }
    const data = await response.json();

    let videoUrl = '';
    // UUID'ye göre video URL'sini belirle
    switch (uuid) {
      case '7f94d92c-4234-0a36-9646-3a87eb8b5c89': // Yoru
        videoUrl = agentVideos["Yoru_video"];
        break;
      case '569fdd95-4d10-43ab-ca70-79becc718b46': // Sage
        videoUrl = agentVideos["Sage_video"];
        break;
      // Diğer ajanların UUID'leri ve video URL'leri...
    }

    const agentData = {
      uuid,
      name: data.data.displayName || 'Unknown',
      image: data.data.displayIcon || '',
      info: data.data.description || '',
      role: data.data.role.displayName || 'Unknown',
      role_icon: data.data.role?.displayIcon || '',
      role_info: data.data.role?.description || '',
      selected: false,
      abilities_c_name: data.data.abilities[2]?.displayName || '',
      abilities_q_name: data.data.abilities[0]?.displayName || '',
      abilities_e_name: data.data.abilities[1]?.displayName || '',
      abilities_x_name: data.data.abilities[3]?.displayName || '',
      abilities_c_icon: data.data.abilities[2]?.displayIcon || '',
      abilities_q_icon: data.data.abilities[0]?.displayIcon || '',
      abilities_e_icon: data.data.abilities[1]?.displayIcon || '',
      abilities_x_icon: data.data.abilities[3]?.displayIcon || '',
      abilities_c: data.data.abilities[2]?.description || '',
      abilities_q: data.data.abilities[0]?.description || '',
      abilities_e: data.data.abilities[1]?.description || '',
      abilities_x: data.data.abilities[3]?.description || '',
      video: videoUrl,
    };

    // Eski verileri temizle
    AgentsData = AgentsData.filter(agent => agent.uuid !== uuid);

    // Yeni veriyi ekle
    AgentsData.push(agentData);

    saveAgentsDataToLocalStorage(AgentsData);
  } catch (error) {
    console.error("Error fetching agent data:", error);
  }
}

const uuids = [
  "117ed9e3-49f3-6512-3ccf-0cada7e3823b", // Cypher
  "e370fa57-4757-3604-3648-499e1f642d3f", // Gekko
  "dade69b4-4f5a-8528-247b-219e5a1facd6", //Fade
  "5f8d3a7f-467b-97f3-062c-13acf203c006", //Breach
  "cc8b64c8-4b25-4ff9-6e7f-37b4da43d235", //Deadlock
  "f94c3b30-42be-e959-889c-5aa313dba261", //Raze
  "22697a3d-45bf-8dd7-4fec-84a9e28c69d7", //chamber
  "601dbbe7-43ce-be57-2a40-4abd24953621", //KAY/O
  "6f2a04ca-43e0-be17-7f36-b3908627744d", //SKYE
  "320b2a48-4d9b-a075-30f1-1f93a9b638fa", //SOVA
  "1e58de9c-4950-5125-93e9-a0aee9f98746", //KJ
  "95b78ed7-4637-86d9-7e41-71ba8c293152", //HARBOR
  "707eab51-4836-f488-046a-cda6bf494859", //VİPER
  "eb93336a-449b-9c1b-0a54-a891f7921d69", //PHO
  "41fb69c1-4189-7b37-f117-bcaf1e96f1bf", //ASTRA
  "9f0d8ba9-4140-b941-57d3-a7ad57c6b417", //BRİM
  "0e38b510-41a8-5780-5e8f-568b2a4f2d6c", //ISO
  "1dbf2edd-4729-0984-3115-daa5eed44993", //CLOVE
  "bb2a4828-46eb-8cd1-e765-15848195d751", //NEON
  "7f94d92c-4234-0a36-9646-3a87eb8b5c89", //YORU
  "569fdd95-4d10-43ab-ca70-79becc718b46", //SAGE
  "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc", //REYNA
  "8e253930-4c05-31dd-1b6c-968525494517", //OMEN
  "add6443a-41bd-e414-f6ad-e58d267f4e95", //JETT


];

async function fetchAgentDataAndSave() {
  for (const uuid of uuids) {
    await fetchAgentData(uuid);
  }
}

export default AgentsData;

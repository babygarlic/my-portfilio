async function fetchProjects() {
    try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;    
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

async function mockData() {
    return [
        {
            name: "SYNAPSE_CORE",
            description: "Real-time neural network data processing engine built with high-throughput streams.",
            technologies: ["Python", "Redis"],
            image: "/System_Visualization_100.png",
            icon: "/projecticon.svg",
            techColors: "#1F1F1F",
            borderColor: '#00FBFB'
        },
        {
            name: "VAULT_GATEWAY",
            description: "High-security authentication layer using hardware-encrypted keys and biometric…",
            technologies: ["JavaScript", "React"],
            image: "/Security_Node_100.png",
            icon: "/icon_projects.svg",
            techColors: "bg-[#1F1F1F]",
            borderColor: '#00FBFB'
        },
        {
            name: "OXY_LEDGER",
            description: "Distributed ledger for supply chain transparency in aerospace manufacturing.",
            technologies: ["Go", "Docker"],
            image: "/Hardware_Interface_100.png",
            icon: "/icon_projects_3.svg",
            techColors: "bg-[#1F1F1F]",
            borderColor: '#00FBFB'

        }
    ];
}

export { fetchProjects, mockData };
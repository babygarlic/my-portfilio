async function fetchService() {
    try {
        const response = await fetch('/api/service');
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

async function mockDataService(){
   return [
        {   id: "01",
            title:"Backend Development",
            description:"Building robust and scalable backend systems using modern technologies like Python, FastAPI, and PostgreSQL."
        },
        {   id: "02",
            title:"API Design",
            description:"Designing and implementing RESTful APIs and GraphQL services that are efficient, secure, and easy to maintain."
        },
        {   id: "03",
            title:"System Architecture",
            description:"Planning and architecting high-performance systems that can handle millions of requests with low latency."
        },        
        {   id: "04",
            title:"Database Optimization",
            description:"Optimizing database queries, indexing, and overall performance for better application speed and reliability."
        },
        {   id: "05",
            title:"Consulting",
            description:"Providing expert advice on technology choices, best practices, and development strategies."
        },
        {   id: "06",
            title:"Code Review",
            description:"Building robust and scalable backend systems using modern technologies like Python, FastAPI, and PostgreSQL."
        },
    ];
}

export { fetchService, mockDataService };
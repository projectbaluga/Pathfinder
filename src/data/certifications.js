export const certifications = [
  {
    id: "ccna",
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    domain: "Networking",
    level: "Intermediate",
    cost: "$300",
    price: 300,
    duration: "120 mins",
    questionsCount: "100-120",
    passingScore: "~82%",
    validity: "3 years",
    experience: "1+ years recommended",
    salaryImpact: "High (~$80,000+ avg)",
    careerRoles: ["Network Engineer", "Systems Administrator", "Network Analyst"],
    prerequisites: "None",
    description: "Covers a broad range of fundamentals for IT careers, based on the latest networking technologies, software development skills, and job roles.",
    reviewer: [
      {
        title: "Network Fundamentals",
        topics: [
          { name: "OSI Model", detail: "Layer 1: Physical, Layer 2: Data Link, Layer 3: Network, Layer 4: Transport, Layer 5: Session, Layer 6: Presentation, Layer 7: Application." },
          { name: "TCP/UDP", detail: "TCP is connection-oriented (reliable). UDP is connectionless (fast)." },
          { name: "IPv4 Subnetting", detail: "Dividing a network into smaller pieces to improve efficiency and security." }
        ]
      },
      {
        title: "Network Access",
        topics: [
          { name: "VLANs", detail: "Virtual Local Area Networks allow logical grouping of devices regardless of physical location." },
          { name: "Spanning Tree Protocol (STP)", detail: "Prevents loops in switched networks." }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: "q1",
        question: "Which OSI layer is responsible for IP addressing and routing?",
        options: ["Data Link", "Network", "Transport", "Physical"],
        answer: "Network",
        category: "Network Fundamentals",
        explanation: "The Network layer (Layer 3) handles logical addressing (IP) and path determination (routing)."
      },
      {
        id: "q2",
        question: "What is the standard port for HTTPS?",
        options: ["80", "22", "443", "53"],
        answer: "443",
        category: "Network Fundamentals",
        explanation: "HTTPS uses port 443 by default. Port 80 is for HTTP."
      }
    ]
  },
  {
    id: "sec-plus",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    domain: "Security",
    level: "Beginner",
    cost: "$392",
    price: 392,
    duration: "90 mins",
    questionsCount: "Max 90",
    passingScore: "750 (on scale of 100-900)",
    validity: "3 years",
    experience: "CompTIA Network+ and 2 years in IT administration recommended",
    salaryImpact: "Moderate (~$75,000+ avg)",
    careerRoles: ["Security Administrator", "Systems Coordinator", "Security Consultant"],
    prerequisites: "None",
    description: "A global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.",
    reviewer: [
      {
        title: "Threats, Attacks, and Vulnerabilities",
        topics: [
          { name: "Phishing", detail: "Social engineering attack using email to trick users into revealing sensitive info." },
          { name: "Malware", detail: "Viruses, Worms, Trojans, Ransomware, and Spyware." }
        ]
      },
      {
        title: "Architecture and Design",
        topics: [
          { name: "Cloud Models", detail: "SaaS (Software), PaaS (Platform), IaaS (Infrastructure)." },
          { name: "Cryptography", detail: "Symmetric (same key) vs Asymmetric (public/private keys)." }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: "q1",
        question: "Which type of attack involves redirecting a user to a malicious website by poisoning DNS?",
        options: ["Phishing", "Pharming", "Smishing", "Vishing"],
        answer: "Pharming",
        category: "Threats and Attacks",
        explanation: "Pharming redirects traffic to a fake website by exploiting vulnerabilities in DNS or the hosts file."
      },
      {
        id: "q2",
        question: "True or False: AES is an example of an asymmetric encryption algorithm.",
        options: ["True", "False"],
        answer: "False",
        category: "Architecture and Design",
        explanation: "AES (Advanced Encryption Standard) is a symmetric encryption algorithm. RSA is asymmetric."
      }
    ]
  },
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    domain: "Cloud",
    level: "Beginner",
    cost: "$100",
    price: 100,
    duration: "90 mins",
    questionsCount: "65",
    passingScore: "700/1000",
    validity: "3 years",
    experience: "6 months of fundamental AWS Cloud and industry knowledge recommended",
    salaryImpact: "Moderate (~$85,000+ avg)",
    careerRoles: ["Cloud Support Associate", "Sales/Marketing in Cloud", "Junior Developer"],
    prerequisites: "None",
    description: "Validates overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
    reviewer: [
      {
        title: "Cloud Concepts",
        topics: [
          { name: "Shared Responsibility Model", detail: "AWS manages security 'of' the cloud, customer manages security 'in' the cloud." },
          { name: "Well-Architected Framework", detail: "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability." }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: "q1",
        question: "Which AWS service is used for scalable object storage?",
        options: ["EC2", "RDS", "S3", "Lambda"],
        answer: "S3",
        category: "Cloud Concepts",
        explanation: "Amazon Simple Storage Service (S3) is the primary object storage service in AWS."
      }
    ]
  },
  {
    id: "pmp",
    title: "Project Management Professional (PMP)",
    issuer: "PMI",
    domain: "Project Management",
    level: "Advanced",
    cost: "$555",
    price: 555,
    duration: "230 mins",
    questionsCount: "180",
    passingScore: "Not disclosed",
    validity: "3 years",
    experience: "36-60 months leading projects",
    salaryImpact: "High (~$120,000+ avg)",
    careerRoles: ["Project Manager", "Operations Manager", "Program Manager"],
    prerequisites: "Four-year degree and 36 months leading projects OR High school diploma and 60 months",
    description: "The gold standard of project management certification. Recognized and demanded by organizations worldwide.",
    reviewer: [
      {
        title: "People",
        topics: [
          { name: "Conflict Management", detail: "Methods like Collaborate, Compromise, Force, Smooth, and Withdraw." },
          { name: "Stakeholder Management", detail: "Identifying and engaging people affected by the project." }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: "q1",
        question: "In which project management phase is the project charter created?",
        options: ["Planning", "Initiating", "Executing", "Closing"],
        answer: "Initiating",
        category: "People",
        explanation: "The project charter is developed during the Initiating phase to formally authorize the project."
      }
    ]
  },
  {
    id: "az-900",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    domain: "Cloud",
    level: "Beginner",
    cost: "$99",
    price: 99,
    duration: "45-65 mins",
    questionsCount: "40-60",
    passingScore: "700/1000",
    validity: "No expiration",
    experience: "Basic understanding of cloud services and Azure",
    salaryImpact: "Moderate (~$80,000+ avg)",
    careerRoles: ["Azure Administrator", "Cloud Architect", "Cloud Developer"],
    prerequisites: "None",
    description: "Demonstrates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
    reviewer: [
      {
        title: "Azure Architecture",
        topics: [
          { name: "Regions & Availability Zones", detail: "Regions are geographic areas; Zones are unique physical locations within a region." },
          { name: "Resource Groups", detail: "Logical containers for Azure resources." }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: "q1",
        question: "Which Azure service provides a platform for serverless code execution?",
        options: ["Azure Virtual Machines", "Azure Functions", "Azure SQL Database", "Azure App Service"],
        answer: "Azure Functions",
        category: "Azure Architecture",
        explanation: "Azure Functions is the serverless compute service that lets you run event-triggered code without explicitly provisioning infrastructure."
      }
    ]
  }
];

export const certifications = [
  {
    "id": "ccna",
    "title": "Cisco Certified Network Associate (CCNA)",
    "issuer": "Cisco",
    "domain": "Networking",
    "level": "Intermediate",
    "price": 300,
    "duration": "120 mins",
    "q_count": "100-120",
    "desc": "Fundamentals for IT careers and networking technologies.",
    "examCode": "200-301 CCNA",
    "passingScore": "825/1000",
    "validity": "3 years",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    "careerRoles": [
      "Network Administrator",
      "Network Engineer",
      "Support Technician"
    ],
    "salaryRange": "$70,000 - $105,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "OSI and TCP/IP protocol suites, IP addressing, and subnetting basic operations."
      },
      {
        "phase": "Week 3-4",
        "focus": "Switching fundamentals, VLAN segments, Spanning Tree Protocol (STP), and EtherChannel."
      },
      {
        "phase": "Week 5-6",
        "focus": "Routing configurations, OSPF dynamic routing, IP services like NAT and DHCP, and security foundations."
      }
    ],
    "resources": [
      {
        "label": "Official Cisco CCNA Certification Guide",
        "url": "https://www.ciscopress.com/store/ccna-200-301-official-cert-guide-volume-1-9780135792735"
      },
      {
        "label": "Cisco Packet Tracer Lab Emulator",
        "url": "https://www.netacad.com/portal/learning/packet-tracer"
      }
    ],
    "reviewer": [
      {
        "title": "OSI Model Operations",
        "topics": [
          {
            "name": "OSI Layers Overview",
            "detail": "The Open Systems Interconnection (OSI) model divides network communication into seven logical layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer serves the layer above it and is served by the layer below."
          },
          {
            "name": "Data Encapsulation Flow",
            "detail": "As data moves down the stack, headers are appended. At Layer 4, the unit is a Segment. At Layer 3, an IP header is added, creating a Packet. At Layer 2, a MAC header and trailer are added, creating a Frame. Finally, Layer 1 transmits raw bits."
          }
        ]
      },
      {
        "title": "Dynamic Routing Protocols",
        "topics": [
          {
            "name": "OSPF Link-State Routing",
            "detail": "Open Shortest Path First (OSPF) is a link-state interior gateway routing protocol. It uses Dijkstra's Shortest Path First algorithm to build a complete map of the topology and determine the loop-free path with the lowest metric (cost)."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ccna-q1",
        "question": "Which OSI layer is responsible for logical addressing, path determination, and IP routing?",
        "options": [
          "Network Layer (Layer 3)",
          "Data Link Layer (Layer 2)",
          "Transport Layer (Layer 4)",
          "Physical Layer (Layer 1)"
        ],
        "answer": "Network Layer (Layer 3)",
        "category": "Core Knowledge",
        "explanation": "The Network Layer handles IP addressing, packet delivery, and path selection across interconnected networks.",
        "topic": "OSI Model Operations",
        "difficulty": "Easy",
        "reference": "OSI Layers Overview"
      },
      {
        "id": "ccna-q2",
        "question": "What is the administrative distance of OSPF routing protocol?",
        "options": [
          "110",
          "90",
          "120",
          "1"
        ],
        "answer": "110",
        "category": "Core Knowledge",
        "explanation": "Cisco routers use an administrative distance of 110 for OSPF, 90 for EIGRP, and 120 for RIP.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "OSPF Link-State Routing"
      }
    ],
    "flashcards": [
      {
        "term": "Layer 3 PDU",
        "definition": "A Packet, containing the IP header and payload."
      },
      {
        "term": "OSPF AD",
        "definition": "Administrative Distance of 110, indicating relative trustworthiness."
      }
    ],
    "questionsCount": "2"
  },
  {
    "id": "sec-plus",
    "title": "CompTIA Security+",
    "issuer": "CompTIA",
    "domain": "Security",
    "level": "Beginner",
    "price": 392,
    "duration": "90 mins",
    "q_count": "Max 90",
    "desc": "Baseline skills for core security functions and IT security career.",
    "examCode": "SY0-701",
    "passingScore": "750/900",
    "validity": "3 years",
    "prerequisites": [
      "None",
      "CompTIA Network+ recommended"
    ],
    "officialUrl": "https://www.comptia.org/certifications/security",
    "careerRoles": [
      "Security Administrator",
      "Security Specialist",
      "Systems Administrator"
    ],
    "salaryRange": "$75,000 - $110,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "General security threats, attacks, and common social engineering vulnerability vectors."
      },
      {
        "phase": "Week 3-4",
        "focus": "Security architecture, cloud design guidelines, asset protection, and cryptographic controls."
      }
    ],
    "resources": [
      {
        "label": "CompTIA Security+ SY0-701 Study Guide",
        "url": "https://www.comptia.org/training/books/security-sy0-701-study-guide"
      },
      {
        "label": "Professor Messer Security+ Video Playlist",
        "url": "https://www.professormesser.com/security-plus/sy0-701/"
      }
    ],
    "reviewer": [
      {
        "title": "General Security Threats",
        "topics": [
          {
            "name": "Social Engineering",
            "detail": "Social engineering exploits human cognitive biases to manipulate users into giving up credentials, passwords, or clicking on malicious links. Phishing, baiting, and tailgating are key techniques."
          }
        ]
      },
      {
        "title": "Cryptography Principles",
        "topics": [
          {
            "name": "Symmetric vs Asymmetric",
            "detail": "Symmetric encryption uses a single shared secret key for encryption and decryption. Asymmetric uses a mathematically linked public-private key pair, solving key distribution issues."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "sec-plus-q1",
        "question": "Which social engineering attack targets specific high-level executives via highly customized emails?",
        "options": [
          "Whaling attack",
          "Vishing attack",
          "Smishing attack",
          "Spam campaign"
        ],
        "answer": "Whaling attack",
        "category": "Core Knowledge",
        "explanation": "Whaling targets specific 'big fish' executives (CEOs/CFOs) using highly sophisticated, tailored context.",
        "topic": "General Security Threats",
        "difficulty": "Easy",
        "reference": "Social Engineering"
      },
      {
        "id": "sec-plus-q2",
        "question": "Which algorithm is a popular symmetric block cipher?",
        "options": [
          "AES",
          "RSA",
          "Diffie-Hellman",
          "ECC"
        ],
        "answer": "AES",
        "category": "Core Knowledge",
        "explanation": "Advanced Encryption Standard (AES) is a symmetric block cipher, whereas RSA, Diffie-Hellman, and ECC are asymmetric.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Symmetric vs Asymmetric"
      }
    ],
    "flashcards": [
      {
        "term": "Symmetric Cipher",
        "definition": "Uses one shared key for both encrypting and decrypting data."
      },
      {
        "term": "Whaling",
        "definition": "Highly targeted spear-phishing aimed directly at corporate executives."
      }
    ],
    "questionsCount": "2"
  },
  {
    "id": "aws-ccp",
    "title": "AWS Certified Cloud Practitioner",
    "issuer": "AWS",
    "domain": "Cloud",
    "level": "Beginner",
    "price": 100,
    "duration": "90 mins",
    "q_count": "65",
    "desc": "Overall understanding of the AWS Cloud platform.",
    "examCode": "CLF-C02",
    "passingScore": "700/1000",
    "validity": "3 years",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    "careerRoles": [
      "Cloud Sales Associate",
      "Cloud Support Associate",
      "Project Manager"
    ],
    "salaryRange": "$65,000 - $95,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "Core AWS global infrastructure, regions, availability zones, and shared responsibility guidelines."
      }
    ],
    "resources": [
      {
        "label": "AWS Cloud Practitioner Essentials digital course",
        "url": "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/"
      }
    ],
    "reviewer": [
      {
        "title": "AWS Infrastructure Design",
        "topics": [
          {
            "name": "Regions and AZs",
            "detail": "AWS has a global infrastructure consisting of Regions and Availability Zones (AZs). Regions are geographical areas, and AZs are discrete data centers within those regions designed for fault-tolerance."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-ccp-q1",
        "question": "What consists of one or more isolated data centers with redundant power and networking in a region?",
        "options": [
          "Availability Zone",
          "Local Zone",
          "Edge Location",
          "Outpost"
        ],
        "answer": "Availability Zone",
        "category": "Core Knowledge",
        "explanation": "Availability Zones contain isolated data centers, ensuring localized failures don't disrupt services across the region.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Easy",
        "reference": "Regions and AZs"
      }
    ],
    "flashcards": [
      {
        "term": "AWS Region",
        "definition": "A physical, geographically isolated location holding multiple AZs."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "pmp",
    "title": "Project Management Professional (PMP)",
    "issuer": "PMI",
    "domain": "Project Management",
    "level": "Advanced",
    "price": 555,
    "duration": "230 mins",
    "q_count": "180",
    "desc": "Gold standard of project management certification.",
    "examCode": "PMP Exam",
    "passingScore": "61% (Approximate)",
    "validity": "3 years",
    "prerequisites": [
      "3-5 years of leading projects",
      "35 hours of PM education"
    ],
    "officialUrl": "https://www.pmi.org/certifications/project-management-pmp",
    "careerRoles": [
      "Project Manager",
      "Program Manager",
      "PMO Director"
    ],
    "salaryRange": "$95,000 - $140,000",
    "studyPlan": [
      {
        "phase": "Week 1-3",
        "focus": "Predictive waterfall, agile Scrum frameworks, hybrid project management processes."
      }
    ],
    "resources": [
      {
        "label": "PMI PMBOK Guide 7th Edition",
        "url": "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok"
      }
    ],
    "reviewer": [
      {
        "title": "Agile Methodologies",
        "topics": [
          {
            "name": "Agile Scrum Practices",
            "detail": "Scrum is an empirical, iterative agile framework. It relies on small self-organizing teams, daily sync stand-ups, short time-boxed iterations (sprints), and three clear roles (Product Owner, Scrum Master, Developers)."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pmp-q1",
        "question": "In a Scrum agile framework, who represents the business and prioritizes the Product Backlog?",
        "options": [
          "Product Owner",
          "Scrum Master",
          "Developer Team",
          "Project Manager"
        ],
        "answer": "Product Owner",
        "category": "Core Knowledge",
        "explanation": "The Product Owner is responsible for maximizing the value of the product and managing the backlog prioritized choices.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Scrum Practices"
      }
    ],
    "flashcards": [
      {
        "term": "Product Backlog",
        "definition": "An ordered list of everything that might be needed in the product."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "aplus",
    "title": "CompTIA A+",
    "issuer": "CompTIA",
    "domain": "Infrastructure",
    "level": "Beginner",
    "price": 246,
    "duration": "90 mins",
    "q_count": "Max 90",
    "desc": "Standard for entry-level IT professionals.",
    "examCode": "220-1101 & 220-1102",
    "passingScore": "675 & 700 / 900",
    "validity": "3 years",
    "prerequisites": [
      "None",
      "9-12 months of hands-on experience recommended"
    ],
    "officialUrl": "https://www.comptia.org/certifications/a",
    "careerRoles": [
      "IT Support Specialist",
      "Help Desk Technician",
      "System Administrator"
    ],
    "salaryRange": "$50,000 - $75,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "PC hardware components, motherboards, processors, and storage configurations."
      }
    ],
    "resources": [
      {
        "label": "CompTIA A+ Core Study Guides",
        "url": "https://www.comptia.org/training/books/a-220-1101-and-220-1102-study-guide"
      }
    ],
    "reviewer": [
      {
        "title": "Computer Hardware",
        "topics": [
          {
            "name": "CPU Fundamentals",
            "detail": "The Central Processing Unit (CPU) acts as the brain of the computer. It executes instructions through fetch-decode-execute cycles. Motherboard connections, clock speeds, and RAM cache interact with it."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aplus-q1",
        "question": "Which processor hardware component executes calculations and instructions for the computer?",
        "options": [
          "CPU",
          "RAM",
          "GPU",
          "Motherboard"
        ],
        "answer": "CPU",
        "category": "Core Knowledge",
        "explanation": "The CPU (Central Processing Unit) executes all logical calculations, arithmetic operations, and operating system instructions.",
        "topic": "Computer Hardware",
        "difficulty": "Easy",
        "reference": "CPU Fundamentals"
      }
    ],
    "flashcards": [
      {
        "term": "CPU",
        "definition": "Central Processing Unit, which operates calculations and core code lines."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "network-plus",
    "title": "CompTIA Network+",
    "issuer": "CompTIA",
    "domain": "Networking",
    "level": "Beginner",
    "price": 358,
    "duration": "90 mins",
    "q_count": "Max 90",
    "desc": "Essential knowledge for a career in IT infrastructure.",
    "examCode": "N10-008",
    "passingScore": "720/900",
    "validity": "3 years",
    "prerequisites": [
      "None",
      "CompTIA A+ recommended"
    ],
    "officialUrl": "https://www.comptia.org/certifications/network",
    "careerRoles": [
      "Network Support Specialist",
      "Network Administrator",
      "System Engineer"
    ],
    "salaryRange": "$60,000 - $90,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "Network architecture, physical layouts, ethernet standards, and networking topologies."
      }
    ],
    "resources": [
      {
        "label": "CompTIA Network+ N10-008 Study Guide",
        "url": "https://www.comptia.org/training/books/network-n10-008-study-guide"
      }
    ],
    "reviewer": [
      {
        "title": "Network Topologies",
        "topics": [
          {
            "name": "Star vs Mesh",
            "detail": "A Star topology connects all devices to a single central switch/hub. A Mesh topology interconnects multiple nodes directly, offering extreme fault-tolerance at higher hardware cost."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "network-plus-q1",
        "question": "Which topology features a central device that interconnects all other network nodes?",
        "options": [
          "Star Topology",
          "Mesh Topology",
          "Bus Topology",
          "Ring Topology"
        ],
        "answer": "Star Topology",
        "category": "Core Knowledge",
        "explanation": "A Star Topology connects individual network workstations directly to a central hub, bridge, or switch.",
        "topic": "Network Topologies",
        "difficulty": "Easy",
        "reference": "Star vs Mesh"
      }
    ],
    "flashcards": [
      {
        "term": "Star Topology",
        "definition": "A configuration where multiple cables run back into one central hub."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "ccnp-encor",
    "title": "CCNP Enterprise ENCOR",
    "issuer": "Cisco",
    "domain": "Networking",
    "level": "Advanced",
    "price": 400,
    "duration": "120 mins",
    "q_count": "90-110",
    "desc": "Implementing and operating core network technologies.",
    "examCode": "350-401 ENCOR",
    "passingScore": "Variable (Approx 825/1000)",
    "validity": "3 years",
    "prerequisites": [
      "Cisco CCNA recommended"
    ],
    "officialUrl": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html",
    "careerRoles": [
      "Senior Network Engineer",
      "Solutions Architect",
      "Support Specialist"
    ],
    "salaryRange": "$95,000 - $145,000",
    "studyPlan": [
      {
        "phase": "Week 1-3",
        "focus": "Dual-stack routing, OSPF, BGP, SD-WAN, and advanced automation scripts."
      }
    ],
    "resources": [
      {
        "label": "CCNP Enterprise ENCOR Official Cert Guide",
        "url": "https://www.ciscopress.com/store/ccnp-and-ccie-enterprise-core-encor-350-401-official-9781587147029"
      }
    ],
    "reviewer": [
      {
        "title": "Advanced Routing",
        "topics": [
          {
            "name": "BGP Operations",
            "detail": "Border Gateway Protocol (BGP) is the primary Exterior Gateway Protocol (EGP) powering the Internet. It uses path vectors, path attributes, and policies instead of raw distance metrics to route packets."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ccnp-encor-q1",
        "question": "Which protocol manages routing paths between different autonomous systems on the Internet?",
        "options": [
          "BGP",
          "OSPF",
          "EIGRP",
          "RIP"
        ],
        "answer": "BGP",
        "category": "Core Knowledge",
        "explanation": "BGP is the exterior gateway protocol used to select optimal routing paths across the public global Web.",
        "topic": "Advanced Routing",
        "difficulty": "Hard",
        "reference": "BGP Operations"
      }
    ],
    "flashcards": [
      {
        "term": "BGP",
        "definition": "Border Gateway Protocol, the core path-vector routing model of the web."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "cissp",
    "title": "Certified Information Systems Security Professional",
    "issuer": "ISC2",
    "domain": "Security",
    "level": "Advanced",
    "price": 749,
    "duration": "180 mins",
    "q_count": "125-150",
    "desc": "The gold standard for info security professionals.",
    "examCode": "CISSP Exam",
    "passingScore": "700/1000",
    "validity": "3 years",
    "prerequisites": [
      "5 years of cumulative experience in security"
    ],
    "officialUrl": "https://www.isc2.org/Certifications/CISSP",
    "careerRoles": [
      "Chief Information Security Officer",
      "Security Manager",
      "Security Director"
    ],
    "salaryRange": "$115,000 - $180,000",
    "studyPlan": [
      {
        "phase": "Week 1-4",
        "focus": "Security risk management, asset protection, security engineering, and communications security."
      }
    ],
    "resources": [
      {
        "label": "Official ISC2 CISSP Study Guide",
        "url": "https://www.isc2.org/Training-and-Careers/Study-Guides"
      }
    ],
    "reviewer": [
      {
        "title": "Security Risk Management",
        "topics": [
          {
            "name": "CIA Triad Principles",
            "detail": "The core of information security rests on the CIA Triad: Confidentiality (data is hidden), Integrity (data is untampered), and Availability (systems are operational and accessible)."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cissp-q1",
        "question": "Which security principle focuses on ensuring that information has not been altered by unauthorized parties?",
        "options": [
          "Integrity",
          "Confidentiality",
          "Availability",
          "Non-repudiation"
        ],
        "answer": "Integrity",
        "category": "Core Knowledge",
        "explanation": "Integrity ensures reliability and untampered status of sensitive company databases or operational config records.",
        "topic": "Security Risk Management",
        "difficulty": "Medium",
        "reference": "CIA Triad Principles"
      }
    ],
    "flashcards": [
      {
        "term": "Integrity",
        "definition": "A CIA principle ensuring that information has not been tampered with or modified."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "ceh",
    "title": "Certified Ethical Hacker",
    "issuer": "EC-Council",
    "domain": "Security",
    "level": "Intermediate",
    "price": 1199,
    "duration": "240 mins",
    "q_count": "125",
    "desc": "Master the 5 phases of ethical hacking.",
    "examCode": "312-50 v12",
    "passingScore": "Variable (60% - 85%)",
    "validity": "3 years",
    "prerequisites": [
      "2 years of info security experience"
    ],
    "officialUrl": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    "careerRoles": [
      "Penetration Tester",
      "Ethical Hacker",
      "Security Analyst"
    ],
    "salaryRange": "$85,000 - $130,000",
    "studyPlan": [
      {
        "phase": "Week 1-3",
        "focus": "Scanning networks, vulnerability assessment, system hacking, and web app injection vectors."
      }
    ],
    "resources": [
      {
        "label": "CEH Exam Prep Manual",
        "url": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
      }
    ],
    "reviewer": [
      {
        "title": "Ethical Hacking Phases",
        "topics": [
          {
            "name": "Reconnaissance Phase",
            "detail": "Ethical hacking begins with Reconnaissance (information gathering), followed by Scanning, Gaining Access, Maintaining Access, and Clearing Tracks."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ceh-q1",
        "question": "What is the initial phase of ethical hacking where an attacker gathers background context about a target?",
        "options": [
          "Reconnaissance",
          "Scanning",
          "Clearing Tracks",
          "Maintaining Access"
        ],
        "answer": "Reconnaissance",
        "category": "Core Knowledge",
        "explanation": "Reconnaissance is the initial phase, letting pentesters look up active host listings, IP networks, and company domains.",
        "topic": "Ethical Hacking Phases",
        "difficulty": "Easy",
        "reference": "Reconnaissance Phase"
      }
    ],
    "flashcards": [
      {
        "term": "Recon",
        "definition": "Active or passive info gathering before initiating physical network scans."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "aws-sa-assoc",
    "title": "AWS Solutions Architect - Associate",
    "issuer": "AWS",
    "domain": "Cloud",
    "level": "Intermediate",
    "price": 150,
    "duration": "130 mins",
    "q_count": "65",
    "desc": "Design cost-efficient, fault-tolerant systems on AWS.",
    "examCode": "SAA-C03",
    "passingScore": "720/1000",
    "validity": "3 years",
    "prerequisites": [
      "None",
      "1 year AWS experience recommended"
    ],
    "officialUrl": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    "careerRoles": [
      "Cloud Solutions Architect",
      "Cloud Engineer",
      "System Architect"
    ],
    "salaryRange": "$95,000 - $140,000",
    "studyPlan": [
      {
        "phase": "Week 1-3",
        "focus": "Highly available and fault tolerant serverless designs, RDS databases, S3 storage tiers, and VPC security groups."
      }
    ],
    "resources": [
      {
        "label": "SAA-C03 Official Practice Material",
        "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
      }
    ],
    "reviewer": [
      {
        "title": "Fault Tolerant AWS Architectures",
        "topics": [
          {
            "name": "S3 Storage Tiers",
            "detail": "AWS Simple Storage Service (S3) provides storage classes like S3 Standard, Standard-IA (Infrequent Access), One Zone-IA, and Glacier, optimizing costs based on access speeds and frequency patterns."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-sa-assoc-q1",
        "question": "Which storage tier provides durable, lower-cost archival options for long-term retention on AWS?",
        "options": [
          "Amazon S3 Glacier",
          "Amazon EBS",
          "Amazon EFS",
          "Amazon EC2 Instance Store"
        ],
        "answer": "Amazon S3 Glacier",
        "category": "Core Knowledge",
        "explanation": "Glacier is highly scalable, secure, and optimized specifically for data archives that are rarely accessed.",
        "topic": "Fault Tolerant AWS Architectures",
        "difficulty": "Easy",
        "reference": "S3 Storage Tiers"
      }
    ],
    "flashcards": [
      {
        "term": "Amazon S3 Glacier",
        "definition": "Low-cost archival storage designed for cold company backups."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "az-900",
    "title": "Microsoft Certified: Azure Fundamentals",
    "issuer": "Microsoft",
    "domain": "Cloud",
    "level": "Beginner",
    "price": 99,
    "duration": "45-65 mins",
    "q_count": "40-60",
    "desc": "Foundational knowledge of cloud services and Azure.",
    "examCode": "AZ-900",
    "passingScore": "700/1000",
    "validity": "No expiration",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
    "careerRoles": [
      "Technical Sales",
      "Cloud Support Associate",
      "Product Manager"
    ],
    "salaryRange": "$60,000 - $85,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "General cloud models (IaaS, PaaS, SaaS), core Azure services, and resource group architectures."
      }
    ],
    "resources": [
      {
        "label": "Microsoft Learn AZ-900 Study Modules",
        "url": "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
      }
    ],
    "reviewer": [
      {
        "title": "Azure Cloud Services",
        "topics": [
          {
            "name": "Resource Groups",
            "detail": "Azure Resource Groups act as logical containers for grouping and organizing resources. Resources like virtual networks, storage accounts, and VMs are grouped for management and billing clarity."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "az-900-q1",
        "question": "What acts as a logical container for organizing and grouping multiple connected Azure resources?",
        "options": [
          "Resource Group",
          "Management Group",
          "Subscription",
          "Active Directory"
        ],
        "answer": "Resource Group",
        "category": "Core Knowledge",
        "explanation": "Resource Groups allow you to manage and clean up multiple resource collections (like VMs and databases) concurrently.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Resource Groups"
      }
    ],
    "flashcards": [
      {
        "term": "Azure RG",
        "definition": "Resource Group logical boundary wrapping related azure resources."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "az-104",
    "title": "Microsoft Azure Administrator",
    "issuer": "Microsoft",
    "domain": "Cloud",
    "level": "Intermediate",
    "price": 165,
    "duration": "120 mins",
    "q_count": "40-60",
    "desc": "Implement, manage, and monitor Azure environments.",
    "examCode": "AZ-104",
    "passingScore": "700/1000",
    "validity": "1 year",
    "prerequisites": [
      "None",
      "AZ-900 recommended"
    ],
    "officialUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
    "careerRoles": [
      "Azure Administrator",
      "Cloud Specialist",
      "System Engineer"
    ],
    "salaryRange": "$80,000 - $120,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "Azure Active Directory identity syncing, storage account security, and compute VM configurations."
      }
    ],
    "resources": [
      {
        "label": "Microsoft Learn AZ-104 Administrator Modules",
        "url": "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/"
      }
    ],
    "reviewer": [
      {
        "title": "Azure Administrating",
        "topics": [
          {
            "name": "Azure AD Syncing",
            "detail": "Azure AD (now Entra ID) provides enterprise-level identity management. Direct Active Directory syncing enables seamless single sign-on (SSO) experience for hybrid setups."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "az-104-q1",
        "question": "Which Azure feature is used to synchronize on-premises identity lists directly into Microsoft Entra ID?",
        "options": [
          "Microsoft Entra Connect",
          "Azure Bastion",
          "Azure Advisor",
          "ExpressRoute"
        ],
        "answer": "Microsoft Entra Connect",
        "category": "Core Knowledge",
        "explanation": "Entra Connect (formerly Azure AD Connect) is the hybrid utility designed to bridge local directories with cloud registries.",
        "topic": "Azure Administrating",
        "difficulty": "Medium",
        "reference": "Azure AD Syncing"
      }
    ],
    "flashcards": [
      {
        "term": "Entra ID Connect",
        "definition": "A synchronization tool bridging local active directories and Azure ID lists."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "gcp-pca",
    "title": "Google Professional Cloud Architect",
    "issuer": "Google Cloud",
    "domain": "Cloud",
    "level": "Advanced",
    "price": 200,
    "duration": "120 mins",
    "q_count": "50-60",
    "desc": "Design and manage robust solutions on Google Cloud.",
    "examCode": "GCP PCA Exam",
    "passingScore": "Pass/Fail (Evaluated by Google)",
    "validity": "2 years",
    "prerequisites": [
      "None",
      "3+ years of industry experience recommended"
    ],
    "officialUrl": "https://cloud.google.com/learn/certification/cloud-architect",
    "careerRoles": [
      "Google Cloud Architect",
      "Senior Cloud Engineer",
      "Infrastructure Specialist"
    ],
    "salaryRange": "$110,000 - $160,000",
    "studyPlan": [
      {
        "phase": "Week 1-3",
        "focus": "Enterprise-grade GKE kubernetes clusters, BigQuery analytics warehouses, Cloud Storage tiers, and VPC networking."
      }
    ],
    "resources": [
      {
        "label": "Google Cloud Architect Learning Path",
        "url": "https://cloud.google.com/learn/certification/cloud-architect"
      }
    ],
    "reviewer": [
      {
        "title": "Google Cloud Core Architectures",
        "topics": [
          {
            "name": "GKE Cluster Operations",
            "detail": "Google Kubernetes Engine (GKE) is a secure, production-ready environment for containerized app deployments, providing automated node scaling and cloud updates."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "gcp-pca-q1",
        "question": "Which GCP service manages enterprise-grade containerized cluster architectures seamlessly?",
        "options": [
          "Google Kubernetes Engine (GKE)",
          "Google Compute Engine (GCE)",
          "Google App Engine (GAE)",
          "Google Cloud Run"
        ],
        "answer": "Google Kubernetes Engine (GKE)",
        "category": "Core Knowledge",
        "explanation": "GKE offers fully managed Kubernetes clustering, automate nodes monitoring, and built-in load-balancers.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "GKE Cluster Operations"
      }
    ],
    "flashcards": [
      {
        "term": "GKE",
        "definition": "Google Kubernetes Engine, the enterprise container cluster orchestration service."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "oci-found",
    "title": "OCI Foundations Associate",
    "issuer": "Oracle",
    "domain": "Cloud",
    "level": "Beginner",
    "price": 0,
    "duration": "60 mins",
    "q_count": "40",
    "desc": "Fundamental knowledge of OCI public cloud services.",
    "examCode": "1Z0-1085-23",
    "passingScore": "68%",
    "validity": "2 years",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://education.oracle.com/oracle-cloud-infrastructure-foundations-associate/pexam_1Z0-1085-23",
    "careerRoles": [
      "Cloud Support Technician",
      "Junior Cloud Engineer",
      "Technical Sales"
    ],
    "salaryRange": "$55,000 - $85,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "OCI subscription setups, compartments, Compute VM instances, Block Volume storage, and identity management."
      }
    ],
    "resources": [
      {
        "label": "Oracle University OCI Foundations Learning Path",
        "url": "https://education.oracle.com/oracle-cloud-infrastructure-foundations-associate/pexam_1Z0-1085-23"
      }
    ],
    "reviewer": [
      {
        "title": "Oracle OCI Core Foundations",
        "topics": [
          {
            "name": "Compartments",
            "detail": "Compartments are logical collections of OCI resources used to segregate systems, secure environment settings, and map IAM access rights."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "oci-found-q1",
        "question": "Which OCI construct provides a logical resource boundary to enforce access control and isolate systems?",
        "options": [
          "Compartment",
          "VCN Subnet",
          "Policy Group",
          "Federation ID"
        ],
        "answer": "Compartment",
        "category": "Core Knowledge",
        "explanation": "Compartments partition cloud instances, databases, and networks for clear access control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Compartments"
      }
    ],
    "flashcards": [
      {
        "term": "Compartment",
        "definition": "A logical OCI resource group to isolate billing and administrative privileges."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "capm",
    "title": "Certified Associate in Project Management",
    "issuer": "PMI",
    "domain": "Project Management",
    "level": "Beginner",
    "price": 300,
    "duration": "180 mins",
    "q_count": "150",
    "desc": "Entry-level certification for project team members.",
    "examCode": "CAPM Exam",
    "passingScore": "Variable (Approx 60%)",
    "validity": "3 years",
    "prerequisites": [
      "Secondary degree",
      "23 hours of project management education"
    ],
    "officialUrl": "https://www.pmi.org/certifications/certified-associate-capm",
    "careerRoles": [
      "Junior Project Manager",
      "Project Coordinator",
      "Associate PM"
    ],
    "salaryRange": "$55,000 - $80,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "PMBOK fundamental definitions, project lifecycle phases, predictive waterfall pathways."
      }
    ],
    "resources": [
      {
        "label": "PMI CAPM Certification Prep",
        "url": "https://www.pmi.org/certifications/certified-associate-capm"
      }
    ],
    "reviewer": [
      {
        "title": "PMBOK Basics",
        "topics": [
          {
            "name": "Project Lifecycle",
            "detail": "A project lifecycle defines the structural stages (Initiating, Planning, Executing, Monitoring/Controlling, Closing) that a project transitions through from start to finish."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "capm-q1",
        "question": "Which process group consists of formal steps to track, review, and regulate project performance?",
        "options": [
          "Monitoring and Controlling",
          "Planning",
          "Initiating",
          "Closing"
        ],
        "answer": "Monitoring and Controlling",
        "category": "Core Knowledge",
        "explanation": "Monitoring and Controlling PROCESS group oversees changes, verifies quality standards, and measures cost baseline variances.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "Project Lifecycle"
      }
    ],
    "flashcards": [
      {
        "term": "Process Group",
        "definition": "A logical collection of PM inputs, tools, and output items."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "csm",
    "title": "Certified ScrumMaster (CSM)",
    "issuer": "Scrum Alliance",
    "domain": "Project Management",
    "level": "Beginner",
    "price": 500,
    "duration": "60 mins",
    "q_count": "50",
    "desc": "Lead Agile teams and deliver high-value results.",
    "examCode": "CSM Exam",
    "passingScore": "37/50",
    "validity": "2 years",
    "prerequisites": [
      "CSM 2-day class attendance"
    ],
    "officialUrl": "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
    "careerRoles": [
      "Scrum Master",
      "Agile Coach",
      "Project Coordinator"
    ],
    "salaryRange": "$70,000 - $115,000",
    "studyPlan": [
      {
        "phase": "Week 1",
        "focus": "Scrum roles, events like sprint planning and retrospectives, and core scrum values."
      }
    ],
    "resources": [
      {
        "label": "Official Scrum Alliance CSM Exam Guide",
        "url": "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster"
      }
    ],
    "reviewer": [
      {
        "title": "Scrum Framework Core",
        "topics": [
          {
            "name": "Scrum Events",
            "detail": "Scrum defines 5 core time-boxed events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. They enable inspection, adaptation, and team synergy."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "csm-q1",
        "question": "Which Scrum event is dedicated to demonstrating the working software increment to project stakeholders?",
        "options": [
          "Sprint Review",
          "Sprint Retrospective",
          "Daily Stand-up",
          "Sprint Planning"
        ],
        "answer": "Sprint Review",
        "category": "Core Knowledge",
        "explanation": "The Sprint Review lets developers exhibit completed deliverables and receive user/stakeholder feedback.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Events"
      }
    ],
    "flashcards": [
      {
        "term": "Sprint Review",
        "definition": "An event to demo the working sprint increments and gather insights."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "itil-found",
    "title": "ITIL 4 Foundation",
    "issuer": "Axelos",
    "domain": "Project Management",
    "level": "Beginner",
    "price": 450,
    "duration": "60 mins",
    "q_count": "40",
    "desc": "Digital-first operating model for service management.",
    "examCode": "ITIL 4 Foundation Exam",
    "passingScore": "26/40 (65%)",
    "validity": "3 years",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://www.peoplecert.org/browse-certifications/it-service-management/itil-4/itil-4-foundation-3180",
    "careerRoles": [
      "IT Service Desk Specialist",
      "IT Operations Manager",
      "Junior System Administrator"
    ],
    "salaryRange": "$60,000 - $95,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "Service Value System (SVS), Service Value Chain, and core ITIL 4 service practices."
      }
    ],
    "resources": [
      {
        "label": "PeopleCert ITIL 4 study guidebook",
        "url": "https://www.peoplecert.org/browse-certifications/it-service-management/itil-4/itil-4-foundation-3180"
      }
    ],
    "reviewer": [
      {
        "title": "ITIL Service Management",
        "topics": [
          {
            "name": "Service Value System",
            "detail": "The ITIL 4 Service Value System (SVS) defines how all components and activities of an organization work together as a system to enable value creation."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "itil-found-q1",
        "question": "What is the core component of the ITIL 4 model that describes how inputs of demand convert into value?",
        "options": [
          "Service Value System (SVS)",
          "Service Value Chain (SVC)",
          "Guiding Principles",
          "ITIL Practices"
        ],
        "answer": "Service Value System (SVS)",
        "category": "Core Knowledge",
        "explanation": "SVS defines how organization operations work to turn customer requirements into business value.",
        "topic": "ITIL Service Management",
        "difficulty": "Easy",
        "reference": "Service Value System"
      }
    ],
    "flashcards": [
      {
        "term": "SVS",
        "definition": "Service Value System, describing the collaborative mapping of demand to value."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "linux-plus",
    "title": "CompTIA Linux+",
    "issuer": "CompTIA",
    "domain": "Infrastructure",
    "level": "Intermediate",
    "price": 358,
    "duration": "90 mins",
    "q_count": "Max 90",
    "desc": "Securely manage Linux-based IT infrastructure.",
    "examCode": "XK0-005",
    "passingScore": "720/900",
    "validity": "3 years",
    "prerequisites": [
      "None",
      "CompTIA A+ and Network+ recommended"
    ],
    "officialUrl": "https://www.comptia.org/certifications/linux",
    "careerRoles": [
      "Linux System Administrator",
      "Systems Engineer",
      "DevOps Engineer"
    ],
    "salaryRange": "$75,000 - $115,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "Linux bash operations, file systems, permissions management, and local networking configuration."
      }
    ],
    "resources": [
      {
        "label": "CompTIA Linux+ XK0-005 study materials",
        "url": "https://www.comptia.org/training/books/linux-xk0-005-study-guide"
      }
    ],
    "reviewer": [
      {
        "title": "Linux Permissions",
        "topics": [
          {
            "name": "Octal Permissions",
            "detail": "Linux maps file permissions to Read (4), Write (2), and Execute (1). CHMOD settings like 755 assign Owner (Full), Group (Read/Execute), and Others (Read/Execute)."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "linux-plus-q1",
        "question": "Which CHMOD octal setting allows full permission to the owner, but only read and execute to others?",
        "options": [
          "755",
          "777",
          "644",
          "700"
        ],
        "answer": "755",
        "category": "Core Knowledge",
        "explanation": "CHMOD 755 assigns (rwx) to owner, and (r-x) to group and other users.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Octal Permissions"
      }
    ],
    "flashcards": [
      {
        "term": "Chmod 755",
        "definition": "Grants complete control to file owner, read/execute to group/others."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "terraform-assoc",
    "title": "HashiCorp Certified: Terraform Associate",
    "issuer": "HashiCorp",
    "domain": "Infrastructure",
    "level": "Intermediate",
    "price": 70,
    "duration": "60 mins",
    "q_count": "57",
    "desc": "Infrastructure as Code (IaC) concepts and skills.",
    "examCode": "Terraform Associate (003)",
    "passingScore": "70%",
    "validity": "2 years",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://www.hashicorp.com/certification/terraform-associate",
    "careerRoles": [
      "Cloud Infrastructure Engineer",
      "DevOps Engineer",
      "Site Reliability Engineer"
    ],
    "salaryRange": "$85,000 - $130,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "IaC fundamentals, state files management, HCL variables, and provider resources."
      }
    ],
    "resources": [
      {
        "label": "HashiCorp Learn Terraform Tutorials",
        "url": "https://developer.hashicorp.com/terraform/tutorials-index"
      }
    ],
    "reviewer": [
      {
        "title": "Terraform Operations",
        "topics": [
          {
            "name": "State File Purpose",
            "detail": "Terraform relies on state files (terraform.tfstate) to keep track of mapped infrastructure resources, metadata details, and active dependency locks."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "terraform-assoc-q1",
        "question": "What does Terraform use to map physical resources to your configuration files and keep track of metadata?",
        "options": [
          "State file (terraform.tfstate)",
          "Lock file (terraform.tfstate.lock)",
          "Variables file (variables.tf)",
          "Output log"
        ],
        "answer": "State file (terraform.tfstate)",
        "category": "Core Knowledge",
        "explanation": "The local or remote state file preserves historical and active resources metadata bindings.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "State File Purpose"
      }
    ],
    "flashcards": [
      {
        "term": "Terraform State",
        "definition": "A tfstate file that serves as single source of truth for managed instances."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "dp-900",
    "title": "Microsoft Azure Data Fundamentals",
    "issuer": "Microsoft",
    "domain": "Data & AI",
    "level": "Beginner",
    "price": 99,
    "duration": "60 mins",
    "q_count": "40-60",
    "desc": "Foundational knowledge of core data concepts in Azure.",
    "examCode": "DP-900",
    "passingScore": "700/1000",
    "validity": "No expiration",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/",
    "careerRoles": [
      "Data Analyst",
      "Database Administrator",
      "Business Intelligence Specialist"
    ],
    "salaryRange": "$60,000 - $85,000",
    "studyPlan": [
      {
        "phase": "Week 1",
        "focus": "Azure relational data systems, Cosmos DB, and Azure SQL configurations."
      }
    ],
    "resources": [
      {
        "label": "Microsoft Learn DP-900 Study Path",
        "url": "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/"
      }
    ],
    "reviewer": [
      {
        "title": "Azure Data Operations",
        "topics": [
          {
            "name": "Azure Cosmos DB",
            "detail": "Azure Cosmos DB is a globally distributed, multi-model database service supporting NoSQL document tables, keys, and graphs."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "dp-900-q1",
        "question": "Which globally distributed, multi-model Microsoft database provides ultra-low latency for NoSQL workloads?",
        "options": [
          "Azure Cosmos DB",
          "Azure SQL Database",
          "Azure Synapse Analytics",
          "Azure Data Lake Storage"
        ],
        "answer": "Azure Cosmos DB",
        "category": "Core Knowledge",
        "explanation": "Cosmos DB natively hosts key-value, document, graph, and column family database structures.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Cosmos DB"
      }
    ],
    "flashcards": [
      {
        "term": "Cosmos DB",
        "definition": "A globally scalable, multi-model NoSQL cloud database service."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "ai-900",
    "title": "Microsoft Azure AI Fundamentals",
    "issuer": "Microsoft",
    "domain": "Data & AI",
    "level": "Beginner",
    "price": 99,
    "duration": "60 mins",
    "q_count": "40-60",
    "desc": "Foundational knowledge of AI and ML in Azure.",
    "examCode": "AI-900",
    "passingScore": "700/1000",
    "validity": "No expiration",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
    "careerRoles": [
      "AI Engineer",
      "Data Engineer",
      "Cognitive Specialist"
    ],
    "salaryRange": "$65,000 - $90,000",
    "studyPlan": [
      {
        "phase": "Week 1",
        "focus": "Machine learning processes, computer vision services, and Azure Cognitive Search implementations."
      }
    ],
    "resources": [
      {
        "label": "Microsoft Learn AI-900 Study Path",
        "url": "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"
      }
    ],
    "reviewer": [
      {
        "title": "Azure AI Services",
        "topics": [
          {
            "name": "Azure Cognitive Services",
            "detail": "Azure Cognitive Services provide developers with pre-built AI APIs and cognitive models for vision, speech, translation, and search engines."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ai-900-q1",
        "question": "Which Azure AI service provides pre-built APIs for natural translation, voice recognition, and image classification?",
        "options": [
          "Azure Cognitive Services",
          "Azure Machine Learning Studio",
          "Azure Data Factory",
          "Azure IoT Hub"
        ],
        "answer": "Azure Cognitive Services",
        "category": "Core Knowledge",
        "explanation": "Cognitive Services democratizes access to sophisticated ML intelligence without requiring training models from scratch.",
        "topic": "Azure AI Services",
        "difficulty": "Easy",
        "reference": "Azure Cognitive Services"
      }
    ],
    "flashcards": [
      {
        "term": "Azure Cognitive Services",
        "definition": "Pre-built models for image analysis, speech synthesis, and text translations."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "pl-900",
    "title": "Microsoft Power Platform Fundamentals",
    "issuer": "Microsoft",
    "domain": "Data & AI",
    "level": "Beginner",
    "price": 99,
    "duration": "60 mins",
    "q_count": "40-60",
    "desc": "Understanding Power Platform and its business value.",
    "examCode": "PL-900",
    "passingScore": "700/1000",
    "validity": "No expiration",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/",
    "careerRoles": [
      "Power Platform Analyst",
      "Business Analyst",
      "Solutions Architect"
    ],
    "salaryRange": "$58,000 - $82,000",
    "studyPlan": [
      {
        "phase": "Week 1",
        "focus": "Power Apps, Power Automate workflow configurations, and Microsoft Dataverse schemas."
      }
    ],
    "resources": [
      {
        "label": "Microsoft Learn PL-900 Study Path",
        "url": "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/"
      }
    ],
    "reviewer": [
      {
        "title": "Power Platform Basics",
        "topics": [
          {
            "name": "Power Automate",
            "detail": "Power Automate handles automated business workflows, scheduling background data alerts, and managing cross-platform connection triggers."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pl-900-q1",
        "question": "Which Power Platform utility specializes in building automated cross-platform organizational workflows?",
        "options": [
          "Power Automate",
          "Power BI",
          "Power Pages",
          "Power Virtual Agents"
        ],
        "answer": "Power Automate",
        "category": "Core Knowledge",
        "explanation": "Power Automate automates document flow processes, schedules tasks, and coordinates application alerts.",
        "topic": "Power Platform Basics",
        "difficulty": "Easy",
        "reference": "Power Automate"
      }
    ],
    "flashcards": [
      {
        "term": "Power Automate",
        "definition": "A visual automation design tool for cross-system triggers and business flows."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "cism",
    "title": "Certified Information Security Manager",
    "issuer": "ISACA",
    "domain": "Security",
    "level": "Advanced",
    "price": 760,
    "duration": "240 mins",
    "q_count": "150",
    "desc": "Focus on security management and strategy.",
    "examCode": "CISM Exam",
    "passingScore": "450/800 (Scaled)",
    "validity": "3 years",
    "prerequisites": [
      "5 years of infosec management experience"
    ],
    "officialUrl": "https://www.isaca.org/credentialing/cism",
    "careerRoles": [
      "Information Security Manager",
      "Security Officer",
      "Audit Consultant"
    ],
    "salaryRange": "$110,000 - $165,000",
    "studyPlan": [
      {
        "phase": "Week 1-3",
        "focus": "Information security governance, risk assessment methodology, and security program operations."
      }
    ],
    "resources": [
      {
        "label": "ISACA CISM Review Manual",
        "url": "https://www.isaca.org/credentialing/cism"
      }
    ],
    "reviewer": [
      {
        "title": "Security Governance",
        "topics": [
          {
            "name": "Risk Response",
            "detail": "Information risk can be addressed through four basic strategies: Mitigation (adding controls), Acceptance (tolerating risk), Transfer (buying insurance), or Avoidance (terminating activity)."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cism-q1",
        "question": "What is the term for a risk response strategy that relocates the financial impact to a third-party partner?",
        "options": [
          "Risk Transfer",
          "Risk Mitigation",
          "Risk Acceptance",
          "Risk Avoidance"
        ],
        "answer": "Risk Transfer",
        "category": "Core Knowledge",
        "explanation": "Purchasing insurance or outsourcing support translates the responsibility or impact to other organizations.",
        "topic": "Security Governance",
        "difficulty": "Medium",
        "reference": "Risk Response"
      }
    ],
    "flashcards": [
      {
        "term": "Risk Transfer",
        "definition": "Moving potential risk expenses to other entities (such as commercial insurance)."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "oscp",
    "title": "Offensive Security Certified Professional",
    "issuer": "OffSec",
    "domain": "Security",
    "level": "Advanced",
    "price": 1599,
    "duration": "24 hours",
    "q_count": "Hands-on",
    "desc": "The leading penetration testing certification.",
    "examCode": "OSCP Exam",
    "passingScore": "70/100 (Based on system flags)",
    "validity": "No expiration",
    "prerequisites": [
      "None",
      "Strong understanding of Linux/Network tools recommended"
    ],
    "officialUrl": "https://www.offsec.com/courses/pen-200/",
    "careerRoles": [
      "Senior Penetration Tester",
      "Exploit Analyst",
      "Red Team Lead"
    ],
    "salaryRange": "$110,000 - $175,000",
    "studyPlan": [
      {
        "phase": "Week 1-4",
        "focus": "Active Directory penetration testing, command injection, buffer overflows, and reporting."
      }
    ],
    "resources": [
      {
        "label": "OffSec PEN-200 Course Guide",
        "url": "https://www.offsec.com/courses/pen-200/"
      }
    ],
    "reviewer": [
      {
        "title": "Penetration Testing Core",
        "topics": [
          {
            "name": "Buffer Overflows",
            "detail": "A buffer overflow occurs when a program writes more data to a block of memory than it is allocated to hold. Attackers exploit this to overwrite memory and run arbitrary commands."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "oscp-q1",
        "question": "Which security vulnerability is triggered when software overwrites adjacent memory buffers to run arbitrary scripts?",
        "options": [
          "Buffer Overflow",
          "SQL Injection",
          "XSS attack",
          "CSRF payload"
        ],
        "answer": "Buffer Overflow",
        "category": "Core Knowledge",
        "explanation": "Buffer overflows typically manipulate application stacks or registry registers.",
        "topic": "Penetration Testing Core",
        "difficulty": "Hard",
        "reference": "Buffer Overflows"
      }
    ],
    "flashcards": [
      {
        "term": "Buffer Overflow",
        "definition": "A memory exploit where excess data leaks past bounds to execute code blocks."
      }
    ],
    "questionsCount": "1"
  },
  {
    "id": "jcia-junos",
    "title": "JNCIA-Junos",
    "issuer": "Juniper",
    "domain": "Networking",
    "level": "Beginner",
    "price": 200,
    "duration": "90 mins",
    "q_count": "65",
    "desc": "Knowledge of the Juniper Networks Junos OS.",
    "examCode": "JN0-104",
    "passingScore": "Variable (Approx 60%)",
    "validity": "3 years",
    "prerequisites": [
      "None"
    ],
    "officialUrl": "https://www.juniper.net/us/en/training/certification/tracks/junos-associate/jn0-104.html",
    "careerRoles": [
      "Juniper Support Specialist",
      "Network Operator",
      "System Technician"
    ],
    "salaryRange": "$65,000 - $95,000",
    "studyPlan": [
      {
        "phase": "Week 1-2",
        "focus": "Junos OS architecture, CLI interface operational modes, and static routing settings."
      }
    ],
    "resources": [
      {
        "label": "Juniper Open Learning JN0-104 Prep digital modules",
        "url": "https://www.juniper.net/us/en/training/certification/tracks/junos-associate/jn0-104.html"
      }
    ],
    "reviewer": [
      {
        "title": "Junos CLI Operations",
        "topics": [
          {
            "name": "Operational vs Configure Mode",
            "detail": "Junos CLI operates in two modes: Operational mode (to monitor devices, troubleshoot commands) and Configuration mode (to edit and commit actual active device setups)."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "jcia-junos-q1",
        "question": "Which Junos CLI mode is typically designated to monitor and troubleshoot active hardware diagnostics?",
        "options": [
          "Operational Mode",
          "Configuration Mode",
          "Superuser Mode",
          "Unix Shell Mode"
        ],
        "answer": "Operational Mode",
        "category": "Core Knowledge",
        "explanation": "Operational mode manages show and monitor commands, while Configuration mode manages the active setting tree.",
        "topic": "Junos CLI Operations",
        "difficulty": "Easy",
        "reference": "Operational vs Configure Mode"
      }
    ],
    "flashcards": [
      {
        "term": "Junos Operational Mode",
        "definition": "Monitors Juniper systems diagnostics, but does not modify state trees."
      }
    ],
    "questionsCount": "1"
  }
];
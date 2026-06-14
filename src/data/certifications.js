export const certifications = [
  {
    "id": "ccna",
    "title": "Cisco Certified Network Associate (CCNA)",
    "issuer": "Cisco",
    "domain": "Networking",
    "level": "Intermediate",
    "price": 300,
    "duration": "120 mins",
    "questionsCount": "100-120",
    "description": "Fundamentals for IT careers and networking technologies.",
    "reviewer": [
      {
        "title": "Networking Core Knowledge",
        "topics": [
          {
            "name": "OSI Model",
            "detail": "L1: Physical to L7: Application layers."
          },
          {
            "name": "TCP/IP",
            "detail": "TCP (reliable) vs UDP (fast) and IP addressing."
          },
          {
            "name": "Routing",
            "detail": "Static and dynamic routing (OSPF, BGP)."
          },
          {
            "name": "Switching",
            "detail": "VLANs, STP, and EtherChannel."
          },
          {
            "name": "Wireless",
            "detail": "802.11 standards and WPA3 security."
          },
          {
            "name": "IP Services",
            "detail": "DHCP, DNS, and NAT operations."
          },
          {
            "name": "Security Fundamentals",
            "detail": "ACLs, VPNs, and port security."
          },
          {
            "name": "Automation",
            "detail": "SDN architecture and JSON/APIs."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ccna-q1",
        "question": "Which OSI layer is responsible for routing and IP addressing?",
        "options": [
          "Data Link Layer",
          "Network Layer",
          "Physical Layer",
          "Transport Layer"
        ],
        "answer": "Network Layer",
        "category": "Core Knowledge",
        "explanation": "The Network Layer (Layer 3) handles logical addressing and path determination (routing)."
      },
      {
        "id": "ccna-q2",
        "question": "What is the primary difference between TCP and UDP?",
        "options": [
          "TCP is connection-oriented; UDP is connectionless",
          "TCP is faster than UDP",
          "TCP uses less overhead than UDP",
          "UDP provides reliability; TCP does not"
        ],
        "answer": "TCP is connection-oriented; UDP is connectionless",
        "category": "Core Knowledge",
        "explanation": "TCP ensures delivery with handshakes, while UDP sends data without establishing a connection."
      },
      {
        "id": "ccna-q3",
        "question": "Which protocol is used for dynamic routing within an autonomous system?",
        "options": [
          "BGP",
          "HTTPS",
          "OSPF",
          "SMTP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is an Interior Gateway Protocol (IGP) used for routing within an organization."
      },
      {
        "id": "ccna-q4",
        "question": "What is the purpose of a VLAN?",
        "options": [
          "Convert fiber to ethernet",
          "Increase physical cable distance",
          "Provide power to devices",
          "Segment networks logically"
        ],
        "answer": "Segment networks logically",
        "category": "Core Knowledge",
        "explanation": "VLANs allow network administrators to group devices together even if they are on different physical switches."
      },
      {
        "id": "ccna-q5",
        "question": "Which command shows the status of all interfaces on a Cisco router?",
        "options": [
          "display all",
          "get status",
          "show ip interface brief",
          "show run config"
        ],
        "answer": "show ip interface brief",
        "category": "Core Knowledge",
        "explanation": "This command provides a concise summary of interface status and IP addresses."
      },
      {
        "id": "ccna-q6",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q7",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q8",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q9",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q10",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q11",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q12",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q13",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q14",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q15",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q16",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q17",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q18",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q19",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q20",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q21",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q22",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q23",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q24",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q25",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q26",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q27",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q28",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q29",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q30",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q31",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q32",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q33",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q34",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q35",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q36",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q37",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q38",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q39",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q40",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q41",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q42",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q43",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q44",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q45",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccna-q46",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccna-q47",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccna-q48",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccna-q49",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccna-q50",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      }
    ]
  },
  {
    "id": "sec-plus",
    "title": "CompTIA Security+",
    "issuer": "CompTIA",
    "domain": "Security",
    "level": "Beginner",
    "price": 392,
    "duration": "90 mins",
    "questionsCount": "Max 90",
    "description": "Baseline skills for core security functions and IT security career.",
    "reviewer": [
      {
        "title": "Security Core Knowledge",
        "topics": [
          {
            "name": "Attacks & Threats",
            "detail": "Phishing, malware, and social engineering."
          },
          {
            "name": "Architecture",
            "detail": "Secure network design and cloud security."
          },
          {
            "name": "Implementation",
            "detail": "Identity management and cryptography."
          },
          {
            "name": "Operations",
            "detail": "Incident response and digital forensics."
          },
          {
            "name": "Governance",
            "detail": "Risk management and compliance standards."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "sec-plus-q1",
        "question": "Which type of attack uses deceptive emails to steal credentials?",
        "options": [
          "DDoS",
          "Man-in-the-Middle",
          "Phishing",
          "SQL Injection"
        ],
        "answer": "Phishing",
        "category": "Core Knowledge",
        "explanation": "Phishing is a social engineering attack that tricks users into revealing sensitive information."
      },
      {
        "id": "sec-plus-q2",
        "question": "What does the principle of Least Privilege state?",
        "options": [
          "Access is based on seniority",
          "All users should have admin rights",
          "Everyone has access to everything",
          "Users should only have minimum access required"
        ],
        "answer": "Users should only have minimum access required",
        "category": "Core Knowledge",
        "explanation": "Least Privilege minimizes the potential damage from a compromised account."
      },
      {
        "id": "sec-plus-q3",
        "question": "Which encryption type uses the same key for both encryption and decryption?",
        "options": [
          "Asymmetric",
          "Hashing",
          "Public Key",
          "Symmetric"
        ],
        "answer": "Symmetric",
        "category": "Core Knowledge",
        "explanation": "Symmetric encryption (like AES) uses a single shared secret key."
      },
      {
        "id": "sec-plus-q4",
        "question": "What is a DMZ used for in network security?",
        "options": [
          "Backup internal data",
          "Host public-facing services",
          "Storage for logs",
          "Testing malware"
        ],
        "answer": "Host public-facing services",
        "category": "Core Knowledge",
        "explanation": "A DeMilitarized Zone (DMZ) isolates public services from the private internal network."
      },
      {
        "id": "sec-plus-q5",
        "question": "Which framework provides a standard for managing IT risks in the US?",
        "options": [
          "GDPR",
          "HIPAA",
          "ISO 27001",
          "NIST RMF"
        ],
        "answer": "NIST RMF",
        "category": "Core Knowledge",
        "explanation": "The NIST Risk Management Framework is widely used for securing government and private systems."
      },
      {
        "id": "sec-plus-q6",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q7",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q8",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q9",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q10",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q11",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q12",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q13",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q14",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q15",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q16",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q17",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q18",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q19",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q20",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q21",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q22",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q23",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q24",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q25",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q26",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q27",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q28",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q29",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q30",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q31",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q32",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q33",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q34",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q35",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q36",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q37",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q38",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q39",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q40",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q41",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q42",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q43",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q44",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q45",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "sec-plus-q46",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "sec-plus-q47",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "sec-plus-q48",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "sec-plus-q49",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "sec-plus-q50",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      }
    ]
  },
  {
    "id": "aws-ccp",
    "title": "AWS Certified Cloud Practitioner",
    "issuer": "AWS",
    "domain": "Cloud",
    "level": "Beginner",
    "price": 100,
    "duration": "90 mins",
    "questionsCount": "65",
    "description": "Overall understanding of the AWS Cloud platform.",
    "reviewer": [
      {
        "title": "Cloud Core Knowledge",
        "topics": [
          {
            "name": "Cloud Concepts",
            "detail": "Elasticity, scalability, and high availability."
          },
          {
            "name": "Security & Compliance",
            "detail": "Shared Responsibility Model and IAM."
          },
          {
            "name": "Technology",
            "detail": "Compute (EC2), Storage (S3), and DBs (RDS)."
          },
          {
            "name": "Billing & Pricing",
            "detail": "Pricing models and cost optimization."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-ccp-q1",
        "question": "Which AWS service provides resizable compute capacity in the cloud?",
        "options": [
          "AWS Lambda",
          "Amazon EC2",
          "Amazon RDS",
          "Amazon S3"
        ],
        "answer": "Amazon EC2",
        "category": "Core Knowledge",
        "explanation": "EC2 allows users to run virtual servers in the AWS cloud."
      },
      {
        "id": "aws-ccp-q2",
        "question": "In the Shared Responsibility Model, who is responsible for patching the guest OS?",
        "options": [
          "AWS",
          "Both",
          "The Customer",
          "Third-party vendor"
        ],
        "answer": "The Customer",
        "category": "Core Knowledge",
        "explanation": "AWS manages the infrastructure; the customer manages their data and OS."
      },
      {
        "id": "aws-ccp-q3",
        "question": "Which service is used to manage user access and permissions in AWS?",
        "options": [
          "AWS Config",
          "AWS IAM",
          "AWS Shield",
          "Amazon CloudWatch"
        ],
        "answer": "AWS IAM",
        "category": "Core Knowledge",
        "explanation": "Identity and Access Management (IAM) controls who can access AWS resources."
      },
      {
        "id": "aws-ccp-q4",
        "question": "What is the benefit of 'Elasticity' in cloud computing?",
        "options": [
          "Accessing data from anywhere",
          "Having a static IP address",
          "Paying a fixed monthly fee",
          "Scaling resources based on demand"
        ],
        "answer": "Scaling resources based on demand",
        "category": "Core Knowledge",
        "explanation": "Elasticity allows a system to automatically add or remove resources to match load."
      },
      {
        "id": "aws-ccp-q5",
        "question": "Which AWS tool helps estimate monthly cloud costs?",
        "options": [
          "AWS Pricing Calculator",
          "AWS Shield",
          "AWS Trusted Advisor",
          "Amazon Inspector"
        ],
        "answer": "AWS Pricing Calculator",
        "category": "Core Knowledge",
        "explanation": "The calculator provides an estimate of your AWS bill based on planned usage."
      },
      {
        "id": "aws-ccp-q6",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q7",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q8",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q9",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q10",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q11",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q12",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q13",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q14",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q15",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q16",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q17",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q18",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q19",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q20",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q21",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q22",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q23",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q24",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q25",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q26",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q27",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q28",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q29",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q30",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q31",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q32",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q33",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q34",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q35",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q36",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q37",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q38",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q39",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q40",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q41",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q42",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q43",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q44",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q45",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-ccp-q46",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-ccp-q47",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-ccp-q48",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-ccp-q49",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-ccp-q50",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      }
    ]
  },
  {
    "id": "pmp",
    "title": "Project Management Professional (PMP)",
    "issuer": "PMI",
    "domain": "Project Management",
    "level": "Advanced",
    "price": 555,
    "duration": "230 mins",
    "questionsCount": "180",
    "description": "Gold standard of project management certification.",
    "reviewer": [
      {
        "title": "Project Management Core Knowledge",
        "topics": [
          {
            "name": "People",
            "detail": "Leading teams and managing conflict."
          },
          {
            "name": "Process",
            "detail": "Methodologies (Agile, Waterfall, Hybrid)."
          },
          {
            "name": "Business Environment",
            "detail": "Organizational change and value delivery."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pmp-q1",
        "question": "In Scrum, who is responsible for prioritizing the Product Backlog?",
        "options": [
          "Development Team",
          "Product Owner",
          "Project Manager",
          "Scrum Master"
        ],
        "answer": "Product Owner",
        "category": "Core Knowledge",
        "explanation": "The Product Owner represents the business and prioritizes work for the team."
      },
      {
        "id": "pmp-q2",
        "question": "What is the 'Critical Path' in a project schedule?",
        "options": [
          "Tasks with the most budget",
          "The list of easy tasks",
          "The longest sequence of tasks",
          "The shortest sequence of tasks"
        ],
        "answer": "The longest sequence of tasks",
        "category": "Core Knowledge",
        "explanation": "The critical path determines the minimum duration of the project."
      },
      {
        "id": "pmp-q3",
        "question": "Which methodology uses 'Sprints' to deliver incremental value?",
        "options": [
          "Agile",
          "PRINCE2",
          "Six Sigma",
          "Waterfall"
        ],
        "answer": "Agile",
        "category": "Core Knowledge",
        "explanation": "Agile frameworks like Scrum break work into short time-boxed iterations."
      },
      {
        "id": "pmp-q4",
        "question": "How should a project manager handle a highly influential but resistant stakeholder?",
        "options": [
          "Assign them more tasks",
          "Ignore them",
          "Manage closely and engage frequently",
          "Remove them from the project"
        ],
        "answer": "Manage closely and engage frequently",
        "category": "Core Knowledge",
        "explanation": "Engagement is key to converting or mitigating the impact of resistant stakeholders."
      },
      {
        "id": "pmp-q5",
        "question": "What does EVM stand for in project management?",
        "options": [
          "Earned Value Management",
          "Efficient Value Mapping",
          "Essential View Metric",
          "Estimated Variable Margin"
        ],
        "answer": "Earned Value Management",
        "category": "Core Knowledge",
        "explanation": "EVM is a technique used to measure project performance and progress."
      },
      {
        "id": "pmp-q6",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q7",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q8",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q9",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q10",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q11",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q12",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q13",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q14",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q15",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q16",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q17",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q18",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q19",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q20",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q21",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q22",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q23",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q24",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q25",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q26",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q27",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q28",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q29",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q30",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q31",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q32",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q33",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q34",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q35",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q36",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q37",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q38",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q39",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q40",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q41",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q42",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q43",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q44",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q45",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "pmp-q46",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "pmp-q47",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "pmp-q48",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "pmp-q49",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "pmp-q50",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      }
    ]
  },
  {
    "id": "aplus",
    "title": "CompTIA A+",
    "issuer": "CompTIA",
    "domain": "Infrastructure",
    "level": "Beginner",
    "price": 246,
    "duration": "90 mins",
    "questionsCount": "Max 90",
    "description": "Standard for entry-level IT professionals.",
    "reviewer": [
      {
        "title": "Infrastructure Core Knowledge",
        "topics": [
          {
            "name": "Hardware",
            "detail": "Processors, RAM, and Motherboards."
          },
          {
            "name": "Operating Systems",
            "detail": "Windows, Linux, and mobile OS."
          },
          {
            "name": "Troubleshooting",
            "detail": "Systematic hardware and software repair."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aplus-q1",
        "question": "Which component acts as the 'brain' of the computer?",
        "options": [
          "CPU",
          "GPU",
          "HDD",
          "RAM"
        ],
        "answer": "CPU",
        "category": "Core Knowledge",
        "explanation": "The Central Processing Unit (CPU) executes instructions and processes data."
      },
      {
        "id": "aplus-q2",
        "question": "What is the first step in the troubleshooting process?",
        "options": [
          "Document findings",
          "Establish a theory",
          "Identify the problem",
          "Test the theory"
        ],
        "answer": "Identify the problem",
        "category": "Core Knowledge",
        "explanation": "You must first understand what is wrong before attempting to fix it."
      },
      {
        "id": "aplus-q3",
        "question": "Which port is used for a standard wired network connection?",
        "options": [
          "DisplayPort",
          "HDMI",
          "RJ-45",
          "USB-C"
        ],
        "answer": "RJ-45",
        "category": "Core Knowledge",
        "explanation": "The Registered Jack 45 (RJ-45) is the standard connector for Ethernet cables."
      },
      {
        "id": "aplus-q4",
        "question": "Which storage type has no moving parts and is faster than a traditional HDD?",
        "options": [
          "CD-ROM",
          "Floppy Disk",
          "SSD",
          "Tape Drive"
        ],
        "answer": "SSD",
        "category": "Core Knowledge",
        "explanation": "Solid State Drives (SSDs) use flash memory for high-speed data access."
      },
      {
        "id": "aplus-q5",
        "question": "What command is used to check the IP configuration on a Windows machine?",
        "options": [
          "ifconfig",
          "ipconfig",
          "netstat",
          "ping"
        ],
        "answer": "ipconfig",
        "category": "Core Knowledge",
        "explanation": "The ipconfig command displays all current TCP/IP network configuration values."
      },
      {
        "id": "aplus-q6",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q7",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q8",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q9",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q10",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q11",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q12",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q13",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q14",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q15",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q16",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q17",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q18",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q19",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q20",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q21",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q22",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q23",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q24",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q25",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q26",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q27",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q28",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q29",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q30",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q31",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q32",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q33",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q34",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q35",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q36",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q37",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q38",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q39",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q40",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q41",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q42",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q43",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q44",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q45",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "aplus-q46",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "aplus-q47",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "aplus-q48",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "aplus-q49",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "aplus-q50",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      }
    ]
  },
  {
    "id": "network-plus",
    "title": "CompTIA Network+",
    "issuer": "CompTIA",
    "domain": "Networking",
    "level": "Beginner",
    "price": 358,
    "duration": "90 mins",
    "questionsCount": "Max 90",
    "description": "Essential knowledge for a career in IT infrastructure.",
    "reviewer": [
      {
        "title": "Networking Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for CompTIA Network+."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "network-plus-q1",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q2",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q3",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q4",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q5",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q6",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q7",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q8",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q9",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q10",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q11",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q12",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q13",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q14",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q15",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q16",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q17",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q18",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q19",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q20",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q21",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q22",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q23",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q24",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q25",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q26",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q27",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q28",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q29",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q30",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q31",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q32",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q33",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q34",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q35",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q36",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q37",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q38",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q39",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q40",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q41",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q42",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q43",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q44",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q45",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "network-plus-q46",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "network-plus-q47",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "network-plus-q48",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "network-plus-q49",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "network-plus-q50",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      }
    ]
  },
  {
    "id": "ccnp-encor",
    "title": "CCNP Enterprise ENCOR",
    "issuer": "Cisco",
    "domain": "Networking",
    "level": "Advanced",
    "price": 400,
    "duration": "120 mins",
    "questionsCount": "90-110",
    "description": "Implementing and operating core network technologies.",
    "reviewer": [
      {
        "title": "Networking Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for CCNP Enterprise ENCOR."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ccnp-encor-q1",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q2",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q3",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q4",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q5",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q6",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q7",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q8",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q9",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q10",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q11",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q12",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q13",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q14",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q15",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q16",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q17",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q18",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q19",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q20",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q21",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q22",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q23",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q24",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q25",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q26",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q27",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q28",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q29",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q30",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q31",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q32",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q33",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q34",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q35",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q36",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q37",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q38",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q39",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q40",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q41",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q42",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q43",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q44",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q45",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "ccnp-encor-q46",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "ccnp-encor-q47",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "ccnp-encor-q48",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "ccnp-encor-q49",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "ccnp-encor-q50",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      }
    ]
  },
  {
    "id": "cissp",
    "title": "Certified Information Systems Security Professional",
    "issuer": "ISC2",
    "domain": "Security",
    "level": "Advanced",
    "price": 749,
    "duration": "180 mins",
    "questionsCount": "100-150",
    "description": "The gold standard for info security professionals.",
    "reviewer": [
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Certified Information Systems Security Professional."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cissp-q1",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q2",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q3",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q4",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q5",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q6",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q7",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q8",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q9",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q10",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q11",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q12",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q13",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q14",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q15",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q16",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q17",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q18",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q19",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q20",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q21",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q22",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q23",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q24",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q25",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q26",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q27",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q28",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q29",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q30",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q31",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q32",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q33",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q34",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q35",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q36",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q37",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q38",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q39",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q40",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q41",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q42",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q43",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q44",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q45",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cissp-q46",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cissp-q47",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cissp-q48",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cissp-q49",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cissp-q50",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      }
    ]
  },
  {
    "id": "ceh",
    "title": "Certified Ethical Hacker",
    "issuer": "EC-Council",
    "domain": "Security",
    "level": "Intermediate",
    "price": 1199,
    "duration": "240 mins",
    "questionsCount": "125",
    "description": "Master the 5 phases of ethical hacking.",
    "reviewer": [
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Certified Ethical Hacker."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ceh-q1",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q2",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q3",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q4",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q5",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q6",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q7",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q8",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q9",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q10",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q11",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q12",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q13",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q14",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q15",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q16",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q17",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q18",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q19",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q20",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q21",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q22",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q23",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q24",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q25",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q26",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q27",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q28",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q29",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q30",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q31",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q32",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q33",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q34",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q35",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q36",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q37",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q38",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q39",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q40",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q41",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q42",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q43",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q44",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q45",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "ceh-q46",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "ceh-q47",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "ceh-q48",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "ceh-q49",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "ceh-q50",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      }
    ]
  },
  {
    "id": "aws-sa-assoc",
    "title": "AWS Solutions Architect - Associate",
    "issuer": "AWS",
    "domain": "Cloud",
    "level": "Intermediate",
    "price": 150,
    "duration": "130 mins",
    "questionsCount": "65",
    "description": "Design cost-efficient, fault-tolerant systems on AWS.",
    "reviewer": [
      {
        "title": "Cloud Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for AWS Solutions Architect - Associate."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-sa-assoc-q1",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q2",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q3",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q4",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q5",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q6",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q7",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q8",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q9",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q10",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q11",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q12",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q13",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q14",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q15",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q16",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q17",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q18",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q19",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q20",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q21",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q22",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q23",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q24",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q25",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q26",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q27",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q28",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q29",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q30",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q31",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q32",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q33",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q34",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q35",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q36",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q37",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q38",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q39",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q40",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q41",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q42",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q43",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q44",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q45",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "aws-sa-assoc-q46",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "aws-sa-assoc-q47",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "aws-sa-assoc-q48",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "aws-sa-assoc-q49",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "aws-sa-assoc-q50",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      }
    ]
  },
  {
    "id": "az-900",
    "title": "Microsoft Certified: Azure Fundamentals",
    "issuer": "Microsoft",
    "domain": "Cloud",
    "level": "Beginner",
    "price": 99,
    "duration": "45-65 mins",
    "questionsCount": "40-60",
    "description": "Foundational knowledge of cloud services and Azure.",
    "reviewer": [
      {
        "title": "Cloud Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Microsoft Certified: Azure Fundamentals."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "az-900-q1",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q2",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q3",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q4",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q5",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q6",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q7",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q8",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q9",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q10",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q11",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q12",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q13",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q14",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q15",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q16",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q17",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q18",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q19",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q20",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q21",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q22",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q23",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q24",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q25",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q26",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q27",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q28",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q29",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q30",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q31",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q32",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q33",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q34",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q35",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q36",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q37",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q38",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q39",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q40",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q41",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q42",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q43",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q44",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q45",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-900-q46",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-900-q47",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-900-q48",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-900-q49",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-900-q50",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      }
    ]
  },
  {
    "id": "az-104",
    "title": "Microsoft Azure Administrator",
    "issuer": "Microsoft",
    "domain": "Cloud",
    "level": "Intermediate",
    "price": 165,
    "duration": "120 mins",
    "questionsCount": "40-60",
    "description": "Implement, manage, and monitor Azure environments.",
    "reviewer": [
      {
        "title": "Cloud Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Microsoft Azure Administrator."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "az-104-q1",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q2",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q3",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q4",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q5",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q6",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q7",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q8",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q9",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q10",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q11",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q12",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q13",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q14",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q15",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q16",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q17",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q18",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q19",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q20",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q21",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q22",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q23",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q24",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q25",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q26",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q27",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q28",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q29",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q30",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q31",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q32",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q33",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q34",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q35",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q36",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q37",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q38",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q39",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q40",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q41",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q42",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q43",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q44",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q45",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "az-104-q46",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "az-104-q47",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "az-104-q48",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "az-104-q49",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "az-104-q50",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      }
    ]
  },
  {
    "id": "gcp-pca",
    "title": "Google Professional Cloud Architect",
    "issuer": "Google Cloud",
    "domain": "Cloud",
    "level": "Advanced",
    "price": 200,
    "duration": "120 mins",
    "questionsCount": "50-60",
    "description": "Design and manage robust solutions on Google Cloud.",
    "reviewer": [
      {
        "title": "Cloud Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Google Professional Cloud Architect."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "gcp-pca-q1",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q2",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q3",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q4",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q5",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q6",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q7",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q8",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q9",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q10",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q11",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q12",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q13",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q14",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q15",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q16",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q17",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q18",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q19",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q20",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q21",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q22",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q23",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q24",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q25",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q26",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q27",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q28",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q29",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q30",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q31",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q32",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q33",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q34",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q35",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q36",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q37",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q38",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q39",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q40",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q41",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q42",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q43",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q44",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q45",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "gcp-pca-q46",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "gcp-pca-q47",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "gcp-pca-q48",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "gcp-pca-q49",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "gcp-pca-q50",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      }
    ]
  },
  {
    "id": "oci-found",
    "title": "OCI Foundations Associate",
    "issuer": "Oracle",
    "domain": "Cloud",
    "level": "Beginner",
    "price": 0,
    "duration": "60 mins",
    "questionsCount": "40",
    "description": "Fundamental knowledge of OCI public cloud services.",
    "reviewer": [
      {
        "title": "Cloud Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for OCI Foundations Associate."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "oci-found-q1",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q2",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q3",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q4",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q5",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q6",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q7",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q8",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q9",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q10",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q11",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q12",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q13",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q14",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q15",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q16",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q17",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q18",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q19",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q20",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q21",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q22",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q23",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q24",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q25",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q26",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q27",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q28",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q29",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q30",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q31",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q32",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q33",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q34",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q35",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q36",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q37",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q38",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q39",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q40",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q41",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q42",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q43",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q44",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q45",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      },
      {
        "id": "oci-found-q46",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service",
          "Software as a Service",
          "Storage as a Service",
          "System as a Service"
        ],
        "answer": "Software as a Service",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis."
      },
      {
        "id": "oci-found-q47",
        "question": "Which cloud model is a combination of public and private clouds?",
        "options": [
          "Community Cloud",
          "Distributed Cloud",
          "Hybrid Cloud",
          "Multi-Cloud"
        ],
        "answer": "Hybrid Cloud",
        "category": "Domain Review",
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments."
      },
      {
        "id": "oci-found-q48",
        "question": "What is 'Serverless' computing?",
        "options": [
          "A cloud with no physical hardware",
          "A server that never crashes",
          "Running code without managing servers",
          "Storing data in the browser"
        ],
        "answer": "Running code without managing servers",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
      },
      {
        "id": "oci-found-q49",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A country-wide network",
          "A physical location containing multiple availability zones",
          "A single data center",
          "A virtual private cloud"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted."
      },
      {
        "id": "oci-found-q50",
        "question": "What is the primary advantage of cloud computing?",
        "options": [
          "Lower security",
          "Manual hardware management",
          "No internet requirement",
          "Pay-as-you-go pricing"
        ],
        "answer": "Pay-as-you-go pricing",
        "category": "Domain Review",
        "explanation": "Cloud computing converts capital expenses into variable operational expenses."
      }
    ]
  },
  {
    "id": "capm",
    "title": "Certified Associate in Project Management",
    "issuer": "PMI",
    "domain": "Project Management",
    "level": "Beginner",
    "price": 300,
    "duration": "180 mins",
    "questionsCount": "150",
    "description": "Entry-level certification for project team members.",
    "reviewer": [
      {
        "title": "Project Management Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Certified Associate in Project Management."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "capm-q1",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q2",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q3",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q4",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q5",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q6",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q7",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q8",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q9",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q10",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q11",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q12",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q13",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q14",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q15",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q16",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q17",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q18",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q19",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q20",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q21",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q22",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q23",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q24",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q25",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q26",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q27",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q28",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q29",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q30",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q31",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q32",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q33",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q34",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q35",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q36",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q37",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q38",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q39",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q40",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q41",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q42",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q43",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q44",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q45",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "capm-q46",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "capm-q47",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "capm-q48",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "capm-q49",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "capm-q50",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      }
    ]
  },
  {
    "id": "csm",
    "title": "Certified ScrumMaster (CSM)",
    "issuer": "Scrum Alliance",
    "domain": "Project Management",
    "level": "Beginner",
    "price": 500,
    "duration": "60 mins",
    "questionsCount": "50",
    "description": "Lead Agile teams and deliver high-value results.",
    "reviewer": [
      {
        "title": "Project Management Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Certified ScrumMaster (CSM)."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "csm-q1",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q2",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q3",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q4",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q5",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q6",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q7",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q8",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q9",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q10",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q11",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q12",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q13",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q14",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q15",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q16",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q17",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q18",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q19",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q20",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q21",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q22",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q23",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q24",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q25",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q26",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q27",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q28",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q29",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q30",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q31",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q32",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q33",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q34",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q35",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q36",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q37",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q38",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q39",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q40",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q41",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q42",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q43",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q44",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q45",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "csm-q46",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "csm-q47",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "csm-q48",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "csm-q49",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "csm-q50",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      }
    ]
  },
  {
    "id": "itil-found",
    "title": "ITIL 4 Foundation",
    "issuer": "Axelos",
    "domain": "Project Management",
    "level": "Beginner",
    "price": 450,
    "duration": "60 mins",
    "questionsCount": "40",
    "description": "Digital-first operating model for service management.",
    "reviewer": [
      {
        "title": "Project Management Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for ITIL 4 Foundation."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "itil-found-q1",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q2",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q3",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q4",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q5",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q6",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q7",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q8",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q9",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q10",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q11",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q12",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q13",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q14",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q15",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q16",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q17",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q18",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q19",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q20",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q21",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q22",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q23",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q24",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q25",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q26",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q27",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q28",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q29",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q30",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q31",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q32",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q33",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q34",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q35",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q36",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q37",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q38",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q39",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q40",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q41",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q42",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q43",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q44",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q45",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      },
      {
        "id": "itil-found-q46",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session",
          "A short daily meeting to discuss progress",
          "A weekly project review",
          "An exercise break for the team"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early."
      },
      {
        "id": "itil-found-q47",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A bug in the software",
          "A decrease in project budget",
          "A slow project manager",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget."
      },
      {
        "id": "itil-found-q48",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema",
          "A financial spreadsheet",
          "A risk management framework",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies."
      },
      {
        "id": "itil-found-q49",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users",
          "Only the investors",
          "Only the project team"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more."
      },
      {
        "id": "itil-found-q50",
        "question": "What is the 'MVP' in product development?",
        "options": [
          "Main Version Prototype",
          "Maximum Value Process",
          "Minimum Viable Product",
          "Most Valuable Player"
        ],
        "answer": "Minimum Viable Product",
        "category": "Domain Review",
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback."
      }
    ]
  },
  {
    "id": "linux-plus",
    "title": "CompTIA Linux+",
    "issuer": "CompTIA",
    "domain": "Infrastructure",
    "level": "Intermediate",
    "price": 358,
    "duration": "90 mins",
    "questionsCount": "Max 90",
    "description": "Securely manage Linux-based IT infrastructure.",
    "reviewer": [
      {
        "title": "Infrastructure Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for CompTIA Linux+."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "linux-plus-q1",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q2",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q3",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q4",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q5",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q6",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q7",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q8",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q9",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q10",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q11",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q12",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q13",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q14",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q15",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q16",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q17",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q18",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q19",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q20",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q21",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q22",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q23",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q24",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q25",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q26",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q27",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q28",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q29",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q30",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q31",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q32",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q33",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q34",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q35",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q36",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q37",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q38",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q39",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q40",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q41",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q42",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q43",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q44",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q45",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "linux-plus-q46",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "linux-plus-q47",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "linux-plus-q48",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "linux-plus-q49",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "linux-plus-q50",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      }
    ]
  },
  {
    "id": "terraform-assoc",
    "title": "HashiCorp Certified: Terraform Associate",
    "issuer": "HashiCorp",
    "domain": "Infrastructure",
    "level": "Intermediate",
    "price": 70,
    "duration": "60 mins",
    "questionsCount": "57",
    "description": "Infrastructure as Code (IaC) concepts and skills.",
    "reviewer": [
      {
        "title": "Infrastructure Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for HashiCorp Certified: Terraform Associate."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "terraform-assoc-q1",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q2",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q3",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q4",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q5",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q6",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q7",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q8",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q9",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q10",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q11",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q12",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q13",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q14",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q15",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q16",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q17",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q18",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q19",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q20",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q21",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q22",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q23",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q24",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q25",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q26",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q27",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q28",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q29",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q30",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q31",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q32",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q33",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q34",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q35",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q36",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q37",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q38",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q39",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q40",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q41",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q42",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q43",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q44",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q45",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      },
      {
        "id": "terraform-assoc-q46",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real",
          "Storing data on a USB drive",
          "Using a VR headset"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine."
      },
      {
        "id": "terraform-assoc-q47",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing photos",
          "Hosting a database",
          "Scanning for viruses"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers."
      },
      {
        "id": "terraform-assoc-q48",
        "question": "What does 'BIOS' stand for?",
        "options": [
          "Backup Internal Output Setup",
          "Basic Input/Output System",
          "Basic Integrated Operating Server",
          "Binary Input Operating System"
        ],
        "answer": "Basic Input/Output System",
        "category": "Domain Review",
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process."
      },
      {
        "id": "terraform-assoc-q49",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems."
      },
      {
        "id": "terraform-assoc-q50",
        "question": "What is 'Linux'?",
        "options": [
          "A Microsoft product",
          "A specific type of hardware",
          "A web browser",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
      }
    ]
  },
  {
    "id": "dp-900",
    "title": "Microsoft Azure Data Fundamentals",
    "issuer": "Microsoft",
    "domain": "Data & AI",
    "level": "Beginner",
    "price": 99,
    "duration": "60 mins",
    "questionsCount": "40-60",
    "description": "Foundational knowledge of core data concepts in Azure.",
    "reviewer": [
      {
        "title": "Data & AI Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Microsoft Azure Data Fundamentals."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "dp-900-q1",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q2",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q3",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q4",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q5",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q6",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q7",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q8",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q9",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q10",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q11",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q12",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q13",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q14",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q15",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q16",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q17",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q18",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q19",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q20",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q21",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q22",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q23",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q24",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q25",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q26",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q27",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q28",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q29",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q30",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q31",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q32",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q33",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q34",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q35",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q36",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q37",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q38",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q39",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q40",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q41",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q42",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q43",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q44",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q45",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "dp-900-q46",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "dp-900-q47",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "dp-900-q48",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "dp-900-q49",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "dp-900-q50",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      }
    ]
  },
  {
    "id": "ai-900",
    "title": "Microsoft Azure AI Fundamentals",
    "issuer": "Microsoft",
    "domain": "Data & AI",
    "level": "Beginner",
    "price": 99,
    "duration": "60 mins",
    "questionsCount": "40-60",
    "description": "Foundational knowledge of AI and ML in Azure.",
    "reviewer": [
      {
        "title": "Data & AI Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Microsoft Azure AI Fundamentals."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ai-900-q1",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q2",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q3",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q4",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q5",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q6",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q7",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q8",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q9",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q10",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q11",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q12",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q13",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q14",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q15",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q16",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q17",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q18",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q19",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q20",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q21",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q22",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q23",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q24",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q25",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q26",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q27",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q28",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q29",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q30",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q31",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q32",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q33",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q34",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q35",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q36",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q37",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q38",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q39",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q40",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q41",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q42",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q43",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q44",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q45",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "ai-900-q46",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "ai-900-q47",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "ai-900-q48",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "ai-900-q49",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "ai-900-q50",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      }
    ]
  },
  {
    "id": "pl-900",
    "title": "Microsoft Power Platform Fundamentals",
    "issuer": "Microsoft",
    "domain": "Data & AI",
    "level": "Beginner",
    "price": 99,
    "duration": "60 mins",
    "questionsCount": "40-60",
    "description": "Understanding Power Platform and its business value.",
    "reviewer": [
      {
        "title": "Data & AI Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Microsoft Power Platform Fundamentals."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pl-900-q1",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q2",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q3",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q4",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q5",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q6",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q7",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q8",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q9",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q10",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q11",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q12",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q13",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q14",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q15",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q16",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q17",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q18",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q19",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q20",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q21",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q22",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q23",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q24",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q25",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q26",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q27",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q28",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q29",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q30",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q31",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q32",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q33",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q34",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q35",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q36",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q37",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q38",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q39",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q40",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q41",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q42",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q43",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q44",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q45",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      },
      {
        "id": "pl-900-q46",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human",
          "A very large database",
          "Algorithms that learn patterns from data",
          "An automated car"
        ],
        "answer": "Algorithms that learn patterns from data",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data."
      },
      {
        "id": "pl-900-q47",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images",
          "A list of contacts",
          "A single large text file",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables."
      },
      {
        "id": "pl-900-q48",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image",
          "A long list of names",
          "A very heavy hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety."
      },
      {
        "id": "pl-900-q49",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster",
          "A virtual reality game",
          "An advanced calculator",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing."
      },
      {
        "id": "pl-900-q50",
        "question": "What is 'SQL'?",
        "options": [
          "Simple Queue List",
          "Standard Query Level",
          "Structured Query Language",
          "System Quality Log"
        ],
        "answer": "Structured Query Language",
        "category": "Domain Review",
        "explanation": "SQL is the standard language for managing and querying relational databases."
      }
    ]
  },
  {
    "id": "cism",
    "title": "Certified Information Security Manager",
    "issuer": "ISACA",
    "domain": "Security",
    "level": "Advanced",
    "price": 760,
    "duration": "240 mins",
    "questionsCount": "150",
    "description": "Focus on security management and strategy.",
    "reviewer": [
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Certified Information Security Manager."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cism-q1",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q2",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q3",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q4",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q5",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q6",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q7",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q8",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q9",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q10",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q11",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q12",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q13",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q14",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q15",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q16",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q17",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q18",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q19",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q20",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q21",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q22",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q23",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q24",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q25",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q26",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q27",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q28",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q29",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q30",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q31",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q32",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q33",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q34",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q35",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q36",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q37",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q38",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q39",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q40",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q41",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q42",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q43",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q44",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q45",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "cism-q46",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "cism-q47",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "cism-q48",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "cism-q49",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "cism-q50",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      }
    ]
  },
  {
    "id": "oscp",
    "title": "Offensive Security Certified Professional",
    "issuer": "OffSec",
    "domain": "Security",
    "level": "Advanced",
    "price": 1599,
    "duration": "24 hours",
    "questionsCount": "Hands-on",
    "description": "The leading penetration testing certification.",
    "reviewer": [
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for Offensive Security Certified Professional."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "oscp-q1",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q2",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q3",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q4",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q5",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q6",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q7",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q8",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q9",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q10",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q11",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q12",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q13",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q14",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q15",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q16",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q17",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q18",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q19",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q20",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q21",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q22",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q23",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q24",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q25",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q26",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q27",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q28",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q29",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q30",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q31",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q32",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q33",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q34",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q35",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q36",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q37",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q38",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q39",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q40",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q41",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q42",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q43",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q44",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q45",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      },
      {
        "id": "oscp-q46",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing passwords every week",
          "Using a secure browser",
          "Using a very long password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are."
      },
      {
        "id": "oscp-q47",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall",
          "A tool for generating passwords",
          "A type of secure email",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid."
      },
      {
        "id": "oscp-q48",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow",
          "Cross-site scripting",
          "SQLi",
          "Tailgating"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area."
      },
      {
        "id": "oscp-q49",
        "question": "What is the purpose of Hashing?",
        "options": [
          "Create a virtual private network",
          "Encrypt files for storage",
          "Ensure data integrity",
          "Secure a wireless network"
        ],
        "answer": "Ensure data integrity",
        "category": "Domain Review",
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
      },
      {
        "id": "oscp-q50",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the server room",
          "Detect viruses on a hard drive",
          "Filter traffic based on security rules",
          "Speed up internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
      }
    ]
  },
  {
    "id": "jcia-junos",
    "title": "JNCIA-Junos",
    "issuer": "Juniper",
    "domain": "Networking",
    "level": "Beginner",
    "price": 200,
    "duration": "90 mins",
    "questionsCount": "65",
    "description": "Knowledge of the Juniper Networks Junos OS.",
    "reviewer": [
      {
        "title": "Networking Fundamentals",
        "topics": [
          {
            "name": "Core Concepts",
            "detail": "Fundamental knowledge required for JNCIA-Junos."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "jcia-junos-q1",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q2",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q3",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q4",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q5",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q6",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q7",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q8",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q9",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q10",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q11",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q12",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q13",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q14",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q15",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q16",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q17",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q18",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q19",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q20",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q21",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q22",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q23",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q24",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q25",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q26",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q27",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q28",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q29",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q30",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q31",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q32",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q33",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q34",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q35",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q36",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q37",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q38",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q39",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q40",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q41",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q42",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q43",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q44",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q45",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      },
      {
        "id": "jcia-junos-q46",
        "question": "What does DHCP stand for?",
        "options": [
          "Data Hub Control Process",
          "Direct Host Connection Path",
          "Dynamic Hardware Control Protocol",
          "Dynamic Host Configuration Protocol"
        ],
        "answer": "Dynamic Host Configuration Protocol",
        "category": "Domain Review",
        "explanation": "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        "id": "jcia-junos-q47",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP",
          "HTTP",
          "HTTPS",
          "SSH"
        ],
        "answer": "HTTPS",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
      },
      {
        "id": "jcia-junos-q48",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits",
          "256 bits",
          "32 bits",
          "64 bits"
        ],
        "answer": "128 bits",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space."
      },
      {
        "id": "jcia-junos-q49",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "Change IP address",
          "Download a file",
          "Secure a port",
          "Test network connectivity"
        ],
        "answer": "Test network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
      },
      {
        "id": "jcia-junos-q50",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Router",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks."
      }
    ]
  }
];
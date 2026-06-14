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
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning IPs",
          "Detecting collisions in Ethernet",
          "Encrypting data",
          "Routing packets"
        ],
        "answer": "Detecting collisions in Ethernet",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
      },
      {
        "id": "ccna-q7",
        "question": "What is the port for HTTPS?",
        "options": [
          "21",
          "25",
          "443",
          "80"
        ],
        "answer": "443",
        "category": "Domain Review",
        "explanation": "HTTPS (Secure) uses port 443."
      },
      {
        "id": "ccna-q8",
        "question": "What does a Gateway do?",
        "options": [
          "Connects different networks",
          "Filters viruses",
          "Increases Wi-Fi signal",
          "Stores passwords"
        ],
        "answer": "Connects different networks",
        "category": "Domain Review",
        "explanation": "A gateway serves as an entry/exit point for data between networks."
      },
      {
        "id": "ccna-q9",
        "question": "What is the maximum length of a Cat5e cable segment?",
        "options": [
          "1 kilometer",
          "100 meters",
          "50 meters",
          "500 meters"
        ],
        "answer": "100 meters",
        "category": "Domain Review",
        "explanation": "Ethernet standards for twisted pair cables usually limit segments to 100m."
      },
      {
        "id": "ccna-q10",
        "question": "What is the default subnet mask for a Class C network?",
        "options": [
          "255.0.0.0",
          "255.255.0.0",
          "255.255.255.0",
          "255.255.255.255"
        ],
        "answer": "255.255.255.0",
        "category": "Domain Review",
        "explanation": "Class C networks have a /24 mask."
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
        "question": "Which protocol is used to retrieve emails from a server and delete them after?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "POP3",
        "category": "Domain Review",
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
      },
      {
        "id": "ccna-q13",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the printer",
          "Divide a large network into smaller ones",
          "Speed up the processor",
          "Store emails"
        ],
        "answer": "Divide a large network into smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security."
      },
      {
        "id": "ccna-q14",
        "question": "What is the bit length of a MAC address?",
        "options": [
          "128 bits",
          "32 bits",
          "48 bits",
          "64 bits"
        ],
        "answer": "48 bits",
        "category": "Domain Review",
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers."
      },
      {
        "id": "ccna-q15",
        "question": "Which layer defines electrical and physical specifications for devices?",
        "options": [
          "Application Layer",
          "Network Layer",
          "Physical Layer",
          "Transport Layer"
        ],
        "answer": "Physical Layer",
        "category": "Domain Review",
        "explanation": "Layer 1 deals with cables, connectors, and signals."
      },
      {
        "id": "ccna-q16",
        "question": "What is an 'ACL' in networking?",
        "options": [
          "Access Control List",
          "Active Content Loop",
          "Advanced Core Layer",
          "Automated Connection Link"
        ],
        "answer": "Access Control List",
        "category": "Domain Review",
        "explanation": "ACLs filter network traffic based on rules."
      },
      {
        "id": "ccna-q17",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "all of the above",
          "arp -a",
          "getmac",
          "ipconfig /all"
        ],
        "answer": "all of the above",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address."
      },
      {
        "id": "ccna-q18",
        "question": "Which command is used to trace the path a packet takes to its destination?",
        "options": [
          "netstat",
          "nslookup",
          "ping",
          "tracert"
        ],
        "answer": "tracert",
        "category": "Domain Review",
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
      },
      {
        "id": "ccna-q19",
        "question": "What is a 'Loopback' address?",
        "options": [
          "A public IP",
          "An address used to test the local system",
          "The DNS server address",
          "The address of the router"
        ],
        "answer": "An address used to test the local system",
        "category": "Domain Review",
        "explanation": "127.0.0.1 is the standard IPv4 loopback address."
      },
      {
        "id": "ccna-q20",
        "question": "What is 'Jitter' in networking?",
        "options": [
          "A loose cable",
          "Packet loss",
          "Total network speed",
          "Variation in packet delay"
        ],
        "answer": "Variation in packet delay",
        "category": "Domain Review",
        "explanation": "Low jitter is critical for real-time services like VoIP."
      },
      {
        "id": "ccna-q21",
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
        "question": "What is the function of the ARP protocol?",
        "options": [
          "Assign dynamic IPs",
          "Resolve IP to MAC address",
          "Resolve MAC to IP address",
          "Route traffic"
        ],
        "answer": "Resolve IP to MAC address",
        "category": "Domain Review",
        "explanation": "Address Resolution Protocol (ARP) finds the hardware address for a known IP."
      },
      {
        "id": "ccna-q24",
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
        "id": "ccna-q25",
        "question": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
        "options": [
          "802.11ac",
          "802.11b",
          "802.11g",
          "802.11n"
        ],
        "answer": "802.11ac",
        "category": "Domain Review",
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
      },
      {
        "id": "ccna-q26",
        "question": "Which protocol uses port 25?",
        "options": [
          "DNS",
          "HTTP",
          "RDP",
          "SMTP"
        ],
        "answer": "SMTP",
        "category": "Domain Review",
        "explanation": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails."
      },
      {
        "id": "ccna-q27",
        "question": "What is the purpose of 'QoS'?",
        "options": [
          "Check for viruses",
          "Increase disk space",
          "Prioritize important traffic",
          "Update software"
        ],
        "answer": "Prioritize important traffic",
        "category": "Domain Review",
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
      },
      {
        "id": "ccna-q28",
        "question": "Which protocol uses port 53?",
        "options": [
          "DHCP",
          "DNS",
          "HTTP",
          "HTTPS"
        ],
        "answer": "DNS",
        "category": "Domain Review",
        "explanation": "DNS uses both UDP and TCP on port 53."
      },
      {
        "id": "ccna-q29",
        "question": "What does 'CIDR' stand for?",
        "options": [
          "Classless Inter-Domain Routing",
          "Classless Internal Domain Routing",
          "Connection Identifier Data Record",
          "Core Integrated Data Route"
        ],
        "answer": "Classless Inter-Domain Routing",
        "category": "Domain Review",
        "explanation": "CIDR replaced the older classful IP addressing system."
      },
      {
        "id": "ccna-q30",
        "question": "What is the default port for FTP?",
        "options": [
          "21",
          "22",
          "23",
          "25"
        ],
        "answer": "21",
        "category": "Domain Review",
        "explanation": "File Transfer Protocol (FTP) uses port 21 for control."
      },
      {
        "id": "ccna-q31",
        "question": "Which command checks the reachability of a DNS server?",
        "options": [
          "gethost",
          "ipconfig",
          "nslookup",
          "ping"
        ],
        "answer": "nslookup",
        "category": "Domain Review",
        "explanation": "nslookup is used to query DNS servers for information."
      },
      {
        "id": "ccna-q32",
        "question": "Which protocol is used to securely transfer files?",
        "options": [
          "FTP",
          "SFTP",
          "TFTP",
          "Telnet"
        ],
        "answer": "SFTP",
        "category": "Domain Review",
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
      },
      {
        "id": "ccna-q33",
        "question": "What does a 'Collision Domain' refer to?",
        "options": [
          "A group of devices where data packets can collide",
          "A set of devices sharing a router",
          "A single network cable",
          "The entire internet"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port."
      },
      {
        "id": "ccna-q34",
        "question": "Which protocol is used for synchronizing clocks on a network?",
        "options": [
          "FTP",
          "HTTP",
          "NTP",
          "SNMP"
        ],
        "answer": "NTP",
        "category": "Domain Review",
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time."
      },
      {
        "id": "ccna-q35",
        "question": "What is 'PoE'?",
        "options": [
          "Physical object Encryption",
          "Point of Entry",
          "Power over Ethernet",
          "Protocol of Exchange"
        ],
        "answer": "Power over Ethernet",
        "category": "Domain Review",
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras."
      },
      {
        "id": "ccna-q36",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at half speed",
          "Devices can send or receive but not both at once",
          "Only half the packets arrive",
          "Only one device can ever send"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex."
      },
      {
        "id": "ccna-q37",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Coaxial",
          "Multi-mode Fiber",
          "Single-mode Fiber",
          "UTP"
        ],
        "answer": "Single-mode Fiber",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission."
      },
      {
        "id": "ccna-q38",
        "question": "Which protocol uses port 3389?",
        "options": [
          "RDP",
          "SSH",
          "Telnet",
          "VNC"
        ],
        "answer": "RDP",
        "category": "Domain Review",
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
      },
      {
        "id": "ccna-q39",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses",
          "Distribute traffic across multiple servers",
          "Encrypt network traffic",
          "Store website files"
        ],
        "answer": "Distribute traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load."
      },
      {
        "id": "ccna-q40",
        "question": "Which topology connects all devices to a central hub?",
        "options": [
          "Bus",
          "Mesh",
          "Ring",
          "Star"
        ],
        "answer": "Star",
        "category": "Domain Review",
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down."
      },
      {
        "id": "ccna-q41",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing",
          "Hiding the network name",
          "Identifying traffic for different VLANs on a trunk",
          "Printing wirelessly"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to."
      },
      {
        "id": "ccna-q42",
        "question": "Which protocol is commonly used for network management and monitoring?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "SNMP",
        "category": "Domain Review",
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
      },
      {
        "id": "ccna-q43",
        "question": "What is the range of private IP addresses for Class A?",
        "options": [
          "10.0.0.0 - 10.255.255.255",
          "127.0.0.0 - 127.255.255.255",
          "172.16.0.0 - 172.31.255.255",
          "192.168.0.0 - 192.168.255.255"
        ],
        "answer": "10.0.0.0 - 10.255.255.255",
        "category": "Domain Review",
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks."
      },
      {
        "id": "ccna-q44",
        "question": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
        "options": [
          "Data Link Layer",
          "Network Layer",
          "Physical Layer",
          "Session Layer"
        ],
        "answer": "Data Link Layer",
        "category": "Domain Review",
        "explanation": "Layer 2 is responsible for node-to-node data transfer."
      },
      {
        "id": "ccna-q45",
        "question": "Which type of VPN connects two locations directly?",
        "options": [
          "Client-to-Site",
          "Remote Access",
          "SSL VPN",
          "Site-to-Site"
        ],
        "answer": "Site-to-Site",
        "category": "Domain Review",
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters."
      },
      {
        "id": "ccna-q46",
        "question": "What is 'STP' (Spanning Tree Protocol) used for?",
        "options": [
          "Assign IP addresses",
          "Encrypt passwords",
          "Prevent network loops in switches",
          "Speed up the network"
        ],
        "answer": "Prevent network loops in switches",
        "category": "Domain Review",
        "explanation": "STP ensures there is only one active path between two network nodes."
      },
      {
        "id": "ccna-q47",
        "question": "What does 'MTU' stand for?",
        "options": [
          "Main Transfer Unit",
          "Maximum Transmission Unit",
          "Media Test Utility",
          "Multi-Threaded Utility"
        ],
        "answer": "Maximum Transmission Unit",
        "category": "Domain Review",
        "explanation": "MTU is the largest packet size a network can handle."
      },
      {
        "id": "ccna-q48",
        "question": "What is the standard port for SSH?",
        "options": [
          "22",
          "23",
          "443",
          "80"
        ],
        "answer": "22",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default."
      },
      {
        "id": "ccna-q49",
        "question": "What does 'full-duplex' mean?",
        "options": [
          "Data can flow both ways simultaneously",
          "Data flows in one direction only",
          "Data flows one way at a time",
          "Data is sent twice"
        ],
        "answer": "Data can flow both ways simultaneously",
        "category": "Domain Review",
        "explanation": "Full-duplex communication allows concurrent sending and receiving."
      },
      {
        "id": "ccna-q50",
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
        "question": "What is 'Spear Phishing'?",
        "options": [
          "A type of network cable",
          "A very fast attack",
          "Phishing targeted at a specific person",
          "Phishing with a weapon"
        ],
        "answer": "Phishing targeted at a specific person",
        "category": "Domain Review",
        "explanation": "Spear phishing is highly customized and more effective than general phishing."
      },
      {
        "id": "sec-plus-q7",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference",
          "Viruses are faster",
          "Worms are harmless",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction."
      },
      {
        "id": "sec-plus-q8",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A network hub",
          "A referee",
          "A secure proxy",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent."
      },
      {
        "id": "sec-plus-q9",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key for a private room",
          "A key that everyone has",
          "A physical key",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures."
      },
      {
        "id": "sec-plus-q10",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "AES",
          "Diffie-Hellman",
          "ECC",
          "RSA"
        ],
        "answer": "AES",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
      },
      {
        "id": "sec-plus-q11",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol",
          "A type of agriculture",
          "Redirecting users to a fake website by poisoning DNS",
          "Stealing emails"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one."
      },
      {
        "id": "sec-plus-q12",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection",
          "A software update",
          "Overwriting memory to execute malicious code",
          "Too much data on a disk"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution."
      },
      {
        "id": "sec-plus-q13",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A database backup",
          "A network protocol",
          "A type of virus",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data."
      },
      {
        "id": "sec-plus-q14",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory",
          "A list of employees",
          "A path in the woods"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance."
      },
      {
        "id": "sec-plus-q15",
        "question": "What is 'Access Control'?",
        "options": [
          "A type of remote control",
          "Hiring a security guard",
          "Restricting access to resources to authorized users",
          "Turning off the computer"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization."
      },
      {
        "id": "sec-plus-q16",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS",
          "A phishing attack targeted at high-level executives",
          "A type of network cable",
          "Hunting whales"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs."
      },
      {
        "id": "sec-plus-q17",
        "question": "What is a 'Botnet'?",
        "options": [
          "A group of robots",
          "A network of infected computers",
          "A secure server farm",
          "A type of internet cable"
        ],
        "answer": "A network of infected computers",
        "category": "Domain Review",
        "explanation": "Botnets are used for large-scale attacks like DDoS."
      },
      {
        "id": "sec-plus-q18",
        "question": "What is a 'Public Key'?",
        "options": [
          "A key for a public building",
          "A key that can be shared with anyone",
          "A secret password",
          "The only key in existence"
        ],
        "answer": "A key that can be shared with anyone",
        "category": "Domain Review",
        "explanation": "In asymmetric encryption, the public key is used for encryption."
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
        "question": "What is 'Shoulder Surfing'?",
        "options": [
          "A physical security guard",
          "A type of sport",
          "Hacking a website",
          "Watching someone enter their password"
        ],
        "answer": "Watching someone enter their password",
        "category": "Domain Review",
        "explanation": "It's a low-tech social engineering technique."
      },
      {
        "id": "sec-plus-q21",
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
        "id": "sec-plus-q22",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A gap between server racks",
          "A leak in a tire",
          "A type of Wi-Fi",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems."
      },
      {
        "id": "sec-plus-q23",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup",
          "Giving permission",
          "Logging out",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait."
      },
      {
        "id": "sec-plus-q24",
        "question": "What is the purpose of an 'IDS'?",
        "options": [
          "Detect unauthorized access",
          "Prevent all attacks",
          "Scan for hardware errors",
          "Store passwords"
        ],
        "answer": "Detect unauthorized access",
        "category": "Domain Review",
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity."
      },
      {
        "id": "sec-plus-q25",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data",
          "Converting plaintext into ciphertext",
          "Deleting files",
          "Making data public"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties."
      },
      {
        "id": "sec-plus-q26",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption",
          "Firewalls",
          "Hashing"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message."
      },
      {
        "id": "sec-plus-q27",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing code",
          "Breaking a password",
          "Converting ciphertext back into plaintext",
          "Downloading data"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key."
      },
      {
        "id": "sec-plus-q28",
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
        "id": "sec-plus-q29",
        "question": "Which protocol provides a secure shell for remote access?",
        "options": [
          "FTP",
          "HTTP",
          "SSH",
          "Telnet"
        ],
        "answer": "SSH",
        "category": "Domain Review",
        "explanation": "SSH is the secure alternative to the unencrypted Telnet."
      },
      {
        "id": "sec-plus-q30",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device",
          "A type of math problem",
          "An actual explosive",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders."
      },
      {
        "id": "sec-plus-q31",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager",
          "A type of firewall",
          "Studying biological data",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition."
      },
      {
        "id": "sec-plus-q32",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two accounts",
          "Logging in twice",
          "Using two different types of credentials",
          "Using two passwords"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password."
      },
      {
        "id": "sec-plus-q33",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test",
          "A network speed test",
          "A test of ink levels",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture."
      },
      {
        "id": "sec-plus-q34",
        "question": "What is 'Defense in Depth'?",
        "options": [
          "A single strong firewall",
          "Building a deep bunker",
          "Hiring many guards",
          "Using multiple layers of security"
        ],
        "answer": "Using multiple layers of security",
        "category": "Domain Review",
        "explanation": "If one layer fails, others are in place to stop the threat."
      },
      {
        "id": "sec-plus-q35",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A phone repair shop",
          "A type of mobile app",
          "Hiring a mobile expert",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones."
      },
      {
        "id": "sec-plus-q36",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range",
          "Better encryption and protection against brute force",
          "Cheaper hardware",
          "Faster speeds only"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks."
      },
      {
        "id": "sec-plus-q37",
        "question": "What is 'War Driving'?",
        "options": [
          "A military exercise",
          "A type of car race",
          "Driving a tank",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit."
      },
      {
        "id": "sec-plus-q38",
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
        "id": "sec-plus-q39",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real door",
          "A secure login",
          "A type of firewall"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence."
      },
      {
        "id": "sec-plus-q40",
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
        "id": "sec-plus-q41",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol",
          "A type of stenography",
          "Hiding data within other data (like an image)",
          "Writing very fast"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect."
      },
      {
        "id": "sec-plus-q42",
        "question": "What is a 'Zero-Day' vulnerability?",
        "options": [
          "A bug that happens on day zero",
          "A flaw unknown to the vendor",
          "A patch released today",
          "A vulnerability with zero impact"
        ],
        "answer": "A flaw unknown to the vendor",
        "category": "Domain Review",
        "explanation": "Zero-day threats have no available patch at the time of discovery."
      },
      {
        "id": "sec-plus-q43",
        "question": "What is 'BYOD'?",
        "options": [
          "Backup Your Own Data",
          "Bring Your Own Device",
          "Build Your Own Database",
          "Buy Your Own Domain"
        ],
        "answer": "Bring Your Own Device",
        "category": "Domain Review",
        "explanation": "A policy allowing employees to use personal devices for work."
      },
      {
        "id": "sec-plus-q44",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a hard drive",
          "Playing with sand",
          "Running suspicious programs in an isolated area",
          "Testing website designs"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system."
      },
      {
        "id": "sec-plus-q45",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card",
          "Looking in a mirror",
          "Stating who you are (e.g., username)",
          "Taking a photo"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process."
      },
      {
        "id": "sec-plus-q46",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest",
          "Ensuring data has not been tampered with",
          "Keeping secrets",
          "Making sure the website is fast"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy."
      },
      {
        "id": "sec-plus-q47",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password",
          "Creating a new account",
          "Determining what an authenticated user can do",
          "Entering a building"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user."
      },
      {
        "id": "sec-plus-q48",
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure protocol",
          "A type of antenna",
          "Listening through a wall",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality."
      },
      {
        "id": "sec-plus-q49",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A backup system",
          "A secure hard drive",
          "A way to find lost files",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit."
      },
      {
        "id": "sec-plus-q50",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A secure downloader",
          "A type of virus that replicates",
          "A wooden statue",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms."
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
        "question": "What is 'Cloud Native'?",
        "options": [
          "A cloud provider",
          "A type of software",
          "Applications designed specifically for the cloud environment",
          "Someone born in the cloud"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers."
      },
      {
        "id": "aws-ccp-q7",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive",
          "A city-wide network",
          "A single server rack",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region."
      },
      {
        "id": "aws-ccp-q8",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "A very small server",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment."
      },
      {
        "id": "aws-ccp-q9",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A VPN",
          "A personal server",
          "A private network section within a public cloud",
          "A secure website"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology."
      },
      {
        "id": "aws-ccp-q10",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset",
          "A computer game",
          "A fake cloud",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing."
      },
      {
        "id": "aws-ccp-q11",
        "question": "What is 'Object Storage'?",
        "options": [
          "A folder on a PC",
          "A type of database",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos."
      },
      {
        "id": "aws-ccp-q12",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A framework defining security tasks for provider and customer",
          "A group project",
          "Sharing a password",
          "Splitting the cloud bill"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud."
      },
      {
        "id": "aws-ccp-q13",
        "question": "What is 'File Storage'?",
        "options": [
          "A backup on a CD",
          "A filing cabinet",
          "A type of cloud",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives."
      },
      {
        "id": "aws-ccp-q14",
        "question": "What is a 'Container'?",
        "options": [
          "A box for servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure room",
          "A type of storage"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology."
      },
      {
        "id": "aws-ccp-q15",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A computer that runs on gas",
          "A fast internet connection",
          "A type of server",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model."
      },
      {
        "id": "aws-ccp-q16",
        "question": "What is 'IaaS'?",
        "options": [
          "Identity as a Service",
          "Information as a Service",
          "Infrastructure as a Service",
          "Integration as a Service"
        ],
        "answer": "Infrastructure as a Service",
        "category": "Domain Review",
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand."
      },
      {
        "id": "aws-ccp-q17",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A type of storage",
          "Cutting down trees",
          "Recording events and activities in the cloud for auditing",
          "Writing a diary"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis."
      },
      {
        "id": "aws-ccp-q18",
        "question": "What is 'Edge Computing'?",
        "options": [
          "Building a cloud on a cliff",
          "Fast internet at home",
          "Processing data closer to the source of data generation",
          "Using the latest hardware"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage."
      },
      {
        "id": "aws-ccp-q19",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A guard in a data center",
          "A lock on a server",
          "A secure browser",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud."
      },
      {
        "id": "aws-ccp-q20",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system",
          "A private server",
          "A type of storage",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads."
      },
      {
        "id": "aws-ccp-q21",
        "question": "What is 'Block Storage'?",
        "options": [
          "A secure vault",
          "A type of memory",
          "A wall of servers",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps."
      },
      {
        "id": "aws-ccp-q22",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A server with spots",
          "A temporary cloud",
          "A type of storage",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity."
      },
      {
        "id": "aws-ccp-q23",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A fast router",
          "A type of VPN",
          "An entrance to a data center"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute."
      },
      {
        "id": "aws-ccp-q24",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A king in the cloud",
          "A secure database",
          "A type of storage",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments."
      },
      {
        "id": "aws-ccp-q25",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A cloud manager",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs."
      },
      {
        "id": "aws-ccp-q26",
        "question": "What does 'Scalability' mean in the cloud?",
        "options": [
          "Making the screen larger",
          "The ability to increase or decrease resources",
          "The number of users",
          "The physical weight of a server"
        ],
        "answer": "The ability to increase or decrease resources",
        "category": "Domain Review",
        "explanation": "Scalability can be vertical (size) or horizontal (number)."
      },
      {
        "id": "aws-ccp-q27",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database that scales automatically and has no fixed cost",
          "A file in the cloud"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
      },
      {
        "id": "aws-ccp-q28",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A driver's license",
          "A login page",
          "A security guard",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security."
      },
      {
        "id": "aws-ccp-q29",
        "question": "What is 'PaaS'?",
        "options": [
          "Payment as a Service",
          "Platform as a Service",
          "Process as a Service",
          "Product as a Service"
        ],
        "answer": "Platform as a Service",
        "category": "Domain Review",
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
      },
      {
        "id": "aws-ccp-q30",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill in the mail",
          "A software license",
          "A type of payment",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go)."
      },
      {
        "id": "aws-ccp-q31",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A TV station",
          "A fast internet connection",
          "A system of distributed servers that deliver web content to users",
          "A type of storage"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user."
      },
      {
        "id": "aws-ccp-q32",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer",
          "A programming language",
          "A type of cloud",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines."
      },
      {
        "id": "aws-ccp-q33",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A cloud provider",
          "A programming language",
          "A type of database",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration."
      },
      {
        "id": "aws-ccp-q34",
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
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable",
          "A type of cloud storage",
          "Fast network speed",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency."
      },
      {
        "id": "aws-ccp-q37",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud with a password",
          "A hidden data center",
          "A personal hard drive",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy."
      },
      {
        "id": "aws-ccp-q38",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A backup on a USB",
          "A government program",
          "Fixing a broken PC",
          "Plans and processes to restore IT systems after a major failure"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication."
      },
      {
        "id": "aws-ccp-q39",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A cloud for everyone",
          "A free Wi-Fi hotspot",
          "A government network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud."
      },
      {
        "id": "aws-ccp-q40",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Birds flying south",
          "Buying new servers",
          "Moving data and apps from on-premises to the cloud",
          "Updating a website"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process."
      },
      {
        "id": "aws-ccp-q41",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A cloud for everyone",
          "A tall server",
          "Fast internet",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms."
      },
      {
        "id": "aws-ccp-q42",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard",
          "A software update",
          "Observing the performance and health of cloud resources",
          "Watching a cloud"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor."
      },
      {
        "id": "aws-ccp-q43",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A bug in the software",
          "A hardware warranty",
          "Being very patient",
          "The ability of a system to continue operating even if a component fails"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability."
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
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A hardware upgrade",
          "A self-adjusting scale",
          "A type of cloud billing",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls."
      },
      {
        "id": "aws-ccp-q46",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer",
          "A website developer",
          "An internet provider"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google."
      },
      {
        "id": "aws-ccp-q47",
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
        "id": "aws-ccp-q48",
        "question": "What is 'Terraform'?",
        "options": [
          "A cloud provider",
          "A database system",
          "A planet",
          "A popular tool for Infrastructure as Code"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers."
      },
      {
        "id": "aws-ccp-q49",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud",
          "A slow network",
          "A small file size",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications."
      },
      {
        "id": "aws-ccp-q50",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual",
          "A type of cloud billing",
          "Managing infrastructure using configuration files and code",
          "Writing code on a server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments."
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
        "id": "pmp-q7",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol",
          "A type of computer code",
          "Speed of a car"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints."
      },
      {
        "id": "pmp-q8",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer",
          "A type of computer",
          "A website developer"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support."
      },
      {
        "id": "pmp-q9",
        "question": "What does 'KPI' stand for?",
        "options": [
          "Keep People Involved",
          "Key Performance Indicator",
          "Key Project Item",
          "Knowledge Processing Input"
        ],
        "answer": "Key Performance Indicator",
        "category": "Domain Review",
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
      },
      {
        "id": "pmp-q10",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story",
          "A short description of a feature from an end-user perspective",
          "A software manual",
          "A type of book"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs."
      },
      {
        "id": "pmp-q11",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty",
          "A software tool",
          "Controlling the team",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves."
      },
      {
        "id": "pmp-q12",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A software update",
          "A type of project",
          "Running a race"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog."
      },
      {
        "id": "pmp-q13",
        "question": "What is a 'Lessons Learned' session?",
        "options": [
          "A classroom lecture",
          "A meeting to discuss what went well and what didn't in a project",
          "A software update",
          "A type of test"
        ],
        "answer": "A meeting to discuss what went well and what didn't in a project",
        "category": "Domain Review",
        "explanation": "Lessons learned improve future project performance."
      },
      {
        "id": "pmp-q14",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A financial report",
          "A low-cost project",
          "A type of database",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses."
      },
      {
        "id": "pmp-q15",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report",
          "A list of team members",
          "A type of pig"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor."
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
        "id": "pmp-q18",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol",
          "A part of a book",
          "A type of computer code",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk."
      },
      {
        "id": "pmp-q19",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account",
          "A leather folder",
          "A type of database",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work."
      },
      {
        "id": "pmp-q20",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A financial report",
          "A type of software bug",
          "Cleaning a room",
          "Keeping the product backlog up to date and prioritized"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning."
      },
      {
        "id": "pmp-q21",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A software update",
          "A type of test",
          "Looking back in time"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint."
      },
      {
        "id": "pmp-q22",
        "question": "What is 'Lean' project management?",
        "options": [
          "A fast-paced methodology",
          "A small project",
          "A type of exercise",
          "Focusing on maximizing value and minimizing waste"
        ],
        "answer": "Focusing on maximizing value and minimizing waste",
        "category": "Domain Review",
        "explanation": "Lean originated in manufacturing and is widely used in IT."
      },
      {
        "id": "pmp-q23",
        "question": "What is 'Scrum'?",
        "options": [
          "A framework for implementing Agile development",
          "A rugby formation",
          "A software tool",
          "A type of database"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work."
      },
      {
        "id": "pmp-q24",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A financial report",
          "A fire hazard",
          "A graphical representation of work remaining versus time",
          "A type of database"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint."
      },
      {
        "id": "pmp-q25",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock",
          "A significant point or event in a project",
          "A task that takes 1 hour",
          "A unit of distance"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals."
      },
      {
        "id": "pmp-q26",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Developing a product through repeated cycles (iterations)",
          "Repeating a task"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback."
      },
      {
        "id": "pmp-q27",
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
        "id": "pmp-q28",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A financial report",
          "A list of bugs",
          "A prioritized list of everything that might be needed in a product",
          "A storage room"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner."
      },
      {
        "id": "pmp-q29",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A delivery truck",
          "A software update",
          "A type of storage",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value."
      },
      {
        "id": "pmp-q30",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about projects",
          "A document outlining the values and principles of Agile",
          "A hardware manual",
          "A type of software"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001."
      },
      {
        "id": "pmp-q31",
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
        "id": "pmp-q32",
        "question": "What is 'Resource Management'?",
        "options": [
          "A software update",
          "A type of database",
          "Finding new resources",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed."
      },
      {
        "id": "pmp-q33",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware",
          "Exchanging money",
          "Hiring new people"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved."
      },
      {
        "id": "pmp-q34",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A document that formally authorizes a project",
          "A financial contract",
          "A list of team members",
          "A map of the world"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources."
      },
      {
        "id": "pmp-q35",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard",
          "A member of a royal family",
          "A structured project management methodology used widely in Europe",
          "A type of software"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments."
      },
      {
        "id": "pmp-q36",
        "question": "What is an 'Epic'?",
        "options": [
          "A large body of work that can be broken down into many user stories",
          "A long poem",
          "A software manual",
          "A type of movie"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints."
      },
      {
        "id": "pmp-q37",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency",
          "A security guard",
          "A set of laws",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals."
      },
      {
        "id": "pmp-q38",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A card game",
          "A consensus-based estimation technique for user stories",
          "A software tool",
          "A type of gamble"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously."
      },
      {
        "id": "pmp-q39",
        "question": "What is 'Agile' methodology?",
        "options": [
          "A set of strict rules",
          "A type of sport",
          "A very fast router",
          "An iterative approach to project management and software development"
        ],
        "answer": "An iterative approach to project management and software development",
        "category": "Domain Review",
        "explanation": "Agile focuses on delivering value quickly and adapting to change."
      },
      {
        "id": "pmp-q40",
        "question": "What is the role of the 'Scrum Master'?",
        "options": [
          "A facilitator for a Scrum team",
          "A project owner",
          "The boss of the team",
          "The lead developer"
        ],
        "answer": "A facilitator for a Scrum team",
        "category": "Domain Review",
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers."
      },
      {
        "id": "pmp-q41",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer",
          "A type of software",
          "Managing a group of related projects to achieve benefits",
          "Writing many programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects."
      },
      {
        "id": "pmp-q42",
        "question": "What is 'Project Budget'?",
        "options": [
          "A financial ledger",
          "A list of tasks",
          "A software manual",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager."
      },
      {
        "id": "pmp-q43",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A financial report",
          "A meeting to demonstrate the work completed during the sprint",
          "A type of test",
          "Checking a website"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders."
      },
      {
        "id": "pmp-q44",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car",
          "A financial report",
          "A type of computer code",
          "A visual system for managing work as it moves through a process"
        ],
        "answer": "A visual system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress."
      },
      {
        "id": "pmp-q45",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol",
          "A part of a movie",
          "A type of computer code"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories."
      },
      {
        "id": "pmp-q46",
        "question": "What is 'Risk Management'?",
        "options": [
          "A type of insurance",
          "Avoiding all risks",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance."
      },
      {
        "id": "pmp-q47",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger",
          "A guest book",
          "A list of project tasks"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement."
      },
      {
        "id": "pmp-q48",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of storage",
          "Hiring new people",
          "Managing the purchase of goods and services for a project",
          "Writing code"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing."
      },
      {
        "id": "pmp-q49",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope",
          "The budget of a project",
          "The name of a project",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes."
      },
      {
        "id": "pmp-q50",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual",
          "A technique to measure project performance and progress",
          "A type of store",
          "A way to earn money"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics."
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
        "question": "What is 'Data Center'?",
        "options": [
          "A facility used to house computer systems and associated components",
          "A hardware guard",
          "A room with servers",
          "A type of storage"
        ],
        "answer": "A facility used to house computer systems and associated components",
        "category": "Domain Review",
        "explanation": "Data centers include redundant power, cooling, and security."
      },
      {
        "id": "aplus-q7",
        "question": "What is 'Snapshot' in storage?",
        "options": [
          "A copy of a system or data at a specific point in time",
          "A hardware upgrade",
          "A photograph",
          "A type of storage"
        ],
        "answer": "A copy of a system or data at a specific point in time",
        "category": "Domain Review",
        "explanation": "Snapshots are often used for quick recovery and testing."
      },
      {
        "id": "aplus-q8",
        "question": "What is 'Secure Boot'?",
        "options": [
          "A hardware guard",
          "A password on a PC",
          "A security standard that ensures a device boots using only trusted software",
          "A type of antivirus"
        ],
        "answer": "A security standard that ensures a device boots using only trusted software",
        "category": "Domain Review",
        "explanation": "Secure Boot protects against malware during the boot process."
      },
      {
        "id": "aplus-q9",
        "question": "What is a 'MAC Address'?",
        "options": [
          "A home address",
          "A phone number",
          "A serial number",
          "A unique identifier assigned to a network interface controller"
        ],
        "answer": "A unique identifier assigned to a network interface controller",
        "category": "Domain Review",
        "explanation": "MAC addresses are physical addresses baked into hardware."
      },
      {
        "id": "aplus-q10",
        "question": "What is 'Failover'?",
        "options": [
          "A hardware warranty",
          "A project failure",
          "A software bug",
          "Automatically switching to a redundant or standby system upon failure"
        ],
        "answer": "Automatically switching to a redundant or standby system upon failure",
        "category": "Domain Review",
        "explanation": "Failover is crucial for high availability."
      },
      {
        "id": "aplus-q11",
        "question": "What is a 'Router'?",
        "options": [
          "A device that forwards data packets between computer networks",
          "A hub",
          "A repeater",
          "A switch"
        ],
        "answer": "A device that forwards data packets between computer networks",
        "category": "Domain Review",
        "explanation": "Routers operate at the Network Layer (Layer 3)."
      },
      {
        "id": "aplus-q12",
        "question": "What is 'Clustering'?",
        "options": [
          "A group of people",
          "A hardware update",
          "A type of database",
          "Connecting multiple servers to work together as a single system"
        ],
        "answer": "Connecting multiple servers to work together as a single system",
        "category": "Domain Review",
        "explanation": "Clusters improve performance, scalability, and availability."
      },
      {
        "id": "aplus-q13",
        "question": "What is 'SSH' (Secure Shell)?",
        "options": [
          "A cryptographic network protocol for operating network services securely",
          "A fast browser",
          "A hardware guard",
          "A type of internet cable"
        ],
        "answer": "A cryptographic network protocol for operating network services securely",
        "category": "Domain Review",
        "explanation": "SSH is commonly used for remote login to Linux servers."
      },
      {
        "id": "aplus-q14",
        "question": "What is 'Colocation'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Renting space for your servers in a third-party data center"
        ],
        "answer": "Renting space for your servers in a third-party data center",
        "category": "Domain Review",
        "explanation": "Colocation provides professional infrastructure and connectivity."
      },
      {
        "id": "aplus-q15",
        "question": "What is 'Active Directory' (AD)?",
        "options": [
          "A directory service for Windows domain networks",
          "A list of files",
          "A phone book",
          "A type of firewall"
        ],
        "answer": "A directory service for Windows domain networks",
        "category": "Domain Review",
        "explanation": "AD manages users, computers, and other objects in a network."
      },
      {
        "id": "aplus-q16",
        "question": "What is 'RAID'?",
        "options": [
          "Rapid Access Integrated Data",
          "Redundant Array of Independent Disks",
          "Reliable Application Interface Device",
          "Remote Access Internal Disk"
        ],
        "answer": "Redundant Array of Independent Disks",
        "category": "Domain Review",
        "explanation": "RAID uses multiple hard drives to provide data redundancy and/or improve performance."
      },
      {
        "id": "aplus-q17",
        "question": "What is 'TPM' (Trusted Platform Module)?",
        "options": [
          "A hardware guard",
          "A software update",
          "A specialized chip on a device that provides hardware-level security",
          "A type of software"
        ],
        "answer": "A specialized chip on a device that provides hardware-level security",
        "category": "Domain Review",
        "explanation": "TPM is used for disk encryption and secure authentication."
      },
      {
        "id": "aplus-q18",
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
        "id": "aplus-q19",
        "question": "What is 'UEFI'?",
        "options": [
          "A secure protocol",
          "A software update",
          "A type of network",
          "The modern replacement for the traditional BIOS"
        ],
        "answer": "The modern replacement for the traditional BIOS",
        "category": "Domain Review",
        "explanation": "UEFI provides a more advanced and secure boot environment."
      },
      {
        "id": "aplus-q20",
        "question": "What is 'Patch Management'?",
        "options": [
          "A hardware guard",
          "A repair shop",
          "A type of storage",
          "The process of distributing and applying updates to software"
        ],
        "answer": "The process of distributing and applying updates to software",
        "category": "Domain Review",
        "explanation": "Patches fix bugs, improve performance, and close security holes."
      },
      {
        "id": "aplus-q21",
        "question": "What is a 'Firewall'?",
        "options": [
          "A hardware update",
          "A network security system that monitors and controls traffic",
          "A physical wall",
          "A type of virus"
        ],
        "answer": "A network security system that monitors and controls traffic",
        "category": "Domain Review",
        "explanation": "Firewalls are the first line of defense in network security."
      },
      {
        "id": "aplus-q22",
        "question": "What is 'Uptime'?",
        "options": [
          "A hardware warranty",
          "A type of network speed",
          "The amount of time a system or service is operational",
          "Waking up"
        ],
        "answer": "The amount of time a system or service is operational",
        "category": "Domain Review",
        "explanation": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure."
      },
      {
        "id": "aplus-q23",
        "question": "What is 'SLA' (Service Level Agreement)?",
        "options": [
          "A contract that defines the expected level of service from a provider",
          "A hardware standard",
          "A member of a royal family",
          "A type of software"
        ],
        "answer": "A contract that defines the expected level of service from a provider",
        "category": "Domain Review",
        "explanation": "SLAs often include uptime guarantees and penalties."
      },
      {
        "id": "aplus-q24",
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
        "id": "aplus-q25",
        "question": "What is 'HDD' (Hard Disk Drive)?",
        "options": [
          "A backup on a CD",
          "A data storage device that uses magnetic storage and rotating disks",
          "A software update",
          "A type of cloud"
        ],
        "answer": "A data storage device that uses magnetic storage and rotating disks",
        "category": "Domain Review",
        "explanation": "HDDs offer larger capacities at a lower cost than SSDs."
      },
      {
        "id": "aplus-q26",
        "question": "What is 'RAM' (Random Access Memory)?",
        "options": [
          "A backup on a USB",
          "A form of computer memory that can be read and changed in any order",
          "A software update",
          "A type of storage"
        ],
        "answer": "A form of computer memory that can be read and changed in any order",
        "category": "Domain Review",
        "explanation": "RAM is volatile, meaning data is lost when power is removed."
      },
      {
        "id": "aplus-q27",
        "question": "What is 'Load Balancing'?",
        "options": [
          "A hardware upgrade",
          "A heavy server",
          "A type of storage",
          "Distributing network or application traffic across multiple servers"
        ],
        "answer": "Distributing network or application traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancing improves performance and availability."
      },
      {
        "id": "aplus-q28",
        "question": "What is 'Downtime'?",
        "options": [
          "A slow network",
          "A software update",
          "Going to sleep",
          "The period during which a system or service is unavailable"
        ],
        "answer": "The period during which a system or service is unavailable",
        "category": "Domain Review",
        "explanation": "Downtime can result in lost revenue and reputation."
      },
      {
        "id": "aplus-q29",
        "question": "What is 'RAID 1'?",
        "options": [
          "A type of backup",
          "Mirroring data onto two or more disks",
          "Striping data across disks",
          "Using a single disk"
        ],
        "answer": "Mirroring data onto two or more disks",
        "category": "Domain Review",
        "explanation": "RAID 1 provides high fault tolerance by duplicating data."
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
        "question": "What is an 'IP Address'?",
        "options": [
          "A home address",
          "A phone number",
          "A serial number",
          "A unique string of numbers that identifies each computer on a network"
        ],
        "answer": "A unique string of numbers that identifies each computer on a network",
        "category": "Domain Review",
        "explanation": "IP addresses can be static or dynamic."
      },
      {
        "id": "aplus-q32",
        "question": "What is 'SSD' (Solid State Drive)?",
        "options": [
          "A backup on a CD",
          "A software update",
          "A storage device that uses integrated circuits for data storage",
          "A type of cloud"
        ],
        "answer": "A storage device that uses integrated circuits for data storage",
        "category": "Domain Review",
        "explanation": "SSDs are much faster and more durable than traditional HDDs."
      },
      {
        "id": "aplus-q33",
        "question": "What is 'PSU' (Power Supply Unit)?",
        "options": [
          "A device that converts mains AC to low-voltage regulated DC power",
          "A hardware guard",
          "A software update",
          "A type of battery"
        ],
        "answer": "A device that converts mains AC to low-voltage regulated DC power",
        "category": "Domain Review",
        "explanation": "The PSU provides power to all computer components."
      },
      {
        "id": "aplus-q34",
        "question": "What is 'Rack' in a data center?",
        "options": [
          "A hardware guard",
          "A shelf",
          "A standardized frame for mounting IT equipment",
          "A type of storage"
        ],
        "answer": "A standardized frame for mounting IT equipment",
        "category": "Domain Review",
        "explanation": "Server racks are usually 19 or 23 inches wide."
      },
      {
        "id": "aplus-q35",
        "question": "What is a 'UPS' (Uninterruptible Power Supply)?",
        "options": [
          "A delivery service",
          "A device that provides emergency power when the main source fails",
          "A hardware guard",
          "A type of battery"
        ],
        "answer": "A device that provides emergency power when the main source fails",
        "category": "Domain Review",
        "explanation": "UPS protects equipment from power outages and surges."
      },
      {
        "id": "aplus-q36",
        "question": "What is 'Mainframe'?",
        "options": [
          "A hardware guard",
          "A large, powerful computer used for high-volume data processing",
          "A server rack",
          "A type of network cable"
        ],
        "answer": "A large, powerful computer used for high-volume data processing",
        "category": "Domain Review",
        "explanation": "Mainframes are still used in large-scale industries like banking."
      },
      {
        "id": "aplus-q37",
        "question": "What is 'Form Factor'?",
        "options": [
          "A hardware warranty",
          "A software manual",
          "A type of code",
          "The physical size and shape of a computer component"
        ],
        "answer": "The physical size and shape of a computer component",
        "category": "Domain Review",
        "explanation": "Examples include ATX, Micro-ATX, and ITX."
      },
      {
        "id": "aplus-q38",
        "question": "What is 'Blade Server'?",
        "options": [
          "A server with sharp edges",
          "A simple app",
          "A thin, modular server that fits into a specialized chassis",
          "A type of computer chip"
        ],
        "answer": "A thin, modular server that fits into a specialized chassis",
        "category": "Domain Review",
        "explanation": "Blade servers save space and improve energy efficiency."
      },
      {
        "id": "aplus-q39",
        "question": "What is 'BIOS Update'?",
        "options": [
          "A software update",
          "Buying a new PC",
          "Cleaning a disk",
          "Updating the firmware on the motherboard"
        ],
        "answer": "Updating the firmware on the motherboard",
        "category": "Domain Review",
        "explanation": "BIOS updates can fix hardware compatibility issues."
      },
      {
        "id": "aplus-q40",
        "question": "What is 'VPN' (Virtual Private Network)?",
        "options": [
          "A fast internet connection",
          "A private network",
          "A service that creates a safe, encrypted connection over a less secure network",
          "A type of storage"
        ],
        "answer": "A service that creates a safe, encrypted connection over a less secure network",
        "category": "Domain Review",
        "explanation": "VPNs are used for secure remote access and privacy."
      },
      {
        "id": "aplus-q41",
        "question": "What is 'KVM Switch'?",
        "options": [
          "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
          "A hub",
          "A light switch",
          "A router"
        ],
        "answer": "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
        "category": "Domain Review",
        "explanation": "KVM switches are used for managing server racks."
      },
      {
        "id": "aplus-q42",
        "question": "What is 'DHCP'?",
        "options": [
          "A hardware guard",
          "A protocol for automatically assigning IP addresses to devices",
          "A secure login",
          "A type of network cable"
        ],
        "answer": "A protocol for automatically assigning IP addresses to devices",
        "category": "Domain Review",
        "explanation": "DHCP makes network management much easier."
      },
      {
        "id": "aplus-q43",
        "question": "What is 'Motherboard'?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A type of monitor",
          "The main printed circuit board in general-purpose computers"
        ],
        "answer": "The main printed circuit board in general-purpose computers",
        "category": "Domain Review",
        "explanation": "The motherboard connects all other components together."
      },
      {
        "id": "aplus-q44",
        "question": "What is a 'Switch' in networking?",
        "options": [
          "A device that connects devices on a computer network using packet switching",
          "A hub",
          "A light switch",
          "A router"
        ],
        "answer": "A device that connects devices on a computer network using packet switching",
        "category": "Domain Review",
        "explanation": "Switches operate at the Data Link Layer (Layer 2)."
      },
      {
        "id": "aplus-q45",
        "question": "What is 'Firmware'?",
        "options": [
          "A soft clothing",
          "A software update",
          "A specific class of computer software that provides low-level control for hardware",
          "A type of storage"
        ],
        "answer": "A specific class of computer software that provides low-level control for hardware",
        "category": "Domain Review",
        "explanation": "Firmware is stored on hardware devices like routers and SSDs."
      },
      {
        "id": "aplus-q46",
        "question": "What is 'CPU' (Central Processing Unit)?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A type of monitor",
          "The electronic circuitry that executes instructions of a computer program"
        ],
        "answer": "The electronic circuitry that executes instructions of a computer program",
        "category": "Domain Review",
        "explanation": "The CPU is the 'brain' of the computer."
      },
      {
        "id": "aplus-q47",
        "question": "What is 'RAID 5'?",
        "options": [
          "A type of backup",
          "Mirroring data",
          "Striping data and parity across three or more disks",
          "Using five disks"
        ],
        "answer": "Striping data and parity across three or more disks",
        "category": "Domain Review",
        "explanation": "RAID 5 provides a good balance of performance and fault tolerance."
      },
      {
        "id": "aplus-q48",
        "question": "What is 'GPU' (Graphics Processing Unit)?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A specialized electronic circuit designed to accelerate image creation",
          "A type of monitor"
        ],
        "answer": "A specialized electronic circuit designed to accelerate image creation",
        "category": "Domain Review",
        "explanation": "GPUs are used for graphics rendering and scientific computing."
      },
      {
        "id": "aplus-q49",
        "question": "What is 'CMOS Battery'?",
        "options": [
          "A battery that powers the CMOS memory when the computer is off",
          "A hardware guard",
          "A large battery",
          "A type of storage"
        ],
        "answer": "A battery that powers the CMOS memory when the computer is off",
        "category": "Domain Review",
        "explanation": "The CMOS battery maintains the date, time, and BIOS settings."
      },
      {
        "id": "aplus-q50",
        "question": "What is 'Backup'?",
        "options": [
          "A copy of data stored in a separate location for recovery",
          "A reverse gear",
          "A software update",
          "A type of storage"
        ],
        "answer": "A copy of data stored in a separate location for recovery",
        "category": "Domain Review",
        "explanation": "Backups are essential for data protection."
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
        "question": "Which command displays the routing table on a Cisco device?",
        "options": [
          "display route",
          "get routing",
          "show interfaces",
          "show ip route"
        ],
        "answer": "show ip route",
        "category": "Domain Review",
        "explanation": "This command list all routes known to the router."
      },
      {
        "id": "network-plus-q2",
        "question": "Which type of VPN connects two locations directly?",
        "options": [
          "Client-to-Site",
          "Remote Access",
          "SSL VPN",
          "Site-to-Site"
        ],
        "answer": "Site-to-Site",
        "category": "Domain Review",
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters."
      },
      {
        "id": "network-plus-q3",
        "question": "What does a 'Collision Domain' refer to?",
        "options": [
          "A group of devices where data packets can collide",
          "A set of devices sharing a router",
          "A single network cable",
          "The entire internet"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port."
      },
      {
        "id": "network-plus-q4",
        "question": "Which topology connects all devices to a central hub?",
        "options": [
          "Bus",
          "Mesh",
          "Ring",
          "Star"
        ],
        "answer": "Star",
        "category": "Domain Review",
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down."
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
        "question": "What is the function of the ARP protocol?",
        "options": [
          "Assign dynamic IPs",
          "Resolve IP to MAC address",
          "Resolve MAC to IP address",
          "Route traffic"
        ],
        "answer": "Resolve IP to MAC address",
        "category": "Domain Review",
        "explanation": "Address Resolution Protocol (ARP) finds the hardware address for a known IP."
      },
      {
        "id": "network-plus-q7",
        "question": "What is a 'Loopback' address?",
        "options": [
          "A public IP",
          "An address used to test the local system",
          "The DNS server address",
          "The address of the router"
        ],
        "answer": "An address used to test the local system",
        "category": "Domain Review",
        "explanation": "127.0.0.1 is the standard IPv4 loopback address."
      },
      {
        "id": "network-plus-q8",
        "question": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
        "options": [
          "Data Link Layer",
          "Network Layer",
          "Physical Layer",
          "Session Layer"
        ],
        "answer": "Data Link Layer",
        "category": "Domain Review",
        "explanation": "Layer 2 is responsible for node-to-node data transfer."
      },
      {
        "id": "network-plus-q9",
        "question": "What is the purpose of 'QoS'?",
        "options": [
          "Check for viruses",
          "Increase disk space",
          "Prioritize important traffic",
          "Update software"
        ],
        "answer": "Prioritize important traffic",
        "category": "Domain Review",
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
      },
      {
        "id": "network-plus-q10",
        "question": "What is 'PoE'?",
        "options": [
          "Physical object Encryption",
          "Point of Entry",
          "Power over Ethernet",
          "Protocol of Exchange"
        ],
        "answer": "Power over Ethernet",
        "category": "Domain Review",
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras."
      },
      {
        "id": "network-plus-q11",
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
        "id": "network-plus-q12",
        "question": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
        "options": [
          "802.11ac",
          "802.11b",
          "802.11g",
          "802.11n"
        ],
        "answer": "802.11ac",
        "category": "Domain Review",
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
      },
      {
        "id": "network-plus-q13",
        "question": "Which layer defines electrical and physical specifications for devices?",
        "options": [
          "Application Layer",
          "Network Layer",
          "Physical Layer",
          "Transport Layer"
        ],
        "answer": "Physical Layer",
        "category": "Domain Review",
        "explanation": "Layer 1 deals with cables, connectors, and signals."
      },
      {
        "id": "network-plus-q14",
        "question": "Which protocol is used to securely transfer files?",
        "options": [
          "FTP",
          "SFTP",
          "TFTP",
          "Telnet"
        ],
        "answer": "SFTP",
        "category": "Domain Review",
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
      },
      {
        "id": "network-plus-q15",
        "question": "Which protocol is used for synchronizing clocks on a network?",
        "options": [
          "FTP",
          "HTTP",
          "NTP",
          "SNMP"
        ],
        "answer": "NTP",
        "category": "Domain Review",
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time."
      },
      {
        "id": "network-plus-q16",
        "question": "What is the standard port for SSH?",
        "options": [
          "22",
          "23",
          "443",
          "80"
        ],
        "answer": "22",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default."
      },
      {
        "id": "network-plus-q17",
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
        "id": "network-plus-q18",
        "question": "Which protocol resolves domain names to IP addresses?",
        "options": [
          "ARP",
          "DHCP",
          "DNS",
          "SNMP"
        ],
        "answer": "DNS",
        "category": "Domain Review",
        "explanation": "Domain Name System (DNS) maps human-readable names to IP addresses."
      },
      {
        "id": "network-plus-q19",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Coaxial",
          "Multi-mode Fiber",
          "Single-mode Fiber",
          "UTP"
        ],
        "answer": "Single-mode Fiber",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission."
      },
      {
        "id": "network-plus-q20",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses",
          "Distribute traffic across multiple servers",
          "Encrypt network traffic",
          "Store website files"
        ],
        "answer": "Distribute traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load."
      },
      {
        "id": "network-plus-q21",
        "question": "Which protocol is commonly used for network management and monitoring?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "SNMP",
        "category": "Domain Review",
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
      },
      {
        "id": "network-plus-q22",
        "question": "Which device is used to extend the range of a Wi-Fi signal?",
        "options": [
          "Access Point",
          "Modem",
          "Router",
          "Switch"
        ],
        "answer": "Access Point",
        "category": "Domain Review",
        "explanation": "APs provide wireless connectivity to a wired network."
      },
      {
        "id": "network-plus-q23",
        "question": "Which protocol uses port 3389?",
        "options": [
          "RDP",
          "SSH",
          "Telnet",
          "VNC"
        ],
        "answer": "RDP",
        "category": "Domain Review",
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
      },
      {
        "id": "network-plus-q24",
        "question": "Which protocol is used to retrieve emails from a server and delete them after?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "POP3",
        "category": "Domain Review",
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
      },
      {
        "id": "network-plus-q25",
        "question": "What is the bit length of a MAC address?",
        "options": [
          "128 bits",
          "32 bits",
          "48 bits",
          "64 bits"
        ],
        "answer": "48 bits",
        "category": "Domain Review",
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers."
      },
      {
        "id": "network-plus-q26",
        "question": "Which protocol is used for transferring web pages?",
        "options": [
          "FTP",
          "HTTP",
          "SMTP",
          "SSH"
        ],
        "answer": "HTTP",
        "category": "Domain Review",
        "explanation": "Hypertext Transfer Protocol (HTTP) is the foundation of data exchange on the web."
      },
      {
        "id": "network-plus-q27",
        "question": "Which device operates at Layer 2 and makes forwarding decisions based on MAC addresses?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Switch",
        "category": "Domain Review",
        "explanation": "Switches are more efficient than hubs as they only send data to the intended port."
      },
      {
        "id": "network-plus-q28",
        "question": "What is 'Jitter' in networking?",
        "options": [
          "A loose cable",
          "Packet loss",
          "Total network speed",
          "Variation in packet delay"
        ],
        "answer": "Variation in packet delay",
        "category": "Domain Review",
        "explanation": "Low jitter is critical for real-time services like VoIP."
      },
      {
        "id": "network-plus-q29",
        "question": "What does 'full-duplex' mean?",
        "options": [
          "Data can flow both ways simultaneously",
          "Data flows in one direction only",
          "Data flows one way at a time",
          "Data is sent twice"
        ],
        "answer": "Data can flow both ways simultaneously",
        "category": "Domain Review",
        "explanation": "Full-duplex communication allows concurrent sending and receiving."
      },
      {
        "id": "network-plus-q30",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the printer",
          "Divide a large network into smaller ones",
          "Speed up the processor",
          "Store emails"
        ],
        "answer": "Divide a large network into smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security."
      },
      {
        "id": "network-plus-q31",
        "question": "What is the default port for FTP?",
        "options": [
          "21",
          "22",
          "23",
          "25"
        ],
        "answer": "21",
        "category": "Domain Review",
        "explanation": "File Transfer Protocol (FTP) uses port 21 for control."
      },
      {
        "id": "network-plus-q32",
        "question": "What is the port for HTTPS?",
        "options": [
          "21",
          "25",
          "443",
          "80"
        ],
        "answer": "443",
        "category": "Domain Review",
        "explanation": "HTTPS (Secure) uses port 443."
      },
      {
        "id": "network-plus-q33",
        "question": "Which command is used to trace the path a packet takes to its destination?",
        "options": [
          "netstat",
          "nslookup",
          "ping",
          "tracert"
        ],
        "answer": "tracert",
        "category": "Domain Review",
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
      },
      {
        "id": "network-plus-q34",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing",
          "Hiding the network name",
          "Identifying traffic for different VLANs on a trunk",
          "Printing wirelessly"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to."
      },
      {
        "id": "network-plus-q35",
        "question": "Which layer is responsible for encryption and compression?",
        "options": [
          "Application Layer",
          "Presentation Layer",
          "Session Layer",
          "Transport Layer"
        ],
        "answer": "Presentation Layer",
        "category": "Domain Review",
        "explanation": "Layer 6 ensures data is in a usable format."
      },
      {
        "id": "network-plus-q36",
        "question": "Which command checks the reachability of a DNS server?",
        "options": [
          "gethost",
          "ipconfig",
          "nslookup",
          "ping"
        ],
        "answer": "nslookup",
        "category": "Domain Review",
        "explanation": "nslookup is used to query DNS servers for information."
      },
      {
        "id": "network-plus-q37",
        "question": "Which protocol uses port 53?",
        "options": [
          "DHCP",
          "DNS",
          "HTTP",
          "HTTPS"
        ],
        "answer": "DNS",
        "category": "Domain Review",
        "explanation": "DNS uses both UDP and TCP on port 53."
      },
      {
        "id": "network-plus-q38",
        "question": "Which routing protocol is known as the protocol of the internet?",
        "options": [
          "BGP",
          "EIGRP",
          "OSPF",
          "RIP"
        ],
        "answer": "BGP",
        "category": "Domain Review",
        "explanation": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web."
      },
      {
        "id": "network-plus-q39",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "all of the above",
          "arp -a",
          "getmac",
          "ipconfig /all"
        ],
        "answer": "all of the above",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address."
      },
      {
        "id": "network-plus-q40",
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
        "id": "network-plus-q41",
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning IPs",
          "Detecting collisions in Ethernet",
          "Encrypting data",
          "Routing packets"
        ],
        "answer": "Detecting collisions in Ethernet",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
      },
      {
        "id": "network-plus-q42",
        "question": "What does a Gateway do?",
        "options": [
          "Connects different networks",
          "Filters viruses",
          "Increases Wi-Fi signal",
          "Stores passwords"
        ],
        "answer": "Connects different networks",
        "category": "Domain Review",
        "explanation": "A gateway serves as an entry/exit point for data between networks."
      },
      {
        "id": "network-plus-q43",
        "question": "What is the maximum length of a Cat5e cable segment?",
        "options": [
          "1 kilometer",
          "100 meters",
          "50 meters",
          "500 meters"
        ],
        "answer": "100 meters",
        "category": "Domain Review",
        "explanation": "Ethernet standards for twisted pair cables usually limit segments to 100m."
      },
      {
        "id": "network-plus-q44",
        "question": "What does 'MTU' stand for?",
        "options": [
          "Main Transfer Unit",
          "Maximum Transmission Unit",
          "Media Test Utility",
          "Multi-Threaded Utility"
        ],
        "answer": "Maximum Transmission Unit",
        "category": "Domain Review",
        "explanation": "MTU is the largest packet size a network can handle."
      },
      {
        "id": "network-plus-q45",
        "question": "What is the purpose of 'NAT'?",
        "options": [
          "Assign names to devices",
          "Check for cable breaks",
          "Speed up downloads",
          "Translate private IPs to public IPs"
        ],
        "answer": "Translate private IPs to public IPs",
        "category": "Domain Review",
        "explanation": "Network Address Translation (NAT) allows multiple devices to share one public IP."
      },
      {
        "id": "network-plus-q46",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at half speed",
          "Devices can send or receive but not both at once",
          "Only half the packets arrive",
          "Only one device can ever send"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex."
      },
      {
        "id": "network-plus-q47",
        "question": "What is the range of private IP addresses for Class A?",
        "options": [
          "10.0.0.0 - 10.255.255.255",
          "127.0.0.0 - 127.255.255.255",
          "172.16.0.0 - 172.31.255.255",
          "192.168.0.0 - 192.168.255.255"
        ],
        "answer": "10.0.0.0 - 10.255.255.255",
        "category": "Domain Review",
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks."
      },
      {
        "id": "network-plus-q48",
        "question": "What does 'CIDR' stand for?",
        "options": [
          "Classless Inter-Domain Routing",
          "Classless Internal Domain Routing",
          "Connection Identifier Data Record",
          "Core Integrated Data Route"
        ],
        "answer": "Classless Inter-Domain Routing",
        "category": "Domain Review",
        "explanation": "CIDR replaced the older classful IP addressing system."
      },
      {
        "id": "network-plus-q49",
        "question": "What is an 'ACL' in networking?",
        "options": [
          "Access Control List",
          "Active Content Loop",
          "Advanced Core Layer",
          "Automated Connection Link"
        ],
        "answer": "Access Control List",
        "category": "Domain Review",
        "explanation": "ACLs filter network traffic based on rules."
      },
      {
        "id": "network-plus-q50",
        "question": "Which type of cable is least susceptible to EMI?",
        "options": [
          "Coaxial",
          "Fiber Optic",
          "STP",
          "UTP"
        ],
        "answer": "Fiber Optic",
        "category": "Domain Review",
        "explanation": "Fiber uses light instead of electricity, making it immune to electromagnetic interference."
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
        "question": "What does a 'Collision Domain' refer to?",
        "options": [
          "A group of devices where data packets can collide",
          "A set of devices sharing a router",
          "A single network cable",
          "The entire internet"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port."
      },
      {
        "id": "ccnp-encor-q2",
        "question": "What is the range of private IP addresses for Class A?",
        "options": [
          "10.0.0.0 - 10.255.255.255",
          "127.0.0.0 - 127.255.255.255",
          "172.16.0.0 - 172.31.255.255",
          "192.168.0.0 - 192.168.255.255"
        ],
        "answer": "10.0.0.0 - 10.255.255.255",
        "category": "Domain Review",
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks."
      },
      {
        "id": "ccnp-encor-q3",
        "question": "Which protocol is used for transferring web pages?",
        "options": [
          "FTP",
          "HTTP",
          "SMTP",
          "SSH"
        ],
        "answer": "HTTP",
        "category": "Domain Review",
        "explanation": "Hypertext Transfer Protocol (HTTP) is the foundation of data exchange on the web."
      },
      {
        "id": "ccnp-encor-q4",
        "question": "Which layer is responsible for encryption and compression?",
        "options": [
          "Application Layer",
          "Presentation Layer",
          "Session Layer",
          "Transport Layer"
        ],
        "answer": "Presentation Layer",
        "category": "Domain Review",
        "explanation": "Layer 6 ensures data is in a usable format."
      },
      {
        "id": "ccnp-encor-q5",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses",
          "Distribute traffic across multiple servers",
          "Encrypt network traffic",
          "Store website files"
        ],
        "answer": "Distribute traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load."
      },
      {
        "id": "ccnp-encor-q6",
        "question": "Which topology connects all devices to a central hub?",
        "options": [
          "Bus",
          "Mesh",
          "Ring",
          "Star"
        ],
        "answer": "Star",
        "category": "Domain Review",
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down."
      },
      {
        "id": "ccnp-encor-q7",
        "question": "What does 'full-duplex' mean?",
        "options": [
          "Data can flow both ways simultaneously",
          "Data flows in one direction only",
          "Data flows one way at a time",
          "Data is sent twice"
        ],
        "answer": "Data can flow both ways simultaneously",
        "category": "Domain Review",
        "explanation": "Full-duplex communication allows concurrent sending and receiving."
      },
      {
        "id": "ccnp-encor-q8",
        "question": "What is 'PoE'?",
        "options": [
          "Physical object Encryption",
          "Point of Entry",
          "Power over Ethernet",
          "Protocol of Exchange"
        ],
        "answer": "Power over Ethernet",
        "category": "Domain Review",
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras."
      },
      {
        "id": "ccnp-encor-q9",
        "question": "What does 'MTU' stand for?",
        "options": [
          "Main Transfer Unit",
          "Maximum Transmission Unit",
          "Media Test Utility",
          "Multi-Threaded Utility"
        ],
        "answer": "Maximum Transmission Unit",
        "category": "Domain Review",
        "explanation": "MTU is the largest packet size a network can handle."
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
        "question": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
        "options": [
          "802.11ac",
          "802.11b",
          "802.11g",
          "802.11n"
        ],
        "answer": "802.11ac",
        "category": "Domain Review",
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
      },
      {
        "id": "ccnp-encor-q12",
        "question": "Which protocol resolves domain names to IP addresses?",
        "options": [
          "ARP",
          "DHCP",
          "DNS",
          "SNMP"
        ],
        "answer": "DNS",
        "category": "Domain Review",
        "explanation": "Domain Name System (DNS) maps human-readable names to IP addresses."
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
        "question": "What is 'Jitter' in networking?",
        "options": [
          "A loose cable",
          "Packet loss",
          "Total network speed",
          "Variation in packet delay"
        ],
        "answer": "Variation in packet delay",
        "category": "Domain Review",
        "explanation": "Low jitter is critical for real-time services like VoIP."
      },
      {
        "id": "ccnp-encor-q15",
        "question": "What is the purpose of 'NAT'?",
        "options": [
          "Assign names to devices",
          "Check for cable breaks",
          "Speed up downloads",
          "Translate private IPs to public IPs"
        ],
        "answer": "Translate private IPs to public IPs",
        "category": "Domain Review",
        "explanation": "Network Address Translation (NAT) allows multiple devices to share one public IP."
      },
      {
        "id": "ccnp-encor-q16",
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
        "id": "ccnp-encor-q17",
        "question": "Which protocol is commonly used for network management and monitoring?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "SNMP",
        "category": "Domain Review",
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
      },
      {
        "id": "ccnp-encor-q18",
        "question": "What is the default subnet mask for a Class C network?",
        "options": [
          "255.0.0.0",
          "255.255.0.0",
          "255.255.255.0",
          "255.255.255.255"
        ],
        "answer": "255.255.255.0",
        "category": "Domain Review",
        "explanation": "Class C networks have a /24 mask."
      },
      {
        "id": "ccnp-encor-q19",
        "question": "Which command checks the reachability of a DNS server?",
        "options": [
          "gethost",
          "ipconfig",
          "nslookup",
          "ping"
        ],
        "answer": "nslookup",
        "category": "Domain Review",
        "explanation": "nslookup is used to query DNS servers for information."
      },
      {
        "id": "ccnp-encor-q20",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing",
          "Hiding the network name",
          "Identifying traffic for different VLANs on a trunk",
          "Printing wirelessly"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to."
      },
      {
        "id": "ccnp-encor-q21",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the printer",
          "Divide a large network into smaller ones",
          "Speed up the processor",
          "Store emails"
        ],
        "answer": "Divide a large network into smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security."
      },
      {
        "id": "ccnp-encor-q22",
        "question": "Which device operates at Layer 2 and makes forwarding decisions based on MAC addresses?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Switch",
        "category": "Domain Review",
        "explanation": "Switches are more efficient than hubs as they only send data to the intended port."
      },
      {
        "id": "ccnp-encor-q23",
        "question": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
        "options": [
          "Data Link Layer",
          "Network Layer",
          "Physical Layer",
          "Session Layer"
        ],
        "answer": "Data Link Layer",
        "category": "Domain Review",
        "explanation": "Layer 2 is responsible for node-to-node data transfer."
      },
      {
        "id": "ccnp-encor-q24",
        "question": "What is an 'ACL' in networking?",
        "options": [
          "Access Control List",
          "Active Content Loop",
          "Advanced Core Layer",
          "Automated Connection Link"
        ],
        "answer": "Access Control List",
        "category": "Domain Review",
        "explanation": "ACLs filter network traffic based on rules."
      },
      {
        "id": "ccnp-encor-q25",
        "question": "Which type of VPN connects two locations directly?",
        "options": [
          "Client-to-Site",
          "Remote Access",
          "SSL VPN",
          "Site-to-Site"
        ],
        "answer": "Site-to-Site",
        "category": "Domain Review",
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters."
      },
      {
        "id": "ccnp-encor-q26",
        "question": "What is the port for HTTPS?",
        "options": [
          "21",
          "25",
          "443",
          "80"
        ],
        "answer": "443",
        "category": "Domain Review",
        "explanation": "HTTPS (Secure) uses port 443."
      },
      {
        "id": "ccnp-encor-q27",
        "question": "Which routing protocol is known as the protocol of the internet?",
        "options": [
          "BGP",
          "EIGRP",
          "OSPF",
          "RIP"
        ],
        "answer": "BGP",
        "category": "Domain Review",
        "explanation": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web."
      },
      {
        "id": "ccnp-encor-q28",
        "question": "What does a Gateway do?",
        "options": [
          "Connects different networks",
          "Filters viruses",
          "Increases Wi-Fi signal",
          "Stores passwords"
        ],
        "answer": "Connects different networks",
        "category": "Domain Review",
        "explanation": "A gateway serves as an entry/exit point for data between networks."
      },
      {
        "id": "ccnp-encor-q29",
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
        "id": "ccnp-encor-q30",
        "question": "Which protocol is used for synchronizing clocks on a network?",
        "options": [
          "FTP",
          "HTTP",
          "NTP",
          "SNMP"
        ],
        "answer": "NTP",
        "category": "Domain Review",
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time."
      },
      {
        "id": "ccnp-encor-q31",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Coaxial",
          "Multi-mode Fiber",
          "Single-mode Fiber",
          "UTP"
        ],
        "answer": "Single-mode Fiber",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission."
      },
      {
        "id": "ccnp-encor-q32",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at half speed",
          "Devices can send or receive but not both at once",
          "Only half the packets arrive",
          "Only one device can ever send"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex."
      },
      {
        "id": "ccnp-encor-q33",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "all of the above",
          "arp -a",
          "getmac",
          "ipconfig /all"
        ],
        "answer": "all of the above",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address."
      },
      {
        "id": "ccnp-encor-q34",
        "question": "Which type of cable is least susceptible to EMI?",
        "options": [
          "Coaxial",
          "Fiber Optic",
          "STP",
          "UTP"
        ],
        "answer": "Fiber Optic",
        "category": "Domain Review",
        "explanation": "Fiber uses light instead of electricity, making it immune to electromagnetic interference."
      },
      {
        "id": "ccnp-encor-q35",
        "question": "What is 'STP' (Spanning Tree Protocol) used for?",
        "options": [
          "Assign IP addresses",
          "Encrypt passwords",
          "Prevent network loops in switches",
          "Speed up the network"
        ],
        "answer": "Prevent network loops in switches",
        "category": "Domain Review",
        "explanation": "STP ensures there is only one active path between two network nodes."
      },
      {
        "id": "ccnp-encor-q36",
        "question": "What is a 'Loopback' address?",
        "options": [
          "A public IP",
          "An address used to test the local system",
          "The DNS server address",
          "The address of the router"
        ],
        "answer": "An address used to test the local system",
        "category": "Domain Review",
        "explanation": "127.0.0.1 is the standard IPv4 loopback address."
      },
      {
        "id": "ccnp-encor-q37",
        "question": "Which command is used to trace the path a packet takes to its destination?",
        "options": [
          "netstat",
          "nslookup",
          "ping",
          "tracert"
        ],
        "answer": "tracert",
        "category": "Domain Review",
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
      },
      {
        "id": "ccnp-encor-q38",
        "question": "Which device is used to extend the range of a Wi-Fi signal?",
        "options": [
          "Access Point",
          "Modem",
          "Router",
          "Switch"
        ],
        "answer": "Access Point",
        "category": "Domain Review",
        "explanation": "APs provide wireless connectivity to a wired network."
      },
      {
        "id": "ccnp-encor-q39",
        "question": "What is the bit length of a MAC address?",
        "options": [
          "128 bits",
          "32 bits",
          "48 bits",
          "64 bits"
        ],
        "answer": "48 bits",
        "category": "Domain Review",
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers."
      },
      {
        "id": "ccnp-encor-q40",
        "question": "What is the standard port for SSH?",
        "options": [
          "22",
          "23",
          "443",
          "80"
        ],
        "answer": "22",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default."
      },
      {
        "id": "ccnp-encor-q41",
        "question": "Which protocol uses port 53?",
        "options": [
          "DHCP",
          "DNS",
          "HTTP",
          "HTTPS"
        ],
        "answer": "DNS",
        "category": "Domain Review",
        "explanation": "DNS uses both UDP and TCP on port 53."
      },
      {
        "id": "ccnp-encor-q42",
        "question": "Which command displays the routing table on a Cisco device?",
        "options": [
          "display route",
          "get routing",
          "show interfaces",
          "show ip route"
        ],
        "answer": "show ip route",
        "category": "Domain Review",
        "explanation": "This command list all routes known to the router."
      },
      {
        "id": "ccnp-encor-q43",
        "question": "Which protocol is used to securely transfer files?",
        "options": [
          "FTP",
          "SFTP",
          "TFTP",
          "Telnet"
        ],
        "answer": "SFTP",
        "category": "Domain Review",
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
      },
      {
        "id": "ccnp-encor-q44",
        "question": "What is the maximum length of a Cat5e cable segment?",
        "options": [
          "1 kilometer",
          "100 meters",
          "50 meters",
          "500 meters"
        ],
        "answer": "100 meters",
        "category": "Domain Review",
        "explanation": "Ethernet standards for twisted pair cables usually limit segments to 100m."
      },
      {
        "id": "ccnp-encor-q45",
        "question": "Which layer defines electrical and physical specifications for devices?",
        "options": [
          "Application Layer",
          "Network Layer",
          "Physical Layer",
          "Transport Layer"
        ],
        "answer": "Physical Layer",
        "category": "Domain Review",
        "explanation": "Layer 1 deals with cables, connectors, and signals."
      },
      {
        "id": "ccnp-encor-q46",
        "question": "Which protocol is used to retrieve emails from a server and delete them after?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "POP3",
        "category": "Domain Review",
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
      },
      {
        "id": "ccnp-encor-q47",
        "question": "What is the purpose of 'QoS'?",
        "options": [
          "Check for viruses",
          "Increase disk space",
          "Prioritize important traffic",
          "Update software"
        ],
        "answer": "Prioritize important traffic",
        "category": "Domain Review",
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
      },
      {
        "id": "ccnp-encor-q48",
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning IPs",
          "Detecting collisions in Ethernet",
          "Encrypting data",
          "Routing packets"
        ],
        "answer": "Detecting collisions in Ethernet",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
      },
      {
        "id": "ccnp-encor-q49",
        "question": "Which protocol uses port 25?",
        "options": [
          "DNS",
          "HTTP",
          "RDP",
          "SMTP"
        ],
        "answer": "SMTP",
        "category": "Domain Review",
        "explanation": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails."
      },
      {
        "id": "ccnp-encor-q50",
        "question": "Which protocol uses port 3389?",
        "options": [
          "RDP",
          "SSH",
          "Telnet",
          "VNC"
        ],
        "answer": "RDP",
        "category": "Domain Review",
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
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
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card",
          "Looking in a mirror",
          "Stating who you are (e.g., username)",
          "Taking a photo"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process."
      },
      {
        "id": "cissp-q2",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password",
          "Creating a new account",
          "Determining what an authenticated user can do",
          "Entering a building"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user."
      },
      {
        "id": "cissp-q3",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A gap between server racks",
          "A leak in a tire",
          "A type of Wi-Fi",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems."
      },
      {
        "id": "cissp-q4",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two accounts",
          "Logging in twice",
          "Using two different types of credentials",
          "Using two passwords"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password."
      },
      {
        "id": "cissp-q5",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference",
          "Viruses are faster",
          "Worms are harmless",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction."
      },
      {
        "id": "cissp-q6",
        "question": "What is 'BYOD'?",
        "options": [
          "Backup Your Own Data",
          "Bring Your Own Device",
          "Build Your Own Database",
          "Buy Your Own Domain"
        ],
        "answer": "Bring Your Own Device",
        "category": "Domain Review",
        "explanation": "A policy allowing employees to use personal devices for work."
      },
      {
        "id": "cissp-q7",
        "question": "What is 'Cross-Site Scripting' (XSS)?",
        "options": [
          "A hardware attack",
          "A type of router flaw",
          "Injecting malicious scripts into web pages",
          "Writing code for multiple sites"
        ],
        "answer": "Injecting malicious scripts into web pages",
        "category": "Domain Review",
        "explanation": "XSS can steal cookies and session info from users."
      },
      {
        "id": "cissp-q8",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "AES",
          "Diffie-Hellman",
          "ECC",
          "RSA"
        ],
        "answer": "AES",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
      },
      {
        "id": "cissp-q9",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing code",
          "Breaking a password",
          "Converting ciphertext back into plaintext",
          "Downloading data"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key."
      },
      {
        "id": "cissp-q10",
        "question": "What is 'Shoulder Surfing'?",
        "options": [
          "A physical security guard",
          "A type of sport",
          "Hacking a website",
          "Watching someone enter their password"
        ],
        "answer": "Watching someone enter their password",
        "category": "Domain Review",
        "explanation": "It's a low-tech social engineering technique."
      },
      {
        "id": "cissp-q11",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test",
          "A network speed test",
          "A test of ink levels",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture."
      },
      {
        "id": "cissp-q12",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest",
          "Ensuring data has not been tampered with",
          "Keeping secrets",
          "Making sure the website is fast"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy."
      },
      {
        "id": "cissp-q13",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key for a private room",
          "A key that everyone has",
          "A physical key",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures."
      },
      {
        "id": "cissp-q14",
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure protocol",
          "A type of antenna",
          "Listening through a wall",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality."
      },
      {
        "id": "cissp-q15",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A phone repair shop",
          "A type of mobile app",
          "Hiring a mobile expert",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones."
      },
      {
        "id": "cissp-q16",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking a bank",
          "Installing cameras",
          "Manipulating people into giving up info",
          "Writing code for social media"
        ],
        "answer": "Manipulating people into giving up info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws."
      },
      {
        "id": "cissp-q17",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate",
          "Ensure data is compressed",
          "Ensure only authorized users can read data",
          "Ensure services are up"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information."
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
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range",
          "Better encryption and protection against brute force",
          "Cheaper hardware",
          "Faster speeds only"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks."
      },
      {
        "id": "cissp-q20",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection",
          "A software update",
          "Overwriting memory to execute malicious code",
          "Too much data on a disk"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution."
      },
      {
        "id": "cissp-q21",
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
        "id": "cissp-q22",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS",
          "A phishing attack targeted at high-level executives",
          "A type of network cable",
          "Hunting whales"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs."
      },
      {
        "id": "cissp-q23",
        "question": "Which protocol provides a secure shell for remote access?",
        "options": [
          "FTP",
          "HTTP",
          "SSH",
          "Telnet"
        ],
        "answer": "SSH",
        "category": "Domain Review",
        "explanation": "SSH is the secure alternative to the unencrypted Telnet."
      },
      {
        "id": "cissp-q24",
        "question": "What is the purpose of an 'IDS'?",
        "options": [
          "Detect unauthorized access",
          "Prevent all attacks",
          "Scan for hardware errors",
          "Store passwords"
        ],
        "answer": "Detect unauthorized access",
        "category": "Domain Review",
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity."
      },
      {
        "id": "cissp-q25",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption",
          "Firewalls",
          "Hashing"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message."
      },
      {
        "id": "cissp-q26",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A network hub",
          "A referee",
          "A secure proxy",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent."
      },
      {
        "id": "cissp-q27",
        "question": "What is the 'Principle of Least Privilege'?",
        "options": [
          "Giving everyone full access",
          "Giving only necessary access to a user",
          "Hiring only one person",
          "Using cheap hardware"
        ],
        "answer": "Giving only necessary access to a user",
        "category": "Domain Review",
        "explanation": "This minimizes potential impact of a security breach."
      },
      {
        "id": "cissp-q28",
        "question": "What is a 'Zero-Day' vulnerability?",
        "options": [
          "A bug that happens on day zero",
          "A flaw unknown to the vendor",
          "A patch released today",
          "A vulnerability with zero impact"
        ],
        "answer": "A flaw unknown to the vendor",
        "category": "Domain Review",
        "explanation": "Zero-day threats have no available patch at the time of discovery."
      },
      {
        "id": "cissp-q29",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol",
          "A type of stenography",
          "Hiding data within other data (like an image)",
          "Writing very fast"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect."
      },
      {
        "id": "cissp-q30",
        "question": "What does 'DDoS' stand for?",
        "options": [
          "Digital Data over System",
          "Direct Drive on Storage",
          "Distributed Data of Security",
          "Distributed Denial of Service"
        ],
        "answer": "Distributed Denial of Service",
        "category": "Domain Review",
        "explanation": "DDoS attacks overwhelm a target with traffic from multiple sources."
      },
      {
        "id": "cissp-q31",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory",
          "A list of employees",
          "A path in the woods"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance."
      },
      {
        "id": "cissp-q32",
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
        "id": "cissp-q33",
        "question": "What is a 'Rootkit'?",
        "options": [
          "A kit for growing plants",
          "A tool for fixing roots",
          "A type of antivirus",
          "Malware that hides its presence on a system"
        ],
        "answer": "Malware that hides its presence on a system",
        "category": "Domain Review",
        "explanation": "Rootkits operate at a deep level of the OS to remain undetected."
      },
      {
        "id": "cissp-q34",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup",
          "Giving permission",
          "Logging out",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait."
      },
      {
        "id": "cissp-q35",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol",
          "A type of agriculture",
          "Redirecting users to a fake website by poisoning DNS",
          "Stealing emails"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one."
      },
      {
        "id": "cissp-q36",
        "question": "What is 'War Driving'?",
        "options": [
          "A military exercise",
          "A type of car race",
          "Driving a tank",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit."
      },
      {
        "id": "cissp-q37",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty",
          "A manual for a router",
          "A set of rules that define allowed traffic",
          "An insurance policy"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets."
      },
      {
        "id": "cissp-q38",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A backup system",
          "A secure hard drive",
          "A way to find lost files",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit."
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
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a hard drive",
          "Playing with sand",
          "Running suspicious programs in an isolated area",
          "Testing website designs"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system."
      },
      {
        "id": "cissp-q41",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data",
          "Converting plaintext into ciphertext",
          "Deleting files",
          "Making data public"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties."
      },
      {
        "id": "cissp-q42",
        "question": "What is 'Access Control'?",
        "options": [
          "A type of remote control",
          "Hiring a security guard",
          "Restricting access to resources to authorized users",
          "Turning off the computer"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization."
      },
      {
        "id": "cissp-q43",
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
        "id": "cissp-q44",
        "question": "What is a 'Botnet'?",
        "options": [
          "A group of robots",
          "A network of infected computers",
          "A secure server farm",
          "A type of internet cable"
        ],
        "answer": "A network of infected computers",
        "category": "Domain Review",
        "explanation": "Botnets are used for large-scale attacks like DDoS."
      },
      {
        "id": "cissp-q45",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device",
          "A type of math problem",
          "An actual explosive",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders."
      },
      {
        "id": "cissp-q46",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager",
          "A type of firewall",
          "Studying biological data",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition."
      },
      {
        "id": "cissp-q47",
        "question": "What is a 'Public Key'?",
        "options": [
          "A key for a public building",
          "A key that can be shared with anyone",
          "A secret password",
          "The only key in existence"
        ],
        "answer": "A key that can be shared with anyone",
        "category": "Domain Review",
        "explanation": "In asymmetric encryption, the public key is used for encryption."
      },
      {
        "id": "cissp-q48",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real door",
          "A secure login",
          "A type of firewall"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence."
      },
      {
        "id": "cissp-q49",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server",
          "A jar of honey",
          "A secure database"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets."
      },
      {
        "id": "cissp-q50",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A database backup",
          "A network protocol",
          "A type of virus",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data."
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
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup",
          "Giving permission",
          "Logging out",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait."
      },
      {
        "id": "ceh-q2",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A database backup",
          "A network protocol",
          "A type of virus",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data."
      },
      {
        "id": "ceh-q3",
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure protocol",
          "A type of antenna",
          "Listening through a wall",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality."
      },
      {
        "id": "ceh-q4",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "AES",
          "Diffie-Hellman",
          "ECC",
          "RSA"
        ],
        "answer": "AES",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
      },
      {
        "id": "ceh-q5",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference",
          "Viruses are faster",
          "Worms are harmless",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction."
      },
      {
        "id": "ceh-q6",
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
        "id": "ceh-q7",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A secure downloader",
          "A type of virus that replicates",
          "A wooden statue",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms."
      },
      {
        "id": "ceh-q8",
        "question": "What is a 'Zero-Day' vulnerability?",
        "options": [
          "A bug that happens on day zero",
          "A flaw unknown to the vendor",
          "A patch released today",
          "A vulnerability with zero impact"
        ],
        "answer": "A flaw unknown to the vendor",
        "category": "Domain Review",
        "explanation": "Zero-day threats have no available patch at the time of discovery."
      },
      {
        "id": "ceh-q9",
        "question": "What is 'Vulnerability Scanning'?",
        "options": [
          "A type of medical scan",
          "Automatically identifying security flaws",
          "Checking for physical damage",
          "Searching for Wi-Fi"
        ],
        "answer": "Automatically identifying security flaws",
        "category": "Domain Review",
        "explanation": "Tools like Nessus or OpenVAS are used for this purpose."
      },
      {
        "id": "ceh-q10",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol",
          "A type of stenography",
          "Hiding data within other data (like an image)",
          "Writing very fast"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect."
      },
      {
        "id": "ceh-q11",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A network hub",
          "A referee",
          "A secure proxy",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent."
      },
      {
        "id": "ceh-q12",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory",
          "A list of employees",
          "A path in the woods"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance."
      },
      {
        "id": "ceh-q13",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol",
          "A type of agriculture",
          "Redirecting users to a fake website by poisoning DNS",
          "Stealing emails"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one."
      },
      {
        "id": "ceh-q14",
        "question": "What is 'Shoulder Surfing'?",
        "options": [
          "A physical security guard",
          "A type of sport",
          "Hacking a website",
          "Watching someone enter their password"
        ],
        "answer": "Watching someone enter their password",
        "category": "Domain Review",
        "explanation": "It's a low-tech social engineering technique."
      },
      {
        "id": "ceh-q15",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device",
          "A type of math problem",
          "An actual explosive",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders."
      },
      {
        "id": "ceh-q16",
        "question": "What is a 'Rootkit'?",
        "options": [
          "A kit for growing plants",
          "A tool for fixing roots",
          "A type of antivirus",
          "Malware that hides its presence on a system"
        ],
        "answer": "Malware that hides its presence on a system",
        "category": "Domain Review",
        "explanation": "Rootkits operate at a deep level of the OS to remain undetected."
      },
      {
        "id": "ceh-q17",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager",
          "A type of firewall",
          "Studying biological data",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition."
      },
      {
        "id": "ceh-q18",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty",
          "A manual for a router",
          "A set of rules that define allowed traffic",
          "An insurance policy"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets."
      },
      {
        "id": "ceh-q19",
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
        "id": "ceh-q20",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS",
          "A phishing attack targeted at high-level executives",
          "A type of network cable",
          "Hunting whales"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs."
      },
      {
        "id": "ceh-q21",
        "question": "What is 'Spear Phishing'?",
        "options": [
          "A type of network cable",
          "A very fast attack",
          "Phishing targeted at a specific person",
          "Phishing with a weapon"
        ],
        "answer": "Phishing targeted at a specific person",
        "category": "Domain Review",
        "explanation": "Spear phishing is highly customized and more effective than general phishing."
      },
      {
        "id": "ceh-q22",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range",
          "Better encryption and protection against brute force",
          "Cheaper hardware",
          "Faster speeds only"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks."
      },
      {
        "id": "ceh-q23",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card",
          "Looking in a mirror",
          "Stating who you are (e.g., username)",
          "Taking a photo"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process."
      },
      {
        "id": "ceh-q24",
        "question": "What is a 'Public Key'?",
        "options": [
          "A key for a public building",
          "A key that can be shared with anyone",
          "A secret password",
          "The only key in existence"
        ],
        "answer": "A key that can be shared with anyone",
        "category": "Domain Review",
        "explanation": "In asymmetric encryption, the public key is used for encryption."
      },
      {
        "id": "ceh-q25",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest",
          "Ensuring data has not been tampered with",
          "Keeping secrets",
          "Making sure the website is fast"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy."
      },
      {
        "id": "ceh-q26",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real door",
          "A secure login",
          "A type of firewall"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence."
      },
      {
        "id": "ceh-q27",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing code",
          "Breaking a password",
          "Converting ciphertext back into plaintext",
          "Downloading data"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key."
      },
      {
        "id": "ceh-q28",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection",
          "A software update",
          "Overwriting memory to execute malicious code",
          "Too much data on a disk"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution."
      },
      {
        "id": "ceh-q29",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A gap between server racks",
          "A leak in a tire",
          "A type of Wi-Fi",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems."
      },
      {
        "id": "ceh-q30",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key for a private room",
          "A key that everyone has",
          "A physical key",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures."
      },
      {
        "id": "ceh-q31",
        "question": "What is 'Defense in Depth'?",
        "options": [
          "A single strong firewall",
          "Building a deep bunker",
          "Hiring many guards",
          "Using multiple layers of security"
        ],
        "answer": "Using multiple layers of security",
        "category": "Domain Review",
        "explanation": "If one layer fails, others are in place to stop the threat."
      },
      {
        "id": "ceh-q32",
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
        "id": "ceh-q33",
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
        "id": "ceh-q34",
        "question": "What is 'War Driving'?",
        "options": [
          "A military exercise",
          "A type of car race",
          "Driving a tank",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit."
      },
      {
        "id": "ceh-q35",
        "question": "Which protocol provides a secure shell for remote access?",
        "options": [
          "FTP",
          "HTTP",
          "SSH",
          "Telnet"
        ],
        "answer": "SSH",
        "category": "Domain Review",
        "explanation": "SSH is the secure alternative to the unencrypted Telnet."
      },
      {
        "id": "ceh-q36",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption",
          "Firewalls",
          "Hashing"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message."
      },
      {
        "id": "ceh-q37",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate",
          "Ensure data is compressed",
          "Ensure only authorized users can read data",
          "Ensure services are up"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information."
      },
      {
        "id": "ceh-q38",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A phone repair shop",
          "A type of mobile app",
          "Hiring a mobile expert",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones."
      },
      {
        "id": "ceh-q39",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a hard drive",
          "Playing with sand",
          "Running suspicious programs in an isolated area",
          "Testing website designs"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system."
      },
      {
        "id": "ceh-q40",
        "question": "What is the 'Principle of Least Privilege'?",
        "options": [
          "Giving everyone full access",
          "Giving only necessary access to a user",
          "Hiring only one person",
          "Using cheap hardware"
        ],
        "answer": "Giving only necessary access to a user",
        "category": "Domain Review",
        "explanation": "This minimizes potential impact of a security breach."
      },
      {
        "id": "ceh-q41",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password",
          "Creating a new account",
          "Determining what an authenticated user can do",
          "Entering a building"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user."
      },
      {
        "id": "ceh-q42",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server",
          "A jar of honey",
          "A secure database"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets."
      },
      {
        "id": "ceh-q43",
        "question": "What is 'Cross-Site Scripting' (XSS)?",
        "options": [
          "A hardware attack",
          "A type of router flaw",
          "Injecting malicious scripts into web pages",
          "Writing code for multiple sites"
        ],
        "answer": "Injecting malicious scripts into web pages",
        "category": "Domain Review",
        "explanation": "XSS can steal cookies and session info from users."
      },
      {
        "id": "ceh-q44",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking a bank",
          "Installing cameras",
          "Manipulating people into giving up info",
          "Writing code for social media"
        ],
        "answer": "Manipulating people into giving up info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws."
      },
      {
        "id": "ceh-q45",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A backup system",
          "A secure hard drive",
          "A way to find lost files",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit."
      },
      {
        "id": "ceh-q46",
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
        "id": "ceh-q47",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test",
          "A network speed test",
          "A test of ink levels",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture."
      },
      {
        "id": "ceh-q48",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two accounts",
          "Logging in twice",
          "Using two different types of credentials",
          "Using two passwords"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password."
      },
      {
        "id": "ceh-q49",
        "question": "What does 'DDoS' stand for?",
        "options": [
          "Digital Data over System",
          "Direct Drive on Storage",
          "Distributed Data of Security",
          "Distributed Denial of Service"
        ],
        "answer": "Distributed Denial of Service",
        "category": "Domain Review",
        "explanation": "DDoS attacks overwhelm a target with traffic from multiple sources."
      },
      {
        "id": "ceh-q50",
        "question": "What is 'Access Control'?",
        "options": [
          "A type of remote control",
          "Hiring a security guard",
          "Restricting access to resources to authorized users",
          "Turning off the computer"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization."
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
        "question": "What is 'Block Storage'?",
        "options": [
          "A secure vault",
          "A type of memory",
          "A wall of servers",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps."
      },
      {
        "id": "aws-sa-assoc-q2",
        "question": "What is 'PaaS'?",
        "options": [
          "Payment as a Service",
          "Platform as a Service",
          "Process as a Service",
          "Product as a Service"
        ],
        "answer": "Platform as a Service",
        "category": "Domain Review",
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
      },
      {
        "id": "aws-sa-assoc-q3",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual",
          "A type of cloud billing",
          "Managing infrastructure using configuration files and code",
          "Writing code on a server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments."
      },
      {
        "id": "aws-sa-assoc-q4",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A server with spots",
          "A temporary cloud",
          "A type of storage",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity."
      },
      {
        "id": "aws-sa-assoc-q5",
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
        "id": "aws-sa-assoc-q6",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A VPN",
          "A personal server",
          "A private network section within a public cloud",
          "A secure website"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology."
      },
      {
        "id": "aws-sa-assoc-q7",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A cloud provider",
          "A programming language",
          "A type of database",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration."
      },
      {
        "id": "aws-sa-assoc-q8",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer",
          "A website developer",
          "An internet provider"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google."
      },
      {
        "id": "aws-sa-assoc-q9",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A king in the cloud",
          "A secure database",
          "A type of storage",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments."
      },
      {
        "id": "aws-sa-assoc-q10",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A cloud manual",
          "A government in the cloud",
          "A security guard",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency."
      },
      {
        "id": "aws-sa-assoc-q11",
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
        "id": "aws-sa-assoc-q12",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A TV station",
          "A fast internet connection",
          "A system of distributed servers that deliver web content to users",
          "A type of storage"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user."
      },
      {
        "id": "aws-sa-assoc-q13",
        "question": "What does 'Scalability' mean in the cloud?",
        "options": [
          "Making the screen larger",
          "The ability to increase or decrease resources",
          "The number of users",
          "The physical weight of a server"
        ],
        "answer": "The ability to increase or decrease resources",
        "category": "Domain Review",
        "explanation": "Scalability can be vertical (size) or horizontal (number)."
      },
      {
        "id": "aws-sa-assoc-q14",
        "question": "What is 'Terraform'?",
        "options": [
          "A cloud provider",
          "A database system",
          "A planet",
          "A popular tool for Infrastructure as Code"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers."
      },
      {
        "id": "aws-sa-assoc-q15",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A driver's license",
          "A login page",
          "A security guard",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security."
      },
      {
        "id": "aws-sa-assoc-q16",
        "question": "What is 'File Storage'?",
        "options": [
          "A backup on a CD",
          "A filing cabinet",
          "A type of cloud",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives."
      },
      {
        "id": "aws-sa-assoc-q17",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A cloud manager",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs."
      },
      {
        "id": "aws-sa-assoc-q18",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard",
          "A software update",
          "Observing the performance and health of cloud resources",
          "Watching a cloud"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor."
      },
      {
        "id": "aws-sa-assoc-q19",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A cloud with no users",
          "A computer with no power",
          "A website with no data",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions."
      },
      {
        "id": "aws-sa-assoc-q20",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A cloud provider",
          "A type of software",
          "Applications designed specifically for the cloud environment",
          "Someone born in the cloud"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers."
      },
      {
        "id": "aws-sa-assoc-q21",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud",
          "A slow network",
          "A small file size",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications."
      },
      {
        "id": "aws-sa-assoc-q22",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A bug in the software",
          "A hardware warranty",
          "Being very patient",
          "The ability of a system to continue operating even if a component fails"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability."
      },
      {
        "id": "aws-sa-assoc-q23",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "A very small server",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment."
      },
      {
        "id": "aws-sa-assoc-q24",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A backup on a USB",
          "A government program",
          "Fixing a broken PC",
          "Plans and processes to restore IT systems after a major failure"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication."
      },
      {
        "id": "aws-sa-assoc-q25",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive",
          "A city-wide network",
          "A single server rack",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region."
      },
      {
        "id": "aws-sa-assoc-q26",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset",
          "A computer game",
          "A fake cloud",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing."
      },
      {
        "id": "aws-sa-assoc-q27",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A fast router",
          "A type of VPN",
          "An entrance to a data center"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute."
      },
      {
        "id": "aws-sa-assoc-q28",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants."
      },
      {
        "id": "aws-sa-assoc-q29",
        "question": "What is 'IaaS'?",
        "options": [
          "Identity as a Service",
          "Information as a Service",
          "Infrastructure as a Service",
          "Integration as a Service"
        ],
        "answer": "Infrastructure as a Service",
        "category": "Domain Review",
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand."
      },
      {
        "id": "aws-sa-assoc-q30",
        "question": "What is 'Object Storage'?",
        "options": [
          "A folder on a PC",
          "A type of database",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos."
      },
      {
        "id": "aws-sa-assoc-q31",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill in the mail",
          "A software license",
          "A type of payment",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go)."
      },
      {
        "id": "aws-sa-assoc-q32",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database that scales automatically and has no fixed cost",
          "A file in the cloud"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
      },
      {
        "id": "aws-sa-assoc-q33",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud with a password",
          "A hidden data center",
          "A personal hard drive",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy."
      },
      {
        "id": "aws-sa-assoc-q34",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A guard in a data center",
          "A lock on a server",
          "A secure browser",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud."
      },
      {
        "id": "aws-sa-assoc-q35",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system",
          "A private server",
          "A type of storage",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads."
      },
      {
        "id": "aws-sa-assoc-q36",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer",
          "A programming language",
          "A type of cloud",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines."
      },
      {
        "id": "aws-sa-assoc-q37",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A backup on a USB",
          "A hard drive in the sky",
          "A type of memory",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere."
      },
      {
        "id": "aws-sa-assoc-q38",
        "question": "What is 'Edge Computing'?",
        "options": [
          "Building a cloud on a cliff",
          "Fast internet at home",
          "Processing data closer to the source of data generation",
          "Using the latest hardware"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage."
      },
      {
        "id": "aws-sa-assoc-q39",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A type of storage",
          "Cutting down trees",
          "Recording events and activities in the cloud for auditing",
          "Writing a diary"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis."
      },
      {
        "id": "aws-sa-assoc-q40",
        "question": "What is a 'Container'?",
        "options": [
          "A box for servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure room",
          "A type of storage"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology."
      },
      {
        "id": "aws-sa-assoc-q41",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Birds flying south",
          "Buying new servers",
          "Moving data and apps from on-premises to the cloud",
          "Updating a website"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process."
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
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A framework defining security tasks for provider and customer",
          "A group project",
          "Sharing a password",
          "Splitting the cloud bill"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud."
      },
      {
        "id": "aws-sa-assoc-q44",
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
        "id": "aws-sa-assoc-q45",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A cloud for everyone",
          "A tall server",
          "Fast internet",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms."
      },
      {
        "id": "aws-sa-assoc-q46",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A cloud for everyone",
          "A free Wi-Fi hotspot",
          "A government network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud."
      },
      {
        "id": "aws-sa-assoc-q47",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable",
          "A type of cloud storage",
          "Fast network speed",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency."
      },
      {
        "id": "aws-sa-assoc-q48",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A computer that runs on gas",
          "A fast internet connection",
          "A type of server",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model."
      },
      {
        "id": "aws-sa-assoc-q49",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A hardware upgrade",
          "A self-adjusting scale",
          "A type of cloud billing",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls."
      },
      {
        "id": "aws-sa-assoc-q50",
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
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A cloud for everyone",
          "A free Wi-Fi hotspot",
          "A government network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud."
      },
      {
        "id": "az-900-q2",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A server with spots",
          "A temporary cloud",
          "A type of storage",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity."
      },
      {
        "id": "az-900-q3",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system",
          "A private server",
          "A type of storage",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads."
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
        "question": "What is 'Cloud Security'?",
        "options": [
          "A guard in a data center",
          "A lock on a server",
          "A secure browser",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud."
      },
      {
        "id": "az-900-q6",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A cloud manual",
          "A government in the cloud",
          "A security guard",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency."
      },
      {
        "id": "az-900-q7",
        "question": "What is 'Edge Computing'?",
        "options": [
          "Building a cloud on a cliff",
          "Fast internet at home",
          "Processing data closer to the source of data generation",
          "Using the latest hardware"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage."
      },
      {
        "id": "az-900-q8",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud",
          "A slow network",
          "A small file size",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications."
      },
      {
        "id": "az-900-q9",
        "question": "What is 'File Storage'?",
        "options": [
          "A backup on a CD",
          "A filing cabinet",
          "A type of cloud",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives."
      },
      {
        "id": "az-900-q10",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database that scales automatically and has no fixed cost",
          "A file in the cloud"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
      },
      {
        "id": "az-900-q11",
        "question": "What is 'PaaS'?",
        "options": [
          "Payment as a Service",
          "Platform as a Service",
          "Process as a Service",
          "Product as a Service"
        ],
        "answer": "Platform as a Service",
        "category": "Domain Review",
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
      },
      {
        "id": "az-900-q12",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A bug in the software",
          "A hardware warranty",
          "Being very patient",
          "The ability of a system to continue operating even if a component fails"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability."
      },
      {
        "id": "az-900-q13",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A TV station",
          "A fast internet connection",
          "A system of distributed servers that deliver web content to users",
          "A type of storage"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user."
      },
      {
        "id": "az-900-q14",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A computer that runs on gas",
          "A fast internet connection",
          "A type of server",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model."
      },
      {
        "id": "az-900-q15",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "A very small server",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment."
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
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A cloud for everyone",
          "A tall server",
          "Fast internet",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms."
      },
      {
        "id": "az-900-q18",
        "question": "What is 'Object Storage'?",
        "options": [
          "A folder on a PC",
          "A type of database",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos."
      },
      {
        "id": "az-900-q19",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A backup on a USB",
          "A hard drive in the sky",
          "A type of memory",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere."
      },
      {
        "id": "az-900-q20",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable",
          "A type of cloud storage",
          "Fast network speed",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency."
      },
      {
        "id": "az-900-q21",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A VPN",
          "A personal server",
          "A private network section within a public cloud",
          "A secure website"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology."
      },
      {
        "id": "az-900-q22",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A cloud with no users",
          "A computer with no power",
          "A website with no data",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions."
      },
      {
        "id": "az-900-q23",
        "question": "What is 'Block Storage'?",
        "options": [
          "A secure vault",
          "A type of memory",
          "A wall of servers",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps."
      },
      {
        "id": "az-900-q24",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A framework defining security tasks for provider and customer",
          "A group project",
          "Sharing a password",
          "Splitting the cloud bill"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud."
      },
      {
        "id": "az-900-q25",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer",
          "A programming language",
          "A type of cloud",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines."
      },
      {
        "id": "az-900-q26",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A cloud manager",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs."
      },
      {
        "id": "az-900-q27",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A driver's license",
          "A login page",
          "A security guard",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security."
      },
      {
        "id": "az-900-q28",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A cloud provider",
          "A programming language",
          "A type of database",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration."
      },
      {
        "id": "az-900-q29",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A backup on a USB",
          "A government program",
          "Fixing a broken PC",
          "Plans and processes to restore IT systems after a major failure"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication."
      },
      {
        "id": "az-900-q30",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants."
      },
      {
        "id": "az-900-q31",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A king in the cloud",
          "A secure database",
          "A type of storage",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments."
      },
      {
        "id": "az-900-q32",
        "question": "What is 'IaaS'?",
        "options": [
          "Identity as a Service",
          "Information as a Service",
          "Infrastructure as a Service",
          "Integration as a Service"
        ],
        "answer": "Infrastructure as a Service",
        "category": "Domain Review",
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand."
      },
      {
        "id": "az-900-q33",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer",
          "A website developer",
          "An internet provider"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google."
      },
      {
        "id": "az-900-q34",
        "question": "What does 'Scalability' mean in the cloud?",
        "options": [
          "Making the screen larger",
          "The ability to increase or decrease resources",
          "The number of users",
          "The physical weight of a server"
        ],
        "answer": "The ability to increase or decrease resources",
        "category": "Domain Review",
        "explanation": "Scalability can be vertical (size) or horizontal (number)."
      },
      {
        "id": "az-900-q35",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A type of storage",
          "Cutting down trees",
          "Recording events and activities in the cloud for auditing",
          "Writing a diary"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis."
      },
      {
        "id": "az-900-q36",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard",
          "A software update",
          "Observing the performance and health of cloud resources",
          "Watching a cloud"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor."
      },
      {
        "id": "az-900-q37",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive",
          "A city-wide network",
          "A single server rack",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region."
      },
      {
        "id": "az-900-q38",
        "question": "What is a 'Container'?",
        "options": [
          "A box for servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure room",
          "A type of storage"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology."
      },
      {
        "id": "az-900-q39",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill in the mail",
          "A software license",
          "A type of payment",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go)."
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
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A hardware upgrade",
          "A self-adjusting scale",
          "A type of cloud billing",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls."
      },
      {
        "id": "az-900-q42",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A fast router",
          "A type of VPN",
          "An entrance to a data center"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute."
      },
      {
        "id": "az-900-q43",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud with a password",
          "A hidden data center",
          "A personal hard drive",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy."
      },
      {
        "id": "az-900-q44",
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
        "id": "az-900-q45",
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
        "id": "az-900-q46",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Birds flying south",
          "Buying new servers",
          "Moving data and apps from on-premises to the cloud",
          "Updating a website"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process."
      },
      {
        "id": "az-900-q47",
        "question": "What is 'Terraform'?",
        "options": [
          "A cloud provider",
          "A database system",
          "A planet",
          "A popular tool for Infrastructure as Code"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers."
      },
      {
        "id": "az-900-q48",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A cloud provider",
          "A type of software",
          "Applications designed specifically for the cloud environment",
          "Someone born in the cloud"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers."
      },
      {
        "id": "az-900-q49",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset",
          "A computer game",
          "A fake cloud",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing."
      },
      {
        "id": "az-900-q50",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual",
          "A type of cloud billing",
          "Managing infrastructure using configuration files and code",
          "Writing code on a server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments."
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
        "question": "What is 'PaaS'?",
        "options": [
          "Payment as a Service",
          "Platform as a Service",
          "Process as a Service",
          "Product as a Service"
        ],
        "answer": "Platform as a Service",
        "category": "Domain Review",
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
      },
      {
        "id": "az-104-q2",
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
        "id": "az-104-q3",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable",
          "A type of cloud storage",
          "Fast network speed",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency."
      },
      {
        "id": "az-104-q4",
        "question": "What is 'IaaS'?",
        "options": [
          "Identity as a Service",
          "Information as a Service",
          "Infrastructure as a Service",
          "Integration as a Service"
        ],
        "answer": "Infrastructure as a Service",
        "category": "Domain Review",
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand."
      },
      {
        "id": "az-104-q5",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A cloud manager",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs."
      },
      {
        "id": "az-104-q6",
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
        "id": "az-104-q7",
        "question": "What is a 'Container'?",
        "options": [
          "A box for servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure room",
          "A type of storage"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology."
      },
      {
        "id": "az-104-q8",
        "question": "What is 'File Storage'?",
        "options": [
          "A backup on a CD",
          "A filing cabinet",
          "A type of cloud",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives."
      },
      {
        "id": "az-104-q9",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system",
          "A private server",
          "A type of storage",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads."
      },
      {
        "id": "az-104-q10",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A backup on a USB",
          "A government program",
          "Fixing a broken PC",
          "Plans and processes to restore IT systems after a major failure"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication."
      },
      {
        "id": "az-104-q11",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A TV station",
          "A fast internet connection",
          "A system of distributed servers that deliver web content to users",
          "A type of storage"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user."
      },
      {
        "id": "az-104-q12",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual",
          "A type of cloud billing",
          "Managing infrastructure using configuration files and code",
          "Writing code on a server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments."
      },
      {
        "id": "az-104-q13",
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
        "id": "az-104-q14",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud with a password",
          "A hidden data center",
          "A personal hard drive",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy."
      },
      {
        "id": "az-104-q15",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A backup on a USB",
          "A hard drive in the sky",
          "A type of memory",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere."
      },
      {
        "id": "az-104-q16",
        "question": "What is 'Edge Computing'?",
        "options": [
          "Building a cloud on a cliff",
          "Fast internet at home",
          "Processing data closer to the source of data generation",
          "Using the latest hardware"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage."
      },
      {
        "id": "az-104-q17",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A server with spots",
          "A temporary cloud",
          "A type of storage",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity."
      },
      {
        "id": "az-104-q18",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A cloud with no users",
          "A computer with no power",
          "A website with no data",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions."
      },
      {
        "id": "az-104-q19",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive",
          "A city-wide network",
          "A single server rack",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region."
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
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud",
          "A slow network",
          "A small file size",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications."
      },
      {
        "id": "az-104-q22",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill in the mail",
          "A software license",
          "A type of payment",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go)."
      },
      {
        "id": "az-104-q23",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Birds flying south",
          "Buying new servers",
          "Moving data and apps from on-premises to the cloud",
          "Updating a website"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process."
      },
      {
        "id": "az-104-q24",
        "question": "What does 'Scalability' mean in the cloud?",
        "options": [
          "Making the screen larger",
          "The ability to increase or decrease resources",
          "The number of users",
          "The physical weight of a server"
        ],
        "answer": "The ability to increase or decrease resources",
        "category": "Domain Review",
        "explanation": "Scalability can be vertical (size) or horizontal (number)."
      },
      {
        "id": "az-104-q25",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A cloud for everyone",
          "A free Wi-Fi hotspot",
          "A government network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud."
      },
      {
        "id": "az-104-q26",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer",
          "A website developer",
          "An internet provider"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google."
      },
      {
        "id": "az-104-q27",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants."
      },
      {
        "id": "az-104-q28",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A king in the cloud",
          "A secure database",
          "A type of storage",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments."
      },
      {
        "id": "az-104-q29",
        "question": "What is 'Block Storage'?",
        "options": [
          "A secure vault",
          "A type of memory",
          "A wall of servers",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps."
      },
      {
        "id": "az-104-q30",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A framework defining security tasks for provider and customer",
          "A group project",
          "Sharing a password",
          "Splitting the cloud bill"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud."
      },
      {
        "id": "az-104-q31",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A cloud provider",
          "A programming language",
          "A type of database",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration."
      },
      {
        "id": "az-104-q32",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset",
          "A computer game",
          "A fake cloud",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing."
      },
      {
        "id": "az-104-q33",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard",
          "A software update",
          "Observing the performance and health of cloud resources",
          "Watching a cloud"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor."
      },
      {
        "id": "az-104-q34",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A hardware upgrade",
          "A self-adjusting scale",
          "A type of cloud billing",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls."
      },
      {
        "id": "az-104-q35",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A bug in the software",
          "A hardware warranty",
          "Being very patient",
          "The ability of a system to continue operating even if a component fails"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability."
      },
      {
        "id": "az-104-q36",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A cloud manual",
          "A government in the cloud",
          "A security guard",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency."
      },
      {
        "id": "az-104-q37",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A cloud provider",
          "A type of software",
          "Applications designed specifically for the cloud environment",
          "Someone born in the cloud"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers."
      },
      {
        "id": "az-104-q38",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A type of storage",
          "Cutting down trees",
          "Recording events and activities in the cloud for auditing",
          "Writing a diary"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis."
      },
      {
        "id": "az-104-q39",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A driver's license",
          "A login page",
          "A security guard",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security."
      },
      {
        "id": "az-104-q40",
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
        "id": "az-104-q41",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database that scales automatically and has no fixed cost",
          "A file in the cloud"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
      },
      {
        "id": "az-104-q42",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A VPN",
          "A personal server",
          "A private network section within a public cloud",
          "A secure website"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology."
      },
      {
        "id": "az-104-q43",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A cloud for everyone",
          "A tall server",
          "Fast internet",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms."
      },
      {
        "id": "az-104-q44",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A computer that runs on gas",
          "A fast internet connection",
          "A type of server",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model."
      },
      {
        "id": "az-104-q45",
        "question": "What is 'Object Storage'?",
        "options": [
          "A folder on a PC",
          "A type of database",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos."
      },
      {
        "id": "az-104-q46",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A fast router",
          "A type of VPN",
          "An entrance to a data center"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute."
      },
      {
        "id": "az-104-q47",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer",
          "A programming language",
          "A type of cloud",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines."
      },
      {
        "id": "az-104-q48",
        "question": "What is 'Terraform'?",
        "options": [
          "A cloud provider",
          "A database system",
          "A planet",
          "A popular tool for Infrastructure as Code"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers."
      },
      {
        "id": "az-104-q49",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A guard in a data center",
          "A lock on a server",
          "A secure browser",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud."
      },
      {
        "id": "az-104-q50",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "A very small server",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment."
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
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A bug in the software",
          "A hardware warranty",
          "Being very patient",
          "The ability of a system to continue operating even if a component fails"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability."
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
        "question": "What is 'Terraform'?",
        "options": [
          "A cloud provider",
          "A database system",
          "A planet",
          "A popular tool for Infrastructure as Code"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers."
      },
      {
        "id": "gcp-pca-q4",
        "question": "What does 'Scalability' mean in the cloud?",
        "options": [
          "Making the screen larger",
          "The ability to increase or decrease resources",
          "The number of users",
          "The physical weight of a server"
        ],
        "answer": "The ability to increase or decrease resources",
        "category": "Domain Review",
        "explanation": "Scalability can be vertical (size) or horizontal (number)."
      },
      {
        "id": "gcp-pca-q5",
        "question": "What is 'Edge Computing'?",
        "options": [
          "Building a cloud on a cliff",
          "Fast internet at home",
          "Processing data closer to the source of data generation",
          "Using the latest hardware"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage."
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
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud with a password",
          "A hidden data center",
          "A personal hard drive",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy."
      },
      {
        "id": "gcp-pca-q8",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A TV station",
          "A fast internet connection",
          "A system of distributed servers that deliver web content to users",
          "A type of storage"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user."
      },
      {
        "id": "gcp-pca-q9",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A cloud provider",
          "A type of software",
          "Applications designed specifically for the cloud environment",
          "Someone born in the cloud"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers."
      },
      {
        "id": "gcp-pca-q10",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A backup on a USB",
          "A hard drive in the sky",
          "A type of memory",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere."
      },
      {
        "id": "gcp-pca-q11",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A hardware upgrade",
          "A self-adjusting scale",
          "A type of cloud billing",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls."
      },
      {
        "id": "gcp-pca-q12",
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
        "id": "gcp-pca-q13",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "A very small server",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment."
      },
      {
        "id": "gcp-pca-q14",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable",
          "A type of cloud storage",
          "Fast network speed",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency."
      },
      {
        "id": "gcp-pca-q15",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A cloud for everyone",
          "A tall server",
          "Fast internet",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms."
      },
      {
        "id": "gcp-pca-q16",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A VPN",
          "A personal server",
          "A private network section within a public cloud",
          "A secure website"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology."
      },
      {
        "id": "gcp-pca-q17",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A guard in a data center",
          "A lock on a server",
          "A secure browser",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud."
      },
      {
        "id": "gcp-pca-q18",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A cloud for everyone",
          "A free Wi-Fi hotspot",
          "A government network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud."
      },
      {
        "id": "gcp-pca-q19",
        "question": "What is a 'Container'?",
        "options": [
          "A box for servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure room",
          "A type of storage"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology."
      },
      {
        "id": "gcp-pca-q20",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A backup on a USB",
          "A government program",
          "Fixing a broken PC",
          "Plans and processes to restore IT systems after a major failure"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication."
      },
      {
        "id": "gcp-pca-q21",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual",
          "A type of cloud billing",
          "Managing infrastructure using configuration files and code",
          "Writing code on a server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments."
      },
      {
        "id": "gcp-pca-q22",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer",
          "A website developer",
          "An internet provider"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google."
      },
      {
        "id": "gcp-pca-q23",
        "question": "What is 'IaaS'?",
        "options": [
          "Identity as a Service",
          "Information as a Service",
          "Infrastructure as a Service",
          "Integration as a Service"
        ],
        "answer": "Infrastructure as a Service",
        "category": "Domain Review",
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand."
      },
      {
        "id": "gcp-pca-q24",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A cloud provider",
          "A programming language",
          "A type of database",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration."
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
        "question": "What is 'Block Storage'?",
        "options": [
          "A secure vault",
          "A type of memory",
          "A wall of servers",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps."
      },
      {
        "id": "gcp-pca-q27",
        "question": "What is 'File Storage'?",
        "options": [
          "A backup on a CD",
          "A filing cabinet",
          "A type of cloud",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives."
      },
      {
        "id": "gcp-pca-q28",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A framework defining security tasks for provider and customer",
          "A group project",
          "Sharing a password",
          "Splitting the cloud bill"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud."
      },
      {
        "id": "gcp-pca-q29",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A driver's license",
          "A login page",
          "A security guard",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security."
      },
      {
        "id": "gcp-pca-q30",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill in the mail",
          "A software license",
          "A type of payment",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go)."
      },
      {
        "id": "gcp-pca-q31",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A cloud manual",
          "A government in the cloud",
          "A security guard",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency."
      },
      {
        "id": "gcp-pca-q32",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system",
          "A private server",
          "A type of storage",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads."
      },
      {
        "id": "gcp-pca-q33",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A fast router",
          "A type of VPN",
          "An entrance to a data center"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute."
      },
      {
        "id": "gcp-pca-q34",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A computer that runs on gas",
          "A fast internet connection",
          "A type of server",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model."
      },
      {
        "id": "gcp-pca-q35",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer",
          "A programming language",
          "A type of cloud",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines."
      },
      {
        "id": "gcp-pca-q36",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive",
          "A city-wide network",
          "A single server rack",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region."
      },
      {
        "id": "gcp-pca-q37",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A king in the cloud",
          "A secure database",
          "A type of storage",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments."
      },
      {
        "id": "gcp-pca-q38",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud",
          "A slow network",
          "A small file size",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications."
      },
      {
        "id": "gcp-pca-q39",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A cloud with no users",
          "A computer with no power",
          "A website with no data",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions."
      },
      {
        "id": "gcp-pca-q40",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A cloud manager",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs."
      },
      {
        "id": "gcp-pca-q41",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard",
          "A software update",
          "Observing the performance and health of cloud resources",
          "Watching a cloud"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor."
      },
      {
        "id": "gcp-pca-q42",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Birds flying south",
          "Buying new servers",
          "Moving data and apps from on-premises to the cloud",
          "Updating a website"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process."
      },
      {
        "id": "gcp-pca-q43",
        "question": "What is 'Object Storage'?",
        "options": [
          "A folder on a PC",
          "A type of database",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos."
      },
      {
        "id": "gcp-pca-q44",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A type of storage",
          "Cutting down trees",
          "Recording events and activities in the cloud for auditing",
          "Writing a diary"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis."
      },
      {
        "id": "gcp-pca-q45",
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
        "id": "gcp-pca-q46",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database that scales automatically and has no fixed cost",
          "A file in the cloud"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
      },
      {
        "id": "gcp-pca-q47",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset",
          "A computer game",
          "A fake cloud",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing."
      },
      {
        "id": "gcp-pca-q48",
        "question": "What is 'PaaS'?",
        "options": [
          "Payment as a Service",
          "Platform as a Service",
          "Process as a Service",
          "Product as a Service"
        ],
        "answer": "Platform as a Service",
        "category": "Domain Review",
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
      },
      {
        "id": "gcp-pca-q49",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants."
      },
      {
        "id": "gcp-pca-q50",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A server with spots",
          "A temporary cloud",
          "A type of storage",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity."
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
        "question": "What is 'Terraform'?",
        "options": [
          "A cloud provider",
          "A database system",
          "A planet",
          "A popular tool for Infrastructure as Code"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers."
      },
      {
        "id": "oci-found-q2",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A cloud provider",
          "A type of software",
          "Applications designed specifically for the cloud environment",
          "Someone born in the cloud"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers."
      },
      {
        "id": "oci-found-q3",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A backup on a USB",
          "A hard drive in the sky",
          "A type of memory",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere."
      },
      {
        "id": "oci-found-q4",
        "question": "What is 'PaaS'?",
        "options": [
          "Payment as a Service",
          "Platform as a Service",
          "Process as a Service",
          "Product as a Service"
        ],
        "answer": "Platform as a Service",
        "category": "Domain Review",
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
      },
      {
        "id": "oci-found-q5",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A computer that runs on gas",
          "A fast internet connection",
          "A type of server",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model."
      },
      {
        "id": "oci-found-q6",
        "question": "What is 'File Storage'?",
        "options": [
          "A backup on a CD",
          "A filing cabinet",
          "A type of cloud",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives."
      },
      {
        "id": "oci-found-q7",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A type of storage",
          "Cutting down trees",
          "Recording events and activities in the cloud for auditing",
          "Writing a diary"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis."
      },
      {
        "id": "oci-found-q8",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A cloud manual",
          "A government in the cloud",
          "A security guard",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency."
      },
      {
        "id": "oci-found-q9",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A backup on a USB",
          "A government program",
          "Fixing a broken PC",
          "Plans and processes to restore IT systems after a major failure"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication."
      },
      {
        "id": "oci-found-q10",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable",
          "A type of cloud storage",
          "Fast network speed",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency."
      },
      {
        "id": "oci-found-q11",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer",
          "A website developer",
          "An internet provider"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google."
      },
      {
        "id": "oci-found-q12",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A fast router",
          "A type of VPN",
          "An entrance to a data center"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute."
      },
      {
        "id": "oci-found-q13",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A cloud with no users",
          "A computer with no power",
          "A website with no data",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions."
      },
      {
        "id": "oci-found-q14",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A TV station",
          "A fast internet connection",
          "A system of distributed servers that deliver web content to users",
          "A type of storage"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user."
      },
      {
        "id": "oci-found-q15",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A cloud provider",
          "A programming language",
          "A type of database",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration."
      },
      {
        "id": "oci-found-q16",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database that scales automatically and has no fixed cost",
          "A file in the cloud"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
      },
      {
        "id": "oci-found-q17",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A server with spots",
          "A temporary cloud",
          "A type of storage",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity."
      },
      {
        "id": "oci-found-q18",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual",
          "A type of cloud billing",
          "Managing infrastructure using configuration files and code",
          "Writing code on a server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments."
      },
      {
        "id": "oci-found-q19",
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
        "id": "oci-found-q20",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "A very small server",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment."
      },
      {
        "id": "oci-found-q21",
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
        "id": "oci-found-q22",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Birds flying south",
          "Buying new servers",
          "Moving data and apps from on-premises to the cloud",
          "Updating a website"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process."
      },
      {
        "id": "oci-found-q23",
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
        "id": "oci-found-q24",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer",
          "A programming language",
          "A type of cloud",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines."
      },
      {
        "id": "oci-found-q25",
        "question": "What is 'IaaS'?",
        "options": [
          "Identity as a Service",
          "Information as a Service",
          "Infrastructure as a Service",
          "Integration as a Service"
        ],
        "answer": "Infrastructure as a Service",
        "category": "Domain Review",
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand."
      },
      {
        "id": "oci-found-q26",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud with a password",
          "A hidden data center",
          "A personal hard drive",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy."
      },
      {
        "id": "oci-found-q27",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system",
          "A private server",
          "A type of storage",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads."
      },
      {
        "id": "oci-found-q28",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A hardware upgrade",
          "A self-adjusting scale",
          "A type of cloud billing",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls."
      },
      {
        "id": "oci-found-q29",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A framework defining security tasks for provider and customer",
          "A group project",
          "Sharing a password",
          "Splitting the cloud bill"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud."
      },
      {
        "id": "oci-found-q30",
        "question": "What is a 'Container'?",
        "options": [
          "A box for servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure room",
          "A type of storage"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology."
      },
      {
        "id": "oci-found-q31",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A cloud for everyone",
          "A tall server",
          "Fast internet",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms."
      },
      {
        "id": "oci-found-q32",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A driver's license",
          "A login page",
          "A security guard",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security."
      },
      {
        "id": "oci-found-q33",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A cloud manager",
          "A type of network cable",
          "A very fast processor",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs."
      },
      {
        "id": "oci-found-q34",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants."
      },
      {
        "id": "oci-found-q35",
        "question": "What is 'Object Storage'?",
        "options": [
          "A folder on a PC",
          "A type of database",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos."
      },
      {
        "id": "oci-found-q36",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A bug in the software",
          "A hardware warranty",
          "Being very patient",
          "The ability of a system to continue operating even if a component fails"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability."
      },
      {
        "id": "oci-found-q37",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A VPN",
          "A personal server",
          "A private network section within a public cloud",
          "A secure website"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology."
      },
      {
        "id": "oci-found-q38",
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
        "id": "oci-found-q39",
        "question": "What is 'Block Storage'?",
        "options": [
          "A secure vault",
          "A type of memory",
          "A wall of servers",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps."
      },
      {
        "id": "oci-found-q40",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A guard in a data center",
          "A lock on a server",
          "A secure browser",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud."
      },
      {
        "id": "oci-found-q41",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset",
          "A computer game",
          "A fake cloud",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing."
      },
      {
        "id": "oci-found-q42",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive",
          "A city-wide network",
          "A single server rack",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region."
      },
      {
        "id": "oci-found-q43",
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
        "id": "oci-found-q44",
        "question": "What is 'Edge Computing'?",
        "options": [
          "Building a cloud on a cliff",
          "Fast internet at home",
          "Processing data closer to the source of data generation",
          "Using the latest hardware"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage."
      },
      {
        "id": "oci-found-q45",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard",
          "A software update",
          "Observing the performance and health of cloud resources",
          "Watching a cloud"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor."
      },
      {
        "id": "oci-found-q46",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A king in the cloud",
          "A secure database",
          "A type of storage",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments."
      },
      {
        "id": "oci-found-q47",
        "question": "What does 'Scalability' mean in the cloud?",
        "options": [
          "Making the screen larger",
          "The ability to increase or decrease resources",
          "The number of users",
          "The physical weight of a server"
        ],
        "answer": "The ability to increase or decrease resources",
        "category": "Domain Review",
        "explanation": "Scalability can be vertical (size) or horizontal (number)."
      },
      {
        "id": "oci-found-q48",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud",
          "A slow network",
          "A small file size",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications."
      },
      {
        "id": "oci-found-q49",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A cloud for everyone",
          "A free Wi-Fi hotspot",
          "A government network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud."
      },
      {
        "id": "oci-found-q50",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill in the mail",
          "A software license",
          "A type of payment",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go)."
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
        "question": "What is an 'Epic'?",
        "options": [
          "A large body of work that can be broken down into many user stories",
          "A long poem",
          "A software manual",
          "A type of movie"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints."
      },
      {
        "id": "capm-q2",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report",
          "A list of team members",
          "A type of pig"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor."
      },
      {
        "id": "capm-q3",
        "question": "What is a 'Lessons Learned' session?",
        "options": [
          "A classroom lecture",
          "A meeting to discuss what went well and what didn't in a project",
          "A software update",
          "A type of test"
        ],
        "answer": "A meeting to discuss what went well and what didn't in a project",
        "category": "Domain Review",
        "explanation": "Lessons learned improve future project performance."
      },
      {
        "id": "capm-q4",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A software update",
          "A type of test",
          "Looking back in time"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint."
      },
      {
        "id": "capm-q5",
        "question": "What is a 'Critical Success Factor' (CSF)?",
        "options": [
          "A hardware failure",
          "A type of software bug",
          "A very hard task",
          "Something that must happen for a project to succeed"
        ],
        "answer": "Something that must happen for a project to succeed",
        "category": "Domain Review",
        "explanation": "CSFs are key areas of focus for the project manager."
      },
      {
        "id": "capm-q6",
        "question": "What is 'Resource Management'?",
        "options": [
          "A software update",
          "A type of database",
          "Finding new resources",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed."
      },
      {
        "id": "capm-q7",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account",
          "A leather folder",
          "A type of database",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work."
      },
      {
        "id": "capm-q8",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope",
          "The budget of a project",
          "The name of a project",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes."
      },
      {
        "id": "capm-q9",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A financial report",
          "A low-cost project",
          "A type of database",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses."
      },
      {
        "id": "capm-q10",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A software update",
          "A type of project",
          "Running a race"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog."
      },
      {
        "id": "capm-q11",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A financial report",
          "A type of software bug",
          "Cleaning a room",
          "Keeping the product backlog up to date and prioritized"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning."
      },
      {
        "id": "capm-q12",
        "question": "What is a 'WBS' (Work Breakdown Structure)?",
        "options": [
          "A financial report",
          "A hierarchical decomposition of project work",
          "A type of computer",
          "A website builder"
        ],
        "answer": "A hierarchical decomposition of project work",
        "category": "Domain Review",
        "explanation": "WBS breaks a project down into manageable parts."
      },
      {
        "id": "capm-q13",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A card game",
          "A consensus-based estimation technique for user stories",
          "A software tool",
          "A type of gamble"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously."
      },
      {
        "id": "capm-q14",
        "question": "What is 'Lean' project management?",
        "options": [
          "A fast-paced methodology",
          "A small project",
          "A type of exercise",
          "Focusing on maximizing value and minimizing waste"
        ],
        "answer": "Focusing on maximizing value and minimizing waste",
        "category": "Domain Review",
        "explanation": "Lean originated in manufacturing and is widely used in IT."
      },
      {
        "id": "capm-q15",
        "question": "What is 'Waterfall' methodology?",
        "options": [
          "A beautiful scenery",
          "A fast-paced project",
          "A sequential project management process",
          "A type of plumbing"
        ],
        "answer": "A sequential project management process",
        "category": "Domain Review",
        "explanation": "Work flows through distinct phases like requirements, design, and testing."
      },
      {
        "id": "capm-q16",
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
        "id": "capm-q17",
        "question": "What is a 'Sprint' in Scrum?",
        "options": [
          "A short meeting",
          "A time-boxed iteration (usually 1-4 weeks)",
          "A type of project",
          "Running very fast"
        ],
        "answer": "A time-boxed iteration (usually 1-4 weeks)",
        "category": "Domain Review",
        "explanation": "Work is completed and made ready for review within a sprint."
      },
      {
        "id": "capm-q18",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger",
          "A guest book",
          "A list of project tasks"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement."
      },
      {
        "id": "capm-q19",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol",
          "A type of computer code",
          "Speed of a car"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints."
      },
      {
        "id": "capm-q20",
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
        "id": "capm-q21",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty",
          "A software tool",
          "Controlling the team",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves."
      },
      {
        "id": "capm-q22",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual",
          "A technique to measure project performance and progress",
          "A type of store",
          "A way to earn money"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics."
      },
      {
        "id": "capm-q23",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol",
          "A part of a book",
          "A type of computer code",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk."
      },
      {
        "id": "capm-q24",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story",
          "A short description of a feature from an end-user perspective",
          "A software manual",
          "A type of book"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs."
      },
      {
        "id": "capm-q25",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock",
          "A significant point or event in a project",
          "A task that takes 1 hour",
          "A unit of distance"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals."
      },
      {
        "id": "capm-q26",
        "question": "What is 'Scrum'?",
        "options": [
          "A framework for implementing Agile development",
          "A rugby formation",
          "A software tool",
          "A type of database"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work."
      },
      {
        "id": "capm-q27",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware",
          "Exchanging money",
          "Hiring new people"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved."
      },
      {
        "id": "capm-q28",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A financial report",
          "A list of bugs",
          "A prioritized list of everything that might be needed in a product",
          "A storage room"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner."
      },
      {
        "id": "capm-q29",
        "question": "What is 'Six Sigma'?",
        "options": [
          "A computer game",
          "A secure network",
          "A set of techniques for process improvement and quality control",
          "A type of math"
        ],
        "answer": "A set of techniques for process improvement and quality control",
        "category": "Domain Review",
        "explanation": "Six Sigma focuses on reducing defects and variability."
      },
      {
        "id": "capm-q30",
        "question": "What is the role of the 'Scrum Master'?",
        "options": [
          "A facilitator for a Scrum team",
          "A project owner",
          "The boss of the team",
          "The lead developer"
        ],
        "answer": "A facilitator for a Scrum team",
        "category": "Domain Review",
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers."
      },
      {
        "id": "capm-q31",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer",
          "A type of software",
          "Managing a group of related projects to achieve benefits",
          "Writing many programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects."
      },
      {
        "id": "capm-q32",
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
        "id": "capm-q33",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car",
          "A financial report",
          "A type of computer code",
          "A visual system for managing work as it moves through a process"
        ],
        "answer": "A visual system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress."
      },
      {
        "id": "capm-q34",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Developing a product through repeated cycles (iterations)",
          "Repeating a task"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback."
      },
      {
        "id": "capm-q35",
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
        "id": "capm-q36",
        "question": "What is 'Risk Management'?",
        "options": [
          "A type of insurance",
          "Avoiding all risks",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance."
      },
      {
        "id": "capm-q37",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about projects",
          "A document outlining the values and principles of Agile",
          "A hardware manual",
          "A type of software"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001."
      },
      {
        "id": "capm-q38",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of storage",
          "Hiring new people",
          "Managing the purchase of goods and services for a project",
          "Writing code"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing."
      },
      {
        "id": "capm-q39",
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
        "id": "capm-q40",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency",
          "A security guard",
          "A set of laws",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals."
      },
      {
        "id": "capm-q41",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer",
          "A type of computer",
          "A website developer"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support."
      },
      {
        "id": "capm-q42",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A document that formally authorizes a project",
          "A financial contract",
          "A list of team members",
          "A map of the world"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources."
      },
      {
        "id": "capm-q43",
        "question": "What is 'Project Budget'?",
        "options": [
          "A financial ledger",
          "A list of tasks",
          "A software manual",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager."
      },
      {
        "id": "capm-q44",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard",
          "A member of a royal family",
          "A structured project management methodology used widely in Europe",
          "A type of software"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments."
      },
      {
        "id": "capm-q45",
        "question": "What is 'Quality Assurance' (QA)?",
        "options": [
          "A guarantee",
          "Checking for errors",
          "Processes to ensure a project meets quality standards",
          "Testing a product"
        ],
        "answer": "Processes to ensure a project meets quality standards",
        "category": "Domain Review",
        "explanation": "QA is focused on the process used to create the deliverables."
      },
      {
        "id": "capm-q46",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A financial report",
          "A fire hazard",
          "A graphical representation of work remaining versus time",
          "A type of database"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint."
      },
      {
        "id": "capm-q47",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A financial report",
          "A meeting to demonstrate the work completed during the sprint",
          "A type of test",
          "Checking a website"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders."
      },
      {
        "id": "capm-q48",
        "question": "What does 'KPI' stand for?",
        "options": [
          "Keep People Involved",
          "Key Performance Indicator",
          "Key Project Item",
          "Knowledge Processing Input"
        ],
        "answer": "Key Performance Indicator",
        "category": "Domain Review",
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
      },
      {
        "id": "capm-q49",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A delivery truck",
          "A software update",
          "A type of storage",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value."
      },
      {
        "id": "capm-q50",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol",
          "A part of a movie",
          "A type of computer code"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories."
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
        "question": "What is 'Scrum'?",
        "options": [
          "A framework for implementing Agile development",
          "A rugby formation",
          "A software tool",
          "A type of database"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work."
      },
      {
        "id": "csm-q2",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty",
          "A software tool",
          "Controlling the team",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves."
      },
      {
        "id": "csm-q3",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A financial report",
          "A meeting to demonstrate the work completed during the sprint",
          "A type of test",
          "Checking a website"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders."
      },
      {
        "id": "csm-q4",
        "question": "What is 'Risk Management'?",
        "options": [
          "A type of insurance",
          "Avoiding all risks",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance."
      },
      {
        "id": "csm-q5",
        "question": "What is a 'WBS' (Work Breakdown Structure)?",
        "options": [
          "A financial report",
          "A hierarchical decomposition of project work",
          "A type of computer",
          "A website builder"
        ],
        "answer": "A hierarchical decomposition of project work",
        "category": "Domain Review",
        "explanation": "WBS breaks a project down into manageable parts."
      },
      {
        "id": "csm-q6",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware",
          "Exchanging money",
          "Hiring new people"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved."
      },
      {
        "id": "csm-q7",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A financial report",
          "A type of software bug",
          "Cleaning a room",
          "Keeping the product backlog up to date and prioritized"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning."
      },
      {
        "id": "csm-q8",
        "question": "What is a 'Sprint' in Scrum?",
        "options": [
          "A short meeting",
          "A time-boxed iteration (usually 1-4 weeks)",
          "A type of project",
          "Running very fast"
        ],
        "answer": "A time-boxed iteration (usually 1-4 weeks)",
        "category": "Domain Review",
        "explanation": "Work is completed and made ready for review within a sprint."
      },
      {
        "id": "csm-q9",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock",
          "A significant point or event in a project",
          "A task that takes 1 hour",
          "A unit of distance"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals."
      },
      {
        "id": "csm-q10",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report",
          "A list of team members",
          "A type of pig"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor."
      },
      {
        "id": "csm-q11",
        "question": "What is a 'Lessons Learned' session?",
        "options": [
          "A classroom lecture",
          "A meeting to discuss what went well and what didn't in a project",
          "A software update",
          "A type of test"
        ],
        "answer": "A meeting to discuss what went well and what didn't in a project",
        "category": "Domain Review",
        "explanation": "Lessons learned improve future project performance."
      },
      {
        "id": "csm-q12",
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
        "id": "csm-q13",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol",
          "A part of a movie",
          "A type of computer code"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories."
      },
      {
        "id": "csm-q14",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A document that formally authorizes a project",
          "A financial contract",
          "A list of team members",
          "A map of the world"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources."
      },
      {
        "id": "csm-q15",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story",
          "A short description of a feature from an end-user perspective",
          "A software manual",
          "A type of book"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs."
      },
      {
        "id": "csm-q16",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual",
          "A technique to measure project performance and progress",
          "A type of store",
          "A way to earn money"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics."
      },
      {
        "id": "csm-q17",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger",
          "A guest book",
          "A list of project tasks"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement."
      },
      {
        "id": "csm-q18",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A delivery truck",
          "A software update",
          "A type of storage",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value."
      },
      {
        "id": "csm-q19",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A financial report",
          "A list of bugs",
          "A prioritized list of everything that might be needed in a product",
          "A storage room"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner."
      },
      {
        "id": "csm-q20",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A financial report",
          "A fire hazard",
          "A graphical representation of work remaining versus time",
          "A type of database"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint."
      },
      {
        "id": "csm-q21",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol",
          "A part of a book",
          "A type of computer code",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk."
      },
      {
        "id": "csm-q22",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car",
          "A financial report",
          "A type of computer code",
          "A visual system for managing work as it moves through a process"
        ],
        "answer": "A visual system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress."
      },
      {
        "id": "csm-q23",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account",
          "A leather folder",
          "A type of database",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work."
      },
      {
        "id": "csm-q24",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency",
          "A security guard",
          "A set of laws",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals."
      },
      {
        "id": "csm-q25",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about projects",
          "A document outlining the values and principles of Agile",
          "A hardware manual",
          "A type of software"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001."
      },
      {
        "id": "csm-q26",
        "question": "What is the role of the 'Scrum Master'?",
        "options": [
          "A facilitator for a Scrum team",
          "A project owner",
          "The boss of the team",
          "The lead developer"
        ],
        "answer": "A facilitator for a Scrum team",
        "category": "Domain Review",
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers."
      },
      {
        "id": "csm-q27",
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
        "id": "csm-q28",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer",
          "A type of software",
          "Managing a group of related projects to achieve benefits",
          "Writing many programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects."
      },
      {
        "id": "csm-q29",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of storage",
          "Hiring new people",
          "Managing the purchase of goods and services for a project",
          "Writing code"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing."
      },
      {
        "id": "csm-q30",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A software update",
          "A type of test",
          "Looking back in time"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint."
      },
      {
        "id": "csm-q31",
        "question": "What is 'Agile' methodology?",
        "options": [
          "A set of strict rules",
          "A type of sport",
          "A very fast router",
          "An iterative approach to project management and software development"
        ],
        "answer": "An iterative approach to project management and software development",
        "category": "Domain Review",
        "explanation": "Agile focuses on delivering value quickly and adapting to change."
      },
      {
        "id": "csm-q32",
        "question": "What does 'KPI' stand for?",
        "options": [
          "Keep People Involved",
          "Key Performance Indicator",
          "Key Project Item",
          "Knowledge Processing Input"
        ],
        "answer": "Key Performance Indicator",
        "category": "Domain Review",
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
      },
      {
        "id": "csm-q33",
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
        "id": "csm-q34",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A card game",
          "A consensus-based estimation technique for user stories",
          "A software tool",
          "A type of gamble"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously."
      },
      {
        "id": "csm-q35",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A financial report",
          "A low-cost project",
          "A type of database",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses."
      },
      {
        "id": "csm-q36",
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
        "id": "csm-q37",
        "question": "What is 'Six Sigma'?",
        "options": [
          "A computer game",
          "A secure network",
          "A set of techniques for process improvement and quality control",
          "A type of math"
        ],
        "answer": "A set of techniques for process improvement and quality control",
        "category": "Domain Review",
        "explanation": "Six Sigma focuses on reducing defects and variability."
      },
      {
        "id": "csm-q38",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Developing a product through repeated cycles (iterations)",
          "Repeating a task"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback."
      },
      {
        "id": "csm-q39",
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
        "id": "csm-q40",
        "question": "What is 'Resource Management'?",
        "options": [
          "A software update",
          "A type of database",
          "Finding new resources",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed."
      },
      {
        "id": "csm-q41",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol",
          "A type of computer code",
          "Speed of a car"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints."
      },
      {
        "id": "csm-q42",
        "question": "What is 'Project Budget'?",
        "options": [
          "A financial ledger",
          "A list of tasks",
          "A software manual",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager."
      },
      {
        "id": "csm-q43",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope",
          "The budget of a project",
          "The name of a project",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes."
      },
      {
        "id": "csm-q44",
        "question": "What is 'Waterfall' methodology?",
        "options": [
          "A beautiful scenery",
          "A fast-paced project",
          "A sequential project management process",
          "A type of plumbing"
        ],
        "answer": "A sequential project management process",
        "category": "Domain Review",
        "explanation": "Work flows through distinct phases like requirements, design, and testing."
      },
      {
        "id": "csm-q45",
        "question": "What is a 'Critical Success Factor' (CSF)?",
        "options": [
          "A hardware failure",
          "A type of software bug",
          "A very hard task",
          "Something that must happen for a project to succeed"
        ],
        "answer": "Something that must happen for a project to succeed",
        "category": "Domain Review",
        "explanation": "CSFs are key areas of focus for the project manager."
      },
      {
        "id": "csm-q46",
        "question": "What is 'Quality Assurance' (QA)?",
        "options": [
          "A guarantee",
          "Checking for errors",
          "Processes to ensure a project meets quality standards",
          "Testing a product"
        ],
        "answer": "Processes to ensure a project meets quality standards",
        "category": "Domain Review",
        "explanation": "QA is focused on the process used to create the deliverables."
      },
      {
        "id": "csm-q47",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A software update",
          "A type of project",
          "Running a race"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog."
      },
      {
        "id": "csm-q48",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer",
          "A type of computer",
          "A website developer"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support."
      },
      {
        "id": "csm-q49",
        "question": "What is an 'Epic'?",
        "options": [
          "A large body of work that can be broken down into many user stories",
          "A long poem",
          "A software manual",
          "A type of movie"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints."
      },
      {
        "id": "csm-q50",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard",
          "A member of a royal family",
          "A structured project management methodology used widely in Europe",
          "A type of software"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments."
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
        "id": "itil-found-q2",
        "question": "What is 'Resource Management'?",
        "options": [
          "A software update",
          "A type of database",
          "Finding new resources",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed."
      },
      {
        "id": "itil-found-q3",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A document that formally authorizes a project",
          "A financial contract",
          "A list of team members",
          "A map of the world"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources."
      },
      {
        "id": "itil-found-q4",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard",
          "A member of a royal family",
          "A structured project management methodology used widely in Europe",
          "A type of software"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments."
      },
      {
        "id": "itil-found-q5",
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
        "id": "itil-found-q6",
        "question": "What is 'Project Budget'?",
        "options": [
          "A financial ledger",
          "A list of tasks",
          "A software manual",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager."
      },
      {
        "id": "itil-found-q7",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger",
          "A guest book",
          "A list of project tasks"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement."
      },
      {
        "id": "itil-found-q8",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A card game",
          "A consensus-based estimation technique for user stories",
          "A software tool",
          "A type of gamble"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously."
      },
      {
        "id": "itil-found-q9",
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
        "id": "itil-found-q10",
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
        "id": "itil-found-q11",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A software update",
          "A type of project",
          "Running a race"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog."
      },
      {
        "id": "itil-found-q12",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report",
          "A list of team members",
          "A type of pig"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor."
      },
      {
        "id": "itil-found-q13",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of storage",
          "Hiring new people",
          "Managing the purchase of goods and services for a project",
          "Writing code"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing."
      },
      {
        "id": "itil-found-q14",
        "question": "What is 'Scrum'?",
        "options": [
          "A framework for implementing Agile development",
          "A rugby formation",
          "A software tool",
          "A type of database"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work."
      },
      {
        "id": "itil-found-q15",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Developing a product through repeated cycles (iterations)",
          "Repeating a task"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback."
      },
      {
        "id": "itil-found-q16",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account",
          "A leather folder",
          "A type of database",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work."
      },
      {
        "id": "itil-found-q17",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A financial report",
          "A meeting to demonstrate the work completed during the sprint",
          "A type of test",
          "Checking a website"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders."
      },
      {
        "id": "itil-found-q18",
        "question": "What is 'Quality Assurance' (QA)?",
        "options": [
          "A guarantee",
          "Checking for errors",
          "Processes to ensure a project meets quality standards",
          "Testing a product"
        ],
        "answer": "Processes to ensure a project meets quality standards",
        "category": "Domain Review",
        "explanation": "QA is focused on the process used to create the deliverables."
      },
      {
        "id": "itil-found-q19",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty",
          "A software tool",
          "Controlling the team",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves."
      },
      {
        "id": "itil-found-q20",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about projects",
          "A document outlining the values and principles of Agile",
          "A hardware manual",
          "A type of software"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001."
      },
      {
        "id": "itil-found-q21",
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
        "id": "itil-found-q22",
        "question": "What is a 'Critical Success Factor' (CSF)?",
        "options": [
          "A hardware failure",
          "A type of software bug",
          "A very hard task",
          "Something that must happen for a project to succeed"
        ],
        "answer": "Something that must happen for a project to succeed",
        "category": "Domain Review",
        "explanation": "CSFs are key areas of focus for the project manager."
      },
      {
        "id": "itil-found-q23",
        "question": "What is the role of the 'Scrum Master'?",
        "options": [
          "A facilitator for a Scrum team",
          "A project owner",
          "The boss of the team",
          "The lead developer"
        ],
        "answer": "A facilitator for a Scrum team",
        "category": "Domain Review",
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers."
      },
      {
        "id": "itil-found-q24",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story",
          "A short description of a feature from an end-user perspective",
          "A software manual",
          "A type of book"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs."
      },
      {
        "id": "itil-found-q25",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car",
          "A financial report",
          "A type of computer code",
          "A visual system for managing work as it moves through a process"
        ],
        "answer": "A visual system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress."
      },
      {
        "id": "itil-found-q26",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer",
          "A type of computer",
          "A website developer"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support."
      },
      {
        "id": "itil-found-q27",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer",
          "A type of software",
          "Managing a group of related projects to achieve benefits",
          "Writing many programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects."
      },
      {
        "id": "itil-found-q28",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware",
          "Exchanging money",
          "Hiring new people"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved."
      },
      {
        "id": "itil-found-q29",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual",
          "A technique to measure project performance and progress",
          "A type of store",
          "A way to earn money"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics."
      },
      {
        "id": "itil-found-q30",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency",
          "A security guard",
          "A set of laws",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals."
      },
      {
        "id": "itil-found-q31",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol",
          "A part of a movie",
          "A type of computer code"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories."
      },
      {
        "id": "itil-found-q32",
        "question": "What is 'Waterfall' methodology?",
        "options": [
          "A beautiful scenery",
          "A fast-paced project",
          "A sequential project management process",
          "A type of plumbing"
        ],
        "answer": "A sequential project management process",
        "category": "Domain Review",
        "explanation": "Work flows through distinct phases like requirements, design, and testing."
      },
      {
        "id": "itil-found-q33",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A financial report",
          "A list of bugs",
          "A prioritized list of everything that might be needed in a product",
          "A storage room"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner."
      },
      {
        "id": "itil-found-q34",
        "question": "What is 'Agile' methodology?",
        "options": [
          "A set of strict rules",
          "A type of sport",
          "A very fast router",
          "An iterative approach to project management and software development"
        ],
        "answer": "An iterative approach to project management and software development",
        "category": "Domain Review",
        "explanation": "Agile focuses on delivering value quickly and adapting to change."
      },
      {
        "id": "itil-found-q35",
        "question": "What is 'Six Sigma'?",
        "options": [
          "A computer game",
          "A secure network",
          "A set of techniques for process improvement and quality control",
          "A type of math"
        ],
        "answer": "A set of techniques for process improvement and quality control",
        "category": "Domain Review",
        "explanation": "Six Sigma focuses on reducing defects and variability."
      },
      {
        "id": "itil-found-q36",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol",
          "A part of a book",
          "A type of computer code",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk."
      },
      {
        "id": "itil-found-q37",
        "question": "What is an 'Epic'?",
        "options": [
          "A large body of work that can be broken down into many user stories",
          "A long poem",
          "A software manual",
          "A type of movie"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints."
      },
      {
        "id": "itil-found-q38",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A delivery truck",
          "A software update",
          "A type of storage",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value."
      },
      {
        "id": "itil-found-q39",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock",
          "A significant point or event in a project",
          "A task that takes 1 hour",
          "A unit of distance"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals."
      },
      {
        "id": "itil-found-q40",
        "question": "What is 'Risk Management'?",
        "options": [
          "A type of insurance",
          "Avoiding all risks",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance."
      },
      {
        "id": "itil-found-q41",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A financial report",
          "A type of software bug",
          "Cleaning a room",
          "Keeping the product backlog up to date and prioritized"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning."
      },
      {
        "id": "itil-found-q42",
        "question": "What is a 'WBS' (Work Breakdown Structure)?",
        "options": [
          "A financial report",
          "A hierarchical decomposition of project work",
          "A type of computer",
          "A website builder"
        ],
        "answer": "A hierarchical decomposition of project work",
        "category": "Domain Review",
        "explanation": "WBS breaks a project down into manageable parts."
      },
      {
        "id": "itil-found-q43",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A financial report",
          "A fire hazard",
          "A graphical representation of work remaining versus time",
          "A type of database"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint."
      },
      {
        "id": "itil-found-q44",
        "question": "What is a 'Sprint' in Scrum?",
        "options": [
          "A short meeting",
          "A time-boxed iteration (usually 1-4 weeks)",
          "A type of project",
          "Running very fast"
        ],
        "answer": "A time-boxed iteration (usually 1-4 weeks)",
        "category": "Domain Review",
        "explanation": "Work is completed and made ready for review within a sprint."
      },
      {
        "id": "itil-found-q45",
        "question": "What does 'KPI' stand for?",
        "options": [
          "Keep People Involved",
          "Key Performance Indicator",
          "Key Project Item",
          "Knowledge Processing Input"
        ],
        "answer": "Key Performance Indicator",
        "category": "Domain Review",
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
      },
      {
        "id": "itil-found-q46",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope",
          "The budget of a project",
          "The name of a project",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes."
      },
      {
        "id": "itil-found-q47",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol",
          "A type of computer code",
          "Speed of a car"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints."
      },
      {
        "id": "itil-found-q48",
        "question": "What is 'Lean' project management?",
        "options": [
          "A fast-paced methodology",
          "A small project",
          "A type of exercise",
          "Focusing on maximizing value and minimizing waste"
        ],
        "answer": "Focusing on maximizing value and minimizing waste",
        "category": "Domain Review",
        "explanation": "Lean originated in manufacturing and is widely used in IT."
      },
      {
        "id": "itil-found-q49",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A software update",
          "A type of test",
          "Looking back in time"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint."
      },
      {
        "id": "itil-found-q50",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A financial report",
          "A low-cost project",
          "A type of database",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses."
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
        "question": "What is 'KVM Switch'?",
        "options": [
          "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
          "A hub",
          "A light switch",
          "A router"
        ],
        "answer": "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
        "category": "Domain Review",
        "explanation": "KVM switches are used for managing server racks."
      },
      {
        "id": "linux-plus-q2",
        "question": "What is 'Rack' in a data center?",
        "options": [
          "A hardware guard",
          "A shelf",
          "A standardized frame for mounting IT equipment",
          "A type of storage"
        ],
        "answer": "A standardized frame for mounting IT equipment",
        "category": "Domain Review",
        "explanation": "Server racks are usually 19 or 23 inches wide."
      },
      {
        "id": "linux-plus-q3",
        "question": "What is 'Firmware'?",
        "options": [
          "A soft clothing",
          "A software update",
          "A specific class of computer software that provides low-level control for hardware",
          "A type of storage"
        ],
        "answer": "A specific class of computer software that provides low-level control for hardware",
        "category": "Domain Review",
        "explanation": "Firmware is stored on hardware devices like routers and SSDs."
      },
      {
        "id": "linux-plus-q4",
        "question": "What is 'SSH' (Secure Shell)?",
        "options": [
          "A cryptographic network protocol for operating network services securely",
          "A fast browser",
          "A hardware guard",
          "A type of internet cable"
        ],
        "answer": "A cryptographic network protocol for operating network services securely",
        "category": "Domain Review",
        "explanation": "SSH is commonly used for remote login to Linux servers."
      },
      {
        "id": "linux-plus-q5",
        "question": "What is a 'UPS' (Uninterruptible Power Supply)?",
        "options": [
          "A delivery service",
          "A device that provides emergency power when the main source fails",
          "A hardware guard",
          "A type of battery"
        ],
        "answer": "A device that provides emergency power when the main source fails",
        "category": "Domain Review",
        "explanation": "UPS protects equipment from power outages and surges."
      },
      {
        "id": "linux-plus-q6",
        "question": "What is 'SLA' (Service Level Agreement)?",
        "options": [
          "A contract that defines the expected level of service from a provider",
          "A hardware standard",
          "A member of a royal family",
          "A type of software"
        ],
        "answer": "A contract that defines the expected level of service from a provider",
        "category": "Domain Review",
        "explanation": "SLAs often include uptime guarantees and penalties."
      },
      {
        "id": "linux-plus-q7",
        "question": "What is a 'MAC Address'?",
        "options": [
          "A home address",
          "A phone number",
          "A serial number",
          "A unique identifier assigned to a network interface controller"
        ],
        "answer": "A unique identifier assigned to a network interface controller",
        "category": "Domain Review",
        "explanation": "MAC addresses are physical addresses baked into hardware."
      },
      {
        "id": "linux-plus-q8",
        "question": "What is 'HDD' (Hard Disk Drive)?",
        "options": [
          "A backup on a CD",
          "A data storage device that uses magnetic storage and rotating disks",
          "A software update",
          "A type of cloud"
        ],
        "answer": "A data storage device that uses magnetic storage and rotating disks",
        "category": "Domain Review",
        "explanation": "HDDs offer larger capacities at a lower cost than SSDs."
      },
      {
        "id": "linux-plus-q9",
        "question": "What is 'Blade Server'?",
        "options": [
          "A server with sharp edges",
          "A simple app",
          "A thin, modular server that fits into a specialized chassis",
          "A type of computer chip"
        ],
        "answer": "A thin, modular server that fits into a specialized chassis",
        "category": "Domain Review",
        "explanation": "Blade servers save space and improve energy efficiency."
      },
      {
        "id": "linux-plus-q10",
        "question": "What is 'Patch Management'?",
        "options": [
          "A hardware guard",
          "A repair shop",
          "A type of storage",
          "The process of distributing and applying updates to software"
        ],
        "answer": "The process of distributing and applying updates to software",
        "category": "Domain Review",
        "explanation": "Patches fix bugs, improve performance, and close security holes."
      },
      {
        "id": "linux-plus-q11",
        "question": "What is a 'Firewall'?",
        "options": [
          "A hardware update",
          "A network security system that monitors and controls traffic",
          "A physical wall",
          "A type of virus"
        ],
        "answer": "A network security system that monitors and controls traffic",
        "category": "Domain Review",
        "explanation": "Firewalls are the first line of defense in network security."
      },
      {
        "id": "linux-plus-q12",
        "question": "What is 'Clustering'?",
        "options": [
          "A group of people",
          "A hardware update",
          "A type of database",
          "Connecting multiple servers to work together as a single system"
        ],
        "answer": "Connecting multiple servers to work together as a single system",
        "category": "Domain Review",
        "explanation": "Clusters improve performance, scalability, and availability."
      },
      {
        "id": "linux-plus-q13",
        "question": "What is 'PSU' (Power Supply Unit)?",
        "options": [
          "A device that converts mains AC to low-voltage regulated DC power",
          "A hardware guard",
          "A software update",
          "A type of battery"
        ],
        "answer": "A device that converts mains AC to low-voltage regulated DC power",
        "category": "Domain Review",
        "explanation": "The PSU provides power to all computer components."
      },
      {
        "id": "linux-plus-q14",
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
        "id": "linux-plus-q15",
        "question": "What is 'CMOS Battery'?",
        "options": [
          "A battery that powers the CMOS memory when the computer is off",
          "A hardware guard",
          "A large battery",
          "A type of storage"
        ],
        "answer": "A battery that powers the CMOS memory when the computer is off",
        "category": "Domain Review",
        "explanation": "The CMOS battery maintains the date, time, and BIOS settings."
      },
      {
        "id": "linux-plus-q16",
        "question": "What is 'UEFI'?",
        "options": [
          "A secure protocol",
          "A software update",
          "A type of network",
          "The modern replacement for the traditional BIOS"
        ],
        "answer": "The modern replacement for the traditional BIOS",
        "category": "Domain Review",
        "explanation": "UEFI provides a more advanced and secure boot environment."
      },
      {
        "id": "linux-plus-q17",
        "question": "What is 'Failover'?",
        "options": [
          "A hardware warranty",
          "A project failure",
          "A software bug",
          "Automatically switching to a redundant or standby system upon failure"
        ],
        "answer": "Automatically switching to a redundant or standby system upon failure",
        "category": "Domain Review",
        "explanation": "Failover is crucial for high availability."
      },
      {
        "id": "linux-plus-q18",
        "question": "What is 'Snapshot' in storage?",
        "options": [
          "A copy of a system or data at a specific point in time",
          "A hardware upgrade",
          "A photograph",
          "A type of storage"
        ],
        "answer": "A copy of a system or data at a specific point in time",
        "category": "Domain Review",
        "explanation": "Snapshots are often used for quick recovery and testing."
      },
      {
        "id": "linux-plus-q19",
        "question": "What is 'RAID 1'?",
        "options": [
          "A type of backup",
          "Mirroring data onto two or more disks",
          "Striping data across disks",
          "Using a single disk"
        ],
        "answer": "Mirroring data onto two or more disks",
        "category": "Domain Review",
        "explanation": "RAID 1 provides high fault tolerance by duplicating data."
      },
      {
        "id": "linux-plus-q20",
        "question": "What is 'Uptime'?",
        "options": [
          "A hardware warranty",
          "A type of network speed",
          "The amount of time a system or service is operational",
          "Waking up"
        ],
        "answer": "The amount of time a system or service is operational",
        "category": "Domain Review",
        "explanation": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure."
      },
      {
        "id": "linux-plus-q21",
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
        "id": "linux-plus-q22",
        "question": "What is 'CPU' (Central Processing Unit)?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A type of monitor",
          "The electronic circuitry that executes instructions of a computer program"
        ],
        "answer": "The electronic circuitry that executes instructions of a computer program",
        "category": "Domain Review",
        "explanation": "The CPU is the 'brain' of the computer."
      },
      {
        "id": "linux-plus-q23",
        "question": "What is 'Bash'?",
        "options": [
          "A Unix shell and command language",
          "A hardware component",
          "A type of database",
          "Hitting a computer"
        ],
        "answer": "A Unix shell and command language",
        "category": "Domain Review",
        "explanation": "Bash is the default shell on many Linux distributions."
      },
      {
        "id": "linux-plus-q24",
        "question": "What is 'Active Directory' (AD)?",
        "options": [
          "A directory service for Windows domain networks",
          "A list of files",
          "A phone book",
          "A type of firewall"
        ],
        "answer": "A directory service for Windows domain networks",
        "category": "Domain Review",
        "explanation": "AD manages users, computers, and other objects in a network."
      },
      {
        "id": "linux-plus-q25",
        "question": "What is 'Colocation'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Renting space for your servers in a third-party data center"
        ],
        "answer": "Renting space for your servers in a third-party data center",
        "category": "Domain Review",
        "explanation": "Colocation provides professional infrastructure and connectivity."
      },
      {
        "id": "linux-plus-q26",
        "question": "What is 'VPN' (Virtual Private Network)?",
        "options": [
          "A fast internet connection",
          "A private network",
          "A service that creates a safe, encrypted connection over a less secure network",
          "A type of storage"
        ],
        "answer": "A service that creates a safe, encrypted connection over a less secure network",
        "category": "Domain Review",
        "explanation": "VPNs are used for secure remote access and privacy."
      },
      {
        "id": "linux-plus-q27",
        "question": "What is 'SSD' (Solid State Drive)?",
        "options": [
          "A backup on a CD",
          "A software update",
          "A storage device that uses integrated circuits for data storage",
          "A type of cloud"
        ],
        "answer": "A storage device that uses integrated circuits for data storage",
        "category": "Domain Review",
        "explanation": "SSDs are much faster and more durable than traditional HDDs."
      },
      {
        "id": "linux-plus-q28",
        "question": "What is 'BIOS Update'?",
        "options": [
          "A software update",
          "Buying a new PC",
          "Cleaning a disk",
          "Updating the firmware on the motherboard"
        ],
        "answer": "Updating the firmware on the motherboard",
        "category": "Domain Review",
        "explanation": "BIOS updates can fix hardware compatibility issues."
      },
      {
        "id": "linux-plus-q29",
        "question": "What is 'Mainframe'?",
        "options": [
          "A hardware guard",
          "A large, powerful computer used for high-volume data processing",
          "A server rack",
          "A type of network cable"
        ],
        "answer": "A large, powerful computer used for high-volume data processing",
        "category": "Domain Review",
        "explanation": "Mainframes are still used in large-scale industries like banking."
      },
      {
        "id": "linux-plus-q30",
        "question": "What is 'Backup'?",
        "options": [
          "A copy of data stored in a separate location for recovery",
          "A reverse gear",
          "A software update",
          "A type of storage"
        ],
        "answer": "A copy of data stored in a separate location for recovery",
        "category": "Domain Review",
        "explanation": "Backups are essential for data protection."
      },
      {
        "id": "linux-plus-q31",
        "question": "What is a 'Switch' in networking?",
        "options": [
          "A device that connects devices on a computer network using packet switching",
          "A hub",
          "A light switch",
          "A router"
        ],
        "answer": "A device that connects devices on a computer network using packet switching",
        "category": "Domain Review",
        "explanation": "Switches operate at the Data Link Layer (Layer 2)."
      },
      {
        "id": "linux-plus-q32",
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
        "id": "linux-plus-q33",
        "question": "What is 'RAID 5'?",
        "options": [
          "A type of backup",
          "Mirroring data",
          "Striping data and parity across three or more disks",
          "Using five disks"
        ],
        "answer": "Striping data and parity across three or more disks",
        "category": "Domain Review",
        "explanation": "RAID 5 provides a good balance of performance and fault tolerance."
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
        "question": "What is 'Form Factor'?",
        "options": [
          "A hardware warranty",
          "A software manual",
          "A type of code",
          "The physical size and shape of a computer component"
        ],
        "answer": "The physical size and shape of a computer component",
        "category": "Domain Review",
        "explanation": "Examples include ATX, Micro-ATX, and ITX."
      },
      {
        "id": "linux-plus-q36",
        "question": "What is 'Motherboard'?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A type of monitor",
          "The main printed circuit board in general-purpose computers"
        ],
        "answer": "The main printed circuit board in general-purpose computers",
        "category": "Domain Review",
        "explanation": "The motherboard connects all other components together."
      },
      {
        "id": "linux-plus-q37",
        "question": "What is a 'Server'?",
        "options": [
          "A computer or system that provides resources or services to other computers",
          "A network cable",
          "A type of monitor",
          "A waiter"
        ],
        "answer": "A computer or system that provides resources or services to other computers",
        "category": "Domain Review",
        "explanation": "Common servers include web servers, mail servers, and database servers."
      },
      {
        "id": "linux-plus-q38",
        "question": "What is 'DHCP'?",
        "options": [
          "A hardware guard",
          "A protocol for automatically assigning IP addresses to devices",
          "A secure login",
          "A type of network cable"
        ],
        "answer": "A protocol for automatically assigning IP addresses to devices",
        "category": "Domain Review",
        "explanation": "DHCP makes network management much easier."
      },
      {
        "id": "linux-plus-q39",
        "question": "What is 'RAID'?",
        "options": [
          "Rapid Access Integrated Data",
          "Redundant Array of Independent Disks",
          "Reliable Application Interface Device",
          "Remote Access Internal Disk"
        ],
        "answer": "Redundant Array of Independent Disks",
        "category": "Domain Review",
        "explanation": "RAID uses multiple hard drives to provide data redundancy and/or improve performance."
      },
      {
        "id": "linux-plus-q40",
        "question": "What is 'TPM' (Trusted Platform Module)?",
        "options": [
          "A hardware guard",
          "A software update",
          "A specialized chip on a device that provides hardware-level security",
          "A type of software"
        ],
        "answer": "A specialized chip on a device that provides hardware-level security",
        "category": "Domain Review",
        "explanation": "TPM is used for disk encryption and secure authentication."
      },
      {
        "id": "linux-plus-q41",
        "question": "What is an 'IP Address'?",
        "options": [
          "A home address",
          "A phone number",
          "A serial number",
          "A unique string of numbers that identifies each computer on a network"
        ],
        "answer": "A unique string of numbers that identifies each computer on a network",
        "category": "Domain Review",
        "explanation": "IP addresses can be static or dynamic."
      },
      {
        "id": "linux-plus-q42",
        "question": "What is 'RAM' (Random Access Memory)?",
        "options": [
          "A backup on a USB",
          "A form of computer memory that can be read and changed in any order",
          "A software update",
          "A type of storage"
        ],
        "answer": "A form of computer memory that can be read and changed in any order",
        "category": "Domain Review",
        "explanation": "RAM is volatile, meaning data is lost when power is removed."
      },
      {
        "id": "linux-plus-q43",
        "question": "What is 'Load Balancing'?",
        "options": [
          "A hardware upgrade",
          "A heavy server",
          "A type of storage",
          "Distributing network or application traffic across multiple servers"
        ],
        "answer": "Distributing network or application traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancing improves performance and availability."
      },
      {
        "id": "linux-plus-q44",
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
        "id": "linux-plus-q45",
        "question": "What is 'GPU' (Graphics Processing Unit)?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A specialized electronic circuit designed to accelerate image creation",
          "A type of monitor"
        ],
        "answer": "A specialized electronic circuit designed to accelerate image creation",
        "category": "Domain Review",
        "explanation": "GPUs are used for graphics rendering and scientific computing."
      },
      {
        "id": "linux-plus-q46",
        "question": "What is 'Secure Boot'?",
        "options": [
          "A hardware guard",
          "A password on a PC",
          "A security standard that ensures a device boots using only trusted software",
          "A type of antivirus"
        ],
        "answer": "A security standard that ensures a device boots using only trusted software",
        "category": "Domain Review",
        "explanation": "Secure Boot protects against malware during the boot process."
      },
      {
        "id": "linux-plus-q47",
        "question": "What is 'DNS' (Domain Name System)?",
        "options": [
          "A phone book",
          "A secure protocol",
          "A type of storage",
          "The system that translates domain names into IP addresses"
        ],
        "answer": "The system that translates domain names into IP addresses",
        "category": "Domain Review",
        "explanation": "DNS is often called the 'phonebook of the internet'."
      },
      {
        "id": "linux-plus-q48",
        "question": "What is a 'Router'?",
        "options": [
          "A device that forwards data packets between computer networks",
          "A hub",
          "A repeater",
          "A switch"
        ],
        "answer": "A device that forwards data packets between computer networks",
        "category": "Domain Review",
        "explanation": "Routers operate at the Network Layer (Layer 3)."
      },
      {
        "id": "linux-plus-q49",
        "question": "What is 'RAID 0'?",
        "options": [
          "A single disk",
          "A type of backup",
          "A very secure raid",
          "Striping data across disks for performance with no redundancy"
        ],
        "answer": "Striping data across disks for performance with no redundancy",
        "category": "Domain Review",
        "explanation": "RAID 0 improves speed but increases the risk of data loss."
      },
      {
        "id": "linux-plus-q50",
        "question": "What is 'Data Center'?",
        "options": [
          "A facility used to house computer systems and associated components",
          "A hardware guard",
          "A room with servers",
          "A type of storage"
        ],
        "answer": "A facility used to house computer systems and associated components",
        "category": "Domain Review",
        "explanation": "Data centers include redundant power, cooling, and security."
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
        "question": "What is 'SLA' (Service Level Agreement)?",
        "options": [
          "A contract that defines the expected level of service from a provider",
          "A hardware standard",
          "A member of a royal family",
          "A type of software"
        ],
        "answer": "A contract that defines the expected level of service from a provider",
        "category": "Domain Review",
        "explanation": "SLAs often include uptime guarantees and penalties."
      },
      {
        "id": "terraform-assoc-q2",
        "question": "What is a 'MAC Address'?",
        "options": [
          "A home address",
          "A phone number",
          "A serial number",
          "A unique identifier assigned to a network interface controller"
        ],
        "answer": "A unique identifier assigned to a network interface controller",
        "category": "Domain Review",
        "explanation": "MAC addresses are physical addresses baked into hardware."
      },
      {
        "id": "terraform-assoc-q3",
        "question": "What is 'UEFI'?",
        "options": [
          "A secure protocol",
          "A software update",
          "A type of network",
          "The modern replacement for the traditional BIOS"
        ],
        "answer": "The modern replacement for the traditional BIOS",
        "category": "Domain Review",
        "explanation": "UEFI provides a more advanced and secure boot environment."
      },
      {
        "id": "terraform-assoc-q4",
        "question": "What is 'Clustering'?",
        "options": [
          "A group of people",
          "A hardware update",
          "A type of database",
          "Connecting multiple servers to work together as a single system"
        ],
        "answer": "Connecting multiple servers to work together as a single system",
        "category": "Domain Review",
        "explanation": "Clusters improve performance, scalability, and availability."
      },
      {
        "id": "terraform-assoc-q5",
        "question": "What is 'VPN' (Virtual Private Network)?",
        "options": [
          "A fast internet connection",
          "A private network",
          "A service that creates a safe, encrypted connection over a less secure network",
          "A type of storage"
        ],
        "answer": "A service that creates a safe, encrypted connection over a less secure network",
        "category": "Domain Review",
        "explanation": "VPNs are used for secure remote access and privacy."
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
        "question": "What is 'Failover'?",
        "options": [
          "A hardware warranty",
          "A project failure",
          "A software bug",
          "Automatically switching to a redundant or standby system upon failure"
        ],
        "answer": "Automatically switching to a redundant or standby system upon failure",
        "category": "Domain Review",
        "explanation": "Failover is crucial for high availability."
      },
      {
        "id": "terraform-assoc-q8",
        "question": "What is 'RAM' (Random Access Memory)?",
        "options": [
          "A backup on a USB",
          "A form of computer memory that can be read and changed in any order",
          "A software update",
          "A type of storage"
        ],
        "answer": "A form of computer memory that can be read and changed in any order",
        "category": "Domain Review",
        "explanation": "RAM is volatile, meaning data is lost when power is removed."
      },
      {
        "id": "terraform-assoc-q9",
        "question": "What is 'Patch Management'?",
        "options": [
          "A hardware guard",
          "A repair shop",
          "A type of storage",
          "The process of distributing and applying updates to software"
        ],
        "answer": "The process of distributing and applying updates to software",
        "category": "Domain Review",
        "explanation": "Patches fix bugs, improve performance, and close security holes."
      },
      {
        "id": "terraform-assoc-q10",
        "question": "What is 'Colocation'?",
        "options": [
          "A building with many rooms",
          "A large cloud",
          "Hiring many tenants",
          "Renting space for your servers in a third-party data center"
        ],
        "answer": "Renting space for your servers in a third-party data center",
        "category": "Domain Review",
        "explanation": "Colocation provides professional infrastructure and connectivity."
      },
      {
        "id": "terraform-assoc-q11",
        "question": "What is 'SSH' (Secure Shell)?",
        "options": [
          "A cryptographic network protocol for operating network services securely",
          "A fast browser",
          "A hardware guard",
          "A type of internet cable"
        ],
        "answer": "A cryptographic network protocol for operating network services securely",
        "category": "Domain Review",
        "explanation": "SSH is commonly used for remote login to Linux servers."
      },
      {
        "id": "terraform-assoc-q12",
        "question": "What is 'CMOS Battery'?",
        "options": [
          "A battery that powers the CMOS memory when the computer is off",
          "A hardware guard",
          "A large battery",
          "A type of storage"
        ],
        "answer": "A battery that powers the CMOS memory when the computer is off",
        "category": "Domain Review",
        "explanation": "The CMOS battery maintains the date, time, and BIOS settings."
      },
      {
        "id": "terraform-assoc-q13",
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
        "id": "terraform-assoc-q14",
        "question": "What is 'Bash'?",
        "options": [
          "A Unix shell and command language",
          "A hardware component",
          "A type of database",
          "Hitting a computer"
        ],
        "answer": "A Unix shell and command language",
        "category": "Domain Review",
        "explanation": "Bash is the default shell on many Linux distributions."
      },
      {
        "id": "terraform-assoc-q15",
        "question": "What is 'TPM' (Trusted Platform Module)?",
        "options": [
          "A hardware guard",
          "A software update",
          "A specialized chip on a device that provides hardware-level security",
          "A type of software"
        ],
        "answer": "A specialized chip on a device that provides hardware-level security",
        "category": "Domain Review",
        "explanation": "TPM is used for disk encryption and secure authentication."
      },
      {
        "id": "terraform-assoc-q16",
        "question": "What is 'PSU' (Power Supply Unit)?",
        "options": [
          "A device that converts mains AC to low-voltage regulated DC power",
          "A hardware guard",
          "A software update",
          "A type of battery"
        ],
        "answer": "A device that converts mains AC to low-voltage regulated DC power",
        "category": "Domain Review",
        "explanation": "The PSU provides power to all computer components."
      },
      {
        "id": "terraform-assoc-q17",
        "question": "What is 'Firmware'?",
        "options": [
          "A soft clothing",
          "A software update",
          "A specific class of computer software that provides low-level control for hardware",
          "A type of storage"
        ],
        "answer": "A specific class of computer software that provides low-level control for hardware",
        "category": "Domain Review",
        "explanation": "Firmware is stored on hardware devices like routers and SSDs."
      },
      {
        "id": "terraform-assoc-q18",
        "question": "What is 'KVM Switch'?",
        "options": [
          "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
          "A hub",
          "A light switch",
          "A router"
        ],
        "answer": "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
        "category": "Domain Review",
        "explanation": "KVM switches are used for managing server racks."
      },
      {
        "id": "terraform-assoc-q19",
        "question": "What is 'Form Factor'?",
        "options": [
          "A hardware warranty",
          "A software manual",
          "A type of code",
          "The physical size and shape of a computer component"
        ],
        "answer": "The physical size and shape of a computer component",
        "category": "Domain Review",
        "explanation": "Examples include ATX, Micro-ATX, and ITX."
      },
      {
        "id": "terraform-assoc-q20",
        "question": "What is a 'Switch' in networking?",
        "options": [
          "A device that connects devices on a computer network using packet switching",
          "A hub",
          "A light switch",
          "A router"
        ],
        "answer": "A device that connects devices on a computer network using packet switching",
        "category": "Domain Review",
        "explanation": "Switches operate at the Data Link Layer (Layer 2)."
      },
      {
        "id": "terraform-assoc-q21",
        "question": "What is 'RAID'?",
        "options": [
          "Rapid Access Integrated Data",
          "Redundant Array of Independent Disks",
          "Reliable Application Interface Device",
          "Remote Access Internal Disk"
        ],
        "answer": "Redundant Array of Independent Disks",
        "category": "Domain Review",
        "explanation": "RAID uses multiple hard drives to provide data redundancy and/or improve performance."
      },
      {
        "id": "terraform-assoc-q22",
        "question": "What is 'Mainframe'?",
        "options": [
          "A hardware guard",
          "A large, powerful computer used for high-volume data processing",
          "A server rack",
          "A type of network cable"
        ],
        "answer": "A large, powerful computer used for high-volume data processing",
        "category": "Domain Review",
        "explanation": "Mainframes are still used in large-scale industries like banking."
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
        "question": "What is 'DNS' (Domain Name System)?",
        "options": [
          "A phone book",
          "A secure protocol",
          "A type of storage",
          "The system that translates domain names into IP addresses"
        ],
        "answer": "The system that translates domain names into IP addresses",
        "category": "Domain Review",
        "explanation": "DNS is often called the 'phonebook of the internet'."
      },
      {
        "id": "terraform-assoc-q25",
        "question": "What is 'Motherboard'?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A type of monitor",
          "The main printed circuit board in general-purpose computers"
        ],
        "answer": "The main printed circuit board in general-purpose computers",
        "category": "Domain Review",
        "explanation": "The motherboard connects all other components together."
      },
      {
        "id": "terraform-assoc-q26",
        "question": "What is 'DHCP'?",
        "options": [
          "A hardware guard",
          "A protocol for automatically assigning IP addresses to devices",
          "A secure login",
          "A type of network cable"
        ],
        "answer": "A protocol for automatically assigning IP addresses to devices",
        "category": "Domain Review",
        "explanation": "DHCP makes network management much easier."
      },
      {
        "id": "terraform-assoc-q27",
        "question": "What is 'Downtime'?",
        "options": [
          "A slow network",
          "A software update",
          "Going to sleep",
          "The period during which a system or service is unavailable"
        ],
        "answer": "The period during which a system or service is unavailable",
        "category": "Domain Review",
        "explanation": "Downtime can result in lost revenue and reputation."
      },
      {
        "id": "terraform-assoc-q28",
        "question": "What is 'RAID 1'?",
        "options": [
          "A type of backup",
          "Mirroring data onto two or more disks",
          "Striping data across disks",
          "Using a single disk"
        ],
        "answer": "Mirroring data onto two or more disks",
        "category": "Domain Review",
        "explanation": "RAID 1 provides high fault tolerance by duplicating data."
      },
      {
        "id": "terraform-assoc-q29",
        "question": "What is 'Data Center'?",
        "options": [
          "A facility used to house computer systems and associated components",
          "A hardware guard",
          "A room with servers",
          "A type of storage"
        ],
        "answer": "A facility used to house computer systems and associated components",
        "category": "Domain Review",
        "explanation": "Data centers include redundant power, cooling, and security."
      },
      {
        "id": "terraform-assoc-q30",
        "question": "What is 'Rack' in a data center?",
        "options": [
          "A hardware guard",
          "A shelf",
          "A standardized frame for mounting IT equipment",
          "A type of storage"
        ],
        "answer": "A standardized frame for mounting IT equipment",
        "category": "Domain Review",
        "explanation": "Server racks are usually 19 or 23 inches wide."
      },
      {
        "id": "terraform-assoc-q31",
        "question": "What is 'GPU' (Graphics Processing Unit)?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A specialized electronic circuit designed to accelerate image creation",
          "A type of monitor"
        ],
        "answer": "A specialized electronic circuit designed to accelerate image creation",
        "category": "Domain Review",
        "explanation": "GPUs are used for graphics rendering and scientific computing."
      },
      {
        "id": "terraform-assoc-q32",
        "question": "What is 'Uptime'?",
        "options": [
          "A hardware warranty",
          "A type of network speed",
          "The amount of time a system or service is operational",
          "Waking up"
        ],
        "answer": "The amount of time a system or service is operational",
        "category": "Domain Review",
        "explanation": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure."
      },
      {
        "id": "terraform-assoc-q33",
        "question": "What is 'CPU' (Central Processing Unit)?",
        "options": [
          "A hardware guard",
          "A network cable",
          "A type of monitor",
          "The electronic circuitry that executes instructions of a computer program"
        ],
        "answer": "The electronic circuitry that executes instructions of a computer program",
        "category": "Domain Review",
        "explanation": "The CPU is the 'brain' of the computer."
      },
      {
        "id": "terraform-assoc-q34",
        "question": "What is 'SSD' (Solid State Drive)?",
        "options": [
          "A backup on a CD",
          "A software update",
          "A storage device that uses integrated circuits for data storage",
          "A type of cloud"
        ],
        "answer": "A storage device that uses integrated circuits for data storage",
        "category": "Domain Review",
        "explanation": "SSDs are much faster and more durable than traditional HDDs."
      },
      {
        "id": "terraform-assoc-q35",
        "question": "What is 'Blade Server'?",
        "options": [
          "A server with sharp edges",
          "A simple app",
          "A thin, modular server that fits into a specialized chassis",
          "A type of computer chip"
        ],
        "answer": "A thin, modular server that fits into a specialized chassis",
        "category": "Domain Review",
        "explanation": "Blade servers save space and improve energy efficiency."
      },
      {
        "id": "terraform-assoc-q36",
        "question": "What is 'Secure Boot'?",
        "options": [
          "A hardware guard",
          "A password on a PC",
          "A security standard that ensures a device boots using only trusted software",
          "A type of antivirus"
        ],
        "answer": "A security standard that ensures a device boots using only trusted software",
        "category": "Domain Review",
        "explanation": "Secure Boot protects against malware during the boot process."
      },
      {
        "id": "terraform-assoc-q37",
        "question": "What is a 'Firewall'?",
        "options": [
          "A hardware update",
          "A network security system that monitors and controls traffic",
          "A physical wall",
          "A type of virus"
        ],
        "answer": "A network security system that monitors and controls traffic",
        "category": "Domain Review",
        "explanation": "Firewalls are the first line of defense in network security."
      },
      {
        "id": "terraform-assoc-q38",
        "question": "What is 'Backup'?",
        "options": [
          "A copy of data stored in a separate location for recovery",
          "A reverse gear",
          "A software update",
          "A type of storage"
        ],
        "answer": "A copy of data stored in a separate location for recovery",
        "category": "Domain Review",
        "explanation": "Backups are essential for data protection."
      },
      {
        "id": "terraform-assoc-q39",
        "question": "What is 'Load Balancing'?",
        "options": [
          "A hardware upgrade",
          "A heavy server",
          "A type of storage",
          "Distributing network or application traffic across multiple servers"
        ],
        "answer": "Distributing network or application traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancing improves performance and availability."
      },
      {
        "id": "terraform-assoc-q40",
        "question": "What is a 'UPS' (Uninterruptible Power Supply)?",
        "options": [
          "A delivery service",
          "A device that provides emergency power when the main source fails",
          "A hardware guard",
          "A type of battery"
        ],
        "answer": "A device that provides emergency power when the main source fails",
        "category": "Domain Review",
        "explanation": "UPS protects equipment from power outages and surges."
      },
      {
        "id": "terraform-assoc-q41",
        "question": "What is a 'Server'?",
        "options": [
          "A computer or system that provides resources or services to other computers",
          "A network cable",
          "A type of monitor",
          "A waiter"
        ],
        "answer": "A computer or system that provides resources or services to other computers",
        "category": "Domain Review",
        "explanation": "Common servers include web servers, mail servers, and database servers."
      },
      {
        "id": "terraform-assoc-q42",
        "question": "What is 'RAID 5'?",
        "options": [
          "A type of backup",
          "Mirroring data",
          "Striping data and parity across three or more disks",
          "Using five disks"
        ],
        "answer": "Striping data and parity across three or more disks",
        "category": "Domain Review",
        "explanation": "RAID 5 provides a good balance of performance and fault tolerance."
      },
      {
        "id": "terraform-assoc-q43",
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
        "id": "terraform-assoc-q44",
        "question": "What is 'RAID 0'?",
        "options": [
          "A single disk",
          "A type of backup",
          "A very secure raid",
          "Striping data across disks for performance with no redundancy"
        ],
        "answer": "Striping data across disks for performance with no redundancy",
        "category": "Domain Review",
        "explanation": "RAID 0 improves speed but increases the risk of data loss."
      },
      {
        "id": "terraform-assoc-q45",
        "question": "What is 'BIOS Update'?",
        "options": [
          "A software update",
          "Buying a new PC",
          "Cleaning a disk",
          "Updating the firmware on the motherboard"
        ],
        "answer": "Updating the firmware on the motherboard",
        "category": "Domain Review",
        "explanation": "BIOS updates can fix hardware compatibility issues."
      },
      {
        "id": "terraform-assoc-q46",
        "question": "What is a 'Router'?",
        "options": [
          "A device that forwards data packets between computer networks",
          "A hub",
          "A repeater",
          "A switch"
        ],
        "answer": "A device that forwards data packets between computer networks",
        "category": "Domain Review",
        "explanation": "Routers operate at the Network Layer (Layer 3)."
      },
      {
        "id": "terraform-assoc-q47",
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
        "id": "terraform-assoc-q48",
        "question": "What is an 'IP Address'?",
        "options": [
          "A home address",
          "A phone number",
          "A serial number",
          "A unique string of numbers that identifies each computer on a network"
        ],
        "answer": "A unique string of numbers that identifies each computer on a network",
        "category": "Domain Review",
        "explanation": "IP addresses can be static or dynamic."
      },
      {
        "id": "terraform-assoc-q49",
        "question": "What is 'Snapshot' in storage?",
        "options": [
          "A copy of a system or data at a specific point in time",
          "A hardware upgrade",
          "A photograph",
          "A type of storage"
        ],
        "answer": "A copy of a system or data at a specific point in time",
        "category": "Domain Review",
        "explanation": "Snapshots are often used for quick recovery and testing."
      },
      {
        "id": "terraform-assoc-q50",
        "question": "What is 'HDD' (Hard Disk Drive)?",
        "options": [
          "A backup on a CD",
          "A data storage device that uses magnetic storage and rotating disks",
          "A software update",
          "A type of cloud"
        ],
        "answer": "A data storage device that uses magnetic storage and rotating disks",
        "category": "Domain Review",
        "explanation": "HDDs offer larger capacities at a lower cost than SSDs."
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
        "question": "What is 'Classification' in ML?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Predicting a discrete label or category",
          "Sorting things"
        ],
        "answer": "Predicting a discrete label or category",
        "category": "Domain Review",
        "explanation": "Example: Predicting if an email is spam."
      },
      {
        "id": "dp-900-q2",
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
        "id": "dp-900-q3",
        "question": "What is 'Data Cleansing'?",
        "options": [
          "A software manual",
          "A type of code",
          "Identifying and correcting errors or inconsistencies in data",
          "Washing a computer"
        ],
        "answer": "Identifying and correcting errors or inconsistencies in data",
        "category": "Domain Review",
        "explanation": "Cleansing is essential for accurate analysis."
      },
      {
        "id": "dp-900-q4",
        "question": "What is 'Semi-Structured Data'?",
        "options": [
          "A financial report",
          "A partially built house",
          "A type of code",
          "Data that does not reside in a relational database but has organizational properties"
        ],
        "answer": "Data that does not reside in a relational database but has organizational properties",
        "category": "Domain Review",
        "explanation": "Examples include XML and JSON."
      },
      {
        "id": "dp-900-q5",
        "question": "What is 'Unsupervised Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "No teacher",
          "Training a model on unlabeled data to find hidden patterns"
        ],
        "answer": "Training a model on unlabeled data to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Examples include clustering and association."
      },
      {
        "id": "dp-900-q6",
        "question": "What is 'Reinforcement Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Being very strict",
          "Training a model through rewards and penalties"
        ],
        "answer": "Training a model through rewards and penalties",
        "category": "Domain Review",
        "explanation": "RL is used in robotics and game playing."
      },
      {
        "id": "dp-900-q7",
        "question": "What is 'NoSQL'?",
        "options": [
          "A database with no SQL",
          "A financial report",
          "A non-relational database for storing diverse data types",
          "A type of code"
        ],
        "answer": "A non-relational database for storing diverse data types",
        "category": "Domain Review",
        "explanation": "NoSQL databases are often used for big data and real-time web apps."
      },
      {
        "id": "dp-900-q8",
        "question": "What is 'Data Governance'?",
        "options": [
          "A government agency",
          "A security guard",
          "A set of laws",
          "Managing the availability, usability, integrity, and security of data"
        ],
        "answer": "Managing the availability, usability, integrity, and security of data",
        "category": "Domain Review",
        "explanation": "Governance ensures data is accurate and trustworthy."
      },
      {
        "id": "dp-900-q9",
        "question": "What is a 'Data Scientist'?",
        "options": [
          "A hardware engineer",
          "A math teacher",
          "A person who uses scientific methods and data to find insights",
          "A website developer"
        ],
        "answer": "A person who uses scientific methods and data to find insights",
        "category": "Domain Review",
        "explanation": "Data scientists combine skills in statistics, coding, and domain knowledge."
      },
      {
        "id": "dp-900-q10",
        "question": "What is 'Spark' (Apache Spark)?",
        "options": [
          "A fire hazard",
          "A simple app",
          "A type of computer chip",
          "An open-source distributed processing system used for big data workloads"
        ],
        "answer": "An open-source distributed processing system used for big data workloads",
        "category": "Domain Review",
        "explanation": "Spark is much faster than the older MapReduce."
      },
      {
        "id": "dp-900-q11",
        "question": "What is 'Big Data Analytics'?",
        "options": [
          "A software update",
          "A type of cloud",
          "A very large spreadsheet",
          "The process of examining large and varied data sets to find hidden patterns"
        ],
        "answer": "The process of examining large and varied data sets to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Analytics provides insights that can lead to better business decisions."
      },
      {
        "id": "dp-900-q12",
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
        "id": "dp-900-q13",
        "question": "What is 'Data Lake'?",
        "options": [
          "A centralized repository that allows you to store all your structured and unstructured data",
          "A hardware guard",
          "A lake filled with water",
          "A type of storage"
        ],
        "answer": "A centralized repository that allows you to store all your structured and unstructured data",
        "category": "Domain Review",
        "explanation": "Data lakes can store data as-is, without first structuring it."
      },
      {
        "id": "dp-900-q14",
        "question": "What is 'Generative AI'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "AI that can create new content like text, images, or music",
          "AI that generates power"
        ],
        "answer": "AI that can create new content like text, images, or music",
        "category": "Domain Review",
        "explanation": "Examples include ChatGPT and Midjourney."
      },
      {
        "id": "dp-900-q15",
        "question": "What is 'Clustering' in ML?",
        "options": [
          "A group of people",
          "A hardware update",
          "A type of database",
          "Grouping similar data points together"
        ],
        "answer": "Grouping similar data points together",
        "category": "Domain Review",
        "explanation": "Clustering is an unsupervised learning technique."
      },
      {
        "id": "dp-900-q16",
        "question": "What is 'Cloud Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database service built and accessed through a cloud platform",
          "A file in the cloud"
        ],
        "answer": "A database service built and accessed through a cloud platform",
        "category": "Domain Review",
        "explanation": "Cloud databases are highly scalable and managed."
      },
      {
        "id": "dp-900-q17",
        "question": "What is 'Test Data'?",
        "options": [
          "A network protocol",
          "A type of code",
          "A type of exam",
          "The data used to evaluate the performance of an ML model"
        ],
        "answer": "The data used to evaluate the performance of an ML model",
        "category": "Domain Review",
        "explanation": "Test data must be separate from training data."
      },
      {
        "id": "dp-900-q18",
        "question": "What is 'Primary Key' in a database?",
        "options": [
          "A physical key",
          "A secret password",
          "A unique identifier for each record in a table",
          "The most important key"
        ],
        "answer": "A unique identifier for each record in a table",
        "category": "Domain Review",
        "explanation": "The primary key cannot be null and must be unique."
      },
      {
        "id": "dp-900-q19",
        "question": "What is 'Explainable AI' (XAI)?",
        "options": [
          "A book about AI",
          "A software manual",
          "AI systems that can explain their decisions and actions to humans",
          "An AI that speaks"
        ],
        "answer": "AI systems that can explain their decisions and actions to humans",
        "category": "Domain Review",
        "explanation": "XAI is important for trust and accountability."
      },
      {
        "id": "dp-900-q20",
        "question": "What is 'ETL'?",
        "options": [
          "Electronic Transfer Ledger",
          "Email, Transfer, Link",
          "Extra Tool Link",
          "Extract, Transform, Load"
        ],
        "answer": "Extract, Transform, Load",
        "category": "Domain Review",
        "explanation": "ETL is the process of moving data from source systems to a data warehouse."
      },
      {
        "id": "dp-900-q21",
        "question": "What is 'Predictive Analytics'?",
        "options": [
          "A financial report",
          "A type of database",
          "Guessing the future",
          "Using data, statistics, and ML to identify the likelihood of future outcomes"
        ],
        "answer": "Using data, statistics, and ML to identify the likelihood of future outcomes",
        "category": "Domain Review",
        "explanation": "Predictive models help in decision-making."
      },
      {
        "id": "dp-900-q22",
        "question": "What is 'Regression' in ML?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Going backwards",
          "Predicting a continuous numerical value"
        ],
        "answer": "Predicting a continuous numerical value",
        "category": "Domain Review",
        "explanation": "Example: Predicting a house price."
      },
      {
        "id": "dp-900-q23",
        "question": "What is an 'Artificial Neural Network'?",
        "options": [
          "A computing system inspired by biological neural networks",
          "A hardware guard",
          "A robot's brain",
          "A type of network cable"
        ],
        "answer": "A computing system inspired by biological neural networks",
        "category": "Domain Review",
        "explanation": "Neural networks are the foundation of deep learning."
      },
      {
        "id": "dp-900-q24",
        "question": "What is 'Business Intelligence' (BI)?",
        "options": [
          "A financial report",
          "A type of cloud",
          "Being very smart",
          "Strategies and technologies used for data analysis of business info"
        ],
        "answer": "Strategies and technologies used for data analysis of business info",
        "category": "Domain Review",
        "explanation": "BI provides historical, current, and predictive views of operations."
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
        "question": "What is 'Unstructured Data'?",
        "options": [
          "A financial report",
          "A messy room",
          "A type of code",
          "Data that does not have a predefined model or organization"
        ],
        "answer": "Data that does not have a predefined model or organization",
        "category": "Domain Review",
        "explanation": "Examples include text, images, and videos."
      },
      {
        "id": "dp-900-q27",
        "question": "What is 'Deep Learning'?",
        "options": [
          "A hardware update",
          "A subset of ML based on artificial neural networks",
          "A type of database",
          "Studying very hard"
        ],
        "answer": "A subset of ML based on artificial neural networks",
        "category": "Domain Review",
        "explanation": "Deep learning is inspired by the structure and function of the human brain."
      },
      {
        "id": "dp-900-q28",
        "question": "What is 'Training Data'?",
        "options": [
          "A gym for computers",
          "A network protocol",
          "A type of code",
          "The data used to train an ML model"
        ],
        "answer": "The data used to train an ML model",
        "category": "Domain Review",
        "explanation": "Quality and quantity of training data are critical."
      },
      {
        "id": "dp-900-q29",
        "question": "What is 'Data Warehouse'?",
        "options": [
          "A building for servers",
          "A hardware guard",
          "A system used for reporting and data analysis",
          "A type of storage"
        ],
        "answer": "A system used for reporting and data analysis",
        "category": "Domain Review",
        "explanation": "Warehouses consolidate data from multiple sources."
      },
      {
        "id": "dp-900-q30",
        "question": "What is 'Natural Language Processing' (NLP)?",
        "options": [
          "A network protocol",
          "A type of code",
          "Speaking very fast",
          "The ability of computers to understand and process human language"
        ],
        "answer": "The ability of computers to understand and process human language",
        "category": "Domain Review",
        "explanation": "NLP is used in translation, sentiment analysis, and chatbots."
      },
      {
        "id": "dp-900-q31",
        "question": "What is 'Data Mining'?",
        "options": [
          "A software update",
          "A type of database",
          "Digging for gold",
          "Discovering patterns and knowledge from large amounts of data"
        ],
        "answer": "Discovering patterns and knowledge from large amounts of data",
        "category": "Domain Review",
        "explanation": "Data mining uses ML, statistics, and database systems."
      },
      {
        "id": "dp-900-q32",
        "question": "What is 'Data Integration'?",
        "options": [
          "A network protocol",
          "A type of code",
          "Combining data from different sources into a single, unified view",
          "Putting things together"
        ],
        "answer": "Combining data from different sources into a single, unified view",
        "category": "Domain Review",
        "explanation": "Integration is a major challenge in large organizations."
      },
      {
        "id": "dp-900-q33",
        "question": "What is 'Foreign Key' in a database?",
        "options": [
          "A field in one table that uniquely identifies a row of another table",
          "A hardware standard",
          "A key from another country",
          "A type of code"
        ],
        "answer": "A field in one table that uniquely identifies a row of another table",
        "category": "Domain Review",
        "explanation": "Foreign keys create relationships between tables."
      },
      {
        "id": "dp-900-q34",
        "question": "What is 'Overfitting'?",
        "options": [
          "A hardware failure",
          "A software bug",
          "Wearing small clothes",
          "When a model learns the training data too well but fails on new data"
        ],
        "answer": "When a model learns the training data too well but fails on new data",
        "category": "Domain Review",
        "explanation": "Overfitted models lack generalizability."
      },
      {
        "id": "dp-900-q35",
        "question": "What is 'Structured Data'?",
        "options": [
          "A financial report",
          "A type of code",
          "A well-built house",
          "Data that adheres to a predefined schema or model"
        ],
        "answer": "Data that adheres to a predefined schema or model",
        "category": "Domain Review",
        "explanation": "Structured data is easily searchable (e.g., in a database)."
      },
      {
        "id": "dp-900-q36",
        "question": "What is 'Database Index'?",
        "options": [
          "A data structure that improves the speed of data retrieval",
          "A list of files",
          "A software manual",
          "A type of storage"
        ],
        "answer": "A data structure that improves the speed of data retrieval",
        "category": "Domain Review",
        "explanation": "Indexes make queries much faster but slow down writes."
      },
      {
        "id": "dp-900-q37",
        "question": "What is an 'Algorithm'?",
        "options": [
          "A computer game",
          "A hardware standard",
          "A set of rules or instructions to be followed in calculations",
          "A type of music"
        ],
        "answer": "A set of rules or instructions to be followed in calculations",
        "category": "Domain Review",
        "explanation": "Algorithms are the foundation of computer programs and ML models."
      },
      {
        "id": "dp-900-q38",
        "question": "What is 'Normalizaton' in a database?",
        "options": [
          "A hardware standard",
          "A type of code",
          "Being very normal",
          "Organizing data to reduce redundancy and improve integrity"
        ],
        "answer": "Organizing data to reduce redundancy and improve integrity",
        "category": "Domain Review",
        "explanation": "Normalization involves dividing large tables into smaller ones."
      },
      {
        "id": "dp-900-q39",
        "question": "What is 'Database Management System' (DBMS)?",
        "options": [
          "A phone book",
          "A software manual",
          "A type of storage",
          "Software that interacts with end users, applications, and the database"
        ],
        "answer": "Software that interacts with end users, applications, and the database",
        "category": "Domain Review",
        "explanation": "Examples include MySQL, PostgreSQL, and Oracle Database."
      },
      {
        "id": "dp-900-q40",
        "question": "What is 'Data Mart'?",
        "options": [
          "A small-scale data warehouse focused on a single functional area",
          "A software update",
          "A store for data",
          "A type of storage"
        ],
        "answer": "A small-scale data warehouse focused on a single functional area",
        "category": "Domain Review",
        "explanation": "Data marts are often used by a specific department (e.g., Finance)."
      },
      {
        "id": "dp-900-q41",
        "question": "What is 'Supervised Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Having a teacher",
          "Training a model on labeled data"
        ],
        "answer": "Training a model on labeled data",
        "category": "Domain Review",
        "explanation": "The model learns to map inputs to the correct outputs."
      },
      {
        "id": "dp-900-q42",
        "question": "What is 'Data Visualization'?",
        "options": [
          "A graphical representation of information and data",
          "A network cable",
          "A type of monitor",
          "Looking at data"
        ],
        "answer": "A graphical representation of information and data",
        "category": "Domain Review",
        "explanation": "Visualization helps in understanding trends, outliers, and patterns."
      },
      {
        "id": "dp-900-q43",
        "question": "What is 'Hadoop'?",
        "options": [
          "A hardware manufacturer",
          "A type of computer",
          "A website developer",
          "An open-source framework for distributed storage and processing of big data"
        ],
        "answer": "An open-source framework for distributed storage and processing of big data",
        "category": "Domain Review",
        "explanation": "Hadoop is a core technology in the big data ecosystem."
      },
      {
        "id": "dp-900-q44",
        "question": "What is 'Bias' in AI?",
        "options": [
          "A network protocol",
          "A strong opinion",
          "A type of computer code",
          "When a model produces systematically prejudiced results"
        ],
        "answer": "When a model produces systematically prejudiced results",
        "category": "Domain Review",
        "explanation": "Bias can arise from flawed training data or algorithms."
      },
      {
        "id": "dp-900-q45",
        "question": "What is 'Denormalization'?",
        "options": [
          "A hardware standard",
          "A type of code",
          "Adding redundant data to improve read performance",
          "Being very strange"
        ],
        "answer": "Adding redundant data to improve read performance",
        "category": "Domain Review",
        "explanation": "Denormalization is often used in data warehouses."
      },
      {
        "id": "dp-900-q46",
        "question": "What is 'Model' in ML?",
        "options": [
          "A mathematical representation of a real-world process",
          "A software manual",
          "A tiny car",
          "A type of clothing"
        ],
        "answer": "A mathematical representation of a real-world process",
        "category": "Domain Review",
        "explanation": "A model is 'trained' on data to make predictions."
      },
      {
        "id": "dp-900-q47",
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
        "id": "dp-900-q48",
        "question": "What is 'Underfitting'?",
        "options": [
          "A hardware failure",
          "A software bug",
          "Wearing large clothes",
          "When a model is too simple to learn the patterns in data"
        ],
        "answer": "When a model is too simple to learn the patterns in data",
        "category": "Domain Review",
        "explanation": "Underfitted models have poor performance on both training and test data."
      },
      {
        "id": "dp-900-q49",
        "question": "What is 'Computer Vision'?",
        "options": [
          "A hardware guard",
          "A type of monitor",
          "The ability of computers to gain understanding from digital images or videos",
          "Wearing glasses"
        ],
        "answer": "The ability of computers to gain understanding from digital images or videos",
        "category": "Domain Review",
        "explanation": "Computer vision is used in facial recognition and autonomous vehicles."
      },
      {
        "id": "dp-900-q50",
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
        "question": "What is 'Clustering' in ML?",
        "options": [
          "A group of people",
          "A hardware update",
          "A type of database",
          "Grouping similar data points together"
        ],
        "answer": "Grouping similar data points together",
        "category": "Domain Review",
        "explanation": "Clustering is an unsupervised learning technique."
      },
      {
        "id": "ai-900-q2",
        "question": "What is 'Regression' in ML?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Going backwards",
          "Predicting a continuous numerical value"
        ],
        "answer": "Predicting a continuous numerical value",
        "category": "Domain Review",
        "explanation": "Example: Predicting a house price."
      },
      {
        "id": "ai-900-q3",
        "question": "What is 'Generative AI'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "AI that can create new content like text, images, or music",
          "AI that generates power"
        ],
        "answer": "AI that can create new content like text, images, or music",
        "category": "Domain Review",
        "explanation": "Examples include ChatGPT and Midjourney."
      },
      {
        "id": "ai-900-q4",
        "question": "What is 'Data Mining'?",
        "options": [
          "A software update",
          "A type of database",
          "Digging for gold",
          "Discovering patterns and knowledge from large amounts of data"
        ],
        "answer": "Discovering patterns and knowledge from large amounts of data",
        "category": "Domain Review",
        "explanation": "Data mining uses ML, statistics, and database systems."
      },
      {
        "id": "ai-900-q5",
        "question": "What is 'Deep Learning'?",
        "options": [
          "A hardware update",
          "A subset of ML based on artificial neural networks",
          "A type of database",
          "Studying very hard"
        ],
        "answer": "A subset of ML based on artificial neural networks",
        "category": "Domain Review",
        "explanation": "Deep learning is inspired by the structure and function of the human brain."
      },
      {
        "id": "ai-900-q6",
        "question": "What is 'NoSQL'?",
        "options": [
          "A database with no SQL",
          "A financial report",
          "A non-relational database for storing diverse data types",
          "A type of code"
        ],
        "answer": "A non-relational database for storing diverse data types",
        "category": "Domain Review",
        "explanation": "NoSQL databases are often used for big data and real-time web apps."
      },
      {
        "id": "ai-900-q7",
        "question": "What is 'Predictive Analytics'?",
        "options": [
          "A financial report",
          "A type of database",
          "Guessing the future",
          "Using data, statistics, and ML to identify the likelihood of future outcomes"
        ],
        "answer": "Using data, statistics, and ML to identify the likelihood of future outcomes",
        "category": "Domain Review",
        "explanation": "Predictive models help in decision-making."
      },
      {
        "id": "ai-900-q8",
        "question": "What is 'ETL'?",
        "options": [
          "Electronic Transfer Ledger",
          "Email, Transfer, Link",
          "Extra Tool Link",
          "Extract, Transform, Load"
        ],
        "answer": "Extract, Transform, Load",
        "category": "Domain Review",
        "explanation": "ETL is the process of moving data from source systems to a data warehouse."
      },
      {
        "id": "ai-900-q9",
        "question": "What is 'Test Data'?",
        "options": [
          "A network protocol",
          "A type of code",
          "A type of exam",
          "The data used to evaluate the performance of an ML model"
        ],
        "answer": "The data used to evaluate the performance of an ML model",
        "category": "Domain Review",
        "explanation": "Test data must be separate from training data."
      },
      {
        "id": "ai-900-q10",
        "question": "What is 'Data Warehouse'?",
        "options": [
          "A building for servers",
          "A hardware guard",
          "A system used for reporting and data analysis",
          "A type of storage"
        ],
        "answer": "A system used for reporting and data analysis",
        "category": "Domain Review",
        "explanation": "Warehouses consolidate data from multiple sources."
      },
      {
        "id": "ai-900-q11",
        "question": "What is 'Bias' in AI?",
        "options": [
          "A network protocol",
          "A strong opinion",
          "A type of computer code",
          "When a model produces systematically prejudiced results"
        ],
        "answer": "When a model produces systematically prejudiced results",
        "category": "Domain Review",
        "explanation": "Bias can arise from flawed training data or algorithms."
      },
      {
        "id": "ai-900-q12",
        "question": "What is 'Semi-Structured Data'?",
        "options": [
          "A financial report",
          "A partially built house",
          "A type of code",
          "Data that does not reside in a relational database but has organizational properties"
        ],
        "answer": "Data that does not reside in a relational database but has organizational properties",
        "category": "Domain Review",
        "explanation": "Examples include XML and JSON."
      },
      {
        "id": "ai-900-q13",
        "question": "What is 'Unstructured Data'?",
        "options": [
          "A financial report",
          "A messy room",
          "A type of code",
          "Data that does not have a predefined model or organization"
        ],
        "answer": "Data that does not have a predefined model or organization",
        "category": "Domain Review",
        "explanation": "Examples include text, images, and videos."
      },
      {
        "id": "ai-900-q14",
        "question": "What is 'Big Data Analytics'?",
        "options": [
          "A software update",
          "A type of cloud",
          "A very large spreadsheet",
          "The process of examining large and varied data sets to find hidden patterns"
        ],
        "answer": "The process of examining large and varied data sets to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Analytics provides insights that can lead to better business decisions."
      },
      {
        "id": "ai-900-q15",
        "question": "What is 'Model' in ML?",
        "options": [
          "A mathematical representation of a real-world process",
          "A software manual",
          "A tiny car",
          "A type of clothing"
        ],
        "answer": "A mathematical representation of a real-world process",
        "category": "Domain Review",
        "explanation": "A model is 'trained' on data to make predictions."
      },
      {
        "id": "ai-900-q16",
        "question": "What is 'Foreign Key' in a database?",
        "options": [
          "A field in one table that uniquely identifies a row of another table",
          "A hardware standard",
          "A key from another country",
          "A type of code"
        ],
        "answer": "A field in one table that uniquely identifies a row of another table",
        "category": "Domain Review",
        "explanation": "Foreign keys create relationships between tables."
      },
      {
        "id": "ai-900-q17",
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
        "id": "ai-900-q18",
        "question": "What is 'Data Cleansing'?",
        "options": [
          "A software manual",
          "A type of code",
          "Identifying and correcting errors or inconsistencies in data",
          "Washing a computer"
        ],
        "answer": "Identifying and correcting errors or inconsistencies in data",
        "category": "Domain Review",
        "explanation": "Cleansing is essential for accurate analysis."
      },
      {
        "id": "ai-900-q19",
        "question": "What is 'Training Data'?",
        "options": [
          "A gym for computers",
          "A network protocol",
          "A type of code",
          "The data used to train an ML model"
        ],
        "answer": "The data used to train an ML model",
        "category": "Domain Review",
        "explanation": "Quality and quantity of training data are critical."
      },
      {
        "id": "ai-900-q20",
        "question": "What is 'Business Intelligence' (BI)?",
        "options": [
          "A financial report",
          "A type of cloud",
          "Being very smart",
          "Strategies and technologies used for data analysis of business info"
        ],
        "answer": "Strategies and technologies used for data analysis of business info",
        "category": "Domain Review",
        "explanation": "BI provides historical, current, and predictive views of operations."
      },
      {
        "id": "ai-900-q21",
        "question": "What is 'Data Mart'?",
        "options": [
          "A small-scale data warehouse focused on a single functional area",
          "A software update",
          "A store for data",
          "A type of storage"
        ],
        "answer": "A small-scale data warehouse focused on a single functional area",
        "category": "Domain Review",
        "explanation": "Data marts are often used by a specific department (e.g., Finance)."
      },
      {
        "id": "ai-900-q22",
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
        "id": "ai-900-q23",
        "question": "What is 'Database Index'?",
        "options": [
          "A data structure that improves the speed of data retrieval",
          "A list of files",
          "A software manual",
          "A type of storage"
        ],
        "answer": "A data structure that improves the speed of data retrieval",
        "category": "Domain Review",
        "explanation": "Indexes make queries much faster but slow down writes."
      },
      {
        "id": "ai-900-q24",
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
        "question": "What is 'Data Governance'?",
        "options": [
          "A government agency",
          "A security guard",
          "A set of laws",
          "Managing the availability, usability, integrity, and security of data"
        ],
        "answer": "Managing the availability, usability, integrity, and security of data",
        "category": "Domain Review",
        "explanation": "Governance ensures data is accurate and trustworthy."
      },
      {
        "id": "ai-900-q27",
        "question": "What is 'Data Lake'?",
        "options": [
          "A centralized repository that allows you to store all your structured and unstructured data",
          "A hardware guard",
          "A lake filled with water",
          "A type of storage"
        ],
        "answer": "A centralized repository that allows you to store all your structured and unstructured data",
        "category": "Domain Review",
        "explanation": "Data lakes can store data as-is, without first structuring it."
      },
      {
        "id": "ai-900-q28",
        "question": "What is 'Database Management System' (DBMS)?",
        "options": [
          "A phone book",
          "A software manual",
          "A type of storage",
          "Software that interacts with end users, applications, and the database"
        ],
        "answer": "Software that interacts with end users, applications, and the database",
        "category": "Domain Review",
        "explanation": "Examples include MySQL, PostgreSQL, and Oracle Database."
      },
      {
        "id": "ai-900-q29",
        "question": "What is 'Reinforcement Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Being very strict",
          "Training a model through rewards and penalties"
        ],
        "answer": "Training a model through rewards and penalties",
        "category": "Domain Review",
        "explanation": "RL is used in robotics and game playing."
      },
      {
        "id": "ai-900-q30",
        "question": "What is 'Denormalization'?",
        "options": [
          "A hardware standard",
          "A type of code",
          "Adding redundant data to improve read performance",
          "Being very strange"
        ],
        "answer": "Adding redundant data to improve read performance",
        "category": "Domain Review",
        "explanation": "Denormalization is often used in data warehouses."
      },
      {
        "id": "ai-900-q31",
        "question": "What is 'Natural Language Processing' (NLP)?",
        "options": [
          "A network protocol",
          "A type of code",
          "Speaking very fast",
          "The ability of computers to understand and process human language"
        ],
        "answer": "The ability of computers to understand and process human language",
        "category": "Domain Review",
        "explanation": "NLP is used in translation, sentiment analysis, and chatbots."
      },
      {
        "id": "ai-900-q32",
        "question": "What is 'Unsupervised Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "No teacher",
          "Training a model on unlabeled data to find hidden patterns"
        ],
        "answer": "Training a model on unlabeled data to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Examples include clustering and association."
      },
      {
        "id": "ai-900-q33",
        "question": "What is 'Supervised Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Having a teacher",
          "Training a model on labeled data"
        ],
        "answer": "Training a model on labeled data",
        "category": "Domain Review",
        "explanation": "The model learns to map inputs to the correct outputs."
      },
      {
        "id": "ai-900-q34",
        "question": "What is an 'Algorithm'?",
        "options": [
          "A computer game",
          "A hardware standard",
          "A set of rules or instructions to be followed in calculations",
          "A type of music"
        ],
        "answer": "A set of rules or instructions to be followed in calculations",
        "category": "Domain Review",
        "explanation": "Algorithms are the foundation of computer programs and ML models."
      },
      {
        "id": "ai-900-q35",
        "question": "What is 'Data Integration'?",
        "options": [
          "A network protocol",
          "A type of code",
          "Combining data from different sources into a single, unified view",
          "Putting things together"
        ],
        "answer": "Combining data from different sources into a single, unified view",
        "category": "Domain Review",
        "explanation": "Integration is a major challenge in large organizations."
      },
      {
        "id": "ai-900-q36",
        "question": "What is 'Primary Key' in a database?",
        "options": [
          "A physical key",
          "A secret password",
          "A unique identifier for each record in a table",
          "The most important key"
        ],
        "answer": "A unique identifier for each record in a table",
        "category": "Domain Review",
        "explanation": "The primary key cannot be null and must be unique."
      },
      {
        "id": "ai-900-q37",
        "question": "What is 'Cloud Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database service built and accessed through a cloud platform",
          "A file in the cloud"
        ],
        "answer": "A database service built and accessed through a cloud platform",
        "category": "Domain Review",
        "explanation": "Cloud databases are highly scalable and managed."
      },
      {
        "id": "ai-900-q38",
        "question": "What is 'Hadoop'?",
        "options": [
          "A hardware manufacturer",
          "A type of computer",
          "A website developer",
          "An open-source framework for distributed storage and processing of big data"
        ],
        "answer": "An open-source framework for distributed storage and processing of big data",
        "category": "Domain Review",
        "explanation": "Hadoop is a core technology in the big data ecosystem."
      },
      {
        "id": "ai-900-q39",
        "question": "What is 'Data Visualization'?",
        "options": [
          "A graphical representation of information and data",
          "A network cable",
          "A type of monitor",
          "Looking at data"
        ],
        "answer": "A graphical representation of information and data",
        "category": "Domain Review",
        "explanation": "Visualization helps in understanding trends, outliers, and patterns."
      },
      {
        "id": "ai-900-q40",
        "question": "What is 'Structured Data'?",
        "options": [
          "A financial report",
          "A type of code",
          "A well-built house",
          "Data that adheres to a predefined schema or model"
        ],
        "answer": "Data that adheres to a predefined schema or model",
        "category": "Domain Review",
        "explanation": "Structured data is easily searchable (e.g., in a database)."
      },
      {
        "id": "ai-900-q41",
        "question": "What is 'Computer Vision'?",
        "options": [
          "A hardware guard",
          "A type of monitor",
          "The ability of computers to gain understanding from digital images or videos",
          "Wearing glasses"
        ],
        "answer": "The ability of computers to gain understanding from digital images or videos",
        "category": "Domain Review",
        "explanation": "Computer vision is used in facial recognition and autonomous vehicles."
      },
      {
        "id": "ai-900-q42",
        "question": "What is an 'Artificial Neural Network'?",
        "options": [
          "A computing system inspired by biological neural networks",
          "A hardware guard",
          "A robot's brain",
          "A type of network cable"
        ],
        "answer": "A computing system inspired by biological neural networks",
        "category": "Domain Review",
        "explanation": "Neural networks are the foundation of deep learning."
      },
      {
        "id": "ai-900-q43",
        "question": "What is 'Classification' in ML?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Predicting a discrete label or category",
          "Sorting things"
        ],
        "answer": "Predicting a discrete label or category",
        "category": "Domain Review",
        "explanation": "Example: Predicting if an email is spam."
      },
      {
        "id": "ai-900-q44",
        "question": "What is a 'Data Scientist'?",
        "options": [
          "A hardware engineer",
          "A math teacher",
          "A person who uses scientific methods and data to find insights",
          "A website developer"
        ],
        "answer": "A person who uses scientific methods and data to find insights",
        "category": "Domain Review",
        "explanation": "Data scientists combine skills in statistics, coding, and domain knowledge."
      },
      {
        "id": "ai-900-q45",
        "question": "What is 'Explainable AI' (XAI)?",
        "options": [
          "A book about AI",
          "A software manual",
          "AI systems that can explain their decisions and actions to humans",
          "An AI that speaks"
        ],
        "answer": "AI systems that can explain their decisions and actions to humans",
        "category": "Domain Review",
        "explanation": "XAI is important for trust and accountability."
      },
      {
        "id": "ai-900-q46",
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
        "id": "ai-900-q47",
        "question": "What is 'Spark' (Apache Spark)?",
        "options": [
          "A fire hazard",
          "A simple app",
          "A type of computer chip",
          "An open-source distributed processing system used for big data workloads"
        ],
        "answer": "An open-source distributed processing system used for big data workloads",
        "category": "Domain Review",
        "explanation": "Spark is much faster than the older MapReduce."
      },
      {
        "id": "ai-900-q48",
        "question": "What is 'Overfitting'?",
        "options": [
          "A hardware failure",
          "A software bug",
          "Wearing small clothes",
          "When a model learns the training data too well but fails on new data"
        ],
        "answer": "When a model learns the training data too well but fails on new data",
        "category": "Domain Review",
        "explanation": "Overfitted models lack generalizability."
      },
      {
        "id": "ai-900-q49",
        "question": "What is 'Underfitting'?",
        "options": [
          "A hardware failure",
          "A software bug",
          "Wearing large clothes",
          "When a model is too simple to learn the patterns in data"
        ],
        "answer": "When a model is too simple to learn the patterns in data",
        "category": "Domain Review",
        "explanation": "Underfitted models have poor performance on both training and test data."
      },
      {
        "id": "ai-900-q50",
        "question": "What is 'Normalizaton' in a database?",
        "options": [
          "A hardware standard",
          "A type of code",
          "Being very normal",
          "Organizing data to reduce redundancy and improve integrity"
        ],
        "answer": "Organizing data to reduce redundancy and improve integrity",
        "category": "Domain Review",
        "explanation": "Normalization involves dividing large tables into smaller ones."
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
        "question": "What is 'Business Intelligence' (BI)?",
        "options": [
          "A financial report",
          "A type of cloud",
          "Being very smart",
          "Strategies and technologies used for data analysis of business info"
        ],
        "answer": "Strategies and technologies used for data analysis of business info",
        "category": "Domain Review",
        "explanation": "BI provides historical, current, and predictive views of operations."
      },
      {
        "id": "pl-900-q2",
        "question": "What is 'Semi-Structured Data'?",
        "options": [
          "A financial report",
          "A partially built house",
          "A type of code",
          "Data that does not reside in a relational database but has organizational properties"
        ],
        "answer": "Data that does not reside in a relational database but has organizational properties",
        "category": "Domain Review",
        "explanation": "Examples include XML and JSON."
      },
      {
        "id": "pl-900-q3",
        "question": "What is 'Predictive Analytics'?",
        "options": [
          "A financial report",
          "A type of database",
          "Guessing the future",
          "Using data, statistics, and ML to identify the likelihood of future outcomes"
        ],
        "answer": "Using data, statistics, and ML to identify the likelihood of future outcomes",
        "category": "Domain Review",
        "explanation": "Predictive models help in decision-making."
      },
      {
        "id": "pl-900-q4",
        "question": "What is 'Primary Key' in a database?",
        "options": [
          "A physical key",
          "A secret password",
          "A unique identifier for each record in a table",
          "The most important key"
        ],
        "answer": "A unique identifier for each record in a table",
        "category": "Domain Review",
        "explanation": "The primary key cannot be null and must be unique."
      },
      {
        "id": "pl-900-q5",
        "question": "What is 'Generative AI'?",
        "options": [
          "A simple app",
          "A type of computer chip",
          "AI that can create new content like text, images, or music",
          "AI that generates power"
        ],
        "answer": "AI that can create new content like text, images, or music",
        "category": "Domain Review",
        "explanation": "Examples include ChatGPT and Midjourney."
      },
      {
        "id": "pl-900-q6",
        "question": "What is 'Database Management System' (DBMS)?",
        "options": [
          "A phone book",
          "A software manual",
          "A type of storage",
          "Software that interacts with end users, applications, and the database"
        ],
        "answer": "Software that interacts with end users, applications, and the database",
        "category": "Domain Review",
        "explanation": "Examples include MySQL, PostgreSQL, and Oracle Database."
      },
      {
        "id": "pl-900-q7",
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
        "id": "pl-900-q8",
        "question": "What is 'Supervised Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Having a teacher",
          "Training a model on labeled data"
        ],
        "answer": "Training a model on labeled data",
        "category": "Domain Review",
        "explanation": "The model learns to map inputs to the correct outputs."
      },
      {
        "id": "pl-900-q9",
        "question": "What is 'Bias' in AI?",
        "options": [
          "A network protocol",
          "A strong opinion",
          "A type of computer code",
          "When a model produces systematically prejudiced results"
        ],
        "answer": "When a model produces systematically prejudiced results",
        "category": "Domain Review",
        "explanation": "Bias can arise from flawed training data or algorithms."
      },
      {
        "id": "pl-900-q10",
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
        "id": "pl-900-q11",
        "question": "What is 'Computer Vision'?",
        "options": [
          "A hardware guard",
          "A type of monitor",
          "The ability of computers to gain understanding from digital images or videos",
          "Wearing glasses"
        ],
        "answer": "The ability of computers to gain understanding from digital images or videos",
        "category": "Domain Review",
        "explanation": "Computer vision is used in facial recognition and autonomous vehicles."
      },
      {
        "id": "pl-900-q12",
        "question": "What is 'Classification' in ML?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Predicting a discrete label or category",
          "Sorting things"
        ],
        "answer": "Predicting a discrete label or category",
        "category": "Domain Review",
        "explanation": "Example: Predicting if an email is spam."
      },
      {
        "id": "pl-900-q13",
        "question": "What is 'Underfitting'?",
        "options": [
          "A hardware failure",
          "A software bug",
          "Wearing large clothes",
          "When a model is too simple to learn the patterns in data"
        ],
        "answer": "When a model is too simple to learn the patterns in data",
        "category": "Domain Review",
        "explanation": "Underfitted models have poor performance on both training and test data."
      },
      {
        "id": "pl-900-q14",
        "question": "What is 'Structured Data'?",
        "options": [
          "A financial report",
          "A type of code",
          "A well-built house",
          "Data that adheres to a predefined schema or model"
        ],
        "answer": "Data that adheres to a predefined schema or model",
        "category": "Domain Review",
        "explanation": "Structured data is easily searchable (e.g., in a database)."
      },
      {
        "id": "pl-900-q15",
        "question": "What is an 'Algorithm'?",
        "options": [
          "A computer game",
          "A hardware standard",
          "A set of rules or instructions to be followed in calculations",
          "A type of music"
        ],
        "answer": "A set of rules or instructions to be followed in calculations",
        "category": "Domain Review",
        "explanation": "Algorithms are the foundation of computer programs and ML models."
      },
      {
        "id": "pl-900-q16",
        "question": "What is 'Data Mining'?",
        "options": [
          "A software update",
          "A type of database",
          "Digging for gold",
          "Discovering patterns and knowledge from large amounts of data"
        ],
        "answer": "Discovering patterns and knowledge from large amounts of data",
        "category": "Domain Review",
        "explanation": "Data mining uses ML, statistics, and database systems."
      },
      {
        "id": "pl-900-q17",
        "question": "What is 'ETL'?",
        "options": [
          "Electronic Transfer Ledger",
          "Email, Transfer, Link",
          "Extra Tool Link",
          "Extract, Transform, Load"
        ],
        "answer": "Extract, Transform, Load",
        "category": "Domain Review",
        "explanation": "ETL is the process of moving data from source systems to a data warehouse."
      },
      {
        "id": "pl-900-q18",
        "question": "What is 'Unstructured Data'?",
        "options": [
          "A financial report",
          "A messy room",
          "A type of code",
          "Data that does not have a predefined model or organization"
        ],
        "answer": "Data that does not have a predefined model or organization",
        "category": "Domain Review",
        "explanation": "Examples include text, images, and videos."
      },
      {
        "id": "pl-900-q19",
        "question": "What is 'Training Data'?",
        "options": [
          "A gym for computers",
          "A network protocol",
          "A type of code",
          "The data used to train an ML model"
        ],
        "answer": "The data used to train an ML model",
        "category": "Domain Review",
        "explanation": "Quality and quantity of training data are critical."
      },
      {
        "id": "pl-900-q20",
        "question": "What is 'Hadoop'?",
        "options": [
          "A hardware manufacturer",
          "A type of computer",
          "A website developer",
          "An open-source framework for distributed storage and processing of big data"
        ],
        "answer": "An open-source framework for distributed storage and processing of big data",
        "category": "Domain Review",
        "explanation": "Hadoop is a core technology in the big data ecosystem."
      },
      {
        "id": "pl-900-q21",
        "question": "What is 'Data Integration'?",
        "options": [
          "A network protocol",
          "A type of code",
          "Combining data from different sources into a single, unified view",
          "Putting things together"
        ],
        "answer": "Combining data from different sources into a single, unified view",
        "category": "Domain Review",
        "explanation": "Integration is a major challenge in large organizations."
      },
      {
        "id": "pl-900-q22",
        "question": "What is a 'Data Scientist'?",
        "options": [
          "A hardware engineer",
          "A math teacher",
          "A person who uses scientific methods and data to find insights",
          "A website developer"
        ],
        "answer": "A person who uses scientific methods and data to find insights",
        "category": "Domain Review",
        "explanation": "Data scientists combine skills in statistics, coding, and domain knowledge."
      },
      {
        "id": "pl-900-q23",
        "question": "What is 'Explainable AI' (XAI)?",
        "options": [
          "A book about AI",
          "A software manual",
          "AI systems that can explain their decisions and actions to humans",
          "An AI that speaks"
        ],
        "answer": "AI systems that can explain their decisions and actions to humans",
        "category": "Domain Review",
        "explanation": "XAI is important for trust and accountability."
      },
      {
        "id": "pl-900-q24",
        "question": "What is 'Spark' (Apache Spark)?",
        "options": [
          "A fire hazard",
          "A simple app",
          "A type of computer chip",
          "An open-source distributed processing system used for big data workloads"
        ],
        "answer": "An open-source distributed processing system used for big data workloads",
        "category": "Domain Review",
        "explanation": "Spark is much faster than the older MapReduce."
      },
      {
        "id": "pl-900-q25",
        "question": "What is 'Cloud Database'?",
        "options": [
          "A database for everyone",
          "A database on a USB",
          "A database service built and accessed through a cloud platform",
          "A file in the cloud"
        ],
        "answer": "A database service built and accessed through a cloud platform",
        "category": "Domain Review",
        "explanation": "Cloud databases are highly scalable and managed."
      },
      {
        "id": "pl-900-q26",
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
        "id": "pl-900-q27",
        "question": "What is 'Database Index'?",
        "options": [
          "A data structure that improves the speed of data retrieval",
          "A list of files",
          "A software manual",
          "A type of storage"
        ],
        "answer": "A data structure that improves the speed of data retrieval",
        "category": "Domain Review",
        "explanation": "Indexes make queries much faster but slow down writes."
      },
      {
        "id": "pl-900-q28",
        "question": "What is 'Data Lake'?",
        "options": [
          "A centralized repository that allows you to store all your structured and unstructured data",
          "A hardware guard",
          "A lake filled with water",
          "A type of storage"
        ],
        "answer": "A centralized repository that allows you to store all your structured and unstructured data",
        "category": "Domain Review",
        "explanation": "Data lakes can store data as-is, without first structuring it."
      },
      {
        "id": "pl-900-q29",
        "question": "What is 'Reinforcement Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Being very strict",
          "Training a model through rewards and penalties"
        ],
        "answer": "Training a model through rewards and penalties",
        "category": "Domain Review",
        "explanation": "RL is used in robotics and game playing."
      },
      {
        "id": "pl-900-q30",
        "question": "What is 'Data Visualization'?",
        "options": [
          "A graphical representation of information and data",
          "A network cable",
          "A type of monitor",
          "Looking at data"
        ],
        "answer": "A graphical representation of information and data",
        "category": "Domain Review",
        "explanation": "Visualization helps in understanding trends, outliers, and patterns."
      },
      {
        "id": "pl-900-q31",
        "question": "What is 'Unsupervised Learning'?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "No teacher",
          "Training a model on unlabeled data to find hidden patterns"
        ],
        "answer": "Training a model on unlabeled data to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Examples include clustering and association."
      },
      {
        "id": "pl-900-q32",
        "question": "What is 'Test Data'?",
        "options": [
          "A network protocol",
          "A type of code",
          "A type of exam",
          "The data used to evaluate the performance of an ML model"
        ],
        "answer": "The data used to evaluate the performance of an ML model",
        "category": "Domain Review",
        "explanation": "Test data must be separate from training data."
      },
      {
        "id": "pl-900-q33",
        "question": "What is 'Regression' in ML?",
        "options": [
          "A network protocol",
          "A type of computer code",
          "Going backwards",
          "Predicting a continuous numerical value"
        ],
        "answer": "Predicting a continuous numerical value",
        "category": "Domain Review",
        "explanation": "Example: Predicting a house price."
      },
      {
        "id": "pl-900-q34",
        "question": "What is 'Deep Learning'?",
        "options": [
          "A hardware update",
          "A subset of ML based on artificial neural networks",
          "A type of database",
          "Studying very hard"
        ],
        "answer": "A subset of ML based on artificial neural networks",
        "category": "Domain Review",
        "explanation": "Deep learning is inspired by the structure and function of the human brain."
      },
      {
        "id": "pl-900-q35",
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
        "id": "pl-900-q36",
        "question": "What is 'Normalizaton' in a database?",
        "options": [
          "A hardware standard",
          "A type of code",
          "Being very normal",
          "Organizing data to reduce redundancy and improve integrity"
        ],
        "answer": "Organizing data to reduce redundancy and improve integrity",
        "category": "Domain Review",
        "explanation": "Normalization involves dividing large tables into smaller ones."
      },
      {
        "id": "pl-900-q37",
        "question": "What is 'Overfitting'?",
        "options": [
          "A hardware failure",
          "A software bug",
          "Wearing small clothes",
          "When a model learns the training data too well but fails on new data"
        ],
        "answer": "When a model learns the training data too well but fails on new data",
        "category": "Domain Review",
        "explanation": "Overfitted models lack generalizability."
      },
      {
        "id": "pl-900-q38",
        "question": "What is 'Clustering' in ML?",
        "options": [
          "A group of people",
          "A hardware update",
          "A type of database",
          "Grouping similar data points together"
        ],
        "answer": "Grouping similar data points together",
        "category": "Domain Review",
        "explanation": "Clustering is an unsupervised learning technique."
      },
      {
        "id": "pl-900-q39",
        "question": "What is an 'Artificial Neural Network'?",
        "options": [
          "A computing system inspired by biological neural networks",
          "A hardware guard",
          "A robot's brain",
          "A type of network cable"
        ],
        "answer": "A computing system inspired by biological neural networks",
        "category": "Domain Review",
        "explanation": "Neural networks are the foundation of deep learning."
      },
      {
        "id": "pl-900-q40",
        "question": "What is 'Data Cleansing'?",
        "options": [
          "A software manual",
          "A type of code",
          "Identifying and correcting errors or inconsistencies in data",
          "Washing a computer"
        ],
        "answer": "Identifying and correcting errors or inconsistencies in data",
        "category": "Domain Review",
        "explanation": "Cleansing is essential for accurate analysis."
      },
      {
        "id": "pl-900-q41",
        "question": "What is 'Big Data Analytics'?",
        "options": [
          "A software update",
          "A type of cloud",
          "A very large spreadsheet",
          "The process of examining large and varied data sets to find hidden patterns"
        ],
        "answer": "The process of examining large and varied data sets to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Analytics provides insights that can lead to better business decisions."
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
        "question": "What is 'Data Warehouse'?",
        "options": [
          "A building for servers",
          "A hardware guard",
          "A system used for reporting and data analysis",
          "A type of storage"
        ],
        "answer": "A system used for reporting and data analysis",
        "category": "Domain Review",
        "explanation": "Warehouses consolidate data from multiple sources."
      },
      {
        "id": "pl-900-q44",
        "question": "What is 'Model' in ML?",
        "options": [
          "A mathematical representation of a real-world process",
          "A software manual",
          "A tiny car",
          "A type of clothing"
        ],
        "answer": "A mathematical representation of a real-world process",
        "category": "Domain Review",
        "explanation": "A model is 'trained' on data to make predictions."
      },
      {
        "id": "pl-900-q45",
        "question": "What is 'Natural Language Processing' (NLP)?",
        "options": [
          "A network protocol",
          "A type of code",
          "Speaking very fast",
          "The ability of computers to understand and process human language"
        ],
        "answer": "The ability of computers to understand and process human language",
        "category": "Domain Review",
        "explanation": "NLP is used in translation, sentiment analysis, and chatbots."
      },
      {
        "id": "pl-900-q46",
        "question": "What is 'NoSQL'?",
        "options": [
          "A database with no SQL",
          "A financial report",
          "A non-relational database for storing diverse data types",
          "A type of code"
        ],
        "answer": "A non-relational database for storing diverse data types",
        "category": "Domain Review",
        "explanation": "NoSQL databases are often used for big data and real-time web apps."
      },
      {
        "id": "pl-900-q47",
        "question": "What is 'Data Mart'?",
        "options": [
          "A small-scale data warehouse focused on a single functional area",
          "A software update",
          "A store for data",
          "A type of storage"
        ],
        "answer": "A small-scale data warehouse focused on a single functional area",
        "category": "Domain Review",
        "explanation": "Data marts are often used by a specific department (e.g., Finance)."
      },
      {
        "id": "pl-900-q48",
        "question": "What is 'Data Governance'?",
        "options": [
          "A government agency",
          "A security guard",
          "A set of laws",
          "Managing the availability, usability, integrity, and security of data"
        ],
        "answer": "Managing the availability, usability, integrity, and security of data",
        "category": "Domain Review",
        "explanation": "Governance ensures data is accurate and trustworthy."
      },
      {
        "id": "pl-900-q49",
        "question": "What is 'Denormalization'?",
        "options": [
          "A hardware standard",
          "A type of code",
          "Adding redundant data to improve read performance",
          "Being very strange"
        ],
        "answer": "Adding redundant data to improve read performance",
        "category": "Domain Review",
        "explanation": "Denormalization is often used in data warehouses."
      },
      {
        "id": "pl-900-q50",
        "question": "What is 'Foreign Key' in a database?",
        "options": [
          "A field in one table that uniquely identifies a row of another table",
          "A hardware standard",
          "A key from another country",
          "A type of code"
        ],
        "answer": "A field in one table that uniquely identifies a row of another table",
        "category": "Domain Review",
        "explanation": "Foreign keys create relationships between tables."
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
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card",
          "Looking in a mirror",
          "Stating who you are (e.g., username)",
          "Taking a photo"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process."
      },
      {
        "id": "cism-q2",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption",
          "Firewalls",
          "Hashing"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message."
      },
      {
        "id": "cism-q3",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS",
          "A phishing attack targeted at high-level executives",
          "A type of network cable",
          "Hunting whales"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs."
      },
      {
        "id": "cism-q4",
        "question": "What is 'Defense in Depth'?",
        "options": [
          "A single strong firewall",
          "Building a deep bunker",
          "Hiring many guards",
          "Using multiple layers of security"
        ],
        "answer": "Using multiple layers of security",
        "category": "Domain Review",
        "explanation": "If one layer fails, others are in place to stop the threat."
      },
      {
        "id": "cism-q5",
        "question": "Which protocol provides a secure shell for remote access?",
        "options": [
          "FTP",
          "HTTP",
          "SSH",
          "Telnet"
        ],
        "answer": "SSH",
        "category": "Domain Review",
        "explanation": "SSH is the secure alternative to the unencrypted Telnet."
      },
      {
        "id": "cism-q6",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password",
          "Creating a new account",
          "Determining what an authenticated user can do",
          "Entering a building"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user."
      },
      {
        "id": "cism-q7",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol",
          "A type of agriculture",
          "Redirecting users to a fake website by poisoning DNS",
          "Stealing emails"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one."
      },
      {
        "id": "cism-q8",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A gap between server racks",
          "A leak in a tire",
          "A type of Wi-Fi",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems."
      },
      {
        "id": "cism-q9",
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
        "id": "cism-q10",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A backup system",
          "A secure hard drive",
          "A way to find lost files",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit."
      },
      {
        "id": "cism-q11",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup",
          "Giving permission",
          "Logging out",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait."
      },
      {
        "id": "cism-q12",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A network hub",
          "A referee",
          "A secure proxy",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent."
      },
      {
        "id": "cism-q13",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server",
          "A jar of honey",
          "A secure database"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets."
      },
      {
        "id": "cism-q14",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference",
          "Viruses are faster",
          "Worms are harmless",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction."
      },
      {
        "id": "cism-q15",
        "question": "What is the purpose of an 'IDS'?",
        "options": [
          "Detect unauthorized access",
          "Prevent all attacks",
          "Scan for hardware errors",
          "Store passwords"
        ],
        "answer": "Detect unauthorized access",
        "category": "Domain Review",
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity."
      },
      {
        "id": "cism-q16",
        "question": "What is 'War Driving'?",
        "options": [
          "A military exercise",
          "A type of car race",
          "Driving a tank",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit."
      },
      {
        "id": "cism-q17",
        "question": "What is 'BYOD'?",
        "options": [
          "Backup Your Own Data",
          "Bring Your Own Device",
          "Build Your Own Database",
          "Buy Your Own Domain"
        ],
        "answer": "Bring Your Own Device",
        "category": "Domain Review",
        "explanation": "A policy allowing employees to use personal devices for work."
      },
      {
        "id": "cism-q18",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a hard drive",
          "Playing with sand",
          "Running suspicious programs in an isolated area",
          "Testing website designs"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system."
      },
      {
        "id": "cism-q19",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager",
          "A type of firewall",
          "Studying biological data",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition."
      },
      {
        "id": "cism-q20",
        "question": "What is the 'Principle of Least Privilege'?",
        "options": [
          "Giving everyone full access",
          "Giving only necessary access to a user",
          "Hiring only one person",
          "Using cheap hardware"
        ],
        "answer": "Giving only necessary access to a user",
        "category": "Domain Review",
        "explanation": "This minimizes potential impact of a security breach."
      },
      {
        "id": "cism-q21",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A database backup",
          "A network protocol",
          "A type of virus",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data."
      },
      {
        "id": "cism-q22",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory",
          "A list of employees",
          "A path in the woods"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance."
      },
      {
        "id": "cism-q23",
        "question": "What is 'Shoulder Surfing'?",
        "options": [
          "A physical security guard",
          "A type of sport",
          "Hacking a website",
          "Watching someone enter their password"
        ],
        "answer": "Watching someone enter their password",
        "category": "Domain Review",
        "explanation": "It's a low-tech social engineering technique."
      },
      {
        "id": "cism-q24",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "AES",
          "Diffie-Hellman",
          "ECC",
          "RSA"
        ],
        "answer": "AES",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
      },
      {
        "id": "cism-q25",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A phone repair shop",
          "A type of mobile app",
          "Hiring a mobile expert",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones."
      },
      {
        "id": "cism-q26",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate",
          "Ensure data is compressed",
          "Ensure only authorized users can read data",
          "Ensure services are up"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information."
      },
      {
        "id": "cism-q27",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty",
          "A manual for a router",
          "A set of rules that define allowed traffic",
          "An insurance policy"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets."
      },
      {
        "id": "cism-q28",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A secure downloader",
          "A type of virus that replicates",
          "A wooden statue",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms."
      },
      {
        "id": "cism-q29",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data",
          "Converting plaintext into ciphertext",
          "Deleting files",
          "Making data public"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties."
      },
      {
        "id": "cism-q30",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol",
          "A type of stenography",
          "Hiding data within other data (like an image)",
          "Writing very fast"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect."
      },
      {
        "id": "cism-q31",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test",
          "A network speed test",
          "A test of ink levels",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture."
      },
      {
        "id": "cism-q32",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest",
          "Ensuring data has not been tampered with",
          "Keeping secrets",
          "Making sure the website is fast"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy."
      },
      {
        "id": "cism-q33",
        "question": "What is 'Vulnerability Scanning'?",
        "options": [
          "A type of medical scan",
          "Automatically identifying security flaws",
          "Checking for physical damage",
          "Searching for Wi-Fi"
        ],
        "answer": "Automatically identifying security flaws",
        "category": "Domain Review",
        "explanation": "Tools like Nessus or OpenVAS are used for this purpose."
      },
      {
        "id": "cism-q34",
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
        "id": "cism-q35",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking a bank",
          "Installing cameras",
          "Manipulating people into giving up info",
          "Writing code for social media"
        ],
        "answer": "Manipulating people into giving up info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws."
      },
      {
        "id": "cism-q36",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range",
          "Better encryption and protection against brute force",
          "Cheaper hardware",
          "Faster speeds only"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks."
      },
      {
        "id": "cism-q37",
        "question": "What is a 'Botnet'?",
        "options": [
          "A group of robots",
          "A network of infected computers",
          "A secure server farm",
          "A type of internet cable"
        ],
        "answer": "A network of infected computers",
        "category": "Domain Review",
        "explanation": "Botnets are used for large-scale attacks like DDoS."
      },
      {
        "id": "cism-q38",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing code",
          "Breaking a password",
          "Converting ciphertext back into plaintext",
          "Downloading data"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key."
      },
      {
        "id": "cism-q39",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real door",
          "A secure login",
          "A type of firewall"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence."
      },
      {
        "id": "cism-q40",
        "question": "What is 'Access Control'?",
        "options": [
          "A type of remote control",
          "Hiring a security guard",
          "Restricting access to resources to authorized users",
          "Turning off the computer"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization."
      },
      {
        "id": "cism-q41",
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
        "id": "cism-q42",
        "question": "What is 'Cross-Site Scripting' (XSS)?",
        "options": [
          "A hardware attack",
          "A type of router flaw",
          "Injecting malicious scripts into web pages",
          "Writing code for multiple sites"
        ],
        "answer": "Injecting malicious scripts into web pages",
        "category": "Domain Review",
        "explanation": "XSS can steal cookies and session info from users."
      },
      {
        "id": "cism-q43",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key for a private room",
          "A key that everyone has",
          "A physical key",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures."
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
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure protocol",
          "A type of antenna",
          "Listening through a wall",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality."
      },
      {
        "id": "cism-q47",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two accounts",
          "Logging in twice",
          "Using two different types of credentials",
          "Using two passwords"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password."
      },
      {
        "id": "cism-q48",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device",
          "A type of math problem",
          "An actual explosive",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders."
      },
      {
        "id": "cism-q49",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection",
          "A software update",
          "Overwriting memory to execute malicious code",
          "Too much data on a disk"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution."
      },
      {
        "id": "cism-q50",
        "question": "What is a 'Public Key'?",
        "options": [
          "A key for a public building",
          "A key that can be shared with anyone",
          "A secret password",
          "The only key in existence"
        ],
        "answer": "A key that can be shared with anyone",
        "category": "Domain Review",
        "explanation": "In asymmetric encryption, the public key is used for encryption."
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
        "question": "What is the purpose of an 'IDS'?",
        "options": [
          "Detect unauthorized access",
          "Prevent all attacks",
          "Scan for hardware errors",
          "Store passwords"
        ],
        "answer": "Detect unauthorized access",
        "category": "Domain Review",
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity."
      },
      {
        "id": "oscp-q2",
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
        "id": "oscp-q3",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup",
          "Giving permission",
          "Logging out",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait."
      },
      {
        "id": "oscp-q4",
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
        "id": "oscp-q5",
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
        "id": "oscp-q6",
        "question": "What is 'War Driving'?",
        "options": [
          "A military exercise",
          "A type of car race",
          "Driving a tank",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit."
      },
      {
        "id": "oscp-q7",
        "question": "What is 'Access Control'?",
        "options": [
          "A type of remote control",
          "Hiring a security guard",
          "Restricting access to resources to authorized users",
          "Turning off the computer"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization."
      },
      {
        "id": "oscp-q8",
        "question": "What is 'Cross-Site Scripting' (XSS)?",
        "options": [
          "A hardware attack",
          "A type of router flaw",
          "Injecting malicious scripts into web pages",
          "Writing code for multiple sites"
        ],
        "answer": "Injecting malicious scripts into web pages",
        "category": "Domain Review",
        "explanation": "XSS can steal cookies and session info from users."
      },
      {
        "id": "oscp-q9",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device",
          "A type of math problem",
          "An actual explosive",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders."
      },
      {
        "id": "oscp-q10",
        "question": "Which protocol provides a secure shell for remote access?",
        "options": [
          "FTP",
          "HTTP",
          "SSH",
          "Telnet"
        ],
        "answer": "SSH",
        "category": "Domain Review",
        "explanation": "SSH is the secure alternative to the unencrypted Telnet."
      },
      {
        "id": "oscp-q11",
        "question": "What is 'Defense in Depth'?",
        "options": [
          "A single strong firewall",
          "Building a deep bunker",
          "Hiring many guards",
          "Using multiple layers of security"
        ],
        "answer": "Using multiple layers of security",
        "category": "Domain Review",
        "explanation": "If one layer fails, others are in place to stop the threat."
      },
      {
        "id": "oscp-q12",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data",
          "Converting plaintext into ciphertext",
          "Deleting files",
          "Making data public"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties."
      },
      {
        "id": "oscp-q13",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking a bank",
          "Installing cameras",
          "Manipulating people into giving up info",
          "Writing code for social media"
        ],
        "answer": "Manipulating people into giving up info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws."
      },
      {
        "id": "oscp-q14",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection",
          "A software update",
          "Overwriting memory to execute malicious code",
          "Too much data on a disk"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution."
      },
      {
        "id": "oscp-q15",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card",
          "Looking in a mirror",
          "Stating who you are (e.g., username)",
          "Taking a photo"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process."
      },
      {
        "id": "oscp-q16",
        "question": "What is 'Spear Phishing'?",
        "options": [
          "A type of network cable",
          "A very fast attack",
          "Phishing targeted at a specific person",
          "Phishing with a weapon"
        ],
        "answer": "Phishing targeted at a specific person",
        "category": "Domain Review",
        "explanation": "Spear phishing is highly customized and more effective than general phishing."
      },
      {
        "id": "oscp-q17",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty",
          "A manual for a router",
          "A set of rules that define allowed traffic",
          "An insurance policy"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets."
      },
      {
        "id": "oscp-q18",
        "question": "What does 'DDoS' stand for?",
        "options": [
          "Digital Data over System",
          "Direct Drive on Storage",
          "Distributed Data of Security",
          "Distributed Denial of Service"
        ],
        "answer": "Distributed Denial of Service",
        "category": "Domain Review",
        "explanation": "DDoS attacks overwhelm a target with traffic from multiple sources."
      },
      {
        "id": "oscp-q19",
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
        "id": "oscp-q20",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range",
          "Better encryption and protection against brute force",
          "Cheaper hardware",
          "Faster speeds only"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks."
      },
      {
        "id": "oscp-q21",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A secure downloader",
          "A type of virus that replicates",
          "A wooden statue",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms."
      },
      {
        "id": "oscp-q22",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS",
          "A phishing attack targeted at high-level executives",
          "A type of network cable",
          "Hunting whales"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs."
      },
      {
        "id": "oscp-q23",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key for a private room",
          "A key that everyone has",
          "A physical key",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures."
      },
      {
        "id": "oscp-q24",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing code",
          "Breaking a password",
          "Converting ciphertext back into plaintext",
          "Downloading data"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key."
      },
      {
        "id": "oscp-q25",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A phone repair shop",
          "A type of mobile app",
          "Hiring a mobile expert",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones."
      },
      {
        "id": "oscp-q26",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test",
          "A network speed test",
          "A test of ink levels",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture."
      },
      {
        "id": "oscp-q27",
        "question": "What is a 'Botnet'?",
        "options": [
          "A group of robots",
          "A network of infected computers",
          "A secure server farm",
          "A type of internet cable"
        ],
        "answer": "A network of infected computers",
        "category": "Domain Review",
        "explanation": "Botnets are used for large-scale attacks like DDoS."
      },
      {
        "id": "oscp-q28",
        "question": "What is 'Vulnerability Scanning'?",
        "options": [
          "A type of medical scan",
          "Automatically identifying security flaws",
          "Checking for physical damage",
          "Searching for Wi-Fi"
        ],
        "answer": "Automatically identifying security flaws",
        "category": "Domain Review",
        "explanation": "Tools like Nessus or OpenVAS are used for this purpose."
      },
      {
        "id": "oscp-q29",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory",
          "A list of employees",
          "A path in the woods"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance."
      },
      {
        "id": "oscp-q30",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A backup system",
          "A secure hard drive",
          "A way to find lost files",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit."
      },
      {
        "id": "oscp-q31",
        "question": "What is a 'Public Key'?",
        "options": [
          "A key for a public building",
          "A key that can be shared with anyone",
          "A secret password",
          "The only key in existence"
        ],
        "answer": "A key that can be shared with anyone",
        "category": "Domain Review",
        "explanation": "In asymmetric encryption, the public key is used for encryption."
      },
      {
        "id": "oscp-q32",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A network hub",
          "A referee",
          "A secure proxy",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent."
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
        "question": "What is an 'Air Gap'?",
        "options": [
          "A gap between server racks",
          "A leak in a tire",
          "A type of Wi-Fi",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems."
      },
      {
        "id": "oscp-q35",
        "question": "What is the 'Principle of Least Privilege'?",
        "options": [
          "Giving everyone full access",
          "Giving only necessary access to a user",
          "Hiring only one person",
          "Using cheap hardware"
        ],
        "answer": "Giving only necessary access to a user",
        "category": "Domain Review",
        "explanation": "This minimizes potential impact of a security breach."
      },
      {
        "id": "oscp-q36",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest",
          "Ensuring data has not been tampered with",
          "Keeping secrets",
          "Making sure the website is fast"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy."
      },
      {
        "id": "oscp-q37",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate",
          "Ensure data is compressed",
          "Ensure only authorized users can read data",
          "Ensure services are up"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information."
      },
      {
        "id": "oscp-q38",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a hard drive",
          "Playing with sand",
          "Running suspicious programs in an isolated area",
          "Testing website designs"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system."
      },
      {
        "id": "oscp-q39",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real door",
          "A secure login",
          "A type of firewall"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence."
      },
      {
        "id": "oscp-q40",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password",
          "Creating a new account",
          "Determining what an authenticated user can do",
          "Entering a building"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user."
      },
      {
        "id": "oscp-q41",
        "question": "What is a 'Rootkit'?",
        "options": [
          "A kit for growing plants",
          "A tool for fixing roots",
          "A type of antivirus",
          "Malware that hides its presence on a system"
        ],
        "answer": "Malware that hides its presence on a system",
        "category": "Domain Review",
        "explanation": "Rootkits operate at a deep level of the OS to remain undetected."
      },
      {
        "id": "oscp-q42",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two accounts",
          "Logging in twice",
          "Using two different types of credentials",
          "Using two passwords"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password."
      },
      {
        "id": "oscp-q43",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference",
          "Viruses are faster",
          "Worms are harmless",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction."
      },
      {
        "id": "oscp-q44",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption",
          "Firewalls",
          "Hashing"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message."
      },
      {
        "id": "oscp-q45",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A database backup",
          "A network protocol",
          "A type of virus",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data."
      },
      {
        "id": "oscp-q46",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server",
          "A jar of honey",
          "A secure database"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets."
      },
      {
        "id": "oscp-q47",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol",
          "A type of stenography",
          "Hiding data within other data (like an image)",
          "Writing very fast"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect."
      },
      {
        "id": "oscp-q48",
        "question": "What is 'BYOD'?",
        "options": [
          "Backup Your Own Data",
          "Bring Your Own Device",
          "Build Your Own Database",
          "Buy Your Own Domain"
        ],
        "answer": "Bring Your Own Device",
        "category": "Domain Review",
        "explanation": "A policy allowing employees to use personal devices for work."
      },
      {
        "id": "oscp-q49",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol",
          "A type of agriculture",
          "Redirecting users to a fake website by poisoning DNS",
          "Stealing emails"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one."
      },
      {
        "id": "oscp-q50",
        "question": "What is a 'Zero-Day' vulnerability?",
        "options": [
          "A bug that happens on day zero",
          "A flaw unknown to the vendor",
          "A patch released today",
          "A vulnerability with zero impact"
        ],
        "answer": "A flaw unknown to the vendor",
        "category": "Domain Review",
        "explanation": "Zero-day threats have no available patch at the time of discovery."
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
        "id": "jcia-junos-q2",
        "question": "Which protocol is commonly used for network management and monitoring?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "SNMP",
        "category": "Domain Review",
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
      },
      {
        "id": "jcia-junos-q3",
        "question": "Which layer is responsible for encryption and compression?",
        "options": [
          "Application Layer",
          "Presentation Layer",
          "Session Layer",
          "Transport Layer"
        ],
        "answer": "Presentation Layer",
        "category": "Domain Review",
        "explanation": "Layer 6 ensures data is in a usable format."
      },
      {
        "id": "jcia-junos-q4",
        "question": "What is the default subnet mask for a Class C network?",
        "options": [
          "255.0.0.0",
          "255.255.0.0",
          "255.255.255.0",
          "255.255.255.255"
        ],
        "answer": "255.255.255.0",
        "category": "Domain Review",
        "explanation": "Class C networks have a /24 mask."
      },
      {
        "id": "jcia-junos-q5",
        "question": "Which routing protocol is known as the protocol of the internet?",
        "options": [
          "BGP",
          "EIGRP",
          "OSPF",
          "RIP"
        ],
        "answer": "BGP",
        "category": "Domain Review",
        "explanation": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web."
      },
      {
        "id": "jcia-junos-q6",
        "question": "Which command checks the reachability of a DNS server?",
        "options": [
          "gethost",
          "ipconfig",
          "nslookup",
          "ping"
        ],
        "answer": "nslookup",
        "category": "Domain Review",
        "explanation": "nslookup is used to query DNS servers for information."
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
        "question": "What is 'PoE'?",
        "options": [
          "Physical object Encryption",
          "Point of Entry",
          "Power over Ethernet",
          "Protocol of Exchange"
        ],
        "answer": "Power over Ethernet",
        "category": "Domain Review",
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras."
      },
      {
        "id": "jcia-junos-q9",
        "question": "Which command is used to trace the path a packet takes to its destination?",
        "options": [
          "netstat",
          "nslookup",
          "ping",
          "tracert"
        ],
        "answer": "tracert",
        "category": "Domain Review",
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
      },
      {
        "id": "jcia-junos-q10",
        "question": "Which protocol uses port 25?",
        "options": [
          "DNS",
          "HTTP",
          "RDP",
          "SMTP"
        ],
        "answer": "SMTP",
        "category": "Domain Review",
        "explanation": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails."
      },
      {
        "id": "jcia-junos-q11",
        "question": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
        "options": [
          "802.11ac",
          "802.11b",
          "802.11g",
          "802.11n"
        ],
        "answer": "802.11ac",
        "category": "Domain Review",
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
      },
      {
        "id": "jcia-junos-q12",
        "question": "What does a 'Collision Domain' refer to?",
        "options": [
          "A group of devices where data packets can collide",
          "A set of devices sharing a router",
          "A single network cable",
          "The entire internet"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port."
      },
      {
        "id": "jcia-junos-q13",
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
        "id": "jcia-junos-q14",
        "question": "Which protocol resolves domain names to IP addresses?",
        "options": [
          "ARP",
          "DHCP",
          "DNS",
          "SNMP"
        ],
        "answer": "DNS",
        "category": "Domain Review",
        "explanation": "Domain Name System (DNS) maps human-readable names to IP addresses."
      },
      {
        "id": "jcia-junos-q15",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing",
          "Hiding the network name",
          "Identifying traffic for different VLANs on a trunk",
          "Printing wirelessly"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to."
      },
      {
        "id": "jcia-junos-q16",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses",
          "Distribute traffic across multiple servers",
          "Encrypt network traffic",
          "Store website files"
        ],
        "answer": "Distribute traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load."
      },
      {
        "id": "jcia-junos-q17",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at half speed",
          "Devices can send or receive but not both at once",
          "Only half the packets arrive",
          "Only one device can ever send"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex."
      },
      {
        "id": "jcia-junos-q18",
        "question": "What is the default port for FTP?",
        "options": [
          "21",
          "22",
          "23",
          "25"
        ],
        "answer": "21",
        "category": "Domain Review",
        "explanation": "File Transfer Protocol (FTP) uses port 21 for control."
      },
      {
        "id": "jcia-junos-q19",
        "question": "What is the purpose of 'NAT'?",
        "options": [
          "Assign names to devices",
          "Check for cable breaks",
          "Speed up downloads",
          "Translate private IPs to public IPs"
        ],
        "answer": "Translate private IPs to public IPs",
        "category": "Domain Review",
        "explanation": "Network Address Translation (NAT) allows multiple devices to share one public IP."
      },
      {
        "id": "jcia-junos-q20",
        "question": "What is the range of private IP addresses for Class A?",
        "options": [
          "10.0.0.0 - 10.255.255.255",
          "127.0.0.0 - 127.255.255.255",
          "172.16.0.0 - 172.31.255.255",
          "192.168.0.0 - 192.168.255.255"
        ],
        "answer": "10.0.0.0 - 10.255.255.255",
        "category": "Domain Review",
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks."
      },
      {
        "id": "jcia-junos-q21",
        "question": "What is the standard port for SSH?",
        "options": [
          "22",
          "23",
          "443",
          "80"
        ],
        "answer": "22",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default."
      },
      {
        "id": "jcia-junos-q22",
        "question": "What is 'Jitter' in networking?",
        "options": [
          "A loose cable",
          "Packet loss",
          "Total network speed",
          "Variation in packet delay"
        ],
        "answer": "Variation in packet delay",
        "category": "Domain Review",
        "explanation": "Low jitter is critical for real-time services like VoIP."
      },
      {
        "id": "jcia-junos-q23",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "all of the above",
          "arp -a",
          "getmac",
          "ipconfig /all"
        ],
        "answer": "all of the above",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address."
      },
      {
        "id": "jcia-junos-q24",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Coaxial",
          "Multi-mode Fiber",
          "Single-mode Fiber",
          "UTP"
        ],
        "answer": "Single-mode Fiber",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission."
      },
      {
        "id": "jcia-junos-q25",
        "question": "What does a Gateway do?",
        "options": [
          "Connects different networks",
          "Filters viruses",
          "Increases Wi-Fi signal",
          "Stores passwords"
        ],
        "answer": "Connects different networks",
        "category": "Domain Review",
        "explanation": "A gateway serves as an entry/exit point for data between networks."
      },
      {
        "id": "jcia-junos-q26",
        "question": "What does 'MTU' stand for?",
        "options": [
          "Main Transfer Unit",
          "Maximum Transmission Unit",
          "Media Test Utility",
          "Multi-Threaded Utility"
        ],
        "answer": "Maximum Transmission Unit",
        "category": "Domain Review",
        "explanation": "MTU is the largest packet size a network can handle."
      },
      {
        "id": "jcia-junos-q27",
        "question": "Which protocol is used to retrieve emails from a server and delete them after?",
        "options": [
          "IMAP",
          "POP3",
          "SMTP",
          "SNMP"
        ],
        "answer": "POP3",
        "category": "Domain Review",
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
      },
      {
        "id": "jcia-junos-q28",
        "question": "Which protocol uses port 53?",
        "options": [
          "DHCP",
          "DNS",
          "HTTP",
          "HTTPS"
        ],
        "answer": "DNS",
        "category": "Domain Review",
        "explanation": "DNS uses both UDP and TCP on port 53."
      },
      {
        "id": "jcia-junos-q29",
        "question": "Which protocol is used for synchronizing clocks on a network?",
        "options": [
          "FTP",
          "HTTP",
          "NTP",
          "SNMP"
        ],
        "answer": "NTP",
        "category": "Domain Review",
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time."
      },
      {
        "id": "jcia-junos-q30",
        "question": "Which device is used to extend the range of a Wi-Fi signal?",
        "options": [
          "Access Point",
          "Modem",
          "Router",
          "Switch"
        ],
        "answer": "Access Point",
        "category": "Domain Review",
        "explanation": "APs provide wireless connectivity to a wired network."
      },
      {
        "id": "jcia-junos-q31",
        "question": "Which protocol uses port 3389?",
        "options": [
          "RDP",
          "SSH",
          "Telnet",
          "VNC"
        ],
        "answer": "RDP",
        "category": "Domain Review",
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
      },
      {
        "id": "jcia-junos-q32",
        "question": "Which protocol is used to securely transfer files?",
        "options": [
          "FTP",
          "SFTP",
          "TFTP",
          "Telnet"
        ],
        "answer": "SFTP",
        "category": "Domain Review",
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
      },
      {
        "id": "jcia-junos-q33",
        "question": "What does 'full-duplex' mean?",
        "options": [
          "Data can flow both ways simultaneously",
          "Data flows in one direction only",
          "Data flows one way at a time",
          "Data is sent twice"
        ],
        "answer": "Data can flow both ways simultaneously",
        "category": "Domain Review",
        "explanation": "Full-duplex communication allows concurrent sending and receiving."
      },
      {
        "id": "jcia-junos-q34",
        "question": "What is 'STP' (Spanning Tree Protocol) used for?",
        "options": [
          "Assign IP addresses",
          "Encrypt passwords",
          "Prevent network loops in switches",
          "Speed up the network"
        ],
        "answer": "Prevent network loops in switches",
        "category": "Domain Review",
        "explanation": "STP ensures there is only one active path between two network nodes."
      },
      {
        "id": "jcia-junos-q35",
        "question": "What is the bit length of a MAC address?",
        "options": [
          "128 bits",
          "32 bits",
          "48 bits",
          "64 bits"
        ],
        "answer": "48 bits",
        "category": "Domain Review",
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers."
      },
      {
        "id": "jcia-junos-q36",
        "question": "What is an 'ACL' in networking?",
        "options": [
          "Access Control List",
          "Active Content Loop",
          "Advanced Core Layer",
          "Automated Connection Link"
        ],
        "answer": "Access Control List",
        "category": "Domain Review",
        "explanation": "ACLs filter network traffic based on rules."
      },
      {
        "id": "jcia-junos-q37",
        "question": "Which type of cable is least susceptible to EMI?",
        "options": [
          "Coaxial",
          "Fiber Optic",
          "STP",
          "UTP"
        ],
        "answer": "Fiber Optic",
        "category": "Domain Review",
        "explanation": "Fiber uses light instead of electricity, making it immune to electromagnetic interference."
      },
      {
        "id": "jcia-junos-q38",
        "question": "Which layer defines electrical and physical specifications for devices?",
        "options": [
          "Application Layer",
          "Network Layer",
          "Physical Layer",
          "Transport Layer"
        ],
        "answer": "Physical Layer",
        "category": "Domain Review",
        "explanation": "Layer 1 deals with cables, connectors, and signals."
      },
      {
        "id": "jcia-junos-q39",
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
        "id": "jcia-junos-q40",
        "question": "What is the port for HTTPS?",
        "options": [
          "21",
          "25",
          "443",
          "80"
        ],
        "answer": "443",
        "category": "Domain Review",
        "explanation": "HTTPS (Secure) uses port 443."
      },
      {
        "id": "jcia-junos-q41",
        "question": "What is the function of the ARP protocol?",
        "options": [
          "Assign dynamic IPs",
          "Resolve IP to MAC address",
          "Resolve MAC to IP address",
          "Route traffic"
        ],
        "answer": "Resolve IP to MAC address",
        "category": "Domain Review",
        "explanation": "Address Resolution Protocol (ARP) finds the hardware address for a known IP."
      },
      {
        "id": "jcia-junos-q42",
        "question": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
        "options": [
          "Data Link Layer",
          "Network Layer",
          "Physical Layer",
          "Session Layer"
        ],
        "answer": "Data Link Layer",
        "category": "Domain Review",
        "explanation": "Layer 2 is responsible for node-to-node data transfer."
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
        "question": "What is the purpose of 'QoS'?",
        "options": [
          "Check for viruses",
          "Increase disk space",
          "Prioritize important traffic",
          "Update software"
        ],
        "answer": "Prioritize important traffic",
        "category": "Domain Review",
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
      },
      {
        "id": "jcia-junos-q45",
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning IPs",
          "Detecting collisions in Ethernet",
          "Encrypting data",
          "Routing packets"
        ],
        "answer": "Detecting collisions in Ethernet",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
      },
      {
        "id": "jcia-junos-q46",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the printer",
          "Divide a large network into smaller ones",
          "Speed up the processor",
          "Store emails"
        ],
        "answer": "Divide a large network into smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security."
      },
      {
        "id": "jcia-junos-q47",
        "question": "Which type of VPN connects two locations directly?",
        "options": [
          "Client-to-Site",
          "Remote Access",
          "SSL VPN",
          "Site-to-Site"
        ],
        "answer": "Site-to-Site",
        "category": "Domain Review",
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters."
      },
      {
        "id": "jcia-junos-q48",
        "question": "Which device operates at Layer 2 and makes forwarding decisions based on MAC addresses?",
        "options": [
          "Hub",
          "Repeater",
          "Router",
          "Switch"
        ],
        "answer": "Switch",
        "category": "Domain Review",
        "explanation": "Switches are more efficient than hubs as they only send data to the intended port."
      },
      {
        "id": "jcia-junos-q49",
        "question": "Which topology connects all devices to a central hub?",
        "options": [
          "Bus",
          "Mesh",
          "Ring",
          "Star"
        ],
        "answer": "Star",
        "category": "Domain Review",
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down."
      },
      {
        "id": "jcia-junos-q50",
        "question": "Which command displays the routing table on a Cisco device?",
        "options": [
          "display route",
          "get routing",
          "show interfaces",
          "show ip route"
        ],
        "answer": "show ip route",
        "category": "Domain Review",
        "explanation": "This command list all routes known to the router."
      }
    ]
  }
];
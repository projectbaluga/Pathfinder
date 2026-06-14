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
        "title": "IP Services",
        "topics": [
          {
            "name": "What is the default subnet mask for a Class C network?",
            "detail": "Class C networks have a /24 mask."
          },
          {
            "name": "What does DHCP stand for?",
            "detail": "DHCP automatically assigns IP addresses to devices on a network."
          },
          {
            "name": "What is the function of a 'Subnet'?",
            "detail": "Subnetting improves organization and security."
          },
          {
            "name": "What is a 'Loopback' address?",
            "detail": "127.0.0.1 is the standard IPv4 loopback address."
          },
          {
            "name": "Which protocol uses port 53?",
            "detail": "DNS uses both UDP and TCP on port 53."
          },
          {
            "name": "What does 'CIDR' stand for?",
            "detail": "CIDR replaced the older classful IP addressing system."
          },
          {
            "name": "Which command checks the reachability of a DNS server?",
            "detail": "nslookup is used to query DNS servers for information."
          },
          {
            "name": "What is the range of private IP addresses for Class A?",
            "detail": "The 10.0.0.0/8 block is reserved for private Class A networks."
          },
          {
            "name": "What is the bit length of an IPv6 address?",
            "detail": "IPv6 addresses are 128 bits long, providing a massive address space."
          }
        ]
      },
      {
        "title": "Network Performance",
        "topics": [
          {
            "name": "What is 'Jitter' in networking?",
            "detail": "Low jitter is critical for real-time services like VoIP."
          },
          {
            "name": "What is the purpose of 'QoS'?",
            "detail": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
          }
        ]
      },
      {
        "title": "Network Services",
        "topics": [
          {
            "name": "Which protocol is used to retrieve emails from a server and delete them after?",
            "detail": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
          },
          {
            "name": "Which protocol uses port 25?",
            "detail": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails."
          },
          {
            "name": "What is the default port for FTP?",
            "detail": "File Transfer Protocol (FTP) uses port 21 for control."
          },
          {
            "name": "Which protocol is used for synchronizing clocks on a network?",
            "detail": "Network Time Protocol (NTP) ensures all devices have the correct time."
          },
          {
            "name": "Which protocol uses port 3389?",
            "detail": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
          },
          {
            "name": "What is the primary function of a Load Balancer?",
            "detail": "Load balancers improve reliability and performance by spreading load."
          },
          {
            "name": "Which protocol is commonly used for network management and monitoring?",
            "detail": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
          }
        ]
      },
      {
        "title": "Network Troubleshooting",
        "topics": [
          {
            "name": "Which command shows the MAC address on a Windows PC?",
            "detail": "All these commands can be used to find the physical address."
          },
          {
            "name": "Which command is used to trace the path a packet takes to its destination?",
            "detail": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
          },
          {
            "name": "What is the purpose of the 'ping' command?",
            "detail": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
          }
        ]
      },
      {
        "title": "Networking Core",
        "topics": [
          {
            "name": "What is 'CSMA/CD' used for?",
            "detail": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
          },
          {
            "name": "What is the bit length of a MAC address?",
            "detail": "MAC addresses are 6-byte (48-bit) unique identifiers."
          },
          {
            "name": "What is the function of the ARP protocol?",
            "detail": "Address Resolution Protocol (ARP) finds the hardware address for a known IP."
          },
          {
            "name": "What is 'Half-Duplex'?",
            "detail": "Older hubs and walkie-talkies are half-duplex."
          },
          {
            "name": "Which topology connects all devices to a central hub?",
            "detail": "In a Star topology, if the central hub fails, the whole network goes down."
          },
          {
            "name": "What does 'MTU' stand for?",
            "detail": "MTU is the largest packet size a network can handle."
          },
          {
            "name": "What does 'full-duplex' mean?",
            "detail": "Full-duplex communication allows concurrent sending and receiving."
          }
        ]
      },
      {
        "title": "OSI Model",
        "topics": [
          {
            "name": "Which OSI layer is responsible for routing and IP addressing?",
            "detail": "The Network Layer (Layer 3) handles logical addressing and path determination (routing)."
          },
          {
            "name": "Which layer defines electrical and physical specifications for devices?",
            "detail": "Layer 1 deals with cables, connectors, and signals."
          },
          {
            "name": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
            "detail": "Layer 2 is responsible for node-to-node data transfer."
          }
        ]
      },
      {
        "title": "Physical Infrastructure",
        "topics": [
          {
            "name": "What is the maximum length of a Cat5e cable segment?",
            "detail": "Ethernet standards for twisted pair cables usually limit segments to 100m."
          },
          {
            "name": "What is 'PoE'?",
            "detail": "PoE allows data cables to also carry electrical power to devices like IP cameras."
          },
          {
            "name": "Which cable type uses a laser as a light source?",
            "detail": "Single-mode uses lasers for long-distance transmission."
          }
        ]
      },
      {
        "title": "Routing",
        "topics": [
          {
            "name": "Which protocol is used for dynamic routing within an autonomous system?",
            "detail": "OSPF is an Interior Gateway Protocol (IGP) used for routing within an organization."
          },
          {
            "name": "What does a Gateway do?",
            "detail": "A gateway serves as an entry/exit point for data between networks."
          },
          {
            "name": "Which device connects multiple networks and makes path decisions?",
            "detail": "Routers operate at Layer 3 and route traffic between different networks."
          }
        ]
      },
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "What is the port for HTTPS?",
            "detail": "HTTPS (Secure) uses port 443."
          },
          {
            "name": "What is an 'ACL' in networking?",
            "detail": "ACLs filter network traffic based on rules."
          },
          {
            "name": "Which protocol is used for securely browsing the web?",
            "detail": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
          },
          {
            "name": "Which protocol is used to securely transfer files?",
            "detail": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
          },
          {
            "name": "Which type of VPN connects two locations directly?",
            "detail": "Site-to-Site VPNs connect entire branch offices to headquarters."
          },
          {
            "name": "What is the standard port for SSH?",
            "detail": "Secure Shell (SSH) uses port 22 by default."
          }
        ]
      },
      {
        "title": "Switching",
        "topics": [
          {
            "name": "What is the purpose of a VLAN?",
            "detail": "VLANs allow network administrators to group devices together even if they are on different physical switches."
          },
          {
            "name": "Which command shows the status of all interfaces on a Cisco router?",
            "detail": "This command provides a concise summary of interface status and IP addresses."
          },
          {
            "name": "What does a 'Collision Domain' refer to?",
            "detail": "Switches break up collision domains per port."
          },
          {
            "name": "What does 'VLAN Tagging' (802.1Q) allow?",
            "detail": "Tagging adds a header to indicate which VLAN a frame belongs to."
          },
          {
            "name": "What is 'STP' (Spanning Tree Protocol) used for?",
            "detail": "STP ensures there is only one active path between two network nodes."
          }
        ]
      },
      {
        "title": "TCP/IP",
        "topics": [
          {
            "name": "What is the primary difference between TCP and UDP?",
            "detail": "TCP ensures delivery with handshakes, while UDP sends data without establishing a connection."
          }
        ]
      },
      {
        "title": "Wireless",
        "topics": [
          {
            "name": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
            "detail": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ccna-q1",
        "question": "Which OSI layer is responsible for routing and IP addressing?",
        "options": [
          "Data Link Layer (Layer 2)",
          "Network Layer (Layer 3)",
          "Physical Layer (Layer 1)",
          "Transport Layer (Layer 4)"
        ],
        "answer": "Network Layer (Layer 3)",
        "category": "Core Knowledge",
        "explanation": "The Network Layer (Layer 3) handles logical addressing and path determination (routing).",
        "topic": "OSI Model"
      },
      {
        "id": "ccna-q2",
        "question": "What is the primary difference between TCP and UDP?",
        "options": [
          "TCP is connection-oriented; UDP is connectionless",
          "TCP is faster than UDP; UDP is slower than TCP",
          "TCP uses less overhead; UDP requires more resources",
          "UDP provides reliability; TCP has no error checking"
        ],
        "answer": "TCP is connection-oriented; UDP is connectionless",
        "category": "Core Knowledge",
        "explanation": "TCP ensures delivery with handshakes, while UDP sends data without establishing a connection.",
        "topic": "TCP/IP"
      },
      {
        "id": "ccna-q3",
        "question": "Which protocol is used for dynamic routing within an autonomous system?",
        "options": [
          "Border Gateway Protocol (BGP)",
          "Hypertext Transfer Protocol (HTTPS)",
          "Open Shortest Path First (OSPF)",
          "Simple Mail Transfer Protocol (SMTP)"
        ],
        "answer": "Open Shortest Path First (OSPF)",
        "category": "Core Knowledge",
        "explanation": "OSPF is an Interior Gateway Protocol (IGP) used for routing within an organization.",
        "topic": "Routing"
      },
      {
        "id": "ccna-q4",
        "question": "What is the purpose of a VLAN?",
        "options": [
          "To convert fiber optic signals to ethernet",
          "To increase physical cable distance limitations",
          "To provide electrical power to network devices",
          "To segment networks logically within a switch"
        ],
        "answer": "To segment networks logically within a switch",
        "category": "Core Knowledge",
        "explanation": "VLANs allow network administrators to group devices together even if they are on different physical switches.",
        "topic": "Switching"
      },
      {
        "id": "ccna-q5",
        "question": "Which command shows the status of all interfaces on a Cisco router?",
        "options": [
          "display all interfaces",
          "get interface status",
          "show ip interface brief",
          "show running-config"
        ],
        "answer": "show ip interface brief",
        "category": "Core Knowledge",
        "explanation": "This command provides a concise summary of interface status and IP addresses.",
        "topic": "Switching"
      },
      {
        "id": "ccna-q6",
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning unique IP addresses to network devices",
          "Detecting collisions in an Ethernet-based network",
          "Encrypting sensitive data for secure transmission",
          "Routing data packets between different networks"
        ],
        "answer": "Detecting collisions in an Ethernet-based network",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol.",
        "topic": "Networking Core"
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
        "explanation": "HTTPS (Secure) uses port 443.",
        "topic": "Security Fundamentals"
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
        "explanation": "A gateway serves as an entry/exit point for data between networks.",
        "topic": "Routing"
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
        "explanation": "Ethernet standards for twisted pair cables usually limit segments to 100m.",
        "topic": "Physical Infrastructure"
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
        "explanation": "Class C networks have a /24 mask.",
        "topic": "IP Services"
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
        "explanation": "DHCP automatically assigns IP addresses to devices on a network.",
        "topic": "IP Services"
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
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server.",
        "topic": "Network Services"
      },
      {
        "id": "ccna-q13",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the local network printer for printing",
          "Divide a large network into multiple smaller ones",
          "Speed up the processing power of the computer",
          "Store incoming and outgoing emails on the server"
        ],
        "answer": "Divide a large network into multiple smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security.",
        "topic": "IP Services"
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
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers.",
        "topic": "Networking Core"
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
        "explanation": "Layer 1 deals with cables, connectors, and signals.",
        "topic": "OSI Model"
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
        "explanation": "ACLs filter network traffic based on rules.",
        "topic": "Security Fundamentals"
      },
      {
        "id": "ccna-q17",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "All of the above commands",
          "The arp -a command",
          "The getmac command",
          "The ipconfig /all command"
        ],
        "answer": "All of the above commands",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address.",
        "topic": "Network Troubleshooting"
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
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination.",
        "topic": "Network Troubleshooting"
      },
      {
        "id": "ccna-q19",
        "question": "What is a 'Loopback' address?",
        "options": [
          "A public IP address accessible from the internet",
          "An address used to test the local computer system",
          "The address of the Domain Name System (DNS) server",
          "The address of the primary network router device"
        ],
        "answer": "An address used to test the local computer system",
        "category": "Domain Review",
        "explanation": "127.0.0.1 is the standard IPv4 loopback address.",
        "topic": "IP Services"
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
        "explanation": "Low jitter is critical for real-time services like VoIP.",
        "topic": "Network Performance"
      },
      {
        "id": "ccna-q21",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "To change the local IP address",
          "To download a file from a server",
          "To secure a specific network port",
          "To test basic network connectivity"
        ],
        "answer": "To test basic network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable.",
        "topic": "Network Troubleshooting"
      },
      {
        "id": "ccna-q22",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP (File Transfer Protocol)",
          "HTTP (Standard Protocol)",
          "HTTPS (Secure Protocol)",
          "SSH (Secure Shell Protocol)"
        ],
        "answer": "HTTPS (Secure Protocol)",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server.",
        "topic": "Security Fundamentals"
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
        "explanation": "Address Resolution Protocol (ARP) finds the hardware address for a known IP.",
        "topic": "Networking Core"
      },
      {
        "id": "ccna-q24",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub (Layer 1 Device)",
          "Repeater (Layer 1 Device)",
          "Router (Layer 3 Device)",
          "Switch (Layer 2 Device)"
        ],
        "answer": "Router (Layer 3 Device)",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks.",
        "topic": "Routing"
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
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n.",
        "topic": "Wireless"
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
        "explanation": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails.",
        "topic": "Network Services"
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
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice.",
        "topic": "Network Performance"
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
        "explanation": "DNS uses both UDP and TCP on port 53.",
        "topic": "IP Services"
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
        "explanation": "CIDR replaced the older classful IP addressing system.",
        "topic": "IP Services"
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
        "explanation": "File Transfer Protocol (FTP) uses port 21 for control.",
        "topic": "Network Services"
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
        "explanation": "nslookup is used to query DNS servers for information.",
        "topic": "IP Services"
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
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer.",
        "topic": "Security Fundamentals"
      },
      {
        "id": "ccna-q33",
        "question": "What does a 'Collision Domain' refer to?",
        "options": [
          "A group of devices where data packets can collide",
          "A set of devices sharing a single network router",
          "A single network cable connecting two different computers",
          "The entire internet-wide group of interconnected devices"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port.",
        "topic": "Switching"
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
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time.",
        "topic": "Network Services"
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
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras.",
        "topic": "Physical Infrastructure"
      },
      {
        "id": "ccna-q36",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at exactly half the standard speed",
          "Devices can send or receive but not both at once",
          "Only half of the data packets arrive at destination",
          "Only one device in the network can ever send data"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex.",
        "topic": "Networking Core"
      },
      {
        "id": "ccna-q37",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Multi-mode Fiber cabling",
          "Single-mode Fiber cabling",
          "Standard Coaxial cabling",
          "Unshielded Twisted Pair (UTP)"
        ],
        "answer": "Single-mode Fiber cabling",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission.",
        "topic": "Physical Infrastructure"
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
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer.",
        "topic": "Network Services"
      },
      {
        "id": "ccna-q39",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses to all devices on the network",
          "Distribute incoming traffic across multiple servers",
          "Encrypt all incoming network traffic for security",
          "Store website files and images for fast access"
        ],
        "answer": "Distribute incoming traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load.",
        "topic": "Network Services"
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
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down.",
        "topic": "Networking Core"
      },
      {
        "id": "ccna-q41",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing of the web for all local users",
          "Hiding the network name for security purposes",
          "Identifying traffic for different VLANs on a trunk",
          "Printing documents wirelessly to a network printer"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to.",
        "topic": "Switching"
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
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices.",
        "topic": "Network Services"
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
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks.",
        "topic": "IP Services"
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
        "explanation": "Layer 2 is responsible for node-to-node data transfer.",
        "topic": "OSI Model"
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
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters.",
        "topic": "Security Fundamentals"
      },
      {
        "id": "ccna-q46",
        "question": "What is 'STP' (Spanning Tree Protocol) used for?",
        "options": [
          "Assign new IP addresses",
          "Encrypt all user passwords",
          "Prevent network loops in switches",
          "Speed up the local network"
        ],
        "answer": "Prevent network loops in switches",
        "category": "Domain Review",
        "explanation": "STP ensures there is only one active path between two network nodes.",
        "topic": "Switching"
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
        "explanation": "MTU is the largest packet size a network can handle.",
        "topic": "Networking Core"
      },
      {
        "id": "ccna-q48",
        "question": "What is the standard port for SSH?",
        "options": [
          "Port 22 (Standard SSH)",
          "Port 23 (Standard Telnet)",
          "Port 443 (Standard HTTPS)",
          "Port 80 (Standard HTTP)"
        ],
        "answer": "Port 22 (Standard SSH)",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default.",
        "topic": "Security Fundamentals"
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
        "explanation": "Full-duplex communication allows concurrent sending and receiving.",
        "topic": "Networking Core"
      },
      {
        "id": "ccna-q50",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits in length",
          "256 bits in length",
          "32 bits in length",
          "64 bits in length"
        ],
        "answer": "128 bits in length",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space.",
        "topic": "IP Services"
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
        "title": "Architecture",
        "topics": [
          {
            "name": "What is a DMZ used for in network security?",
            "detail": "A DeMilitarized Zone (DMZ) isolates public services from the private internal network."
          },
          {
            "name": "What is 'Access Control'?",
            "detail": "It involves identification, authentication, and authorization."
          },
          {
            "name": "What is an 'Air Gap'?",
            "detail": "Air-gapping is used for extremely high-security systems."
          },
          {
            "name": "Which protocol provides a secure shell for remote access?",
            "detail": "SSH is the secure alternative to the unencrypted Telnet."
          },
          {
            "name": "What is 'Defense in Depth'?",
            "detail": "If one layer fails, others are in place to stop the threat."
          },
          {
            "name": "What is 'Mobile Device Management' (MDM)?",
            "detail": "MDM allows enforcing security policies on employee phones."
          },
          {
            "name": "What does 'WPA3' improve over WPA2?",
            "detail": "WPA3 is the latest security standard for wireless networks."
          },
          {
            "name": "What does a Firewall do?",
            "detail": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
          },
          {
            "name": "What is 'Data Loss Prevention' (DLP)?",
            "detail": "DLP monitors data at rest, in use, and in transit."
          }
        ]
      },
      {
        "title": "Attacks & Threats",
        "topics": [
          {
            "name": "Which type of attack uses deceptive emails to steal credentials?",
            "detail": "Phishing is a social engineering attack that tricks users into revealing sensitive information."
          },
          {
            "name": "What is 'Spear Phishing'?",
            "detail": "Spear phishing is highly customized and more effective than general phishing."
          },
          {
            "name": "What is the difference between a 'Virus' and a 'Worm'?",
            "detail": "Worms can spread across a network without human interaction."
          },
          {
            "name": "What is 'Man-in-the-Middle' (MITM)?",
            "detail": "The attacker can read or even modify the data being sent."
          },
          {
            "name": "What is 'Pharmimg'?",
            "detail": "Users think they are on a real site but are actually on a malicious one."
          },
          {
            "name": "What is a 'Buffer Overflow'?",
            "detail": "It can lead to system crashes or arbitrary code execution."
          },
          {
            "name": "What is 'SQL Injection'?",
            "detail": "SQLi can allow attackers to read or modify sensitive database data."
          },
          {
            "name": "What is 'Whaling'?",
            "detail": "Whaling targets 'big fish' like CEOs and CFOs."
          },
          {
            "name": "What is a 'Botnet'?",
            "detail": "Botnets are used for large-scale attacks like DDoS."
          },
          {
            "name": "What is 'Shoulder Surfing'?",
            "detail": "It's a low-tech social engineering technique."
          },
          {
            "name": "What is Ransomware?",
            "detail": "Ransomware locks users out of their data until a ransom is paid."
          },
          {
            "name": "What is a 'Logic Bomb'?",
            "detail": "Logic bombs can be planted by malicious insiders."
          },
          {
            "name": "What is 'War Driving'?",
            "detail": "Attackers use this to find vulnerable wireless networks to exploit."
          },
          {
            "name": "What is a 'Backdoor'?",
            "detail": "Backdoors can be used for maintenance or by attackers for persistence."
          },
          {
            "name": "Which of these is a social engineering attack?",
            "detail": "Tailgating involves physically following an authorized person into a secure area."
          },
          {
            "name": "What is a 'Zero-Day' vulnerability?",
            "detail": "Zero-day threats have no available patch at the time of discovery."
          },
          {
            "name": "What is 'Eavesdropping' in network security?",
            "detail": "This is a passive attack against confidentiality."
          },
          {
            "name": "What is a 'Trojan Horse'?",
            "detail": "Trojans do not replicate themselves like viruses or worms."
          }
        ]
      },
      {
        "title": "Governance",
        "topics": [
          {
            "name": "Which framework provides a standard for managing IT risks in the US?",
            "detail": "The NIST Risk Management Framework is widely used for securing government and private systems."
          },
          {
            "name": "What is 'BYOD'?",
            "detail": "A policy allowing employees to use personal devices for work."
          },
          {
            "name": "What is 'Authorization'?",
            "detail": "It defines the permissions and rights of a user."
          }
        ]
      },
      {
        "title": "Implementation",
        "topics": [
          {
            "name": "What does the principle of Least Privilege state?",
            "detail": "Least Privilege minimizes the potential damage from a compromised account."
          },
          {
            "name": "Which encryption type uses the same key for both encryption and decryption?",
            "detail": "Symmetric encryption (like AES) uses a single shared secret key."
          },
          {
            "name": "What is a 'Private Key'?",
            "detail": "The private key is used for decryption or creating digital signatures."
          },
          {
            "name": "Which of these is a form of Symmetric encryption?",
            "detail": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
          },
          {
            "name": "What is a 'Public Key'?",
            "detail": "In asymmetric encryption, the public key is used for encryption."
          },
          {
            "name": "What is the purpose of Hashing?",
            "detail": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
          },
          {
            "name": "What is 'Encryption'?",
            "detail": "Encryption protects data from being read by unauthorized parties."
          },
          {
            "name": "Which of these is used for 'Non-repudiation'?",
            "detail": "Non-repudiation ensures a sender cannot deny having sent a message."
          },
          {
            "name": "What is 'Decryption'?",
            "detail": "The reverse of encryption, usually requiring a key."
          },
          {
            "name": "What is Multi-Factor Authentication (MFA)?",
            "detail": "MFA combines something you know, something you have, and/or something you are."
          },
          {
            "name": "What is 'Biometrics'?",
            "detail": "Examples include fingerprints, iris scans, and facial recognition."
          },
          {
            "name": "What is 'Two-Factor Authentication' (2FA)?",
            "detail": "It adds an extra layer of security beyond just a password."
          },
          {
            "name": "What is 'Steganography'?",
            "detail": "Data is hidden in plain sight, making it hard to detect."
          }
        ]
      },
      {
        "title": "Operations",
        "topics": [
          {
            "name": "What is an 'Audit Trail'?",
            "detail": "Audit trails are crucial for incident investigation and compliance."
          },
          {
            "name": "What is the purpose of an 'IDS'?",
            "detail": "Intrusion Detection Systems monitor and alert for suspicious activity."
          },
          {
            "name": "What is a 'Penetration Test'?",
            "detail": "Pen-tests provide a deep assessment of an organization's security posture."
          },
          {
            "name": "What is the purpose of 'Sandboxing'?",
            "detail": "Sandboxing prevents malware from affecting the host system."
          }
        ]
      },
      {
        "title": "Security Core",
        "topics": [
          {
            "name": "What is 'Authentication'?",
            "detail": "Usually involves a password, token, or biometric trait."
          },
          {
            "name": "What is 'Identification' in security?",
            "detail": "The first step in the access control process."
          },
          {
            "name": "What does 'Integrity' mean in security?",
            "detail": "Integrity ensures data is accurate and trustworthy."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "sec-plus-q1",
        "question": "Which type of attack uses deceptive emails to steal credentials?",
        "options": [
          "DDoS attack",
          "MITM attack",
          "Phishing attack",
          "SQL Injection"
        ],
        "answer": "Phishing attack",
        "category": "Core Knowledge",
        "explanation": "Phishing is a social engineering attack that tricks users into revealing sensitive information.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q2",
        "question": "What does the principle of Least Privilege state?",
        "options": [
          "Access is granted based on employee seniority",
          "All users should have full administrative rights",
          "Everyone should have access to all resources",
          "Users should only have minimum access required"
        ],
        "answer": "Users should only have minimum access required",
        "category": "Core Knowledge",
        "explanation": "Least Privilege minimizes the potential damage from a compromised account.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q3",
        "question": "Which encryption type uses the same key for both encryption and decryption?",
        "options": [
          "Asymmetric encryption",
          "Hashing algorithms",
          "Public Key exchange",
          "Symmetric encryption"
        ],
        "answer": "Symmetric encryption",
        "category": "Core Knowledge",
        "explanation": "Symmetric encryption (like AES) uses a single shared secret key.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q4",
        "question": "What is a DMZ used for in network security?",
        "options": [
          "To backup sensitive internal organizational data",
          "To host public-facing services and isolate them",
          "To provide centralized storage for system logs",
          "To test malware in a safe, isolated environment"
        ],
        "answer": "To host public-facing services and isolate them",
        "category": "Core Knowledge",
        "explanation": "A DeMilitarized Zone (DMZ) isolates public services from the private internal network.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q5",
        "question": "Which framework provides a standard for managing IT risks in the US?",
        "options": [
          "GDPR (General Data Protection Regulation)",
          "HIPAA (Health Insurance Portability Act)",
          "ISO 27001 (Information Security Standard)",
          "NIST RMF (Risk Management Framework)"
        ],
        "answer": "NIST RMF (Risk Management Framework)",
        "category": "Core Knowledge",
        "explanation": "The NIST Risk Management Framework is widely used for securing government and private systems.",
        "topic": "Governance"
      },
      {
        "id": "sec-plus-q6",
        "question": "What is 'Spear Phishing'?",
        "options": [
          "A type of network cable for data transfers",
          "A very fast attack that occurs in seconds",
          "Phishing targeted at a specific person",
          "Phishing with a physical weapon for theft"
        ],
        "answer": "Phishing targeted at a specific person",
        "category": "Domain Review",
        "explanation": "Spear phishing is highly customized and more effective than general phishing.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q7",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference between a virus and a worm",
          "Viruses are much faster than worms at infecting systems",
          "Worms are harmless and do not cause any system damage",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q8",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A physical network hub for connecting devices",
          "A professional sports referee during a match",
          "A standard secure proxy for browsing the web",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q9",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key that everyone in an office has",
          "A key used for opening a private room",
          "A physical metal key for opening a door",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q10",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "Advanced Encryption Standard (AES)",
          "Diffie-Hellman Key Exchange",
          "Elliptic Curve Cryptography",
          "Rivest-Shamir-Adleman (RSA)"
        ],
        "answer": "Advanced Encryption Standard (AES)",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q11",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A specific type of agriculture involving data plants",
          "Redirecting users to a fake website by poisoning DNS",
          "The act of stealing emails from a remote server"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q12",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection that delays downloads",
          "A standard software update for computer applications",
          "Having too much data on a computer hard disk",
          "Overwriting memory to execute malicious code"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q13",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A network protocol for transmitting data sets",
          "A specific type of malicious computer virus",
          "A standard database backup for data safety",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q14",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory of all computer parts",
          "A list of all employees in a small company",
          "A path through the woods for outdoor hiking"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance.",
        "topic": "Operations"
      },
      {
        "id": "sec-plus-q15",
        "question": "What is 'Access Control'?",
        "options": [
          "A specific type of remote control for a television set",
          "Hiring a security guard to monitor the office building",
          "Restricting access to resources to authorized users",
          "The act of turning off the computer at the end of the day"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q16",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS attack from many sources",
          "A phishing attack targeted at high-level executives",
          "A type of network cable for data transmission",
          "The act of hunting whales in the natural ocean"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs.",
        "topic": "Attacks & Threats"
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
        "explanation": "Botnets are used for large-scale attacks like DDoS.",
        "topic": "Attacks & Threats"
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
        "explanation": "In asymmetric encryption, the public key is used for encryption.",
        "topic": "Implementation"
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
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes.",
        "topic": "Implementation"
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
        "explanation": "It's a low-tech social engineering technique.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q21",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall device for network security",
          "A tool for generating and storing passwords",
          "A type of secure and encrypted email service",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q22",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A physical gap between computer server racks in a room",
          "A small leak in a rubber tire that causes low pressure",
          "A specific type of high-speed Wi-Fi network connection",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q23",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup of sensitive organizational data",
          "Giving permission to access a secure resource",
          "The act of logging out from a secure account",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait.",
        "topic": "Security Core"
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
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity.",
        "topic": "Operations"
      },
      {
        "id": "sec-plus-q25",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data to save storage space",
          "Converting plaintext into ciphertext",
          "Deleting files from a computer system",
          "Making data public for everyone to see"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q26",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption tools",
          "Hashing algorithms",
          "Network Firewalls"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q27",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing computer code for potential bugs",
          "Breaking a password using a brute force tool",
          "Converting ciphertext back into plaintext",
          "Downloading data from a remote computer server"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q28",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing your account passwords every single week",
          "Using a secure and encrypted web browser for access",
          "Using a very long and complex alphanumeric password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are.",
        "topic": "Implementation"
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
        "explanation": "SSH is the secure alternative to the unencrypted Telnet.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q30",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device for organizational data",
          "A specific type of math problem for students",
          "An actual explosive used in a combat zone",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q31",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager for all accounts",
          "A type of firewall for network protection",
          "Studying biological data sets for research",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q32",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two different accounts for one service",
          "The act of logging in twice to the same system",
          "Using two different passwords for one account",
          "Using two different types of credentials"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password.",
        "topic": "Implementation"
      },
      {
        "id": "sec-plus-q33",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test for computer components",
          "A network speed test for measuring bandwidth",
          "A test of ink levels in a professional printer",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture.",
        "topic": "Operations"
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
        "explanation": "If one layer fails, others are in place to stop the threat.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q35",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A professional phone repair shop in a city center",
          "A specific type of mobile app for playing games",
          "Hiring a professional mobile expert to manage devices",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q36",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range for large office buildings",
          "Better encryption and protection against brute force",
          "Cheaper hardware for small home applications",
          "Faster speeds only for all network connections"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q37",
        "question": "What is 'War Driving'?",
        "options": [
          "A specific type of high-speed car race",
          "A standard military exercise for troops",
          "Driving a large tank in a combat zone",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q38",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the hardware in the server room",
          "Detect viruses on a computer hard drive",
          "Filter traffic based on security rules",
          "Speed up the local internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q39",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real physical door at the back of a room",
          "A specific type of network security firewall",
          "A standard secure login for a web application"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q40",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow (Memory)",
          "Cross-site scripting (Web)",
          "SQLi (Injection)",
          "Tailgating (Physical)"
        ],
        "answer": "Tailgating (Physical)",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q41",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol for transmitting data",
          "A specific type of professional stenography",
          "Hiding data within other data (like an image)",
          "The act of writing very fast during a meeting"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect.",
        "topic": "Implementation"
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
        "explanation": "Zero-day threats have no available patch at the time of discovery.",
        "topic": "Attacks & Threats"
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
        "explanation": "A policy allowing employees to use personal devices for work.",
        "topic": "Governance"
      },
      {
        "id": "sec-plus-q44",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a physical hard drive with a cloth",
          "Running suspicious programs in an isolated area",
          "Testing website designs for better appearance",
          "The act of playing with sand on a large beach"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system.",
        "topic": "Operations"
      },
      {
        "id": "sec-plus-q45",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card at the building entrance",
          "Looking in a mirror to check your appearance",
          "Stating who you are (e.g., username)",
          "Taking a professional photo for a staff badge"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process.",
        "topic": "Security Core"
      },
      {
        "id": "sec-plus-q46",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest in all professional interactions",
          "Ensuring data has not been tampered with",
          "Keeping all organizational secrets safe",
          "Making sure the website is fast and responsive"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy.",
        "topic": "Security Core"
      },
      {
        "id": "sec-plus-q47",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password for accessing a secure system",
          "Creating a new account for a website or application",
          "Determining what an authenticated user can do",
          "The act of entering a building through the front door"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user.",
        "topic": "Governance"
      },
      {
        "id": "sec-plus-q48",
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure network protocol for transmitting data",
          "A type of antenna designed for receiving radio data",
          "Listening through a physical wall using a device",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "sec-plus-q49",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A secure and encrypted hardware hard drive",
          "A specific way to find lost files on a computer",
          "A standard backup system for organizational data",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit.",
        "topic": "Architecture"
      },
      {
        "id": "sec-plus-q50",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A large wooden statue from Greek mythology",
          "A standard secure downloader for applications",
          "A type of virus that replicates automatically",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms.",
        "topic": "Attacks & Threats"
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
        "title": "Billing & Pricing",
        "topics": [
          {
            "name": "Which AWS tool helps estimate monthly cloud costs?",
            "detail": "The calculator provides an estimate of your AWS bill based on planned usage."
          },
          {
            "name": "What is 'Reserved Instances'?",
            "detail": "Reserved instances can save a lot of money for long-term workloads."
          },
          {
            "name": "What is 'Spot Instances'?",
            "detail": "Spot instances can be interrupted if the provider needs the capacity."
          },
          {
            "name": "What is 'Cloud Billing'?",
            "detail": "Cloud billing is usually based on usage (pay-as-you-go)."
          },
          {
            "name": "What is the primary advantage of cloud computing?",
            "detail": "Cloud computing converts capital expenses into variable operational expenses."
          }
        ]
      },
      {
        "title": "Cloud Concepts",
        "topics": [
          {
            "name": "What is the benefit of 'Elasticity' in cloud computing?",
            "detail": "Elasticity allows a system to automatically add or remove resources to match load."
          },
          {
            "name": "What is 'IaaS'?",
            "detail": "IaaS provides fundamental compute, storage, and networking resources on demand."
          },
          {
            "name": "What does 'Scalability' mean in the cloud?",
            "detail": "Scalability can be vertical (size) or horizontal (number)."
          },
          {
            "name": "What is 'PaaS'?",
            "detail": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
          },
          {
            "name": "Which cloud model is a combination of public and private clouds?",
            "detail": "Hybrid clouds allow data and apps to be shared between public and private environments."
          },
          {
            "name": "What is 'Elasticity'?",
            "detail": "Elasticity is a core feature of cloud computing for cost efficiency."
          },
          {
            "name": "What is a 'Private Cloud'?",
            "detail": "Private clouds offer greater control and privacy."
          },
          {
            "name": "What is a 'Public Cloud'?",
            "detail": "Examples include AWS, Azure, and Google Cloud."
          },
          {
            "name": "What is 'High Availability' (HA)?",
            "detail": "HA is achieved through redundancy and failover mechanisms."
          },
          {
            "name": "What is 'Fault Tolerance'?",
            "detail": "Fault tolerance is a higher level of availability."
          },
          {
            "name": "What is a 'Cloud Service Provider' (CSP)?",
            "detail": "The 'Big Three' are AWS, Microsoft, and Google."
          },
          {
            "name": "What is 'SaaS'?",
            "detail": "SaaS delivers software applications over the internet on a subscription basis."
          }
        ]
      },
      {
        "title": "Security & Compliance",
        "topics": [
          {
            "name": "In the Shared Responsibility Model, who is responsible for patching the guest OS?",
            "detail": "AWS manages the infrastructure; the customer manages their data and OS."
          },
          {
            "name": "Which service is used to manage user access and permissions in AWS?",
            "detail": "Identity and Access Management (IAM) controls who can access AWS resources."
          },
          {
            "name": "What is the 'Shared Responsibility Model'?",
            "detail": "The provider secures the cloud; the customer secures what's in the cloud."
          },
          {
            "name": "What is 'Cloud Security'?",
            "detail": "Security is a shared responsibility in the cloud."
          },
          {
            "name": "What is 'Data Sovereignty'?",
            "detail": "Sovereignty is a major consideration for global cloud deployments."
          },
          {
            "name": "What is 'Identity and Access Management' (IAM)?",
            "detail": "IAM is a fundamental part of cloud security."
          }
        ]
      },
      {
        "title": "Technology",
        "topics": [
          {
            "name": "Which AWS service provides resizable compute capacity in the cloud?",
            "detail": "EC2 allows users to run virtual servers in the AWS cloud."
          },
          {
            "name": "What is 'Cloud Native'?",
            "detail": "Cloud-native apps leverage microservices and containers."
          },
          {
            "name": "What is an 'Availability Zone' (AZ)?",
            "detail": "AZs help ensure high availability and fault tolerance within a region."
          },
          {
            "name": "What is 'Microservices'?",
            "detail": "Microservices improve scalability and ease of deployment."
          },
          {
            "name": "What is a 'Virtual Private Cloud' (VPC)?",
            "detail": "VPCs allow users to define their own network topology."
          },
          {
            "name": "What is 'Virtualization' in cloud computing?",
            "detail": "Virtualization is the foundation of cloud computing."
          },
          {
            "name": "What is 'Object Storage'?",
            "detail": "Object storage is ideal for unstructured data like photos and videos."
          },
          {
            "name": "What is 'File Storage'?",
            "detail": "File storage is common for shared network drives."
          },
          {
            "name": "What is a 'Container'?",
            "detail": "Docker is a popular container technology."
          },
          {
            "name": "What is 'Hybrid IT'?",
            "detail": "Most large enterprises operate in a hybrid IT model."
          },
          {
            "name": "What is 'Cloud Logging'?",
            "detail": "Logs are essential for troubleshooting and security analysis."
          },
          {
            "name": "What is 'Edge Computing'?",
            "detail": "Edge computing reduces latency and bandwidth usage."
          },
          {
            "name": "What is 'Block Storage'?",
            "detail": "Block storage provides high performance for transaction-heavy apps."
          },
          {
            "name": "What is a 'Cloud Gateway'?",
            "detail": "Example: AWS Storage Gateway or Azure ExpressRoute."
          },
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest OSs."
          },
          {
            "name": "What is 'Serverless Database'?",
            "detail": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
          },
          {
            "name": "What is 'Content Delivery Network' (CDN)?",
            "detail": "CDNs reduce latency by serving content from a location near the user."
          },
          {
            "name": "What is 'DevOps' in the cloud?",
            "detail": "DevOps uses automation and CI/CD pipelines."
          },
          {
            "name": "What is 'Kubernetes'?",
            "detail": "Kubernetes is the standard for container orchestration."
          },
          {
            "name": "What is 'Disaster Recovery' (DR)?",
            "detail": "DR often involves multi-region backups and replication."
          },
          {
            "name": "What is a 'Cloud Migration'?",
            "detail": "Migration can be a complex and multi-stage process."
          },
          {
            "name": "What is 'Cloud Monitoring'?",
            "detail": "Example: Amazon CloudWatch or Azure Monitor."
          },
          {
            "name": "What is a 'Region' in cloud computing?",
            "detail": "Regions are geographically isolated areas where cloud resources are hosted."
          },
          {
            "name": "What is 'Auto Scaling'?",
            "detail": "Auto scaling ensures performance during peaks and saves money during lulls."
          },
          {
            "name": "What is 'Terraform'?",
            "detail": "Terraform is cloud-agnostic and supports many providers."
          },
          {
            "name": "What is 'Low Latency'?",
            "detail": "Low latency is critical for gaming and financial applications."
          },
          {
            "name": "What is 'Infrastructure as Code' (IaC)?",
            "detail": "IaC allows for consistent and repeatable deployments."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-ccp-q1",
        "question": "Which AWS service provides resizable compute capacity in the cloud?",
        "options": [
          "AWS Lambda (Serverless Functions)",
          "Amazon EC2 (Elastic Compute Cloud)",
          "Amazon RDS (Relational Database Service)",
          "Amazon S3 (Simple Storage Service)"
        ],
        "answer": "Amazon EC2 (Elastic Compute Cloud)",
        "category": "Core Knowledge",
        "explanation": "EC2 allows users to run virtual servers in the AWS cloud.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q2",
        "question": "In the Shared Responsibility Model, who is responsible for patching the guest OS?",
        "options": [
          "AWS Cloud is responsible",
          "Both parties are responsible",
          "The Customer is responsible",
          "Third-party vendor is responsible"
        ],
        "answer": "The Customer is responsible",
        "category": "Core Knowledge",
        "explanation": "AWS manages the infrastructure; the customer manages their data and OS.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-ccp-q3",
        "question": "Which service is used to manage user access and permissions in AWS?",
        "options": [
          "AWS Config (Configuration Auditing Tool)",
          "AWS IAM (Identity and Access Management)",
          "AWS Shield (DDoS Protection Service)",
          "Amazon CloudWatch (Monitoring Service)"
        ],
        "answer": "AWS IAM (Identity and Access Management)",
        "category": "Core Knowledge",
        "explanation": "Identity and Access Management (IAM) controls who can access AWS resources.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-ccp-q4",
        "question": "What is the benefit of 'Elasticity' in cloud computing?",
        "options": [
          "Ability of having a static IP address",
          "Ability to scale resources based on demand",
          "Capability of accessing data from anywhere",
          "Requirement of paying a fixed monthly fee"
        ],
        "answer": "Ability to scale resources based on demand",
        "category": "Core Knowledge",
        "explanation": "Elasticity allows a system to automatically add or remove resources to match load.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q5",
        "question": "Which AWS tool helps estimate monthly cloud costs?",
        "options": [
          "AWS Pricing Calculator",
          "AWS Shield Advanced",
          "AWS Trusted Advisor",
          "Amazon Inspector Tool"
        ],
        "answer": "AWS Pricing Calculator",
        "category": "Core Knowledge",
        "explanation": "The calculator provides an estimate of your AWS bill based on planned usage.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-ccp-q6",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A person who was born in the cloud computing era",
          "A public cloud provider such as AWS or Azure",
          "A specific type of software for managing data",
          "Applications designed specifically for the cloud environment"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q7",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive used for storing sensitive data sets",
          "A large city-wide computer network for the general public",
          "A single server rack located inside a small data center",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q8",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple application for tracking data sets",
          "A type of computer chip for mobile devices",
          "A very small server used for local hosting",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q9",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A personal server hosted in a private home",
          "A private network section within a public cloud",
          "A secure website with a SSL certificate",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q10",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset used for playing immersive virtual reality computer games",
          "A computer game designed for teaching general technology concepts",
          "A fake cloud-based service that does not have any real data sets",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q11",
        "question": "What is 'Object Storage'?",
        "options": [
          "A simple hierarchical folder stored on a personal computer",
          "A specific type of database optimized for storing metadata",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects in a warehouse or storage facility"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q12",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A collaborative group project for a university course",
          "A framework defining security tasks for provider and customer",
          "Sharing a secure account password with another team member",
          "Splitting the monthly cloud bill between multiple departments"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-ccp-q13",
        "question": "What is 'File Storage'?",
        "options": [
          "A copy of data saved on a standard physical compact disc",
          "A physical filing cabinet used for storing paper documents",
          "A specific type of cloud service for general data storage",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q14",
        "question": "What is a 'Container'?",
        "options": [
          "A large physical box used for shipping computer servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure and locked room for housing organizational data",
          "A specific type of storage device for saving digital files"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q15",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A fast internet connection for high-speed transfers",
          "A specialized computer that runs on natural gas",
          "A standard computer server for managing data sets",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model.",
        "topic": "Technology"
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
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q17",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A specific type of storage device for local data backups",
          "Recording events and activities in the cloud for auditing",
          "The act of cutting down trees for timber production",
          "The act of writing a personal diary at the end of the day"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q18",
        "question": "What is 'Edge Computing'?",
        "options": [
          "A fast internet connection used for general home browsing",
          "Building a physical cloud data center on a mountain cliff",
          "Processing data closer to the source of data generation",
          "Using the latest computer hardware for high-speed processing"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q19",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A physical lock placed on a computer server in a rack",
          "A professional security guard working in a data center",
          "A secure and encrypted web browser for accessing the web",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-ccp-q20",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system for saving organizational data",
          "A private server for an individual organization",
          "A specific type of storage for active data sets",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-ccp-q21",
        "question": "What is 'Block Storage'?",
        "options": [
          "A large wall made of physical computer servers in a rack",
          "A secure and locked vault used for storing physical data",
          "A specific type of computer memory for high-speed tasks",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q22",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A physical server with spots on its chassis",
          "A specific type of storage for active data sets",
          "A temporary cloud environment for testing apps",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-ccp-q23",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A high-speed router for local area networks",
          "A physical entrance to a secured data center",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q24",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A highly secure database with advanced encryption",
          "A king or monarch ruling over a cloud-based kingdom",
          "A specific type of storage device for local data sets",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-ccp-q25",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A professional manager who oversees a cloud department",
          "A specific type of high-speed network cable for data",
          "A very fast computer processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs.",
        "topic": "Technology"
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
        "explanation": "Scalability can be vertical (size) or horizontal (number).",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q27",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database stored on a physical USB flash drive",
          "A database that scales automatically and has no fixed cost",
          "A simple text file stored in a cloud environment",
          "A standard database that is available for everyone"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q28",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A physical driver's license used for identification",
          "A security guard who protects the data center building",
          "A standard login page for a website or application",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security.",
        "topic": "Security & Compliance"
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
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q30",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill sent through the standard mail",
          "A specific type of payment for web services",
          "A standard software license for applications",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go).",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-ccp-q31",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A fast internet connection for home users to browse the web",
          "A system of distributed servers that deliver web content to users",
          "A television station for broadcasting news and information",
          "A type of storage device for local backups of data files"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q32",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer who designs data centers",
          "A programming language used for cloud apps",
          "A specific type of cloud for development tasks",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q33",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A programming language used for creating web applications",
          "A public cloud provider for storing organizational data",
          "A specific type of database optimized for container data",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration.",
        "topic": "Technology"
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
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments.",
        "topic": "Cloud Concepts"
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
        "explanation": "Cloud computing converts capital expenses into variable operational expenses.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-ccp-q36",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable used for connecting networking devices",
          "A specific type of cloud-based service for data storage",
          "A very fast network speed for transmitting large data sets",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q37",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud-based service that is protected with a password",
          "A hidden data center facility with no public access points",
          "A personal hard drive used for storing digital information",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q38",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A standard backup saved on a physical USB drive",
          "A standard government program for disaster relief",
          "Plans and processes to restore IT systems after a major failure",
          "The simple act of fixing a broken personal computer"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q39",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A free Wi-Fi hotspot available for public use in a city",
          "A generic cloud-based service that is open for everyone to use",
          "A government-owned and operated internal computer network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q40",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Buying new computer servers for an internal data center",
          "Moving data and apps from on-premises to the cloud",
          "The act of updating a website with new content and images",
          "The natural process of birds flying south during winter"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q41",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A fast internet connection for data transfers",
          "A public cloud service for everyone to use",
          "A very tall server rack in a data center",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q42",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard who monitors the server room",
          "A standard software update for computer apps",
          "Observing the performance and health of cloud resources",
          "The act of watching a cloud in the natural sky"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q43",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A hardware warranty that covers parts and labor costs",
          "A minor bug in the software application source code",
          "The ability of a system to continue operating even if a component fails",
          "The act of being very patient during a system outage"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q44",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A large country-wide computer network for public use",
          "A physical location containing multiple availability zones",
          "A single data center facility located in a remote area",
          "A virtual private cloud connection for an individual"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q45",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A self-adjusting physical scale used for measuring weight",
          "A specific type of cloud billing for managing monthly costs",
          "A standard hardware upgrade for increasing system speed",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q46",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer that produces computer components",
          "A standard internet provider for home and business use",
          "A website developer who creates online content and sites"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q47",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service (SaaS)",
          "Software as a Service (SaaS)",
          "Storage as a Service (SaaS)",
          "System as a Service (SaaS)"
        ],
        "answer": "Software as a Service (SaaS)",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-ccp-q48",
        "question": "What is 'Terraform'?",
        "options": [
          "A database system for storing user profiles",
          "A planet in the solar system such as Earth",
          "A popular tool for Infrastructure as Code",
          "A public cloud provider for data storage"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q49",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud service with low capacity",
          "A slow network with many interruptions",
          "A small file size for fast transmission",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications.",
        "topic": "Technology"
      },
      {
        "id": "aws-ccp-q50",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual for installing server equipment",
          "A type of cloud billing for managing monthly costs",
          "Managing infrastructure using configuration files and code",
          "Writing computer code on a local developer server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments.",
        "topic": "Technology"
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
        "title": "Business Environment",
        "topics": [
          {
            "name": "What is a 'PMO' (Project Management Office)?",
            "detail": "PMOs provide standards, templates, and support."
          },
          {
            "name": "What is 'Portfolio Management'?",
            "detail": "Portfolio management focuses on selecting the right work."
          },
          {
            "name": "What is 'Project Governance'?",
            "detail": "Governance ensures the project aligns with organizational goals."
          },
          {
            "name": "What is 'Program Management'?",
            "detail": "Programs deliver more value together than as separate projects."
          }
        ]
      },
      {
        "title": "People",
        "topics": [
          {
            "name": "How should a project manager handle a highly influential but resistant stakeholder?",
            "detail": "Engagement is key to converting or mitigating the impact of resistant stakeholders."
          },
          {
            "name": "What is a 'Daily Stand-up'?",
            "detail": "Stand-ups are key to Agile sync and identifying blockers early."
          },
          {
            "name": "Who are 'Stakeholders'?",
            "detail": "Stakeholders include the team, customers, sponsors, and more."
          },
          {
            "name": "What is 'Resource Management'?",
            "detail": "It ensures resources are available when needed."
          },
          {
            "name": "What is the role of the 'Scrum Master'?",
            "detail": "The Scrum Master helps the team follow Scrum values and removes blockers."
          },
          {
            "name": "What is a 'Stakeholder Registry'?",
            "detail": "It helps in planning stakeholder engagement."
          }
        ]
      },
      {
        "title": "Process",
        "topics": [
          {
            "name": "In Scrum, who is responsible for prioritizing the Product Backlog?",
            "detail": "The Product Owner represents the business and prioritizes work for the team."
          },
          {
            "name": "What is the 'Critical Path' in a project schedule?",
            "detail": "The critical path determines the minimum duration of the project."
          },
          {
            "name": "Which methodology uses 'Sprints' to deliver incremental value?",
            "detail": "Agile frameworks like Scrum break work into short time-boxed iterations."
          },
          {
            "name": "What does EVM stand for in project management?",
            "detail": "EVM is a technique used to measure project performance and progress."
          },
          {
            "name": "What does 'Scope Creep' mean?",
            "detail": "Scope creep occurs when new features are added without adjusting time or budget."
          },
          {
            "name": "What is 'Velocity' in Agile?",
            "detail": "Velocity helps in planning future sprints."
          },
          {
            "name": "What does 'KPI' stand for?",
            "detail": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
          },
          {
            "name": "What is a 'User Story'?",
            "detail": "User stories help teams understand user needs."
          },
          {
            "name": "What is 'Quality Control' (QC)?",
            "detail": "QC is focused on the deliverables themselves."
          },
          {
            "name": "What is 'Sprint Planning'?",
            "detail": "The team selects items from the product backlog."
          },
          {
            "name": "What is a 'Lessons Learned' session?",
            "detail": "Lessons learned improve future project performance."
          },
          {
            "name": "What is 'Cost Baseline'?",
            "detail": "The baseline includes all authorized expenses."
          },
          {
            "name": "What is a 'SOW' (Statement of Work)?",
            "detail": "SOW defines the scope, schedule, and deliverables for a vendor."
          },
          {
            "name": "What is a 'Story Point'?",
            "detail": "Story points account for complexity, effort, and risk."
          },
          {
            "name": "What is 'Backlog Grooming' (or Refinement)?",
            "detail": "Grooming ensures the backlog is ready for planning."
          },
          {
            "name": "What is a 'Sprint Retrospective'?",
            "detail": "The team identifies improvements for the next sprint."
          },
          {
            "name": "What is 'Lean' project management?",
            "detail": "Lean originated in manufacturing and is widely used in IT."
          },
          {
            "name": "What is 'Scrum'?",
            "detail": "Scrum uses roles, events, and artifacts to manage complex work."
          },
          {
            "name": "What is a 'Burndown Chart'?",
            "detail": "Burndown charts help teams track their progress during a sprint."
          },
          {
            "name": "What is a 'Milestone'?",
            "detail": "Milestones help track progress towards major goals."
          },
          {
            "name": "What is 'Iterative Development'?",
            "detail": "Each iteration improves the product based on feedback."
          },
          {
            "name": "What is a 'Gantt Chart'?",
            "detail": "Gantt charts show tasks over time and their dependencies."
          },
          {
            "name": "What is a 'Product Backlog'?",
            "detail": "The backlog is constantly evolving and managed by the Product Owner."
          },
          {
            "name": "What is 'Incremental Delivery'?",
            "detail": "Incremental delivery allows for early feedback and value."
          },
          {
            "name": "What is 'Agile Manifesto'?",
            "detail": "The manifesto was created by 17 software developers in 2001."
          },
          {
            "name": "What is the 'MVP' in product development?",
            "detail": "An MVP has just enough features to satisfy early customers and provide feedback."
          },
          {
            "name": "What is 'Change Management'?",
            "detail": "It ensures changes are properly reviewed and approved."
          },
          {
            "name": "What is a 'Project Charter'?",
            "detail": "The charter gives the project manager authority to use resources."
          },
          {
            "name": "What is 'PRINCE2'?",
            "detail": "PRINCE2 stands for Projects IN Controlled Environments."
          },
          {
            "name": "What is an 'Epic'?",
            "detail": "Epics often span multiple sprints."
          },
          {
            "name": "What is 'Planning Poker'?",
            "detail": "Teams use cards to estimate story points anonymously."
          },
          {
            "name": "What is 'Agile' methodology?",
            "detail": "Agile focuses on delivering value quickly and adapting to change."
          },
          {
            "name": "What is 'Project Budget'?",
            "detail": "Managing the budget is a key responsibility of the project manager."
          },
          {
            "name": "What is a 'Sprint Review'?",
            "detail": "The team gets feedback from stakeholders."
          },
          {
            "name": "What is 'Kanban'?",
            "detail": "Kanban helps visualize workflow and limit work-in-progress."
          },
          {
            "name": "What is a 'Feature' in project management?",
            "detail": "Features are often broken down into user stories."
          },
          {
            "name": "What is 'Risk Management'?",
            "detail": "Management involves mitigation, transfer, acceptance, or avoidance."
          },
          {
            "name": "What is 'Procurement Management'?",
            "detail": "It involves contracts, vendors, and purchasing."
          },
          {
            "name": "What is 'Project Scope'?",
            "detail": "Defining scope is essential to prevent uncontrolled changes."
          },
          {
            "name": "What is 'Earned Value Management' (EVM)?",
            "detail": "EVM integrates scope, schedule, and cost metrics."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pmp-q1",
        "question": "In Scrum, who is responsible for prioritizing the Product Backlog?",
        "options": [
          "The Development Team members",
          "The Product Owner of the project",
          "The Project Manager of the org",
          "The Scrum Master of the team"
        ],
        "answer": "The Product Owner of the project",
        "category": "Core Knowledge",
        "explanation": "The Product Owner represents the business and prioritizes work for the team.",
        "topic": "Process"
      },
      {
        "id": "pmp-q2",
        "question": "What is the 'Critical Path' in a project schedule?",
        "options": [
          "Tasks with the most budget allocated",
          "The list of easy tasks in the project",
          "The longest sequence of dependent tasks",
          "The shortest sequence of tasks available"
        ],
        "answer": "The longest sequence of dependent tasks",
        "category": "Core Knowledge",
        "explanation": "The critical path determines the minimum duration of the project.",
        "topic": "Process"
      },
      {
        "id": "pmp-q3",
        "question": "Which methodology uses 'Sprints' to deliver incremental value?",
        "options": [
          "Agile frameworks such as Scrum",
          "PRINCE2 structured methodology",
          "Six Sigma process improvement",
          "Waterfall sequential methodology"
        ],
        "answer": "Agile frameworks such as Scrum",
        "category": "Core Knowledge",
        "explanation": "Agile frameworks like Scrum break work into short time-boxed iterations.",
        "topic": "Process"
      },
      {
        "id": "pmp-q4",
        "question": "How should a project manager handle a highly influential but resistant stakeholder?",
        "options": [
          "Assign them more technical tasks",
          "Ignore them until the project ends",
          "Manage closely and engage frequently",
          "Remove them from the project team"
        ],
        "answer": "Manage closely and engage frequently",
        "category": "Core Knowledge",
        "explanation": "Engagement is key to converting or mitigating the impact of resistant stakeholders.",
        "topic": "People"
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
        "explanation": "EVM is a technique used to measure project performance and progress.",
        "topic": "Process"
      },
      {
        "id": "pmp-q6",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A decrease in the project budget allocation",
          "A minor bug in the software application",
          "A slow project manager who misses deadlines",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget.",
        "topic": "Process"
      },
      {
        "id": "pmp-q7",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol designed for fast data transmission",
          "A type of computer code used for measuring system speed",
          "The speed of a car traveling on a long highway journey"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints.",
        "topic": "Process"
      },
      {
        "id": "pmp-q8",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer that produces project equipment",
          "A type of computer designed for project management tasks",
          "A website developer who specializes in project portals"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support.",
        "topic": "Business Environment"
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
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives.",
        "topic": "Process"
      },
      {
        "id": "pmp-q10",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story told to children before they go to sleep",
          "A short description of a feature from an end-user perspective",
          "A software manual explaining how to use system features",
          "A type of book that contains many different short stories"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs.",
        "topic": "Process"
      },
      {
        "id": "pmp-q11",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty for repairing broken components",
          "A software tool designed for tracking project tasks",
          "Controlling the team members and their activities",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves.",
        "topic": "Process"
      },
      {
        "id": "pmp-q12",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A specific type of project that requires rapid development",
          "A standard software update for project management applications",
          "The act of running a race at maximum speed for a distance"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog.",
        "topic": "Process"
      },
      {
        "id": "pmp-q13",
        "question": "What is a 'Lessons Learned' session?",
        "options": [
          "A classroom lecture given by a senior project manager",
          "A meeting to discuss what went well and what didn't in a project",
          "A standard software update for project management apps",
          "A type of test designed to evaluate project knowledge"
        ],
        "answer": "A meeting to discuss what went well and what didn't in a project",
        "category": "Domain Review",
        "explanation": "Lessons learned improve future project performance.",
        "topic": "Process"
      },
      {
        "id": "pmp-q14",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A low-cost project designed for small organizations and teams",
          "A standard financial report generated at the end of the year",
          "A type of database optimized for storing project budget data",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses.",
        "topic": "Process"
      },
      {
        "id": "pmp-q15",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report detailing the project expenditures",
          "A list of team members and their contact information",
          "A specific type of pig found on a residential farm"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor.",
        "topic": "Process"
      },
      {
        "id": "pmp-q16",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session for developers",
          "A short daily meeting to discuss progress",
          "A weekly project review for the entire team",
          "An exercise break for the team members"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early.",
        "topic": "People"
      },
      {
        "id": "pmp-q17",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users who will use the product",
          "Only the investors who provide the funding",
          "Only the project team members and managers"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more.",
        "topic": "People"
      },
      {
        "id": "pmp-q18",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol designed for transmitting project data sets",
          "A specific part of a book that contains a narrative or tale",
          "A type of computer code used for project management tasks",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk.",
        "topic": "Process"
      },
      {
        "id": "pmp-q19",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account used for tracking project expenses",
          "A leather folder used for carrying project documents",
          "A type of database optimized for storing project data",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work.",
        "topic": "Business Environment"
      },
      {
        "id": "pmp-q20",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A specific type of software bug found in the backlog",
          "A standard financial report on the state of the backlog",
          "Keeping the product backlog up to date and prioritized",
          "The act of cleaning a room and organizing all its items"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning.",
        "topic": "Process"
      },
      {
        "id": "pmp-q21",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A standard software update for project management applications",
          "A type of test designed to evaluate the team's performance",
          "The act of looking back in time to study historical events"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint.",
        "topic": "Process"
      },
      {
        "id": "pmp-q22",
        "question": "What is 'Lean' project management?",
        "options": [
          "A fast-paced and highly efficient project methodology",
          "A small project that requires very few resources",
          "A specific type of physical exercise for project teams",
          "Focusing on maximizing value and minimizing waste"
        ],
        "answer": "Focusing on maximizing value and minimizing waste",
        "category": "Domain Review",
        "explanation": "Lean originated in manufacturing and is widely used in IT.",
        "topic": "Process"
      },
      {
        "id": "pmp-q23",
        "question": "What is 'Scrum'?",
        "options": [
          "A framework for implementing Agile development",
          "A software tool designed for tracking team tasks",
          "A standard rugby formation used during a match",
          "A type of database optimized for project data"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work.",
        "topic": "Process"
      },
      {
        "id": "pmp-q24",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A graphical representation of work remaining versus time",
          "A physical fire hazard in a project management office",
          "A standard financial report showing monthly project costs",
          "A type of database optimized for storing chart information"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint.",
        "topic": "Process"
      },
      {
        "id": "pmp-q25",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock found on the side of a highway",
          "A significant point or event in a project",
          "A task that takes exactly one hour to finish",
          "A unit of distance used for long-range travel"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals.",
        "topic": "Process"
      },
      {
        "id": "pmp-q26",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol designed for transmitting iterative data",
          "A type of computer code used for creating iterative loops",
          "Developing a product through repeated cycles (iterations)",
          "The act of repeating a task multiple times for consistency"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback.",
        "topic": "Process"
      },
      {
        "id": "pmp-q27",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema for storing project data",
          "A financial spreadsheet for tracking costs",
          "A risk management framework for the team",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies.",
        "topic": "Process"
      },
      {
        "id": "pmp-q28",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A detailed list of all software bugs found in a product",
          "A large physical storage room for keeping product parts",
          "A prioritized list of everything that might be needed in a product",
          "A standard financial report on the annual product sales"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner.",
        "topic": "Process"
      },
      {
        "id": "pmp-q29",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A standard delivery truck for shipping consumer goods",
          "A standard software update designed to fix minor system bugs",
          "A type of storage device used for saving product archives",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value.",
        "topic": "Process"
      },
      {
        "id": "pmp-q30",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about different types of projects and teams",
          "A document outlining the values and principles of Agile",
          "A hardware manual for installing networking equipment",
          "A specific type of software for managing Agile tasks"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001.",
        "topic": "Process"
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
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback.",
        "topic": "Process"
      },
      {
        "id": "pmp-q32",
        "question": "What is 'Resource Management'?",
        "options": [
          "A standard software update for project management apps",
          "A type of database optimized for storing project data",
          "Finding new resources to be used for the project",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed.",
        "topic": "People"
      },
      {
        "id": "pmp-q33",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware for the development system",
          "Exchanging money from one currency to another",
          "Hiring new people to join the project team"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved.",
        "topic": "Process"
      },
      {
        "id": "pmp-q34",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A detailed map of the world for navigation",
          "A document that formally authorizes a project",
          "A financial contract between two different parties",
          "A list of team members and their assignments"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources.",
        "topic": "Process"
      },
      {
        "id": "pmp-q35",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard for maintaining equipment consistency",
          "A high-ranking member of a royal or noble family in Europe",
          "A structured project management methodology used widely in Europe",
          "A type of computer software for managing project structures"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments.",
        "topic": "Process"
      },
      {
        "id": "pmp-q36",
        "question": "What is an 'Epic'?",
        "options": [
          "A large body of work that can be broken down into many user stories",
          "A software manual that describes the entire system architecture",
          "A type of movie with a long duration and a very large budget",
          "A very long poem that tells a story of heroic deeds and events"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints.",
        "topic": "Process"
      },
      {
        "id": "pmp-q37",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency responsible for project oversight",
          "A security guard responsible for project site safety",
          "A set of laws and regulations for managing projects",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals.",
        "topic": "Business Environment"
      },
      {
        "id": "pmp-q38",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A consensus-based estimation technique for user stories",
          "A software tool used for tracking project development",
          "A standard card game played with a deck of 52 cards",
          "A type of financial gamble involving project outcomes"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously.",
        "topic": "Process"
      },
      {
        "id": "pmp-q39",
        "question": "What is 'Agile' methodology?",
        "options": [
          "A set of strict rules for managing organizational tasks",
          "A type of competitive sport played by professional teams",
          "A very fast router designed for high-speed networks",
          "An iterative approach to project management and software development"
        ],
        "answer": "An iterative approach to project management and software development",
        "category": "Domain Review",
        "explanation": "Agile focuses on delivering value quickly and adapting to change.",
        "topic": "Process"
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
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers.",
        "topic": "People"
      },
      {
        "id": "pmp-q41",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer who designs program architecture",
          "A type of software application for managing programs",
          "Managing a group of related projects to achieve benefits",
          "The act of writing many different computer programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects.",
        "topic": "Business Environment"
      },
      {
        "id": "pmp-q42",
        "question": "What is 'Project Budget'?",
        "options": [
          "A detailed list of tasks required to complete a project",
          "A software manual explaining how to manage project costs",
          "A standard financial ledger for tracking company expenses",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager.",
        "topic": "Process"
      },
      {
        "id": "pmp-q43",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A meeting to demonstrate the work completed during the sprint",
          "A standard financial report generated at the end of a sprint",
          "A type of test designed to evaluate the quality of a sprint",
          "The act of checking a website for new content and updates"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders.",
        "topic": "Process"
      },
      {
        "id": "pmp-q44",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car designed for high-performance driving",
          "A financial report that lists all project expenditures",
          "A system for managing work as it moves through a process",
          "A type of computer code used for project management"
        ],
        "answer": "A system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress.",
        "topic": "Process"
      },
      {
        "id": "pmp-q45",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol designed for transmitting feature data",
          "A specific part of a movie that features a main character",
          "A type of computer code used for adding new functionalities"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories.",
        "topic": "Process"
      },
      {
        "id": "pmp-q46",
        "question": "What is 'Risk Management'?",
        "options": [
          "A specific type of insurance for project management",
          "Avoiding all risks by not starting any new projects",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances to achieve high project rewards"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance.",
        "topic": "Process"
      },
      {
        "id": "pmp-q47",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger for tracking project expenses",
          "A list of project tasks and their current status",
          "A simple guest book for visitors to sign their names"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement.",
        "topic": "People"
      },
      {
        "id": "pmp-q48",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of high-capacity storage for project data",
          "Hiring new people to work on the project tasks",
          "Managing the purchase of goods and services for a project",
          "Writing computer code for a software application"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing.",
        "topic": "Process"
      },
      {
        "id": "pmp-q49",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope used for astronomical viewing",
          "The total budget allocated for a specific project",
          "The unique name given to a specific project task",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes.",
        "topic": "Process"
      },
      {
        "id": "pmp-q50",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual that explains how to use EVM tools",
          "A specific way to earn money through project tasks",
          "A technique to measure project performance and progress",
          "A type of store that sells project management tools"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics.",
        "topic": "Process"
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
        "title": "Hardware",
        "topics": [
          {
            "name": "Which component acts as the 'brain' of the computer?",
            "detail": "The Central Processing Unit (CPU) executes instructions and processes data."
          },
          {
            "name": "Which port is used for a standard wired network connection?",
            "detail": "The Registered Jack 45 (RJ-45) is the standard connector for Ethernet cables."
          },
          {
            "name": "Which storage type has no moving parts and is faster than a traditional HDD?",
            "detail": "Solid State Drives (SSDs) use flash memory for high-speed data access."
          },
          {
            "name": "What is 'Data Center'?",
            "detail": "Data centers include redundant power, cooling, and security."
          },
          {
            "name": "What is 'Failover'?",
            "detail": "Failover is crucial for high availability."
          },
          {
            "name": "What is a 'Router'?",
            "detail": "Routers operate at the Network Layer (Layer 3)."
          },
          {
            "name": "What is 'Clustering'?",
            "detail": "Clusters improve performance, scalability, and availability."
          },
          {
            "name": "What is 'Colocation'?",
            "detail": "Colocation provides professional infrastructure and connectivity."
          },
          {
            "name": "What is 'RAID'?",
            "detail": "RAID uses multiple hard drives to provide data redundancy and/or improve performance."
          },
          {
            "name": "What is 'TPM' (Trusted Platform Module)?",
            "detail": "TPM is used for disk encryption and secure authentication."
          },
          {
            "name": "What is 'UEFI'?",
            "detail": "UEFI provides a more advanced and secure boot environment."
          },
          {
            "name": "What is 'Virtualization'?",
            "detail": "Virtualization allows running multiple independent systems on a single physical machine."
          },
          {
            "name": "What is 'HDD' (Hard Disk Drive)?",
            "detail": "HDDs offer larger capacities at a lower cost than SSDs."
          },
          {
            "name": "What is 'RAM' (Random Access Memory)?",
            "detail": "RAM is volatile, meaning data is lost when power is removed."
          },
          {
            "name": "What is 'Load Balancing'?",
            "detail": "Load balancing improves performance and availability."
          },
          {
            "name": "What is 'RAID 1'?",
            "detail": "RAID 1 provides high fault tolerance by duplicating data."
          },
          {
            "name": "What is 'SSD' (Solid State Drive)?",
            "detail": "SSDs are much faster and more durable than traditional HDDs."
          },
          {
            "name": "What is 'PSU' (Power Supply Unit)?",
            "detail": "The PSU provides power to all computer components."
          },
          {
            "name": "What is 'Rack' in a data center?",
            "detail": "Server racks are usually 19 or 23 inches wide."
          },
          {
            "name": "What is a 'UPS' (Uninterruptible Power Supply)?",
            "detail": "UPS protects equipment from power outages and surges."
          },
          {
            "name": "What is 'Mainframe'?",
            "detail": "Mainframes are still used in large-scale industries like banking."
          },
          {
            "name": "What is 'Form Factor'?",
            "detail": "Examples include ATX, Micro-ATX, and ITX."
          },
          {
            "name": "What is 'Blade Server'?",
            "detail": "Blade servers save space and improve energy efficiency."
          },
          {
            "name": "What is 'BIOS Update'?",
            "detail": "BIOS updates can fix hardware compatibility issues."
          },
          {
            "name": "What is 'KVM Switch'?",
            "detail": "KVM switches are used for managing server racks."
          },
          {
            "name": "What is 'Motherboard'?",
            "detail": "The motherboard connects all other components together."
          },
          {
            "name": "What is a 'Switch' in networking?",
            "detail": "Switches operate at the Data Link Layer (Layer 2)."
          },
          {
            "name": "What is 'Firmware'?",
            "detail": "Firmware is stored on hardware devices like routers and SSDs."
          },
          {
            "name": "What is 'CPU' (Central Processing Unit)?",
            "detail": "The CPU is the 'brain' of the computer."
          },
          {
            "name": "What is 'RAID 5'?",
            "detail": "RAID 5 provides a good balance of performance and fault tolerance."
          },
          {
            "name": "What is 'GPU' (Graphics Processing Unit)?",
            "detail": "GPUs are used for graphics rendering and scientific computing."
          },
          {
            "name": "What is 'CMOS Battery'?",
            "detail": "The CMOS battery maintains the date, time, and BIOS settings."
          }
        ]
      },
      {
        "title": "Operating Systems",
        "topics": [
          {
            "name": "What command is used to check the IP configuration on a Windows machine?",
            "detail": "The ipconfig command displays all current TCP/IP network configuration values."
          },
          {
            "name": "What is 'Snapshot' in storage?",
            "detail": "Snapshots are often used for quick recovery and testing."
          },
          {
            "name": "What is 'Secure Boot'?",
            "detail": "Secure Boot protects against malware during the boot process."
          },
          {
            "name": "What is a 'MAC Address'?",
            "detail": "MAC addresses are physical addresses baked into hardware."
          },
          {
            "name": "What is 'SSH' (Secure Shell)?",
            "detail": "SSH is commonly used for remote login to Linux servers."
          },
          {
            "name": "What is 'Active Directory' (AD)?",
            "detail": "AD manages users, computers, and other objects in a network."
          },
          {
            "name": "What is 'Docker' used for?",
            "detail": "Docker packages apps and their dependencies into portable containers."
          },
          {
            "name": "What is 'Patch Management'?",
            "detail": "Patches fix bugs, improve performance, and close security holes."
          },
          {
            "name": "What is a 'Firewall'?",
            "detail": "Firewalls are the first line of defense in network security."
          },
          {
            "name": "What is 'Uptime'?",
            "detail": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure."
          },
          {
            "name": "What is 'SLA' (Service Level Agreement)?",
            "detail": "SLAs often include uptime guarantees and penalties."
          },
          {
            "name": "What is 'Downtime'?",
            "detail": "Downtime can result in lost revenue and reputation."
          },
          {
            "name": "What is 'Linux'?",
            "detail": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
          },
          {
            "name": "What is an 'IP Address'?",
            "detail": "IP addresses can be static or dynamic."
          },
          {
            "name": "What is 'VPN' (Virtual Private Network)?",
            "detail": "VPNs are used for secure remote access and privacy."
          },
          {
            "name": "What is 'DHCP'?",
            "detail": "DHCP makes network management much easier."
          },
          {
            "name": "What is 'Backup'?",
            "detail": "Backups are essential for data protection."
          }
        ]
      },
      {
        "title": "Troubleshooting",
        "topics": [
          {
            "name": "What is the first step in the troubleshooting process?",
            "detail": "You must first understand what is wrong before attempting to fix it."
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
        "explanation": "The Central Processing Unit (CPU) executes instructions and processes data.",
        "topic": "Hardware"
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
        "explanation": "You must first understand what is wrong before attempting to fix it.",
        "topic": "Troubleshooting"
      },
      {
        "id": "aplus-q3",
        "question": "Which port is used for a standard wired network connection?",
        "options": [
          "DP connector",
          "HDMI connector",
          "RJ-45 connector",
          "USB-C connector"
        ],
        "answer": "RJ-45 connector",
        "category": "Core Knowledge",
        "explanation": "The Registered Jack 45 (RJ-45) is the standard connector for Ethernet cables.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q4",
        "question": "Which storage type has no moving parts and is faster than a traditional HDD?",
        "options": [
          "Compact Disc (CD-ROM)",
          "Flexible Floppy Disc",
          "Magnetic Tape Drive",
          "Solid State Drive (SSD)"
        ],
        "answer": "Solid State Drive (SSD)",
        "category": "Core Knowledge",
        "explanation": "Solid State Drives (SSDs) use flash memory for high-speed data access.",
        "topic": "Hardware"
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
        "explanation": "The ipconfig command displays all current TCP/IP network configuration values.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q6",
        "question": "What is 'Data Center'?",
        "options": [
          "A facility used to house computer systems and associated components",
          "A hardware guard that protects the main entrance of a room",
          "A small office room containing a few computer servers",
          "A type of storage device used for saving digital archives"
        ],
        "answer": "A facility used to house computer systems and associated components",
        "category": "Domain Review",
        "explanation": "Data centers include redundant power, cooling, and security.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q7",
        "question": "What is 'Snapshot' in storage?",
        "options": [
          "A copy of a system or data at a specific point in time",
          "A digital photograph taken with a standard camera",
          "A hardware upgrade for increasing computer memory",
          "A type of high-speed storage for active data files"
        ],
        "answer": "A copy of a system or data at a specific point in time",
        "category": "Domain Review",
        "explanation": "Snapshots are often used for quick recovery and testing.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q8",
        "question": "What is 'Secure Boot'?",
        "options": [
          "A hardware guard that protects the internal components of a computer",
          "A security standard that ensures a device boots using only trusted software",
          "A standard password required to access a personal computer system",
          "A type of antivirus software designed to scan for malware"
        ],
        "answer": "A security standard that ensures a device boots using only trusted software",
        "category": "Domain Review",
        "explanation": "Secure Boot protects against malware during the boot process.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q9",
        "question": "What is a 'MAC Address'?",
        "options": [
          "A physical home address for receiving standard postal mail",
          "A unique identifier assigned to a network interface controller",
          "A unique phone number for making voice calls and texts",
          "A unique serial number assigned to a specific device"
        ],
        "answer": "A unique identifier assigned to a network interface controller",
        "category": "Domain Review",
        "explanation": "MAC addresses are physical addresses baked into hardware.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q10",
        "question": "What is 'Failover'?",
        "options": [
          "A complete failure of a project to meet its objectives",
          "A hardware warranty that covers component repair",
          "A standard software bug that causes a crash",
          "Automatically switching to a redundant or standby system upon failure"
        ],
        "answer": "Automatically switching to a redundant or standby system upon failure",
        "category": "Domain Review",
        "explanation": "Failover is crucial for high availability.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q11",
        "question": "What is a 'Router'?",
        "options": [
          "A device that connects devices on a local area network",
          "A device that forwards data packets between computer networks",
          "A device that regenerates signals for long distance",
          "A simple device that connects multiple computers in a hub"
        ],
        "answer": "A device that forwards data packets between computer networks",
        "category": "Domain Review",
        "explanation": "Routers operate at the Network Layer (Layer 3).",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q12",
        "question": "What is 'Clustering'?",
        "options": [
          "A hardware update for increasing server processing speed",
          "A large group of people standing close to each other",
          "A type of database optimized for grouping data sets",
          "Connecting multiple servers to work together as a single system"
        ],
        "answer": "Connecting multiple servers to work together as a single system",
        "category": "Domain Review",
        "explanation": "Clusters improve performance, scalability, and availability.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q13",
        "question": "What is 'SSH' (Secure Shell)?",
        "options": [
          "A cryptographic network protocol for operating network services securely",
          "A hardware guard that protects the internal computer components",
          "A type of high-speed internet cable used for data transmission",
          "A very fast web browser for accessing secure online platforms"
        ],
        "answer": "A cryptographic network protocol for operating network services securely",
        "category": "Domain Review",
        "explanation": "SSH is commonly used for remote login to Linux servers.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q14",
        "question": "What is 'Colocation'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A large physical building with many different office rooms",
          "Hiring many tenants to manage your data center infrastructure",
          "Renting space for your servers in a third-party data center"
        ],
        "answer": "Renting space for your servers in a third-party data center",
        "category": "Domain Review",
        "explanation": "Colocation provides professional infrastructure and connectivity.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q15",
        "question": "What is 'Active Directory' (AD)?",
        "options": [
          "A directory service for Windows domain networks",
          "A physical phone book with names and numbers",
          "A simple list of files stored in a local folder",
          "A type of network firewall for blocking traffic"
        ],
        "answer": "A directory service for Windows domain networks",
        "category": "Domain Review",
        "explanation": "AD manages users, computers, and other objects in a network.",
        "topic": "Operating Systems"
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
        "explanation": "RAID uses multiple hard drives to provide data redundancy and/or improve performance.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q17",
        "question": "What is 'TPM' (Trusted Platform Module)?",
        "options": [
          "A hardware guard that protects the physical ports of a computer system",
          "A software update designed to improve the security of the operating system",
          "A specialized chip on a device that provides hardware-level security",
          "A type of software application used for data encryption on a computer"
        ],
        "answer": "A specialized chip on a device that provides hardware-level security",
        "category": "Domain Review",
        "explanation": "TPM is used for disk encryption and secure authentication.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q18",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing digital photos for web use",
          "Hosting a database on a local server",
          "Scanning for viruses on a computer"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q19",
        "question": "What is 'UEFI'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A software update for the computer BIOS system",
          "A type of high-speed local area network connection",
          "The modern replacement for the traditional BIOS"
        ],
        "answer": "The modern replacement for the traditional BIOS",
        "category": "Domain Review",
        "explanation": "UEFI provides a more advanced and secure boot environment.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q20",
        "question": "What is 'Patch Management'?",
        "options": [
          "A hardware guard that prevents physical access to ports",
          "A physical repair shop for fixing broken computer parts",
          "A type of permanent storage for large data archives",
          "The process of distributing and applying updates to software"
        ],
        "answer": "The process of distributing and applying updates to software",
        "category": "Domain Review",
        "explanation": "Patches fix bugs, improve performance, and close security holes.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q21",
        "question": "What is a 'Firewall'?",
        "options": [
          "A large physical wall made of bricks and mortar",
          "A network security system that monitors and controls traffic",
          "A standard hardware update for increasing speed",
          "A type of malicious virus that infects a computer"
        ],
        "answer": "A network security system that monitors and controls traffic",
        "category": "Domain Review",
        "explanation": "Firewalls are the first line of defense in network security.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q22",
        "question": "What is 'Uptime'?",
        "options": [
          "A hardware warranty that covers component repair",
          "A specific type of high-speed network connection",
          "The act of waking up in the morning for work",
          "The amount of time a system or service is operational"
        ],
        "answer": "The amount of time a system or service is operational",
        "category": "Domain Review",
        "explanation": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q23",
        "question": "What is 'SLA' (Service Level Agreement)?",
        "options": [
          "A contract that defines the expected level of service from a provider",
          "A hardware standard for maintaining consistency",
          "A high-ranking member of a royal or noble family",
          "A type of computer software used for agreement forms"
        ],
        "answer": "A contract that defines the expected level of service from a provider",
        "category": "Domain Review",
        "explanation": "SLAs often include uptime guarantees and penalties.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q24",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real using advanced graphics",
          "Storing digital data on a physical USB flash drive",
          "Using a VR headset for immersive digital experiences"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q25",
        "question": "What is 'HDD' (Hard Disk Drive)?",
        "options": [
          "A copy of data saved on a standard compact disc",
          "A data storage device that uses magnetic storage and rotating disks",
          "A standard update for a computer software application",
          "A type of cloud service for storing digital information"
        ],
        "answer": "A data storage device that uses magnetic storage and rotating disks",
        "category": "Domain Review",
        "explanation": "HDDs offer larger capacities at a lower cost than SSDs.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q26",
        "question": "What is 'RAM' (Random Access Memory)?",
        "options": [
          "A copy of data saved on a physical USB flash drive",
          "A form of computer memory that can be read and changed in any order",
          "A standard update for a computer software application",
          "A type of permanent storage device for large data sets"
        ],
        "answer": "A form of computer memory that can be read and changed in any order",
        "category": "Domain Review",
        "explanation": "RAM is volatile, meaning data is lost when power is removed.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q27",
        "question": "What is 'Load Balancing'?",
        "options": [
          "A hardware upgrade designed for increasing memory",
          "A type of high-capacity storage device for backups",
          "A very large and heavy computer server in a rack",
          "Distributing network or application traffic across multiple servers"
        ],
        "answer": "Distributing network or application traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancing improves performance and availability.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q28",
        "question": "What is 'Downtime'?",
        "options": [
          "A slow network connection that delays data",
          "A standard software update for computer apps",
          "The act of going to sleep at the end of the day",
          "The period during which a system or service is unavailable"
        ],
        "answer": "The period during which a system or service is unavailable",
        "category": "Domain Review",
        "explanation": "Downtime can result in lost revenue and reputation.",
        "topic": "Operating Systems"
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
        "explanation": "RAID 1 provides high fault tolerance by duplicating data.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q30",
        "question": "What is 'Linux'?",
        "options": [
          "A specific type of computer hardware part",
          "A standard operating system from Microsoft",
          "A web browser used for accessing the web",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q31",
        "question": "What is an 'IP Address'?",
        "options": [
          "A physical home address for receiving standard postal mail",
          "A unique phone number for making voice calls and texts",
          "A unique serial number assigned to a specific device",
          "A unique string of numbers that identifies each computer on a network"
        ],
        "answer": "A unique string of numbers that identifies each computer on a network",
        "category": "Domain Review",
        "explanation": "IP addresses can be static or dynamic.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q32",
        "question": "What is 'SSD' (Solid State Drive)?",
        "options": [
          "A copy of data saved on a standard compact disc",
          "A standard update for a computer software application",
          "A storage device that uses integrated circuits for data storage",
          "A type of cloud service for storing digital information"
        ],
        "answer": "A storage device that uses integrated circuits for data storage",
        "category": "Domain Review",
        "explanation": "SSDs are much faster and more durable than traditional HDDs.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q33",
        "question": "What is 'PSU' (Power Supply Unit)?",
        "options": [
          "A device that converts mains AC to low-voltage regulated DC power",
          "A hardware guard that protects the computer power port",
          "A standard update for a computer software application",
          "A type of portable battery for charging mobile devices"
        ],
        "answer": "A device that converts mains AC to low-voltage regulated DC power",
        "category": "Domain Review",
        "explanation": "The PSU provides power to all computer components.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q34",
        "question": "What is 'Rack' in a data center?",
        "options": [
          "A guard for hardware safety",
          "A simple wooden shelf for books",
          "A standardized frame for mounting IT equipment",
          "A type of data storage device"
        ],
        "answer": "A standardized frame for mounting IT equipment",
        "category": "Domain Review",
        "explanation": "Server racks are usually 19 or 23 inches wide.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q35",
        "question": "What is a 'UPS' (Uninterruptible Power Supply)?",
        "options": [
          "A device that provides emergency power when the main source fails",
          "A hardware guard that protects the computer power port",
          "A standard delivery service for shipping large packages",
          "A type of portable battery used for charging mobile phones"
        ],
        "answer": "A device that provides emergency power when the main source fails",
        "category": "Domain Review",
        "explanation": "UPS protects equipment from power outages and surges.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q36",
        "question": "What is 'Mainframe'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A large, powerful computer used for high-volume data processing",
          "A standardized frame for mounting servers and equipment",
          "A type of network cable used for high-speed transmission"
        ],
        "answer": "A large, powerful computer used for high-volume data processing",
        "category": "Domain Review",
        "explanation": "Mainframes are still used in large-scale industries like banking.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q37",
        "question": "What is 'Form Factor'?",
        "options": [
          "A manual that explains how to use software",
          "A type of computer code used for data forms",
          "A warranty that covers computer hardware",
          "The physical size and shape of a computer component"
        ],
        "answer": "The physical size and shape of a computer component",
        "category": "Domain Review",
        "explanation": "Examples include ATX, Micro-ATX, and ITX.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q38",
        "question": "What is 'Blade Server'?",
        "options": [
          "A simple mobile application for tracking server usage",
          "A standard server with sharp physical edges and corners",
          "A thin, modular server that fits into a specialized chassis",
          "A type of computer chip designed for mobile devices"
        ],
        "answer": "A thin, modular server that fits into a specialized chassis",
        "category": "Domain Review",
        "explanation": "Blade servers save space and improve energy efficiency.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q39",
        "question": "What is 'BIOS Update'?",
        "options": [
          "A standard software update for apps",
          "Buying a brand new personal computer",
          "Cleaning a physical disk with a cloth",
          "Updating the firmware on the motherboard"
        ],
        "answer": "Updating the firmware on the motherboard",
        "category": "Domain Review",
        "explanation": "BIOS updates can fix hardware compatibility issues.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q40",
        "question": "What is 'VPN' (Virtual Private Network)?",
        "options": [
          "A high-speed internet connection for fast data transfers",
          "A service that creates a safe, encrypted connection over a less secure network",
          "A standard private network used within a small organization",
          "A type of cloud-based storage service for saving files"
        ],
        "answer": "A service that creates a safe, encrypted connection over a less secure network",
        "category": "Domain Review",
        "explanation": "VPNs are used for secure remote access and privacy.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q41",
        "question": "What is 'KVM Switch'?",
        "options": [
          "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
          "A hardware device that forwards data packets between networks",
          "A simple hardware device that connects multiple computers in a hub",
          "A standard light switch found in a residential home for lighting"
        ],
        "answer": "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
        "category": "Domain Review",
        "explanation": "KVM switches are used for managing server racks.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q42",
        "question": "What is 'DHCP'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A protocol for automatically assigning IP addresses to devices",
          "A secure login page for accessing restricted systems",
          "A type of network cable used for high-speed transmission"
        ],
        "answer": "A protocol for automatically assigning IP addresses to devices",
        "category": "Domain Review",
        "explanation": "DHCP makes network management much easier.",
        "topic": "Operating Systems"
      },
      {
        "id": "aplus-q43",
        "question": "What is 'Motherboard'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A type of high-resolution monitor for displaying graphics",
          "The main printed circuit board in general-purpose computers"
        ],
        "answer": "The main printed circuit board in general-purpose computers",
        "category": "Domain Review",
        "explanation": "The motherboard connects all other components together.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q44",
        "question": "What is a 'Switch' in networking?",
        "options": [
          "A device that connects devices on a computer network using packet switching",
          "A device that connects multiple computers in a hub",
          "A device that forwards data packets between networks",
          "A standard light switch found in a residential home"
        ],
        "answer": "A device that connects devices on a computer network using packet switching",
        "category": "Domain Review",
        "explanation": "Switches operate at the Data Link Layer (Layer 2).",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q45",
        "question": "What is 'Firmware'?",
        "options": [
          "A specific class of computer software that provides low-level control for hardware",
          "A standard software update for a computer operating system",
          "A type of soft clothing worn during the winter season",
          "A type of storage device used for saving digital photos"
        ],
        "answer": "A specific class of computer software that provides low-level control for hardware",
        "category": "Domain Review",
        "explanation": "Firmware is stored on hardware devices like routers and SSDs.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q46",
        "question": "What is 'CPU' (Central Processing Unit)?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A type of high-resolution monitor for displaying graphics",
          "The electronic circuitry that executes instructions of a computer program"
        ],
        "answer": "The electronic circuitry that executes instructions of a computer program",
        "category": "Domain Review",
        "explanation": "The CPU is the 'brain' of the computer.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q47",
        "question": "What is 'RAID 5'?",
        "options": [
          "A standard type of backup for recovering data sets",
          "Mirroring data across two different hard drives",
          "Striping data and parity across three or more disks",
          "Using five different disks for maximum data storage"
        ],
        "answer": "Striping data and parity across three or more disks",
        "category": "Domain Review",
        "explanation": "RAID 5 provides a good balance of performance and fault tolerance.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q48",
        "question": "What is 'GPU' (Graphics Processing Unit)?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A specialized electronic circuit designed to accelerate image creation",
          "A type of high-resolution monitor for displaying graphics"
        ],
        "answer": "A specialized electronic circuit designed to accelerate image creation",
        "category": "Domain Review",
        "explanation": "GPUs are used for graphics rendering and scientific computing.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q49",
        "question": "What is 'CMOS Battery'?",
        "options": [
          "A battery that powers the CMOS memory when the computer is off",
          "A hardware guard that protects the internal battery",
          "A large battery used for powering electric vehicles",
          "A type of storage device for saving computer settings"
        ],
        "answer": "A battery that powers the CMOS memory when the computer is off",
        "category": "Domain Review",
        "explanation": "The CMOS battery maintains the date, time, and BIOS settings.",
        "topic": "Hardware"
      },
      {
        "id": "aplus-q50",
        "question": "What is 'Backup'?",
        "options": [
          "A copy of data stored in a separate location for recovery",
          "A reverse gear in a vehicle used for moving backwards",
          "A standard update for a computer software application",
          "A type of primary storage device for active data sets"
        ],
        "answer": "A copy of data stored in a separate location for recovery",
        "category": "Domain Review",
        "explanation": "Backups are essential for data protection.",
        "topic": "Operating Systems"
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
        "title": "IP Services",
        "topics": [
          {
            "name": "What is a 'Loopback' address?",
            "detail": "127.0.0.1 is the standard IPv4 loopback address."
          },
          {
            "name": "What is the bit length of an IPv6 address?",
            "detail": "IPv6 addresses are 128 bits long, providing a massive address space."
          },
          {
            "name": "Which protocol resolves domain names to IP addresses?",
            "detail": "Domain Name System (DNS) maps human-readable names to IP addresses."
          },
          {
            "name": "What is the function of a 'Subnet'?",
            "detail": "Subnetting improves organization and security."
          },
          {
            "name": "Which command checks the reachability of a DNS server?",
            "detail": "nslookup is used to query DNS servers for information."
          },
          {
            "name": "Which protocol uses port 53?",
            "detail": "DNS uses both UDP and TCP on port 53."
          },
          {
            "name": "What does DHCP stand for?",
            "detail": "DHCP automatically assigns IP addresses to devices on a network."
          },
          {
            "name": "What is the purpose of 'NAT'?",
            "detail": "Network Address Translation (NAT) allows multiple devices to share one public IP."
          },
          {
            "name": "What is the range of private IP addresses for Class A?",
            "detail": "The 10.0.0.0/8 block is reserved for private Class A networks."
          },
          {
            "name": "What does 'CIDR' stand for?",
            "detail": "CIDR replaced the older classful IP addressing system."
          }
        ]
      },
      {
        "title": "Network Performance",
        "topics": [
          {
            "name": "What is the purpose of 'QoS'?",
            "detail": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
          },
          {
            "name": "What is 'Jitter' in networking?",
            "detail": "Low jitter is critical for real-time services like VoIP."
          }
        ]
      },
      {
        "title": "Network Services",
        "topics": [
          {
            "name": "Which protocol is used for synchronizing clocks on a network?",
            "detail": "Network Time Protocol (NTP) ensures all devices have the correct time."
          },
          {
            "name": "What is the primary function of a Load Balancer?",
            "detail": "Load balancers improve reliability and performance by spreading load."
          },
          {
            "name": "Which protocol is commonly used for network management and monitoring?",
            "detail": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
          },
          {
            "name": "Which protocol uses port 3389?",
            "detail": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
          },
          {
            "name": "Which protocol is used to retrieve emails from a server and delete them after?",
            "detail": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
          },
          {
            "name": "Which protocol is used for transferring web pages?",
            "detail": "Hypertext Transfer Protocol (HTTP) is the foundation of data exchange on the web."
          },
          {
            "name": "What is the default port for FTP?",
            "detail": "File Transfer Protocol (FTP) uses port 21 for control."
          }
        ]
      },
      {
        "title": "Network Troubleshooting",
        "topics": [
          {
            "name": "What is the purpose of the 'ping' command?",
            "detail": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
          },
          {
            "name": "Which command is used to trace the path a packet takes to its destination?",
            "detail": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
          },
          {
            "name": "Which command shows the MAC address on a Windows PC?",
            "detail": "All these commands can be used to find the physical address."
          }
        ]
      },
      {
        "title": "Networking Core",
        "topics": [
          {
            "name": "Which topology connects all devices to a central hub?",
            "detail": "In a Star topology, if the central hub fails, the whole network goes down."
          },
          {
            "name": "What is the function of the ARP protocol?",
            "detail": "Address Resolution Protocol (ARP) finds the hardware address for a known IP."
          },
          {
            "name": "What is the bit length of a MAC address?",
            "detail": "MAC addresses are 6-byte (48-bit) unique identifiers."
          },
          {
            "name": "What does 'full-duplex' mean?",
            "detail": "Full-duplex communication allows concurrent sending and receiving."
          },
          {
            "name": "What is 'CSMA/CD' used for?",
            "detail": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
          },
          {
            "name": "What does 'MTU' stand for?",
            "detail": "MTU is the largest packet size a network can handle."
          },
          {
            "name": "What is 'Half-Duplex'?",
            "detail": "Older hubs and walkie-talkies are half-duplex."
          }
        ]
      },
      {
        "title": "OSI Model",
        "topics": [
          {
            "name": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
            "detail": "Layer 2 is responsible for node-to-node data transfer."
          },
          {
            "name": "Which layer defines electrical and physical specifications for devices?",
            "detail": "Layer 1 deals with cables, connectors, and signals."
          },
          {
            "name": "Which layer is responsible for encryption and compression?",
            "detail": "Layer 6 ensures data is in a usable format."
          }
        ]
      },
      {
        "title": "Physical Infrastructure",
        "topics": [
          {
            "name": "What is 'PoE'?",
            "detail": "PoE allows data cables to also carry electrical power to devices like IP cameras."
          },
          {
            "name": "Which cable type uses a laser as a light source?",
            "detail": "Single-mode uses lasers for long-distance transmission."
          },
          {
            "name": "What is the maximum length of a Cat5e cable segment?",
            "detail": "Ethernet standards for twisted pair cables usually limit segments to 100m."
          },
          {
            "name": "Which type of cable is least susceptible to EMI?",
            "detail": "Fiber uses light instead of electricity, making it immune to electromagnetic interference."
          }
        ]
      },
      {
        "title": "Routing",
        "topics": [
          {
            "name": "Which command displays the routing table on a Cisco device?",
            "detail": "This command list all routes known to the router."
          },
          {
            "name": "Which device connects multiple networks and makes path decisions?",
            "detail": "Routers operate at Layer 3 and route traffic between different networks."
          },
          {
            "name": "Which routing protocol is known as the protocol of the internet?",
            "detail": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web."
          },
          {
            "name": "What does a Gateway do?",
            "detail": "A gateway serves as an entry/exit point for data between networks."
          }
        ]
      },
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "Which type of VPN connects two locations directly?",
            "detail": "Site-to-Site VPNs connect entire branch offices to headquarters."
          },
          {
            "name": "Which protocol is used to securely transfer files?",
            "detail": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
          },
          {
            "name": "What is the standard port for SSH?",
            "detail": "Secure Shell (SSH) uses port 22 by default."
          },
          {
            "name": "What is the port for HTTPS?",
            "detail": "HTTPS (Secure) uses port 443."
          },
          {
            "name": "What is an 'ACL' in networking?",
            "detail": "ACLs filter network traffic based on rules."
          }
        ]
      },
      {
        "title": "Switching",
        "topics": [
          {
            "name": "What does a 'Collision Domain' refer to?",
            "detail": "Switches break up collision domains per port."
          },
          {
            "name": "Which device operates at Layer 2 and makes forwarding decisions based on MAC addresses?",
            "detail": "Switches are more efficient than hubs as they only send data to the intended port."
          },
          {
            "name": "What does 'VLAN Tagging' (802.1Q) allow?",
            "detail": "Tagging adds a header to indicate which VLAN a frame belongs to."
          }
        ]
      },
      {
        "title": "Wireless",
        "topics": [
          {
            "name": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
            "detail": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
          },
          {
            "name": "Which device is used to extend the range of a Wi-Fi signal?",
            "detail": "APs provide wireless connectivity to a wired network."
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
        "explanation": "This command list all routes known to the router.",
        "topic": "Routing"
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
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters.",
        "topic": "Security Fundamentals"
      },
      {
        "id": "network-plus-q3",
        "question": "What does a 'Collision Domain' refer to?",
        "options": [
          "A group of devices where data packets can collide",
          "A set of devices sharing a single network router",
          "A single network cable connecting two different computers",
          "The entire internet-wide group of interconnected devices"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port.",
        "topic": "Switching"
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
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down.",
        "topic": "Networking Core"
      },
      {
        "id": "network-plus-q5",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub (Layer 1 Device)",
          "Repeater (Layer 1 Device)",
          "Router (Layer 3 Device)",
          "Switch (Layer 2 Device)"
        ],
        "answer": "Router (Layer 3 Device)",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks.",
        "topic": "Routing"
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
        "explanation": "Address Resolution Protocol (ARP) finds the hardware address for a known IP.",
        "topic": "Networking Core"
      },
      {
        "id": "network-plus-q7",
        "question": "What is a 'Loopback' address?",
        "options": [
          "A public IP address accessible from the internet",
          "An address used to test the local computer system",
          "The address of the Domain Name System (DNS) server",
          "The address of the primary network router device"
        ],
        "answer": "An address used to test the local computer system",
        "category": "Domain Review",
        "explanation": "127.0.0.1 is the standard IPv4 loopback address.",
        "topic": "IP Services"
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
        "explanation": "Layer 2 is responsible for node-to-node data transfer.",
        "topic": "OSI Model"
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
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice.",
        "topic": "Network Performance"
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
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras.",
        "topic": "Physical Infrastructure"
      },
      {
        "id": "network-plus-q11",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits in length",
          "256 bits in length",
          "32 bits in length",
          "64 bits in length"
        ],
        "answer": "128 bits in length",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space.",
        "topic": "IP Services"
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
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n.",
        "topic": "Wireless"
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
        "explanation": "Layer 1 deals with cables, connectors, and signals.",
        "topic": "OSI Model"
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
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer.",
        "topic": "Security Fundamentals"
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
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time.",
        "topic": "Network Services"
      },
      {
        "id": "network-plus-q16",
        "question": "What is the standard port for SSH?",
        "options": [
          "Port 22 (Standard SSH)",
          "Port 23 (Standard Telnet)",
          "Port 443 (Standard HTTPS)",
          "Port 80 (Standard HTTP)"
        ],
        "answer": "Port 22 (Standard SSH)",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default.",
        "topic": "Security Fundamentals"
      },
      {
        "id": "network-plus-q17",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "To change the local IP address",
          "To download a file from a server",
          "To secure a specific network port",
          "To test basic network connectivity"
        ],
        "answer": "To test basic network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable.",
        "topic": "Network Troubleshooting"
      },
      {
        "id": "network-plus-q18",
        "question": "Which protocol resolves domain names to IP addresses?",
        "options": [
          "Address Resolution Protocol (ARP)",
          "Domain Name System (DNS)",
          "Dynamic Host Protocol (DHCP)",
          "Simple Management Protocol (SNMP)"
        ],
        "answer": "Domain Name System (DNS)",
        "category": "Domain Review",
        "explanation": "Domain Name System (DNS) maps human-readable names to IP addresses.",
        "topic": "IP Services"
      },
      {
        "id": "network-plus-q19",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Multi-mode Fiber cabling",
          "Single-mode Fiber cabling",
          "Standard Coaxial cabling",
          "Unshielded Twisted Pair (UTP)"
        ],
        "answer": "Single-mode Fiber cabling",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission.",
        "topic": "Physical Infrastructure"
      },
      {
        "id": "network-plus-q20",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses to all devices on the network",
          "Distribute incoming traffic across multiple servers",
          "Encrypt all incoming network traffic for security",
          "Store website files and images for fast access"
        ],
        "answer": "Distribute incoming traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load.",
        "topic": "Network Services"
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
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices.",
        "topic": "Network Services"
      },
      {
        "id": "network-plus-q22",
        "question": "Which device is used to extend the range of a Wi-Fi signal?",
        "options": [
          "Access Point (AP)",
          "Modem (Signal)",
          "Router (Network)",
          "Switch (Network)"
        ],
        "answer": "Access Point (AP)",
        "category": "Domain Review",
        "explanation": "APs provide wireless connectivity to a wired network.",
        "topic": "Wireless"
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
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer.",
        "topic": "Network Services"
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
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server.",
        "topic": "Network Services"
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
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers.",
        "topic": "Networking Core"
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
        "explanation": "Hypertext Transfer Protocol (HTTP) is the foundation of data exchange on the web.",
        "topic": "Network Services"
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
        "explanation": "Switches are more efficient than hubs as they only send data to the intended port.",
        "topic": "Switching"
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
        "explanation": "Low jitter is critical for real-time services like VoIP.",
        "topic": "Network Performance"
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
        "explanation": "Full-duplex communication allows concurrent sending and receiving.",
        "topic": "Networking Core"
      },
      {
        "id": "network-plus-q30",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the local network printer for printing",
          "Divide a large network into multiple smaller ones",
          "Speed up the processing power of the computer",
          "Store incoming and outgoing emails on the server"
        ],
        "answer": "Divide a large network into multiple smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security.",
        "topic": "IP Services"
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
        "explanation": "File Transfer Protocol (FTP) uses port 21 for control.",
        "topic": "Network Services"
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
        "explanation": "HTTPS (Secure) uses port 443.",
        "topic": "Security Fundamentals"
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
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination.",
        "topic": "Network Troubleshooting"
      },
      {
        "id": "network-plus-q34",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing of the web for all local users",
          "Hiding the network name for security purposes",
          "Identifying traffic for different VLANs on a trunk",
          "Printing documents wirelessly to a network printer"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to.",
        "topic": "Switching"
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
        "explanation": "Layer 6 ensures data is in a usable format.",
        "topic": "OSI Model"
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
        "explanation": "nslookup is used to query DNS servers for information.",
        "topic": "IP Services"
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
        "explanation": "DNS uses both UDP and TCP on port 53.",
        "topic": "IP Services"
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
        "explanation": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web.",
        "topic": "Routing"
      },
      {
        "id": "network-plus-q39",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "All of the above commands",
          "The arp -a command",
          "The getmac command",
          "The ipconfig /all command"
        ],
        "answer": "All of the above commands",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address.",
        "topic": "Network Troubleshooting"
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
        "explanation": "DHCP automatically assigns IP addresses to devices on a network.",
        "topic": "IP Services"
      },
      {
        "id": "network-plus-q41",
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning unique IP addresses to network devices",
          "Detecting collisions in an Ethernet-based network",
          "Encrypting sensitive data for secure transmission",
          "Routing data packets between different networks"
        ],
        "answer": "Detecting collisions in an Ethernet-based network",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol.",
        "topic": "Networking Core"
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
        "explanation": "A gateway serves as an entry/exit point for data between networks.",
        "topic": "Routing"
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
        "explanation": "Ethernet standards for twisted pair cables usually limit segments to 100m.",
        "topic": "Physical Infrastructure"
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
        "explanation": "MTU is the largest packet size a network can handle.",
        "topic": "Networking Core"
      },
      {
        "id": "network-plus-q45",
        "question": "What is the purpose of 'NAT'?",
        "options": [
          "Assign unique names to all networking devices",
          "Check for physical breaks in networking cables",
          "Speed up the download of large files from the web",
          "Translate private IP addresses to public IP addresses"
        ],
        "answer": "Translate private IP addresses to public IP addresses",
        "category": "Domain Review",
        "explanation": "Network Address Translation (NAT) allows multiple devices to share one public IP.",
        "topic": "IP Services"
      },
      {
        "id": "network-plus-q46",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at exactly half the standard speed",
          "Devices can send or receive but not both at once",
          "Only half of the data packets arrive at destination",
          "Only one device in the network can ever send data"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex.",
        "topic": "Networking Core"
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
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks.",
        "topic": "IP Services"
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
        "explanation": "CIDR replaced the older classful IP addressing system.",
        "topic": "IP Services"
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
        "explanation": "ACLs filter network traffic based on rules.",
        "topic": "Security Fundamentals"
      },
      {
        "id": "network-plus-q50",
        "question": "Which type of cable is least susceptible to EMI?",
        "options": [
          "Coaxial cabling",
          "Fiber Optic cabling",
          "STP cabling",
          "UTP cabling"
        ],
        "answer": "Fiber Optic cabling",
        "category": "Domain Review",
        "explanation": "Fiber uses light instead of electricity, making it immune to electromagnetic interference.",
        "topic": "Physical Infrastructure"
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
        "title": "IP Services",
        "topics": [
          {
            "name": "What is the range of private IP addresses for Class A?",
            "detail": "The 10.0.0.0/8 block is reserved for private Class A networks."
          },
          {
            "name": "Which protocol resolves domain names to IP addresses?",
            "detail": "Domain Name System (DNS) maps human-readable names to IP addresses."
          },
          {
            "name": "What is the bit length of an IPv6 address?",
            "detail": "IPv6 addresses are 128 bits long, providing a massive address space."
          },
          {
            "name": "What is the purpose of 'NAT'?",
            "detail": "Network Address Translation (NAT) allows multiple devices to share one public IP."
          },
          {
            "name": "What is the default subnet mask for a Class C network?",
            "detail": "Class C networks have a /24 mask."
          },
          {
            "name": "Which command checks the reachability of a DNS server?",
            "detail": "nslookup is used to query DNS servers for information."
          },
          {
            "name": "What is the function of a 'Subnet'?",
            "detail": "Subnetting improves organization and security."
          },
          {
            "name": "What is a 'Loopback' address?",
            "detail": "127.0.0.1 is the standard IPv4 loopback address."
          },
          {
            "name": "Which protocol uses port 53?",
            "detail": "DNS uses both UDP and TCP on port 53."
          }
        ]
      },
      {
        "title": "Network Performance",
        "topics": [
          {
            "name": "What is 'Jitter' in networking?",
            "detail": "Low jitter is critical for real-time services like VoIP."
          },
          {
            "name": "What is the purpose of 'QoS'?",
            "detail": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
          }
        ]
      },
      {
        "title": "Network Services",
        "topics": [
          {
            "name": "Which protocol is used for transferring web pages?",
            "detail": "Hypertext Transfer Protocol (HTTP) is the foundation of data exchange on the web."
          },
          {
            "name": "What is the primary function of a Load Balancer?",
            "detail": "Load balancers improve reliability and performance by spreading load."
          },
          {
            "name": "Which protocol is commonly used for network management and monitoring?",
            "detail": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
          },
          {
            "name": "Which protocol is used for synchronizing clocks on a network?",
            "detail": "Network Time Protocol (NTP) ensures all devices have the correct time."
          },
          {
            "name": "Which protocol is used to retrieve emails from a server and delete them after?",
            "detail": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
          },
          {
            "name": "Which protocol uses port 25?",
            "detail": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails."
          },
          {
            "name": "Which protocol uses port 3389?",
            "detail": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
          }
        ]
      },
      {
        "title": "Network Troubleshooting",
        "topics": [
          {
            "name": "What is the purpose of the 'ping' command?",
            "detail": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
          },
          {
            "name": "Which command shows the MAC address on a Windows PC?",
            "detail": "All these commands can be used to find the physical address."
          },
          {
            "name": "Which command is used to trace the path a packet takes to its destination?",
            "detail": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
          }
        ]
      },
      {
        "title": "Networking Core",
        "topics": [
          {
            "name": "Which topology connects all devices to a central hub?",
            "detail": "In a Star topology, if the central hub fails, the whole network goes down."
          },
          {
            "name": "What does 'full-duplex' mean?",
            "detail": "Full-duplex communication allows concurrent sending and receiving."
          },
          {
            "name": "What does 'MTU' stand for?",
            "detail": "MTU is the largest packet size a network can handle."
          },
          {
            "name": "What is 'Half-Duplex'?",
            "detail": "Older hubs and walkie-talkies are half-duplex."
          },
          {
            "name": "What is the bit length of a MAC address?",
            "detail": "MAC addresses are 6-byte (48-bit) unique identifiers."
          },
          {
            "name": "What is 'CSMA/CD' used for?",
            "detail": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
          }
        ]
      },
      {
        "title": "OSI Model",
        "topics": [
          {
            "name": "Which layer is responsible for encryption and compression?",
            "detail": "Layer 6 ensures data is in a usable format."
          },
          {
            "name": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
            "detail": "Layer 2 is responsible for node-to-node data transfer."
          },
          {
            "name": "Which layer defines electrical and physical specifications for devices?",
            "detail": "Layer 1 deals with cables, connectors, and signals."
          }
        ]
      },
      {
        "title": "Physical Infrastructure",
        "topics": [
          {
            "name": "What is 'PoE'?",
            "detail": "PoE allows data cables to also carry electrical power to devices like IP cameras."
          },
          {
            "name": "Which cable type uses a laser as a light source?",
            "detail": "Single-mode uses lasers for long-distance transmission."
          },
          {
            "name": "Which type of cable is least susceptible to EMI?",
            "detail": "Fiber uses light instead of electricity, making it immune to electromagnetic interference."
          },
          {
            "name": "What is the maximum length of a Cat5e cable segment?",
            "detail": "Ethernet standards for twisted pair cables usually limit segments to 100m."
          }
        ]
      },
      {
        "title": "Routing",
        "topics": [
          {
            "name": "Which device connects multiple networks and makes path decisions?",
            "detail": "Routers operate at Layer 3 and route traffic between different networks."
          },
          {
            "name": "Which routing protocol is known as the protocol of the internet?",
            "detail": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web."
          },
          {
            "name": "What does a Gateway do?",
            "detail": "A gateway serves as an entry/exit point for data between networks."
          },
          {
            "name": "Which command displays the routing table on a Cisco device?",
            "detail": "This command list all routes known to the router."
          }
        ]
      },
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "What is an 'ACL' in networking?",
            "detail": "ACLs filter network traffic based on rules."
          },
          {
            "name": "Which type of VPN connects two locations directly?",
            "detail": "Site-to-Site VPNs connect entire branch offices to headquarters."
          },
          {
            "name": "What is the port for HTTPS?",
            "detail": "HTTPS (Secure) uses port 443."
          },
          {
            "name": "Which protocol is used for securely browsing the web?",
            "detail": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
          },
          {
            "name": "What is the standard port for SSH?",
            "detail": "Secure Shell (SSH) uses port 22 by default."
          },
          {
            "name": "Which protocol is used to securely transfer files?",
            "detail": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
          }
        ]
      },
      {
        "title": "Switching",
        "topics": [
          {
            "name": "What does a 'Collision Domain' refer to?",
            "detail": "Switches break up collision domains per port."
          },
          {
            "name": "What does 'VLAN Tagging' (802.1Q) allow?",
            "detail": "Tagging adds a header to indicate which VLAN a frame belongs to."
          },
          {
            "name": "Which device operates at Layer 2 and makes forwarding decisions based on MAC addresses?",
            "detail": "Switches are more efficient than hubs as they only send data to the intended port."
          },
          {
            "name": "What is 'STP' (Spanning Tree Protocol) used for?",
            "detail": "STP ensures there is only one active path between two network nodes."
          }
        ]
      },
      {
        "title": "Wireless",
        "topics": [
          {
            "name": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
            "detail": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
          },
          {
            "name": "Which device is used to extend the range of a Wi-Fi signal?",
            "detail": "APs provide wireless connectivity to a wired network."
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
          "A set of devices sharing a single network router",
          "A single network cable connecting two different computers",
          "The entire internet-wide group of interconnected devices"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port.",
        "topic": "Switching"
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
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks.",
        "topic": "IP Services"
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
        "explanation": "Hypertext Transfer Protocol (HTTP) is the foundation of data exchange on the web.",
        "topic": "Network Services"
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
        "explanation": "Layer 6 ensures data is in a usable format.",
        "topic": "OSI Model"
      },
      {
        "id": "ccnp-encor-q5",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses to all devices on the network",
          "Distribute incoming traffic across multiple servers",
          "Encrypt all incoming network traffic for security",
          "Store website files and images for fast access"
        ],
        "answer": "Distribute incoming traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load.",
        "topic": "Network Services"
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
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down.",
        "topic": "Networking Core"
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
        "explanation": "Full-duplex communication allows concurrent sending and receiving.",
        "topic": "Networking Core"
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
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras.",
        "topic": "Physical Infrastructure"
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
        "explanation": "MTU is the largest packet size a network can handle.",
        "topic": "Networking Core"
      },
      {
        "id": "ccnp-encor-q10",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub (Layer 1 Device)",
          "Repeater (Layer 1 Device)",
          "Router (Layer 3 Device)",
          "Switch (Layer 2 Device)"
        ],
        "answer": "Router (Layer 3 Device)",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks.",
        "topic": "Routing"
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
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n.",
        "topic": "Wireless"
      },
      {
        "id": "ccnp-encor-q12",
        "question": "Which protocol resolves domain names to IP addresses?",
        "options": [
          "Address Resolution Protocol (ARP)",
          "Domain Name System (DNS)",
          "Dynamic Host Protocol (DHCP)",
          "Simple Management Protocol (SNMP)"
        ],
        "answer": "Domain Name System (DNS)",
        "category": "Domain Review",
        "explanation": "Domain Name System (DNS) maps human-readable names to IP addresses.",
        "topic": "IP Services"
      },
      {
        "id": "ccnp-encor-q13",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits in length",
          "256 bits in length",
          "32 bits in length",
          "64 bits in length"
        ],
        "answer": "128 bits in length",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space.",
        "topic": "IP Services"
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
        "explanation": "Low jitter is critical for real-time services like VoIP.",
        "topic": "Network Performance"
      },
      {
        "id": "ccnp-encor-q15",
        "question": "What is the purpose of 'NAT'?",
        "options": [
          "Assign unique names to all networking devices",
          "Check for physical breaks in networking cables",
          "Speed up the download of large files from the web",
          "Translate private IP addresses to public IP addresses"
        ],
        "answer": "Translate private IP addresses to public IP addresses",
        "category": "Domain Review",
        "explanation": "Network Address Translation (NAT) allows multiple devices to share one public IP.",
        "topic": "IP Services"
      },
      {
        "id": "ccnp-encor-q16",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "To change the local IP address",
          "To download a file from a server",
          "To secure a specific network port",
          "To test basic network connectivity"
        ],
        "answer": "To test basic network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable.",
        "topic": "Network Troubleshooting"
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
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices.",
        "topic": "Network Services"
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
        "explanation": "Class C networks have a /24 mask.",
        "topic": "IP Services"
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
        "explanation": "nslookup is used to query DNS servers for information.",
        "topic": "IP Services"
      },
      {
        "id": "ccnp-encor-q20",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing of the web for all local users",
          "Hiding the network name for security purposes",
          "Identifying traffic for different VLANs on a trunk",
          "Printing documents wirelessly to a network printer"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to.",
        "topic": "Switching"
      },
      {
        "id": "ccnp-encor-q21",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the local network printer for printing",
          "Divide a large network into multiple smaller ones",
          "Speed up the processing power of the computer",
          "Store incoming and outgoing emails on the server"
        ],
        "answer": "Divide a large network into multiple smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security.",
        "topic": "IP Services"
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
        "explanation": "Switches are more efficient than hubs as they only send data to the intended port.",
        "topic": "Switching"
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
        "explanation": "Layer 2 is responsible for node-to-node data transfer.",
        "topic": "OSI Model"
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
        "explanation": "ACLs filter network traffic based on rules.",
        "topic": "Security Fundamentals"
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
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters.",
        "topic": "Security Fundamentals"
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
        "explanation": "HTTPS (Secure) uses port 443.",
        "topic": "Security Fundamentals"
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
        "explanation": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web.",
        "topic": "Routing"
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
        "explanation": "A gateway serves as an entry/exit point for data between networks.",
        "topic": "Routing"
      },
      {
        "id": "ccnp-encor-q29",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP (File Transfer Protocol)",
          "HTTP (Standard Protocol)",
          "HTTPS (Secure Protocol)",
          "SSH (Secure Shell Protocol)"
        ],
        "answer": "HTTPS (Secure Protocol)",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server.",
        "topic": "Security Fundamentals"
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
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time.",
        "topic": "Network Services"
      },
      {
        "id": "ccnp-encor-q31",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Multi-mode Fiber cabling",
          "Single-mode Fiber cabling",
          "Standard Coaxial cabling",
          "Unshielded Twisted Pair (UTP)"
        ],
        "answer": "Single-mode Fiber cabling",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission.",
        "topic": "Physical Infrastructure"
      },
      {
        "id": "ccnp-encor-q32",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at exactly half the standard speed",
          "Devices can send or receive but not both at once",
          "Only half of the data packets arrive at destination",
          "Only one device in the network can ever send data"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex.",
        "topic": "Networking Core"
      },
      {
        "id": "ccnp-encor-q33",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "All of the above commands",
          "The arp -a command",
          "The getmac command",
          "The ipconfig /all command"
        ],
        "answer": "All of the above commands",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address.",
        "topic": "Network Troubleshooting"
      },
      {
        "id": "ccnp-encor-q34",
        "question": "Which type of cable is least susceptible to EMI?",
        "options": [
          "Coaxial cabling",
          "Fiber Optic cabling",
          "STP cabling",
          "UTP cabling"
        ],
        "answer": "Fiber Optic cabling",
        "category": "Domain Review",
        "explanation": "Fiber uses light instead of electricity, making it immune to electromagnetic interference.",
        "topic": "Physical Infrastructure"
      },
      {
        "id": "ccnp-encor-q35",
        "question": "What is 'STP' (Spanning Tree Protocol) used for?",
        "options": [
          "Assign new IP addresses",
          "Encrypt all user passwords",
          "Prevent network loops in switches",
          "Speed up the local network"
        ],
        "answer": "Prevent network loops in switches",
        "category": "Domain Review",
        "explanation": "STP ensures there is only one active path between two network nodes.",
        "topic": "Switching"
      },
      {
        "id": "ccnp-encor-q36",
        "question": "What is a 'Loopback' address?",
        "options": [
          "A public IP address accessible from the internet",
          "An address used to test the local computer system",
          "The address of the Domain Name System (DNS) server",
          "The address of the primary network router device"
        ],
        "answer": "An address used to test the local computer system",
        "category": "Domain Review",
        "explanation": "127.0.0.1 is the standard IPv4 loopback address.",
        "topic": "IP Services"
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
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination.",
        "topic": "Network Troubleshooting"
      },
      {
        "id": "ccnp-encor-q38",
        "question": "Which device is used to extend the range of a Wi-Fi signal?",
        "options": [
          "Access Point (AP)",
          "Modem (Signal)",
          "Router (Network)",
          "Switch (Network)"
        ],
        "answer": "Access Point (AP)",
        "category": "Domain Review",
        "explanation": "APs provide wireless connectivity to a wired network.",
        "topic": "Wireless"
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
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers.",
        "topic": "Networking Core"
      },
      {
        "id": "ccnp-encor-q40",
        "question": "What is the standard port for SSH?",
        "options": [
          "Port 22 (Standard SSH)",
          "Port 23 (Standard Telnet)",
          "Port 443 (Standard HTTPS)",
          "Port 80 (Standard HTTP)"
        ],
        "answer": "Port 22 (Standard SSH)",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default.",
        "topic": "Security Fundamentals"
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
        "explanation": "DNS uses both UDP and TCP on port 53.",
        "topic": "IP Services"
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
        "explanation": "This command list all routes known to the router.",
        "topic": "Routing"
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
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer.",
        "topic": "Security Fundamentals"
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
        "explanation": "Ethernet standards for twisted pair cables usually limit segments to 100m.",
        "topic": "Physical Infrastructure"
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
        "explanation": "Layer 1 deals with cables, connectors, and signals.",
        "topic": "OSI Model"
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
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server.",
        "topic": "Network Services"
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
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice.",
        "topic": "Network Performance"
      },
      {
        "id": "ccnp-encor-q48",
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning unique IP addresses to network devices",
          "Detecting collisions in an Ethernet-based network",
          "Encrypting sensitive data for secure transmission",
          "Routing data packets between different networks"
        ],
        "answer": "Detecting collisions in an Ethernet-based network",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol.",
        "topic": "Networking Core"
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
        "explanation": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails.",
        "topic": "Network Services"
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
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer.",
        "topic": "Network Services"
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
        "title": "Architecture",
        "topics": [
          {
            "name": "What is an 'Air Gap'?",
            "detail": "Air-gapping is used for extremely high-security systems."
          },
          {
            "name": "What is 'Mobile Device Management' (MDM)?",
            "detail": "MDM allows enforcing security policies on employee phones."
          },
          {
            "name": "What does 'WPA3' improve over WPA2?",
            "detail": "WPA3 is the latest security standard for wireless networks."
          },
          {
            "name": "What does a Firewall do?",
            "detail": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
          },
          {
            "name": "Which protocol provides a secure shell for remote access?",
            "detail": "SSH is the secure alternative to the unencrypted Telnet."
          },
          {
            "name": "What is a 'Firewall Policy'?",
            "detail": "It dictates how the firewall handles various types of packets."
          },
          {
            "name": "What is 'Data Loss Prevention' (DLP)?",
            "detail": "DLP monitors data at rest, in use, and in transit."
          },
          {
            "name": "What is 'Access Control'?",
            "detail": "It involves identification, authentication, and authorization."
          }
        ]
      },
      {
        "title": "Attacks & Threats",
        "topics": [
          {
            "name": "What is the difference between a 'Virus' and a 'Worm'?",
            "detail": "Worms can spread across a network without human interaction."
          },
          {
            "name": "What is 'Cross-Site Scripting' (XSS)?",
            "detail": "XSS can steal cookies and session info from users."
          },
          {
            "name": "What is 'Shoulder Surfing'?",
            "detail": "It's a low-tech social engineering technique."
          },
          {
            "name": "What is 'Eavesdropping' in network security?",
            "detail": "This is a passive attack against confidentiality."
          },
          {
            "name": "What is 'Social Engineering'?",
            "detail": "It exploits human psychology rather than technical flaws."
          },
          {
            "name": "Which of these is a social engineering attack?",
            "detail": "Tailgating involves physically following an authorized person into a secure area."
          },
          {
            "name": "What is a 'Buffer Overflow'?",
            "detail": "It can lead to system crashes or arbitrary code execution."
          },
          {
            "name": "What is 'Whaling'?",
            "detail": "Whaling targets 'big fish' like CEOs and CFOs."
          },
          {
            "name": "What is 'Man-in-the-Middle' (MITM)?",
            "detail": "The attacker can read or even modify the data being sent."
          },
          {
            "name": "What is a 'Zero-Day' vulnerability?",
            "detail": "Zero-day threats have no available patch at the time of discovery."
          },
          {
            "name": "What does 'DDoS' stand for?",
            "detail": "DDoS attacks overwhelm a target with traffic from multiple sources."
          },
          {
            "name": "What is a 'Rootkit'?",
            "detail": "Rootkits operate at a deep level of the OS to remain undetected."
          },
          {
            "name": "What is 'Pharmimg'?",
            "detail": "Users think they are on a real site but are actually on a malicious one."
          },
          {
            "name": "What is 'War Driving'?",
            "detail": "Attackers use this to find vulnerable wireless networks to exploit."
          },
          {
            "name": "What is Ransomware?",
            "detail": "Ransomware locks users out of their data until a ransom is paid."
          },
          {
            "name": "What is a 'Botnet'?",
            "detail": "Botnets are used for large-scale attacks like DDoS."
          },
          {
            "name": "What is a 'Logic Bomb'?",
            "detail": "Logic bombs can be planted by malicious insiders."
          },
          {
            "name": "What is a 'Backdoor'?",
            "detail": "Backdoors can be used for maintenance or by attackers for persistence."
          },
          {
            "name": "What is 'SQL Injection'?",
            "detail": "SQLi can allow attackers to read or modify sensitive database data."
          }
        ]
      },
      {
        "title": "Governance",
        "topics": [
          {
            "name": "What is 'Authorization'?",
            "detail": "It defines the permissions and rights of a user."
          },
          {
            "name": "What is 'BYOD'?",
            "detail": "A policy allowing employees to use personal devices for work."
          },
          {
            "name": "What is the 'Principle of Least Privilege'?",
            "detail": "This minimizes potential impact of a security breach."
          }
        ]
      },
      {
        "title": "Implementation",
        "topics": [
          {
            "name": "What is 'Two-Factor Authentication' (2FA)?",
            "detail": "It adds an extra layer of security beyond just a password."
          },
          {
            "name": "Which of these is a form of Symmetric encryption?",
            "detail": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
          },
          {
            "name": "What is 'Decryption'?",
            "detail": "The reverse of encryption, usually requiring a key."
          },
          {
            "name": "What is a 'Private Key'?",
            "detail": "The private key is used for decryption or creating digital signatures."
          },
          {
            "name": "Which of these is used for 'Non-repudiation'?",
            "detail": "Non-repudiation ensures a sender cannot deny having sent a message."
          },
          {
            "name": "What is 'Steganography'?",
            "detail": "Data is hidden in plain sight, making it hard to detect."
          },
          {
            "name": "What is Multi-Factor Authentication (MFA)?",
            "detail": "MFA combines something you know, something you have, and/or something you are."
          },
          {
            "name": "What is the purpose of Hashing?",
            "detail": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
          },
          {
            "name": "What is 'Encryption'?",
            "detail": "Encryption protects data from being read by unauthorized parties."
          },
          {
            "name": "What is 'Biometrics'?",
            "detail": "Examples include fingerprints, iris scans, and facial recognition."
          },
          {
            "name": "What is a 'Public Key'?",
            "detail": "In asymmetric encryption, the public key is used for encryption."
          }
        ]
      },
      {
        "title": "Operations",
        "topics": [
          {
            "name": "What is a 'Penetration Test'?",
            "detail": "Pen-tests provide a deep assessment of an organization's security posture."
          },
          {
            "name": "What is the purpose of an 'IDS'?",
            "detail": "Intrusion Detection Systems monitor and alert for suspicious activity."
          },
          {
            "name": "What is an 'Audit Trail'?",
            "detail": "Audit trails are crucial for incident investigation and compliance."
          },
          {
            "name": "What is the purpose of 'Sandboxing'?",
            "detail": "Sandboxing prevents malware from affecting the host system."
          },
          {
            "name": "What is a 'Honey Pot'?",
            "detail": "Honeypots help researchers study attacker behavior and deflect them from real targets."
          }
        ]
      },
      {
        "title": "Security Core",
        "topics": [
          {
            "name": "What is 'Identification' in security?",
            "detail": "The first step in the access control process."
          },
          {
            "name": "What does 'Integrity' mean in security?",
            "detail": "Integrity ensures data is accurate and trustworthy."
          },
          {
            "name": "What is the goal of 'Confidentiality' in the CIA triad?",
            "detail": "Confidentiality prevents unauthorized disclosure of information."
          },
          {
            "name": "What is 'Authentication'?",
            "detail": "Usually involves a password, token, or biometric trait."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cissp-q1",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card at the building entrance",
          "Looking in a mirror to check your appearance",
          "Stating who you are (e.g., username)",
          "Taking a professional photo for a staff badge"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process.",
        "topic": "Security Core"
      },
      {
        "id": "cissp-q2",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password for accessing a secure system",
          "Creating a new account for a website or application",
          "Determining what an authenticated user can do",
          "The act of entering a building through the front door"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user.",
        "topic": "Governance"
      },
      {
        "id": "cissp-q3",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A physical gap between computer server racks in a room",
          "A small leak in a rubber tire that causes low pressure",
          "A specific type of high-speed Wi-Fi network connection",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems.",
        "topic": "Architecture"
      },
      {
        "id": "cissp-q4",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two different accounts for one service",
          "The act of logging in twice to the same system",
          "Using two different passwords for one account",
          "Using two different types of credentials"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q5",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference between a virus and a worm",
          "Viruses are much faster than worms at infecting systems",
          "Worms are harmless and do not cause any system damage",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction.",
        "topic": "Attacks & Threats"
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
        "explanation": "A policy allowing employees to use personal devices for work.",
        "topic": "Governance"
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
        "explanation": "XSS can steal cookies and session info from users.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q8",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "Advanced Encryption Standard (AES)",
          "Diffie-Hellman Key Exchange",
          "Elliptic Curve Cryptography",
          "Rivest-Shamir-Adleman (RSA)"
        ],
        "answer": "Advanced Encryption Standard (AES)",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q9",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing computer code for potential bugs",
          "Breaking a password using a brute force tool",
          "Converting ciphertext back into plaintext",
          "Downloading data from a remote computer server"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key.",
        "topic": "Implementation"
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
        "explanation": "It's a low-tech social engineering technique.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q11",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test for computer components",
          "A network speed test for measuring bandwidth",
          "A test of ink levels in a professional printer",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture.",
        "topic": "Operations"
      },
      {
        "id": "cissp-q12",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest in all professional interactions",
          "Ensuring data has not been tampered with",
          "Keeping all organizational secrets safe",
          "Making sure the website is fast and responsive"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy.",
        "topic": "Security Core"
      },
      {
        "id": "cissp-q13",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key that everyone in an office has",
          "A key used for opening a private room",
          "A physical metal key for opening a door",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q14",
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure network protocol for transmitting data",
          "A type of antenna designed for receiving radio data",
          "Listening through a physical wall using a device",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q15",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A professional phone repair shop in a city center",
          "A specific type of mobile app for playing games",
          "Hiring a professional mobile expert to manage devices",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones.",
        "topic": "Architecture"
      },
      {
        "id": "cissp-q16",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking into a financial institution or bank",
          "Installing physical cameras for security monitoring",
          "Manipulating people into giving up sensitive info",
          "Writing computer code for social media platforms"
        ],
        "answer": "Manipulating people into giving up sensitive info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q17",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate and trustworthy",
          "Ensure data is compressed for storage",
          "Ensure only authorized users can read data",
          "Ensure services are up and available"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information.",
        "topic": "Security Core"
      },
      {
        "id": "cissp-q18",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow (Memory)",
          "Cross-site scripting (Web)",
          "SQLi (Injection)",
          "Tailgating (Physical)"
        ],
        "answer": "Tailgating (Physical)",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q19",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range for large office buildings",
          "Better encryption and protection against brute force",
          "Cheaper hardware for small home applications",
          "Faster speeds only for all network connections"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks.",
        "topic": "Architecture"
      },
      {
        "id": "cissp-q20",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection that delays downloads",
          "A standard software update for computer applications",
          "Having too much data on a computer hard disk",
          "Overwriting memory to execute malicious code"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q21",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the hardware in the server room",
          "Detect viruses on a computer hard drive",
          "Filter traffic based on security rules",
          "Speed up the local internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy.",
        "topic": "Architecture"
      },
      {
        "id": "cissp-q22",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS attack from many sources",
          "A phishing attack targeted at high-level executives",
          "A type of network cable for data transmission",
          "The act of hunting whales in the natural ocean"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs.",
        "topic": "Attacks & Threats"
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
        "explanation": "SSH is the secure alternative to the unencrypted Telnet.",
        "topic": "Architecture"
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
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity.",
        "topic": "Operations"
      },
      {
        "id": "cissp-q25",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption tools",
          "Hashing algorithms",
          "Network Firewalls"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q26",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A physical network hub for connecting devices",
          "A professional sports referee during a match",
          "A standard secure proxy for browsing the web",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent.",
        "topic": "Attacks & Threats"
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
        "explanation": "This minimizes potential impact of a security breach.",
        "topic": "Governance"
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
        "explanation": "Zero-day threats have no available patch at the time of discovery.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q29",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol for transmitting data",
          "A specific type of professional stenography",
          "Hiding data within other data (like an image)",
          "The act of writing very fast during a meeting"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect.",
        "topic": "Implementation"
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
        "explanation": "DDoS attacks overwhelm a target with traffic from multiple sources.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q31",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory of all computer parts",
          "A list of all employees in a small company",
          "A path through the woods for outdoor hiking"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance.",
        "topic": "Operations"
      },
      {
        "id": "cissp-q32",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing your account passwords every single week",
          "Using a secure and encrypted web browser for access",
          "Using a very long and complex alphanumeric password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q33",
        "question": "What is a 'Rootkit'?",
        "options": [
          "A physical kit used for growing garden plants",
          "A tool for fixing roots of large trees outdoors",
          "A type of antivirus software for scanning files",
          "Malware that hides its presence on a system"
        ],
        "answer": "Malware that hides its presence on a system",
        "category": "Domain Review",
        "explanation": "Rootkits operate at a deep level of the OS to remain undetected.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q34",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup of sensitive organizational data",
          "Giving permission to access a secure resource",
          "The act of logging out from a secure account",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait.",
        "topic": "Security Core"
      },
      {
        "id": "cissp-q35",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A specific type of agriculture involving data plants",
          "Redirecting users to a fake website by poisoning DNS",
          "The act of stealing emails from a remote server"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q36",
        "question": "What is 'War Driving'?",
        "options": [
          "A specific type of high-speed car race",
          "A standard military exercise for troops",
          "Driving a large tank in a combat zone",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q37",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty that covers component repair costs",
          "A set of rules that define allowed traffic",
          "A standard insurance policy for a company building",
          "A technical manual for installing a network router"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets.",
        "topic": "Architecture"
      },
      {
        "id": "cissp-q38",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A secure and encrypted hardware hard drive",
          "A specific way to find lost files on a computer",
          "A standard backup system for organizational data",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit.",
        "topic": "Architecture"
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
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q40",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a physical hard drive with a cloth",
          "Running suspicious programs in an isolated area",
          "Testing website designs for better appearance",
          "The act of playing with sand on a large beach"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system.",
        "topic": "Operations"
      },
      {
        "id": "cissp-q41",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data to save storage space",
          "Converting plaintext into ciphertext",
          "Deleting files from a computer system",
          "Making data public for everyone to see"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q42",
        "question": "What is 'Access Control'?",
        "options": [
          "A specific type of remote control for a television set",
          "Hiring a security guard to monitor the office building",
          "Restricting access to resources to authorized users",
          "The act of turning off the computer at the end of the day"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization.",
        "topic": "Architecture"
      },
      {
        "id": "cissp-q43",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall device for network security",
          "A tool for generating and storing passwords",
          "A type of secure and encrypted email service",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid.",
        "topic": "Attacks & Threats"
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
        "explanation": "Botnets are used for large-scale attacks like DDoS.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q45",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device for organizational data",
          "A specific type of math problem for students",
          "An actual explosive used in a combat zone",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q46",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager for all accounts",
          "A type of firewall for network protection",
          "Studying biological data sets for research",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition.",
        "topic": "Implementation"
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
        "explanation": "In asymmetric encryption, the public key is used for encryption.",
        "topic": "Implementation"
      },
      {
        "id": "cissp-q48",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real physical door at the back of a room",
          "A specific type of network security firewall",
          "A standard secure login for a web application"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cissp-q49",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server for data sets",
          "A secure database for organization",
          "A simple jar of honey from a bee"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets.",
        "topic": "Operations"
      },
      {
        "id": "cissp-q50",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A network protocol for transmitting data sets",
          "A specific type of malicious computer virus",
          "A standard database backup for data safety",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data.",
        "topic": "Attacks & Threats"
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
        "title": "Architecture",
        "topics": [
          {
            "name": "What is a 'Firewall Policy'?",
            "detail": "It dictates how the firewall handles various types of packets."
          },
          {
            "name": "What does 'WPA3' improve over WPA2?",
            "detail": "WPA3 is the latest security standard for wireless networks."
          },
          {
            "name": "What is an 'Air Gap'?",
            "detail": "Air-gapping is used for extremely high-security systems."
          },
          {
            "name": "What is 'Defense in Depth'?",
            "detail": "If one layer fails, others are in place to stop the threat."
          },
          {
            "name": "What does a Firewall do?",
            "detail": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
          },
          {
            "name": "Which protocol provides a secure shell for remote access?",
            "detail": "SSH is the secure alternative to the unencrypted Telnet."
          },
          {
            "name": "What is 'Mobile Device Management' (MDM)?",
            "detail": "MDM allows enforcing security policies on employee phones."
          },
          {
            "name": "What is 'Data Loss Prevention' (DLP)?",
            "detail": "DLP monitors data at rest, in use, and in transit."
          },
          {
            "name": "What is 'Access Control'?",
            "detail": "It involves identification, authentication, and authorization."
          }
        ]
      },
      {
        "title": "Attacks & Threats",
        "topics": [
          {
            "name": "What is 'SQL Injection'?",
            "detail": "SQLi can allow attackers to read or modify sensitive database data."
          },
          {
            "name": "What is 'Eavesdropping' in network security?",
            "detail": "This is a passive attack against confidentiality."
          },
          {
            "name": "What is the difference between a 'Virus' and a 'Worm'?",
            "detail": "Worms can spread across a network without human interaction."
          },
          {
            "name": "What is a 'Trojan Horse'?",
            "detail": "Trojans do not replicate themselves like viruses or worms."
          },
          {
            "name": "What is a 'Zero-Day' vulnerability?",
            "detail": "Zero-day threats have no available patch at the time of discovery."
          },
          {
            "name": "What is 'Man-in-the-Middle' (MITM)?",
            "detail": "The attacker can read or even modify the data being sent."
          },
          {
            "name": "What is 'Pharmimg'?",
            "detail": "Users think they are on a real site but are actually on a malicious one."
          },
          {
            "name": "What is 'Shoulder Surfing'?",
            "detail": "It's a low-tech social engineering technique."
          },
          {
            "name": "What is a 'Logic Bomb'?",
            "detail": "Logic bombs can be planted by malicious insiders."
          },
          {
            "name": "What is a 'Rootkit'?",
            "detail": "Rootkits operate at a deep level of the OS to remain undetected."
          },
          {
            "name": "What is Ransomware?",
            "detail": "Ransomware locks users out of their data until a ransom is paid."
          },
          {
            "name": "What is 'Whaling'?",
            "detail": "Whaling targets 'big fish' like CEOs and CFOs."
          },
          {
            "name": "What is 'Spear Phishing'?",
            "detail": "Spear phishing is highly customized and more effective than general phishing."
          },
          {
            "name": "What is a 'Backdoor'?",
            "detail": "Backdoors can be used for maintenance or by attackers for persistence."
          },
          {
            "name": "What is a 'Buffer Overflow'?",
            "detail": "It can lead to system crashes or arbitrary code execution."
          },
          {
            "name": "What is 'War Driving'?",
            "detail": "Attackers use this to find vulnerable wireless networks to exploit."
          },
          {
            "name": "What is 'Cross-Site Scripting' (XSS)?",
            "detail": "XSS can steal cookies and session info from users."
          },
          {
            "name": "What is 'Social Engineering'?",
            "detail": "It exploits human psychology rather than technical flaws."
          },
          {
            "name": "Which of these is a social engineering attack?",
            "detail": "Tailgating involves physically following an authorized person into a secure area."
          },
          {
            "name": "What does 'DDoS' stand for?",
            "detail": "DDoS attacks overwhelm a target with traffic from multiple sources."
          }
        ]
      },
      {
        "title": "Governance",
        "topics": [
          {
            "name": "What is the 'Principle of Least Privilege'?",
            "detail": "This minimizes potential impact of a security breach."
          },
          {
            "name": "What is 'Authorization'?",
            "detail": "It defines the permissions and rights of a user."
          }
        ]
      },
      {
        "title": "Implementation",
        "topics": [
          {
            "name": "Which of these is a form of Symmetric encryption?",
            "detail": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
          },
          {
            "name": "What is the purpose of Hashing?",
            "detail": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
          },
          {
            "name": "What is 'Steganography'?",
            "detail": "Data is hidden in plain sight, making it hard to detect."
          },
          {
            "name": "What is 'Biometrics'?",
            "detail": "Examples include fingerprints, iris scans, and facial recognition."
          },
          {
            "name": "What is a 'Public Key'?",
            "detail": "In asymmetric encryption, the public key is used for encryption."
          },
          {
            "name": "What is 'Decryption'?",
            "detail": "The reverse of encryption, usually requiring a key."
          },
          {
            "name": "What is a 'Private Key'?",
            "detail": "The private key is used for decryption or creating digital signatures."
          },
          {
            "name": "What is Multi-Factor Authentication (MFA)?",
            "detail": "MFA combines something you know, something you have, and/or something you are."
          },
          {
            "name": "Which of these is used for 'Non-repudiation'?",
            "detail": "Non-repudiation ensures a sender cannot deny having sent a message."
          },
          {
            "name": "What is 'Two-Factor Authentication' (2FA)?",
            "detail": "It adds an extra layer of security beyond just a password."
          }
        ]
      },
      {
        "title": "Operations",
        "topics": [
          {
            "name": "What is 'Vulnerability Scanning'?",
            "detail": "Tools like Nessus or OpenVAS are used for this purpose."
          },
          {
            "name": "What is an 'Audit Trail'?",
            "detail": "Audit trails are crucial for incident investigation and compliance."
          },
          {
            "name": "What is the purpose of 'Sandboxing'?",
            "detail": "Sandboxing prevents malware from affecting the host system."
          },
          {
            "name": "What is a 'Honey Pot'?",
            "detail": "Honeypots help researchers study attacker behavior and deflect them from real targets."
          },
          {
            "name": "What is a 'Penetration Test'?",
            "detail": "Pen-tests provide a deep assessment of an organization's security posture."
          }
        ]
      },
      {
        "title": "Security Core",
        "topics": [
          {
            "name": "What is 'Authentication'?",
            "detail": "Usually involves a password, token, or biometric trait."
          },
          {
            "name": "What is 'Identification' in security?",
            "detail": "The first step in the access control process."
          },
          {
            "name": "What does 'Integrity' mean in security?",
            "detail": "Integrity ensures data is accurate and trustworthy."
          },
          {
            "name": "What is the goal of 'Confidentiality' in the CIA triad?",
            "detail": "Confidentiality prevents unauthorized disclosure of information."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ceh-q1",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup of sensitive organizational data",
          "Giving permission to access a secure resource",
          "The act of logging out from a secure account",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait.",
        "topic": "Security Core"
      },
      {
        "id": "ceh-q2",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A network protocol for transmitting data sets",
          "A specific type of malicious computer virus",
          "A standard database backup for data safety",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q3",
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure network protocol for transmitting data",
          "A type of antenna designed for receiving radio data",
          "Listening through a physical wall using a device",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q4",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "Advanced Encryption Standard (AES)",
          "Diffie-Hellman Key Exchange",
          "Elliptic Curve Cryptography",
          "Rivest-Shamir-Adleman (RSA)"
        ],
        "answer": "Advanced Encryption Standard (AES)",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q5",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference between a virus and a worm",
          "Viruses are much faster than worms at infecting systems",
          "Worms are harmless and do not cause any system damage",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction.",
        "topic": "Attacks & Threats"
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
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q7",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A large wooden statue from Greek mythology",
          "A standard secure downloader for applications",
          "A type of virus that replicates automatically",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms.",
        "topic": "Attacks & Threats"
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
        "explanation": "Zero-day threats have no available patch at the time of discovery.",
        "topic": "Attacks & Threats"
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
        "explanation": "Tools like Nessus or OpenVAS are used for this purpose.",
        "topic": "Operations"
      },
      {
        "id": "ceh-q10",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol for transmitting data",
          "A specific type of professional stenography",
          "Hiding data within other data (like an image)",
          "The act of writing very fast during a meeting"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q11",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A physical network hub for connecting devices",
          "A professional sports referee during a match",
          "A standard secure proxy for browsing the web",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q12",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory of all computer parts",
          "A list of all employees in a small company",
          "A path through the woods for outdoor hiking"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance.",
        "topic": "Operations"
      },
      {
        "id": "ceh-q13",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A specific type of agriculture involving data plants",
          "Redirecting users to a fake website by poisoning DNS",
          "The act of stealing emails from a remote server"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one.",
        "topic": "Attacks & Threats"
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
        "explanation": "It's a low-tech social engineering technique.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q15",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device for organizational data",
          "A specific type of math problem for students",
          "An actual explosive used in a combat zone",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q16",
        "question": "What is a 'Rootkit'?",
        "options": [
          "A physical kit used for growing garden plants",
          "A tool for fixing roots of large trees outdoors",
          "A type of antivirus software for scanning files",
          "Malware that hides its presence on a system"
        ],
        "answer": "Malware that hides its presence on a system",
        "category": "Domain Review",
        "explanation": "Rootkits operate at a deep level of the OS to remain undetected.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q17",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager for all accounts",
          "A type of firewall for network protection",
          "Studying biological data sets for research",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q18",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty that covers component repair costs",
          "A set of rules that define allowed traffic",
          "A standard insurance policy for a company building",
          "A technical manual for installing a network router"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q19",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall device for network security",
          "A tool for generating and storing passwords",
          "A type of secure and encrypted email service",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q20",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS attack from many sources",
          "A phishing attack targeted at high-level executives",
          "A type of network cable for data transmission",
          "The act of hunting whales in the natural ocean"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q21",
        "question": "What is 'Spear Phishing'?",
        "options": [
          "A type of network cable for data transfers",
          "A very fast attack that occurs in seconds",
          "Phishing targeted at a specific person",
          "Phishing with a physical weapon for theft"
        ],
        "answer": "Phishing targeted at a specific person",
        "category": "Domain Review",
        "explanation": "Spear phishing is highly customized and more effective than general phishing.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q22",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range for large office buildings",
          "Better encryption and protection against brute force",
          "Cheaper hardware for small home applications",
          "Faster speeds only for all network connections"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q23",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card at the building entrance",
          "Looking in a mirror to check your appearance",
          "Stating who you are (e.g., username)",
          "Taking a professional photo for a staff badge"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process.",
        "topic": "Security Core"
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
        "explanation": "In asymmetric encryption, the public key is used for encryption.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q25",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest in all professional interactions",
          "Ensuring data has not been tampered with",
          "Keeping all organizational secrets safe",
          "Making sure the website is fast and responsive"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy.",
        "topic": "Security Core"
      },
      {
        "id": "ceh-q26",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real physical door at the back of a room",
          "A specific type of network security firewall",
          "A standard secure login for a web application"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q27",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing computer code for potential bugs",
          "Breaking a password using a brute force tool",
          "Converting ciphertext back into plaintext",
          "Downloading data from a remote computer server"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q28",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection that delays downloads",
          "A standard software update for computer applications",
          "Having too much data on a computer hard disk",
          "Overwriting memory to execute malicious code"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q29",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A physical gap between computer server racks in a room",
          "A small leak in a rubber tire that causes low pressure",
          "A specific type of high-speed Wi-Fi network connection",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q30",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key that everyone in an office has",
          "A key used for opening a private room",
          "A physical metal key for opening a door",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures.",
        "topic": "Implementation"
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
        "explanation": "If one layer fails, others are in place to stop the threat.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q32",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing your account passwords every single week",
          "Using a secure and encrypted web browser for access",
          "Using a very long and complex alphanumeric password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q33",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the hardware in the server room",
          "Detect viruses on a computer hard drive",
          "Filter traffic based on security rules",
          "Speed up the local internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q34",
        "question": "What is 'War Driving'?",
        "options": [
          "A specific type of high-speed car race",
          "A standard military exercise for troops",
          "Driving a large tank in a combat zone",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit.",
        "topic": "Attacks & Threats"
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
        "explanation": "SSH is the secure alternative to the unencrypted Telnet.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q36",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption tools",
          "Hashing algorithms",
          "Network Firewalls"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message.",
        "topic": "Implementation"
      },
      {
        "id": "ceh-q37",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate and trustworthy",
          "Ensure data is compressed for storage",
          "Ensure only authorized users can read data",
          "Ensure services are up and available"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information.",
        "topic": "Security Core"
      },
      {
        "id": "ceh-q38",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A professional phone repair shop in a city center",
          "A specific type of mobile app for playing games",
          "Hiring a professional mobile expert to manage devices",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q39",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a physical hard drive with a cloth",
          "Running suspicious programs in an isolated area",
          "Testing website designs for better appearance",
          "The act of playing with sand on a large beach"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system.",
        "topic": "Operations"
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
        "explanation": "This minimizes potential impact of a security breach.",
        "topic": "Governance"
      },
      {
        "id": "ceh-q41",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password for accessing a secure system",
          "Creating a new account for a website or application",
          "Determining what an authenticated user can do",
          "The act of entering a building through the front door"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user.",
        "topic": "Governance"
      },
      {
        "id": "ceh-q42",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server for data sets",
          "A secure database for organization",
          "A simple jar of honey from a bee"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets.",
        "topic": "Operations"
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
        "explanation": "XSS can steal cookies and session info from users.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q44",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking into a financial institution or bank",
          "Installing physical cameras for security monitoring",
          "Manipulating people into giving up sensitive info",
          "Writing computer code for social media platforms"
        ],
        "answer": "Manipulating people into giving up sensitive info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q45",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A secure and encrypted hardware hard drive",
          "A specific way to find lost files on a computer",
          "A standard backup system for organizational data",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit.",
        "topic": "Architecture"
      },
      {
        "id": "ceh-q46",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow (Memory)",
          "Cross-site scripting (Web)",
          "SQLi (Injection)",
          "Tailgating (Physical)"
        ],
        "answer": "Tailgating (Physical)",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q47",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test for computer components",
          "A network speed test for measuring bandwidth",
          "A test of ink levels in a professional printer",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture.",
        "topic": "Operations"
      },
      {
        "id": "ceh-q48",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two different accounts for one service",
          "The act of logging in twice to the same system",
          "Using two different passwords for one account",
          "Using two different types of credentials"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password.",
        "topic": "Implementation"
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
        "explanation": "DDoS attacks overwhelm a target with traffic from multiple sources.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "ceh-q50",
        "question": "What is 'Access Control'?",
        "options": [
          "A specific type of remote control for a television set",
          "Hiring a security guard to monitor the office building",
          "Restricting access to resources to authorized users",
          "The act of turning off the computer at the end of the day"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization.",
        "topic": "Architecture"
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
        "title": "Billing & Pricing",
        "topics": [
          {
            "name": "What is 'Spot Instances'?",
            "detail": "Spot instances can be interrupted if the provider needs the capacity."
          },
          {
            "name": "What is the primary advantage of cloud computing?",
            "detail": "Cloud computing converts capital expenses into variable operational expenses."
          },
          {
            "name": "What is 'Cloud Billing'?",
            "detail": "Cloud billing is usually based on usage (pay-as-you-go)."
          },
          {
            "name": "What is 'Reserved Instances'?",
            "detail": "Reserved instances can save a lot of money for long-term workloads."
          }
        ]
      },
      {
        "title": "Cloud Concepts",
        "topics": [
          {
            "name": "What is 'PaaS'?",
            "detail": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
          },
          {
            "name": "What is a 'Cloud Service Provider' (CSP)?",
            "detail": "The 'Big Three' are AWS, Microsoft, and Google."
          },
          {
            "name": "What does 'Scalability' mean in the cloud?",
            "detail": "Scalability can be vertical (size) or horizontal (number)."
          },
          {
            "name": "What is 'Fault Tolerance'?",
            "detail": "Fault tolerance is a higher level of availability."
          },
          {
            "name": "What is 'Multi-Tenancy'?",
            "detail": "The provider ensures data isolation between tenants."
          },
          {
            "name": "What is 'IaaS'?",
            "detail": "IaaS provides fundamental compute, storage, and networking resources on demand."
          },
          {
            "name": "What is a 'Private Cloud'?",
            "detail": "Private clouds offer greater control and privacy."
          },
          {
            "name": "Which cloud model is a combination of public and private clouds?",
            "detail": "Hybrid clouds allow data and apps to be shared between public and private environments."
          },
          {
            "name": "What is 'SaaS'?",
            "detail": "SaaS delivers software applications over the internet on a subscription basis."
          },
          {
            "name": "What is 'High Availability' (HA)?",
            "detail": "HA is achieved through redundancy and failover mechanisms."
          },
          {
            "name": "What is a 'Public Cloud'?",
            "detail": "Examples include AWS, Azure, and Google Cloud."
          },
          {
            "name": "What is 'Elasticity'?",
            "detail": "Elasticity is a core feature of cloud computing for cost efficiency."
          }
        ]
      },
      {
        "title": "Security & Compliance",
        "topics": [
          {
            "name": "What is 'Data Sovereignty'?",
            "detail": "Sovereignty is a major consideration for global cloud deployments."
          },
          {
            "name": "What is 'Cloud Governance'?",
            "detail": "Governance ensures compliance and efficiency."
          },
          {
            "name": "What is 'Identity and Access Management' (IAM)?",
            "detail": "IAM is a fundamental part of cloud security."
          },
          {
            "name": "What is 'Cloud Security'?",
            "detail": "Security is a shared responsibility in the cloud."
          },
          {
            "name": "What is the 'Shared Responsibility Model'?",
            "detail": "The provider secures the cloud; the customer secures what's in the cloud."
          }
        ]
      },
      {
        "title": "Technology",
        "topics": [
          {
            "name": "What is 'Block Storage'?",
            "detail": "Block storage provides high performance for transaction-heavy apps."
          },
          {
            "name": "What is 'Infrastructure as Code' (IaC)?",
            "detail": "IaC allows for consistent and repeatable deployments."
          },
          {
            "name": "What is a 'Region' in cloud computing?",
            "detail": "Regions are geographically isolated areas where cloud resources are hosted."
          },
          {
            "name": "What is a 'Virtual Private Cloud' (VPC)?",
            "detail": "VPCs allow users to define their own network topology."
          },
          {
            "name": "What is 'Kubernetes'?",
            "detail": "Kubernetes is the standard for container orchestration."
          },
          {
            "name": "What is 'Content Delivery Network' (CDN)?",
            "detail": "CDNs reduce latency by serving content from a location near the user."
          },
          {
            "name": "What is 'Terraform'?",
            "detail": "Terraform is cloud-agnostic and supports many providers."
          },
          {
            "name": "What is 'File Storage'?",
            "detail": "File storage is common for shared network drives."
          },
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest OSs."
          },
          {
            "name": "What is 'Cloud Monitoring'?",
            "detail": "Example: Amazon CloudWatch or Azure Monitor."
          },
          {
            "name": "What is 'Serverless Functions'?",
            "detail": "Example: AWS Lambda or Azure Functions."
          },
          {
            "name": "What is 'Cloud Native'?",
            "detail": "Cloud-native apps leverage microservices and containers."
          },
          {
            "name": "What is 'Low Latency'?",
            "detail": "Low latency is critical for gaming and financial applications."
          },
          {
            "name": "What is 'Microservices'?",
            "detail": "Microservices improve scalability and ease of deployment."
          },
          {
            "name": "What is 'Disaster Recovery' (DR)?",
            "detail": "DR often involves multi-region backups and replication."
          },
          {
            "name": "What is an 'Availability Zone' (AZ)?",
            "detail": "AZs help ensure high availability and fault tolerance within a region."
          },
          {
            "name": "What is 'Virtualization' in cloud computing?",
            "detail": "Virtualization is the foundation of cloud computing."
          },
          {
            "name": "What is a 'Cloud Gateway'?",
            "detail": "Example: AWS Storage Gateway or Azure ExpressRoute."
          },
          {
            "name": "What is 'Object Storage'?",
            "detail": "Object storage is ideal for unstructured data like photos and videos."
          },
          {
            "name": "What is 'Serverless Database'?",
            "detail": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
          },
          {
            "name": "What is 'DevOps' in the cloud?",
            "detail": "DevOps uses automation and CI/CD pipelines."
          },
          {
            "name": "What is 'Cloud Storage'?",
            "detail": "Cloud storage is highly scalable and accessible from anywhere."
          },
          {
            "name": "What is 'Edge Computing'?",
            "detail": "Edge computing reduces latency and bandwidth usage."
          },
          {
            "name": "What is 'Cloud Logging'?",
            "detail": "Logs are essential for troubleshooting and security analysis."
          },
          {
            "name": "What is a 'Container'?",
            "detail": "Docker is a popular container technology."
          },
          {
            "name": "What is a 'Cloud Migration'?",
            "detail": "Migration can be a complex and multi-stage process."
          },
          {
            "name": "What is 'Hybrid IT'?",
            "detail": "Most large enterprises operate in a hybrid IT model."
          },
          {
            "name": "What is 'Auto Scaling'?",
            "detail": "Auto scaling ensures performance during peaks and saves money during lulls."
          },
          {
            "name": "What is 'Serverless' computing?",
            "detail": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-sa-assoc-q1",
        "question": "What is 'Block Storage'?",
        "options": [
          "A large wall made of physical computer servers in a rack",
          "A secure and locked vault used for storing physical data",
          "A specific type of computer memory for high-speed tasks",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps.",
        "topic": "Technology"
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
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q3",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual for installing server equipment",
          "A type of cloud billing for managing monthly costs",
          "Managing infrastructure using configuration files and code",
          "Writing computer code on a local developer server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q4",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A physical server with spots on its chassis",
          "A specific type of storage for active data sets",
          "A temporary cloud environment for testing apps",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-sa-assoc-q5",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A large country-wide computer network for public use",
          "A physical location containing multiple availability zones",
          "A single data center facility located in a remote area",
          "A virtual private cloud connection for an individual"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q6",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A personal server hosted in a private home",
          "A private network section within a public cloud",
          "A secure website with a SSL certificate",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q7",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A programming language used for creating web applications",
          "A public cloud provider for storing organizational data",
          "A specific type of database optimized for container data",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q8",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer that produces computer components",
          "A standard internet provider for home and business use",
          "A website developer who creates online content and sites"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q9",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A highly secure database with advanced encryption",
          "A king or monarch ruling over a cloud-based kingdom",
          "A specific type of storage device for local data sets",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-sa-assoc-q10",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A manual that explains how to use a standard cloud system",
          "A security guard who protects the physical cloud hardware",
          "A sovereign government ruling over a cloud-based kingdom",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency.",
        "topic": "Security & Compliance"
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
        "explanation": "Cloud computing converts capital expenses into variable operational expenses.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-sa-assoc-q12",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A fast internet connection for home users to browse the web",
          "A system of distributed servers that deliver web content to users",
          "A television station for broadcasting news and information",
          "A type of storage device for local backups of data files"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user.",
        "topic": "Technology"
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
        "explanation": "Scalability can be vertical (size) or horizontal (number).",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q14",
        "question": "What is 'Terraform'?",
        "options": [
          "A database system for storing user profiles",
          "A planet in the solar system such as Earth",
          "A popular tool for Infrastructure as Code",
          "A public cloud provider for data storage"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q15",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A physical driver's license used for identification",
          "A security guard who protects the data center building",
          "A standard login page for a website or application",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-sa-assoc-q16",
        "question": "What is 'File Storage'?",
        "options": [
          "A copy of data saved on a standard physical compact disc",
          "A physical filing cabinet used for storing paper documents",
          "A specific type of cloud service for general data storage",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q17",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A professional manager who oversees a cloud department",
          "A specific type of high-speed network cable for data",
          "A very fast computer processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q18",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard who monitors the server room",
          "A standard software update for computer apps",
          "Observing the performance and health of cloud resources",
          "The act of watching a cloud in the natural sky"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q19",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A computer system that does not have any electrical power",
          "A public cloud service that has no active users at all",
          "A website that does not contain any data or information",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q20",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A person who was born in the cloud computing era",
          "A public cloud provider such as AWS or Azure",
          "A specific type of software for managing data",
          "Applications designed specifically for the cloud environment"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q21",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud service with low capacity",
          "A slow network with many interruptions",
          "A small file size for fast transmission",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q22",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A hardware warranty that covers parts and labor costs",
          "A minor bug in the software application source code",
          "The ability of a system to continue operating even if a component fails",
          "The act of being very patient during a system outage"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q23",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple application for tracking data sets",
          "A type of computer chip for mobile devices",
          "A very small server used for local hosting",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q24",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A standard backup saved on a physical USB drive",
          "A standard government program for disaster relief",
          "Plans and processes to restore IT systems after a major failure",
          "The simple act of fixing a broken personal computer"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q25",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive used for storing sensitive data sets",
          "A large city-wide computer network for the general public",
          "A single server rack located inside a small data center",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q26",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset used for playing immersive virtual reality computer games",
          "A computer game designed for teaching general technology concepts",
          "A fake cloud-based service that does not have any real data sets",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q27",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A high-speed router for local area networks",
          "A physical entrance to a secured data center",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q28",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A physical building with many different office rooms for rent",
          "Hiring many tenants to manage your data center facility",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants.",
        "topic": "Cloud Concepts"
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
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q30",
        "question": "What is 'Object Storage'?",
        "options": [
          "A simple hierarchical folder stored on a personal computer",
          "A specific type of database optimized for storing metadata",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects in a warehouse or storage facility"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q31",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill sent through the standard mail",
          "A specific type of payment for web services",
          "A standard software license for applications",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go).",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-sa-assoc-q32",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database stored on a physical USB flash drive",
          "A database that scales automatically and has no fixed cost",
          "A simple text file stored in a cloud environment",
          "A standard database that is available for everyone"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q33",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud-based service that is protected with a password",
          "A hidden data center facility with no public access points",
          "A personal hard drive used for storing digital information",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q34",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A physical lock placed on a computer server in a rack",
          "A professional security guard working in a data center",
          "A secure and encrypted web browser for accessing the web",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-sa-assoc-q35",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system for saving organizational data",
          "A private server for an individual organization",
          "A specific type of storage for active data sets",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "aws-sa-assoc-q36",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer who designs data centers",
          "A programming language used for cloud apps",
          "A specific type of cloud for development tasks",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q37",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A copy of data saved on a standard physical USB drive",
          "A physical hard drive floating in the natural sky",
          "A type of computer memory used for fast processing",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q38",
        "question": "What is 'Edge Computing'?",
        "options": [
          "A fast internet connection used for general home browsing",
          "Building a physical cloud data center on a mountain cliff",
          "Processing data closer to the source of data generation",
          "Using the latest computer hardware for high-speed processing"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q39",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A specific type of storage device for local data backups",
          "Recording events and activities in the cloud for auditing",
          "The act of cutting down trees for timber production",
          "The act of writing a personal diary at the end of the day"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q40",
        "question": "What is a 'Container'?",
        "options": [
          "A large physical box used for shipping computer servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure and locked room for housing organizational data",
          "A specific type of storage device for saving digital files"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q41",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Buying new computer servers for an internal data center",
          "Moving data and apps from on-premises to the cloud",
          "The act of updating a website with new content and images",
          "The natural process of birds flying south during winter"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process.",
        "topic": "Technology"
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
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q43",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A collaborative group project for a university course",
          "A framework defining security tasks for provider and customer",
          "Sharing a secure account password with another team member",
          "Splitting the monthly cloud bill between multiple departments"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "aws-sa-assoc-q44",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service (SaaS)",
          "Software as a Service (SaaS)",
          "Storage as a Service (SaaS)",
          "System as a Service (SaaS)"
        ],
        "answer": "Software as a Service (SaaS)",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q45",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A fast internet connection for data transfers",
          "A public cloud service for everyone to use",
          "A very tall server rack in a data center",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q46",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A free Wi-Fi hotspot available for public use in a city",
          "A generic cloud-based service that is open for everyone to use",
          "A government-owned and operated internal computer network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q47",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable used for connecting networking devices",
          "A specific type of cloud-based service for data storage",
          "A very fast network speed for transmitting large data sets",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "aws-sa-assoc-q48",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A fast internet connection for high-speed transfers",
          "A specialized computer that runs on natural gas",
          "A standard computer server for managing data sets",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q49",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A self-adjusting physical scale used for measuring weight",
          "A specific type of cloud billing for managing monthly costs",
          "A standard hardware upgrade for increasing system speed",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls.",
        "topic": "Technology"
      },
      {
        "id": "aws-sa-assoc-q50",
        "question": "What is 'Serverless' computing?",
        "options": [
          "Running code without managing server infrastructure",
          "Storing data directly in the user's web browser",
          "Using a cloud with no physical hardware at all",
          "Using a server that never crashes or goes offline"
        ],
        "answer": "Running code without managing server infrastructure",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution.",
        "topic": "Technology"
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
        "title": "Billing & Pricing",
        "topics": [
          {
            "name": "What is 'Spot Instances'?",
            "detail": "Spot instances can be interrupted if the provider needs the capacity."
          },
          {
            "name": "What is 'Reserved Instances'?",
            "detail": "Reserved instances can save a lot of money for long-term workloads."
          },
          {
            "name": "What is 'Cloud Billing'?",
            "detail": "Cloud billing is usually based on usage (pay-as-you-go)."
          },
          {
            "name": "What is the primary advantage of cloud computing?",
            "detail": "Cloud computing converts capital expenses into variable operational expenses."
          }
        ]
      },
      {
        "title": "Cloud Concepts",
        "topics": [
          {
            "name": "What is a 'Public Cloud'?",
            "detail": "Examples include AWS, Azure, and Google Cloud."
          },
          {
            "name": "What is 'PaaS'?",
            "detail": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
          },
          {
            "name": "What is 'Fault Tolerance'?",
            "detail": "Fault tolerance is a higher level of availability."
          },
          {
            "name": "What is 'SaaS'?",
            "detail": "SaaS delivers software applications over the internet on a subscription basis."
          },
          {
            "name": "What is 'High Availability' (HA)?",
            "detail": "HA is achieved through redundancy and failover mechanisms."
          },
          {
            "name": "What is 'Elasticity'?",
            "detail": "Elasticity is a core feature of cloud computing for cost efficiency."
          },
          {
            "name": "What is 'Multi-Tenancy'?",
            "detail": "The provider ensures data isolation between tenants."
          },
          {
            "name": "What is 'IaaS'?",
            "detail": "IaaS provides fundamental compute, storage, and networking resources on demand."
          },
          {
            "name": "What is a 'Cloud Service Provider' (CSP)?",
            "detail": "The 'Big Three' are AWS, Microsoft, and Google."
          },
          {
            "name": "What does 'Scalability' mean in the cloud?",
            "detail": "Scalability can be vertical (size) or horizontal (number)."
          },
          {
            "name": "What is a 'Private Cloud'?",
            "detail": "Private clouds offer greater control and privacy."
          },
          {
            "name": "Which cloud model is a combination of public and private clouds?",
            "detail": "Hybrid clouds allow data and apps to be shared between public and private environments."
          }
        ]
      },
      {
        "title": "Security & Compliance",
        "topics": [
          {
            "name": "What is 'Cloud Security'?",
            "detail": "Security is a shared responsibility in the cloud."
          },
          {
            "name": "What is 'Cloud Governance'?",
            "detail": "Governance ensures compliance and efficiency."
          },
          {
            "name": "What is the 'Shared Responsibility Model'?",
            "detail": "The provider secures the cloud; the customer secures what's in the cloud."
          },
          {
            "name": "What is 'Identity and Access Management' (IAM)?",
            "detail": "IAM is a fundamental part of cloud security."
          },
          {
            "name": "What is 'Data Sovereignty'?",
            "detail": "Sovereignty is a major consideration for global cloud deployments."
          }
        ]
      },
      {
        "title": "Technology",
        "topics": [
          {
            "name": "What is a 'Region' in cloud computing?",
            "detail": "Regions are geographically isolated areas where cloud resources are hosted."
          },
          {
            "name": "What is 'Edge Computing'?",
            "detail": "Edge computing reduces latency and bandwidth usage."
          },
          {
            "name": "What is 'Low Latency'?",
            "detail": "Low latency is critical for gaming and financial applications."
          },
          {
            "name": "What is 'File Storage'?",
            "detail": "File storage is common for shared network drives."
          },
          {
            "name": "What is 'Serverless Database'?",
            "detail": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
          },
          {
            "name": "What is 'Content Delivery Network' (CDN)?",
            "detail": "CDNs reduce latency by serving content from a location near the user."
          },
          {
            "name": "What is 'Hybrid IT'?",
            "detail": "Most large enterprises operate in a hybrid IT model."
          },
          {
            "name": "What is 'Microservices'?",
            "detail": "Microservices improve scalability and ease of deployment."
          },
          {
            "name": "What is 'Object Storage'?",
            "detail": "Object storage is ideal for unstructured data like photos and videos."
          },
          {
            "name": "What is 'Cloud Storage'?",
            "detail": "Cloud storage is highly scalable and accessible from anywhere."
          },
          {
            "name": "What is a 'Virtual Private Cloud' (VPC)?",
            "detail": "VPCs allow users to define their own network topology."
          },
          {
            "name": "What is 'Serverless Functions'?",
            "detail": "Example: AWS Lambda or Azure Functions."
          },
          {
            "name": "What is 'Block Storage'?",
            "detail": "Block storage provides high performance for transaction-heavy apps."
          },
          {
            "name": "What is 'DevOps' in the cloud?",
            "detail": "DevOps uses automation and CI/CD pipelines."
          },
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest OSs."
          },
          {
            "name": "What is 'Kubernetes'?",
            "detail": "Kubernetes is the standard for container orchestration."
          },
          {
            "name": "What is 'Disaster Recovery' (DR)?",
            "detail": "DR often involves multi-region backups and replication."
          },
          {
            "name": "What is 'Cloud Logging'?",
            "detail": "Logs are essential for troubleshooting and security analysis."
          },
          {
            "name": "What is 'Cloud Monitoring'?",
            "detail": "Example: Amazon CloudWatch or Azure Monitor."
          },
          {
            "name": "What is an 'Availability Zone' (AZ)?",
            "detail": "AZs help ensure high availability and fault tolerance within a region."
          },
          {
            "name": "What is a 'Container'?",
            "detail": "Docker is a popular container technology."
          },
          {
            "name": "What is 'Auto Scaling'?",
            "detail": "Auto scaling ensures performance during peaks and saves money during lulls."
          },
          {
            "name": "What is a 'Cloud Gateway'?",
            "detail": "Example: AWS Storage Gateway or Azure ExpressRoute."
          },
          {
            "name": "What is 'Serverless' computing?",
            "detail": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
          },
          {
            "name": "What is a 'Cloud Migration'?",
            "detail": "Migration can be a complex and multi-stage process."
          },
          {
            "name": "What is 'Terraform'?",
            "detail": "Terraform is cloud-agnostic and supports many providers."
          },
          {
            "name": "What is 'Cloud Native'?",
            "detail": "Cloud-native apps leverage microservices and containers."
          },
          {
            "name": "What is 'Virtualization' in cloud computing?",
            "detail": "Virtualization is the foundation of cloud computing."
          },
          {
            "name": "What is 'Infrastructure as Code' (IaC)?",
            "detail": "IaC allows for consistent and repeatable deployments."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "az-900-q1",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A free Wi-Fi hotspot available for public use in a city",
          "A generic cloud-based service that is open for everyone to use",
          "A government-owned and operated internal computer network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q2",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A physical server with spots on its chassis",
          "A specific type of storage for active data sets",
          "A temporary cloud environment for testing apps",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "az-900-q3",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system for saving organizational data",
          "A private server for an individual organization",
          "A specific type of storage for active data sets",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "az-900-q4",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A large country-wide computer network for public use",
          "A physical location containing multiple availability zones",
          "A single data center facility located in a remote area",
          "A virtual private cloud connection for an individual"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q5",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A physical lock placed on a computer server in a rack",
          "A professional security guard working in a data center",
          "A secure and encrypted web browser for accessing the web",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-900-q6",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A manual that explains how to use a standard cloud system",
          "A security guard who protects the physical cloud hardware",
          "A sovereign government ruling over a cloud-based kingdom",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-900-q7",
        "question": "What is 'Edge Computing'?",
        "options": [
          "A fast internet connection used for general home browsing",
          "Building a physical cloud data center on a mountain cliff",
          "Processing data closer to the source of data generation",
          "Using the latest computer hardware for high-speed processing"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q8",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud service with low capacity",
          "A slow network with many interruptions",
          "A small file size for fast transmission",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q9",
        "question": "What is 'File Storage'?",
        "options": [
          "A copy of data saved on a standard physical compact disc",
          "A physical filing cabinet used for storing paper documents",
          "A specific type of cloud service for general data storage",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q10",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database stored on a physical USB flash drive",
          "A database that scales automatically and has no fixed cost",
          "A simple text file stored in a cloud environment",
          "A standard database that is available for everyone"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore.",
        "topic": "Technology"
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
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q12",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A hardware warranty that covers parts and labor costs",
          "A minor bug in the software application source code",
          "The ability of a system to continue operating even if a component fails",
          "The act of being very patient during a system outage"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q13",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A fast internet connection for home users to browse the web",
          "A system of distributed servers that deliver web content to users",
          "A television station for broadcasting news and information",
          "A type of storage device for local backups of data files"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q14",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A fast internet connection for high-speed transfers",
          "A specialized computer that runs on natural gas",
          "A standard computer server for managing data sets",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q15",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple application for tracking data sets",
          "A type of computer chip for mobile devices",
          "A very small server used for local hosting",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q16",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service (SaaS)",
          "Software as a Service (SaaS)",
          "Storage as a Service (SaaS)",
          "System as a Service (SaaS)"
        ],
        "answer": "Software as a Service (SaaS)",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q17",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A fast internet connection for data transfers",
          "A public cloud service for everyone to use",
          "A very tall server rack in a data center",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q18",
        "question": "What is 'Object Storage'?",
        "options": [
          "A simple hierarchical folder stored on a personal computer",
          "A specific type of database optimized for storing metadata",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects in a warehouse or storage facility"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q19",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A copy of data saved on a standard physical USB drive",
          "A physical hard drive floating in the natural sky",
          "A type of computer memory used for fast processing",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q20",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable used for connecting networking devices",
          "A specific type of cloud-based service for data storage",
          "A very fast network speed for transmitting large data sets",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q21",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A personal server hosted in a private home",
          "A private network section within a public cloud",
          "A secure website with a SSL certificate",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q22",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A computer system that does not have any electrical power",
          "A public cloud service that has no active users at all",
          "A website that does not contain any data or information",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q23",
        "question": "What is 'Block Storage'?",
        "options": [
          "A large wall made of physical computer servers in a rack",
          "A secure and locked vault used for storing physical data",
          "A specific type of computer memory for high-speed tasks",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q24",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A collaborative group project for a university course",
          "A framework defining security tasks for provider and customer",
          "Sharing a secure account password with another team member",
          "Splitting the monthly cloud bill between multiple departments"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-900-q25",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer who designs data centers",
          "A programming language used for cloud apps",
          "A specific type of cloud for development tasks",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q26",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A professional manager who oversees a cloud department",
          "A specific type of high-speed network cable for data",
          "A very fast computer processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q27",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A physical driver's license used for identification",
          "A security guard who protects the data center building",
          "A standard login page for a website or application",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-900-q28",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A programming language used for creating web applications",
          "A public cloud provider for storing organizational data",
          "A specific type of database optimized for container data",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q29",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A standard backup saved on a physical USB drive",
          "A standard government program for disaster relief",
          "Plans and processes to restore IT systems after a major failure",
          "The simple act of fixing a broken personal computer"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q30",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A physical building with many different office rooms for rent",
          "Hiring many tenants to manage your data center facility",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q31",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A highly secure database with advanced encryption",
          "A king or monarch ruling over a cloud-based kingdom",
          "A specific type of storage device for local data sets",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments.",
        "topic": "Security & Compliance"
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
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q33",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer that produces computer components",
          "A standard internet provider for home and business use",
          "A website developer who creates online content and sites"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google.",
        "topic": "Cloud Concepts"
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
        "explanation": "Scalability can be vertical (size) or horizontal (number).",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q35",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A specific type of storage device for local data backups",
          "Recording events and activities in the cloud for auditing",
          "The act of cutting down trees for timber production",
          "The act of writing a personal diary at the end of the day"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q36",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard who monitors the server room",
          "A standard software update for computer apps",
          "Observing the performance and health of cloud resources",
          "The act of watching a cloud in the natural sky"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q37",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive used for storing sensitive data sets",
          "A large city-wide computer network for the general public",
          "A single server rack located inside a small data center",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q38",
        "question": "What is a 'Container'?",
        "options": [
          "A large physical box used for shipping computer servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure and locked room for housing organizational data",
          "A specific type of storage device for saving digital files"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q39",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill sent through the standard mail",
          "A specific type of payment for web services",
          "A standard software license for applications",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go).",
        "topic": "Billing & Pricing"
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
        "explanation": "Cloud computing converts capital expenses into variable operational expenses.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "az-900-q41",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A self-adjusting physical scale used for measuring weight",
          "A specific type of cloud billing for managing monthly costs",
          "A standard hardware upgrade for increasing system speed",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q42",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A high-speed router for local area networks",
          "A physical entrance to a secured data center",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q43",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud-based service that is protected with a password",
          "A hidden data center facility with no public access points",
          "A personal hard drive used for storing digital information",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy.",
        "topic": "Cloud Concepts"
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
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-900-q45",
        "question": "What is 'Serverless' computing?",
        "options": [
          "Running code without managing server infrastructure",
          "Storing data directly in the user's web browser",
          "Using a cloud with no physical hardware at all",
          "Using a server that never crashes or goes offline"
        ],
        "answer": "Running code without managing server infrastructure",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q46",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Buying new computer servers for an internal data center",
          "Moving data and apps from on-premises to the cloud",
          "The act of updating a website with new content and images",
          "The natural process of birds flying south during winter"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q47",
        "question": "What is 'Terraform'?",
        "options": [
          "A database system for storing user profiles",
          "A planet in the solar system such as Earth",
          "A popular tool for Infrastructure as Code",
          "A public cloud provider for data storage"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q48",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A person who was born in the cloud computing era",
          "A public cloud provider such as AWS or Azure",
          "A specific type of software for managing data",
          "Applications designed specifically for the cloud environment"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q49",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset used for playing immersive virtual reality computer games",
          "A computer game designed for teaching general technology concepts",
          "A fake cloud-based service that does not have any real data sets",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing.",
        "topic": "Technology"
      },
      {
        "id": "az-900-q50",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual for installing server equipment",
          "A type of cloud billing for managing monthly costs",
          "Managing infrastructure using configuration files and code",
          "Writing computer code on a local developer server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments.",
        "topic": "Technology"
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
        "title": "Billing & Pricing",
        "topics": [
          {
            "name": "What is 'Reserved Instances'?",
            "detail": "Reserved instances can save a lot of money for long-term workloads."
          },
          {
            "name": "What is 'Spot Instances'?",
            "detail": "Spot instances can be interrupted if the provider needs the capacity."
          },
          {
            "name": "What is the primary advantage of cloud computing?",
            "detail": "Cloud computing converts capital expenses into variable operational expenses."
          },
          {
            "name": "What is 'Cloud Billing'?",
            "detail": "Cloud billing is usually based on usage (pay-as-you-go)."
          }
        ]
      },
      {
        "title": "Cloud Concepts",
        "topics": [
          {
            "name": "What is 'PaaS'?",
            "detail": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
          },
          {
            "name": "What is 'SaaS'?",
            "detail": "SaaS delivers software applications over the internet on a subscription basis."
          },
          {
            "name": "What is 'Elasticity'?",
            "detail": "Elasticity is a core feature of cloud computing for cost efficiency."
          },
          {
            "name": "What is 'IaaS'?",
            "detail": "IaaS provides fundamental compute, storage, and networking resources on demand."
          },
          {
            "name": "Which cloud model is a combination of public and private clouds?",
            "detail": "Hybrid clouds allow data and apps to be shared between public and private environments."
          },
          {
            "name": "What is a 'Private Cloud'?",
            "detail": "Private clouds offer greater control and privacy."
          },
          {
            "name": "What does 'Scalability' mean in the cloud?",
            "detail": "Scalability can be vertical (size) or horizontal (number)."
          },
          {
            "name": "What is a 'Public Cloud'?",
            "detail": "Examples include AWS, Azure, and Google Cloud."
          },
          {
            "name": "What is a 'Cloud Service Provider' (CSP)?",
            "detail": "The 'Big Three' are AWS, Microsoft, and Google."
          },
          {
            "name": "What is 'Multi-Tenancy'?",
            "detail": "The provider ensures data isolation between tenants."
          },
          {
            "name": "What is 'Fault Tolerance'?",
            "detail": "Fault tolerance is a higher level of availability."
          },
          {
            "name": "What is 'High Availability' (HA)?",
            "detail": "HA is achieved through redundancy and failover mechanisms."
          }
        ]
      },
      {
        "title": "Security & Compliance",
        "topics": [
          {
            "name": "What is 'Data Sovereignty'?",
            "detail": "Sovereignty is a major consideration for global cloud deployments."
          },
          {
            "name": "What is the 'Shared Responsibility Model'?",
            "detail": "The provider secures the cloud; the customer secures what's in the cloud."
          },
          {
            "name": "What is 'Cloud Governance'?",
            "detail": "Governance ensures compliance and efficiency."
          },
          {
            "name": "What is 'Identity and Access Management' (IAM)?",
            "detail": "IAM is a fundamental part of cloud security."
          },
          {
            "name": "What is 'Cloud Security'?",
            "detail": "Security is a shared responsibility in the cloud."
          }
        ]
      },
      {
        "title": "Technology",
        "topics": [
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest OSs."
          },
          {
            "name": "What is 'Serverless' computing?",
            "detail": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
          },
          {
            "name": "What is a 'Container'?",
            "detail": "Docker is a popular container technology."
          },
          {
            "name": "What is 'File Storage'?",
            "detail": "File storage is common for shared network drives."
          },
          {
            "name": "What is 'Disaster Recovery' (DR)?",
            "detail": "DR often involves multi-region backups and replication."
          },
          {
            "name": "What is 'Content Delivery Network' (CDN)?",
            "detail": "CDNs reduce latency by serving content from a location near the user."
          },
          {
            "name": "What is 'Infrastructure as Code' (IaC)?",
            "detail": "IaC allows for consistent and repeatable deployments."
          },
          {
            "name": "What is 'Cloud Storage'?",
            "detail": "Cloud storage is highly scalable and accessible from anywhere."
          },
          {
            "name": "What is 'Edge Computing'?",
            "detail": "Edge computing reduces latency and bandwidth usage."
          },
          {
            "name": "What is 'Serverless Functions'?",
            "detail": "Example: AWS Lambda or Azure Functions."
          },
          {
            "name": "What is an 'Availability Zone' (AZ)?",
            "detail": "AZs help ensure high availability and fault tolerance within a region."
          },
          {
            "name": "What is 'Low Latency'?",
            "detail": "Low latency is critical for gaming and financial applications."
          },
          {
            "name": "What is a 'Cloud Migration'?",
            "detail": "Migration can be a complex and multi-stage process."
          },
          {
            "name": "What is 'Block Storage'?",
            "detail": "Block storage provides high performance for transaction-heavy apps."
          },
          {
            "name": "What is 'Kubernetes'?",
            "detail": "Kubernetes is the standard for container orchestration."
          },
          {
            "name": "What is 'Virtualization' in cloud computing?",
            "detail": "Virtualization is the foundation of cloud computing."
          },
          {
            "name": "What is 'Cloud Monitoring'?",
            "detail": "Example: Amazon CloudWatch or Azure Monitor."
          },
          {
            "name": "What is 'Auto Scaling'?",
            "detail": "Auto scaling ensures performance during peaks and saves money during lulls."
          },
          {
            "name": "What is 'Cloud Native'?",
            "detail": "Cloud-native apps leverage microservices and containers."
          },
          {
            "name": "What is 'Cloud Logging'?",
            "detail": "Logs are essential for troubleshooting and security analysis."
          },
          {
            "name": "What is a 'Region' in cloud computing?",
            "detail": "Regions are geographically isolated areas where cloud resources are hosted."
          },
          {
            "name": "What is 'Serverless Database'?",
            "detail": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
          },
          {
            "name": "What is a 'Virtual Private Cloud' (VPC)?",
            "detail": "VPCs allow users to define their own network topology."
          },
          {
            "name": "What is 'Hybrid IT'?",
            "detail": "Most large enterprises operate in a hybrid IT model."
          },
          {
            "name": "What is 'Object Storage'?",
            "detail": "Object storage is ideal for unstructured data like photos and videos."
          },
          {
            "name": "What is a 'Cloud Gateway'?",
            "detail": "Example: AWS Storage Gateway or Azure ExpressRoute."
          },
          {
            "name": "What is 'DevOps' in the cloud?",
            "detail": "DevOps uses automation and CI/CD pipelines."
          },
          {
            "name": "What is 'Terraform'?",
            "detail": "Terraform is cloud-agnostic and supports many providers."
          },
          {
            "name": "What is 'Microservices'?",
            "detail": "Microservices improve scalability and ease of deployment."
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
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q2",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service (SaaS)",
          "Software as a Service (SaaS)",
          "Storage as a Service (SaaS)",
          "System as a Service (SaaS)"
        ],
        "answer": "Software as a Service (SaaS)",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q3",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable used for connecting networking devices",
          "A specific type of cloud-based service for data storage",
          "A very fast network speed for transmitting large data sets",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency.",
        "topic": "Cloud Concepts"
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
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q5",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A professional manager who oversees a cloud department",
          "A specific type of high-speed network cable for data",
          "A very fast computer processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q6",
        "question": "What is 'Serverless' computing?",
        "options": [
          "Running code without managing server infrastructure",
          "Storing data directly in the user's web browser",
          "Using a cloud with no physical hardware at all",
          "Using a server that never crashes or goes offline"
        ],
        "answer": "Running code without managing server infrastructure",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q7",
        "question": "What is a 'Container'?",
        "options": [
          "A large physical box used for shipping computer servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure and locked room for housing organizational data",
          "A specific type of storage device for saving digital files"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q8",
        "question": "What is 'File Storage'?",
        "options": [
          "A copy of data saved on a standard physical compact disc",
          "A physical filing cabinet used for storing paper documents",
          "A specific type of cloud service for general data storage",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q9",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system for saving organizational data",
          "A private server for an individual organization",
          "A specific type of storage for active data sets",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "az-104-q10",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A standard backup saved on a physical USB drive",
          "A standard government program for disaster relief",
          "Plans and processes to restore IT systems after a major failure",
          "The simple act of fixing a broken personal computer"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q11",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A fast internet connection for home users to browse the web",
          "A system of distributed servers that deliver web content to users",
          "A television station for broadcasting news and information",
          "A type of storage device for local backups of data files"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q12",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual for installing server equipment",
          "A type of cloud billing for managing monthly costs",
          "Managing infrastructure using configuration files and code",
          "Writing computer code on a local developer server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments.",
        "topic": "Technology"
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
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q14",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud-based service that is protected with a password",
          "A hidden data center facility with no public access points",
          "A personal hard drive used for storing digital information",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q15",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A copy of data saved on a standard physical USB drive",
          "A physical hard drive floating in the natural sky",
          "A type of computer memory used for fast processing",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q16",
        "question": "What is 'Edge Computing'?",
        "options": [
          "A fast internet connection used for general home browsing",
          "Building a physical cloud data center on a mountain cliff",
          "Processing data closer to the source of data generation",
          "Using the latest computer hardware for high-speed processing"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q17",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A physical server with spots on its chassis",
          "A specific type of storage for active data sets",
          "A temporary cloud environment for testing apps",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "az-104-q18",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A computer system that does not have any electrical power",
          "A public cloud service that has no active users at all",
          "A website that does not contain any data or information",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q19",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive used for storing sensitive data sets",
          "A large city-wide computer network for the general public",
          "A single server rack located inside a small data center",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region.",
        "topic": "Technology"
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
        "explanation": "Cloud computing converts capital expenses into variable operational expenses.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "az-104-q21",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud service with low capacity",
          "A slow network with many interruptions",
          "A small file size for fast transmission",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q22",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill sent through the standard mail",
          "A specific type of payment for web services",
          "A standard software license for applications",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go).",
        "topic": "Billing & Pricing"
      },
      {
        "id": "az-104-q23",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Buying new computer servers for an internal data center",
          "Moving data and apps from on-premises to the cloud",
          "The act of updating a website with new content and images",
          "The natural process of birds flying south during winter"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process.",
        "topic": "Technology"
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
        "explanation": "Scalability can be vertical (size) or horizontal (number).",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q25",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A free Wi-Fi hotspot available for public use in a city",
          "A generic cloud-based service that is open for everyone to use",
          "A government-owned and operated internal computer network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q26",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer that produces computer components",
          "A standard internet provider for home and business use",
          "A website developer who creates online content and sites"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q27",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A physical building with many different office rooms for rent",
          "Hiring many tenants to manage your data center facility",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q28",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A highly secure database with advanced encryption",
          "A king or monarch ruling over a cloud-based kingdom",
          "A specific type of storage device for local data sets",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-104-q29",
        "question": "What is 'Block Storage'?",
        "options": [
          "A large wall made of physical computer servers in a rack",
          "A secure and locked vault used for storing physical data",
          "A specific type of computer memory for high-speed tasks",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q30",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A collaborative group project for a university course",
          "A framework defining security tasks for provider and customer",
          "Sharing a secure account password with another team member",
          "Splitting the monthly cloud bill between multiple departments"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-104-q31",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A programming language used for creating web applications",
          "A public cloud provider for storing organizational data",
          "A specific type of database optimized for container data",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q32",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset used for playing immersive virtual reality computer games",
          "A computer game designed for teaching general technology concepts",
          "A fake cloud-based service that does not have any real data sets",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q33",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard who monitors the server room",
          "A standard software update for computer apps",
          "Observing the performance and health of cloud resources",
          "The act of watching a cloud in the natural sky"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q34",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A self-adjusting physical scale used for measuring weight",
          "A specific type of cloud billing for managing monthly costs",
          "A standard hardware upgrade for increasing system speed",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q35",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A hardware warranty that covers parts and labor costs",
          "A minor bug in the software application source code",
          "The ability of a system to continue operating even if a component fails",
          "The act of being very patient during a system outage"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q36",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A manual that explains how to use a standard cloud system",
          "A security guard who protects the physical cloud hardware",
          "A sovereign government ruling over a cloud-based kingdom",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-104-q37",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A person who was born in the cloud computing era",
          "A public cloud provider such as AWS or Azure",
          "A specific type of software for managing data",
          "Applications designed specifically for the cloud environment"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q38",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A specific type of storage device for local data backups",
          "Recording events and activities in the cloud for auditing",
          "The act of cutting down trees for timber production",
          "The act of writing a personal diary at the end of the day"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q39",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A physical driver's license used for identification",
          "A security guard who protects the data center building",
          "A standard login page for a website or application",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-104-q40",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A large country-wide computer network for public use",
          "A physical location containing multiple availability zones",
          "A single data center facility located in a remote area",
          "A virtual private cloud connection for an individual"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q41",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database stored on a physical USB flash drive",
          "A database that scales automatically and has no fixed cost",
          "A simple text file stored in a cloud environment",
          "A standard database that is available for everyone"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q42",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A personal server hosted in a private home",
          "A private network section within a public cloud",
          "A secure website with a SSL certificate",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q43",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A fast internet connection for data transfers",
          "A public cloud service for everyone to use",
          "A very tall server rack in a data center",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "az-104-q44",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A fast internet connection for high-speed transfers",
          "A specialized computer that runs on natural gas",
          "A standard computer server for managing data sets",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q45",
        "question": "What is 'Object Storage'?",
        "options": [
          "A simple hierarchical folder stored on a personal computer",
          "A specific type of database optimized for storing metadata",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects in a warehouse or storage facility"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q46",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A high-speed router for local area networks",
          "A physical entrance to a secured data center",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q47",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer who designs data centers",
          "A programming language used for cloud apps",
          "A specific type of cloud for development tasks",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q48",
        "question": "What is 'Terraform'?",
        "options": [
          "A database system for storing user profiles",
          "A planet in the solar system such as Earth",
          "A popular tool for Infrastructure as Code",
          "A public cloud provider for data storage"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers.",
        "topic": "Technology"
      },
      {
        "id": "az-104-q49",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A physical lock placed on a computer server in a rack",
          "A professional security guard working in a data center",
          "A secure and encrypted web browser for accessing the web",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "az-104-q50",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple application for tracking data sets",
          "A type of computer chip for mobile devices",
          "A very small server used for local hosting",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment.",
        "topic": "Technology"
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
        "title": "Billing & Pricing",
        "topics": [
          {
            "name": "What is the primary advantage of cloud computing?",
            "detail": "Cloud computing converts capital expenses into variable operational expenses."
          },
          {
            "name": "What is 'Cloud Billing'?",
            "detail": "Cloud billing is usually based on usage (pay-as-you-go)."
          },
          {
            "name": "What is 'Reserved Instances'?",
            "detail": "Reserved instances can save a lot of money for long-term workloads."
          },
          {
            "name": "What is 'Spot Instances'?",
            "detail": "Spot instances can be interrupted if the provider needs the capacity."
          }
        ]
      },
      {
        "title": "Cloud Concepts",
        "topics": [
          {
            "name": "What is 'Fault Tolerance'?",
            "detail": "Fault tolerance is a higher level of availability."
          },
          {
            "name": "Which cloud model is a combination of public and private clouds?",
            "detail": "Hybrid clouds allow data and apps to be shared between public and private environments."
          },
          {
            "name": "What does 'Scalability' mean in the cloud?",
            "detail": "Scalability can be vertical (size) or horizontal (number)."
          },
          {
            "name": "What is 'SaaS'?",
            "detail": "SaaS delivers software applications over the internet on a subscription basis."
          },
          {
            "name": "What is a 'Private Cloud'?",
            "detail": "Private clouds offer greater control and privacy."
          },
          {
            "name": "What is 'Elasticity'?",
            "detail": "Elasticity is a core feature of cloud computing for cost efficiency."
          },
          {
            "name": "What is 'High Availability' (HA)?",
            "detail": "HA is achieved through redundancy and failover mechanisms."
          },
          {
            "name": "What is a 'Public Cloud'?",
            "detail": "Examples include AWS, Azure, and Google Cloud."
          },
          {
            "name": "What is a 'Cloud Service Provider' (CSP)?",
            "detail": "The 'Big Three' are AWS, Microsoft, and Google."
          },
          {
            "name": "What is 'IaaS'?",
            "detail": "IaaS provides fundamental compute, storage, and networking resources on demand."
          },
          {
            "name": "What is 'PaaS'?",
            "detail": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
          },
          {
            "name": "What is 'Multi-Tenancy'?",
            "detail": "The provider ensures data isolation between tenants."
          }
        ]
      },
      {
        "title": "Security & Compliance",
        "topics": [
          {
            "name": "What is 'Cloud Security'?",
            "detail": "Security is a shared responsibility in the cloud."
          },
          {
            "name": "What is the 'Shared Responsibility Model'?",
            "detail": "The provider secures the cloud; the customer secures what's in the cloud."
          },
          {
            "name": "What is 'Identity and Access Management' (IAM)?",
            "detail": "IAM is a fundamental part of cloud security."
          },
          {
            "name": "What is 'Cloud Governance'?",
            "detail": "Governance ensures compliance and efficiency."
          },
          {
            "name": "What is 'Data Sovereignty'?",
            "detail": "Sovereignty is a major consideration for global cloud deployments."
          }
        ]
      },
      {
        "title": "Technology",
        "topics": [
          {
            "name": "What is 'Terraform'?",
            "detail": "Terraform is cloud-agnostic and supports many providers."
          },
          {
            "name": "What is 'Edge Computing'?",
            "detail": "Edge computing reduces latency and bandwidth usage."
          },
          {
            "name": "What is 'Content Delivery Network' (CDN)?",
            "detail": "CDNs reduce latency by serving content from a location near the user."
          },
          {
            "name": "What is 'Cloud Native'?",
            "detail": "Cloud-native apps leverage microservices and containers."
          },
          {
            "name": "What is 'Cloud Storage'?",
            "detail": "Cloud storage is highly scalable and accessible from anywhere."
          },
          {
            "name": "What is 'Auto Scaling'?",
            "detail": "Auto scaling ensures performance during peaks and saves money during lulls."
          },
          {
            "name": "What is 'Serverless' computing?",
            "detail": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
          },
          {
            "name": "What is 'Microservices'?",
            "detail": "Microservices improve scalability and ease of deployment."
          },
          {
            "name": "What is a 'Virtual Private Cloud' (VPC)?",
            "detail": "VPCs allow users to define their own network topology."
          },
          {
            "name": "What is a 'Container'?",
            "detail": "Docker is a popular container technology."
          },
          {
            "name": "What is 'Disaster Recovery' (DR)?",
            "detail": "DR often involves multi-region backups and replication."
          },
          {
            "name": "What is 'Infrastructure as Code' (IaC)?",
            "detail": "IaC allows for consistent and repeatable deployments."
          },
          {
            "name": "What is 'Kubernetes'?",
            "detail": "Kubernetes is the standard for container orchestration."
          },
          {
            "name": "What is 'Block Storage'?",
            "detail": "Block storage provides high performance for transaction-heavy apps."
          },
          {
            "name": "What is 'File Storage'?",
            "detail": "File storage is common for shared network drives."
          },
          {
            "name": "What is a 'Cloud Gateway'?",
            "detail": "Example: AWS Storage Gateway or Azure ExpressRoute."
          },
          {
            "name": "What is 'Hybrid IT'?",
            "detail": "Most large enterprises operate in a hybrid IT model."
          },
          {
            "name": "What is 'DevOps' in the cloud?",
            "detail": "DevOps uses automation and CI/CD pipelines."
          },
          {
            "name": "What is an 'Availability Zone' (AZ)?",
            "detail": "AZs help ensure high availability and fault tolerance within a region."
          },
          {
            "name": "What is 'Low Latency'?",
            "detail": "Low latency is critical for gaming and financial applications."
          },
          {
            "name": "What is 'Serverless Functions'?",
            "detail": "Example: AWS Lambda or Azure Functions."
          },
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest OSs."
          },
          {
            "name": "What is 'Cloud Monitoring'?",
            "detail": "Example: Amazon CloudWatch or Azure Monitor."
          },
          {
            "name": "What is a 'Cloud Migration'?",
            "detail": "Migration can be a complex and multi-stage process."
          },
          {
            "name": "What is 'Object Storage'?",
            "detail": "Object storage is ideal for unstructured data like photos and videos."
          },
          {
            "name": "What is 'Cloud Logging'?",
            "detail": "Logs are essential for troubleshooting and security analysis."
          },
          {
            "name": "What is a 'Region' in cloud computing?",
            "detail": "Regions are geographically isolated areas where cloud resources are hosted."
          },
          {
            "name": "What is 'Serverless Database'?",
            "detail": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
          },
          {
            "name": "What is 'Virtualization' in cloud computing?",
            "detail": "Virtualization is the foundation of cloud computing."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "gcp-pca-q1",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A hardware warranty that covers parts and labor costs",
          "A minor bug in the software application source code",
          "The ability of a system to continue operating even if a component fails",
          "The act of being very patient during a system outage"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability.",
        "topic": "Cloud Concepts"
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
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q3",
        "question": "What is 'Terraform'?",
        "options": [
          "A database system for storing user profiles",
          "A planet in the solar system such as Earth",
          "A popular tool for Infrastructure as Code",
          "A public cloud provider for data storage"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers.",
        "topic": "Technology"
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
        "explanation": "Scalability can be vertical (size) or horizontal (number).",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q5",
        "question": "What is 'Edge Computing'?",
        "options": [
          "A fast internet connection used for general home browsing",
          "Building a physical cloud data center on a mountain cliff",
          "Processing data closer to the source of data generation",
          "Using the latest computer hardware for high-speed processing"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q6",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service (SaaS)",
          "Software as a Service (SaaS)",
          "Storage as a Service (SaaS)",
          "System as a Service (SaaS)"
        ],
        "answer": "Software as a Service (SaaS)",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q7",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud-based service that is protected with a password",
          "A hidden data center facility with no public access points",
          "A personal hard drive used for storing digital information",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q8",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A fast internet connection for home users to browse the web",
          "A system of distributed servers that deliver web content to users",
          "A television station for broadcasting news and information",
          "A type of storage device for local backups of data files"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q9",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A person who was born in the cloud computing era",
          "A public cloud provider such as AWS or Azure",
          "A specific type of software for managing data",
          "Applications designed specifically for the cloud environment"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q10",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A copy of data saved on a standard physical USB drive",
          "A physical hard drive floating in the natural sky",
          "A type of computer memory used for fast processing",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q11",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A self-adjusting physical scale used for measuring weight",
          "A specific type of cloud billing for managing monthly costs",
          "A standard hardware upgrade for increasing system speed",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q12",
        "question": "What is 'Serverless' computing?",
        "options": [
          "Running code without managing server infrastructure",
          "Storing data directly in the user's web browser",
          "Using a cloud with no physical hardware at all",
          "Using a server that never crashes or goes offline"
        ],
        "answer": "Running code without managing server infrastructure",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q13",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple application for tracking data sets",
          "A type of computer chip for mobile devices",
          "A very small server used for local hosting",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q14",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable used for connecting networking devices",
          "A specific type of cloud-based service for data storage",
          "A very fast network speed for transmitting large data sets",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q15",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A fast internet connection for data transfers",
          "A public cloud service for everyone to use",
          "A very tall server rack in a data center",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q16",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A personal server hosted in a private home",
          "A private network section within a public cloud",
          "A secure website with a SSL certificate",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q17",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A physical lock placed on a computer server in a rack",
          "A professional security guard working in a data center",
          "A secure and encrypted web browser for accessing the web",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "gcp-pca-q18",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A free Wi-Fi hotspot available for public use in a city",
          "A generic cloud-based service that is open for everyone to use",
          "A government-owned and operated internal computer network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q19",
        "question": "What is a 'Container'?",
        "options": [
          "A large physical box used for shipping computer servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure and locked room for housing organizational data",
          "A specific type of storage device for saving digital files"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q20",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A standard backup saved on a physical USB drive",
          "A standard government program for disaster relief",
          "Plans and processes to restore IT systems after a major failure",
          "The simple act of fixing a broken personal computer"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q21",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual for installing server equipment",
          "A type of cloud billing for managing monthly costs",
          "Managing infrastructure using configuration files and code",
          "Writing computer code on a local developer server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q22",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer that produces computer components",
          "A standard internet provider for home and business use",
          "A website developer who creates online content and sites"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google.",
        "topic": "Cloud Concepts"
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
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q24",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A programming language used for creating web applications",
          "A public cloud provider for storing organizational data",
          "A specific type of database optimized for container data",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration.",
        "topic": "Technology"
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
        "explanation": "Cloud computing converts capital expenses into variable operational expenses.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "gcp-pca-q26",
        "question": "What is 'Block Storage'?",
        "options": [
          "A large wall made of physical computer servers in a rack",
          "A secure and locked vault used for storing physical data",
          "A specific type of computer memory for high-speed tasks",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q27",
        "question": "What is 'File Storage'?",
        "options": [
          "A copy of data saved on a standard physical compact disc",
          "A physical filing cabinet used for storing paper documents",
          "A specific type of cloud service for general data storage",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q28",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A collaborative group project for a university course",
          "A framework defining security tasks for provider and customer",
          "Sharing a secure account password with another team member",
          "Splitting the monthly cloud bill between multiple departments"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "gcp-pca-q29",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A physical driver's license used for identification",
          "A security guard who protects the data center building",
          "A standard login page for a website or application",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security.",
        "topic": "Security & Compliance"
      },
      {
        "id": "gcp-pca-q30",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill sent through the standard mail",
          "A specific type of payment for web services",
          "A standard software license for applications",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go).",
        "topic": "Billing & Pricing"
      },
      {
        "id": "gcp-pca-q31",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A manual that explains how to use a standard cloud system",
          "A security guard who protects the physical cloud hardware",
          "A sovereign government ruling over a cloud-based kingdom",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency.",
        "topic": "Security & Compliance"
      },
      {
        "id": "gcp-pca-q32",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system for saving organizational data",
          "A private server for an individual organization",
          "A specific type of storage for active data sets",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "gcp-pca-q33",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A high-speed router for local area networks",
          "A physical entrance to a secured data center",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q34",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A fast internet connection for high-speed transfers",
          "A specialized computer that runs on natural gas",
          "A standard computer server for managing data sets",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q35",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer who designs data centers",
          "A programming language used for cloud apps",
          "A specific type of cloud for development tasks",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q36",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive used for storing sensitive data sets",
          "A large city-wide computer network for the general public",
          "A single server rack located inside a small data center",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q37",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A highly secure database with advanced encryption",
          "A king or monarch ruling over a cloud-based kingdom",
          "A specific type of storage device for local data sets",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments.",
        "topic": "Security & Compliance"
      },
      {
        "id": "gcp-pca-q38",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud service with low capacity",
          "A slow network with many interruptions",
          "A small file size for fast transmission",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q39",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A computer system that does not have any electrical power",
          "A public cloud service that has no active users at all",
          "A website that does not contain any data or information",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q40",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A professional manager who oversees a cloud department",
          "A specific type of high-speed network cable for data",
          "A very fast computer processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q41",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard who monitors the server room",
          "A standard software update for computer apps",
          "Observing the performance and health of cloud resources",
          "The act of watching a cloud in the natural sky"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q42",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Buying new computer servers for an internal data center",
          "Moving data and apps from on-premises to the cloud",
          "The act of updating a website with new content and images",
          "The natural process of birds flying south during winter"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q43",
        "question": "What is 'Object Storage'?",
        "options": [
          "A simple hierarchical folder stored on a personal computer",
          "A specific type of database optimized for storing metadata",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects in a warehouse or storage facility"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q44",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A specific type of storage device for local data backups",
          "Recording events and activities in the cloud for auditing",
          "The act of cutting down trees for timber production",
          "The act of writing a personal diary at the end of the day"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q45",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A large country-wide computer network for public use",
          "A physical location containing multiple availability zones",
          "A single data center facility located in a remote area",
          "A virtual private cloud connection for an individual"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q46",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database stored on a physical USB flash drive",
          "A database that scales automatically and has no fixed cost",
          "A simple text file stored in a cloud environment",
          "A standard database that is available for everyone"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore.",
        "topic": "Technology"
      },
      {
        "id": "gcp-pca-q47",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset used for playing immersive virtual reality computer games",
          "A computer game designed for teaching general technology concepts",
          "A fake cloud-based service that does not have any real data sets",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing.",
        "topic": "Technology"
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
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q49",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A physical building with many different office rooms for rent",
          "Hiring many tenants to manage your data center facility",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "gcp-pca-q50",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A physical server with spots on its chassis",
          "A specific type of storage for active data sets",
          "A temporary cloud environment for testing apps",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity.",
        "topic": "Billing & Pricing"
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
        "title": "Billing & Pricing",
        "topics": [
          {
            "name": "What is 'Spot Instances'?",
            "detail": "Spot instances can be interrupted if the provider needs the capacity."
          },
          {
            "name": "What is the primary advantage of cloud computing?",
            "detail": "Cloud computing converts capital expenses into variable operational expenses."
          },
          {
            "name": "What is 'Reserved Instances'?",
            "detail": "Reserved instances can save a lot of money for long-term workloads."
          },
          {
            "name": "What is 'Cloud Billing'?",
            "detail": "Cloud billing is usually based on usage (pay-as-you-go)."
          }
        ]
      },
      {
        "title": "Cloud Concepts",
        "topics": [
          {
            "name": "What is 'PaaS'?",
            "detail": "PaaS provides a framework for developers to build and run applications without managing infrastructure."
          },
          {
            "name": "What is 'Elasticity'?",
            "detail": "Elasticity is a core feature of cloud computing for cost efficiency."
          },
          {
            "name": "What is a 'Cloud Service Provider' (CSP)?",
            "detail": "The 'Big Three' are AWS, Microsoft, and Google."
          },
          {
            "name": "What is 'SaaS'?",
            "detail": "SaaS delivers software applications over the internet on a subscription basis."
          },
          {
            "name": "What is 'IaaS'?",
            "detail": "IaaS provides fundamental compute, storage, and networking resources on demand."
          },
          {
            "name": "What is a 'Private Cloud'?",
            "detail": "Private clouds offer greater control and privacy."
          },
          {
            "name": "What is 'High Availability' (HA)?",
            "detail": "HA is achieved through redundancy and failover mechanisms."
          },
          {
            "name": "What is 'Multi-Tenancy'?",
            "detail": "The provider ensures data isolation between tenants."
          },
          {
            "name": "What is 'Fault Tolerance'?",
            "detail": "Fault tolerance is a higher level of availability."
          },
          {
            "name": "Which cloud model is a combination of public and private clouds?",
            "detail": "Hybrid clouds allow data and apps to be shared between public and private environments."
          },
          {
            "name": "What does 'Scalability' mean in the cloud?",
            "detail": "Scalability can be vertical (size) or horizontal (number)."
          },
          {
            "name": "What is a 'Public Cloud'?",
            "detail": "Examples include AWS, Azure, and Google Cloud."
          }
        ]
      },
      {
        "title": "Security & Compliance",
        "topics": [
          {
            "name": "What is 'Cloud Governance'?",
            "detail": "Governance ensures compliance and efficiency."
          },
          {
            "name": "What is the 'Shared Responsibility Model'?",
            "detail": "The provider secures the cloud; the customer secures what's in the cloud."
          },
          {
            "name": "What is 'Identity and Access Management' (IAM)?",
            "detail": "IAM is a fundamental part of cloud security."
          },
          {
            "name": "What is 'Cloud Security'?",
            "detail": "Security is a shared responsibility in the cloud."
          },
          {
            "name": "What is 'Data Sovereignty'?",
            "detail": "Sovereignty is a major consideration for global cloud deployments."
          }
        ]
      },
      {
        "title": "Technology",
        "topics": [
          {
            "name": "What is 'Terraform'?",
            "detail": "Terraform is cloud-agnostic and supports many providers."
          },
          {
            "name": "What is 'Cloud Native'?",
            "detail": "Cloud-native apps leverage microservices and containers."
          },
          {
            "name": "What is 'Cloud Storage'?",
            "detail": "Cloud storage is highly scalable and accessible from anywhere."
          },
          {
            "name": "What is 'Hybrid IT'?",
            "detail": "Most large enterprises operate in a hybrid IT model."
          },
          {
            "name": "What is 'File Storage'?",
            "detail": "File storage is common for shared network drives."
          },
          {
            "name": "What is 'Cloud Logging'?",
            "detail": "Logs are essential for troubleshooting and security analysis."
          },
          {
            "name": "What is 'Disaster Recovery' (DR)?",
            "detail": "DR often involves multi-region backups and replication."
          },
          {
            "name": "What is a 'Cloud Gateway'?",
            "detail": "Example: AWS Storage Gateway or Azure ExpressRoute."
          },
          {
            "name": "What is 'Serverless Functions'?",
            "detail": "Example: AWS Lambda or Azure Functions."
          },
          {
            "name": "What is 'Content Delivery Network' (CDN)?",
            "detail": "CDNs reduce latency by serving content from a location near the user."
          },
          {
            "name": "What is 'Kubernetes'?",
            "detail": "Kubernetes is the standard for container orchestration."
          },
          {
            "name": "What is 'Serverless Database'?",
            "detail": "Example: Amazon Aurora Serverless or Google Cloud Firestore."
          },
          {
            "name": "What is 'Infrastructure as Code' (IaC)?",
            "detail": "IaC allows for consistent and repeatable deployments."
          },
          {
            "name": "What is 'Microservices'?",
            "detail": "Microservices improve scalability and ease of deployment."
          },
          {
            "name": "What is 'Serverless' computing?",
            "detail": "Cloud providers manage the server infrastructure and automatically scale based on code execution."
          },
          {
            "name": "What is a 'Cloud Migration'?",
            "detail": "Migration can be a complex and multi-stage process."
          },
          {
            "name": "What is 'DevOps' in the cloud?",
            "detail": "DevOps uses automation and CI/CD pipelines."
          },
          {
            "name": "What is 'Auto Scaling'?",
            "detail": "Auto scaling ensures performance during peaks and saves money during lulls."
          },
          {
            "name": "What is a 'Container'?",
            "detail": "Docker is a popular container technology."
          },
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest OSs."
          },
          {
            "name": "What is 'Object Storage'?",
            "detail": "Object storage is ideal for unstructured data like photos and videos."
          },
          {
            "name": "What is a 'Virtual Private Cloud' (VPC)?",
            "detail": "VPCs allow users to define their own network topology."
          },
          {
            "name": "What is 'Block Storage'?",
            "detail": "Block storage provides high performance for transaction-heavy apps."
          },
          {
            "name": "What is 'Virtualization' in cloud computing?",
            "detail": "Virtualization is the foundation of cloud computing."
          },
          {
            "name": "What is an 'Availability Zone' (AZ)?",
            "detail": "AZs help ensure high availability and fault tolerance within a region."
          },
          {
            "name": "What is a 'Region' in cloud computing?",
            "detail": "Regions are geographically isolated areas where cloud resources are hosted."
          },
          {
            "name": "What is 'Edge Computing'?",
            "detail": "Edge computing reduces latency and bandwidth usage."
          },
          {
            "name": "What is 'Cloud Monitoring'?",
            "detail": "Example: Amazon CloudWatch or Azure Monitor."
          },
          {
            "name": "What is 'Low Latency'?",
            "detail": "Low latency is critical for gaming and financial applications."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "oci-found-q1",
        "question": "What is 'Terraform'?",
        "options": [
          "A database system for storing user profiles",
          "A planet in the solar system such as Earth",
          "A popular tool for Infrastructure as Code",
          "A public cloud provider for data storage"
        ],
        "answer": "A popular tool for Infrastructure as Code",
        "category": "Domain Review",
        "explanation": "Terraform is cloud-agnostic and supports many providers.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q2",
        "question": "What is 'Cloud Native'?",
        "options": [
          "A person who was born in the cloud computing era",
          "A public cloud provider such as AWS or Azure",
          "A specific type of software for managing data",
          "Applications designed specifically for the cloud environment"
        ],
        "answer": "Applications designed specifically for the cloud environment",
        "category": "Domain Review",
        "explanation": "Cloud-native apps leverage microservices and containers.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q3",
        "question": "What is 'Cloud Storage'?",
        "options": [
          "A copy of data saved on a standard physical USB drive",
          "A physical hard drive floating in the natural sky",
          "A type of computer memory used for fast processing",
          "Storing data on remote servers accessed via the internet"
        ],
        "answer": "Storing data on remote servers accessed via the internet",
        "category": "Domain Review",
        "explanation": "Cloud storage is highly scalable and accessible from anywhere.",
        "topic": "Technology"
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
        "explanation": "PaaS provides a framework for developers to build and run applications without managing infrastructure.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q5",
        "question": "What is 'Hybrid IT'?",
        "options": [
          "A fast internet connection for high-speed transfers",
          "A specialized computer that runs on natural gas",
          "A standard computer server for managing data sets",
          "Combining on-premises infrastructure with cloud services"
        ],
        "answer": "Combining on-premises infrastructure with cloud services",
        "category": "Domain Review",
        "explanation": "Most large enterprises operate in a hybrid IT model.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q6",
        "question": "What is 'File Storage'?",
        "options": [
          "A copy of data saved on a standard physical compact disc",
          "A physical filing cabinet used for storing paper documents",
          "A specific type of cloud service for general data storage",
          "Data stored in a hierarchical folder structure"
        ],
        "answer": "Data stored in a hierarchical folder structure",
        "category": "Domain Review",
        "explanation": "File storage is common for shared network drives.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q7",
        "question": "What is 'Cloud Logging'?",
        "options": [
          "A specific type of storage device for local data backups",
          "Recording events and activities in the cloud for auditing",
          "The act of cutting down trees for timber production",
          "The act of writing a personal diary at the end of the day"
        ],
        "answer": "Recording events and activities in the cloud for auditing",
        "category": "Domain Review",
        "explanation": "Logs are essential for troubleshooting and security analysis.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q8",
        "question": "What is 'Cloud Governance'?",
        "options": [
          "A manual that explains how to use a standard cloud system",
          "A security guard who protects the physical cloud hardware",
          "A sovereign government ruling over a cloud-based kingdom",
          "Policies and procedures to manage cloud resources and costs"
        ],
        "answer": "Policies and procedures to manage cloud resources and costs",
        "category": "Domain Review",
        "explanation": "Governance ensures compliance and efficiency.",
        "topic": "Security & Compliance"
      },
      {
        "id": "oci-found-q9",
        "question": "What is 'Disaster Recovery' (DR)?",
        "options": [
          "A standard backup saved on a physical USB drive",
          "A standard government program for disaster relief",
          "Plans and processes to restore IT systems after a major failure",
          "The simple act of fixing a broken personal computer"
        ],
        "answer": "Plans and processes to restore IT systems after a major failure",
        "category": "Domain Review",
        "explanation": "DR often involves multi-region backups and replication.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q10",
        "question": "What is 'Elasticity'?",
        "options": [
          "A flexible cable used for connecting networking devices",
          "A specific type of cloud-based service for data storage",
          "A very fast network speed for transmitting large data sets",
          "The ability to automatically scale resources based on demand"
        ],
        "answer": "The ability to automatically scale resources based on demand",
        "category": "Domain Review",
        "explanation": "Elasticity is a core feature of cloud computing for cost efficiency.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q11",
        "question": "What is a 'Cloud Service Provider' (CSP)?",
        "options": [
          "A company that offers cloud computing services",
          "A hardware manufacturer that produces computer components",
          "A standard internet provider for home and business use",
          "A website developer who creates online content and sites"
        ],
        "answer": "A company that offers cloud computing services",
        "category": "Domain Review",
        "explanation": "The 'Big Three' are AWS, Microsoft, and Google.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q12",
        "question": "What is a 'Cloud Gateway'?",
        "options": [
          "A bridge between on-premises and cloud networks",
          "A high-speed router for local area networks",
          "A physical entrance to a secured data center",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A bridge between on-premises and cloud networks",
        "category": "Domain Review",
        "explanation": "Example: AWS Storage Gateway or Azure ExpressRoute.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q13",
        "question": "What is 'Serverless Functions'?",
        "options": [
          "A computer system that does not have any electrical power",
          "A public cloud service that has no active users at all",
          "A website that does not contain any data or information",
          "Running small snippets of code in response to events"
        ],
        "answer": "Running small snippets of code in response to events",
        "category": "Domain Review",
        "explanation": "Example: AWS Lambda or Azure Functions.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q14",
        "question": "What is 'Content Delivery Network' (CDN)?",
        "options": [
          "A fast internet connection for home users to browse the web",
          "A system of distributed servers that deliver web content to users",
          "A television station for broadcasting news and information",
          "A type of storage device for local backups of data files"
        ],
        "answer": "A system of distributed servers that deliver web content to users",
        "category": "Domain Review",
        "explanation": "CDNs reduce latency by serving content from a location near the user.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q15",
        "question": "What is 'Kubernetes'?",
        "options": [
          "A programming language used for creating web applications",
          "A public cloud provider for storing organizational data",
          "A specific type of database optimized for container data",
          "An open-source system for automating deployment and management of containers"
        ],
        "answer": "An open-source system for automating deployment and management of containers",
        "category": "Domain Review",
        "explanation": "Kubernetes is the standard for container orchestration.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q16",
        "question": "What is 'Serverless Database'?",
        "options": [
          "A database stored on a physical USB flash drive",
          "A database that scales automatically and has no fixed cost",
          "A simple text file stored in a cloud environment",
          "A standard database that is available for everyone"
        ],
        "answer": "A database that scales automatically and has no fixed cost",
        "category": "Domain Review",
        "explanation": "Example: Amazon Aurora Serverless or Google Cloud Firestore.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q17",
        "question": "What is 'Spot Instances'?",
        "options": [
          "A physical server with spots on its chassis",
          "A specific type of storage for active data sets",
          "A temporary cloud environment for testing apps",
          "Using spare cloud capacity at a large discount"
        ],
        "answer": "Using spare cloud capacity at a large discount",
        "category": "Domain Review",
        "explanation": "Spot instances can be interrupted if the provider needs the capacity.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "oci-found-q18",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": [
          "A hardware manual for installing server equipment",
          "A type of cloud billing for managing monthly costs",
          "Managing infrastructure using configuration files and code",
          "Writing computer code on a local developer server"
        ],
        "answer": "Managing infrastructure using configuration files and code",
        "category": "Domain Review",
        "explanation": "IaC allows for consistent and repeatable deployments.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q19",
        "question": "What is 'SaaS'?",
        "options": [
          "Security as a Service (SaaS)",
          "Software as a Service (SaaS)",
          "Storage as a Service (SaaS)",
          "System as a Service (SaaS)"
        ],
        "answer": "Software as a Service (SaaS)",
        "category": "Domain Review",
        "explanation": "SaaS delivers software applications over the internet on a subscription basis.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q20",
        "question": "What is 'Microservices'?",
        "options": [
          "A simple application for tracking data sets",
          "A type of computer chip for mobile devices",
          "A very small server used for local hosting",
          "Breaking an app into small, independent services"
        ],
        "answer": "Breaking an app into small, independent services",
        "category": "Domain Review",
        "explanation": "Microservices improve scalability and ease of deployment.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q21",
        "question": "What is 'Serverless' computing?",
        "options": [
          "Running code without managing server infrastructure",
          "Storing data directly in the user's web browser",
          "Using a cloud with no physical hardware at all",
          "Using a server that never crashes or goes offline"
        ],
        "answer": "Running code without managing server infrastructure",
        "category": "Domain Review",
        "explanation": "Cloud providers manage the server infrastructure and automatically scale based on code execution.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q22",
        "question": "What is a 'Cloud Migration'?",
        "options": [
          "Buying new computer servers for an internal data center",
          "Moving data and apps from on-premises to the cloud",
          "The act of updating a website with new content and images",
          "The natural process of birds flying south during winter"
        ],
        "answer": "Moving data and apps from on-premises to the cloud",
        "category": "Domain Review",
        "explanation": "Migration can be a complex and multi-stage process.",
        "topic": "Technology"
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
        "explanation": "Cloud computing converts capital expenses into variable operational expenses.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "oci-found-q24",
        "question": "What is 'DevOps' in the cloud?",
        "options": [
          "A hardware engineer who designs data centers",
          "A programming language used for cloud apps",
          "A specific type of cloud for development tasks",
          "Combining development and operations to improve speed and quality"
        ],
        "answer": "Combining development and operations to improve speed and quality",
        "category": "Domain Review",
        "explanation": "DevOps uses automation and CI/CD pipelines.",
        "topic": "Technology"
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
        "explanation": "IaaS provides fundamental compute, storage, and networking resources on demand.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q26",
        "question": "What is a 'Private Cloud'?",
        "options": [
          "A cloud-based service that is protected with a password",
          "A hidden data center facility with no public access points",
          "A personal hard drive used for storing digital information",
          "Cloud resources used exclusively by one organization"
        ],
        "answer": "Cloud resources used exclusively by one organization",
        "category": "Domain Review",
        "explanation": "Private clouds offer greater control and privacy.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q27",
        "question": "What is 'Reserved Instances'?",
        "options": [
          "A backup system for saving organizational data",
          "A private server for an individual organization",
          "A specific type of storage for active data sets",
          "Pre-paying for cloud capacity at a discounted rate"
        ],
        "answer": "Pre-paying for cloud capacity at a discounted rate",
        "category": "Domain Review",
        "explanation": "Reserved instances can save a lot of money for long-term workloads.",
        "topic": "Billing & Pricing"
      },
      {
        "id": "oci-found-q28",
        "question": "What is 'Auto Scaling'?",
        "options": [
          "A self-adjusting physical scale used for measuring weight",
          "A specific type of cloud billing for managing monthly costs",
          "A standard hardware upgrade for increasing system speed",
          "Automatically adding or removing instances based on load"
        ],
        "answer": "Automatically adding or removing instances based on load",
        "category": "Domain Review",
        "explanation": "Auto scaling ensures performance during peaks and saves money during lulls.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q29",
        "question": "What is the 'Shared Responsibility Model'?",
        "options": [
          "A collaborative group project for a university course",
          "A framework defining security tasks for provider and customer",
          "Sharing a secure account password with another team member",
          "Splitting the monthly cloud bill between multiple departments"
        ],
        "answer": "A framework defining security tasks for provider and customer",
        "category": "Domain Review",
        "explanation": "The provider secures the cloud; the customer secures what's in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "oci-found-q30",
        "question": "What is a 'Container'?",
        "options": [
          "A large physical box used for shipping computer servers",
          "A lightweight, portable unit containing an app and its dependencies",
          "A secure and locked room for housing organizational data",
          "A specific type of storage device for saving digital files"
        ],
        "answer": "A lightweight, portable unit containing an app and its dependencies",
        "category": "Domain Review",
        "explanation": "Docker is a popular container technology.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q31",
        "question": "What is 'High Availability' (HA)?",
        "options": [
          "A fast internet connection for data transfers",
          "A public cloud service for everyone to use",
          "A very tall server rack in a data center",
          "Systems that are durable and likely to operate continuously"
        ],
        "answer": "Systems that are durable and likely to operate continuously",
        "category": "Domain Review",
        "explanation": "HA is achieved through redundancy and failover mechanisms.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q32",
        "question": "What is 'Identity and Access Management' (IAM)?",
        "options": [
          "A physical driver's license used for identification",
          "A security guard who protects the data center building",
          "A standard login page for a website or application",
          "Managing users and their permissions to access cloud resources"
        ],
        "answer": "Managing users and their permissions to access cloud resources",
        "category": "Domain Review",
        "explanation": "IAM is a fundamental part of cloud security.",
        "topic": "Security & Compliance"
      },
      {
        "id": "oci-found-q33",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A professional manager who oversees a cloud department",
          "A specific type of high-speed network cable for data",
          "A very fast computer processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest OSs.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q34",
        "question": "What is 'Multi-Tenancy'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A physical building with many different office rooms for rent",
          "Hiring many tenants to manage your data center facility",
          "Multiple customers sharing the same physical hardware"
        ],
        "answer": "Multiple customers sharing the same physical hardware",
        "category": "Domain Review",
        "explanation": "The provider ensures data isolation between tenants.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q35",
        "question": "What is 'Object Storage'?",
        "options": [
          "A simple hierarchical folder stored on a personal computer",
          "A specific type of database optimized for storing metadata",
          "Data stored as objects with metadata and a unique identifier",
          "Storing physical objects in a warehouse or storage facility"
        ],
        "answer": "Data stored as objects with metadata and a unique identifier",
        "category": "Domain Review",
        "explanation": "Object storage is ideal for unstructured data like photos and videos.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q36",
        "question": "What is 'Fault Tolerance'?",
        "options": [
          "A hardware warranty that covers parts and labor costs",
          "A minor bug in the software application source code",
          "The ability of a system to continue operating even if a component fails",
          "The act of being very patient during a system outage"
        ],
        "answer": "The ability of a system to continue operating even if a component fails",
        "category": "Domain Review",
        "explanation": "Fault tolerance is a higher level of availability.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q37",
        "question": "What is a 'Virtual Private Cloud' (VPC)?",
        "options": [
          "A personal server hosted in a private home",
          "A private network section within a public cloud",
          "A secure website with a SSL certificate",
          "A virtual private network connection (VPN)"
        ],
        "answer": "A private network section within a public cloud",
        "category": "Domain Review",
        "explanation": "VPCs allow users to define their own network topology.",
        "topic": "Technology"
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
        "explanation": "Hybrid clouds allow data and apps to be shared between public and private environments.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q39",
        "question": "What is 'Block Storage'?",
        "options": [
          "A large wall made of physical computer servers in a rack",
          "A secure and locked vault used for storing physical data",
          "A specific type of computer memory for high-speed tasks",
          "Data stored in fixed-size blocks, usually for database use"
        ],
        "answer": "Data stored in fixed-size blocks, usually for database use",
        "category": "Domain Review",
        "explanation": "Block storage provides high performance for transaction-heavy apps.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q40",
        "question": "What is 'Cloud Security'?",
        "options": [
          "A physical lock placed on a computer server in a rack",
          "A professional security guard working in a data center",
          "A secure and encrypted web browser for accessing the web",
          "The set of technologies and policies to protect cloud data and apps"
        ],
        "answer": "The set of technologies and policies to protect cloud data and apps",
        "category": "Domain Review",
        "explanation": "Security is a shared responsibility in the cloud.",
        "topic": "Security & Compliance"
      },
      {
        "id": "oci-found-q41",
        "question": "What is 'Virtualization' in cloud computing?",
        "options": [
          "A VR headset used for playing immersive virtual reality computer games",
          "A computer game designed for teaching general technology concepts",
          "A fake cloud-based service that does not have any real data sets",
          "Technology that allows creating multiple simulated environments from one physical system"
        ],
        "answer": "Technology that allows creating multiple simulated environments from one physical system",
        "category": "Domain Review",
        "explanation": "Virtualization is the foundation of cloud computing.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q42",
        "question": "What is an 'Availability Zone' (AZ)?",
        "options": [
          "A backup hard drive used for storing sensitive data sets",
          "A large city-wide computer network for the general public",
          "A single server rack located inside a small data center",
          "One or more discrete data centers with redundant power"
        ],
        "answer": "One or more discrete data centers with redundant power",
        "category": "Domain Review",
        "explanation": "AZs help ensure high availability and fault tolerance within a region.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q43",
        "question": "What is a 'Region' in cloud computing?",
        "options": [
          "A large country-wide computer network for public use",
          "A physical location containing multiple availability zones",
          "A single data center facility located in a remote area",
          "A virtual private cloud connection for an individual"
        ],
        "answer": "A physical location containing multiple availability zones",
        "category": "Domain Review",
        "explanation": "Regions are geographically isolated areas where cloud resources are hosted.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q44",
        "question": "What is 'Edge Computing'?",
        "options": [
          "A fast internet connection used for general home browsing",
          "Building a physical cloud data center on a mountain cliff",
          "Processing data closer to the source of data generation",
          "Using the latest computer hardware for high-speed processing"
        ],
        "answer": "Processing data closer to the source of data generation",
        "category": "Domain Review",
        "explanation": "Edge computing reduces latency and bandwidth usage.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q45",
        "question": "What is 'Cloud Monitoring'?",
        "options": [
          "A security guard who monitors the server room",
          "A standard software update for computer apps",
          "Observing the performance and health of cloud resources",
          "The act of watching a cloud in the natural sky"
        ],
        "answer": "Observing the performance and health of cloud resources",
        "category": "Domain Review",
        "explanation": "Example: Amazon CloudWatch or Azure Monitor.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q46",
        "question": "What is 'Data Sovereignty'?",
        "options": [
          "A highly secure database with advanced encryption",
          "A king or monarch ruling over a cloud-based kingdom",
          "A specific type of storage device for local data sets",
          "Ensuring data is subject to the laws of the country where it's stored"
        ],
        "answer": "Ensuring data is subject to the laws of the country where it's stored",
        "category": "Domain Review",
        "explanation": "Sovereignty is a major consideration for global cloud deployments.",
        "topic": "Security & Compliance"
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
        "explanation": "Scalability can be vertical (size) or horizontal (number).",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q48",
        "question": "What is 'Low Latency'?",
        "options": [
          "A cheap cloud service with low capacity",
          "A slow network with many interruptions",
          "A small file size for fast transmission",
          "Minimal delay in data transmission"
        ],
        "answer": "Minimal delay in data transmission",
        "category": "Domain Review",
        "explanation": "Low latency is critical for gaming and financial applications.",
        "topic": "Technology"
      },
      {
        "id": "oci-found-q49",
        "question": "What is a 'Public Cloud'?",
        "options": [
          "A free Wi-Fi hotspot available for public use in a city",
          "A generic cloud-based service that is open for everyone to use",
          "A government-owned and operated internal computer network",
          "Services offered by third-party providers over the public internet"
        ],
        "answer": "Services offered by third-party providers over the public internet",
        "category": "Domain Review",
        "explanation": "Examples include AWS, Azure, and Google Cloud.",
        "topic": "Cloud Concepts"
      },
      {
        "id": "oci-found-q50",
        "question": "What is 'Cloud Billing'?",
        "options": [
          "A paper bill sent through the standard mail",
          "A specific type of payment for web services",
          "A standard software license for applications",
          "How cloud providers charge for their services"
        ],
        "answer": "How cloud providers charge for their services",
        "category": "Domain Review",
        "explanation": "Cloud billing is usually based on usage (pay-as-you-go).",
        "topic": "Billing & Pricing"
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
        "title": "Business Environment",
        "topics": [
          {
            "name": "What is 'Portfolio Management'?",
            "detail": "Portfolio management focuses on selecting the right work."
          },
          {
            "name": "What is 'Program Management'?",
            "detail": "Programs deliver more value together than as separate projects."
          },
          {
            "name": "What is 'Project Governance'?",
            "detail": "Governance ensures the project aligns with organizational goals."
          },
          {
            "name": "What is a 'PMO' (Project Management Office)?",
            "detail": "PMOs provide standards, templates, and support."
          }
        ]
      },
      {
        "title": "People",
        "topics": [
          {
            "name": "What is 'Resource Management'?",
            "detail": "It ensures resources are available when needed."
          },
          {
            "name": "What is a 'Stakeholder Registry'?",
            "detail": "It helps in planning stakeholder engagement."
          },
          {
            "name": "Who are 'Stakeholders'?",
            "detail": "Stakeholders include the team, customers, sponsors, and more."
          },
          {
            "name": "What is the role of the 'Scrum Master'?",
            "detail": "The Scrum Master helps the team follow Scrum values and removes blockers."
          },
          {
            "name": "What is a 'Daily Stand-up'?",
            "detail": "Stand-ups are key to Agile sync and identifying blockers early."
          }
        ]
      },
      {
        "title": "Process",
        "topics": [
          {
            "name": "What is an 'Epic'?",
            "detail": "Epics often span multiple sprints."
          },
          {
            "name": "What is a 'SOW' (Statement of Work)?",
            "detail": "SOW defines the scope, schedule, and deliverables for a vendor."
          },
          {
            "name": "What is a 'Lessons Learned' session?",
            "detail": "Lessons learned improve future project performance."
          },
          {
            "name": "What is a 'Sprint Retrospective'?",
            "detail": "The team identifies improvements for the next sprint."
          },
          {
            "name": "What is a 'Critical Success Factor' (CSF)?",
            "detail": "CSFs are key areas of focus for the project manager."
          },
          {
            "name": "What is 'Project Scope'?",
            "detail": "Defining scope is essential to prevent uncontrolled changes."
          },
          {
            "name": "What is 'Cost Baseline'?",
            "detail": "The baseline includes all authorized expenses."
          },
          {
            "name": "What is 'Sprint Planning'?",
            "detail": "The team selects items from the product backlog."
          },
          {
            "name": "What is 'Backlog Grooming' (or Refinement)?",
            "detail": "Grooming ensures the backlog is ready for planning."
          },
          {
            "name": "What is a 'WBS' (Work Breakdown Structure)?",
            "detail": "WBS breaks a project down into manageable parts."
          },
          {
            "name": "What is 'Planning Poker'?",
            "detail": "Teams use cards to estimate story points anonymously."
          },
          {
            "name": "What is 'Lean' project management?",
            "detail": "Lean originated in manufacturing and is widely used in IT."
          },
          {
            "name": "What is 'Waterfall' methodology?",
            "detail": "Work flows through distinct phases like requirements, design, and testing."
          },
          {
            "name": "What does 'Scope Creep' mean?",
            "detail": "Scope creep occurs when new features are added without adjusting time or budget."
          },
          {
            "name": "What is a 'Sprint' in Scrum?",
            "detail": "Work is completed and made ready for review within a sprint."
          },
          {
            "name": "What is 'Velocity' in Agile?",
            "detail": "Velocity helps in planning future sprints."
          },
          {
            "name": "What is 'Quality Control' (QC)?",
            "detail": "QC is focused on the deliverables themselves."
          },
          {
            "name": "What is 'Earned Value Management' (EVM)?",
            "detail": "EVM integrates scope, schedule, and cost metrics."
          },
          {
            "name": "What is a 'Story Point'?",
            "detail": "Story points account for complexity, effort, and risk."
          },
          {
            "name": "What is a 'User Story'?",
            "detail": "User stories help teams understand user needs."
          },
          {
            "name": "What is a 'Milestone'?",
            "detail": "Milestones help track progress towards major goals."
          },
          {
            "name": "What is 'Scrum'?",
            "detail": "Scrum uses roles, events, and artifacts to manage complex work."
          },
          {
            "name": "What is 'Change Management'?",
            "detail": "It ensures changes are properly reviewed and approved."
          },
          {
            "name": "What is a 'Product Backlog'?",
            "detail": "The backlog is constantly evolving and managed by the Product Owner."
          },
          {
            "name": "What is 'Six Sigma'?",
            "detail": "Six Sigma focuses on reducing defects and variability."
          },
          {
            "name": "What is the 'MVP' in product development?",
            "detail": "An MVP has just enough features to satisfy early customers and provide feedback."
          },
          {
            "name": "What is 'Kanban'?",
            "detail": "Kanban helps visualize workflow and limit work-in-progress."
          },
          {
            "name": "What is 'Iterative Development'?",
            "detail": "Each iteration improves the product based on feedback."
          },
          {
            "name": "What is a 'Gantt Chart'?",
            "detail": "Gantt charts show tasks over time and their dependencies."
          },
          {
            "name": "What is 'Risk Management'?",
            "detail": "Management involves mitigation, transfer, acceptance, or avoidance."
          },
          {
            "name": "What is 'Agile Manifesto'?",
            "detail": "The manifesto was created by 17 software developers in 2001."
          },
          {
            "name": "What is 'Procurement Management'?",
            "detail": "It involves contracts, vendors, and purchasing."
          },
          {
            "name": "What is a 'Project Charter'?",
            "detail": "The charter gives the project manager authority to use resources."
          },
          {
            "name": "What is 'Project Budget'?",
            "detail": "Managing the budget is a key responsibility of the project manager."
          },
          {
            "name": "What is 'PRINCE2'?",
            "detail": "PRINCE2 stands for Projects IN Controlled Environments."
          },
          {
            "name": "What is 'Quality Assurance' (QA)?",
            "detail": "QA is focused on the process used to create the deliverables."
          },
          {
            "name": "What is a 'Burndown Chart'?",
            "detail": "Burndown charts help teams track their progress during a sprint."
          },
          {
            "name": "What is a 'Sprint Review'?",
            "detail": "The team gets feedback from stakeholders."
          },
          {
            "name": "What does 'KPI' stand for?",
            "detail": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
          },
          {
            "name": "What is 'Incremental Delivery'?",
            "detail": "Incremental delivery allows for early feedback and value."
          },
          {
            "name": "What is a 'Feature' in project management?",
            "detail": "Features are often broken down into user stories."
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
          "A software manual that describes the entire system architecture",
          "A type of movie with a long duration and a very large budget",
          "A very long poem that tells a story of heroic deeds and events"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints.",
        "topic": "Process"
      },
      {
        "id": "capm-q2",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report detailing the project expenditures",
          "A list of team members and their contact information",
          "A specific type of pig found on a residential farm"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor.",
        "topic": "Process"
      },
      {
        "id": "capm-q3",
        "question": "What is a 'Lessons Learned' session?",
        "options": [
          "A classroom lecture given by a senior project manager",
          "A meeting to discuss what went well and what didn't in a project",
          "A standard software update for project management apps",
          "A type of test designed to evaluate project knowledge"
        ],
        "answer": "A meeting to discuss what went well and what didn't in a project",
        "category": "Domain Review",
        "explanation": "Lessons learned improve future project performance.",
        "topic": "Process"
      },
      {
        "id": "capm-q4",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A standard software update for project management applications",
          "A type of test designed to evaluate the team's performance",
          "The act of looking back in time to study historical events"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint.",
        "topic": "Process"
      },
      {
        "id": "capm-q5",
        "question": "What is a 'Critical Success Factor' (CSF)?",
        "options": [
          "A hardware failure in the main data center",
          "A type of software bug in the production phase",
          "A very hard task that requires many resources",
          "Something that must happen for a project to succeed"
        ],
        "answer": "Something that must happen for a project to succeed",
        "category": "Domain Review",
        "explanation": "CSFs are key areas of focus for the project manager.",
        "topic": "Process"
      },
      {
        "id": "capm-q6",
        "question": "What is 'Resource Management'?",
        "options": [
          "A standard software update for project management apps",
          "A type of database optimized for storing project data",
          "Finding new resources to be used for the project",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed.",
        "topic": "People"
      },
      {
        "id": "capm-q7",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account used for tracking project expenses",
          "A leather folder used for carrying project documents",
          "A type of database optimized for storing project data",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work.",
        "topic": "Business Environment"
      },
      {
        "id": "capm-q8",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope used for astronomical viewing",
          "The total budget allocated for a specific project",
          "The unique name given to a specific project task",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes.",
        "topic": "Process"
      },
      {
        "id": "capm-q9",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A low-cost project designed for small organizations and teams",
          "A standard financial report generated at the end of the year",
          "A type of database optimized for storing project budget data",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses.",
        "topic": "Process"
      },
      {
        "id": "capm-q10",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A specific type of project that requires rapid development",
          "A standard software update for project management applications",
          "The act of running a race at maximum speed for a distance"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog.",
        "topic": "Process"
      },
      {
        "id": "capm-q11",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A specific type of software bug found in the backlog",
          "A standard financial report on the state of the backlog",
          "Keeping the product backlog up to date and prioritized",
          "The act of cleaning a room and organizing all its items"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning.",
        "topic": "Process"
      },
      {
        "id": "capm-q12",
        "question": "What is a 'WBS' (Work Breakdown Structure)?",
        "options": [
          "A financial report that lists all project costs",
          "A hierarchical decomposition of project work",
          "A specific type of high-performance computer",
          "A website builder for creating project portals"
        ],
        "answer": "A hierarchical decomposition of project work",
        "category": "Domain Review",
        "explanation": "WBS breaks a project down into manageable parts.",
        "topic": "Process"
      },
      {
        "id": "capm-q13",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A consensus-based estimation technique for user stories",
          "A software tool used for tracking project development",
          "A standard card game played with a deck of 52 cards",
          "A type of financial gamble involving project outcomes"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously.",
        "topic": "Process"
      },
      {
        "id": "capm-q14",
        "question": "What is 'Lean' project management?",
        "options": [
          "A fast-paced and highly efficient project methodology",
          "A small project that requires very few resources",
          "A specific type of physical exercise for project teams",
          "Focusing on maximizing value and minimizing waste"
        ],
        "answer": "Focusing on maximizing value and minimizing waste",
        "category": "Domain Review",
        "explanation": "Lean originated in manufacturing and is widely used in IT.",
        "topic": "Process"
      },
      {
        "id": "capm-q15",
        "question": "What is 'Waterfall' methodology?",
        "options": [
          "A beautiful natural scenery with water",
          "A fast-paced and highly iterative project",
          "A sequential project management process",
          "A type of high-pressure plumbing system"
        ],
        "answer": "A sequential project management process",
        "category": "Domain Review",
        "explanation": "Work flows through distinct phases like requirements, design, and testing.",
        "topic": "Process"
      },
      {
        "id": "capm-q16",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A decrease in the project budget allocation",
          "A minor bug in the software application",
          "A slow project manager who misses deadlines",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget.",
        "topic": "Process"
      },
      {
        "id": "capm-q17",
        "question": "What is a 'Sprint' in Scrum?",
        "options": [
          "A short meeting for the development team",
          "A time-boxed iteration (usually 1-4 weeks)",
          "A type of project that requires rapid delivery",
          "Running very fast towards a specific goal"
        ],
        "answer": "A time-boxed iteration (usually 1-4 weeks)",
        "category": "Domain Review",
        "explanation": "Work is completed and made ready for review within a sprint.",
        "topic": "Process"
      },
      {
        "id": "capm-q18",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger for tracking project expenses",
          "A list of project tasks and their current status",
          "A simple guest book for visitors to sign their names"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement.",
        "topic": "People"
      },
      {
        "id": "capm-q19",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol designed for fast data transmission",
          "A type of computer code used for measuring system speed",
          "The speed of a car traveling on a long highway journey"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints.",
        "topic": "Process"
      },
      {
        "id": "capm-q20",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users who will use the product",
          "Only the investors who provide the funding",
          "Only the project team members and managers"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more.",
        "topic": "People"
      },
      {
        "id": "capm-q21",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty for repairing broken components",
          "A software tool designed for tracking project tasks",
          "Controlling the team members and their activities",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves.",
        "topic": "Process"
      },
      {
        "id": "capm-q22",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual that explains how to use EVM tools",
          "A specific way to earn money through project tasks",
          "A technique to measure project performance and progress",
          "A type of store that sells project management tools"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics.",
        "topic": "Process"
      },
      {
        "id": "capm-q23",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol designed for transmitting project data sets",
          "A specific part of a book that contains a narrative or tale",
          "A type of computer code used for project management tasks",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk.",
        "topic": "Process"
      },
      {
        "id": "capm-q24",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story told to children before they go to sleep",
          "A short description of a feature from an end-user perspective",
          "A software manual explaining how to use system features",
          "A type of book that contains many different short stories"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs.",
        "topic": "Process"
      },
      {
        "id": "capm-q25",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock found on the side of a highway",
          "A significant point or event in a project",
          "A task that takes exactly one hour to finish",
          "A unit of distance used for long-range travel"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals.",
        "topic": "Process"
      },
      {
        "id": "capm-q26",
        "question": "What is 'Scrum'?",
        "options": [
          "A framework for implementing Agile development",
          "A software tool designed for tracking team tasks",
          "A standard rugby formation used during a match",
          "A type of database optimized for project data"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work.",
        "topic": "Process"
      },
      {
        "id": "capm-q27",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware for the development system",
          "Exchanging money from one currency to another",
          "Hiring new people to join the project team"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved.",
        "topic": "Process"
      },
      {
        "id": "capm-q28",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A detailed list of all software bugs found in a product",
          "A large physical storage room for keeping product parts",
          "A prioritized list of everything that might be needed in a product",
          "A standard financial report on the annual product sales"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner.",
        "topic": "Process"
      },
      {
        "id": "capm-q29",
        "question": "What is 'Six Sigma'?",
        "options": [
          "A computer game designed for training project teams",
          "A secure network protocol for transmitting project data",
          "A set of techniques for process improvement and quality control",
          "A specific type of math used for advanced calculations"
        ],
        "answer": "A set of techniques for process improvement and quality control",
        "category": "Domain Review",
        "explanation": "Six Sigma focuses on reducing defects and variability.",
        "topic": "Process"
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
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers.",
        "topic": "People"
      },
      {
        "id": "capm-q31",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer who designs program architecture",
          "A type of software application for managing programs",
          "Managing a group of related projects to achieve benefits",
          "The act of writing many different computer programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects.",
        "topic": "Business Environment"
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
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback.",
        "topic": "Process"
      },
      {
        "id": "capm-q33",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car designed for high-performance driving",
          "A financial report that lists all project expenditures",
          "A system for managing work as it moves through a process",
          "A type of computer code used for project management"
        ],
        "answer": "A system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress.",
        "topic": "Process"
      },
      {
        "id": "capm-q34",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol designed for transmitting iterative data",
          "A type of computer code used for creating iterative loops",
          "Developing a product through repeated cycles (iterations)",
          "The act of repeating a task multiple times for consistency"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback.",
        "topic": "Process"
      },
      {
        "id": "capm-q35",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema for storing project data",
          "A financial spreadsheet for tracking costs",
          "A risk management framework for the team",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies.",
        "topic": "Process"
      },
      {
        "id": "capm-q36",
        "question": "What is 'Risk Management'?",
        "options": [
          "A specific type of insurance for project management",
          "Avoiding all risks by not starting any new projects",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances to achieve high project rewards"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance.",
        "topic": "Process"
      },
      {
        "id": "capm-q37",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about different types of projects and teams",
          "A document outlining the values and principles of Agile",
          "A hardware manual for installing networking equipment",
          "A specific type of software for managing Agile tasks"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001.",
        "topic": "Process"
      },
      {
        "id": "capm-q38",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of high-capacity storage for project data",
          "Hiring new people to work on the project tasks",
          "Managing the purchase of goods and services for a project",
          "Writing computer code for a software application"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing.",
        "topic": "Process"
      },
      {
        "id": "capm-q39",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session for developers",
          "A short daily meeting to discuss progress",
          "A weekly project review for the entire team",
          "An exercise break for the team members"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early.",
        "topic": "People"
      },
      {
        "id": "capm-q40",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency responsible for project oversight",
          "A security guard responsible for project site safety",
          "A set of laws and regulations for managing projects",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals.",
        "topic": "Business Environment"
      },
      {
        "id": "capm-q41",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer that produces project equipment",
          "A type of computer designed for project management tasks",
          "A website developer who specializes in project portals"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support.",
        "topic": "Business Environment"
      },
      {
        "id": "capm-q42",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A detailed map of the world for navigation",
          "A document that formally authorizes a project",
          "A financial contract between two different parties",
          "A list of team members and their assignments"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources.",
        "topic": "Process"
      },
      {
        "id": "capm-q43",
        "question": "What is 'Project Budget'?",
        "options": [
          "A detailed list of tasks required to complete a project",
          "A software manual explaining how to manage project costs",
          "A standard financial ledger for tracking company expenses",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager.",
        "topic": "Process"
      },
      {
        "id": "capm-q44",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard for maintaining equipment consistency",
          "A high-ranking member of a royal or noble family in Europe",
          "A structured project management methodology used widely in Europe",
          "A type of computer software for managing project structures"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments.",
        "topic": "Process"
      },
      {
        "id": "capm-q45",
        "question": "What is 'Quality Assurance' (QA)?",
        "options": [
          "A written guarantee for the quality of a product",
          "Checking for errors in a software application",
          "Processes to ensure a project meets quality standards",
          "Testing a product before it is shipped to users"
        ],
        "answer": "Processes to ensure a project meets quality standards",
        "category": "Domain Review",
        "explanation": "QA is focused on the process used to create the deliverables.",
        "topic": "Process"
      },
      {
        "id": "capm-q46",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A graphical representation of work remaining versus time",
          "A physical fire hazard in a project management office",
          "A standard financial report showing monthly project costs",
          "A type of database optimized for storing chart information"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint.",
        "topic": "Process"
      },
      {
        "id": "capm-q47",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A meeting to demonstrate the work completed during the sprint",
          "A standard financial report generated at the end of a sprint",
          "A type of test designed to evaluate the quality of a sprint",
          "The act of checking a website for new content and updates"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders.",
        "topic": "Process"
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
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives.",
        "topic": "Process"
      },
      {
        "id": "capm-q49",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A standard delivery truck for shipping consumer goods",
          "A standard software update designed to fix minor system bugs",
          "A type of storage device used for saving product archives",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value.",
        "topic": "Process"
      },
      {
        "id": "capm-q50",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol designed for transmitting feature data",
          "A specific part of a movie that features a main character",
          "A type of computer code used for adding new functionalities"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories.",
        "topic": "Process"
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
        "title": "Business Environment",
        "topics": [
          {
            "name": "What is 'Portfolio Management'?",
            "detail": "Portfolio management focuses on selecting the right work."
          },
          {
            "name": "What is 'Project Governance'?",
            "detail": "Governance ensures the project aligns with organizational goals."
          },
          {
            "name": "What is 'Program Management'?",
            "detail": "Programs deliver more value together than as separate projects."
          },
          {
            "name": "What is a 'PMO' (Project Management Office)?",
            "detail": "PMOs provide standards, templates, and support."
          }
        ]
      },
      {
        "title": "People",
        "topics": [
          {
            "name": "What is a 'Stakeholder Registry'?",
            "detail": "It helps in planning stakeholder engagement."
          },
          {
            "name": "What is the role of the 'Scrum Master'?",
            "detail": "The Scrum Master helps the team follow Scrum values and removes blockers."
          },
          {
            "name": "What is a 'Daily Stand-up'?",
            "detail": "Stand-ups are key to Agile sync and identifying blockers early."
          },
          {
            "name": "Who are 'Stakeholders'?",
            "detail": "Stakeholders include the team, customers, sponsors, and more."
          },
          {
            "name": "What is 'Resource Management'?",
            "detail": "It ensures resources are available when needed."
          }
        ]
      },
      {
        "title": "Process",
        "topics": [
          {
            "name": "What is 'Scrum'?",
            "detail": "Scrum uses roles, events, and artifacts to manage complex work."
          },
          {
            "name": "What is 'Quality Control' (QC)?",
            "detail": "QC is focused on the deliverables themselves."
          },
          {
            "name": "What is a 'Sprint Review'?",
            "detail": "The team gets feedback from stakeholders."
          },
          {
            "name": "What is 'Risk Management'?",
            "detail": "Management involves mitigation, transfer, acceptance, or avoidance."
          },
          {
            "name": "What is a 'WBS' (Work Breakdown Structure)?",
            "detail": "WBS breaks a project down into manageable parts."
          },
          {
            "name": "What is 'Change Management'?",
            "detail": "It ensures changes are properly reviewed and approved."
          },
          {
            "name": "What is 'Backlog Grooming' (or Refinement)?",
            "detail": "Grooming ensures the backlog is ready for planning."
          },
          {
            "name": "What is a 'Sprint' in Scrum?",
            "detail": "Work is completed and made ready for review within a sprint."
          },
          {
            "name": "What is a 'Milestone'?",
            "detail": "Milestones help track progress towards major goals."
          },
          {
            "name": "What is a 'SOW' (Statement of Work)?",
            "detail": "SOW defines the scope, schedule, and deliverables for a vendor."
          },
          {
            "name": "What is a 'Lessons Learned' session?",
            "detail": "Lessons learned improve future project performance."
          },
          {
            "name": "What is the 'MVP' in product development?",
            "detail": "An MVP has just enough features to satisfy early customers and provide feedback."
          },
          {
            "name": "What is a 'Feature' in project management?",
            "detail": "Features are often broken down into user stories."
          },
          {
            "name": "What is a 'Project Charter'?",
            "detail": "The charter gives the project manager authority to use resources."
          },
          {
            "name": "What is a 'User Story'?",
            "detail": "User stories help teams understand user needs."
          },
          {
            "name": "What is 'Earned Value Management' (EVM)?",
            "detail": "EVM integrates scope, schedule, and cost metrics."
          },
          {
            "name": "What is 'Incremental Delivery'?",
            "detail": "Incremental delivery allows for early feedback and value."
          },
          {
            "name": "What is a 'Product Backlog'?",
            "detail": "The backlog is constantly evolving and managed by the Product Owner."
          },
          {
            "name": "What is a 'Burndown Chart'?",
            "detail": "Burndown charts help teams track their progress during a sprint."
          },
          {
            "name": "What is a 'Story Point'?",
            "detail": "Story points account for complexity, effort, and risk."
          },
          {
            "name": "What is 'Kanban'?",
            "detail": "Kanban helps visualize workflow and limit work-in-progress."
          },
          {
            "name": "What is 'Agile Manifesto'?",
            "detail": "The manifesto was created by 17 software developers in 2001."
          },
          {
            "name": "What is a 'Gantt Chart'?",
            "detail": "Gantt charts show tasks over time and their dependencies."
          },
          {
            "name": "What is 'Procurement Management'?",
            "detail": "It involves contracts, vendors, and purchasing."
          },
          {
            "name": "What is a 'Sprint Retrospective'?",
            "detail": "The team identifies improvements for the next sprint."
          },
          {
            "name": "What is 'Agile' methodology?",
            "detail": "Agile focuses on delivering value quickly and adapting to change."
          },
          {
            "name": "What does 'KPI' stand for?",
            "detail": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
          },
          {
            "name": "What is 'Planning Poker'?",
            "detail": "Teams use cards to estimate story points anonymously."
          },
          {
            "name": "What is 'Cost Baseline'?",
            "detail": "The baseline includes all authorized expenses."
          },
          {
            "name": "What is 'Six Sigma'?",
            "detail": "Six Sigma focuses on reducing defects and variability."
          },
          {
            "name": "What is 'Iterative Development'?",
            "detail": "Each iteration improves the product based on feedback."
          },
          {
            "name": "What does 'Scope Creep' mean?",
            "detail": "Scope creep occurs when new features are added without adjusting time or budget."
          },
          {
            "name": "What is 'Velocity' in Agile?",
            "detail": "Velocity helps in planning future sprints."
          },
          {
            "name": "What is 'Project Budget'?",
            "detail": "Managing the budget is a key responsibility of the project manager."
          },
          {
            "name": "What is 'Project Scope'?",
            "detail": "Defining scope is essential to prevent uncontrolled changes."
          },
          {
            "name": "What is 'Waterfall' methodology?",
            "detail": "Work flows through distinct phases like requirements, design, and testing."
          },
          {
            "name": "What is a 'Critical Success Factor' (CSF)?",
            "detail": "CSFs are key areas of focus for the project manager."
          },
          {
            "name": "What is 'Quality Assurance' (QA)?",
            "detail": "QA is focused on the process used to create the deliverables."
          },
          {
            "name": "What is 'Sprint Planning'?",
            "detail": "The team selects items from the product backlog."
          },
          {
            "name": "What is an 'Epic'?",
            "detail": "Epics often span multiple sprints."
          },
          {
            "name": "What is 'PRINCE2'?",
            "detail": "PRINCE2 stands for Projects IN Controlled Environments."
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
          "A software tool designed for tracking team tasks",
          "A standard rugby formation used during a match",
          "A type of database optimized for project data"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work.",
        "topic": "Process"
      },
      {
        "id": "csm-q2",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty for repairing broken components",
          "A software tool designed for tracking project tasks",
          "Controlling the team members and their activities",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves.",
        "topic": "Process"
      },
      {
        "id": "csm-q3",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A meeting to demonstrate the work completed during the sprint",
          "A standard financial report generated at the end of a sprint",
          "A type of test designed to evaluate the quality of a sprint",
          "The act of checking a website for new content and updates"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders.",
        "topic": "Process"
      },
      {
        "id": "csm-q4",
        "question": "What is 'Risk Management'?",
        "options": [
          "A specific type of insurance for project management",
          "Avoiding all risks by not starting any new projects",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances to achieve high project rewards"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance.",
        "topic": "Process"
      },
      {
        "id": "csm-q5",
        "question": "What is a 'WBS' (Work Breakdown Structure)?",
        "options": [
          "A financial report that lists all project costs",
          "A hierarchical decomposition of project work",
          "A specific type of high-performance computer",
          "A website builder for creating project portals"
        ],
        "answer": "A hierarchical decomposition of project work",
        "category": "Domain Review",
        "explanation": "WBS breaks a project down into manageable parts.",
        "topic": "Process"
      },
      {
        "id": "csm-q6",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware for the development system",
          "Exchanging money from one currency to another",
          "Hiring new people to join the project team"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved.",
        "topic": "Process"
      },
      {
        "id": "csm-q7",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A specific type of software bug found in the backlog",
          "A standard financial report on the state of the backlog",
          "Keeping the product backlog up to date and prioritized",
          "The act of cleaning a room and organizing all its items"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning.",
        "topic": "Process"
      },
      {
        "id": "csm-q8",
        "question": "What is a 'Sprint' in Scrum?",
        "options": [
          "A short meeting for the development team",
          "A time-boxed iteration (usually 1-4 weeks)",
          "A type of project that requires rapid delivery",
          "Running very fast towards a specific goal"
        ],
        "answer": "A time-boxed iteration (usually 1-4 weeks)",
        "category": "Domain Review",
        "explanation": "Work is completed and made ready for review within a sprint.",
        "topic": "Process"
      },
      {
        "id": "csm-q9",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock found on the side of a highway",
          "A significant point or event in a project",
          "A task that takes exactly one hour to finish",
          "A unit of distance used for long-range travel"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals.",
        "topic": "Process"
      },
      {
        "id": "csm-q10",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report detailing the project expenditures",
          "A list of team members and their contact information",
          "A specific type of pig found on a residential farm"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor.",
        "topic": "Process"
      },
      {
        "id": "csm-q11",
        "question": "What is a 'Lessons Learned' session?",
        "options": [
          "A classroom lecture given by a senior project manager",
          "A meeting to discuss what went well and what didn't in a project",
          "A standard software update for project management apps",
          "A type of test designed to evaluate project knowledge"
        ],
        "answer": "A meeting to discuss what went well and what didn't in a project",
        "category": "Domain Review",
        "explanation": "Lessons learned improve future project performance.",
        "topic": "Process"
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
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback.",
        "topic": "Process"
      },
      {
        "id": "csm-q13",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol designed for transmitting feature data",
          "A specific part of a movie that features a main character",
          "A type of computer code used for adding new functionalities"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories.",
        "topic": "Process"
      },
      {
        "id": "csm-q14",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A detailed map of the world for navigation",
          "A document that formally authorizes a project",
          "A financial contract between two different parties",
          "A list of team members and their assignments"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources.",
        "topic": "Process"
      },
      {
        "id": "csm-q15",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story told to children before they go to sleep",
          "A short description of a feature from an end-user perspective",
          "A software manual explaining how to use system features",
          "A type of book that contains many different short stories"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs.",
        "topic": "Process"
      },
      {
        "id": "csm-q16",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual that explains how to use EVM tools",
          "A specific way to earn money through project tasks",
          "A technique to measure project performance and progress",
          "A type of store that sells project management tools"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics.",
        "topic": "Process"
      },
      {
        "id": "csm-q17",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger for tracking project expenses",
          "A list of project tasks and their current status",
          "A simple guest book for visitors to sign their names"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement.",
        "topic": "People"
      },
      {
        "id": "csm-q18",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A standard delivery truck for shipping consumer goods",
          "A standard software update designed to fix minor system bugs",
          "A type of storage device used for saving product archives",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value.",
        "topic": "Process"
      },
      {
        "id": "csm-q19",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A detailed list of all software bugs found in a product",
          "A large physical storage room for keeping product parts",
          "A prioritized list of everything that might be needed in a product",
          "A standard financial report on the annual product sales"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner.",
        "topic": "Process"
      },
      {
        "id": "csm-q20",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A graphical representation of work remaining versus time",
          "A physical fire hazard in a project management office",
          "A standard financial report showing monthly project costs",
          "A type of database optimized for storing chart information"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint.",
        "topic": "Process"
      },
      {
        "id": "csm-q21",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol designed for transmitting project data sets",
          "A specific part of a book that contains a narrative or tale",
          "A type of computer code used for project management tasks",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk.",
        "topic": "Process"
      },
      {
        "id": "csm-q22",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car designed for high-performance driving",
          "A financial report that lists all project expenditures",
          "A system for managing work as it moves through a process",
          "A type of computer code used for project management"
        ],
        "answer": "A system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress.",
        "topic": "Process"
      },
      {
        "id": "csm-q23",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account used for tracking project expenses",
          "A leather folder used for carrying project documents",
          "A type of database optimized for storing project data",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work.",
        "topic": "Business Environment"
      },
      {
        "id": "csm-q24",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency responsible for project oversight",
          "A security guard responsible for project site safety",
          "A set of laws and regulations for managing projects",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals.",
        "topic": "Business Environment"
      },
      {
        "id": "csm-q25",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about different types of projects and teams",
          "A document outlining the values and principles of Agile",
          "A hardware manual for installing networking equipment",
          "A specific type of software for managing Agile tasks"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001.",
        "topic": "Process"
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
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers.",
        "topic": "People"
      },
      {
        "id": "csm-q27",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema for storing project data",
          "A financial spreadsheet for tracking costs",
          "A risk management framework for the team",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies.",
        "topic": "Process"
      },
      {
        "id": "csm-q28",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer who designs program architecture",
          "A type of software application for managing programs",
          "Managing a group of related projects to achieve benefits",
          "The act of writing many different computer programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects.",
        "topic": "Business Environment"
      },
      {
        "id": "csm-q29",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of high-capacity storage for project data",
          "Hiring new people to work on the project tasks",
          "Managing the purchase of goods and services for a project",
          "Writing computer code for a software application"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing.",
        "topic": "Process"
      },
      {
        "id": "csm-q30",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A standard software update for project management applications",
          "A type of test designed to evaluate the team's performance",
          "The act of looking back in time to study historical events"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint.",
        "topic": "Process"
      },
      {
        "id": "csm-q31",
        "question": "What is 'Agile' methodology?",
        "options": [
          "A set of strict rules for managing organizational tasks",
          "A type of competitive sport played by professional teams",
          "A very fast router designed for high-speed networks",
          "An iterative approach to project management and software development"
        ],
        "answer": "An iterative approach to project management and software development",
        "category": "Domain Review",
        "explanation": "Agile focuses on delivering value quickly and adapting to change.",
        "topic": "Process"
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
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives.",
        "topic": "Process"
      },
      {
        "id": "csm-q33",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session for developers",
          "A short daily meeting to discuss progress",
          "A weekly project review for the entire team",
          "An exercise break for the team members"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early.",
        "topic": "People"
      },
      {
        "id": "csm-q34",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A consensus-based estimation technique for user stories",
          "A software tool used for tracking project development",
          "A standard card game played with a deck of 52 cards",
          "A type of financial gamble involving project outcomes"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously.",
        "topic": "Process"
      },
      {
        "id": "csm-q35",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A low-cost project designed for small organizations and teams",
          "A standard financial report generated at the end of the year",
          "A type of database optimized for storing project budget data",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses.",
        "topic": "Process"
      },
      {
        "id": "csm-q36",
        "question": "Who are 'Stakeholders'?",
        "options": [
          "Anyone affected by or involved in the project",
          "Only the end-users who will use the product",
          "Only the investors who provide the funding",
          "Only the project team members and managers"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more.",
        "topic": "People"
      },
      {
        "id": "csm-q37",
        "question": "What is 'Six Sigma'?",
        "options": [
          "A computer game designed for training project teams",
          "A secure network protocol for transmitting project data",
          "A set of techniques for process improvement and quality control",
          "A specific type of math used for advanced calculations"
        ],
        "answer": "A set of techniques for process improvement and quality control",
        "category": "Domain Review",
        "explanation": "Six Sigma focuses on reducing defects and variability.",
        "topic": "Process"
      },
      {
        "id": "csm-q38",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol designed for transmitting iterative data",
          "A type of computer code used for creating iterative loops",
          "Developing a product through repeated cycles (iterations)",
          "The act of repeating a task multiple times for consistency"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback.",
        "topic": "Process"
      },
      {
        "id": "csm-q39",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A decrease in the project budget allocation",
          "A minor bug in the software application",
          "A slow project manager who misses deadlines",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget.",
        "topic": "Process"
      },
      {
        "id": "csm-q40",
        "question": "What is 'Resource Management'?",
        "options": [
          "A standard software update for project management apps",
          "A type of database optimized for storing project data",
          "Finding new resources to be used for the project",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed.",
        "topic": "People"
      },
      {
        "id": "csm-q41",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol designed for fast data transmission",
          "A type of computer code used for measuring system speed",
          "The speed of a car traveling on a long highway journey"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints.",
        "topic": "Process"
      },
      {
        "id": "csm-q42",
        "question": "What is 'Project Budget'?",
        "options": [
          "A detailed list of tasks required to complete a project",
          "A software manual explaining how to manage project costs",
          "A standard financial ledger for tracking company expenses",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager.",
        "topic": "Process"
      },
      {
        "id": "csm-q43",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope used for astronomical viewing",
          "The total budget allocated for a specific project",
          "The unique name given to a specific project task",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes.",
        "topic": "Process"
      },
      {
        "id": "csm-q44",
        "question": "What is 'Waterfall' methodology?",
        "options": [
          "A beautiful natural scenery with water",
          "A fast-paced and highly iterative project",
          "A sequential project management process",
          "A type of high-pressure plumbing system"
        ],
        "answer": "A sequential project management process",
        "category": "Domain Review",
        "explanation": "Work flows through distinct phases like requirements, design, and testing.",
        "topic": "Process"
      },
      {
        "id": "csm-q45",
        "question": "What is a 'Critical Success Factor' (CSF)?",
        "options": [
          "A hardware failure in the main data center",
          "A type of software bug in the production phase",
          "A very hard task that requires many resources",
          "Something that must happen for a project to succeed"
        ],
        "answer": "Something that must happen for a project to succeed",
        "category": "Domain Review",
        "explanation": "CSFs are key areas of focus for the project manager.",
        "topic": "Process"
      },
      {
        "id": "csm-q46",
        "question": "What is 'Quality Assurance' (QA)?",
        "options": [
          "A written guarantee for the quality of a product",
          "Checking for errors in a software application",
          "Processes to ensure a project meets quality standards",
          "Testing a product before it is shipped to users"
        ],
        "answer": "Processes to ensure a project meets quality standards",
        "category": "Domain Review",
        "explanation": "QA is focused on the process used to create the deliverables.",
        "topic": "Process"
      },
      {
        "id": "csm-q47",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A specific type of project that requires rapid development",
          "A standard software update for project management applications",
          "The act of running a race at maximum speed for a distance"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog.",
        "topic": "Process"
      },
      {
        "id": "csm-q48",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer that produces project equipment",
          "A type of computer designed for project management tasks",
          "A website developer who specializes in project portals"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support.",
        "topic": "Business Environment"
      },
      {
        "id": "csm-q49",
        "question": "What is an 'Epic'?",
        "options": [
          "A large body of work that can be broken down into many user stories",
          "A software manual that describes the entire system architecture",
          "A type of movie with a long duration and a very large budget",
          "A very long poem that tells a story of heroic deeds and events"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints.",
        "topic": "Process"
      },
      {
        "id": "csm-q50",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard for maintaining equipment consistency",
          "A high-ranking member of a royal or noble family in Europe",
          "A structured project management methodology used widely in Europe",
          "A type of computer software for managing project structures"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments.",
        "topic": "Process"
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
        "title": "Business Environment",
        "topics": [
          {
            "name": "What is 'Portfolio Management'?",
            "detail": "Portfolio management focuses on selecting the right work."
          },
          {
            "name": "What is a 'PMO' (Project Management Office)?",
            "detail": "PMOs provide standards, templates, and support."
          },
          {
            "name": "What is 'Program Management'?",
            "detail": "Programs deliver more value together than as separate projects."
          },
          {
            "name": "What is 'Project Governance'?",
            "detail": "Governance ensures the project aligns with organizational goals."
          }
        ]
      },
      {
        "title": "People",
        "topics": [
          {
            "name": "Who are 'Stakeholders'?",
            "detail": "Stakeholders include the team, customers, sponsors, and more."
          },
          {
            "name": "What is 'Resource Management'?",
            "detail": "It ensures resources are available when needed."
          },
          {
            "name": "What is a 'Daily Stand-up'?",
            "detail": "Stand-ups are key to Agile sync and identifying blockers early."
          },
          {
            "name": "What is a 'Stakeholder Registry'?",
            "detail": "It helps in planning stakeholder engagement."
          },
          {
            "name": "What is the role of the 'Scrum Master'?",
            "detail": "The Scrum Master helps the team follow Scrum values and removes blockers."
          }
        ]
      },
      {
        "title": "Process",
        "topics": [
          {
            "name": "What is a 'Project Charter'?",
            "detail": "The charter gives the project manager authority to use resources."
          },
          {
            "name": "What is 'PRINCE2'?",
            "detail": "PRINCE2 stands for Projects IN Controlled Environments."
          },
          {
            "name": "What is 'Project Budget'?",
            "detail": "Managing the budget is a key responsibility of the project manager."
          },
          {
            "name": "What is 'Planning Poker'?",
            "detail": "Teams use cards to estimate story points anonymously."
          },
          {
            "name": "What is the 'MVP' in product development?",
            "detail": "An MVP has just enough features to satisfy early customers and provide feedback."
          },
          {
            "name": "What does 'Scope Creep' mean?",
            "detail": "Scope creep occurs when new features are added without adjusting time or budget."
          },
          {
            "name": "What is 'Sprint Planning'?",
            "detail": "The team selects items from the product backlog."
          },
          {
            "name": "What is a 'SOW' (Statement of Work)?",
            "detail": "SOW defines the scope, schedule, and deliverables for a vendor."
          },
          {
            "name": "What is 'Procurement Management'?",
            "detail": "It involves contracts, vendors, and purchasing."
          },
          {
            "name": "What is 'Scrum'?",
            "detail": "Scrum uses roles, events, and artifacts to manage complex work."
          },
          {
            "name": "What is 'Iterative Development'?",
            "detail": "Each iteration improves the product based on feedback."
          },
          {
            "name": "What is a 'Sprint Review'?",
            "detail": "The team gets feedback from stakeholders."
          },
          {
            "name": "What is 'Quality Assurance' (QA)?",
            "detail": "QA is focused on the process used to create the deliverables."
          },
          {
            "name": "What is 'Quality Control' (QC)?",
            "detail": "QC is focused on the deliverables themselves."
          },
          {
            "name": "What is 'Agile Manifesto'?",
            "detail": "The manifesto was created by 17 software developers in 2001."
          },
          {
            "name": "What is a 'Gantt Chart'?",
            "detail": "Gantt charts show tasks over time and their dependencies."
          },
          {
            "name": "What is a 'Critical Success Factor' (CSF)?",
            "detail": "CSFs are key areas of focus for the project manager."
          },
          {
            "name": "What is a 'User Story'?",
            "detail": "User stories help teams understand user needs."
          },
          {
            "name": "What is 'Kanban'?",
            "detail": "Kanban helps visualize workflow and limit work-in-progress."
          },
          {
            "name": "What is 'Change Management'?",
            "detail": "It ensures changes are properly reviewed and approved."
          },
          {
            "name": "What is 'Earned Value Management' (EVM)?",
            "detail": "EVM integrates scope, schedule, and cost metrics."
          },
          {
            "name": "What is a 'Feature' in project management?",
            "detail": "Features are often broken down into user stories."
          },
          {
            "name": "What is 'Waterfall' methodology?",
            "detail": "Work flows through distinct phases like requirements, design, and testing."
          },
          {
            "name": "What is a 'Product Backlog'?",
            "detail": "The backlog is constantly evolving and managed by the Product Owner."
          },
          {
            "name": "What is 'Agile' methodology?",
            "detail": "Agile focuses on delivering value quickly and adapting to change."
          },
          {
            "name": "What is 'Six Sigma'?",
            "detail": "Six Sigma focuses on reducing defects and variability."
          },
          {
            "name": "What is a 'Story Point'?",
            "detail": "Story points account for complexity, effort, and risk."
          },
          {
            "name": "What is an 'Epic'?",
            "detail": "Epics often span multiple sprints."
          },
          {
            "name": "What is 'Incremental Delivery'?",
            "detail": "Incremental delivery allows for early feedback and value."
          },
          {
            "name": "What is a 'Milestone'?",
            "detail": "Milestones help track progress towards major goals."
          },
          {
            "name": "What is 'Risk Management'?",
            "detail": "Management involves mitigation, transfer, acceptance, or avoidance."
          },
          {
            "name": "What is 'Backlog Grooming' (or Refinement)?",
            "detail": "Grooming ensures the backlog is ready for planning."
          },
          {
            "name": "What is a 'WBS' (Work Breakdown Structure)?",
            "detail": "WBS breaks a project down into manageable parts."
          },
          {
            "name": "What is a 'Burndown Chart'?",
            "detail": "Burndown charts help teams track their progress during a sprint."
          },
          {
            "name": "What is a 'Sprint' in Scrum?",
            "detail": "Work is completed and made ready for review within a sprint."
          },
          {
            "name": "What does 'KPI' stand for?",
            "detail": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives."
          },
          {
            "name": "What is 'Project Scope'?",
            "detail": "Defining scope is essential to prevent uncontrolled changes."
          },
          {
            "name": "What is 'Velocity' in Agile?",
            "detail": "Velocity helps in planning future sprints."
          },
          {
            "name": "What is 'Lean' project management?",
            "detail": "Lean originated in manufacturing and is widely used in IT."
          },
          {
            "name": "What is a 'Sprint Retrospective'?",
            "detail": "The team identifies improvements for the next sprint."
          },
          {
            "name": "What is 'Cost Baseline'?",
            "detail": "The baseline includes all authorized expenses."
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
          "Only the end-users who will use the product",
          "Only the investors who provide the funding",
          "Only the project team members and managers"
        ],
        "answer": "Anyone affected by or involved in the project",
        "category": "Domain Review",
        "explanation": "Stakeholders include the team, customers, sponsors, and more.",
        "topic": "People"
      },
      {
        "id": "itil-found-q2",
        "question": "What is 'Resource Management'?",
        "options": [
          "A standard software update for project management apps",
          "A type of database optimized for storing project data",
          "Finding new resources to be used for the project",
          "Managing people, equipment, and materials for a project"
        ],
        "answer": "Managing people, equipment, and materials for a project",
        "category": "Domain Review",
        "explanation": "It ensures resources are available when needed.",
        "topic": "People"
      },
      {
        "id": "itil-found-q3",
        "question": "What is a 'Project Charter'?",
        "options": [
          "A detailed map of the world for navigation",
          "A document that formally authorizes a project",
          "A financial contract between two different parties",
          "A list of team members and their assignments"
        ],
        "answer": "A document that formally authorizes a project",
        "category": "Domain Review",
        "explanation": "The charter gives the project manager authority to use resources.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q4",
        "question": "What is 'PRINCE2'?",
        "options": [
          "A hardware standard for maintaining equipment consistency",
          "A high-ranking member of a royal or noble family in Europe",
          "A structured project management methodology used widely in Europe",
          "A type of computer software for managing project structures"
        ],
        "answer": "A structured project management methodology used widely in Europe",
        "category": "Domain Review",
        "explanation": "PRINCE2 stands for Projects IN Controlled Environments.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q5",
        "question": "What is a 'Daily Stand-up'?",
        "options": [
          "A marathon coding session for developers",
          "A short daily meeting to discuss progress",
          "A weekly project review for the entire team",
          "An exercise break for the team members"
        ],
        "answer": "A short daily meeting to discuss progress",
        "category": "Domain Review",
        "explanation": "Stand-ups are key to Agile sync and identifying blockers early.",
        "topic": "People"
      },
      {
        "id": "itil-found-q6",
        "question": "What is 'Project Budget'?",
        "options": [
          "A detailed list of tasks required to complete a project",
          "A software manual explaining how to manage project costs",
          "A standard financial ledger for tracking company expenses",
          "The total amount of money allocated for a project"
        ],
        "answer": "The total amount of money allocated for a project",
        "category": "Domain Review",
        "explanation": "Managing the budget is a key responsibility of the project manager.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q7",
        "question": "What is a 'Stakeholder Registry'?",
        "options": [
          "A document listing all project stakeholders and their info",
          "A financial ledger for tracking project expenses",
          "A list of project tasks and their current status",
          "A simple guest book for visitors to sign their names"
        ],
        "answer": "A document listing all project stakeholders and their info",
        "category": "Domain Review",
        "explanation": "It helps in planning stakeholder engagement.",
        "topic": "People"
      },
      {
        "id": "itil-found-q8",
        "question": "What is 'Planning Poker'?",
        "options": [
          "A consensus-based estimation technique for user stories",
          "A software tool used for tracking project development",
          "A standard card game played with a deck of 52 cards",
          "A type of financial gamble involving project outcomes"
        ],
        "answer": "A consensus-based estimation technique for user stories",
        "category": "Domain Review",
        "explanation": "Teams use cards to estimate story points anonymously.",
        "topic": "Process"
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
        "explanation": "An MVP has just enough features to satisfy early customers and provide feedback.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q10",
        "question": "What does 'Scope Creep' mean?",
        "options": [
          "A decrease in the project budget allocation",
          "A minor bug in the software application",
          "A slow project manager who misses deadlines",
          "Uncontrolled changes in project requirements"
        ],
        "answer": "Uncontrolled changes in project requirements",
        "category": "Domain Review",
        "explanation": "Scope creep occurs when new features are added without adjusting time or budget.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q11",
        "question": "What is 'Sprint Planning'?",
        "options": [
          "A meeting where the team decides what to work on in the next sprint",
          "A specific type of project that requires rapid development",
          "A standard software update for project management applications",
          "The act of running a race at maximum speed for a distance"
        ],
        "answer": "A meeting where the team decides what to work on in the next sprint",
        "category": "Domain Review",
        "explanation": "The team selects items from the product backlog.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q12",
        "question": "What is a 'SOW' (Statement of Work)?",
        "options": [
          "A document describing the work to be performed under contract",
          "A financial report detailing the project expenditures",
          "A list of team members and their contact information",
          "A specific type of pig found on a residential farm"
        ],
        "answer": "A document describing the work to be performed under contract",
        "category": "Domain Review",
        "explanation": "SOW defines the scope, schedule, and deliverables for a vendor.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q13",
        "question": "What is 'Procurement Management'?",
        "options": [
          "A type of high-capacity storage for project data",
          "Hiring new people to work on the project tasks",
          "Managing the purchase of goods and services for a project",
          "Writing computer code for a software application"
        ],
        "answer": "Managing the purchase of goods and services for a project",
        "category": "Domain Review",
        "explanation": "It involves contracts, vendors, and purchasing.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q14",
        "question": "What is 'Scrum'?",
        "options": [
          "A framework for implementing Agile development",
          "A software tool designed for tracking team tasks",
          "A standard rugby formation used during a match",
          "A type of database optimized for project data"
        ],
        "answer": "A framework for implementing Agile development",
        "category": "Domain Review",
        "explanation": "Scrum uses roles, events, and artifacts to manage complex work.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q15",
        "question": "What is 'Iterative Development'?",
        "options": [
          "A network protocol designed for transmitting iterative data",
          "A type of computer code used for creating iterative loops",
          "Developing a product through repeated cycles (iterations)",
          "The act of repeating a task multiple times for consistency"
        ],
        "answer": "Developing a product through repeated cycles (iterations)",
        "category": "Domain Review",
        "explanation": "Each iteration improves the product based on feedback.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q16",
        "question": "What is 'Portfolio Management'?",
        "options": [
          "A financial account used for tracking project expenses",
          "A leather folder used for carrying project documents",
          "A type of database optimized for storing project data",
          "Managing a collection of projects and programs to meet strategic goals"
        ],
        "answer": "Managing a collection of projects and programs to meet strategic goals",
        "category": "Domain Review",
        "explanation": "Portfolio management focuses on selecting the right work.",
        "topic": "Business Environment"
      },
      {
        "id": "itil-found-q17",
        "question": "What is a 'Sprint Review'?",
        "options": [
          "A meeting to demonstrate the work completed during the sprint",
          "A standard financial report generated at the end of a sprint",
          "A type of test designed to evaluate the quality of a sprint",
          "The act of checking a website for new content and updates"
        ],
        "answer": "A meeting to demonstrate the work completed during the sprint",
        "category": "Domain Review",
        "explanation": "The team gets feedback from stakeholders.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q18",
        "question": "What is 'Quality Assurance' (QA)?",
        "options": [
          "A written guarantee for the quality of a product",
          "Checking for errors in a software application",
          "Processes to ensure a project meets quality standards",
          "Testing a product before it is shipped to users"
        ],
        "answer": "Processes to ensure a project meets quality standards",
        "category": "Domain Review",
        "explanation": "QA is focused on the process used to create the deliverables.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q19",
        "question": "What is 'Quality Control' (QC)?",
        "options": [
          "A hardware warranty for repairing broken components",
          "A software tool designed for tracking project tasks",
          "Controlling the team members and their activities",
          "Monitoring project results to ensure they meet standards"
        ],
        "answer": "Monitoring project results to ensure they meet standards",
        "category": "Domain Review",
        "explanation": "QC is focused on the deliverables themselves.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q20",
        "question": "What is 'Agile Manifesto'?",
        "options": [
          "A book about different types of projects and teams",
          "A document outlining the values and principles of Agile",
          "A hardware manual for installing networking equipment",
          "A specific type of software for managing Agile tasks"
        ],
        "answer": "A document outlining the values and principles of Agile",
        "category": "Domain Review",
        "explanation": "The manifesto was created by 17 software developers in 2001.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q21",
        "question": "What is a 'Gantt Chart'?",
        "options": [
          "A database schema for storing project data",
          "A financial spreadsheet for tracking costs",
          "A risk management framework for the team",
          "A visual representation of a project schedule"
        ],
        "answer": "A visual representation of a project schedule",
        "category": "Domain Review",
        "explanation": "Gantt charts show tasks over time and their dependencies.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q22",
        "question": "What is a 'Critical Success Factor' (CSF)?",
        "options": [
          "A hardware failure in the main data center",
          "A type of software bug in the production phase",
          "A very hard task that requires many resources",
          "Something that must happen for a project to succeed"
        ],
        "answer": "Something that must happen for a project to succeed",
        "category": "Domain Review",
        "explanation": "CSFs are key areas of focus for the project manager.",
        "topic": "Process"
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
        "explanation": "The Scrum Master helps the team follow Scrum values and removes blockers.",
        "topic": "People"
      },
      {
        "id": "itil-found-q24",
        "question": "What is a 'User Story'?",
        "options": [
          "A bedtime story told to children before they go to sleep",
          "A short description of a feature from an end-user perspective",
          "A software manual explaining how to use system features",
          "A type of book that contains many different short stories"
        ],
        "answer": "A short description of a feature from an end-user perspective",
        "category": "Domain Review",
        "explanation": "User stories help teams understand user needs.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q25",
        "question": "What is 'Kanban'?",
        "options": [
          "A Japanese car designed for high-performance driving",
          "A financial report that lists all project expenditures",
          "A system for managing work as it moves through a process",
          "A type of computer code used for project management"
        ],
        "answer": "A system for managing work as it moves through a process",
        "category": "Domain Review",
        "explanation": "Kanban helps visualize workflow and limit work-in-progress.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q26",
        "question": "What is a 'PMO' (Project Management Office)?",
        "options": [
          "A department that centralizes and coordinates project management",
          "A hardware manufacturer that produces project equipment",
          "A type of computer designed for project management tasks",
          "A website developer who specializes in project portals"
        ],
        "answer": "A department that centralizes and coordinates project management",
        "category": "Domain Review",
        "explanation": "PMOs provide standards, templates, and support.",
        "topic": "Business Environment"
      },
      {
        "id": "itil-found-q27",
        "question": "What is 'Program Management'?",
        "options": [
          "A hardware engineer who designs program architecture",
          "A type of software application for managing programs",
          "Managing a group of related projects to achieve benefits",
          "The act of writing many different computer programs"
        ],
        "answer": "Managing a group of related projects to achieve benefits",
        "category": "Domain Review",
        "explanation": "Programs deliver more value together than as separate projects.",
        "topic": "Business Environment"
      },
      {
        "id": "itil-found-q28",
        "question": "What is 'Change Management'?",
        "options": [
          "A process for managing changes to project scope or plan",
          "Buying new hardware for the development system",
          "Exchanging money from one currency to another",
          "Hiring new people to join the project team"
        ],
        "answer": "A process for managing changes to project scope or plan",
        "category": "Domain Review",
        "explanation": "It ensures changes are properly reviewed and approved.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q29",
        "question": "What is 'Earned Value Management' (EVM)?",
        "options": [
          "A software manual that explains how to use EVM tools",
          "A specific way to earn money through project tasks",
          "A technique to measure project performance and progress",
          "A type of store that sells project management tools"
        ],
        "answer": "A technique to measure project performance and progress",
        "category": "Domain Review",
        "explanation": "EVM integrates scope, schedule, and cost metrics.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q30",
        "question": "What is 'Project Governance'?",
        "options": [
          "A government agency responsible for project oversight",
          "A security guard responsible for project site safety",
          "A set of laws and regulations for managing projects",
          "The framework for project decision-making and oversight"
        ],
        "answer": "The framework for project decision-making and oversight",
        "category": "Domain Review",
        "explanation": "Governance ensures the project aligns with organizational goals.",
        "topic": "Business Environment"
      },
      {
        "id": "itil-found-q31",
        "question": "What is a 'Feature' in project management?",
        "options": [
          "A distinct functionality or capability of a product",
          "A network protocol designed for transmitting feature data",
          "A specific part of a movie that features a main character",
          "A type of computer code used for adding new functionalities"
        ],
        "answer": "A distinct functionality or capability of a product",
        "category": "Domain Review",
        "explanation": "Features are often broken down into user stories.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q32",
        "question": "What is 'Waterfall' methodology?",
        "options": [
          "A beautiful natural scenery with water",
          "A fast-paced and highly iterative project",
          "A sequential project management process",
          "A type of high-pressure plumbing system"
        ],
        "answer": "A sequential project management process",
        "category": "Domain Review",
        "explanation": "Work flows through distinct phases like requirements, design, and testing.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q33",
        "question": "What is a 'Product Backlog'?",
        "options": [
          "A detailed list of all software bugs found in a product",
          "A large physical storage room for keeping product parts",
          "A prioritized list of everything that might be needed in a product",
          "A standard financial report on the annual product sales"
        ],
        "answer": "A prioritized list of everything that might be needed in a product",
        "category": "Domain Review",
        "explanation": "The backlog is constantly evolving and managed by the Product Owner.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q34",
        "question": "What is 'Agile' methodology?",
        "options": [
          "A set of strict rules for managing organizational tasks",
          "A type of competitive sport played by professional teams",
          "A very fast router designed for high-speed networks",
          "An iterative approach to project management and software development"
        ],
        "answer": "An iterative approach to project management and software development",
        "category": "Domain Review",
        "explanation": "Agile focuses on delivering value quickly and adapting to change.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q35",
        "question": "What is 'Six Sigma'?",
        "options": [
          "A computer game designed for training project teams",
          "A secure network protocol for transmitting project data",
          "A set of techniques for process improvement and quality control",
          "A specific type of math used for advanced calculations"
        ],
        "answer": "A set of techniques for process improvement and quality control",
        "category": "Domain Review",
        "explanation": "Six Sigma focuses on reducing defects and variability.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q36",
        "question": "What is a 'Story Point'?",
        "options": [
          "A network protocol designed for transmitting project data sets",
          "A specific part of a book that contains a narrative or tale",
          "A type of computer code used for project management tasks",
          "A unit of measure for expressing an estimate of the size of a user story"
        ],
        "answer": "A unit of measure for expressing an estimate of the size of a user story",
        "category": "Domain Review",
        "explanation": "Story points account for complexity, effort, and risk.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q37",
        "question": "What is an 'Epic'?",
        "options": [
          "A large body of work that can be broken down into many user stories",
          "A software manual that describes the entire system architecture",
          "A type of movie with a long duration and a very large budget",
          "A very long poem that tells a story of heroic deeds and events"
        ],
        "answer": "A large body of work that can be broken down into many user stories",
        "category": "Domain Review",
        "explanation": "Epics often span multiple sprints.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q38",
        "question": "What is 'Incremental Delivery'?",
        "options": [
          "A standard delivery truck for shipping consumer goods",
          "A standard software update designed to fix minor system bugs",
          "A type of storage device used for saving product archives",
          "Delivering a product in small, usable parts over time"
        ],
        "answer": "Delivering a product in small, usable parts over time",
        "category": "Domain Review",
        "explanation": "Incremental delivery allows for early feedback and value.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q39",
        "question": "What is a 'Milestone'?",
        "options": [
          "A large rock found on the side of a highway",
          "A significant point or event in a project",
          "A task that takes exactly one hour to finish",
          "A unit of distance used for long-range travel"
        ],
        "answer": "A significant point or event in a project",
        "category": "Domain Review",
        "explanation": "Milestones help track progress towards major goals.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q40",
        "question": "What is 'Risk Management'?",
        "options": [
          "A specific type of insurance for project management",
          "Avoiding all risks by not starting any new projects",
          "Identifying, assessing, and responding to project risks",
          "Taking many chances to achieve high project rewards"
        ],
        "answer": "Identifying, assessing, and responding to project risks",
        "category": "Domain Review",
        "explanation": "Management involves mitigation, transfer, acceptance, or avoidance.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q41",
        "question": "What is 'Backlog Grooming' (or Refinement)?",
        "options": [
          "A specific type of software bug found in the backlog",
          "A standard financial report on the state of the backlog",
          "Keeping the product backlog up to date and prioritized",
          "The act of cleaning a room and organizing all its items"
        ],
        "answer": "Keeping the product backlog up to date and prioritized",
        "category": "Domain Review",
        "explanation": "Grooming ensures the backlog is ready for planning.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q42",
        "question": "What is a 'WBS' (Work Breakdown Structure)?",
        "options": [
          "A financial report that lists all project costs",
          "A hierarchical decomposition of project work",
          "A specific type of high-performance computer",
          "A website builder for creating project portals"
        ],
        "answer": "A hierarchical decomposition of project work",
        "category": "Domain Review",
        "explanation": "WBS breaks a project down into manageable parts.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q43",
        "question": "What is a 'Burndown Chart'?",
        "options": [
          "A graphical representation of work remaining versus time",
          "A physical fire hazard in a project management office",
          "A standard financial report showing monthly project costs",
          "A type of database optimized for storing chart information"
        ],
        "answer": "A graphical representation of work remaining versus time",
        "category": "Domain Review",
        "explanation": "Burndown charts help teams track their progress during a sprint.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q44",
        "question": "What is a 'Sprint' in Scrum?",
        "options": [
          "A short meeting for the development team",
          "A time-boxed iteration (usually 1-4 weeks)",
          "A type of project that requires rapid delivery",
          "Running very fast towards a specific goal"
        ],
        "answer": "A time-boxed iteration (usually 1-4 weeks)",
        "category": "Domain Review",
        "explanation": "Work is completed and made ready for review within a sprint.",
        "topic": "Process"
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
        "explanation": "KPIs are measurable values that demonstrate how effectively a project is achieving objectives.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q46",
        "question": "What is 'Project Scope'?",
        "options": [
          "A type of telescope used for astronomical viewing",
          "The total budget allocated for a specific project",
          "The unique name given to a specific project task",
          "The work that must be performed to deliver a result"
        ],
        "answer": "The work that must be performed to deliver a result",
        "category": "Domain Review",
        "explanation": "Defining scope is essential to prevent uncontrolled changes.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q47",
        "question": "What is 'Velocity' in Agile?",
        "options": [
          "A measure of the amount of work a team can complete in a sprint",
          "A network protocol designed for fast data transmission",
          "A type of computer code used for measuring system speed",
          "The speed of a car traveling on a long highway journey"
        ],
        "answer": "A measure of the amount of work a team can complete in a sprint",
        "category": "Domain Review",
        "explanation": "Velocity helps in planning future sprints.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q48",
        "question": "What is 'Lean' project management?",
        "options": [
          "A fast-paced and highly efficient project methodology",
          "A small project that requires very few resources",
          "A specific type of physical exercise for project teams",
          "Focusing on maximizing value and minimizing waste"
        ],
        "answer": "Focusing on maximizing value and minimizing waste",
        "category": "Domain Review",
        "explanation": "Lean originated in manufacturing and is widely used in IT.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q49",
        "question": "What is a 'Sprint Retrospective'?",
        "options": [
          "A meeting to discuss how to improve the team's process",
          "A standard software update for project management applications",
          "A type of test designed to evaluate the team's performance",
          "The act of looking back in time to study historical events"
        ],
        "answer": "A meeting to discuss how to improve the team's process",
        "category": "Domain Review",
        "explanation": "The team identifies improvements for the next sprint.",
        "topic": "Process"
      },
      {
        "id": "itil-found-q50",
        "question": "What is 'Cost Baseline'?",
        "options": [
          "A low-cost project designed for small organizations and teams",
          "A standard financial report generated at the end of the year",
          "A type of database optimized for storing project budget data",
          "The approved version of the project budget, used to measure performance"
        ],
        "answer": "The approved version of the project budget, used to measure performance",
        "category": "Domain Review",
        "explanation": "The baseline includes all authorized expenses.",
        "topic": "Process"
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
        "title": "Hardware",
        "topics": [
          {
            "name": "What is 'KVM Switch'?",
            "detail": "KVM switches are used for managing server racks."
          },
          {
            "name": "What is 'Rack' in a data center?",
            "detail": "Server racks are usually 19 or 23 inches wide."
          },
          {
            "name": "What is 'Firmware'?",
            "detail": "Firmware is stored on hardware devices like routers and SSDs."
          },
          {
            "name": "What is a 'UPS' (Uninterruptible Power Supply)?",
            "detail": "UPS protects equipment from power outages and surges."
          },
          {
            "name": "What is 'HDD' (Hard Disk Drive)?",
            "detail": "HDDs offer larger capacities at a lower cost than SSDs."
          },
          {
            "name": "What is 'Blade Server'?",
            "detail": "Blade servers save space and improve energy efficiency."
          },
          {
            "name": "What is 'Clustering'?",
            "detail": "Clusters improve performance, scalability, and availability."
          },
          {
            "name": "What is 'PSU' (Power Supply Unit)?",
            "detail": "The PSU provides power to all computer components."
          },
          {
            "name": "What is 'Virtualization'?",
            "detail": "Virtualization allows running multiple independent systems on a single physical machine."
          },
          {
            "name": "What is 'CMOS Battery'?",
            "detail": "The CMOS battery maintains the date, time, and BIOS settings."
          },
          {
            "name": "What is 'UEFI'?",
            "detail": "UEFI provides a more advanced and secure boot environment."
          },
          {
            "name": "What is 'Failover'?",
            "detail": "Failover is crucial for high availability."
          },
          {
            "name": "What is 'RAID 1'?",
            "detail": "RAID 1 provides high fault tolerance by duplicating data."
          },
          {
            "name": "What is 'CPU' (Central Processing Unit)?",
            "detail": "The CPU is the 'brain' of the computer."
          },
          {
            "name": "What is 'Colocation'?",
            "detail": "Colocation provides professional infrastructure and connectivity."
          },
          {
            "name": "What is 'SSD' (Solid State Drive)?",
            "detail": "SSDs are much faster and more durable than traditional HDDs."
          },
          {
            "name": "What is 'BIOS Update'?",
            "detail": "BIOS updates can fix hardware compatibility issues."
          },
          {
            "name": "What is 'Mainframe'?",
            "detail": "Mainframes are still used in large-scale industries like banking."
          },
          {
            "name": "What is a 'Switch' in networking?",
            "detail": "Switches operate at the Data Link Layer (Layer 2)."
          },
          {
            "name": "What is 'RAID 5'?",
            "detail": "RAID 5 provides a good balance of performance and fault tolerance."
          },
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest operating systems."
          },
          {
            "name": "What is 'Form Factor'?",
            "detail": "Examples include ATX, Micro-ATX, and ITX."
          },
          {
            "name": "What is 'Motherboard'?",
            "detail": "The motherboard connects all other components together."
          },
          {
            "name": "What is a 'Server'?",
            "detail": "Common servers include web servers, mail servers, and database servers."
          },
          {
            "name": "What is 'RAID'?",
            "detail": "RAID uses multiple hard drives to provide data redundancy and/or improve performance."
          },
          {
            "name": "What is 'TPM' (Trusted Platform Module)?",
            "detail": "TPM is used for disk encryption and secure authentication."
          },
          {
            "name": "What is 'RAM' (Random Access Memory)?",
            "detail": "RAM is volatile, meaning data is lost when power is removed."
          },
          {
            "name": "What is 'Load Balancing'?",
            "detail": "Load balancing improves performance and availability."
          },
          {
            "name": "What does 'BIOS' stand for?",
            "detail": "BIOS is the firmware used to perform hardware initialization during the booting process."
          },
          {
            "name": "What is 'GPU' (Graphics Processing Unit)?",
            "detail": "GPUs are used for graphics rendering and scientific computing."
          },
          {
            "name": "What is a 'Router'?",
            "detail": "Routers operate at the Network Layer (Layer 3)."
          },
          {
            "name": "What is 'RAID 0'?",
            "detail": "RAID 0 improves speed but increases the risk of data loss."
          },
          {
            "name": "What is 'Data Center'?",
            "detail": "Data centers include redundant power, cooling, and security."
          }
        ]
      },
      {
        "title": "Operating Systems",
        "topics": [
          {
            "name": "What is 'SSH' (Secure Shell)?",
            "detail": "SSH is commonly used for remote login to Linux servers."
          },
          {
            "name": "What is 'SLA' (Service Level Agreement)?",
            "detail": "SLAs often include uptime guarantees and penalties."
          },
          {
            "name": "What is a 'MAC Address'?",
            "detail": "MAC addresses are physical addresses baked into hardware."
          },
          {
            "name": "What is 'Patch Management'?",
            "detail": "Patches fix bugs, improve performance, and close security holes."
          },
          {
            "name": "What is a 'Firewall'?",
            "detail": "Firewalls are the first line of defense in network security."
          },
          {
            "name": "What is 'Snapshot' in storage?",
            "detail": "Snapshots are often used for quick recovery and testing."
          },
          {
            "name": "What is 'Uptime'?",
            "detail": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure."
          },
          {
            "name": "What is 'Docker' used for?",
            "detail": "Docker packages apps and their dependencies into portable containers."
          },
          {
            "name": "What is 'Bash'?",
            "detail": "Bash is the default shell on many Linux distributions."
          },
          {
            "name": "What is 'Active Directory' (AD)?",
            "detail": "AD manages users, computers, and other objects in a network."
          },
          {
            "name": "What is 'VPN' (Virtual Private Network)?",
            "detail": "VPNs are used for secure remote access and privacy."
          },
          {
            "name": "What is 'Backup'?",
            "detail": "Backups are essential for data protection."
          },
          {
            "name": "What is 'Linux'?",
            "detail": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
          },
          {
            "name": "What is 'DHCP'?",
            "detail": "DHCP makes network management much easier."
          },
          {
            "name": "What is an 'IP Address'?",
            "detail": "IP addresses can be static or dynamic."
          },
          {
            "name": "What is 'Secure Boot'?",
            "detail": "Secure Boot protects against malware during the boot process."
          },
          {
            "name": "What is 'DNS' (Domain Name System)?",
            "detail": "DNS is often called the 'phonebook of the internet'."
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
          "A hardware device that forwards data packets between networks",
          "A simple hardware device that connects multiple computers in a hub",
          "A standard light switch found in a residential home for lighting"
        ],
        "answer": "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
        "category": "Domain Review",
        "explanation": "KVM switches are used for managing server racks.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q2",
        "question": "What is 'Rack' in a data center?",
        "options": [
          "A guard for hardware safety",
          "A simple wooden shelf for books",
          "A standardized frame for mounting IT equipment",
          "A type of data storage device"
        ],
        "answer": "A standardized frame for mounting IT equipment",
        "category": "Domain Review",
        "explanation": "Server racks are usually 19 or 23 inches wide.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q3",
        "question": "What is 'Firmware'?",
        "options": [
          "A specific class of computer software that provides low-level control for hardware",
          "A standard software update for a computer operating system",
          "A type of soft clothing worn during the winter season",
          "A type of storage device used for saving digital photos"
        ],
        "answer": "A specific class of computer software that provides low-level control for hardware",
        "category": "Domain Review",
        "explanation": "Firmware is stored on hardware devices like routers and SSDs.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q4",
        "question": "What is 'SSH' (Secure Shell)?",
        "options": [
          "A cryptographic network protocol for operating network services securely",
          "A hardware guard that protects the internal computer components",
          "A type of high-speed internet cable used for data transmission",
          "A very fast web browser for accessing secure online platforms"
        ],
        "answer": "A cryptographic network protocol for operating network services securely",
        "category": "Domain Review",
        "explanation": "SSH is commonly used for remote login to Linux servers.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q5",
        "question": "What is a 'UPS' (Uninterruptible Power Supply)?",
        "options": [
          "A device that provides emergency power when the main source fails",
          "A hardware guard that protects the computer power port",
          "A standard delivery service for shipping large packages",
          "A type of portable battery used for charging mobile phones"
        ],
        "answer": "A device that provides emergency power when the main source fails",
        "category": "Domain Review",
        "explanation": "UPS protects equipment from power outages and surges.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q6",
        "question": "What is 'SLA' (Service Level Agreement)?",
        "options": [
          "A contract that defines the expected level of service from a provider",
          "A hardware standard for maintaining consistency",
          "A high-ranking member of a royal or noble family",
          "A type of computer software used for agreement forms"
        ],
        "answer": "A contract that defines the expected level of service from a provider",
        "category": "Domain Review",
        "explanation": "SLAs often include uptime guarantees and penalties.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q7",
        "question": "What is a 'MAC Address'?",
        "options": [
          "A physical home address for receiving standard postal mail",
          "A unique identifier assigned to a network interface controller",
          "A unique phone number for making voice calls and texts",
          "A unique serial number assigned to a specific device"
        ],
        "answer": "A unique identifier assigned to a network interface controller",
        "category": "Domain Review",
        "explanation": "MAC addresses are physical addresses baked into hardware.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q8",
        "question": "What is 'HDD' (Hard Disk Drive)?",
        "options": [
          "A copy of data saved on a standard compact disc",
          "A data storage device that uses magnetic storage and rotating disks",
          "A standard update for a computer software application",
          "A type of cloud service for storing digital information"
        ],
        "answer": "A data storage device that uses magnetic storage and rotating disks",
        "category": "Domain Review",
        "explanation": "HDDs offer larger capacities at a lower cost than SSDs.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q9",
        "question": "What is 'Blade Server'?",
        "options": [
          "A simple mobile application for tracking server usage",
          "A standard server with sharp physical edges and corners",
          "A thin, modular server that fits into a specialized chassis",
          "A type of computer chip designed for mobile devices"
        ],
        "answer": "A thin, modular server that fits into a specialized chassis",
        "category": "Domain Review",
        "explanation": "Blade servers save space and improve energy efficiency.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q10",
        "question": "What is 'Patch Management'?",
        "options": [
          "A hardware guard that prevents physical access to ports",
          "A physical repair shop for fixing broken computer parts",
          "A type of permanent storage for large data archives",
          "The process of distributing and applying updates to software"
        ],
        "answer": "The process of distributing and applying updates to software",
        "category": "Domain Review",
        "explanation": "Patches fix bugs, improve performance, and close security holes.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q11",
        "question": "What is a 'Firewall'?",
        "options": [
          "A large physical wall made of bricks and mortar",
          "A network security system that monitors and controls traffic",
          "A standard hardware update for increasing speed",
          "A type of malicious virus that infects a computer"
        ],
        "answer": "A network security system that monitors and controls traffic",
        "category": "Domain Review",
        "explanation": "Firewalls are the first line of defense in network security.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q12",
        "question": "What is 'Clustering'?",
        "options": [
          "A hardware update for increasing server processing speed",
          "A large group of people standing close to each other",
          "A type of database optimized for grouping data sets",
          "Connecting multiple servers to work together as a single system"
        ],
        "answer": "Connecting multiple servers to work together as a single system",
        "category": "Domain Review",
        "explanation": "Clusters improve performance, scalability, and availability.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q13",
        "question": "What is 'PSU' (Power Supply Unit)?",
        "options": [
          "A device that converts mains AC to low-voltage regulated DC power",
          "A hardware guard that protects the computer power port",
          "A standard update for a computer software application",
          "A type of portable battery for charging mobile devices"
        ],
        "answer": "A device that converts mains AC to low-voltage regulated DC power",
        "category": "Domain Review",
        "explanation": "The PSU provides power to all computer components.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q14",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real using advanced graphics",
          "Storing digital data on a physical USB flash drive",
          "Using a VR headset for immersive digital experiences"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q15",
        "question": "What is 'CMOS Battery'?",
        "options": [
          "A battery that powers the CMOS memory when the computer is off",
          "A hardware guard that protects the internal battery",
          "A large battery used for powering electric vehicles",
          "A type of storage device for saving computer settings"
        ],
        "answer": "A battery that powers the CMOS memory when the computer is off",
        "category": "Domain Review",
        "explanation": "The CMOS battery maintains the date, time, and BIOS settings.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q16",
        "question": "What is 'UEFI'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A software update for the computer BIOS system",
          "A type of high-speed local area network connection",
          "The modern replacement for the traditional BIOS"
        ],
        "answer": "The modern replacement for the traditional BIOS",
        "category": "Domain Review",
        "explanation": "UEFI provides a more advanced and secure boot environment.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q17",
        "question": "What is 'Failover'?",
        "options": [
          "A complete failure of a project to meet its objectives",
          "A hardware warranty that covers component repair",
          "A standard software bug that causes a crash",
          "Automatically switching to a redundant or standby system upon failure"
        ],
        "answer": "Automatically switching to a redundant or standby system upon failure",
        "category": "Domain Review",
        "explanation": "Failover is crucial for high availability.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q18",
        "question": "What is 'Snapshot' in storage?",
        "options": [
          "A copy of a system or data at a specific point in time",
          "A digital photograph taken with a standard camera",
          "A hardware upgrade for increasing computer memory",
          "A type of high-speed storage for active data files"
        ],
        "answer": "A copy of a system or data at a specific point in time",
        "category": "Domain Review",
        "explanation": "Snapshots are often used for quick recovery and testing.",
        "topic": "Operating Systems"
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
        "explanation": "RAID 1 provides high fault tolerance by duplicating data.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q20",
        "question": "What is 'Uptime'?",
        "options": [
          "A hardware warranty that covers component repair",
          "A specific type of high-speed network connection",
          "The act of waking up in the morning for work",
          "The amount of time a system or service is operational"
        ],
        "answer": "The amount of time a system or service is operational",
        "category": "Domain Review",
        "explanation": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q21",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing digital photos for web use",
          "Hosting a database on a local server",
          "Scanning for viruses on a computer"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q22",
        "question": "What is 'CPU' (Central Processing Unit)?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A type of high-resolution monitor for displaying graphics",
          "The electronic circuitry that executes instructions of a computer program"
        ],
        "answer": "The electronic circuitry that executes instructions of a computer program",
        "category": "Domain Review",
        "explanation": "The CPU is the 'brain' of the computer.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q23",
        "question": "What is 'Bash'?",
        "options": [
          "A Unix shell and command language",
          "A physical hardware component inside a computer case",
          "A type of database used for storing shell scripts",
          "The act of hitting a computer with a heavy object"
        ],
        "answer": "A Unix shell and command language",
        "category": "Domain Review",
        "explanation": "Bash is the default shell on many Linux distributions.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q24",
        "question": "What is 'Active Directory' (AD)?",
        "options": [
          "A directory service for Windows domain networks",
          "A physical phone book with names and numbers",
          "A simple list of files stored in a local folder",
          "A type of network firewall for blocking traffic"
        ],
        "answer": "A directory service for Windows domain networks",
        "category": "Domain Review",
        "explanation": "AD manages users, computers, and other objects in a network.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q25",
        "question": "What is 'Colocation'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A large physical building with many different office rooms",
          "Hiring many tenants to manage your data center infrastructure",
          "Renting space for your servers in a third-party data center"
        ],
        "answer": "Renting space for your servers in a third-party data center",
        "category": "Domain Review",
        "explanation": "Colocation provides professional infrastructure and connectivity.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q26",
        "question": "What is 'VPN' (Virtual Private Network)?",
        "options": [
          "A high-speed internet connection for fast data transfers",
          "A service that creates a safe, encrypted connection over a less secure network",
          "A standard private network used within a small organization",
          "A type of cloud-based storage service for saving files"
        ],
        "answer": "A service that creates a safe, encrypted connection over a less secure network",
        "category": "Domain Review",
        "explanation": "VPNs are used for secure remote access and privacy.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q27",
        "question": "What is 'SSD' (Solid State Drive)?",
        "options": [
          "A copy of data saved on a standard compact disc",
          "A standard update for a computer software application",
          "A storage device that uses integrated circuits for data storage",
          "A type of cloud service for storing digital information"
        ],
        "answer": "A storage device that uses integrated circuits for data storage",
        "category": "Domain Review",
        "explanation": "SSDs are much faster and more durable than traditional HDDs.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q28",
        "question": "What is 'BIOS Update'?",
        "options": [
          "A standard software update for apps",
          "Buying a brand new personal computer",
          "Cleaning a physical disk with a cloth",
          "Updating the firmware on the motherboard"
        ],
        "answer": "Updating the firmware on the motherboard",
        "category": "Domain Review",
        "explanation": "BIOS updates can fix hardware compatibility issues.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q29",
        "question": "What is 'Mainframe'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A large, powerful computer used for high-volume data processing",
          "A standardized frame for mounting servers and equipment",
          "A type of network cable used for high-speed transmission"
        ],
        "answer": "A large, powerful computer used for high-volume data processing",
        "category": "Domain Review",
        "explanation": "Mainframes are still used in large-scale industries like banking.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q30",
        "question": "What is 'Backup'?",
        "options": [
          "A copy of data stored in a separate location for recovery",
          "A reverse gear in a vehicle used for moving backwards",
          "A standard update for a computer software application",
          "A type of primary storage device for active data sets"
        ],
        "answer": "A copy of data stored in a separate location for recovery",
        "category": "Domain Review",
        "explanation": "Backups are essential for data protection.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q31",
        "question": "What is a 'Switch' in networking?",
        "options": [
          "A device that connects devices on a computer network using packet switching",
          "A device that connects multiple computers in a hub",
          "A device that forwards data packets between networks",
          "A standard light switch found in a residential home"
        ],
        "answer": "A device that connects devices on a computer network using packet switching",
        "category": "Domain Review",
        "explanation": "Switches operate at the Data Link Layer (Layer 2).",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q32",
        "question": "What is 'Linux'?",
        "options": [
          "A specific type of computer hardware part",
          "A standard operating system from Microsoft",
          "A web browser used for accessing the web",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q33",
        "question": "What is 'RAID 5'?",
        "options": [
          "A standard type of backup for recovering data sets",
          "Mirroring data across two different hard drives",
          "Striping data and parity across three or more disks",
          "Using five different disks for maximum data storage"
        ],
        "answer": "Striping data and parity across three or more disks",
        "category": "Domain Review",
        "explanation": "RAID 5 provides a good balance of performance and fault tolerance.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q34",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall for data centers",
          "A type of network cable for data transfer",
          "A very fast processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q35",
        "question": "What is 'Form Factor'?",
        "options": [
          "A manual that explains how to use software",
          "A type of computer code used for data forms",
          "A warranty that covers computer hardware",
          "The physical size and shape of a computer component"
        ],
        "answer": "The physical size and shape of a computer component",
        "category": "Domain Review",
        "explanation": "Examples include ATX, Micro-ATX, and ITX.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q36",
        "question": "What is 'Motherboard'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A type of high-resolution monitor for displaying graphics",
          "The main printed circuit board in general-purpose computers"
        ],
        "answer": "The main printed circuit board in general-purpose computers",
        "category": "Domain Review",
        "explanation": "The motherboard connects all other components together.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q37",
        "question": "What is a 'Server'?",
        "options": [
          "A computer or system that provides resources or services to other computers",
          "A network cable used for transmitting data between computers",
          "A professional waiter working in a busy city center restaurant",
          "A type of high-resolution monitor used for displaying data"
        ],
        "answer": "A computer or system that provides resources or services to other computers",
        "category": "Domain Review",
        "explanation": "Common servers include web servers, mail servers, and database servers.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q38",
        "question": "What is 'DHCP'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A protocol for automatically assigning IP addresses to devices",
          "A secure login page for accessing restricted systems",
          "A type of network cable used for high-speed transmission"
        ],
        "answer": "A protocol for automatically assigning IP addresses to devices",
        "category": "Domain Review",
        "explanation": "DHCP makes network management much easier.",
        "topic": "Operating Systems"
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
        "explanation": "RAID uses multiple hard drives to provide data redundancy and/or improve performance.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q40",
        "question": "What is 'TPM' (Trusted Platform Module)?",
        "options": [
          "A hardware guard that protects the physical ports of a computer system",
          "A software update designed to improve the security of the operating system",
          "A specialized chip on a device that provides hardware-level security",
          "A type of software application used for data encryption on a computer"
        ],
        "answer": "A specialized chip on a device that provides hardware-level security",
        "category": "Domain Review",
        "explanation": "TPM is used for disk encryption and secure authentication.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q41",
        "question": "What is an 'IP Address'?",
        "options": [
          "A physical home address for receiving standard postal mail",
          "A unique phone number for making voice calls and texts",
          "A unique serial number assigned to a specific device",
          "A unique string of numbers that identifies each computer on a network"
        ],
        "answer": "A unique string of numbers that identifies each computer on a network",
        "category": "Domain Review",
        "explanation": "IP addresses can be static or dynamic.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q42",
        "question": "What is 'RAM' (Random Access Memory)?",
        "options": [
          "A copy of data saved on a physical USB flash drive",
          "A form of computer memory that can be read and changed in any order",
          "A standard update for a computer software application",
          "A type of permanent storage device for large data sets"
        ],
        "answer": "A form of computer memory that can be read and changed in any order",
        "category": "Domain Review",
        "explanation": "RAM is volatile, meaning data is lost when power is removed.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q43",
        "question": "What is 'Load Balancing'?",
        "options": [
          "A hardware upgrade designed for increasing memory",
          "A type of high-capacity storage device for backups",
          "A very large and heavy computer server in a rack",
          "Distributing network or application traffic across multiple servers"
        ],
        "answer": "Distributing network or application traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancing improves performance and availability.",
        "topic": "Hardware"
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
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q45",
        "question": "What is 'GPU' (Graphics Processing Unit)?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A specialized electronic circuit designed to accelerate image creation",
          "A type of high-resolution monitor for displaying graphics"
        ],
        "answer": "A specialized electronic circuit designed to accelerate image creation",
        "category": "Domain Review",
        "explanation": "GPUs are used for graphics rendering and scientific computing.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q46",
        "question": "What is 'Secure Boot'?",
        "options": [
          "A hardware guard that protects the internal components of a computer",
          "A security standard that ensures a device boots using only trusted software",
          "A standard password required to access a personal computer system",
          "A type of antivirus software designed to scan for malware"
        ],
        "answer": "A security standard that ensures a device boots using only trusted software",
        "category": "Domain Review",
        "explanation": "Secure Boot protects against malware during the boot process.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q47",
        "question": "What is 'DNS' (Domain Name System)?",
        "options": [
          "A physical phone book containing names and numbers",
          "A secure network protocol for transmitting data",
          "A type of storage device used for data backups",
          "The system that translates domain names into IP addresses"
        ],
        "answer": "The system that translates domain names into IP addresses",
        "category": "Domain Review",
        "explanation": "DNS is often called the 'phonebook of the internet'.",
        "topic": "Operating Systems"
      },
      {
        "id": "linux-plus-q48",
        "question": "What is a 'Router'?",
        "options": [
          "A device that connects devices on a local area network",
          "A device that forwards data packets between computer networks",
          "A device that regenerates signals for long distance",
          "A simple device that connects multiple computers in a hub"
        ],
        "answer": "A device that forwards data packets between computer networks",
        "category": "Domain Review",
        "explanation": "Routers operate at the Network Layer (Layer 3).",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q49",
        "question": "What is 'RAID 0'?",
        "options": [
          "A single physical hard disk used for storing digital files",
          "A standard type of backup used for disaster recovery plans",
          "A very secure raid configuration for high-value data sets",
          "Striping data across disks for performance with no redundancy"
        ],
        "answer": "Striping data across disks for performance with no redundancy",
        "category": "Domain Review",
        "explanation": "RAID 0 improves speed but increases the risk of data loss.",
        "topic": "Hardware"
      },
      {
        "id": "linux-plus-q50",
        "question": "What is 'Data Center'?",
        "options": [
          "A facility used to house computer systems and associated components",
          "A hardware guard that protects the main entrance of a room",
          "A small office room containing a few computer servers",
          "A type of storage device used for saving digital archives"
        ],
        "answer": "A facility used to house computer systems and associated components",
        "category": "Domain Review",
        "explanation": "Data centers include redundant power, cooling, and security.",
        "topic": "Hardware"
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
        "title": "Hardware",
        "topics": [
          {
            "name": "What is 'UEFI'?",
            "detail": "UEFI provides a more advanced and secure boot environment."
          },
          {
            "name": "What is 'Clustering'?",
            "detail": "Clusters improve performance, scalability, and availability."
          },
          {
            "name": "What is 'Virtualization'?",
            "detail": "Virtualization allows running multiple independent systems on a single physical machine."
          },
          {
            "name": "What is 'Failover'?",
            "detail": "Failover is crucial for high availability."
          },
          {
            "name": "What is 'RAM' (Random Access Memory)?",
            "detail": "RAM is volatile, meaning data is lost when power is removed."
          },
          {
            "name": "What is 'Colocation'?",
            "detail": "Colocation provides professional infrastructure and connectivity."
          },
          {
            "name": "What is 'CMOS Battery'?",
            "detail": "The CMOS battery maintains the date, time, and BIOS settings."
          },
          {
            "name": "What is a 'Hypervisor'?",
            "detail": "Hypervisors manage the physical resources for multiple guest operating systems."
          },
          {
            "name": "What is 'TPM' (Trusted Platform Module)?",
            "detail": "TPM is used for disk encryption and secure authentication."
          },
          {
            "name": "What is 'PSU' (Power Supply Unit)?",
            "detail": "The PSU provides power to all computer components."
          },
          {
            "name": "What is 'Firmware'?",
            "detail": "Firmware is stored on hardware devices like routers and SSDs."
          },
          {
            "name": "What is 'KVM Switch'?",
            "detail": "KVM switches are used for managing server racks."
          },
          {
            "name": "What is 'Form Factor'?",
            "detail": "Examples include ATX, Micro-ATX, and ITX."
          },
          {
            "name": "What is a 'Switch' in networking?",
            "detail": "Switches operate at the Data Link Layer (Layer 2)."
          },
          {
            "name": "What is 'RAID'?",
            "detail": "RAID uses multiple hard drives to provide data redundancy and/or improve performance."
          },
          {
            "name": "What is 'Mainframe'?",
            "detail": "Mainframes are still used in large-scale industries like banking."
          },
          {
            "name": "What does 'BIOS' stand for?",
            "detail": "BIOS is the firmware used to perform hardware initialization during the booting process."
          },
          {
            "name": "What is 'Motherboard'?",
            "detail": "The motherboard connects all other components together."
          },
          {
            "name": "What is 'RAID 1'?",
            "detail": "RAID 1 provides high fault tolerance by duplicating data."
          },
          {
            "name": "What is 'Data Center'?",
            "detail": "Data centers include redundant power, cooling, and security."
          },
          {
            "name": "What is 'Rack' in a data center?",
            "detail": "Server racks are usually 19 or 23 inches wide."
          },
          {
            "name": "What is 'GPU' (Graphics Processing Unit)?",
            "detail": "GPUs are used for graphics rendering and scientific computing."
          },
          {
            "name": "What is 'CPU' (Central Processing Unit)?",
            "detail": "The CPU is the 'brain' of the computer."
          },
          {
            "name": "What is 'SSD' (Solid State Drive)?",
            "detail": "SSDs are much faster and more durable than traditional HDDs."
          },
          {
            "name": "What is 'Blade Server'?",
            "detail": "Blade servers save space and improve energy efficiency."
          },
          {
            "name": "What is 'Load Balancing'?",
            "detail": "Load balancing improves performance and availability."
          },
          {
            "name": "What is a 'UPS' (Uninterruptible Power Supply)?",
            "detail": "UPS protects equipment from power outages and surges."
          },
          {
            "name": "What is a 'Server'?",
            "detail": "Common servers include web servers, mail servers, and database servers."
          },
          {
            "name": "What is 'RAID 5'?",
            "detail": "RAID 5 provides a good balance of performance and fault tolerance."
          },
          {
            "name": "What is 'RAID 0'?",
            "detail": "RAID 0 improves speed but increases the risk of data loss."
          },
          {
            "name": "What is 'BIOS Update'?",
            "detail": "BIOS updates can fix hardware compatibility issues."
          },
          {
            "name": "What is a 'Router'?",
            "detail": "Routers operate at the Network Layer (Layer 3)."
          },
          {
            "name": "What is 'HDD' (Hard Disk Drive)?",
            "detail": "HDDs offer larger capacities at a lower cost than SSDs."
          }
        ]
      },
      {
        "title": "Operating Systems",
        "topics": [
          {
            "name": "What is 'SLA' (Service Level Agreement)?",
            "detail": "SLAs often include uptime guarantees and penalties."
          },
          {
            "name": "What is a 'MAC Address'?",
            "detail": "MAC addresses are physical addresses baked into hardware."
          },
          {
            "name": "What is 'VPN' (Virtual Private Network)?",
            "detail": "VPNs are used for secure remote access and privacy."
          },
          {
            "name": "What is 'Patch Management'?",
            "detail": "Patches fix bugs, improve performance, and close security holes."
          },
          {
            "name": "What is 'SSH' (Secure Shell)?",
            "detail": "SSH is commonly used for remote login to Linux servers."
          },
          {
            "name": "What is 'Bash'?",
            "detail": "Bash is the default shell on many Linux distributions."
          },
          {
            "name": "What is 'DNS' (Domain Name System)?",
            "detail": "DNS is often called the 'phonebook of the internet'."
          },
          {
            "name": "What is 'DHCP'?",
            "detail": "DHCP makes network management much easier."
          },
          {
            "name": "What is 'Downtime'?",
            "detail": "Downtime can result in lost revenue and reputation."
          },
          {
            "name": "What is 'Uptime'?",
            "detail": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure."
          },
          {
            "name": "What is 'Secure Boot'?",
            "detail": "Secure Boot protects against malware during the boot process."
          },
          {
            "name": "What is a 'Firewall'?",
            "detail": "Firewalls are the first line of defense in network security."
          },
          {
            "name": "What is 'Backup'?",
            "detail": "Backups are essential for data protection."
          },
          {
            "name": "What is 'Docker' used for?",
            "detail": "Docker packages apps and their dependencies into portable containers."
          },
          {
            "name": "What is 'Linux'?",
            "detail": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS."
          },
          {
            "name": "What is an 'IP Address'?",
            "detail": "IP addresses can be static or dynamic."
          },
          {
            "name": "What is 'Snapshot' in storage?",
            "detail": "Snapshots are often used for quick recovery and testing."
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
          "A hardware standard for maintaining consistency",
          "A high-ranking member of a royal or noble family",
          "A type of computer software used for agreement forms"
        ],
        "answer": "A contract that defines the expected level of service from a provider",
        "category": "Domain Review",
        "explanation": "SLAs often include uptime guarantees and penalties.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q2",
        "question": "What is a 'MAC Address'?",
        "options": [
          "A physical home address for receiving standard postal mail",
          "A unique identifier assigned to a network interface controller",
          "A unique phone number for making voice calls and texts",
          "A unique serial number assigned to a specific device"
        ],
        "answer": "A unique identifier assigned to a network interface controller",
        "category": "Domain Review",
        "explanation": "MAC addresses are physical addresses baked into hardware.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q3",
        "question": "What is 'UEFI'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A software update for the computer BIOS system",
          "A type of high-speed local area network connection",
          "The modern replacement for the traditional BIOS"
        ],
        "answer": "The modern replacement for the traditional BIOS",
        "category": "Domain Review",
        "explanation": "UEFI provides a more advanced and secure boot environment.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q4",
        "question": "What is 'Clustering'?",
        "options": [
          "A hardware update for increasing server processing speed",
          "A large group of people standing close to each other",
          "A type of database optimized for grouping data sets",
          "Connecting multiple servers to work together as a single system"
        ],
        "answer": "Connecting multiple servers to work together as a single system",
        "category": "Domain Review",
        "explanation": "Clusters improve performance, scalability, and availability.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q5",
        "question": "What is 'VPN' (Virtual Private Network)?",
        "options": [
          "A high-speed internet connection for fast data transfers",
          "A service that creates a safe, encrypted connection over a less secure network",
          "A standard private network used within a small organization",
          "A type of cloud-based storage service for saving files"
        ],
        "answer": "A service that creates a safe, encrypted connection over a less secure network",
        "category": "Domain Review",
        "explanation": "VPNs are used for secure remote access and privacy.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q6",
        "question": "What is 'Virtualization'?",
        "options": [
          "Creating virtual versions of hardware or OS",
          "Making a website look real using advanced graphics",
          "Storing digital data on a physical USB flash drive",
          "Using a VR headset for immersive digital experiences"
        ],
        "answer": "Creating virtual versions of hardware or OS",
        "category": "Domain Review",
        "explanation": "Virtualization allows running multiple independent systems on a single physical machine.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q7",
        "question": "What is 'Failover'?",
        "options": [
          "A complete failure of a project to meet its objectives",
          "A hardware warranty that covers component repair",
          "A standard software bug that causes a crash",
          "Automatically switching to a redundant or standby system upon failure"
        ],
        "answer": "Automatically switching to a redundant or standby system upon failure",
        "category": "Domain Review",
        "explanation": "Failover is crucial for high availability.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q8",
        "question": "What is 'RAM' (Random Access Memory)?",
        "options": [
          "A copy of data saved on a physical USB flash drive",
          "A form of computer memory that can be read and changed in any order",
          "A standard update for a computer software application",
          "A type of permanent storage device for large data sets"
        ],
        "answer": "A form of computer memory that can be read and changed in any order",
        "category": "Domain Review",
        "explanation": "RAM is volatile, meaning data is lost when power is removed.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q9",
        "question": "What is 'Patch Management'?",
        "options": [
          "A hardware guard that prevents physical access to ports",
          "A physical repair shop for fixing broken computer parts",
          "A type of permanent storage for large data archives",
          "The process of distributing and applying updates to software"
        ],
        "answer": "The process of distributing and applying updates to software",
        "category": "Domain Review",
        "explanation": "Patches fix bugs, improve performance, and close security holes.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q10",
        "question": "What is 'Colocation'?",
        "options": [
          "A large cloud-based service for storing organizational data",
          "A large physical building with many different office rooms",
          "Hiring many tenants to manage your data center infrastructure",
          "Renting space for your servers in a third-party data center"
        ],
        "answer": "Renting space for your servers in a third-party data center",
        "category": "Domain Review",
        "explanation": "Colocation provides professional infrastructure and connectivity.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q11",
        "question": "What is 'SSH' (Secure Shell)?",
        "options": [
          "A cryptographic network protocol for operating network services securely",
          "A hardware guard that protects the internal computer components",
          "A type of high-speed internet cable used for data transmission",
          "A very fast web browser for accessing secure online platforms"
        ],
        "answer": "A cryptographic network protocol for operating network services securely",
        "category": "Domain Review",
        "explanation": "SSH is commonly used for remote login to Linux servers.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q12",
        "question": "What is 'CMOS Battery'?",
        "options": [
          "A battery that powers the CMOS memory when the computer is off",
          "A hardware guard that protects the internal battery",
          "A large battery used for powering electric vehicles",
          "A type of storage device for saving computer settings"
        ],
        "answer": "A battery that powers the CMOS memory when the computer is off",
        "category": "Domain Review",
        "explanation": "The CMOS battery maintains the date, time, and BIOS settings.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q13",
        "question": "What is a 'Hypervisor'?",
        "options": [
          "A high-security firewall for data centers",
          "A type of network cable for data transfer",
          "A very fast processor for high-end gaming",
          "Software that creates and runs virtual machines"
        ],
        "answer": "Software that creates and runs virtual machines",
        "category": "Domain Review",
        "explanation": "Hypervisors manage the physical resources for multiple guest operating systems.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q14",
        "question": "What is 'Bash'?",
        "options": [
          "A Unix shell and command language",
          "A physical hardware component inside a computer case",
          "A type of database used for storing shell scripts",
          "The act of hitting a computer with a heavy object"
        ],
        "answer": "A Unix shell and command language",
        "category": "Domain Review",
        "explanation": "Bash is the default shell on many Linux distributions.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q15",
        "question": "What is 'TPM' (Trusted Platform Module)?",
        "options": [
          "A hardware guard that protects the physical ports of a computer system",
          "A software update designed to improve the security of the operating system",
          "A specialized chip on a device that provides hardware-level security",
          "A type of software application used for data encryption on a computer"
        ],
        "answer": "A specialized chip on a device that provides hardware-level security",
        "category": "Domain Review",
        "explanation": "TPM is used for disk encryption and secure authentication.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q16",
        "question": "What is 'PSU' (Power Supply Unit)?",
        "options": [
          "A device that converts mains AC to low-voltage regulated DC power",
          "A hardware guard that protects the computer power port",
          "A standard update for a computer software application",
          "A type of portable battery for charging mobile devices"
        ],
        "answer": "A device that converts mains AC to low-voltage regulated DC power",
        "category": "Domain Review",
        "explanation": "The PSU provides power to all computer components.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q17",
        "question": "What is 'Firmware'?",
        "options": [
          "A specific class of computer software that provides low-level control for hardware",
          "A standard software update for a computer operating system",
          "A type of soft clothing worn during the winter season",
          "A type of storage device used for saving digital photos"
        ],
        "answer": "A specific class of computer software that provides low-level control for hardware",
        "category": "Domain Review",
        "explanation": "Firmware is stored on hardware devices like routers and SSDs.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q18",
        "question": "What is 'KVM Switch'?",
        "options": [
          "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
          "A hardware device that forwards data packets between networks",
          "A simple hardware device that connects multiple computers in a hub",
          "A standard light switch found in a residential home for lighting"
        ],
        "answer": "A hardware device that allows controlling multiple computers from one keyboard/video/mouse",
        "category": "Domain Review",
        "explanation": "KVM switches are used for managing server racks.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q19",
        "question": "What is 'Form Factor'?",
        "options": [
          "A manual that explains how to use software",
          "A type of computer code used for data forms",
          "A warranty that covers computer hardware",
          "The physical size and shape of a computer component"
        ],
        "answer": "The physical size and shape of a computer component",
        "category": "Domain Review",
        "explanation": "Examples include ATX, Micro-ATX, and ITX.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q20",
        "question": "What is a 'Switch' in networking?",
        "options": [
          "A device that connects devices on a computer network using packet switching",
          "A device that connects multiple computers in a hub",
          "A device that forwards data packets between networks",
          "A standard light switch found in a residential home"
        ],
        "answer": "A device that connects devices on a computer network using packet switching",
        "category": "Domain Review",
        "explanation": "Switches operate at the Data Link Layer (Layer 2).",
        "topic": "Hardware"
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
        "explanation": "RAID uses multiple hard drives to provide data redundancy and/or improve performance.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q22",
        "question": "What is 'Mainframe'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A large, powerful computer used for high-volume data processing",
          "A standardized frame for mounting servers and equipment",
          "A type of network cable used for high-speed transmission"
        ],
        "answer": "A large, powerful computer used for high-volume data processing",
        "category": "Domain Review",
        "explanation": "Mainframes are still used in large-scale industries like banking.",
        "topic": "Hardware"
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
        "explanation": "BIOS is the firmware used to perform hardware initialization during the booting process.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q24",
        "question": "What is 'DNS' (Domain Name System)?",
        "options": [
          "A physical phone book containing names and numbers",
          "A secure network protocol for transmitting data",
          "A type of storage device used for data backups",
          "The system that translates domain names into IP addresses"
        ],
        "answer": "The system that translates domain names into IP addresses",
        "category": "Domain Review",
        "explanation": "DNS is often called the 'phonebook of the internet'.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q25",
        "question": "What is 'Motherboard'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A type of high-resolution monitor for displaying graphics",
          "The main printed circuit board in general-purpose computers"
        ],
        "answer": "The main printed circuit board in general-purpose computers",
        "category": "Domain Review",
        "explanation": "The motherboard connects all other components together.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q26",
        "question": "What is 'DHCP'?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A protocol for automatically assigning IP addresses to devices",
          "A secure login page for accessing restricted systems",
          "A type of network cable used for high-speed transmission"
        ],
        "answer": "A protocol for automatically assigning IP addresses to devices",
        "category": "Domain Review",
        "explanation": "DHCP makes network management much easier.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q27",
        "question": "What is 'Downtime'?",
        "options": [
          "A slow network connection that delays data",
          "A standard software update for computer apps",
          "The act of going to sleep at the end of the day",
          "The period during which a system or service is unavailable"
        ],
        "answer": "The period during which a system or service is unavailable",
        "category": "Domain Review",
        "explanation": "Downtime can result in lost revenue and reputation.",
        "topic": "Operating Systems"
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
        "explanation": "RAID 1 provides high fault tolerance by duplicating data.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q29",
        "question": "What is 'Data Center'?",
        "options": [
          "A facility used to house computer systems and associated components",
          "A hardware guard that protects the main entrance of a room",
          "A small office room containing a few computer servers",
          "A type of storage device used for saving digital archives"
        ],
        "answer": "A facility used to house computer systems and associated components",
        "category": "Domain Review",
        "explanation": "Data centers include redundant power, cooling, and security.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q30",
        "question": "What is 'Rack' in a data center?",
        "options": [
          "A guard for hardware safety",
          "A simple wooden shelf for books",
          "A standardized frame for mounting IT equipment",
          "A type of data storage device"
        ],
        "answer": "A standardized frame for mounting IT equipment",
        "category": "Domain Review",
        "explanation": "Server racks are usually 19 or 23 inches wide.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q31",
        "question": "What is 'GPU' (Graphics Processing Unit)?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A specialized electronic circuit designed to accelerate image creation",
          "A type of high-resolution monitor for displaying graphics"
        ],
        "answer": "A specialized electronic circuit designed to accelerate image creation",
        "category": "Domain Review",
        "explanation": "GPUs are used for graphics rendering and scientific computing.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q32",
        "question": "What is 'Uptime'?",
        "options": [
          "A hardware warranty that covers component repair",
          "A specific type of high-speed network connection",
          "The act of waking up in the morning for work",
          "The amount of time a system or service is operational"
        ],
        "answer": "The amount of time a system or service is operational",
        "category": "Domain Review",
        "explanation": "High uptime (e.g., 99.999%) is a major goal for IT infrastructure.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q33",
        "question": "What is 'CPU' (Central Processing Unit)?",
        "options": [
          "A hardware guard that protects the internal computer parts",
          "A network cable used for transmitting data between systems",
          "A type of high-resolution monitor for displaying graphics",
          "The electronic circuitry that executes instructions of a computer program"
        ],
        "answer": "The electronic circuitry that executes instructions of a computer program",
        "category": "Domain Review",
        "explanation": "The CPU is the 'brain' of the computer.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q34",
        "question": "What is 'SSD' (Solid State Drive)?",
        "options": [
          "A copy of data saved on a standard compact disc",
          "A standard update for a computer software application",
          "A storage device that uses integrated circuits for data storage",
          "A type of cloud service for storing digital information"
        ],
        "answer": "A storage device that uses integrated circuits for data storage",
        "category": "Domain Review",
        "explanation": "SSDs are much faster and more durable than traditional HDDs.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q35",
        "question": "What is 'Blade Server'?",
        "options": [
          "A simple mobile application for tracking server usage",
          "A standard server with sharp physical edges and corners",
          "A thin, modular server that fits into a specialized chassis",
          "A type of computer chip designed for mobile devices"
        ],
        "answer": "A thin, modular server that fits into a specialized chassis",
        "category": "Domain Review",
        "explanation": "Blade servers save space and improve energy efficiency.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q36",
        "question": "What is 'Secure Boot'?",
        "options": [
          "A hardware guard that protects the internal components of a computer",
          "A security standard that ensures a device boots using only trusted software",
          "A standard password required to access a personal computer system",
          "A type of antivirus software designed to scan for malware"
        ],
        "answer": "A security standard that ensures a device boots using only trusted software",
        "category": "Domain Review",
        "explanation": "Secure Boot protects against malware during the boot process.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q37",
        "question": "What is a 'Firewall'?",
        "options": [
          "A large physical wall made of bricks and mortar",
          "A network security system that monitors and controls traffic",
          "A standard hardware update for increasing speed",
          "A type of malicious virus that infects a computer"
        ],
        "answer": "A network security system that monitors and controls traffic",
        "category": "Domain Review",
        "explanation": "Firewalls are the first line of defense in network security.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q38",
        "question": "What is 'Backup'?",
        "options": [
          "A copy of data stored in a separate location for recovery",
          "A reverse gear in a vehicle used for moving backwards",
          "A standard update for a computer software application",
          "A type of primary storage device for active data sets"
        ],
        "answer": "A copy of data stored in a separate location for recovery",
        "category": "Domain Review",
        "explanation": "Backups are essential for data protection.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q39",
        "question": "What is 'Load Balancing'?",
        "options": [
          "A hardware upgrade designed for increasing memory",
          "A type of high-capacity storage device for backups",
          "A very large and heavy computer server in a rack",
          "Distributing network or application traffic across multiple servers"
        ],
        "answer": "Distributing network or application traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancing improves performance and availability.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q40",
        "question": "What is a 'UPS' (Uninterruptible Power Supply)?",
        "options": [
          "A device that provides emergency power when the main source fails",
          "A hardware guard that protects the computer power port",
          "A standard delivery service for shipping large packages",
          "A type of portable battery used for charging mobile phones"
        ],
        "answer": "A device that provides emergency power when the main source fails",
        "category": "Domain Review",
        "explanation": "UPS protects equipment from power outages and surges.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q41",
        "question": "What is a 'Server'?",
        "options": [
          "A computer or system that provides resources or services to other computers",
          "A network cable used for transmitting data between computers",
          "A professional waiter working in a busy city center restaurant",
          "A type of high-resolution monitor used for displaying data"
        ],
        "answer": "A computer or system that provides resources or services to other computers",
        "category": "Domain Review",
        "explanation": "Common servers include web servers, mail servers, and database servers.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q42",
        "question": "What is 'RAID 5'?",
        "options": [
          "A standard type of backup for recovering data sets",
          "Mirroring data across two different hard drives",
          "Striping data and parity across three or more disks",
          "Using five different disks for maximum data storage"
        ],
        "answer": "Striping data and parity across three or more disks",
        "category": "Domain Review",
        "explanation": "RAID 5 provides a good balance of performance and fault tolerance.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q43",
        "question": "What is 'Docker' used for?",
        "options": [
          "Containerization of applications",
          "Editing digital photos for web use",
          "Hosting a database on a local server",
          "Scanning for viruses on a computer"
        ],
        "answer": "Containerization of applications",
        "category": "Domain Review",
        "explanation": "Docker packages apps and their dependencies into portable containers.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q44",
        "question": "What is 'RAID 0'?",
        "options": [
          "A single physical hard disk used for storing digital files",
          "A standard type of backup used for disaster recovery plans",
          "A very secure raid configuration for high-value data sets",
          "Striping data across disks for performance with no redundancy"
        ],
        "answer": "Striping data across disks for performance with no redundancy",
        "category": "Domain Review",
        "explanation": "RAID 0 improves speed but increases the risk of data loss.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q45",
        "question": "What is 'BIOS Update'?",
        "options": [
          "A standard software update for apps",
          "Buying a brand new personal computer",
          "Cleaning a physical disk with a cloth",
          "Updating the firmware on the motherboard"
        ],
        "answer": "Updating the firmware on the motherboard",
        "category": "Domain Review",
        "explanation": "BIOS updates can fix hardware compatibility issues.",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q46",
        "question": "What is a 'Router'?",
        "options": [
          "A device that connects devices on a local area network",
          "A device that forwards data packets between computer networks",
          "A device that regenerates signals for long distance",
          "A simple device that connects multiple computers in a hub"
        ],
        "answer": "A device that forwards data packets between computer networks",
        "category": "Domain Review",
        "explanation": "Routers operate at the Network Layer (Layer 3).",
        "topic": "Hardware"
      },
      {
        "id": "terraform-assoc-q47",
        "question": "What is 'Linux'?",
        "options": [
          "A specific type of computer hardware part",
          "A standard operating system from Microsoft",
          "A web browser used for accessing the web",
          "An open-source operating system kernel"
        ],
        "answer": "An open-source operating system kernel",
        "category": "Domain Review",
        "explanation": "Linux is the foundation for many popular operating systems like Ubuntu and CentOS.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q48",
        "question": "What is an 'IP Address'?",
        "options": [
          "A physical home address for receiving standard postal mail",
          "A unique phone number for making voice calls and texts",
          "A unique serial number assigned to a specific device",
          "A unique string of numbers that identifies each computer on a network"
        ],
        "answer": "A unique string of numbers that identifies each computer on a network",
        "category": "Domain Review",
        "explanation": "IP addresses can be static or dynamic.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q49",
        "question": "What is 'Snapshot' in storage?",
        "options": [
          "A copy of a system or data at a specific point in time",
          "A digital photograph taken with a standard camera",
          "A hardware upgrade for increasing computer memory",
          "A type of high-speed storage for active data files"
        ],
        "answer": "A copy of a system or data at a specific point in time",
        "category": "Domain Review",
        "explanation": "Snapshots are often used for quick recovery and testing.",
        "topic": "Operating Systems"
      },
      {
        "id": "terraform-assoc-q50",
        "question": "What is 'HDD' (Hard Disk Drive)?",
        "options": [
          "A copy of data saved on a standard compact disc",
          "A data storage device that uses magnetic storage and rotating disks",
          "A standard update for a computer software application",
          "A type of cloud service for storing digital information"
        ],
        "answer": "A data storage device that uses magnetic storage and rotating disks",
        "category": "Domain Review",
        "explanation": "HDDs offer larger capacities at a lower cost than SSDs.",
        "topic": "Hardware"
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
            "name": "What is 'Classification' in ML?",
            "detail": "Example: Predicting if an email is spam."
          },
          {
            "name": "What is 'Big Data'?",
            "detail": "Big Data is characterized by Volume, Velocity, and Variety."
          },
          {
            "name": "What is 'Data Cleansing'?",
            "detail": "Cleansing is essential for accurate analysis."
          },
          {
            "name": "What is 'Semi-Structured Data'?",
            "detail": "Examples include XML and JSON."
          },
          {
            "name": "What is 'Unsupervised Learning'?",
            "detail": "Examples include clustering and association."
          },
          {
            "name": "What is 'Reinforcement Learning'?",
            "detail": "RL is used in robotics and game playing."
          },
          {
            "name": "What is 'NoSQL'?",
            "detail": "NoSQL databases are often used for big data and real-time web apps."
          },
          {
            "name": "What is 'Data Governance'?",
            "detail": "Governance ensures data is accurate and trustworthy."
          },
          {
            "name": "What is a 'Data Scientist'?",
            "detail": "Data scientists combine skills in statistics, coding, and domain knowledge."
          },
          {
            "name": "What is 'Spark' (Apache Spark)?",
            "detail": "Spark is much faster than the older MapReduce."
          },
          {
            "name": "What is 'Big Data Analytics'?",
            "detail": "Analytics provides insights that can lead to better business decisions."
          },
          {
            "name": "What is 'Artificial Intelligence'?",
            "detail": "AI encompasses machine learning, robotics, and natural language processing."
          },
          {
            "name": "What is 'Data Lake'?",
            "detail": "Data lakes can store data as-is, without first structuring it."
          },
          {
            "name": "What is 'Generative AI'?",
            "detail": "Examples include ChatGPT and Midjourney."
          },
          {
            "name": "What is 'Clustering' in ML?",
            "detail": "Clustering is an unsupervised learning technique."
          },
          {
            "name": "What is 'Cloud Database'?",
            "detail": "Cloud databases are highly scalable and managed."
          },
          {
            "name": "What is 'Test Data'?",
            "detail": "Test data must be separate from training data."
          },
          {
            "name": "What is 'Primary Key' in a database?",
            "detail": "The primary key cannot be null and must be unique."
          },
          {
            "name": "What is 'Explainable AI' (XAI)?",
            "detail": "XAI is important for trust and accountability."
          },
          {
            "name": "What is 'ETL'?",
            "detail": "ETL is the process of moving data from source systems to a data warehouse."
          },
          {
            "name": "What is 'Predictive Analytics'?",
            "detail": "Predictive models help in decision-making."
          },
          {
            "name": "What is 'Regression' in ML?",
            "detail": "Example: Predicting a house price."
          },
          {
            "name": "What is an 'Artificial Neural Network'?",
            "detail": "Neural networks are the foundation of deep learning."
          },
          {
            "name": "What is 'Business Intelligence' (BI)?",
            "detail": "BI provides historical, current, and predictive views of operations."
          },
          {
            "name": "What is 'SQL'?",
            "detail": "SQL is the standard language for managing and querying relational databases."
          },
          {
            "name": "What is 'Unstructured Data'?",
            "detail": "Examples include text, images, and videos."
          },
          {
            "name": "What is 'Deep Learning'?",
            "detail": "Deep learning is inspired by the structure and function of the human brain."
          },
          {
            "name": "What is 'Training Data'?",
            "detail": "Quality and quantity of training data are critical."
          },
          {
            "name": "What is 'Data Warehouse'?",
            "detail": "Warehouses consolidate data from multiple sources."
          },
          {
            "name": "What is 'Natural Language Processing' (NLP)?",
            "detail": "NLP is used in translation, sentiment analysis, and chatbots."
          },
          {
            "name": "What is 'Data Mining'?",
            "detail": "Data mining uses ML, statistics, and database systems."
          },
          {
            "name": "What is 'Data Integration'?",
            "detail": "Integration is a major challenge in large organizations."
          },
          {
            "name": "What is 'Foreign Key' in a database?",
            "detail": "Foreign keys create relationships between tables."
          },
          {
            "name": "What is 'Overfitting'?",
            "detail": "Overfitted models lack generalizability."
          },
          {
            "name": "What is 'Structured Data'?",
            "detail": "Structured data is easily searchable (e.g., in a database)."
          },
          {
            "name": "What is 'Database Index'?",
            "detail": "Indexes make queries much faster but slow down writes."
          },
          {
            "name": "What is an 'Algorithm'?",
            "detail": "Algorithms are the foundation of computer programs and ML models."
          },
          {
            "name": "What is 'Normalizaton' in a database?",
            "detail": "Normalization involves dividing large tables into smaller ones."
          },
          {
            "name": "What is 'Database Management System' (DBMS)?",
            "detail": "Examples include MySQL, PostgreSQL, and Oracle Database."
          },
          {
            "name": "What is 'Data Mart'?",
            "detail": "Data marts are often used by a specific department (e.g., Finance)."
          },
          {
            "name": "What is 'Supervised Learning'?",
            "detail": "The model learns to map inputs to the correct outputs."
          },
          {
            "name": "What is 'Data Visualization'?",
            "detail": "Visualization helps in understanding trends, outliers, and patterns."
          },
          {
            "name": "What is 'Hadoop'?",
            "detail": "Hadoop is a core technology in the big data ecosystem."
          },
          {
            "name": "What is 'Bias' in AI?",
            "detail": "Bias can arise from flawed training data or algorithms."
          },
          {
            "name": "What is 'Denormalization'?",
            "detail": "Denormalization is often used in data warehouses."
          },
          {
            "name": "What is 'Model' in ML?",
            "detail": "A model is 'trained' on data to make predictions."
          },
          {
            "name": "What is 'Machine Learning'?",
            "detail": "ML uses statistical techniques to give computers the ability to 'learn' from data."
          },
          {
            "name": "What is 'Underfitting'?",
            "detail": "Underfitted models have poor performance on both training and test data."
          },
          {
            "name": "What is 'Computer Vision'?",
            "detail": "Computer vision is used in facial recognition and autonomous vehicles."
          },
          {
            "name": "What is a 'Relational Database'?",
            "detail": "RDBMS (like SQL) use structured relationships between tables."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "dp-900-q1",
        "question": "What is 'Classification' in ML?",
        "options": [
          "A network protocol for discrete labels",
          "A type of computer code for labeled data",
          "Predicting a discrete label or category",
          "The act of sorting things in a database"
        ],
        "answer": "Predicting a discrete label or category",
        "category": "Domain Review",
        "explanation": "Example: Predicting if an email is spam.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q2",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image with many pixels",
          "A long list of names and contact addresses",
          "A very heavy and large computer hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q3",
        "question": "What is 'Data Cleansing'?",
        "options": [
          "A software manual that explains how to clean data",
          "A type of computer code used for cleaning data",
          "Identifying and correcting errors or inconsistencies in data",
          "The act of physically washing a computer or server"
        ],
        "answer": "Identifying and correcting errors or inconsistencies in data",
        "category": "Domain Review",
        "explanation": "Cleansing is essential for accurate analysis.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q4",
        "question": "What is 'Semi-Structured Data'?",
        "options": [
          "A financial report that is only partially completed by the user",
          "A partially built house with some completed rooms but no solid foundation",
          "A type of computer code used for semi-organized data sets and files",
          "Data that does not reside in a relational database but has organizational properties"
        ],
        "answer": "Data that does not reside in a relational database but has organizational properties",
        "category": "Domain Review",
        "explanation": "Examples include XML and JSON.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q5",
        "question": "What is 'Unsupervised Learning'?",
        "options": [
          "A network protocol designed for pattern recognition",
          "A type of computer code used for hidden patterns",
          "Learning a subject without any teacher or instructor",
          "Training a model on unlabeled data to find hidden patterns"
        ],
        "answer": "Training a model on unlabeled data to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Examples include clustering and association.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q6",
        "question": "What is 'Reinforcement Learning'?",
        "options": [
          "A network protocol designed for penalty distribution",
          "A type of computer code used for reward systems",
          "Being very strict with an AI model during training",
          "Training a model through rewards and penalties"
        ],
        "answer": "Training a model through rewards and penalties",
        "category": "Domain Review",
        "explanation": "RL is used in robotics and game playing.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q7",
        "question": "What is 'NoSQL'?",
        "options": [
          "A financial report with details on annual revenue",
          "A non-relational database for storing diverse data types",
          "A standard database with no SQL support at all",
          "A type of computer code for data encryption"
        ],
        "answer": "A non-relational database for storing diverse data types",
        "category": "Domain Review",
        "explanation": "NoSQL databases are often used for big data and real-time web apps.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q8",
        "question": "What is 'Data Governance'?",
        "options": [
          "A government agency responsible for data protection",
          "A security guard responsible for physical data safety",
          "A set of laws and regulations regarding data privacy",
          "Managing the availability, usability, integrity, and security of data"
        ],
        "answer": "Managing the availability, usability, integrity, and security of data",
        "category": "Domain Review",
        "explanation": "Governance ensures data is accurate and trustworthy.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q9",
        "question": "What is a 'Data Scientist'?",
        "options": [
          "A person who designs and builds computer hardware",
          "A person who develops and maintains complex websites",
          "A person who teaches advanced mathematics in a school",
          "A person who uses scientific methods and data to find insights"
        ],
        "answer": "A person who uses scientific methods and data to find insights",
        "category": "Domain Review",
        "explanation": "Data scientists combine skills in statistics, coding, and domain knowledge.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q10",
        "question": "What is 'Spark' (Apache Spark)?",
        "options": [
          "A physical fire hazard in a data center environment",
          "A simple mobile app used for tracking data usage",
          "A type of computer chip designed for fast processing",
          "An open-source distributed processing system used for big data workloads"
        ],
        "answer": "An open-source distributed processing system used for big data workloads",
        "category": "Domain Review",
        "explanation": "Spark is much faster than the older MapReduce.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q11",
        "question": "What is 'Big Data Analytics'?",
        "options": [
          "A software update designed to improve system performance",
          "A type of cloud service used for storing large files",
          "A very large spreadsheet with millions of rows of data",
          "The process of examining large and varied data sets to find hidden patterns"
        ],
        "answer": "The process of examining large and varied data sets to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Analytics provides insights that can lead to better business decisions.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q12",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster that can connect to the web",
          "A virtual reality game with high graphics",
          "An advanced calculator for complex math",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q13",
        "question": "What is 'Data Lake'?",
        "options": [
          "A centralized repository that allows you to store all your structured and unstructured data",
          "A hardware guard that protects the data lake server environment from physical access",
          "A large natural lake filled with fresh or salt water for swimming and fishing",
          "A type of physical storage device used for saving and managing large data archives"
        ],
        "answer": "A centralized repository that allows you to store all your structured and unstructured data",
        "category": "Domain Review",
        "explanation": "Data lakes can store data as-is, without first structuring it.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q14",
        "question": "What is 'Generative AI'?",
        "options": [
          "A simple mobile app designed for AI content creation",
          "A type of computer chip used for artificial intelligence",
          "AI that can create new content like text, images, or music",
          "AI that generates electrical power for a data center"
        ],
        "answer": "AI that can create new content like text, images, or music",
        "category": "Domain Review",
        "explanation": "Examples include ChatGPT and Midjourney.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q15",
        "question": "What is 'Clustering' in ML?",
        "options": [
          "A group of people standing close together",
          "A hardware update for data clusters",
          "A type of database for grouped data",
          "Grouping similar data points together"
        ],
        "answer": "Grouping similar data points together",
        "category": "Domain Review",
        "explanation": "Clustering is an unsupervised learning technique.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q16",
        "question": "What is 'Cloud Database'?",
        "options": [
          "A database service built and accessed through a cloud platform",
          "A database stored on a physical USB flash drive",
          "A database that is available for everyone to use",
          "A simple text file stored in a cloud storage service"
        ],
        "answer": "A database service built and accessed through a cloud platform",
        "category": "Domain Review",
        "explanation": "Cloud databases are highly scalable and managed.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q17",
        "question": "What is 'Test Data'?",
        "options": [
          "A network protocol designed for data evaluation",
          "A type of computer code used for model testing",
          "A type of school exam or test for students",
          "The data used to evaluate the performance of an ML model"
        ],
        "answer": "The data used to evaluate the performance of an ML model",
        "category": "Domain Review",
        "explanation": "Test data must be separate from training data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q18",
        "question": "What is 'Primary Key' in a database?",
        "options": [
          "A physical metal key used for opening a locked safe",
          "A secret password used to access a secured database",
          "A unique identifier for each record in a table",
          "The most important key used to unlock a physical door"
        ],
        "answer": "A unique identifier for each record in a table",
        "category": "Domain Review",
        "explanation": "The primary key cannot be null and must be unique.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q19",
        "question": "What is 'Explainable AI' (XAI)?",
        "options": [
          "A book or novel about the future of artificial intelligence",
          "A software manual explaining AI system operations",
          "A type of AI system that speaks multiple languages",
          "AI systems that can explain their decisions and actions to humans"
        ],
        "answer": "AI systems that can explain their decisions and actions to humans",
        "category": "Domain Review",
        "explanation": "XAI is important for trust and accountability.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q20",
        "question": "What is 'ETL'?",
        "options": [
          "Electronic Transfer Ledger (ETL)",
          "Email, Transfer, Link (ETL)",
          "Extra Tool Link (ETL)",
          "Extract, Transform, Load (ETL)"
        ],
        "answer": "Extract, Transform, Load (ETL)",
        "category": "Domain Review",
        "explanation": "ETL is the process of moving data from source systems to a data warehouse.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q21",
        "question": "What is 'Predictive Analytics'?",
        "options": [
          "A financial report that lists all past company outcomes",
          "A type of database optimized for historical predictive data",
          "The act of guessing the future based on intuition alone",
          "Using data, statistics, and ML to identify the likelihood of future outcomes"
        ],
        "answer": "Using data, statistics, and ML to identify the likelihood of future outcomes",
        "category": "Domain Review",
        "explanation": "Predictive models help in decision-making.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q22",
        "question": "What is 'Regression' in ML?",
        "options": [
          "A network protocol for continuous values",
          "A type of computer code for numerical data",
          "Predicting a continuous numerical value",
          "The act of going backwards in an ML model"
        ],
        "answer": "Predicting a continuous numerical value",
        "category": "Domain Review",
        "explanation": "Example: Predicting a house price.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q23",
        "question": "What is an 'Artificial Neural Network'?",
        "options": [
          "A computing system inspired by biological neural networks",
          "A hardware guard that protects neural data from theft",
          "A physical brain inside a highly advanced robotic system",
          "A type of high-speed network cable for data centers"
        ],
        "answer": "A computing system inspired by biological neural networks",
        "category": "Domain Review",
        "explanation": "Neural networks are the foundation of deep learning.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q24",
        "question": "What is 'Business Intelligence' (BI)?",
        "options": [
          "A set of cognitive abilities used for general problem solving",
          "A standard financial report generated at the end of the year",
          "A type of cloud-based service used for general data storage",
          "Strategies and technologies used for data analysis of business info"
        ],
        "answer": "Strategies and technologies used for data analysis of business info",
        "category": "Domain Review",
        "explanation": "BI provides historical, current, and predictive views of operations.",
        "topic": "Data & AI Fundamentals"
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
        "explanation": "SQL is the standard language for managing and querying relational databases.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q26",
        "question": "What is 'Unstructured Data'?",
        "options": [
          "A financial report with no clear structure or layout",
          "A messy and unorganized room with many items",
          "A type of computer code used for unorganized data",
          "Data that does not have a predefined model or organization"
        ],
        "answer": "Data that does not have a predefined model or organization",
        "category": "Domain Review",
        "explanation": "Examples include text, images, and videos.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q27",
        "question": "What is 'Deep Learning'?",
        "options": [
          "A hardware update designed for deep computational tasks",
          "A subset of ML based on artificial neural networks",
          "A type of database optimized for storing neural data",
          "The act of studying a subject very hard for an exam"
        ],
        "answer": "A subset of ML based on artificial neural networks",
        "category": "Domain Review",
        "explanation": "Deep learning is inspired by the structure and function of the human brain.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q28",
        "question": "What is 'Training Data'?",
        "options": [
          "A gym for computers to get faster",
          "A network protocol for data sets",
          "A type of code for training data",
          "The data used to train an ML model"
        ],
        "answer": "The data used to train an ML model",
        "category": "Domain Review",
        "explanation": "Quality and quantity of training data are critical.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q29",
        "question": "What is 'Data Warehouse'?",
        "options": [
          "A hardware guard that protects the server room",
          "A large physical building used for housing servers",
          "A system used for reporting and data analysis",
          "A type of storage device used for data backups"
        ],
        "answer": "A system used for reporting and data analysis",
        "category": "Domain Review",
        "explanation": "Warehouses consolidate data from multiple sources.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q30",
        "question": "What is 'Natural Language Processing' (NLP)?",
        "options": [
          "A network protocol designed for natural language data",
          "A type of computer code used for natural speech patterns",
          "The ability of computers to understand and process human language",
          "The act of speaking very fast to improve data processing"
        ],
        "answer": "The ability of computers to understand and process human language",
        "category": "Domain Review",
        "explanation": "NLP is used in translation, sentiment analysis, and chatbots.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q31",
        "question": "What is 'Data Mining'?",
        "options": [
          "A software update designed to fix minor system bugs",
          "A type of database used for storing patterns of data",
          "Discovering patterns and knowledge from large amounts of data",
          "The act of digging for gold in a natural gold mine"
        ],
        "answer": "Discovering patterns and knowledge from large amounts of data",
        "category": "Domain Review",
        "explanation": "Data mining uses ML, statistics, and database systems.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q32",
        "question": "What is 'Data Integration'?",
        "options": [
          "A network protocol designed for unified data views",
          "A type of computer code used for data integration",
          "Combining data from different sources into a single, unified view",
          "The simple act of putting different things together"
        ],
        "answer": "Combining data from different sources into a single, unified view",
        "category": "Domain Review",
        "explanation": "Integration is a major challenge in large organizations.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q33",
        "question": "What is 'Foreign Key' in a database?",
        "options": [
          "A field in one table that uniquely identifies a row of another table",
          "A hardware standard for connecting database servers",
          "A physical key from another country or organization",
          "A type of computer code used for database encryption"
        ],
        "answer": "A field in one table that uniquely identifies a row of another table",
        "category": "Domain Review",
        "explanation": "Foreign keys create relationships between tables.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q34",
        "question": "What is 'Overfitting'?",
        "options": [
          "A hardware failure that occurs due to overheating components",
          "A standard software bug that causes an application to crash",
          "The act of wearing small and tight clothes during a workout",
          "When a model learns the training data too well but fails on new data"
        ],
        "answer": "When a model learns the training data too well but fails on new data",
        "category": "Domain Review",
        "explanation": "Overfitted models lack generalizability.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q35",
        "question": "What is 'Structured Data'?",
        "options": [
          "A financial report containing company performance data",
          "A type of computer code used for data modeling",
          "A well-built and sturdy house with many rooms",
          "Data that adheres to a predefined schema or model"
        ],
        "answer": "Data that adheres to a predefined schema or model",
        "category": "Domain Review",
        "explanation": "Structured data is easily searchable (e.g., in a database).",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q36",
        "question": "What is 'Database Index'?",
        "options": [
          "A data structure that improves the speed of data retrieval",
          "A list of files stored in a database directory",
          "A software manual that describes database structures",
          "A type of storage device used for indexing data"
        ],
        "answer": "A data structure that improves the speed of data retrieval",
        "category": "Domain Review",
        "explanation": "Indexes make queries much faster but slow down writes.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q37",
        "question": "What is an 'Algorithm'?",
        "options": [
          "A computer game designed for teaching mathematical concepts",
          "A hardware standard for maintaining consistency in calculations",
          "A set of rules or instructions to be followed in calculations",
          "A unique type of music or rhythmic composition for listening"
        ],
        "answer": "A set of rules or instructions to be followed in calculations",
        "category": "Domain Review",
        "explanation": "Algorithms are the foundation of computer programs and ML models.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q38",
        "question": "What is 'Normalizaton' in a database?",
        "options": [
          "A hardware standard for maintaining data consistency",
          "A type of computer code used for data normalization",
          "Organizing data to reduce redundancy and improve integrity",
          "The state of being very normal in a database environment"
        ],
        "answer": "Organizing data to reduce redundancy and improve integrity",
        "category": "Domain Review",
        "explanation": "Normalization involves dividing large tables into smaller ones.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q39",
        "question": "What is 'Database Management System' (DBMS)?",
        "options": [
          "A physical phone book containing names and numbers",
          "A software manual that explains how to use a database",
          "A type of storage device used for backing up data",
          "Software that interacts with end users, applications, and the database"
        ],
        "answer": "Software that interacts with end users, applications, and the database",
        "category": "Domain Review",
        "explanation": "Examples include MySQL, PostgreSQL, and Oracle Database.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q40",
        "question": "What is 'Data Mart'?",
        "options": [
          "A physical store or marketplace for buying and selling data",
          "A small-scale data warehouse focused on a single functional area",
          "A software update designed for data mart management",
          "A type of storage device used for departmental data"
        ],
        "answer": "A small-scale data warehouse focused on a single functional area",
        "category": "Domain Review",
        "explanation": "Data marts are often used by a specific department (e.g., Finance).",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q41",
        "question": "What is 'Supervised Learning'?",
        "options": [
          "A network protocol for models",
          "A type of computer code for data",
          "Learning a subject with a teacher",
          "Training a model on labeled data"
        ],
        "answer": "Training a model on labeled data",
        "category": "Domain Review",
        "explanation": "The model learns to map inputs to the correct outputs.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q42",
        "question": "What is 'Data Visualization'?",
        "options": [
          "A graphical representation of information and data",
          "A network cable used for transmitting large data sets",
          "A type of high-resolution monitor for displaying data",
          "The act of looking at raw data in a text-based format"
        ],
        "answer": "A graphical representation of information and data",
        "category": "Domain Review",
        "explanation": "Visualization helps in understanding trends, outliers, and patterns.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q43",
        "question": "What is 'Hadoop'?",
        "options": [
          "A hardware manufacturer that produces storage devices",
          "A type of computer designed for high-performance computing",
          "A website developer who specializes in big data applications",
          "An open-source framework for distributed storage and processing of big data"
        ],
        "answer": "An open-source framework for distributed storage and processing of big data",
        "category": "Domain Review",
        "explanation": "Hadoop is a core technology in the big data ecosystem.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q44",
        "question": "What is 'Bias' in AI?",
        "options": [
          "A network protocol designed for transmitting biased data sets",
          "A strong personal opinion about a specific subject or topic",
          "A type of computer code used for model weight adjustments",
          "When a model produces systematically prejudiced results"
        ],
        "answer": "When a model produces systematically prejudiced results",
        "category": "Domain Review",
        "explanation": "Bias can arise from flawed training data or algorithms.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q45",
        "question": "What is 'Denormalization'?",
        "options": [
          "A hardware standard for maintaining equipment consistency",
          "A type of computer code used for data entry procedures",
          "Adding redundant data to improve read performance",
          "The state of being very strange in a professional environment"
        ],
        "answer": "Adding redundant data to improve read performance",
        "category": "Domain Review",
        "explanation": "Denormalization is often used in data warehouses.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q46",
        "question": "What is 'Model' in ML?",
        "options": [
          "A mathematical representation of a real-world process",
          "A software manual that explains how an ML model works",
          "A specific type of clothing worn by a person",
          "A tiny scale model of a car or other vehicle"
        ],
        "answer": "A mathematical representation of a real-world process",
        "category": "Domain Review",
        "explanation": "A model is 'trained' on data to make predictions.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q47",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human being",
          "A very large database stored on a server",
          "Algorithms that learn patterns from data sets",
          "An automated car with no human driver"
        ],
        "answer": "Algorithms that learn patterns from data sets",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q48",
        "question": "What is 'Underfitting'?",
        "options": [
          "A hardware failure that occurs due to overheating components",
          "A standard software bug that causes an application to crash",
          "The act of wearing large and baggy clothes during a workout",
          "When a model is too simple to learn the patterns in data"
        ],
        "answer": "When a model is too simple to learn the patterns in data",
        "category": "Domain Review",
        "explanation": "Underfitted models have poor performance on both training and test data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q49",
        "question": "What is 'Computer Vision'?",
        "options": [
          "A hardware guard that protects the computer's optical sensors",
          "A type of monitor that can see the user in front of it",
          "The ability of computers to gain understanding from digital images or videos",
          "The act of wearing glasses to improve human vision of screens"
        ],
        "answer": "The ability of computers to gain understanding from digital images or videos",
        "category": "Domain Review",
        "explanation": "Computer vision is used in facial recognition and autonomous vehicles.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "dp-900-q50",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images stored on a local computer",
          "A list of contacts stored in a mobile phone",
          "A single large text file with unstructured data",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables.",
        "topic": "Data & AI Fundamentals"
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
            "name": "What is 'Clustering' in ML?",
            "detail": "Clustering is an unsupervised learning technique."
          },
          {
            "name": "What is 'Regression' in ML?",
            "detail": "Example: Predicting a house price."
          },
          {
            "name": "What is 'Generative AI'?",
            "detail": "Examples include ChatGPT and Midjourney."
          },
          {
            "name": "What is 'Data Mining'?",
            "detail": "Data mining uses ML, statistics, and database systems."
          },
          {
            "name": "What is 'Deep Learning'?",
            "detail": "Deep learning is inspired by the structure and function of the human brain."
          },
          {
            "name": "What is 'NoSQL'?",
            "detail": "NoSQL databases are often used for big data and real-time web apps."
          },
          {
            "name": "What is 'Predictive Analytics'?",
            "detail": "Predictive models help in decision-making."
          },
          {
            "name": "What is 'ETL'?",
            "detail": "ETL is the process of moving data from source systems to a data warehouse."
          },
          {
            "name": "What is 'Test Data'?",
            "detail": "Test data must be separate from training data."
          },
          {
            "name": "What is 'Data Warehouse'?",
            "detail": "Warehouses consolidate data from multiple sources."
          },
          {
            "name": "What is 'Bias' in AI?",
            "detail": "Bias can arise from flawed training data or algorithms."
          },
          {
            "name": "What is 'Semi-Structured Data'?",
            "detail": "Examples include XML and JSON."
          },
          {
            "name": "What is 'Unstructured Data'?",
            "detail": "Examples include text, images, and videos."
          },
          {
            "name": "What is 'Big Data Analytics'?",
            "detail": "Analytics provides insights that can lead to better business decisions."
          },
          {
            "name": "What is 'Model' in ML?",
            "detail": "A model is 'trained' on data to make predictions."
          },
          {
            "name": "What is 'Foreign Key' in a database?",
            "detail": "Foreign keys create relationships between tables."
          },
          {
            "name": "What is 'Artificial Intelligence'?",
            "detail": "AI encompasses machine learning, robotics, and natural language processing."
          },
          {
            "name": "What is 'Data Cleansing'?",
            "detail": "Cleansing is essential for accurate analysis."
          },
          {
            "name": "What is 'Training Data'?",
            "detail": "Quality and quantity of training data are critical."
          },
          {
            "name": "What is 'Business Intelligence' (BI)?",
            "detail": "BI provides historical, current, and predictive views of operations."
          },
          {
            "name": "What is 'Data Mart'?",
            "detail": "Data marts are often used by a specific department (e.g., Finance)."
          },
          {
            "name": "What is 'Machine Learning'?",
            "detail": "ML uses statistical techniques to give computers the ability to 'learn' from data."
          },
          {
            "name": "What is 'Database Index'?",
            "detail": "Indexes make queries much faster but slow down writes."
          },
          {
            "name": "What is 'Big Data'?",
            "detail": "Big Data is characterized by Volume, Velocity, and Variety."
          },
          {
            "name": "What is 'SQL'?",
            "detail": "SQL is the standard language for managing and querying relational databases."
          },
          {
            "name": "What is 'Data Governance'?",
            "detail": "Governance ensures data is accurate and trustworthy."
          },
          {
            "name": "What is 'Data Lake'?",
            "detail": "Data lakes can store data as-is, without first structuring it."
          },
          {
            "name": "What is 'Database Management System' (DBMS)?",
            "detail": "Examples include MySQL, PostgreSQL, and Oracle Database."
          },
          {
            "name": "What is 'Reinforcement Learning'?",
            "detail": "RL is used in robotics and game playing."
          },
          {
            "name": "What is 'Denormalization'?",
            "detail": "Denormalization is often used in data warehouses."
          },
          {
            "name": "What is 'Natural Language Processing' (NLP)?",
            "detail": "NLP is used in translation, sentiment analysis, and chatbots."
          },
          {
            "name": "What is 'Unsupervised Learning'?",
            "detail": "Examples include clustering and association."
          },
          {
            "name": "What is 'Supervised Learning'?",
            "detail": "The model learns to map inputs to the correct outputs."
          },
          {
            "name": "What is an 'Algorithm'?",
            "detail": "Algorithms are the foundation of computer programs and ML models."
          },
          {
            "name": "What is 'Data Integration'?",
            "detail": "Integration is a major challenge in large organizations."
          },
          {
            "name": "What is 'Primary Key' in a database?",
            "detail": "The primary key cannot be null and must be unique."
          },
          {
            "name": "What is 'Cloud Database'?",
            "detail": "Cloud databases are highly scalable and managed."
          },
          {
            "name": "What is 'Hadoop'?",
            "detail": "Hadoop is a core technology in the big data ecosystem."
          },
          {
            "name": "What is 'Data Visualization'?",
            "detail": "Visualization helps in understanding trends, outliers, and patterns."
          },
          {
            "name": "What is 'Structured Data'?",
            "detail": "Structured data is easily searchable (e.g., in a database)."
          },
          {
            "name": "What is 'Computer Vision'?",
            "detail": "Computer vision is used in facial recognition and autonomous vehicles."
          },
          {
            "name": "What is an 'Artificial Neural Network'?",
            "detail": "Neural networks are the foundation of deep learning."
          },
          {
            "name": "What is 'Classification' in ML?",
            "detail": "Example: Predicting if an email is spam."
          },
          {
            "name": "What is a 'Data Scientist'?",
            "detail": "Data scientists combine skills in statistics, coding, and domain knowledge."
          },
          {
            "name": "What is 'Explainable AI' (XAI)?",
            "detail": "XAI is important for trust and accountability."
          },
          {
            "name": "What is a 'Relational Database'?",
            "detail": "RDBMS (like SQL) use structured relationships between tables."
          },
          {
            "name": "What is 'Spark' (Apache Spark)?",
            "detail": "Spark is much faster than the older MapReduce."
          },
          {
            "name": "What is 'Overfitting'?",
            "detail": "Overfitted models lack generalizability."
          },
          {
            "name": "What is 'Underfitting'?",
            "detail": "Underfitted models have poor performance on both training and test data."
          },
          {
            "name": "What is 'Normalizaton' in a database?",
            "detail": "Normalization involves dividing large tables into smaller ones."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ai-900-q1",
        "question": "What is 'Clustering' in ML?",
        "options": [
          "A group of people standing close together",
          "A hardware update for data clusters",
          "A type of database for grouped data",
          "Grouping similar data points together"
        ],
        "answer": "Grouping similar data points together",
        "category": "Domain Review",
        "explanation": "Clustering is an unsupervised learning technique.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q2",
        "question": "What is 'Regression' in ML?",
        "options": [
          "A network protocol for continuous values",
          "A type of computer code for numerical data",
          "Predicting a continuous numerical value",
          "The act of going backwards in an ML model"
        ],
        "answer": "Predicting a continuous numerical value",
        "category": "Domain Review",
        "explanation": "Example: Predicting a house price.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q3",
        "question": "What is 'Generative AI'?",
        "options": [
          "A simple mobile app designed for AI content creation",
          "A type of computer chip used for artificial intelligence",
          "AI that can create new content like text, images, or music",
          "AI that generates electrical power for a data center"
        ],
        "answer": "AI that can create new content like text, images, or music",
        "category": "Domain Review",
        "explanation": "Examples include ChatGPT and Midjourney.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q4",
        "question": "What is 'Data Mining'?",
        "options": [
          "A software update designed to fix minor system bugs",
          "A type of database used for storing patterns of data",
          "Discovering patterns and knowledge from large amounts of data",
          "The act of digging for gold in a natural gold mine"
        ],
        "answer": "Discovering patterns and knowledge from large amounts of data",
        "category": "Domain Review",
        "explanation": "Data mining uses ML, statistics, and database systems.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q5",
        "question": "What is 'Deep Learning'?",
        "options": [
          "A hardware update designed for deep computational tasks",
          "A subset of ML based on artificial neural networks",
          "A type of database optimized for storing neural data",
          "The act of studying a subject very hard for an exam"
        ],
        "answer": "A subset of ML based on artificial neural networks",
        "category": "Domain Review",
        "explanation": "Deep learning is inspired by the structure and function of the human brain.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q6",
        "question": "What is 'NoSQL'?",
        "options": [
          "A financial report with details on annual revenue",
          "A non-relational database for storing diverse data types",
          "A standard database with no SQL support at all",
          "A type of computer code for data encryption"
        ],
        "answer": "A non-relational database for storing diverse data types",
        "category": "Domain Review",
        "explanation": "NoSQL databases are often used for big data and real-time web apps.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q7",
        "question": "What is 'Predictive Analytics'?",
        "options": [
          "A financial report that lists all past company outcomes",
          "A type of database optimized for historical predictive data",
          "The act of guessing the future based on intuition alone",
          "Using data, statistics, and ML to identify the likelihood of future outcomes"
        ],
        "answer": "Using data, statistics, and ML to identify the likelihood of future outcomes",
        "category": "Domain Review",
        "explanation": "Predictive models help in decision-making.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q8",
        "question": "What is 'ETL'?",
        "options": [
          "Electronic Transfer Ledger (ETL)",
          "Email, Transfer, Link (ETL)",
          "Extra Tool Link (ETL)",
          "Extract, Transform, Load (ETL)"
        ],
        "answer": "Extract, Transform, Load (ETL)",
        "category": "Domain Review",
        "explanation": "ETL is the process of moving data from source systems to a data warehouse.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q9",
        "question": "What is 'Test Data'?",
        "options": [
          "A network protocol designed for data evaluation",
          "A type of computer code used for model testing",
          "A type of school exam or test for students",
          "The data used to evaluate the performance of an ML model"
        ],
        "answer": "The data used to evaluate the performance of an ML model",
        "category": "Domain Review",
        "explanation": "Test data must be separate from training data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q10",
        "question": "What is 'Data Warehouse'?",
        "options": [
          "A hardware guard that protects the server room",
          "A large physical building used for housing servers",
          "A system used for reporting and data analysis",
          "A type of storage device used for data backups"
        ],
        "answer": "A system used for reporting and data analysis",
        "category": "Domain Review",
        "explanation": "Warehouses consolidate data from multiple sources.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q11",
        "question": "What is 'Bias' in AI?",
        "options": [
          "A network protocol designed for transmitting biased data sets",
          "A strong personal opinion about a specific subject or topic",
          "A type of computer code used for model weight adjustments",
          "When a model produces systematically prejudiced results"
        ],
        "answer": "When a model produces systematically prejudiced results",
        "category": "Domain Review",
        "explanation": "Bias can arise from flawed training data or algorithms.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q12",
        "question": "What is 'Semi-Structured Data'?",
        "options": [
          "A financial report that is only partially completed by the user",
          "A partially built house with some completed rooms but no solid foundation",
          "A type of computer code used for semi-organized data sets and files",
          "Data that does not reside in a relational database but has organizational properties"
        ],
        "answer": "Data that does not reside in a relational database but has organizational properties",
        "category": "Domain Review",
        "explanation": "Examples include XML and JSON.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q13",
        "question": "What is 'Unstructured Data'?",
        "options": [
          "A financial report with no clear structure or layout",
          "A messy and unorganized room with many items",
          "A type of computer code used for unorganized data",
          "Data that does not have a predefined model or organization"
        ],
        "answer": "Data that does not have a predefined model or organization",
        "category": "Domain Review",
        "explanation": "Examples include text, images, and videos.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q14",
        "question": "What is 'Big Data Analytics'?",
        "options": [
          "A software update designed to improve system performance",
          "A type of cloud service used for storing large files",
          "A very large spreadsheet with millions of rows of data",
          "The process of examining large and varied data sets to find hidden patterns"
        ],
        "answer": "The process of examining large and varied data sets to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Analytics provides insights that can lead to better business decisions.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q15",
        "question": "What is 'Model' in ML?",
        "options": [
          "A mathematical representation of a real-world process",
          "A software manual that explains how an ML model works",
          "A specific type of clothing worn by a person",
          "A tiny scale model of a car or other vehicle"
        ],
        "answer": "A mathematical representation of a real-world process",
        "category": "Domain Review",
        "explanation": "A model is 'trained' on data to make predictions.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q16",
        "question": "What is 'Foreign Key' in a database?",
        "options": [
          "A field in one table that uniquely identifies a row of another table",
          "A hardware standard for connecting database servers",
          "A physical key from another country or organization",
          "A type of computer code used for database encryption"
        ],
        "answer": "A field in one table that uniquely identifies a row of another table",
        "category": "Domain Review",
        "explanation": "Foreign keys create relationships between tables.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q17",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster that can connect to the web",
          "A virtual reality game with high graphics",
          "An advanced calculator for complex math",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q18",
        "question": "What is 'Data Cleansing'?",
        "options": [
          "A software manual that explains how to clean data",
          "A type of computer code used for cleaning data",
          "Identifying and correcting errors or inconsistencies in data",
          "The act of physically washing a computer or server"
        ],
        "answer": "Identifying and correcting errors or inconsistencies in data",
        "category": "Domain Review",
        "explanation": "Cleansing is essential for accurate analysis.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q19",
        "question": "What is 'Training Data'?",
        "options": [
          "A gym for computers to get faster",
          "A network protocol for data sets",
          "A type of code for training data",
          "The data used to train an ML model"
        ],
        "answer": "The data used to train an ML model",
        "category": "Domain Review",
        "explanation": "Quality and quantity of training data are critical.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q20",
        "question": "What is 'Business Intelligence' (BI)?",
        "options": [
          "A set of cognitive abilities used for general problem solving",
          "A standard financial report generated at the end of the year",
          "A type of cloud-based service used for general data storage",
          "Strategies and technologies used for data analysis of business info"
        ],
        "answer": "Strategies and technologies used for data analysis of business info",
        "category": "Domain Review",
        "explanation": "BI provides historical, current, and predictive views of operations.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q21",
        "question": "What is 'Data Mart'?",
        "options": [
          "A physical store or marketplace for buying and selling data",
          "A small-scale data warehouse focused on a single functional area",
          "A software update designed for data mart management",
          "A type of storage device used for departmental data"
        ],
        "answer": "A small-scale data warehouse focused on a single functional area",
        "category": "Domain Review",
        "explanation": "Data marts are often used by a specific department (e.g., Finance).",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q22",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human being",
          "A very large database stored on a server",
          "Algorithms that learn patterns from data sets",
          "An automated car with no human driver"
        ],
        "answer": "Algorithms that learn patterns from data sets",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q23",
        "question": "What is 'Database Index'?",
        "options": [
          "A data structure that improves the speed of data retrieval",
          "A list of files stored in a database directory",
          "A software manual that describes database structures",
          "A type of storage device used for indexing data"
        ],
        "answer": "A data structure that improves the speed of data retrieval",
        "category": "Domain Review",
        "explanation": "Indexes make queries much faster but slow down writes.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q24",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image with many pixels",
          "A long list of names and contact addresses",
          "A very heavy and large computer hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety.",
        "topic": "Data & AI Fundamentals"
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
        "explanation": "SQL is the standard language for managing and querying relational databases.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q26",
        "question": "What is 'Data Governance'?",
        "options": [
          "A government agency responsible for data protection",
          "A security guard responsible for physical data safety",
          "A set of laws and regulations regarding data privacy",
          "Managing the availability, usability, integrity, and security of data"
        ],
        "answer": "Managing the availability, usability, integrity, and security of data",
        "category": "Domain Review",
        "explanation": "Governance ensures data is accurate and trustworthy.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q27",
        "question": "What is 'Data Lake'?",
        "options": [
          "A centralized repository that allows you to store all your structured and unstructured data",
          "A hardware guard that protects the data lake server environment from physical access",
          "A large natural lake filled with fresh or salt water for swimming and fishing",
          "A type of physical storage device used for saving and managing large data archives"
        ],
        "answer": "A centralized repository that allows you to store all your structured and unstructured data",
        "category": "Domain Review",
        "explanation": "Data lakes can store data as-is, without first structuring it.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q28",
        "question": "What is 'Database Management System' (DBMS)?",
        "options": [
          "A physical phone book containing names and numbers",
          "A software manual that explains how to use a database",
          "A type of storage device used for backing up data",
          "Software that interacts with end users, applications, and the database"
        ],
        "answer": "Software that interacts with end users, applications, and the database",
        "category": "Domain Review",
        "explanation": "Examples include MySQL, PostgreSQL, and Oracle Database.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q29",
        "question": "What is 'Reinforcement Learning'?",
        "options": [
          "A network protocol designed for penalty distribution",
          "A type of computer code used for reward systems",
          "Being very strict with an AI model during training",
          "Training a model through rewards and penalties"
        ],
        "answer": "Training a model through rewards and penalties",
        "category": "Domain Review",
        "explanation": "RL is used in robotics and game playing.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q30",
        "question": "What is 'Denormalization'?",
        "options": [
          "A hardware standard for maintaining equipment consistency",
          "A type of computer code used for data entry procedures",
          "Adding redundant data to improve read performance",
          "The state of being very strange in a professional environment"
        ],
        "answer": "Adding redundant data to improve read performance",
        "category": "Domain Review",
        "explanation": "Denormalization is often used in data warehouses.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q31",
        "question": "What is 'Natural Language Processing' (NLP)?",
        "options": [
          "A network protocol designed for natural language data",
          "A type of computer code used for natural speech patterns",
          "The ability of computers to understand and process human language",
          "The act of speaking very fast to improve data processing"
        ],
        "answer": "The ability of computers to understand and process human language",
        "category": "Domain Review",
        "explanation": "NLP is used in translation, sentiment analysis, and chatbots.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q32",
        "question": "What is 'Unsupervised Learning'?",
        "options": [
          "A network protocol designed for pattern recognition",
          "A type of computer code used for hidden patterns",
          "Learning a subject without any teacher or instructor",
          "Training a model on unlabeled data to find hidden patterns"
        ],
        "answer": "Training a model on unlabeled data to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Examples include clustering and association.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q33",
        "question": "What is 'Supervised Learning'?",
        "options": [
          "A network protocol for models",
          "A type of computer code for data",
          "Learning a subject with a teacher",
          "Training a model on labeled data"
        ],
        "answer": "Training a model on labeled data",
        "category": "Domain Review",
        "explanation": "The model learns to map inputs to the correct outputs.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q34",
        "question": "What is an 'Algorithm'?",
        "options": [
          "A computer game designed for teaching mathematical concepts",
          "A hardware standard for maintaining consistency in calculations",
          "A set of rules or instructions to be followed in calculations",
          "A unique type of music or rhythmic composition for listening"
        ],
        "answer": "A set of rules or instructions to be followed in calculations",
        "category": "Domain Review",
        "explanation": "Algorithms are the foundation of computer programs and ML models.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q35",
        "question": "What is 'Data Integration'?",
        "options": [
          "A network protocol designed for unified data views",
          "A type of computer code used for data integration",
          "Combining data from different sources into a single, unified view",
          "The simple act of putting different things together"
        ],
        "answer": "Combining data from different sources into a single, unified view",
        "category": "Domain Review",
        "explanation": "Integration is a major challenge in large organizations.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q36",
        "question": "What is 'Primary Key' in a database?",
        "options": [
          "A physical metal key used for opening a locked safe",
          "A secret password used to access a secured database",
          "A unique identifier for each record in a table",
          "The most important key used to unlock a physical door"
        ],
        "answer": "A unique identifier for each record in a table",
        "category": "Domain Review",
        "explanation": "The primary key cannot be null and must be unique.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q37",
        "question": "What is 'Cloud Database'?",
        "options": [
          "A database service built and accessed through a cloud platform",
          "A database stored on a physical USB flash drive",
          "A database that is available for everyone to use",
          "A simple text file stored in a cloud storage service"
        ],
        "answer": "A database service built and accessed through a cloud platform",
        "category": "Domain Review",
        "explanation": "Cloud databases are highly scalable and managed.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q38",
        "question": "What is 'Hadoop'?",
        "options": [
          "A hardware manufacturer that produces storage devices",
          "A type of computer designed for high-performance computing",
          "A website developer who specializes in big data applications",
          "An open-source framework for distributed storage and processing of big data"
        ],
        "answer": "An open-source framework for distributed storage and processing of big data",
        "category": "Domain Review",
        "explanation": "Hadoop is a core technology in the big data ecosystem.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q39",
        "question": "What is 'Data Visualization'?",
        "options": [
          "A graphical representation of information and data",
          "A network cable used for transmitting large data sets",
          "A type of high-resolution monitor for displaying data",
          "The act of looking at raw data in a text-based format"
        ],
        "answer": "A graphical representation of information and data",
        "category": "Domain Review",
        "explanation": "Visualization helps in understanding trends, outliers, and patterns.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q40",
        "question": "What is 'Structured Data'?",
        "options": [
          "A financial report containing company performance data",
          "A type of computer code used for data modeling",
          "A well-built and sturdy house with many rooms",
          "Data that adheres to a predefined schema or model"
        ],
        "answer": "Data that adheres to a predefined schema or model",
        "category": "Domain Review",
        "explanation": "Structured data is easily searchable (e.g., in a database).",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q41",
        "question": "What is 'Computer Vision'?",
        "options": [
          "A hardware guard that protects the computer's optical sensors",
          "A type of monitor that can see the user in front of it",
          "The ability of computers to gain understanding from digital images or videos",
          "The act of wearing glasses to improve human vision of screens"
        ],
        "answer": "The ability of computers to gain understanding from digital images or videos",
        "category": "Domain Review",
        "explanation": "Computer vision is used in facial recognition and autonomous vehicles.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q42",
        "question": "What is an 'Artificial Neural Network'?",
        "options": [
          "A computing system inspired by biological neural networks",
          "A hardware guard that protects neural data from theft",
          "A physical brain inside a highly advanced robotic system",
          "A type of high-speed network cable for data centers"
        ],
        "answer": "A computing system inspired by biological neural networks",
        "category": "Domain Review",
        "explanation": "Neural networks are the foundation of deep learning.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q43",
        "question": "What is 'Classification' in ML?",
        "options": [
          "A network protocol for discrete labels",
          "A type of computer code for labeled data",
          "Predicting a discrete label or category",
          "The act of sorting things in a database"
        ],
        "answer": "Predicting a discrete label or category",
        "category": "Domain Review",
        "explanation": "Example: Predicting if an email is spam.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q44",
        "question": "What is a 'Data Scientist'?",
        "options": [
          "A person who designs and builds computer hardware",
          "A person who develops and maintains complex websites",
          "A person who teaches advanced mathematics in a school",
          "A person who uses scientific methods and data to find insights"
        ],
        "answer": "A person who uses scientific methods and data to find insights",
        "category": "Domain Review",
        "explanation": "Data scientists combine skills in statistics, coding, and domain knowledge.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q45",
        "question": "What is 'Explainable AI' (XAI)?",
        "options": [
          "A book or novel about the future of artificial intelligence",
          "A software manual explaining AI system operations",
          "A type of AI system that speaks multiple languages",
          "AI systems that can explain their decisions and actions to humans"
        ],
        "answer": "AI systems that can explain their decisions and actions to humans",
        "category": "Domain Review",
        "explanation": "XAI is important for trust and accountability.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q46",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images stored on a local computer",
          "A list of contacts stored in a mobile phone",
          "A single large text file with unstructured data",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q47",
        "question": "What is 'Spark' (Apache Spark)?",
        "options": [
          "A physical fire hazard in a data center environment",
          "A simple mobile app used for tracking data usage",
          "A type of computer chip designed for fast processing",
          "An open-source distributed processing system used for big data workloads"
        ],
        "answer": "An open-source distributed processing system used for big data workloads",
        "category": "Domain Review",
        "explanation": "Spark is much faster than the older MapReduce.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q48",
        "question": "What is 'Overfitting'?",
        "options": [
          "A hardware failure that occurs due to overheating components",
          "A standard software bug that causes an application to crash",
          "The act of wearing small and tight clothes during a workout",
          "When a model learns the training data too well but fails on new data"
        ],
        "answer": "When a model learns the training data too well but fails on new data",
        "category": "Domain Review",
        "explanation": "Overfitted models lack generalizability.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q49",
        "question": "What is 'Underfitting'?",
        "options": [
          "A hardware failure that occurs due to overheating components",
          "A standard software bug that causes an application to crash",
          "The act of wearing large and baggy clothes during a workout",
          "When a model is too simple to learn the patterns in data"
        ],
        "answer": "When a model is too simple to learn the patterns in data",
        "category": "Domain Review",
        "explanation": "Underfitted models have poor performance on both training and test data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "ai-900-q50",
        "question": "What is 'Normalizaton' in a database?",
        "options": [
          "A hardware standard for maintaining data consistency",
          "A type of computer code used for data normalization",
          "Organizing data to reduce redundancy and improve integrity",
          "The state of being very normal in a database environment"
        ],
        "answer": "Organizing data to reduce redundancy and improve integrity",
        "category": "Domain Review",
        "explanation": "Normalization involves dividing large tables into smaller ones.",
        "topic": "Data & AI Fundamentals"
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
            "name": "What is 'Business Intelligence' (BI)?",
            "detail": "BI provides historical, current, and predictive views of operations."
          },
          {
            "name": "What is 'Semi-Structured Data'?",
            "detail": "Examples include XML and JSON."
          },
          {
            "name": "What is 'Predictive Analytics'?",
            "detail": "Predictive models help in decision-making."
          },
          {
            "name": "What is 'Primary Key' in a database?",
            "detail": "The primary key cannot be null and must be unique."
          },
          {
            "name": "What is 'Generative AI'?",
            "detail": "Examples include ChatGPT and Midjourney."
          },
          {
            "name": "What is 'Database Management System' (DBMS)?",
            "detail": "Examples include MySQL, PostgreSQL, and Oracle Database."
          },
          {
            "name": "What is 'Machine Learning'?",
            "detail": "ML uses statistical techniques to give computers the ability to 'learn' from data."
          },
          {
            "name": "What is 'Supervised Learning'?",
            "detail": "The model learns to map inputs to the correct outputs."
          },
          {
            "name": "What is 'Bias' in AI?",
            "detail": "Bias can arise from flawed training data or algorithms."
          },
          {
            "name": "What is 'Artificial Intelligence'?",
            "detail": "AI encompasses machine learning, robotics, and natural language processing."
          },
          {
            "name": "What is 'Computer Vision'?",
            "detail": "Computer vision is used in facial recognition and autonomous vehicles."
          },
          {
            "name": "What is 'Classification' in ML?",
            "detail": "Example: Predicting if an email is spam."
          },
          {
            "name": "What is 'Underfitting'?",
            "detail": "Underfitted models have poor performance on both training and test data."
          },
          {
            "name": "What is 'Structured Data'?",
            "detail": "Structured data is easily searchable (e.g., in a database)."
          },
          {
            "name": "What is an 'Algorithm'?",
            "detail": "Algorithms are the foundation of computer programs and ML models."
          },
          {
            "name": "What is 'Data Mining'?",
            "detail": "Data mining uses ML, statistics, and database systems."
          },
          {
            "name": "What is 'ETL'?",
            "detail": "ETL is the process of moving data from source systems to a data warehouse."
          },
          {
            "name": "What is 'Unstructured Data'?",
            "detail": "Examples include text, images, and videos."
          },
          {
            "name": "What is 'Training Data'?",
            "detail": "Quality and quantity of training data are critical."
          },
          {
            "name": "What is 'Hadoop'?",
            "detail": "Hadoop is a core technology in the big data ecosystem."
          },
          {
            "name": "What is 'Data Integration'?",
            "detail": "Integration is a major challenge in large organizations."
          },
          {
            "name": "What is a 'Data Scientist'?",
            "detail": "Data scientists combine skills in statistics, coding, and domain knowledge."
          },
          {
            "name": "What is 'Explainable AI' (XAI)?",
            "detail": "XAI is important for trust and accountability."
          },
          {
            "name": "What is 'Spark' (Apache Spark)?",
            "detail": "Spark is much faster than the older MapReduce."
          },
          {
            "name": "What is 'Cloud Database'?",
            "detail": "Cloud databases are highly scalable and managed."
          },
          {
            "name": "What is 'SQL'?",
            "detail": "SQL is the standard language for managing and querying relational databases."
          },
          {
            "name": "What is 'Database Index'?",
            "detail": "Indexes make queries much faster but slow down writes."
          },
          {
            "name": "What is 'Data Lake'?",
            "detail": "Data lakes can store data as-is, without first structuring it."
          },
          {
            "name": "What is 'Reinforcement Learning'?",
            "detail": "RL is used in robotics and game playing."
          },
          {
            "name": "What is 'Data Visualization'?",
            "detail": "Visualization helps in understanding trends, outliers, and patterns."
          },
          {
            "name": "What is 'Unsupervised Learning'?",
            "detail": "Examples include clustering and association."
          },
          {
            "name": "What is 'Test Data'?",
            "detail": "Test data must be separate from training data."
          },
          {
            "name": "What is 'Regression' in ML?",
            "detail": "Example: Predicting a house price."
          },
          {
            "name": "What is 'Deep Learning'?",
            "detail": "Deep learning is inspired by the structure and function of the human brain."
          },
          {
            "name": "What is 'Big Data'?",
            "detail": "Big Data is characterized by Volume, Velocity, and Variety."
          },
          {
            "name": "What is 'Normalizaton' in a database?",
            "detail": "Normalization involves dividing large tables into smaller ones."
          },
          {
            "name": "What is 'Overfitting'?",
            "detail": "Overfitted models lack generalizability."
          },
          {
            "name": "What is 'Clustering' in ML?",
            "detail": "Clustering is an unsupervised learning technique."
          },
          {
            "name": "What is an 'Artificial Neural Network'?",
            "detail": "Neural networks are the foundation of deep learning."
          },
          {
            "name": "What is 'Data Cleansing'?",
            "detail": "Cleansing is essential for accurate analysis."
          },
          {
            "name": "What is 'Big Data Analytics'?",
            "detail": "Analytics provides insights that can lead to better business decisions."
          },
          {
            "name": "What is a 'Relational Database'?",
            "detail": "RDBMS (like SQL) use structured relationships between tables."
          },
          {
            "name": "What is 'Data Warehouse'?",
            "detail": "Warehouses consolidate data from multiple sources."
          },
          {
            "name": "What is 'Model' in ML?",
            "detail": "A model is 'trained' on data to make predictions."
          },
          {
            "name": "What is 'Natural Language Processing' (NLP)?",
            "detail": "NLP is used in translation, sentiment analysis, and chatbots."
          },
          {
            "name": "What is 'NoSQL'?",
            "detail": "NoSQL databases are often used for big data and real-time web apps."
          },
          {
            "name": "What is 'Data Mart'?",
            "detail": "Data marts are often used by a specific department (e.g., Finance)."
          },
          {
            "name": "What is 'Data Governance'?",
            "detail": "Governance ensures data is accurate and trustworthy."
          },
          {
            "name": "What is 'Denormalization'?",
            "detail": "Denormalization is often used in data warehouses."
          },
          {
            "name": "What is 'Foreign Key' in a database?",
            "detail": "Foreign keys create relationships between tables."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pl-900-q1",
        "question": "What is 'Business Intelligence' (BI)?",
        "options": [
          "A set of cognitive abilities used for general problem solving",
          "A standard financial report generated at the end of the year",
          "A type of cloud-based service used for general data storage",
          "Strategies and technologies used for data analysis of business info"
        ],
        "answer": "Strategies and technologies used for data analysis of business info",
        "category": "Domain Review",
        "explanation": "BI provides historical, current, and predictive views of operations.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q2",
        "question": "What is 'Semi-Structured Data'?",
        "options": [
          "A financial report that is only partially completed by the user",
          "A partially built house with some completed rooms but no solid foundation",
          "A type of computer code used for semi-organized data sets and files",
          "Data that does not reside in a relational database but has organizational properties"
        ],
        "answer": "Data that does not reside in a relational database but has organizational properties",
        "category": "Domain Review",
        "explanation": "Examples include XML and JSON.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q3",
        "question": "What is 'Predictive Analytics'?",
        "options": [
          "A financial report that lists all past company outcomes",
          "A type of database optimized for historical predictive data",
          "The act of guessing the future based on intuition alone",
          "Using data, statistics, and ML to identify the likelihood of future outcomes"
        ],
        "answer": "Using data, statistics, and ML to identify the likelihood of future outcomes",
        "category": "Domain Review",
        "explanation": "Predictive models help in decision-making.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q4",
        "question": "What is 'Primary Key' in a database?",
        "options": [
          "A physical metal key used for opening a locked safe",
          "A secret password used to access a secured database",
          "A unique identifier for each record in a table",
          "The most important key used to unlock a physical door"
        ],
        "answer": "A unique identifier for each record in a table",
        "category": "Domain Review",
        "explanation": "The primary key cannot be null and must be unique.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q5",
        "question": "What is 'Generative AI'?",
        "options": [
          "A simple mobile app designed for AI content creation",
          "A type of computer chip used for artificial intelligence",
          "AI that can create new content like text, images, or music",
          "AI that generates electrical power for a data center"
        ],
        "answer": "AI that can create new content like text, images, or music",
        "category": "Domain Review",
        "explanation": "Examples include ChatGPT and Midjourney.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q6",
        "question": "What is 'Database Management System' (DBMS)?",
        "options": [
          "A physical phone book containing names and numbers",
          "A software manual that explains how to use a database",
          "A type of storage device used for backing up data",
          "Software that interacts with end users, applications, and the database"
        ],
        "answer": "Software that interacts with end users, applications, and the database",
        "category": "Domain Review",
        "explanation": "Examples include MySQL, PostgreSQL, and Oracle Database.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q7",
        "question": "What is 'Machine Learning'?",
        "options": [
          "A robot that thinks like a human being",
          "A very large database stored on a server",
          "Algorithms that learn patterns from data sets",
          "An automated car with no human driver"
        ],
        "answer": "Algorithms that learn patterns from data sets",
        "category": "Domain Review",
        "explanation": "ML uses statistical techniques to give computers the ability to 'learn' from data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q8",
        "question": "What is 'Supervised Learning'?",
        "options": [
          "A network protocol for models",
          "A type of computer code for data",
          "Learning a subject with a teacher",
          "Training a model on labeled data"
        ],
        "answer": "Training a model on labeled data",
        "category": "Domain Review",
        "explanation": "The model learns to map inputs to the correct outputs.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q9",
        "question": "What is 'Bias' in AI?",
        "options": [
          "A network protocol designed for transmitting biased data sets",
          "A strong personal opinion about a specific subject or topic",
          "A type of computer code used for model weight adjustments",
          "When a model produces systematically prejudiced results"
        ],
        "answer": "When a model produces systematically prejudiced results",
        "category": "Domain Review",
        "explanation": "Bias can arise from flawed training data or algorithms.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q10",
        "question": "What is 'Artificial Intelligence'?",
        "options": [
          "A smart toaster that can connect to the web",
          "A virtual reality game with high graphics",
          "An advanced calculator for complex math",
          "Simulation of human intelligence by machines"
        ],
        "answer": "Simulation of human intelligence by machines",
        "category": "Domain Review",
        "explanation": "AI encompasses machine learning, robotics, and natural language processing.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q11",
        "question": "What is 'Computer Vision'?",
        "options": [
          "A hardware guard that protects the computer's optical sensors",
          "A type of monitor that can see the user in front of it",
          "The ability of computers to gain understanding from digital images or videos",
          "The act of wearing glasses to improve human vision of screens"
        ],
        "answer": "The ability of computers to gain understanding from digital images or videos",
        "category": "Domain Review",
        "explanation": "Computer vision is used in facial recognition and autonomous vehicles.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q12",
        "question": "What is 'Classification' in ML?",
        "options": [
          "A network protocol for discrete labels",
          "A type of computer code for labeled data",
          "Predicting a discrete label or category",
          "The act of sorting things in a database"
        ],
        "answer": "Predicting a discrete label or category",
        "category": "Domain Review",
        "explanation": "Example: Predicting if an email is spam.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q13",
        "question": "What is 'Underfitting'?",
        "options": [
          "A hardware failure that occurs due to overheating components",
          "A standard software bug that causes an application to crash",
          "The act of wearing large and baggy clothes during a workout",
          "When a model is too simple to learn the patterns in data"
        ],
        "answer": "When a model is too simple to learn the patterns in data",
        "category": "Domain Review",
        "explanation": "Underfitted models have poor performance on both training and test data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q14",
        "question": "What is 'Structured Data'?",
        "options": [
          "A financial report containing company performance data",
          "A type of computer code used for data modeling",
          "A well-built and sturdy house with many rooms",
          "Data that adheres to a predefined schema or model"
        ],
        "answer": "Data that adheres to a predefined schema or model",
        "category": "Domain Review",
        "explanation": "Structured data is easily searchable (e.g., in a database).",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q15",
        "question": "What is an 'Algorithm'?",
        "options": [
          "A computer game designed for teaching mathematical concepts",
          "A hardware standard for maintaining consistency in calculations",
          "A set of rules or instructions to be followed in calculations",
          "A unique type of music or rhythmic composition for listening"
        ],
        "answer": "A set of rules or instructions to be followed in calculations",
        "category": "Domain Review",
        "explanation": "Algorithms are the foundation of computer programs and ML models.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q16",
        "question": "What is 'Data Mining'?",
        "options": [
          "A software update designed to fix minor system bugs",
          "A type of database used for storing patterns of data",
          "Discovering patterns and knowledge from large amounts of data",
          "The act of digging for gold in a natural gold mine"
        ],
        "answer": "Discovering patterns and knowledge from large amounts of data",
        "category": "Domain Review",
        "explanation": "Data mining uses ML, statistics, and database systems.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q17",
        "question": "What is 'ETL'?",
        "options": [
          "Electronic Transfer Ledger (ETL)",
          "Email, Transfer, Link (ETL)",
          "Extra Tool Link (ETL)",
          "Extract, Transform, Load (ETL)"
        ],
        "answer": "Extract, Transform, Load (ETL)",
        "category": "Domain Review",
        "explanation": "ETL is the process of moving data from source systems to a data warehouse.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q18",
        "question": "What is 'Unstructured Data'?",
        "options": [
          "A financial report with no clear structure or layout",
          "A messy and unorganized room with many items",
          "A type of computer code used for unorganized data",
          "Data that does not have a predefined model or organization"
        ],
        "answer": "Data that does not have a predefined model or organization",
        "category": "Domain Review",
        "explanation": "Examples include text, images, and videos.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q19",
        "question": "What is 'Training Data'?",
        "options": [
          "A gym for computers to get faster",
          "A network protocol for data sets",
          "A type of code for training data",
          "The data used to train an ML model"
        ],
        "answer": "The data used to train an ML model",
        "category": "Domain Review",
        "explanation": "Quality and quantity of training data are critical.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q20",
        "question": "What is 'Hadoop'?",
        "options": [
          "A hardware manufacturer that produces storage devices",
          "A type of computer designed for high-performance computing",
          "A website developer who specializes in big data applications",
          "An open-source framework for distributed storage and processing of big data"
        ],
        "answer": "An open-source framework for distributed storage and processing of big data",
        "category": "Domain Review",
        "explanation": "Hadoop is a core technology in the big data ecosystem.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q21",
        "question": "What is 'Data Integration'?",
        "options": [
          "A network protocol designed for unified data views",
          "A type of computer code used for data integration",
          "Combining data from different sources into a single, unified view",
          "The simple act of putting different things together"
        ],
        "answer": "Combining data from different sources into a single, unified view",
        "category": "Domain Review",
        "explanation": "Integration is a major challenge in large organizations.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q22",
        "question": "What is a 'Data Scientist'?",
        "options": [
          "A person who designs and builds computer hardware",
          "A person who develops and maintains complex websites",
          "A person who teaches advanced mathematics in a school",
          "A person who uses scientific methods and data to find insights"
        ],
        "answer": "A person who uses scientific methods and data to find insights",
        "category": "Domain Review",
        "explanation": "Data scientists combine skills in statistics, coding, and domain knowledge.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q23",
        "question": "What is 'Explainable AI' (XAI)?",
        "options": [
          "A book or novel about the future of artificial intelligence",
          "A software manual explaining AI system operations",
          "A type of AI system that speaks multiple languages",
          "AI systems that can explain their decisions and actions to humans"
        ],
        "answer": "AI systems that can explain their decisions and actions to humans",
        "category": "Domain Review",
        "explanation": "XAI is important for trust and accountability.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q24",
        "question": "What is 'Spark' (Apache Spark)?",
        "options": [
          "A physical fire hazard in a data center environment",
          "A simple mobile app used for tracking data usage",
          "A type of computer chip designed for fast processing",
          "An open-source distributed processing system used for big data workloads"
        ],
        "answer": "An open-source distributed processing system used for big data workloads",
        "category": "Domain Review",
        "explanation": "Spark is much faster than the older MapReduce.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q25",
        "question": "What is 'Cloud Database'?",
        "options": [
          "A database service built and accessed through a cloud platform",
          "A database stored on a physical USB flash drive",
          "A database that is available for everyone to use",
          "A simple text file stored in a cloud storage service"
        ],
        "answer": "A database service built and accessed through a cloud platform",
        "category": "Domain Review",
        "explanation": "Cloud databases are highly scalable and managed.",
        "topic": "Data & AI Fundamentals"
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
        "explanation": "SQL is the standard language for managing and querying relational databases.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q27",
        "question": "What is 'Database Index'?",
        "options": [
          "A data structure that improves the speed of data retrieval",
          "A list of files stored in a database directory",
          "A software manual that describes database structures",
          "A type of storage device used for indexing data"
        ],
        "answer": "A data structure that improves the speed of data retrieval",
        "category": "Domain Review",
        "explanation": "Indexes make queries much faster but slow down writes.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q28",
        "question": "What is 'Data Lake'?",
        "options": [
          "A centralized repository that allows you to store all your structured and unstructured data",
          "A hardware guard that protects the data lake server environment from physical access",
          "A large natural lake filled with fresh or salt water for swimming and fishing",
          "A type of physical storage device used for saving and managing large data archives"
        ],
        "answer": "A centralized repository that allows you to store all your structured and unstructured data",
        "category": "Domain Review",
        "explanation": "Data lakes can store data as-is, without first structuring it.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q29",
        "question": "What is 'Reinforcement Learning'?",
        "options": [
          "A network protocol designed for penalty distribution",
          "A type of computer code used for reward systems",
          "Being very strict with an AI model during training",
          "Training a model through rewards and penalties"
        ],
        "answer": "Training a model through rewards and penalties",
        "category": "Domain Review",
        "explanation": "RL is used in robotics and game playing.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q30",
        "question": "What is 'Data Visualization'?",
        "options": [
          "A graphical representation of information and data",
          "A network cable used for transmitting large data sets",
          "A type of high-resolution monitor for displaying data",
          "The act of looking at raw data in a text-based format"
        ],
        "answer": "A graphical representation of information and data",
        "category": "Domain Review",
        "explanation": "Visualization helps in understanding trends, outliers, and patterns.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q31",
        "question": "What is 'Unsupervised Learning'?",
        "options": [
          "A network protocol designed for pattern recognition",
          "A type of computer code used for hidden patterns",
          "Learning a subject without any teacher or instructor",
          "Training a model on unlabeled data to find hidden patterns"
        ],
        "answer": "Training a model on unlabeled data to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Examples include clustering and association.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q32",
        "question": "What is 'Test Data'?",
        "options": [
          "A network protocol designed for data evaluation",
          "A type of computer code used for model testing",
          "A type of school exam or test for students",
          "The data used to evaluate the performance of an ML model"
        ],
        "answer": "The data used to evaluate the performance of an ML model",
        "category": "Domain Review",
        "explanation": "Test data must be separate from training data.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q33",
        "question": "What is 'Regression' in ML?",
        "options": [
          "A network protocol for continuous values",
          "A type of computer code for numerical data",
          "Predicting a continuous numerical value",
          "The act of going backwards in an ML model"
        ],
        "answer": "Predicting a continuous numerical value",
        "category": "Domain Review",
        "explanation": "Example: Predicting a house price.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q34",
        "question": "What is 'Deep Learning'?",
        "options": [
          "A hardware update designed for deep computational tasks",
          "A subset of ML based on artificial neural networks",
          "A type of database optimized for storing neural data",
          "The act of studying a subject very hard for an exam"
        ],
        "answer": "A subset of ML based on artificial neural networks",
        "category": "Domain Review",
        "explanation": "Deep learning is inspired by the structure and function of the human brain.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q35",
        "question": "What is 'Big Data'?",
        "options": [
          "A high-resolution image with many pixels",
          "A long list of names and contact addresses",
          "A very heavy and large computer hard drive",
          "Extremely large and complex datasets"
        ],
        "answer": "Extremely large and complex datasets",
        "category": "Domain Review",
        "explanation": "Big Data is characterized by Volume, Velocity, and Variety.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q36",
        "question": "What is 'Normalizaton' in a database?",
        "options": [
          "A hardware standard for maintaining data consistency",
          "A type of computer code used for data normalization",
          "Organizing data to reduce redundancy and improve integrity",
          "The state of being very normal in a database environment"
        ],
        "answer": "Organizing data to reduce redundancy and improve integrity",
        "category": "Domain Review",
        "explanation": "Normalization involves dividing large tables into smaller ones.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q37",
        "question": "What is 'Overfitting'?",
        "options": [
          "A hardware failure that occurs due to overheating components",
          "A standard software bug that causes an application to crash",
          "The act of wearing small and tight clothes during a workout",
          "When a model learns the training data too well but fails on new data"
        ],
        "answer": "When a model learns the training data too well but fails on new data",
        "category": "Domain Review",
        "explanation": "Overfitted models lack generalizability.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q38",
        "question": "What is 'Clustering' in ML?",
        "options": [
          "A group of people standing close together",
          "A hardware update for data clusters",
          "A type of database for grouped data",
          "Grouping similar data points together"
        ],
        "answer": "Grouping similar data points together",
        "category": "Domain Review",
        "explanation": "Clustering is an unsupervised learning technique.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q39",
        "question": "What is an 'Artificial Neural Network'?",
        "options": [
          "A computing system inspired by biological neural networks",
          "A hardware guard that protects neural data from theft",
          "A physical brain inside a highly advanced robotic system",
          "A type of high-speed network cable for data centers"
        ],
        "answer": "A computing system inspired by biological neural networks",
        "category": "Domain Review",
        "explanation": "Neural networks are the foundation of deep learning.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q40",
        "question": "What is 'Data Cleansing'?",
        "options": [
          "A software manual that explains how to clean data",
          "A type of computer code used for cleaning data",
          "Identifying and correcting errors or inconsistencies in data",
          "The act of physically washing a computer or server"
        ],
        "answer": "Identifying and correcting errors or inconsistencies in data",
        "category": "Domain Review",
        "explanation": "Cleansing is essential for accurate analysis.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q41",
        "question": "What is 'Big Data Analytics'?",
        "options": [
          "A software update designed to improve system performance",
          "A type of cloud service used for storing large files",
          "A very large spreadsheet with millions of rows of data",
          "The process of examining large and varied data sets to find hidden patterns"
        ],
        "answer": "The process of examining large and varied data sets to find hidden patterns",
        "category": "Domain Review",
        "explanation": "Analytics provides insights that can lead to better business decisions.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q42",
        "question": "What is a 'Relational Database'?",
        "options": [
          "A folder of images stored on a local computer",
          "A list of contacts stored in a mobile phone",
          "A single large text file with unstructured data",
          "Data organized in tables with rows and columns"
        ],
        "answer": "Data organized in tables with rows and columns",
        "category": "Domain Review",
        "explanation": "RDBMS (like SQL) use structured relationships between tables.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q43",
        "question": "What is 'Data Warehouse'?",
        "options": [
          "A hardware guard that protects the server room",
          "A large physical building used for housing servers",
          "A system used for reporting and data analysis",
          "A type of storage device used for data backups"
        ],
        "answer": "A system used for reporting and data analysis",
        "category": "Domain Review",
        "explanation": "Warehouses consolidate data from multiple sources.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q44",
        "question": "What is 'Model' in ML?",
        "options": [
          "A mathematical representation of a real-world process",
          "A software manual that explains how an ML model works",
          "A specific type of clothing worn by a person",
          "A tiny scale model of a car or other vehicle"
        ],
        "answer": "A mathematical representation of a real-world process",
        "category": "Domain Review",
        "explanation": "A model is 'trained' on data to make predictions.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q45",
        "question": "What is 'Natural Language Processing' (NLP)?",
        "options": [
          "A network protocol designed for natural language data",
          "A type of computer code used for natural speech patterns",
          "The ability of computers to understand and process human language",
          "The act of speaking very fast to improve data processing"
        ],
        "answer": "The ability of computers to understand and process human language",
        "category": "Domain Review",
        "explanation": "NLP is used in translation, sentiment analysis, and chatbots.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q46",
        "question": "What is 'NoSQL'?",
        "options": [
          "A financial report with details on annual revenue",
          "A non-relational database for storing diverse data types",
          "A standard database with no SQL support at all",
          "A type of computer code for data encryption"
        ],
        "answer": "A non-relational database for storing diverse data types",
        "category": "Domain Review",
        "explanation": "NoSQL databases are often used for big data and real-time web apps.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q47",
        "question": "What is 'Data Mart'?",
        "options": [
          "A physical store or marketplace for buying and selling data",
          "A small-scale data warehouse focused on a single functional area",
          "A software update designed for data mart management",
          "A type of storage device used for departmental data"
        ],
        "answer": "A small-scale data warehouse focused on a single functional area",
        "category": "Domain Review",
        "explanation": "Data marts are often used by a specific department (e.g., Finance).",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q48",
        "question": "What is 'Data Governance'?",
        "options": [
          "A government agency responsible for data protection",
          "A security guard responsible for physical data safety",
          "A set of laws and regulations regarding data privacy",
          "Managing the availability, usability, integrity, and security of data"
        ],
        "answer": "Managing the availability, usability, integrity, and security of data",
        "category": "Domain Review",
        "explanation": "Governance ensures data is accurate and trustworthy.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q49",
        "question": "What is 'Denormalization'?",
        "options": [
          "A hardware standard for maintaining equipment consistency",
          "A type of computer code used for data entry procedures",
          "Adding redundant data to improve read performance",
          "The state of being very strange in a professional environment"
        ],
        "answer": "Adding redundant data to improve read performance",
        "category": "Domain Review",
        "explanation": "Denormalization is often used in data warehouses.",
        "topic": "Data & AI Fundamentals"
      },
      {
        "id": "pl-900-q50",
        "question": "What is 'Foreign Key' in a database?",
        "options": [
          "A field in one table that uniquely identifies a row of another table",
          "A hardware standard for connecting database servers",
          "A physical key from another country or organization",
          "A type of computer code used for database encryption"
        ],
        "answer": "A field in one table that uniquely identifies a row of another table",
        "category": "Domain Review",
        "explanation": "Foreign keys create relationships between tables.",
        "topic": "Data & AI Fundamentals"
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
        "title": "Architecture",
        "topics": [
          {
            "name": "What is 'Defense in Depth'?",
            "detail": "If one layer fails, others are in place to stop the threat."
          },
          {
            "name": "Which protocol provides a secure shell for remote access?",
            "detail": "SSH is the secure alternative to the unencrypted Telnet."
          },
          {
            "name": "What is an 'Air Gap'?",
            "detail": "Air-gapping is used for extremely high-security systems."
          },
          {
            "name": "What is 'Data Loss Prevention' (DLP)?",
            "detail": "DLP monitors data at rest, in use, and in transit."
          },
          {
            "name": "What is 'Mobile Device Management' (MDM)?",
            "detail": "MDM allows enforcing security policies on employee phones."
          },
          {
            "name": "What is a 'Firewall Policy'?",
            "detail": "It dictates how the firewall handles various types of packets."
          },
          {
            "name": "What does 'WPA3' improve over WPA2?",
            "detail": "WPA3 is the latest security standard for wireless networks."
          },
          {
            "name": "What is 'Access Control'?",
            "detail": "It involves identification, authentication, and authorization."
          },
          {
            "name": "What does a Firewall do?",
            "detail": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
          }
        ]
      },
      {
        "title": "Attacks & Threats",
        "topics": [
          {
            "name": "What is 'Whaling'?",
            "detail": "Whaling targets 'big fish' like CEOs and CFOs."
          },
          {
            "name": "What is 'Pharmimg'?",
            "detail": "Users think they are on a real site but are actually on a malicious one."
          },
          {
            "name": "What is 'Man-in-the-Middle' (MITM)?",
            "detail": "The attacker can read or even modify the data being sent."
          },
          {
            "name": "What is the difference between a 'Virus' and a 'Worm'?",
            "detail": "Worms can spread across a network without human interaction."
          },
          {
            "name": "What is 'War Driving'?",
            "detail": "Attackers use this to find vulnerable wireless networks to exploit."
          },
          {
            "name": "What is 'SQL Injection'?",
            "detail": "SQLi can allow attackers to read or modify sensitive database data."
          },
          {
            "name": "What is 'Shoulder Surfing'?",
            "detail": "It's a low-tech social engineering technique."
          },
          {
            "name": "What is a 'Trojan Horse'?",
            "detail": "Trojans do not replicate themselves like viruses or worms."
          },
          {
            "name": "What is Ransomware?",
            "detail": "Ransomware locks users out of their data until a ransom is paid."
          },
          {
            "name": "What is 'Social Engineering'?",
            "detail": "It exploits human psychology rather than technical flaws."
          },
          {
            "name": "What is a 'Botnet'?",
            "detail": "Botnets are used for large-scale attacks like DDoS."
          },
          {
            "name": "What is a 'Backdoor'?",
            "detail": "Backdoors can be used for maintenance or by attackers for persistence."
          },
          {
            "name": "Which of these is a social engineering attack?",
            "detail": "Tailgating involves physically following an authorized person into a secure area."
          },
          {
            "name": "What is 'Cross-Site Scripting' (XSS)?",
            "detail": "XSS can steal cookies and session info from users."
          },
          {
            "name": "What is 'Eavesdropping' in network security?",
            "detail": "This is a passive attack against confidentiality."
          },
          {
            "name": "What is a 'Logic Bomb'?",
            "detail": "Logic bombs can be planted by malicious insiders."
          },
          {
            "name": "What is a 'Buffer Overflow'?",
            "detail": "It can lead to system crashes or arbitrary code execution."
          }
        ]
      },
      {
        "title": "Governance",
        "topics": [
          {
            "name": "What is 'Authorization'?",
            "detail": "It defines the permissions and rights of a user."
          },
          {
            "name": "What is 'BYOD'?",
            "detail": "A policy allowing employees to use personal devices for work."
          },
          {
            "name": "What is the 'Principle of Least Privilege'?",
            "detail": "This minimizes potential impact of a security breach."
          }
        ]
      },
      {
        "title": "Implementation",
        "topics": [
          {
            "name": "Which of these is used for 'Non-repudiation'?",
            "detail": "Non-repudiation ensures a sender cannot deny having sent a message."
          },
          {
            "name": "What is Multi-Factor Authentication (MFA)?",
            "detail": "MFA combines something you know, something you have, and/or something you are."
          },
          {
            "name": "What is 'Biometrics'?",
            "detail": "Examples include fingerprints, iris scans, and facial recognition."
          },
          {
            "name": "Which of these is a form of Symmetric encryption?",
            "detail": "Advanced Encryption Standard (AES) is the most common symmetric cipher."
          },
          {
            "name": "What is 'Encryption'?",
            "detail": "Encryption protects data from being read by unauthorized parties."
          },
          {
            "name": "What is 'Steganography'?",
            "detail": "Data is hidden in plain sight, making it hard to detect."
          },
          {
            "name": "What is 'Decryption'?",
            "detail": "The reverse of encryption, usually requiring a key."
          },
          {
            "name": "What is a 'Private Key'?",
            "detail": "The private key is used for decryption or creating digital signatures."
          },
          {
            "name": "What is the purpose of Hashing?",
            "detail": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
          },
          {
            "name": "What is 'Two-Factor Authentication' (2FA)?",
            "detail": "It adds an extra layer of security beyond just a password."
          },
          {
            "name": "What is a 'Public Key'?",
            "detail": "In asymmetric encryption, the public key is used for encryption."
          }
        ]
      },
      {
        "title": "Operations",
        "topics": [
          {
            "name": "What is a 'Honey Pot'?",
            "detail": "Honeypots help researchers study attacker behavior and deflect them from real targets."
          },
          {
            "name": "What is the purpose of an 'IDS'?",
            "detail": "Intrusion Detection Systems monitor and alert for suspicious activity."
          },
          {
            "name": "What is the purpose of 'Sandboxing'?",
            "detail": "Sandboxing prevents malware from affecting the host system."
          },
          {
            "name": "What is an 'Audit Trail'?",
            "detail": "Audit trails are crucial for incident investigation and compliance."
          },
          {
            "name": "What is a 'Penetration Test'?",
            "detail": "Pen-tests provide a deep assessment of an organization's security posture."
          },
          {
            "name": "What is 'Vulnerability Scanning'?",
            "detail": "Tools like Nessus or OpenVAS are used for this purpose."
          }
        ]
      },
      {
        "title": "Security Core",
        "topics": [
          {
            "name": "What is 'Identification' in security?",
            "detail": "The first step in the access control process."
          },
          {
            "name": "What is 'Authentication'?",
            "detail": "Usually involves a password, token, or biometric trait."
          },
          {
            "name": "What is the goal of 'Confidentiality' in the CIA triad?",
            "detail": "Confidentiality prevents unauthorized disclosure of information."
          },
          {
            "name": "What does 'Integrity' mean in security?",
            "detail": "Integrity ensures data is accurate and trustworthy."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cism-q1",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card at the building entrance",
          "Looking in a mirror to check your appearance",
          "Stating who you are (e.g., username)",
          "Taking a professional photo for a staff badge"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process.",
        "topic": "Security Core"
      },
      {
        "id": "cism-q2",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption tools",
          "Hashing algorithms",
          "Network Firewalls"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q3",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS attack from many sources",
          "A phishing attack targeted at high-level executives",
          "A type of network cable for data transmission",
          "The act of hunting whales in the natural ocean"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs.",
        "topic": "Attacks & Threats"
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
        "explanation": "If one layer fails, others are in place to stop the threat.",
        "topic": "Architecture"
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
        "explanation": "SSH is the secure alternative to the unencrypted Telnet.",
        "topic": "Architecture"
      },
      {
        "id": "cism-q6",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password for accessing a secure system",
          "Creating a new account for a website or application",
          "Determining what an authenticated user can do",
          "The act of entering a building through the front door"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user.",
        "topic": "Governance"
      },
      {
        "id": "cism-q7",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A specific type of agriculture involving data plants",
          "Redirecting users to a fake website by poisoning DNS",
          "The act of stealing emails from a remote server"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q8",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A physical gap between computer server racks in a room",
          "A small leak in a rubber tire that causes low pressure",
          "A specific type of high-speed Wi-Fi network connection",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems.",
        "topic": "Architecture"
      },
      {
        "id": "cism-q9",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing your account passwords every single week",
          "Using a secure and encrypted web browser for access",
          "Using a very long and complex alphanumeric password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q10",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A secure and encrypted hardware hard drive",
          "A specific way to find lost files on a computer",
          "A standard backup system for organizational data",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit.",
        "topic": "Architecture"
      },
      {
        "id": "cism-q11",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup of sensitive organizational data",
          "Giving permission to access a secure resource",
          "The act of logging out from a secure account",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait.",
        "topic": "Security Core"
      },
      {
        "id": "cism-q12",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A physical network hub for connecting devices",
          "A professional sports referee during a match",
          "A standard secure proxy for browsing the web",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q13",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server for data sets",
          "A secure database for organization",
          "A simple jar of honey from a bee"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets.",
        "topic": "Operations"
      },
      {
        "id": "cism-q14",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference between a virus and a worm",
          "Viruses are much faster than worms at infecting systems",
          "Worms are harmless and do not cause any system damage",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction.",
        "topic": "Attacks & Threats"
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
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity.",
        "topic": "Operations"
      },
      {
        "id": "cism-q16",
        "question": "What is 'War Driving'?",
        "options": [
          "A specific type of high-speed car race",
          "A standard military exercise for troops",
          "Driving a large tank in a combat zone",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit.",
        "topic": "Attacks & Threats"
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
        "explanation": "A policy allowing employees to use personal devices for work.",
        "topic": "Governance"
      },
      {
        "id": "cism-q18",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a physical hard drive with a cloth",
          "Running suspicious programs in an isolated area",
          "Testing website designs for better appearance",
          "The act of playing with sand on a large beach"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system.",
        "topic": "Operations"
      },
      {
        "id": "cism-q19",
        "question": "What is 'Biometrics'?",
        "options": [
          "A secure password manager for all accounts",
          "A type of firewall for network protection",
          "Studying biological data sets for research",
          "Using physical traits for authentication"
        ],
        "answer": "Using physical traits for authentication",
        "category": "Domain Review",
        "explanation": "Examples include fingerprints, iris scans, and facial recognition.",
        "topic": "Implementation"
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
        "explanation": "This minimizes potential impact of a security breach.",
        "topic": "Governance"
      },
      {
        "id": "cism-q21",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A network protocol for transmitting data sets",
          "A specific type of malicious computer virus",
          "A standard database backup for data safety",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q22",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory of all computer parts",
          "A list of all employees in a small company",
          "A path through the woods for outdoor hiking"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance.",
        "topic": "Operations"
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
        "explanation": "It's a low-tech social engineering technique.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q24",
        "question": "Which of these is a form of Symmetric encryption?",
        "options": [
          "Advanced Encryption Standard (AES)",
          "Diffie-Hellman Key Exchange",
          "Elliptic Curve Cryptography",
          "Rivest-Shamir-Adleman (RSA)"
        ],
        "answer": "Advanced Encryption Standard (AES)",
        "category": "Domain Review",
        "explanation": "Advanced Encryption Standard (AES) is the most common symmetric cipher.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q25",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A professional phone repair shop in a city center",
          "A specific type of mobile app for playing games",
          "Hiring a professional mobile expert to manage devices",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones.",
        "topic": "Architecture"
      },
      {
        "id": "cism-q26",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate and trustworthy",
          "Ensure data is compressed for storage",
          "Ensure only authorized users can read data",
          "Ensure services are up and available"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information.",
        "topic": "Security Core"
      },
      {
        "id": "cism-q27",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty that covers component repair costs",
          "A set of rules that define allowed traffic",
          "A standard insurance policy for a company building",
          "A technical manual for installing a network router"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets.",
        "topic": "Architecture"
      },
      {
        "id": "cism-q28",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A large wooden statue from Greek mythology",
          "A standard secure downloader for applications",
          "A type of virus that replicates automatically",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q29",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data to save storage space",
          "Converting plaintext into ciphertext",
          "Deleting files from a computer system",
          "Making data public for everyone to see"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q30",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol for transmitting data",
          "A specific type of professional stenography",
          "Hiding data within other data (like an image)",
          "The act of writing very fast during a meeting"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q31",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test for computer components",
          "A network speed test for measuring bandwidth",
          "A test of ink levels in a professional printer",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture.",
        "topic": "Operations"
      },
      {
        "id": "cism-q32",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest in all professional interactions",
          "Ensuring data has not been tampered with",
          "Keeping all organizational secrets safe",
          "Making sure the website is fast and responsive"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy.",
        "topic": "Security Core"
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
        "explanation": "Tools like Nessus or OpenVAS are used for this purpose.",
        "topic": "Operations"
      },
      {
        "id": "cism-q34",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall device for network security",
          "A tool for generating and storing passwords",
          "A type of secure and encrypted email service",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q35",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking into a financial institution or bank",
          "Installing physical cameras for security monitoring",
          "Manipulating people into giving up sensitive info",
          "Writing computer code for social media platforms"
        ],
        "answer": "Manipulating people into giving up sensitive info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q36",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range for large office buildings",
          "Better encryption and protection against brute force",
          "Cheaper hardware for small home applications",
          "Faster speeds only for all network connections"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks.",
        "topic": "Architecture"
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
        "explanation": "Botnets are used for large-scale attacks like DDoS.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q38",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing computer code for potential bugs",
          "Breaking a password using a brute force tool",
          "Converting ciphertext back into plaintext",
          "Downloading data from a remote computer server"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q39",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real physical door at the back of a room",
          "A specific type of network security firewall",
          "A standard secure login for a web application"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q40",
        "question": "What is 'Access Control'?",
        "options": [
          "A specific type of remote control for a television set",
          "Hiring a security guard to monitor the office building",
          "Restricting access to resources to authorized users",
          "The act of turning off the computer at the end of the day"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization.",
        "topic": "Architecture"
      },
      {
        "id": "cism-q41",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow (Memory)",
          "Cross-site scripting (Web)",
          "SQLi (Injection)",
          "Tailgating (Physical)"
        ],
        "answer": "Tailgating (Physical)",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area.",
        "topic": "Attacks & Threats"
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
        "explanation": "XSS can steal cookies and session info from users.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q43",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key that everyone in an office has",
          "A key used for opening a private room",
          "A physical metal key for opening a door",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures.",
        "topic": "Implementation"
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
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q45",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the hardware in the server room",
          "Detect viruses on a computer hard drive",
          "Filter traffic based on security rules",
          "Speed up the local internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy.",
        "topic": "Architecture"
      },
      {
        "id": "cism-q46",
        "question": "What is 'Eavesdropping' in network security?",
        "options": [
          "A secure network protocol for transmitting data",
          "A type of antenna designed for receiving radio data",
          "Listening through a physical wall using a device",
          "Unauthorized listening to private communication"
        ],
        "answer": "Unauthorized listening to private communication",
        "category": "Domain Review",
        "explanation": "This is a passive attack against confidentiality.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q47",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two different accounts for one service",
          "The act of logging in twice to the same system",
          "Using two different passwords for one account",
          "Using two different types of credentials"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password.",
        "topic": "Implementation"
      },
      {
        "id": "cism-q48",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device for organizational data",
          "A specific type of math problem for students",
          "An actual explosive used in a combat zone",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "cism-q49",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection that delays downloads",
          "A standard software update for computer applications",
          "Having too much data on a computer hard disk",
          "Overwriting memory to execute malicious code"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution.",
        "topic": "Attacks & Threats"
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
        "explanation": "In asymmetric encryption, the public key is used for encryption.",
        "topic": "Implementation"
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
        "title": "Architecture",
        "topics": [
          {
            "name": "What does a Firewall do?",
            "detail": "Firewalls control incoming and outgoing network traffic based on an organization's security policy."
          },
          {
            "name": "What is 'Access Control'?",
            "detail": "It involves identification, authentication, and authorization."
          },
          {
            "name": "Which protocol provides a secure shell for remote access?",
            "detail": "SSH is the secure alternative to the unencrypted Telnet."
          },
          {
            "name": "What is 'Defense in Depth'?",
            "detail": "If one layer fails, others are in place to stop the threat."
          },
          {
            "name": "What is a 'Firewall Policy'?",
            "detail": "It dictates how the firewall handles various types of packets."
          },
          {
            "name": "What does 'WPA3' improve over WPA2?",
            "detail": "WPA3 is the latest security standard for wireless networks."
          },
          {
            "name": "What is 'Mobile Device Management' (MDM)?",
            "detail": "MDM allows enforcing security policies on employee phones."
          },
          {
            "name": "What is 'Data Loss Prevention' (DLP)?",
            "detail": "DLP monitors data at rest, in use, and in transit."
          },
          {
            "name": "What is an 'Air Gap'?",
            "detail": "Air-gapping is used for extremely high-security systems."
          }
        ]
      },
      {
        "title": "Attacks & Threats",
        "topics": [
          {
            "name": "What is 'War Driving'?",
            "detail": "Attackers use this to find vulnerable wireless networks to exploit."
          },
          {
            "name": "What is 'Cross-Site Scripting' (XSS)?",
            "detail": "XSS can steal cookies and session info from users."
          },
          {
            "name": "What is a 'Logic Bomb'?",
            "detail": "Logic bombs can be planted by malicious insiders."
          },
          {
            "name": "What is 'Social Engineering'?",
            "detail": "It exploits human psychology rather than technical flaws."
          },
          {
            "name": "What is a 'Buffer Overflow'?",
            "detail": "It can lead to system crashes or arbitrary code execution."
          },
          {
            "name": "What is 'Spear Phishing'?",
            "detail": "Spear phishing is highly customized and more effective than general phishing."
          },
          {
            "name": "What does 'DDoS' stand for?",
            "detail": "DDoS attacks overwhelm a target with traffic from multiple sources."
          },
          {
            "name": "What is Ransomware?",
            "detail": "Ransomware locks users out of their data until a ransom is paid."
          },
          {
            "name": "What is a 'Trojan Horse'?",
            "detail": "Trojans do not replicate themselves like viruses or worms."
          },
          {
            "name": "What is 'Whaling'?",
            "detail": "Whaling targets 'big fish' like CEOs and CFOs."
          },
          {
            "name": "What is a 'Botnet'?",
            "detail": "Botnets are used for large-scale attacks like DDoS."
          },
          {
            "name": "What is 'Man-in-the-Middle' (MITM)?",
            "detail": "The attacker can read or even modify the data being sent."
          },
          {
            "name": "Which of these is a social engineering attack?",
            "detail": "Tailgating involves physically following an authorized person into a secure area."
          },
          {
            "name": "What is a 'Backdoor'?",
            "detail": "Backdoors can be used for maintenance or by attackers for persistence."
          },
          {
            "name": "What is a 'Rootkit'?",
            "detail": "Rootkits operate at a deep level of the OS to remain undetected."
          },
          {
            "name": "What is the difference between a 'Virus' and a 'Worm'?",
            "detail": "Worms can spread across a network without human interaction."
          },
          {
            "name": "What is 'SQL Injection'?",
            "detail": "SQLi can allow attackers to read or modify sensitive database data."
          },
          {
            "name": "What is 'Pharmimg'?",
            "detail": "Users think they are on a real site but are actually on a malicious one."
          },
          {
            "name": "What is a 'Zero-Day' vulnerability?",
            "detail": "Zero-day threats have no available patch at the time of discovery."
          }
        ]
      },
      {
        "title": "Governance",
        "topics": [
          {
            "name": "What is the 'Principle of Least Privilege'?",
            "detail": "This minimizes potential impact of a security breach."
          },
          {
            "name": "What is 'Authorization'?",
            "detail": "It defines the permissions and rights of a user."
          },
          {
            "name": "What is 'BYOD'?",
            "detail": "A policy allowing employees to use personal devices for work."
          }
        ]
      },
      {
        "title": "Implementation",
        "topics": [
          {
            "name": "What is the purpose of Hashing?",
            "detail": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes."
          },
          {
            "name": "What is Multi-Factor Authentication (MFA)?",
            "detail": "MFA combines something you know, something you have, and/or something you are."
          },
          {
            "name": "What is 'Encryption'?",
            "detail": "Encryption protects data from being read by unauthorized parties."
          },
          {
            "name": "What is a 'Private Key'?",
            "detail": "The private key is used for decryption or creating digital signatures."
          },
          {
            "name": "What is 'Decryption'?",
            "detail": "The reverse of encryption, usually requiring a key."
          },
          {
            "name": "What is a 'Public Key'?",
            "detail": "In asymmetric encryption, the public key is used for encryption."
          },
          {
            "name": "What is 'Two-Factor Authentication' (2FA)?",
            "detail": "It adds an extra layer of security beyond just a password."
          },
          {
            "name": "Which of these is used for 'Non-repudiation'?",
            "detail": "Non-repudiation ensures a sender cannot deny having sent a message."
          },
          {
            "name": "What is 'Steganography'?",
            "detail": "Data is hidden in plain sight, making it hard to detect."
          }
        ]
      },
      {
        "title": "Operations",
        "topics": [
          {
            "name": "What is the purpose of an 'IDS'?",
            "detail": "Intrusion Detection Systems monitor and alert for suspicious activity."
          },
          {
            "name": "What is a 'Penetration Test'?",
            "detail": "Pen-tests provide a deep assessment of an organization's security posture."
          },
          {
            "name": "What is 'Vulnerability Scanning'?",
            "detail": "Tools like Nessus or OpenVAS are used for this purpose."
          },
          {
            "name": "What is an 'Audit Trail'?",
            "detail": "Audit trails are crucial for incident investigation and compliance."
          },
          {
            "name": "What is the purpose of 'Sandboxing'?",
            "detail": "Sandboxing prevents malware from affecting the host system."
          },
          {
            "name": "What is a 'Honey Pot'?",
            "detail": "Honeypots help researchers study attacker behavior and deflect them from real targets."
          }
        ]
      },
      {
        "title": "Security Core",
        "topics": [
          {
            "name": "What is 'Authentication'?",
            "detail": "Usually involves a password, token, or biometric trait."
          },
          {
            "name": "What is 'Identification' in security?",
            "detail": "The first step in the access control process."
          },
          {
            "name": "What does 'Integrity' mean in security?",
            "detail": "Integrity ensures data is accurate and trustworthy."
          },
          {
            "name": "What is the goal of 'Confidentiality' in the CIA triad?",
            "detail": "Confidentiality prevents unauthorized disclosure of information."
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
        "explanation": "Intrusion Detection Systems monitor and alert for suspicious activity.",
        "topic": "Operations"
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
        "explanation": "Hashing creates a unique 'fingerprint' for data; if the data changes, the hash changes.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q3",
        "question": "What is 'Authentication'?",
        "options": [
          "Creating a backup of sensitive organizational data",
          "Giving permission to access a secure resource",
          "The act of logging out from a secure account",
          "Verifying that you are who you say you are"
        ],
        "answer": "Verifying that you are who you say you are",
        "category": "Domain Review",
        "explanation": "Usually involves a password, token, or biometric trait.",
        "topic": "Security Core"
      },
      {
        "id": "oscp-q4",
        "question": "What does a Firewall do?",
        "options": [
          "Cool down the hardware in the server room",
          "Detect viruses on a computer hard drive",
          "Filter traffic based on security rules",
          "Speed up the local internet connection"
        ],
        "answer": "Filter traffic based on security rules",
        "category": "Domain Review",
        "explanation": "Firewalls control incoming and outgoing network traffic based on an organization's security policy.",
        "topic": "Architecture"
      },
      {
        "id": "oscp-q5",
        "question": "What is Multi-Factor Authentication (MFA)?",
        "options": [
          "Changing your account passwords every single week",
          "Using a secure and encrypted web browser for access",
          "Using a very long and complex alphanumeric password",
          "Using two or more different factors to verify identity"
        ],
        "answer": "Using two or more different factors to verify identity",
        "category": "Domain Review",
        "explanation": "MFA combines something you know, something you have, and/or something you are.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q6",
        "question": "What is 'War Driving'?",
        "options": [
          "A specific type of high-speed car race",
          "A standard military exercise for troops",
          "Driving a large tank in a combat zone",
          "Searching for Wi-Fi networks from a vehicle"
        ],
        "answer": "Searching for Wi-Fi networks from a vehicle",
        "category": "Domain Review",
        "explanation": "Attackers use this to find vulnerable wireless networks to exploit.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q7",
        "question": "What is 'Access Control'?",
        "options": [
          "A specific type of remote control for a television set",
          "Hiring a security guard to monitor the office building",
          "Restricting access to resources to authorized users",
          "The act of turning off the computer at the end of the day"
        ],
        "answer": "Restricting access to resources to authorized users",
        "category": "Domain Review",
        "explanation": "It involves identification, authentication, and authorization.",
        "topic": "Architecture"
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
        "explanation": "XSS can steal cookies and session info from users.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q9",
        "question": "What is a 'Logic Bomb'?",
        "options": [
          "A secure storage device for organizational data",
          "A specific type of math problem for students",
          "An actual explosive used in a combat zone",
          "Malware that triggers on a specific event or time"
        ],
        "answer": "Malware that triggers on a specific event or time",
        "category": "Domain Review",
        "explanation": "Logic bombs can be planted by malicious insiders.",
        "topic": "Attacks & Threats"
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
        "explanation": "SSH is the secure alternative to the unencrypted Telnet.",
        "topic": "Architecture"
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
        "explanation": "If one layer fails, others are in place to stop the threat.",
        "topic": "Architecture"
      },
      {
        "id": "oscp-q12",
        "question": "What is 'Encryption'?",
        "options": [
          "Compressing data to save storage space",
          "Converting plaintext into ciphertext",
          "Deleting files from a computer system",
          "Making data public for everyone to see"
        ],
        "answer": "Converting plaintext into ciphertext",
        "category": "Domain Review",
        "explanation": "Encryption protects data from being read by unauthorized parties.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q13",
        "question": "What is 'Social Engineering'?",
        "options": [
          "Hacking into a financial institution or bank",
          "Installing physical cameras for security monitoring",
          "Manipulating people into giving up sensitive info",
          "Writing computer code for social media platforms"
        ],
        "answer": "Manipulating people into giving up sensitive info",
        "category": "Domain Review",
        "explanation": "It exploits human psychology rather than technical flaws.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q14",
        "question": "What is a 'Buffer Overflow'?",
        "options": [
          "A slow internet connection that delays downloads",
          "A standard software update for computer applications",
          "Having too much data on a computer hard disk",
          "Overwriting memory to execute malicious code"
        ],
        "answer": "Overwriting memory to execute malicious code",
        "category": "Domain Review",
        "explanation": "It can lead to system crashes or arbitrary code execution.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q15",
        "question": "What is 'Identification' in security?",
        "options": [
          "Checking an ID card at the building entrance",
          "Looking in a mirror to check your appearance",
          "Stating who you are (e.g., username)",
          "Taking a professional photo for a staff badge"
        ],
        "answer": "Stating who you are (e.g., username)",
        "category": "Domain Review",
        "explanation": "The first step in the access control process.",
        "topic": "Security Core"
      },
      {
        "id": "oscp-q16",
        "question": "What is 'Spear Phishing'?",
        "options": [
          "A type of network cable for data transfers",
          "A very fast attack that occurs in seconds",
          "Phishing targeted at a specific person",
          "Phishing with a physical weapon for theft"
        ],
        "answer": "Phishing targeted at a specific person",
        "category": "Domain Review",
        "explanation": "Spear phishing is highly customized and more effective than general phishing.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q17",
        "question": "What is a 'Firewall Policy'?",
        "options": [
          "A hardware warranty that covers component repair costs",
          "A set of rules that define allowed traffic",
          "A standard insurance policy for a company building",
          "A technical manual for installing a network router"
        ],
        "answer": "A set of rules that define allowed traffic",
        "category": "Domain Review",
        "explanation": "It dictates how the firewall handles various types of packets.",
        "topic": "Architecture"
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
        "explanation": "DDoS attacks overwhelm a target with traffic from multiple sources.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q19",
        "question": "What is Ransomware?",
        "options": [
          "A hardware firewall device for network security",
          "A tool for generating and storing passwords",
          "A type of secure and encrypted email service",
          "Malware that encrypts data and demands payment"
        ],
        "answer": "Malware that encrypts data and demands payment",
        "category": "Domain Review",
        "explanation": "Ransomware locks users out of their data until a ransom is paid.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q20",
        "question": "What does 'WPA3' improve over WPA2?",
        "options": [
          "Better Wi-Fi range for large office buildings",
          "Better encryption and protection against brute force",
          "Cheaper hardware for small home applications",
          "Faster speeds only for all network connections"
        ],
        "answer": "Better encryption and protection against brute force",
        "category": "Domain Review",
        "explanation": "WPA3 is the latest security standard for wireless networks.",
        "topic": "Architecture"
      },
      {
        "id": "oscp-q21",
        "question": "What is a 'Trojan Horse'?",
        "options": [
          "A large wooden statue from Greek mythology",
          "A standard secure downloader for applications",
          "A type of virus that replicates automatically",
          "Malware disguised as legitimate software"
        ],
        "answer": "Malware disguised as legitimate software",
        "category": "Domain Review",
        "explanation": "Trojans do not replicate themselves like viruses or worms.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q22",
        "question": "What is 'Whaling'?",
        "options": [
          "A large-scale DDoS attack from many sources",
          "A phishing attack targeted at high-level executives",
          "A type of network cable for data transmission",
          "The act of hunting whales in the natural ocean"
        ],
        "answer": "A phishing attack targeted at high-level executives",
        "category": "Domain Review",
        "explanation": "Whaling targets 'big fish' like CEOs and CFOs.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q23",
        "question": "What is a 'Private Key'?",
        "options": [
          "A key that everyone in an office has",
          "A key used for opening a private room",
          "A physical metal key for opening a door",
          "A secret key known only to the owner"
        ],
        "answer": "A secret key known only to the owner",
        "category": "Domain Review",
        "explanation": "The private key is used for decryption or creating digital signatures.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q24",
        "question": "What is 'Decryption'?",
        "options": [
          "Analyzing computer code for potential bugs",
          "Breaking a password using a brute force tool",
          "Converting ciphertext back into plaintext",
          "Downloading data from a remote computer server"
        ],
        "answer": "Converting ciphertext back into plaintext",
        "category": "Domain Review",
        "explanation": "The reverse of encryption, usually requiring a key.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q25",
        "question": "What is 'Mobile Device Management' (MDM)?",
        "options": [
          "A professional phone repair shop in a city center",
          "A specific type of mobile app for playing games",
          "Hiring a professional mobile expert to manage devices",
          "Software used to manage and secure mobile devices"
        ],
        "answer": "Software used to manage and secure mobile devices",
        "category": "Domain Review",
        "explanation": "MDM allows enforcing security policies on employee phones.",
        "topic": "Architecture"
      },
      {
        "id": "oscp-q26",
        "question": "What is a 'Penetration Test'?",
        "options": [
          "A hardware stress test for computer components",
          "A network speed test for measuring bandwidth",
          "A test of ink levels in a professional printer",
          "An authorized simulated attack to find flaws"
        ],
        "answer": "An authorized simulated attack to find flaws",
        "category": "Domain Review",
        "explanation": "Pen-tests provide a deep assessment of an organization's security posture.",
        "topic": "Operations"
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
        "explanation": "Botnets are used for large-scale attacks like DDoS.",
        "topic": "Attacks & Threats"
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
        "explanation": "Tools like Nessus or OpenVAS are used for this purpose.",
        "topic": "Operations"
      },
      {
        "id": "oscp-q29",
        "question": "What is an 'Audit Trail'?",
        "options": [
          "A chronological record of system activities",
          "A hardware inventory of all computer parts",
          "A list of all employees in a small company",
          "A path through the woods for outdoor hiking"
        ],
        "answer": "A chronological record of system activities",
        "category": "Domain Review",
        "explanation": "Audit trails are crucial for incident investigation and compliance.",
        "topic": "Operations"
      },
      {
        "id": "oscp-q30",
        "question": "What is 'Data Loss Prevention' (DLP)?",
        "options": [
          "A secure and encrypted hardware hard drive",
          "A specific way to find lost files on a computer",
          "A standard backup system for organizational data",
          "Tools to prevent sensitive data from leaving the network"
        ],
        "answer": "Tools to prevent sensitive data from leaving the network",
        "category": "Domain Review",
        "explanation": "DLP monitors data at rest, in use, and in transit.",
        "topic": "Architecture"
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
        "explanation": "In asymmetric encryption, the public key is used for encryption.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q32",
        "question": "What is 'Man-in-the-Middle' (MITM)?",
        "options": [
          "A physical network hub for connecting devices",
          "A professional sports referee during a match",
          "A standard secure proxy for browsing the web",
          "Intercepting communication between two parties"
        ],
        "answer": "Intercepting communication between two parties",
        "category": "Domain Review",
        "explanation": "The attacker can read or even modify the data being sent.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q33",
        "question": "Which of these is a social engineering attack?",
        "options": [
          "Buffer overflow (Memory)",
          "Cross-site scripting (Web)",
          "SQLi (Injection)",
          "Tailgating (Physical)"
        ],
        "answer": "Tailgating (Physical)",
        "category": "Domain Review",
        "explanation": "Tailgating involves physically following an authorized person into a secure area.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q34",
        "question": "What is an 'Air Gap'?",
        "options": [
          "A physical gap between computer server racks in a room",
          "A small leak in a rubber tire that causes low pressure",
          "A specific type of high-speed Wi-Fi network connection",
          "Physically isolating a computer from any network"
        ],
        "answer": "Physically isolating a computer from any network",
        "category": "Domain Review",
        "explanation": "Air-gapping is used for extremely high-security systems.",
        "topic": "Architecture"
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
        "explanation": "This minimizes potential impact of a security breach.",
        "topic": "Governance"
      },
      {
        "id": "oscp-q36",
        "question": "What does 'Integrity' mean in security?",
        "options": [
          "Being honest in all professional interactions",
          "Ensuring data has not been tampered with",
          "Keeping all organizational secrets safe",
          "Making sure the website is fast and responsive"
        ],
        "answer": "Ensuring data has not been tampered with",
        "category": "Domain Review",
        "explanation": "Integrity ensures data is accurate and trustworthy.",
        "topic": "Security Core"
      },
      {
        "id": "oscp-q37",
        "question": "What is the goal of 'Confidentiality' in the CIA triad?",
        "options": [
          "Ensure data is accurate and trustworthy",
          "Ensure data is compressed for storage",
          "Ensure only authorized users can read data",
          "Ensure services are up and available"
        ],
        "answer": "Ensure only authorized users can read data",
        "category": "Domain Review",
        "explanation": "Confidentiality prevents unauthorized disclosure of information.",
        "topic": "Security Core"
      },
      {
        "id": "oscp-q38",
        "question": "What is the purpose of 'Sandboxing'?",
        "options": [
          "Cleaning a physical hard drive with a cloth",
          "Running suspicious programs in an isolated area",
          "Testing website designs for better appearance",
          "The act of playing with sand on a large beach"
        ],
        "answer": "Running suspicious programs in an isolated area",
        "category": "Domain Review",
        "explanation": "Sandboxing prevents malware from affecting the host system.",
        "topic": "Operations"
      },
      {
        "id": "oscp-q39",
        "question": "What is a 'Backdoor'?",
        "options": [
          "A hidden way to bypass security",
          "A real physical door at the back of a room",
          "A specific type of network security firewall",
          "A standard secure login for a web application"
        ],
        "answer": "A hidden way to bypass security",
        "category": "Domain Review",
        "explanation": "Backdoors can be used for maintenance or by attackers for persistence.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q40",
        "question": "What is 'Authorization'?",
        "options": [
          "Checking a password for accessing a secure system",
          "Creating a new account for a website or application",
          "Determining what an authenticated user can do",
          "The act of entering a building through the front door"
        ],
        "answer": "Determining what an authenticated user can do",
        "category": "Domain Review",
        "explanation": "It defines the permissions and rights of a user.",
        "topic": "Governance"
      },
      {
        "id": "oscp-q41",
        "question": "What is a 'Rootkit'?",
        "options": [
          "A physical kit used for growing garden plants",
          "A tool for fixing roots of large trees outdoors",
          "A type of antivirus software for scanning files",
          "Malware that hides its presence on a system"
        ],
        "answer": "Malware that hides its presence on a system",
        "category": "Domain Review",
        "explanation": "Rootkits operate at a deep level of the OS to remain undetected.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q42",
        "question": "What is 'Two-Factor Authentication' (2FA)?",
        "options": [
          "Having two different accounts for one service",
          "The act of logging in twice to the same system",
          "Using two different passwords for one account",
          "Using two different types of credentials"
        ],
        "answer": "Using two different types of credentials",
        "category": "Domain Review",
        "explanation": "It adds an extra layer of security beyond just a password.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q43",
        "question": "What is the difference between a 'Virus' and a 'Worm'?",
        "options": [
          "There is no difference between a virus and a worm",
          "Viruses are much faster than worms at infecting systems",
          "Worms are harmless and do not cause any system damage",
          "Worms replicate automatically; viruses need host files"
        ],
        "answer": "Worms replicate automatically; viruses need host files",
        "category": "Domain Review",
        "explanation": "Worms can spread across a network without human interaction.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q44",
        "question": "Which of these is used for 'Non-repudiation'?",
        "options": [
          "Digital Signatures",
          "Encryption tools",
          "Hashing algorithms",
          "Network Firewalls"
        ],
        "answer": "Digital Signatures",
        "category": "Domain Review",
        "explanation": "Non-repudiation ensures a sender cannot deny having sent a message.",
        "topic": "Implementation"
      },
      {
        "id": "oscp-q45",
        "question": "What is 'SQL Injection'?",
        "options": [
          "A network protocol for transmitting data sets",
          "A specific type of malicious computer virus",
          "A standard database backup for data safety",
          "Injecting malicious SQL queries into an input field"
        ],
        "answer": "Injecting malicious SQL queries into an input field",
        "category": "Domain Review",
        "explanation": "SQLi can allow attackers to read or modify sensitive database data.",
        "topic": "Attacks & Threats"
      },
      {
        "id": "oscp-q46",
        "question": "What is a 'Honey Pot'?",
        "options": [
          "A decoy system to lure attackers",
          "A high-speed server for data sets",
          "A secure database for organization",
          "A simple jar of honey from a bee"
        ],
        "answer": "A decoy system to lure attackers",
        "category": "Domain Review",
        "explanation": "Honeypots help researchers study attacker behavior and deflect them from real targets.",
        "topic": "Operations"
      },
      {
        "id": "oscp-q47",
        "question": "What is 'Steganography'?",
        "options": [
          "A secure network protocol for transmitting data",
          "A specific type of professional stenography",
          "Hiding data within other data (like an image)",
          "The act of writing very fast during a meeting"
        ],
        "answer": "Hiding data within other data (like an image)",
        "category": "Domain Review",
        "explanation": "Data is hidden in plain sight, making it hard to detect.",
        "topic": "Implementation"
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
        "explanation": "A policy allowing employees to use personal devices for work.",
        "topic": "Governance"
      },
      {
        "id": "oscp-q49",
        "question": "What is 'Pharmimg'?",
        "options": [
          "A secure network protocol for transmitting data sets",
          "A specific type of agriculture involving data plants",
          "Redirecting users to a fake website by poisoning DNS",
          "The act of stealing emails from a remote server"
        ],
        "answer": "Redirecting users to a fake website by poisoning DNS",
        "category": "Domain Review",
        "explanation": "Users think they are on a real site but are actually on a malicious one.",
        "topic": "Attacks & Threats"
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
        "explanation": "Zero-day threats have no available patch at the time of discovery.",
        "topic": "Attacks & Threats"
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
        "title": "IP Services",
        "topics": [
          {
            "name": "What is the default subnet mask for a Class C network?",
            "detail": "Class C networks have a /24 mask."
          },
          {
            "name": "Which command checks the reachability of a DNS server?",
            "detail": "nslookup is used to query DNS servers for information."
          },
          {
            "name": "What does DHCP stand for?",
            "detail": "DHCP automatically assigns IP addresses to devices on a network."
          },
          {
            "name": "Which protocol resolves domain names to IP addresses?",
            "detail": "Domain Name System (DNS) maps human-readable names to IP addresses."
          },
          {
            "name": "What is the purpose of 'NAT'?",
            "detail": "Network Address Translation (NAT) allows multiple devices to share one public IP."
          },
          {
            "name": "What is the range of private IP addresses for Class A?",
            "detail": "The 10.0.0.0/8 block is reserved for private Class A networks."
          },
          {
            "name": "Which protocol uses port 53?",
            "detail": "DNS uses both UDP and TCP on port 53."
          },
          {
            "name": "What is the bit length of an IPv6 address?",
            "detail": "IPv6 addresses are 128 bits long, providing a massive address space."
          },
          {
            "name": "What is the function of a 'Subnet'?",
            "detail": "Subnetting improves organization and security."
          }
        ]
      },
      {
        "title": "Network Performance",
        "topics": [
          {
            "name": "What is 'Jitter' in networking?",
            "detail": "Low jitter is critical for real-time services like VoIP."
          },
          {
            "name": "What is the purpose of 'QoS'?",
            "detail": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice."
          }
        ]
      },
      {
        "title": "Network Services",
        "topics": [
          {
            "name": "Which protocol is commonly used for network management and monitoring?",
            "detail": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices."
          },
          {
            "name": "Which protocol uses port 25?",
            "detail": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails."
          },
          {
            "name": "What is the primary function of a Load Balancer?",
            "detail": "Load balancers improve reliability and performance by spreading load."
          },
          {
            "name": "What is the default port for FTP?",
            "detail": "File Transfer Protocol (FTP) uses port 21 for control."
          },
          {
            "name": "Which protocol is used to retrieve emails from a server and delete them after?",
            "detail": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server."
          },
          {
            "name": "Which protocol is used for synchronizing clocks on a network?",
            "detail": "Network Time Protocol (NTP) ensures all devices have the correct time."
          },
          {
            "name": "Which protocol uses port 3389?",
            "detail": "Remote Desktop Protocol (RDP) allows controlling a remote computer."
          }
        ]
      },
      {
        "title": "Network Troubleshooting",
        "topics": [
          {
            "name": "What is the purpose of the 'ping' command?",
            "detail": "Ping uses ICMP Echo Request messages to check if a remote host is reachable."
          },
          {
            "name": "Which command is used to trace the path a packet takes to its destination?",
            "detail": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination."
          },
          {
            "name": "Which command shows the MAC address on a Windows PC?",
            "detail": "All these commands can be used to find the physical address."
          }
        ]
      },
      {
        "title": "Networking Core",
        "topics": [
          {
            "name": "What is 'Half-Duplex'?",
            "detail": "Older hubs and walkie-talkies are half-duplex."
          },
          {
            "name": "What does 'MTU' stand for?",
            "detail": "MTU is the largest packet size a network can handle."
          },
          {
            "name": "What does 'full-duplex' mean?",
            "detail": "Full-duplex communication allows concurrent sending and receiving."
          },
          {
            "name": "What is the bit length of a MAC address?",
            "detail": "MAC addresses are 6-byte (48-bit) unique identifiers."
          },
          {
            "name": "What is the function of the ARP protocol?",
            "detail": "Address Resolution Protocol (ARP) finds the hardware address for a known IP."
          },
          {
            "name": "What is 'CSMA/CD' used for?",
            "detail": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol."
          },
          {
            "name": "Which topology connects all devices to a central hub?",
            "detail": "In a Star topology, if the central hub fails, the whole network goes down."
          }
        ]
      },
      {
        "title": "OSI Model",
        "topics": [
          {
            "name": "Which layer is responsible for encryption and compression?",
            "detail": "Layer 6 ensures data is in a usable format."
          },
          {
            "name": "Which layer defines electrical and physical specifications for devices?",
            "detail": "Layer 1 deals with cables, connectors, and signals."
          },
          {
            "name": "Which layer of the OSI model handles error-free physical delivery via MAC addresses?",
            "detail": "Layer 2 is responsible for node-to-node data transfer."
          }
        ]
      },
      {
        "title": "Physical Infrastructure",
        "topics": [
          {
            "name": "What is 'PoE'?",
            "detail": "PoE allows data cables to also carry electrical power to devices like IP cameras."
          },
          {
            "name": "Which cable type uses a laser as a light source?",
            "detail": "Single-mode uses lasers for long-distance transmission."
          },
          {
            "name": "Which type of cable is least susceptible to EMI?",
            "detail": "Fiber uses light instead of electricity, making it immune to electromagnetic interference."
          }
        ]
      },
      {
        "title": "Routing",
        "topics": [
          {
            "name": "Which routing protocol is known as the protocol of the internet?",
            "detail": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web."
          },
          {
            "name": "What does a Gateway do?",
            "detail": "A gateway serves as an entry/exit point for data between networks."
          },
          {
            "name": "Which device connects multiple networks and makes path decisions?",
            "detail": "Routers operate at Layer 3 and route traffic between different networks."
          },
          {
            "name": "Which command displays the routing table on a Cisco device?",
            "detail": "This command list all routes known to the router."
          }
        ]
      },
      {
        "title": "Security Fundamentals",
        "topics": [
          {
            "name": "Which protocol is used for securely browsing the web?",
            "detail": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server."
          },
          {
            "name": "What is the standard port for SSH?",
            "detail": "Secure Shell (SSH) uses port 22 by default."
          },
          {
            "name": "Which protocol is used to securely transfer files?",
            "detail": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer."
          },
          {
            "name": "What is an 'ACL' in networking?",
            "detail": "ACLs filter network traffic based on rules."
          },
          {
            "name": "What is the port for HTTPS?",
            "detail": "HTTPS (Secure) uses port 443."
          },
          {
            "name": "Which type of VPN connects two locations directly?",
            "detail": "Site-to-Site VPNs connect entire branch offices to headquarters."
          }
        ]
      },
      {
        "title": "Switching",
        "topics": [
          {
            "name": "What does a 'Collision Domain' refer to?",
            "detail": "Switches break up collision domains per port."
          },
          {
            "name": "What does 'VLAN Tagging' (802.1Q) allow?",
            "detail": "Tagging adds a header to indicate which VLAN a frame belongs to."
          },
          {
            "name": "What is 'STP' (Spanning Tree Protocol) used for?",
            "detail": "STP ensures there is only one active path between two network nodes."
          },
          {
            "name": "Which device operates at Layer 2 and makes forwarding decisions based on MAC addresses?",
            "detail": "Switches are more efficient than hubs as they only send data to the intended port."
          }
        ]
      },
      {
        "title": "Wireless",
        "topics": [
          {
            "name": "Which wireless standard supports speeds up to 6.9 Gbps in the 5GHz band?",
            "detail": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n."
          },
          {
            "name": "Which device is used to extend the range of a Wi-Fi signal?",
            "detail": "APs provide wireless connectivity to a wired network."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "jcia-junos-q1",
        "question": "What is the purpose of the 'ping' command?",
        "options": [
          "To change the local IP address",
          "To download a file from a server",
          "To secure a specific network port",
          "To test basic network connectivity"
        ],
        "answer": "To test basic network connectivity",
        "category": "Domain Review",
        "explanation": "Ping uses ICMP Echo Request messages to check if a remote host is reachable.",
        "topic": "Network Troubleshooting"
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
        "explanation": "Simple Network Management Protocol (SNMP) collects and organizes info about managed devices.",
        "topic": "Network Services"
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
        "explanation": "Layer 6 ensures data is in a usable format.",
        "topic": "OSI Model"
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
        "explanation": "Class C networks have a /24 mask.",
        "topic": "IP Services"
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
        "explanation": "Border Gateway Protocol (BGP) manages routing between autonomous systems on the web.",
        "topic": "Routing"
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
        "explanation": "nslookup is used to query DNS servers for information.",
        "topic": "IP Services"
      },
      {
        "id": "jcia-junos-q7",
        "question": "Which protocol is used for securely browsing the web?",
        "options": [
          "FTP (File Transfer Protocol)",
          "HTTP (Standard Protocol)",
          "HTTPS (Secure Protocol)",
          "SSH (Secure Shell Protocol)"
        ],
        "answer": "HTTPS (Secure Protocol)",
        "category": "Domain Review",
        "explanation": "HTTPS uses TLS/SSL to encrypt communication between the browser and the server.",
        "topic": "Security Fundamentals"
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
        "explanation": "PoE allows data cables to also carry electrical power to devices like IP cameras.",
        "topic": "Physical Infrastructure"
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
        "explanation": "Tracert (Windows) or traceroute (Linux) shows each hop to a destination.",
        "topic": "Network Troubleshooting"
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
        "explanation": "Simple Mail Transfer Protocol (SMTP) handles outgoing emails.",
        "topic": "Network Services"
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
        "explanation": "802.11ac (Wi-Fi 5) significantly improved throughput over 802.11n.",
        "topic": "Wireless"
      },
      {
        "id": "jcia-junos-q12",
        "question": "What does a 'Collision Domain' refer to?",
        "options": [
          "A group of devices where data packets can collide",
          "A set of devices sharing a single network router",
          "A single network cable connecting two different computers",
          "The entire internet-wide group of interconnected devices"
        ],
        "answer": "A group of devices where data packets can collide",
        "category": "Domain Review",
        "explanation": "Switches break up collision domains per port.",
        "topic": "Switching"
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
        "explanation": "DHCP automatically assigns IP addresses to devices on a network.",
        "topic": "IP Services"
      },
      {
        "id": "jcia-junos-q14",
        "question": "Which protocol resolves domain names to IP addresses?",
        "options": [
          "Address Resolution Protocol (ARP)",
          "Domain Name System (DNS)",
          "Dynamic Host Protocol (DHCP)",
          "Simple Management Protocol (SNMP)"
        ],
        "answer": "Domain Name System (DNS)",
        "category": "Domain Review",
        "explanation": "Domain Name System (DNS) maps human-readable names to IP addresses.",
        "topic": "IP Services"
      },
      {
        "id": "jcia-junos-q15",
        "question": "What does 'VLAN Tagging' (802.1Q) allow?",
        "options": [
          "Faster browsing of the web for all local users",
          "Hiding the network name for security purposes",
          "Identifying traffic for different VLANs on a trunk",
          "Printing documents wirelessly to a network printer"
        ],
        "answer": "Identifying traffic for different VLANs on a trunk",
        "category": "Domain Review",
        "explanation": "Tagging adds a header to indicate which VLAN a frame belongs to.",
        "topic": "Switching"
      },
      {
        "id": "jcia-junos-q16",
        "question": "What is the primary function of a Load Balancer?",
        "options": [
          "Assign IP addresses to all devices on the network",
          "Distribute incoming traffic across multiple servers",
          "Encrypt all incoming network traffic for security",
          "Store website files and images for fast access"
        ],
        "answer": "Distribute incoming traffic across multiple servers",
        "category": "Domain Review",
        "explanation": "Load balancers improve reliability and performance by spreading load.",
        "topic": "Network Services"
      },
      {
        "id": "jcia-junos-q17",
        "question": "What is 'Half-Duplex'?",
        "options": [
          "Data is sent at exactly half the standard speed",
          "Devices can send or receive but not both at once",
          "Only half of the data packets arrive at destination",
          "Only one device in the network can ever send data"
        ],
        "answer": "Devices can send or receive but not both at once",
        "category": "Domain Review",
        "explanation": "Older hubs and walkie-talkies are half-duplex.",
        "topic": "Networking Core"
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
        "explanation": "File Transfer Protocol (FTP) uses port 21 for control.",
        "topic": "Network Services"
      },
      {
        "id": "jcia-junos-q19",
        "question": "What is the purpose of 'NAT'?",
        "options": [
          "Assign unique names to all networking devices",
          "Check for physical breaks in networking cables",
          "Speed up the download of large files from the web",
          "Translate private IP addresses to public IP addresses"
        ],
        "answer": "Translate private IP addresses to public IP addresses",
        "category": "Domain Review",
        "explanation": "Network Address Translation (NAT) allows multiple devices to share one public IP.",
        "topic": "IP Services"
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
        "explanation": "The 10.0.0.0/8 block is reserved for private Class A networks.",
        "topic": "IP Services"
      },
      {
        "id": "jcia-junos-q21",
        "question": "What is the standard port for SSH?",
        "options": [
          "Port 22 (Standard SSH)",
          "Port 23 (Standard Telnet)",
          "Port 443 (Standard HTTPS)",
          "Port 80 (Standard HTTP)"
        ],
        "answer": "Port 22 (Standard SSH)",
        "category": "Domain Review",
        "explanation": "Secure Shell (SSH) uses port 22 by default.",
        "topic": "Security Fundamentals"
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
        "explanation": "Low jitter is critical for real-time services like VoIP.",
        "topic": "Network Performance"
      },
      {
        "id": "jcia-junos-q23",
        "question": "Which command shows the MAC address on a Windows PC?",
        "options": [
          "All of the above commands",
          "The arp -a command",
          "The getmac command",
          "The ipconfig /all command"
        ],
        "answer": "All of the above commands",
        "category": "Domain Review",
        "explanation": "All these commands can be used to find the physical address.",
        "topic": "Network Troubleshooting"
      },
      {
        "id": "jcia-junos-q24",
        "question": "Which cable type uses a laser as a light source?",
        "options": [
          "Multi-mode Fiber cabling",
          "Single-mode Fiber cabling",
          "Standard Coaxial cabling",
          "Unshielded Twisted Pair (UTP)"
        ],
        "answer": "Single-mode Fiber cabling",
        "category": "Domain Review",
        "explanation": "Single-mode uses lasers for long-distance transmission.",
        "topic": "Physical Infrastructure"
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
        "explanation": "A gateway serves as an entry/exit point for data between networks.",
        "topic": "Routing"
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
        "explanation": "MTU is the largest packet size a network can handle.",
        "topic": "Networking Core"
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
        "explanation": "Post Office Protocol v3 (POP3) typically downloads and removes mail from the server.",
        "topic": "Network Services"
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
        "explanation": "DNS uses both UDP and TCP on port 53.",
        "topic": "IP Services"
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
        "explanation": "Network Time Protocol (NTP) ensures all devices have the correct time.",
        "topic": "Network Services"
      },
      {
        "id": "jcia-junos-q30",
        "question": "Which device is used to extend the range of a Wi-Fi signal?",
        "options": [
          "Access Point (AP)",
          "Modem (Signal)",
          "Router (Network)",
          "Switch (Network)"
        ],
        "answer": "Access Point (AP)",
        "category": "Domain Review",
        "explanation": "APs provide wireless connectivity to a wired network.",
        "topic": "Wireless"
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
        "explanation": "Remote Desktop Protocol (RDP) allows controlling a remote computer.",
        "topic": "Network Services"
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
        "explanation": "SSH File Transfer Protocol (SFTP) provides secure file access and transfer.",
        "topic": "Security Fundamentals"
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
        "explanation": "Full-duplex communication allows concurrent sending and receiving.",
        "topic": "Networking Core"
      },
      {
        "id": "jcia-junos-q34",
        "question": "What is 'STP' (Spanning Tree Protocol) used for?",
        "options": [
          "Assign new IP addresses",
          "Encrypt all user passwords",
          "Prevent network loops in switches",
          "Speed up the local network"
        ],
        "answer": "Prevent network loops in switches",
        "category": "Domain Review",
        "explanation": "STP ensures there is only one active path between two network nodes.",
        "topic": "Switching"
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
        "explanation": "MAC addresses are 6-byte (48-bit) unique identifiers.",
        "topic": "Networking Core"
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
        "explanation": "ACLs filter network traffic based on rules.",
        "topic": "Security Fundamentals"
      },
      {
        "id": "jcia-junos-q37",
        "question": "Which type of cable is least susceptible to EMI?",
        "options": [
          "Coaxial cabling",
          "Fiber Optic cabling",
          "STP cabling",
          "UTP cabling"
        ],
        "answer": "Fiber Optic cabling",
        "category": "Domain Review",
        "explanation": "Fiber uses light instead of electricity, making it immune to electromagnetic interference.",
        "topic": "Physical Infrastructure"
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
        "explanation": "Layer 1 deals with cables, connectors, and signals.",
        "topic": "OSI Model"
      },
      {
        "id": "jcia-junos-q39",
        "question": "Which device connects multiple networks and makes path decisions?",
        "options": [
          "Hub (Layer 1 Device)",
          "Repeater (Layer 1 Device)",
          "Router (Layer 3 Device)",
          "Switch (Layer 2 Device)"
        ],
        "answer": "Router (Layer 3 Device)",
        "category": "Domain Review",
        "explanation": "Routers operate at Layer 3 and route traffic between different networks.",
        "topic": "Routing"
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
        "explanation": "HTTPS (Secure) uses port 443.",
        "topic": "Security Fundamentals"
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
        "explanation": "Address Resolution Protocol (ARP) finds the hardware address for a known IP.",
        "topic": "Networking Core"
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
        "explanation": "Layer 2 is responsible for node-to-node data transfer.",
        "topic": "OSI Model"
      },
      {
        "id": "jcia-junos-q43",
        "question": "What is the bit length of an IPv6 address?",
        "options": [
          "128 bits in length",
          "256 bits in length",
          "32 bits in length",
          "64 bits in length"
        ],
        "answer": "128 bits in length",
        "category": "Domain Review",
        "explanation": "IPv6 addresses are 128 bits long, providing a massive address space.",
        "topic": "IP Services"
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
        "explanation": "Quality of Service (QoS) ensures high priority for delay-sensitive data like voice.",
        "topic": "Network Performance"
      },
      {
        "id": "jcia-junos-q45",
        "question": "What is 'CSMA/CD' used for?",
        "options": [
          "Assigning unique IP addresses to network devices",
          "Detecting collisions in an Ethernet-based network",
          "Encrypting sensitive data for secure transmission",
          "Routing data packets between different networks"
        ],
        "answer": "Detecting collisions in an Ethernet-based network",
        "category": "Domain Review",
        "explanation": "Carrier Sense Multiple Access with Collision Detection is an older Ethernet protocol.",
        "topic": "Networking Core"
      },
      {
        "id": "jcia-junos-q46",
        "question": "What is the function of a 'Subnet'?",
        "options": [
          "Connect to the local network printer for printing",
          "Divide a large network into multiple smaller ones",
          "Speed up the processing power of the computer",
          "Store incoming and outgoing emails on the server"
        ],
        "answer": "Divide a large network into multiple smaller ones",
        "category": "Domain Review",
        "explanation": "Subnetting improves organization and security.",
        "topic": "IP Services"
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
        "explanation": "Site-to-Site VPNs connect entire branch offices to headquarters.",
        "topic": "Security Fundamentals"
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
        "explanation": "Switches are more efficient than hubs as they only send data to the intended port.",
        "topic": "Switching"
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
        "explanation": "In a Star topology, if the central hub fails, the whole network goes down.",
        "topic": "Networking Core"
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
        "explanation": "This command list all routes known to the router.",
        "topic": "Routing"
      }
    ]
  }
];
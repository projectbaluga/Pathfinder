export const certifications = [
  {
    "id": "ccna",
    "title": "Cisco Certified Network Associate (CCNA)",
    "issuer": "Cisco",
    "domain": "Networking",
    "level": "Intermediate",
    "price": 300,
    "duration": "120 mins",
    "questionsCount": "35",
    "desc": "Fundamentals for IT careers and networking technologies.",
    "description": "Fundamentals for IT careers and networking technologies.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Cisco Certified Network Associate (CCNA) exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "OSI Model Operations",
        "topics": [
          {
            "name": "OSI Layers Overview",
            "detail": "The Open Systems Interconnection (OSI) model divides network communication into seven logical layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer serves the layer above it and is served by the layer below. Common pitfalls include confusing the routing function (Layer 3) with the reliable delivery handshakes (Layer 4)."
          },
          {
            "name": "Data Encapsulation Flow",
            "detail": "As data moves down the stack, headers are appended. At Layer 4, the unit is a Segment. At Layer 3, an IP header is added, creating a Packet. At Layer 2, a MAC header and trailer are added, creating a Frame. Finally, Layer 1 transmits raw bits. Remember that switches process data up to Layer 2, whereas routers inspect up to Layer 3."
          }
        ]
      },
      {
        "title": "Dynamic Routing Protocols",
        "topics": [
          {
            "name": "OSPF Link-State Routing",
            "detail": "Open Shortest Path First (OSPF) is a link-state interior gateway routing protocol. It uses Dijkstra's Shortest Path First algorithm to build a complete map of the topology and determine the loop-free path with the lowest metric (cost). A common pitfall is mismatching hello timers or area IDs, which prevents neighbor relationships from forming."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Dynamic Routing Protocols",
            "detail": "This study segment examines core methodologies in the context of Dynamic Routing Protocols. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "IP Services",
            "detail": "This study segment examines core methodologies in the context of IP Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Switching Fundamentals",
            "detail": "This study segment examines core methodologies in the context of Switching Fundamentals. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Wireless Security",
            "detail": "This study segment examines core methodologies in the context of Wireless Security. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Infrastructure Ports",
            "detail": "This study segment examines core methodologies in the context of Infrastructure Ports. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "OSI Model Operations",
            "detail": "This study segment examines core methodologies in the context of OSI Model Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ccna-q1",
        "question": "A Cisco routing interface configured at 192.168.1.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccna-q2",
        "question": "Which standard networking protocol operates on port 22 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "ccna-q3",
        "question": "For a secure virtual network segment configured as VLAN 13, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 13) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccna-q4",
        "question": "A Cisco routing interface configured at 192.168.4.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Easy",
        "reference": "Wireless Security"
      },
      {
        "id": "ccna-q5",
        "question": "Which standard networking protocol operates on port 25 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Easy",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccna-q6",
        "question": "For a secure virtual network segment configured as VLAN 16, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 16) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Easy",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccna-q7",
        "question": "A Cisco routing interface configured at 192.168.7.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccna-q8",
        "question": "Which standard networking protocol operates on port 28 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "ccna-q9",
        "question": "For a secure virtual network segment configured as VLAN 19, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 19) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccna-q10",
        "question": "A Cisco routing interface configured at 192.168.10.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "ccna-q11",
        "question": "Which standard networking protocol operates on port 31 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccna-q12",
        "question": "For a secure virtual network segment configured as VLAN 22, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 22) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccna-q13",
        "question": "A Cisco routing interface configured at 192.168.13.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccna-q14",
        "question": "Which standard networking protocol operates on port 34 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "ccna-q15",
        "question": "For a secure virtual network segment configured as VLAN 25, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 25) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccna-q16",
        "question": "A Cisco routing interface configured at 192.168.16.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "ccna-q17",
        "question": "Which standard networking protocol operates on port 37 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccna-q18",
        "question": "For a secure virtual network segment configured as VLAN 28, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 28) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccna-q19",
        "question": "A Cisco routing interface configured at 192.168.19.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccna-q20",
        "question": "Which standard networking protocol operates on port 40 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "ccna-q21",
        "question": "For a secure virtual network segment configured as VLAN 31, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 31) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccna-q22",
        "question": "A Cisco routing interface configured at 192.168.22.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "ccna-q23",
        "question": "Which standard networking protocol operates on port 43 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccna-q24",
        "question": "For a secure virtual network segment configured as VLAN 34, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 34) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccna-q25",
        "question": "A Cisco routing interface configured at 192.168.25.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccna-q26",
        "question": "Which standard networking protocol operates on port 46 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "ccna-q27",
        "question": "For a secure virtual network segment configured as VLAN 37, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 37) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccna-q28",
        "question": "A Cisco routing interface configured at 192.168.28.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "ccna-q29",
        "question": "Which standard networking protocol operates on port 49 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccna-q30",
        "question": "For a secure virtual network segment configured as VLAN 40, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 40) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Hard",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccna-q31",
        "question": "A Cisco routing interface configured at 192.168.31.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccna-q32",
        "question": "Which standard networking protocol operates on port 52 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "ccna-q33",
        "question": "For a secure virtual network segment configured as VLAN 43, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 43) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccna-q34",
        "question": "A Cisco routing interface configured at 192.168.34.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "ccna-q35",
        "question": "Which standard networking protocol operates on port 55 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
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
    "questionsCount": "35",
    "desc": "Baseline skills for core security functions and IT security career.",
    "description": "Baseline skills for core security functions and IT security career.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the CompTIA Security+ exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Threats & Vulnerabilities",
        "topics": [
          {
            "name": "Social Engineering",
            "detail": "Social engineering exploits human cognitive biases to manipulate users into giving up credentials, passwords, or clicking on malicious links. Phishing, baiting, and tailgating are key techniques. Organizations must counter these via regular phishing simulations and continuous employee security awareness training."
          }
        ]
      },
      {
        "title": "Cryptography Principles",
        "topics": [
          {
            "name": "Symmetric vs Asymmetric",
            "detail": "Symmetric encryption uses a single shared secret key for encryption and decryption. Asymmetric uses a mathematically linked public-private key pair, solving key distribution issues. Common pitfalls include key exposure or using outdated symmetric algorithms such as DES instead of AES."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Cryptography Principles",
            "detail": "This study segment examines core methodologies in the context of Cryptography Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Network Security Controls",
            "detail": "This study segment examines core methodologies in the context of Network Security Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Identity and Access Management",
            "detail": "This study segment examines core methodologies in the context of Identity and Access Management. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Governance & Risk",
            "detail": "This study segment examines core methodologies in the context of Governance & Risk. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Threats & Vulnerabilities",
            "detail": "This study segment examines core methodologies in the context of Threats & Vulnerabilities. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "sec-plus-q1",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "sec-plus-q2",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "sec-plus-q3",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 152 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 152-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "sec-plus-q4",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "sec-plus-q5",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Easy",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "sec-plus-q6",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 176 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 176-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "sec-plus-q7",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "sec-plus-q8",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "sec-plus-q9",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 200 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 200-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "sec-plus-q10",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "sec-plus-q11",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "sec-plus-q12",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 224 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 224-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "sec-plus-q13",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "sec-plus-q14",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "sec-plus-q15",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 248 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 248-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "sec-plus-q16",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "sec-plus-q17",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "sec-plus-q18",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 272 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 272-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "sec-plus-q19",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "sec-plus-q20",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "sec-plus-q21",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 296 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 296-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "sec-plus-q22",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "sec-plus-q23",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "sec-plus-q24",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 320 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 320-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "sec-plus-q25",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "sec-plus-q26",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "sec-plus-q27",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 344 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 344-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "sec-plus-q28",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "sec-plus-q29",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "sec-plus-q30",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 368 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 368-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "sec-plus-q31",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "sec-plus-q32",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "sec-plus-q33",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 392 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 392-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "sec-plus-q34",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "sec-plus-q35",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
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
    "questionsCount": "35",
    "desc": "Overall understanding of the AWS Cloud platform.",
    "description": "Overall understanding of the AWS Cloud platform.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the AWS Certified Cloud Practitioner exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "AWS Infrastructure Design",
        "topics": [
          {
            "name": "Regions and AZs",
            "detail": "AWS has a global infrastructure consisting of Regions and Availability Zones (AZs). Regions are geographical areas, and AZs are discrete, physically isolated data centers within those regions designed for fault-tolerance. Designing for high-availability always requires spanning multiple AZs."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Azure Cloud Services",
            "detail": "This study segment examines core methodologies in the context of Azure Cloud Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Google Cloud Core Architectures",
            "detail": "This study segment examines core methodologies in the context of Google Cloud Core Architectures. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Oracle OCI Core Foundations",
            "detail": "This study segment examines core methodologies in the context of Oracle OCI Core Foundations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Shared Security Models",
            "detail": "This study segment examines core methodologies in the context of Shared Security Models. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "AWS Infrastructure Design",
            "detail": "This study segment examines core methodologies in the context of AWS Infrastructure Design. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-ccp-q1",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-ccp-q2",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-ccp-q3",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-003 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-003) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-ccp-q4",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-ccp-q5",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Easy",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-ccp-q6",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-006 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-006) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-ccp-q7",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-ccp-q8",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-ccp-q9",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-009 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-009) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-ccp-q10",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-ccp-q11",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-ccp-q12",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0012 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0012) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-ccp-q13",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-ccp-q14",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-ccp-q15",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0015 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0015) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-ccp-q16",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-ccp-q17",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-ccp-q18",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0018 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0018) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-ccp-q19",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-ccp-q20",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-ccp-q21",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0021 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0021) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-ccp-q22",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-ccp-q23",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-ccp-q24",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0024 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0024) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-ccp-q25",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-ccp-q26",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-ccp-q27",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0027 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0027) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-ccp-q28",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-ccp-q29",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-ccp-q30",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0030 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0030) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-ccp-q31",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-ccp-q32",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-ccp-q33",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0033 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0033) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-ccp-q34",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-ccp-q35",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
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
    "questionsCount": "35",
    "desc": "Gold standard of project management certification.",
    "description": "Gold standard of project management certification.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Project Management Professional (PMP) exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Agile Methodologies",
        "topics": [
          {
            "name": "Agile Scrum Practices",
            "detail": "Scrum is an empirical, iterative agile framework. It relies on small self-organizing teams, daily sync stand-ups, short time-boxed iterations (sprints), and three clear roles (Product Owner, Scrum Master, Developers). Key fact: the Scrum Master is a facilitator, not a traditional commanding manager."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Scrum Framework Core",
            "detail": "This study segment examines core methodologies in the context of Scrum Framework Core. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "PMBOK Basics",
            "detail": "This study segment examines core methodologies in the context of PMBOK Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Service Management Principles",
            "detail": "This study segment examines core methodologies in the context of Service Management Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Risk & Cost Controls",
            "detail": "This study segment examines core methodologies in the context of Risk & Cost Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Agile Methodologies",
            "detail": "This study segment examines core methodologies in the context of Agile Methodologies. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pmp-q1",
        "question": "During agile sprint number 1, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "pmp-q2",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "pmp-q3",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "pmp-q4",
        "question": "During agile sprint number 4, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "pmp-q5",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Easy",
        "reference": "Agile Methodologies"
      },
      {
        "id": "pmp-q6",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "pmp-q7",
        "question": "During agile sprint number 7, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "pmp-q8",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "pmp-q9",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "pmp-q10",
        "question": "During agile sprint number 10, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "pmp-q11",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "pmp-q12",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "pmp-q13",
        "question": "During agile sprint number 13, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "pmp-q14",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "pmp-q15",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "pmp-q16",
        "question": "During agile sprint number 16, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "pmp-q17",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "pmp-q18",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "pmp-q19",
        "question": "During agile sprint number 19, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "pmp-q20",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "pmp-q21",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "pmp-q22",
        "question": "During agile sprint number 22, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "pmp-q23",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "pmp-q24",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "pmp-q25",
        "question": "During agile sprint number 25, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "pmp-q26",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "pmp-q27",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "pmp-q28",
        "question": "During agile sprint number 28, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "pmp-q29",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "pmp-q30",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "pmp-q31",
        "question": "During agile sprint number 31, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "pmp-q32",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "pmp-q33",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "pmp-q34",
        "question": "During agile sprint number 34, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "pmp-q35",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
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
    "questionsCount": "35",
    "desc": "Standard for entry-level IT professionals.",
    "description": "Standard for entry-level IT professionals.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the CompTIA A+ exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Computer Hardware",
        "topics": [
          {
            "name": "CPU Fundamentals",
            "detail": "The Central Processing Unit (CPU) acts as the brain of the computer. It executes instructions through fetch-decode-execute cycles. Motherboard connections, clock speeds, and RAM cache interact with it. Always ensure proper thermal paste application during assembly to prevent heat throttling."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Linux Permissions",
            "detail": "This study segment examines core methodologies in the context of Linux Permissions. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Terraform Operations",
            "detail": "This study segment examines core methodologies in the context of Terraform Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure Data Operations",
            "detail": "This study segment examines core methodologies in the context of Azure Data Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure AI Services",
            "detail": "This study segment examines core methodologies in the context of Azure AI Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Power Platform Basics",
            "detail": "This study segment examines core methodologies in the context of Power Platform Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Computer Hardware",
            "detail": "This study segment examines core methodologies in the context of Computer Hardware. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aplus-q1",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "aplus-q2",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "aplus-q3",
        "question": "A system engineer configures local folder privileges using the command CHMOD 703. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "aplus-q4",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Easy",
        "reference": "Azure AI Services"
      },
      {
        "id": "aplus-q5",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Easy",
        "reference": "Power Platform Basics"
      },
      {
        "id": "aplus-q6",
        "question": "A system engineer configures local folder privileges using the command CHMOD 706. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Easy",
        "reference": "Computer Hardware"
      },
      {
        "id": "aplus-q7",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "aplus-q8",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "aplus-q9",
        "question": "A system engineer configures local folder privileges using the command CHMOD 709. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "aplus-q10",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "aplus-q11",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "aplus-q12",
        "question": "A system engineer configures local folder privileges using the command CHMOD 712. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "aplus-q13",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "aplus-q14",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "aplus-q15",
        "question": "A system engineer configures local folder privileges using the command CHMOD 715. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "aplus-q16",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "aplus-q17",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "aplus-q18",
        "question": "A system engineer configures local folder privileges using the command CHMOD 718. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "aplus-q19",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "aplus-q20",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "aplus-q21",
        "question": "A system engineer configures local folder privileges using the command CHMOD 721. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "aplus-q22",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "aplus-q23",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "aplus-q24",
        "question": "A system engineer configures local folder privileges using the command CHMOD 724. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "aplus-q25",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "aplus-q26",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "aplus-q27",
        "question": "A system engineer configures local folder privileges using the command CHMOD 727. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "aplus-q28",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "aplus-q29",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
      },
      {
        "id": "aplus-q30",
        "question": "A system engineer configures local folder privileges using the command CHMOD 730. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Hard",
        "reference": "Computer Hardware"
      },
      {
        "id": "aplus-q31",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "aplus-q32",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "aplus-q33",
        "question": "A system engineer configures local folder privileges using the command CHMOD 733. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "aplus-q34",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "aplus-q35",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
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
    "questionsCount": "35",
    "desc": "Essential knowledge for a career in IT infrastructure.",
    "description": "Essential knowledge for a career in IT infrastructure.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the CompTIA Network+ exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Network Topologies",
        "topics": [
          {
            "name": "Star vs Mesh",
            "detail": "A Star topology connects all devices to a single central switch/hub. A Mesh topology interconnects multiple nodes directly, offering extreme fault-tolerance at higher hardware cost. Mesh is common in high-availability backbones, while Star is standard for local area access networks."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Dynamic Routing Protocols",
            "detail": "This study segment examines core methodologies in the context of Dynamic Routing Protocols. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "IP Services",
            "detail": "This study segment examines core methodologies in the context of IP Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Switching Fundamentals",
            "detail": "This study segment examines core methodologies in the context of Switching Fundamentals. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Wireless Security",
            "detail": "This study segment examines core methodologies in the context of Wireless Security. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Infrastructure Ports",
            "detail": "This study segment examines core methodologies in the context of Infrastructure Ports. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "OSI Model Operations",
            "detail": "This study segment examines core methodologies in the context of OSI Model Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "network-plus-q1",
        "question": "A Cisco routing interface configured at 192.168.1.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "network-plus-q2",
        "question": "Which standard networking protocol operates on port 22 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "network-plus-q3",
        "question": "For a secure virtual network segment configured as VLAN 13, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 13) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "network-plus-q4",
        "question": "A Cisco routing interface configured at 192.168.4.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Easy",
        "reference": "Wireless Security"
      },
      {
        "id": "network-plus-q5",
        "question": "Which standard networking protocol operates on port 25 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Easy",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "network-plus-q6",
        "question": "For a secure virtual network segment configured as VLAN 16, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 16) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Easy",
        "reference": "OSI Model Operations"
      },
      {
        "id": "network-plus-q7",
        "question": "A Cisco routing interface configured at 192.168.7.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "network-plus-q8",
        "question": "Which standard networking protocol operates on port 28 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "network-plus-q9",
        "question": "For a secure virtual network segment configured as VLAN 19, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 19) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "network-plus-q10",
        "question": "A Cisco routing interface configured at 192.168.10.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "network-plus-q11",
        "question": "Which standard networking protocol operates on port 31 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "network-plus-q12",
        "question": "For a secure virtual network segment configured as VLAN 22, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 22) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "network-plus-q13",
        "question": "A Cisco routing interface configured at 192.168.13.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "network-plus-q14",
        "question": "Which standard networking protocol operates on port 34 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "network-plus-q15",
        "question": "For a secure virtual network segment configured as VLAN 25, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 25) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "network-plus-q16",
        "question": "A Cisco routing interface configured at 192.168.16.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "network-plus-q17",
        "question": "Which standard networking protocol operates on port 37 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "network-plus-q18",
        "question": "For a secure virtual network segment configured as VLAN 28, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 28) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "network-plus-q19",
        "question": "A Cisco routing interface configured at 192.168.19.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "network-plus-q20",
        "question": "Which standard networking protocol operates on port 40 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "network-plus-q21",
        "question": "For a secure virtual network segment configured as VLAN 31, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 31) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "network-plus-q22",
        "question": "A Cisco routing interface configured at 192.168.22.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "network-plus-q23",
        "question": "Which standard networking protocol operates on port 43 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "network-plus-q24",
        "question": "For a secure virtual network segment configured as VLAN 34, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 34) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "network-plus-q25",
        "question": "A Cisco routing interface configured at 192.168.25.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "network-plus-q26",
        "question": "Which standard networking protocol operates on port 46 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "network-plus-q27",
        "question": "For a secure virtual network segment configured as VLAN 37, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 37) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "network-plus-q28",
        "question": "A Cisco routing interface configured at 192.168.28.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "network-plus-q29",
        "question": "Which standard networking protocol operates on port 49 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "network-plus-q30",
        "question": "For a secure virtual network segment configured as VLAN 40, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 40) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Hard",
        "reference": "OSI Model Operations"
      },
      {
        "id": "network-plus-q31",
        "question": "A Cisco routing interface configured at 192.168.31.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "network-plus-q32",
        "question": "Which standard networking protocol operates on port 52 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "network-plus-q33",
        "question": "For a secure virtual network segment configured as VLAN 43, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 43) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "network-plus-q34",
        "question": "A Cisco routing interface configured at 192.168.34.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "network-plus-q35",
        "question": "Which standard networking protocol operates on port 55 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
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
    "questionsCount": "35",
    "desc": "Implementing and operating core network technologies.",
    "description": "Implementing and operating core network technologies.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the CCNP Enterprise ENCOR exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Advanced Routing",
        "topics": [
          {
            "name": "BGP Operations",
            "detail": "Border Gateway Protocol (BGP) is the primary Exterior Gateway Protocol (EGP) powering the Internet. It uses path vectors, path attributes, and policies instead of raw distance metrics to route packets. Understanding BGP path attributes (like AS-Path, Local Preference) is crucial for controlling traffic."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Dynamic Routing Protocols",
            "detail": "This study segment examines core methodologies in the context of Dynamic Routing Protocols. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "IP Services",
            "detail": "This study segment examines core methodologies in the context of IP Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Switching Fundamentals",
            "detail": "This study segment examines core methodologies in the context of Switching Fundamentals. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Wireless Security",
            "detail": "This study segment examines core methodologies in the context of Wireless Security. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Infrastructure Ports",
            "detail": "This study segment examines core methodologies in the context of Infrastructure Ports. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "OSI Model Operations",
            "detail": "This study segment examines core methodologies in the context of OSI Model Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ccnp-encor-q1",
        "question": "A Cisco routing interface configured at 192.168.1.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccnp-encor-q2",
        "question": "Which standard networking protocol operates on port 22 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "ccnp-encor-q3",
        "question": "For a secure virtual network segment configured as VLAN 13, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 13) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccnp-encor-q4",
        "question": "A Cisco routing interface configured at 192.168.4.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Easy",
        "reference": "Wireless Security"
      },
      {
        "id": "ccnp-encor-q5",
        "question": "Which standard networking protocol operates on port 25 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Easy",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccnp-encor-q6",
        "question": "For a secure virtual network segment configured as VLAN 16, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 16) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Easy",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccnp-encor-q7",
        "question": "A Cisco routing interface configured at 192.168.7.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccnp-encor-q8",
        "question": "Which standard networking protocol operates on port 28 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "ccnp-encor-q9",
        "question": "For a secure virtual network segment configured as VLAN 19, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 19) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccnp-encor-q10",
        "question": "A Cisco routing interface configured at 192.168.10.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "ccnp-encor-q11",
        "question": "Which standard networking protocol operates on port 31 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccnp-encor-q12",
        "question": "For a secure virtual network segment configured as VLAN 22, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 22) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccnp-encor-q13",
        "question": "A Cisco routing interface configured at 192.168.13.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccnp-encor-q14",
        "question": "Which standard networking protocol operates on port 34 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "ccnp-encor-q15",
        "question": "For a secure virtual network segment configured as VLAN 25, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 25) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccnp-encor-q16",
        "question": "A Cisco routing interface configured at 192.168.16.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "ccnp-encor-q17",
        "question": "Which standard networking protocol operates on port 37 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccnp-encor-q18",
        "question": "For a secure virtual network segment configured as VLAN 28, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 28) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccnp-encor-q19",
        "question": "A Cisco routing interface configured at 192.168.19.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccnp-encor-q20",
        "question": "Which standard networking protocol operates on port 40 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "ccnp-encor-q21",
        "question": "For a secure virtual network segment configured as VLAN 31, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 31) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccnp-encor-q22",
        "question": "A Cisco routing interface configured at 192.168.22.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "ccnp-encor-q23",
        "question": "Which standard networking protocol operates on port 43 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccnp-encor-q24",
        "question": "For a secure virtual network segment configured as VLAN 34, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 34) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccnp-encor-q25",
        "question": "A Cisco routing interface configured at 192.168.25.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccnp-encor-q26",
        "question": "Which standard networking protocol operates on port 46 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "ccnp-encor-q27",
        "question": "For a secure virtual network segment configured as VLAN 37, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 37) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccnp-encor-q28",
        "question": "A Cisco routing interface configured at 192.168.28.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "ccnp-encor-q29",
        "question": "Which standard networking protocol operates on port 49 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "ccnp-encor-q30",
        "question": "For a secure virtual network segment configured as VLAN 40, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 40) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Hard",
        "reference": "OSI Model Operations"
      },
      {
        "id": "ccnp-encor-q31",
        "question": "A Cisco routing interface configured at 192.168.31.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "ccnp-encor-q32",
        "question": "Which standard networking protocol operates on port 52 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "ccnp-encor-q33",
        "question": "For a secure virtual network segment configured as VLAN 43, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 43) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "ccnp-encor-q34",
        "question": "A Cisco routing interface configured at 192.168.34.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "ccnp-encor-q35",
        "question": "Which standard networking protocol operates on port 55 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
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
    "questionsCount": "35",
    "desc": "The gold standard for info security professionals.",
    "description": "The gold standard for info security professionals.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Certified Information Systems Security Professional exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Security Risk Management",
        "topics": [
          {
            "name": "CIA Triad Principles",
            "detail": "The core of information security rests on the CIA Triad: Confidentiality (data is hidden), Integrity (data is untampered), and Availability (systems are operational and accessible). Security policies must carefully balance these three priorities, as excessive confidentiality controls can reduce availability."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Cryptography Principles",
            "detail": "This study segment examines core methodologies in the context of Cryptography Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Network Security Controls",
            "detail": "This study segment examines core methodologies in the context of Network Security Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Identity and Access Management",
            "detail": "This study segment examines core methodologies in the context of Identity and Access Management. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Governance & Risk",
            "detail": "This study segment examines core methodologies in the context of Governance & Risk. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Threats & Vulnerabilities",
            "detail": "This study segment examines core methodologies in the context of Threats & Vulnerabilities. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cissp-q1",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cissp-q2",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "cissp-q3",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 152 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 152-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cissp-q4",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "cissp-q5",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Easy",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cissp-q6",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 176 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 176-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cissp-q7",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "cissp-q8",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cissp-q9",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 200 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 200-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "cissp-q10",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cissp-q11",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cissp-q12",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 224 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 224-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "cissp-q13",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cissp-q14",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "cissp-q15",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 248 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 248-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cissp-q16",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cissp-q17",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "cissp-q18",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 272 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 272-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cissp-q19",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "cissp-q20",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cissp-q21",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 296 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 296-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cissp-q22",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "cissp-q23",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cissp-q24",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 320 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 320-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "cissp-q25",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cissp-q26",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cissp-q27",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 344 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 344-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "cissp-q28",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cissp-q29",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "cissp-q30",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 368 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 368-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cissp-q31",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cissp-q32",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "cissp-q33",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 392 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 392-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cissp-q34",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "cissp-q35",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
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
    "questionsCount": "35",
    "desc": "Master the 5 phases of ethical hacking.",
    "description": "Master the 5 phases of ethical hacking.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Certified Ethical Hacker exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Ethical Hacking Phases",
        "topics": [
          {
            "name": "Reconnaissance Phase",
            "detail": "Ethical hacking begins with Reconnaissance (information gathering), followed by Scanning, Gaining Access, Maintaining Access, and Clearing Tracks. Active scanning (such as ping sweeps) should only be executed under strict authorized contracts."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Cryptography Principles",
            "detail": "This study segment examines core methodologies in the context of Cryptography Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Network Security Controls",
            "detail": "This study segment examines core methodologies in the context of Network Security Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Identity and Access Management",
            "detail": "This study segment examines core methodologies in the context of Identity and Access Management. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Governance & Risk",
            "detail": "This study segment examines core methodologies in the context of Governance & Risk. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Threats & Vulnerabilities",
            "detail": "This study segment examines core methodologies in the context of Threats & Vulnerabilities. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ceh-q1",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "ceh-q2",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "ceh-q3",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 152 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 152-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "ceh-q4",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "ceh-q5",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Easy",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "ceh-q6",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 176 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 176-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "ceh-q7",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "ceh-q8",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "ceh-q9",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 200 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 200-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "ceh-q10",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "ceh-q11",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "ceh-q12",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 224 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 224-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "ceh-q13",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "ceh-q14",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "ceh-q15",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 248 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 248-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "ceh-q16",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "ceh-q17",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "ceh-q18",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 272 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 272-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "ceh-q19",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "ceh-q20",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "ceh-q21",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 296 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 296-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "ceh-q22",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "ceh-q23",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "ceh-q24",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 320 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 320-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "ceh-q25",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "ceh-q26",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "ceh-q27",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 344 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 344-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "ceh-q28",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "ceh-q29",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "ceh-q30",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 368 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 368-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "ceh-q31",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "ceh-q32",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "ceh-q33",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 392 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 392-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "ceh-q34",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "ceh-q35",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
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
    "questionsCount": "35",
    "desc": "Design cost-efficient, fault-tolerant systems on AWS.",
    "description": "Design cost-efficient, fault-tolerant systems on AWS.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the AWS Solutions Architect - Associate exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Fault Tolerant AWS Architectures",
        "topics": [
          {
            "name": "S3 Storage Tiers",
            "detail": "AWS Simple Storage Service (S3) provides storage classes like S3 Standard, Standard-IA (Infrequent Access), One Zone-IA, and Glacier, optimizing costs based on access speeds and frequency patterns. Lifecycle policies can automate transitioning objects across these tiers over time."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Azure Cloud Services",
            "detail": "This study segment examines core methodologies in the context of Azure Cloud Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Google Cloud Core Architectures",
            "detail": "This study segment examines core methodologies in the context of Google Cloud Core Architectures. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Oracle OCI Core Foundations",
            "detail": "This study segment examines core methodologies in the context of Oracle OCI Core Foundations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Shared Security Models",
            "detail": "This study segment examines core methodologies in the context of Shared Security Models. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "AWS Infrastructure Design",
            "detail": "This study segment examines core methodologies in the context of AWS Infrastructure Design. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "aws-sa-assoc-q1",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-sa-assoc-q2",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-sa-assoc-q3",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-003 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-003) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-sa-assoc-q4",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-sa-assoc-q5",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Easy",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-sa-assoc-q6",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-006 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-006) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-sa-assoc-q7",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-sa-assoc-q8",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-sa-assoc-q9",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-009 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-009) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-sa-assoc-q10",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-sa-assoc-q11",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-sa-assoc-q12",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0012 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0012) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-sa-assoc-q13",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-sa-assoc-q14",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-sa-assoc-q15",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0015 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0015) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-sa-assoc-q16",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-sa-assoc-q17",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-sa-assoc-q18",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0018 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0018) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-sa-assoc-q19",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-sa-assoc-q20",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-sa-assoc-q21",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0021 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0021) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-sa-assoc-q22",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-sa-assoc-q23",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-sa-assoc-q24",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0024 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0024) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-sa-assoc-q25",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-sa-assoc-q26",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-sa-assoc-q27",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0027 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0027) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-sa-assoc-q28",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-sa-assoc-q29",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-sa-assoc-q30",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0030 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0030) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "aws-sa-assoc-q31",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "aws-sa-assoc-q32",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "aws-sa-assoc-q33",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0033 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0033) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "aws-sa-assoc-q34",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "aws-sa-assoc-q35",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
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
    "questionsCount": "35",
    "desc": "Foundational knowledge of cloud services and Azure.",
    "description": "Foundational knowledge of cloud services and Azure.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Microsoft Certified: Azure Fundamentals exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Azure Cloud Services",
        "topics": [
          {
            "name": "Resource Groups",
            "detail": "Azure Resource Groups act as logical containers for grouping and organizing resources. Resources like virtual networks, storage accounts, and VMs are grouped for management, deployments, and billing clarity."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Azure Cloud Services",
            "detail": "This study segment examines core methodologies in the context of Azure Cloud Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Google Cloud Core Architectures",
            "detail": "This study segment examines core methodologies in the context of Google Cloud Core Architectures. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Oracle OCI Core Foundations",
            "detail": "This study segment examines core methodologies in the context of Oracle OCI Core Foundations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Shared Security Models",
            "detail": "This study segment examines core methodologies in the context of Shared Security Models. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "AWS Infrastructure Design",
            "detail": "This study segment examines core methodologies in the context of AWS Infrastructure Design. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "az-900-q1",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-900-q2",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-900-q3",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-003 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-003) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-900-q4",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-900-q5",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Easy",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-900-q6",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-006 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-006) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-900-q7",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-900-q8",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-900-q9",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-009 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-009) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-900-q10",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-900-q11",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-900-q12",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0012 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0012) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-900-q13",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-900-q14",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-900-q15",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0015 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0015) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-900-q16",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-900-q17",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-900-q18",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0018 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0018) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-900-q19",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-900-q20",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-900-q21",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0021 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0021) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-900-q22",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-900-q23",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-900-q24",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0024 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0024) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-900-q25",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-900-q26",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-900-q27",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0027 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0027) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-900-q28",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-900-q29",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-900-q30",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0030 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0030) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-900-q31",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-900-q32",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-900-q33",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0033 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0033) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-900-q34",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-900-q35",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
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
    "questionsCount": "35",
    "desc": "Implement, manage, and monitor Azure environments.",
    "description": "Implement, manage, and monitor Azure environments.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Microsoft Azure Administrator exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Azure Administrating",
        "topics": [
          {
            "name": "Azure AD Syncing",
            "detail": "Azure AD (now Entra ID) provides enterprise-level identity management. Direct Active Directory syncing enables seamless single sign-on (SSO) experience for hybrid setups, leveraging Microsoft Entra Connect."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Azure Cloud Services",
            "detail": "This study segment examines core methodologies in the context of Azure Cloud Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Google Cloud Core Architectures",
            "detail": "This study segment examines core methodologies in the context of Google Cloud Core Architectures. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Oracle OCI Core Foundations",
            "detail": "This study segment examines core methodologies in the context of Oracle OCI Core Foundations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Shared Security Models",
            "detail": "This study segment examines core methodologies in the context of Shared Security Models. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "AWS Infrastructure Design",
            "detail": "This study segment examines core methodologies in the context of AWS Infrastructure Design. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "az-104-q1",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-104-q2",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-104-q3",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-003 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-003) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-104-q4",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-104-q5",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Easy",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-104-q6",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-006 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-006) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-104-q7",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-104-q8",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-104-q9",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-009 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-009) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-104-q10",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-104-q11",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-104-q12",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0012 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0012) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-104-q13",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-104-q14",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-104-q15",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0015 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0015) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-104-q16",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-104-q17",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-104-q18",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0018 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0018) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-104-q19",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-104-q20",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-104-q21",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0021 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0021) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-104-q22",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-104-q23",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-104-q24",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0024 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0024) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-104-q25",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-104-q26",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-104-q27",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0027 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0027) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-104-q28",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-104-q29",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-104-q30",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0030 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0030) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "az-104-q31",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "az-104-q32",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "az-104-q33",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0033 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0033) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "az-104-q34",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "az-104-q35",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
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
    "questionsCount": "35",
    "desc": "Design and manage robust solutions on Google Cloud.",
    "description": "Design and manage robust solutions on Google Cloud.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Google Professional Cloud Architect exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Google Cloud Core Architectures",
        "topics": [
          {
            "name": "GKE Cluster Operations",
            "detail": "Google Kubernetes Engine (GKE) is a secure, production-ready environment for containerized app deployments, providing automated node scaling, robust cloud updates, and built-in load balancers."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Azure Cloud Services",
            "detail": "This study segment examines core methodologies in the context of Azure Cloud Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Google Cloud Core Architectures",
            "detail": "This study segment examines core methodologies in the context of Google Cloud Core Architectures. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Oracle OCI Core Foundations",
            "detail": "This study segment examines core methodologies in the context of Oracle OCI Core Foundations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Shared Security Models",
            "detail": "This study segment examines core methodologies in the context of Shared Security Models. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "AWS Infrastructure Design",
            "detail": "This study segment examines core methodologies in the context of AWS Infrastructure Design. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "gcp-pca-q1",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "gcp-pca-q2",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "gcp-pca-q3",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-003 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-003) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "gcp-pca-q4",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "gcp-pca-q5",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Easy",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "gcp-pca-q6",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-006 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-006) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "gcp-pca-q7",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "gcp-pca-q8",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "gcp-pca-q9",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-009 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-009) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "gcp-pca-q10",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "gcp-pca-q11",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "gcp-pca-q12",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0012 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0012) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "gcp-pca-q13",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "gcp-pca-q14",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "gcp-pca-q15",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0015 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0015) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "gcp-pca-q16",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "gcp-pca-q17",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "gcp-pca-q18",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0018 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0018) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "gcp-pca-q19",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "gcp-pca-q20",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "gcp-pca-q21",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0021 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0021) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "gcp-pca-q22",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "gcp-pca-q23",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "gcp-pca-q24",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0024 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0024) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "gcp-pca-q25",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "gcp-pca-q26",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "gcp-pca-q27",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0027 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0027) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "gcp-pca-q28",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "gcp-pca-q29",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "gcp-pca-q30",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0030 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0030) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "gcp-pca-q31",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "gcp-pca-q32",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "gcp-pca-q33",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0033 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0033) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "gcp-pca-q34",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "gcp-pca-q35",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
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
    "questionsCount": "35",
    "desc": "Fundamental knowledge of OCI public cloud services.",
    "description": "Fundamental knowledge of OCI public cloud services.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the OCI Foundations Associate exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Oracle OCI Core Foundations",
        "topics": [
          {
            "name": "Compartments",
            "detail": "Compartments are logical collections of OCI resources used to segregate systems, secure environment settings, and map IAM access rights. They partition cloud instances and networks cleanly."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Azure Cloud Services",
            "detail": "This study segment examines core methodologies in the context of Azure Cloud Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Google Cloud Core Architectures",
            "detail": "This study segment examines core methodologies in the context of Google Cloud Core Architectures. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Oracle OCI Core Foundations",
            "detail": "This study segment examines core methodologies in the context of Oracle OCI Core Foundations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Shared Security Models",
            "detail": "This study segment examines core methodologies in the context of Shared Security Models. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "AWS Infrastructure Design",
            "detail": "This study segment examines core methodologies in the context of AWS Infrastructure Design. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "oci-found-q1",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "oci-found-q2",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "oci-found-q3",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-003 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-003) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "oci-found-q4",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "oci-found-q5",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Easy",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "oci-found-q6",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-006 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-006) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Easy",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "oci-found-q7",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Easy",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "oci-found-q8",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Easy",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "oci-found-q9",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-009 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-009) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Easy",
        "reference": "Shared Security Models"
      },
      {
        "id": "oci-found-q10",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "oci-found-q11",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "oci-found-q12",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0012 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Core Knowledge",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0012) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "oci-found-q13",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Core Knowledge",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "oci-found-q14",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Core Knowledge",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "oci-found-q15",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0015 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0015) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "oci-found-q16",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "oci-found-q17",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "oci-found-q18",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0018 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0018) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "oci-found-q19",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "oci-found-q20",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Medium",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "oci-found-q21",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0021 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0021) with complete routing control.",
        "topic": "Azure Cloud Services",
        "difficulty": "Medium",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "oci-found-q22",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Medium",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "oci-found-q23",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Medium",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "oci-found-q24",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0024 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0024) with complete routing control.",
        "topic": "Shared Security Models",
        "difficulty": "Medium",
        "reference": "Shared Security Models"
      },
      {
        "id": "oci-found-q25",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "oci-found-q26",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "oci-found-q27",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0027 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0027) with complete routing control.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "oci-found-q28",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "oci-found-q29",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "oci-found-q30",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0030 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0030) with complete routing control.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
      },
      {
        "id": "oci-found-q31",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Azure Cloud Services",
        "difficulty": "Hard",
        "reference": "Azure Cloud Services"
      },
      {
        "id": "oci-found-q32",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "Google Cloud Core Architectures",
        "difficulty": "Hard",
        "reference": "Google Cloud Core Architectures"
      },
      {
        "id": "oci-found-q33",
        "question": "A development team wants to deploy scalable virtual machines under identity inst-0033 in an isolated private cloud network. Which construct applies?",
        "options": [
          "Virtual Private Cloud (VPC)",
          "Content Delivery Network",
          "Edge Gateway Location",
          "Container Cluster Registry"
        ],
        "answer": "Virtual Private Cloud (VPC)",
        "category": "Domain Review",
        "explanation": "A VPC establishes a logically isolated virtual network context for deploying secure web instances (like inst-0033) with complete routing control.",
        "topic": "Oracle OCI Core Foundations",
        "difficulty": "Hard",
        "reference": "Oracle OCI Core Foundations"
      },
      {
        "id": "oci-found-q34",
        "question": "According to the Cloud Shared Responsibility Model, which component represents a strict responsibility of the cloud CUSTOMER?",
        "options": [
          "Guest OS Patching and Data",
          "Physical Data Center Security",
          "Hypervisor Hardware Maintenance",
          "Global Fiber Backbone Cables"
        ],
        "answer": "Guest OS Patching and Data",
        "category": "Domain Review",
        "explanation": "Under shared security models, the cloud provider manages infrastructure host security, while customers secure their data, operating systems, and configurations.",
        "topic": "Shared Security Models",
        "difficulty": "Hard",
        "reference": "Shared Security Models"
      },
      {
        "id": "oci-found-q35",
        "question": "Which cloud deployment benefit allows systems to scale compute capacities automatically in response to varying live demand peaks?",
        "options": [
          "Elasticity",
          "Fixed Capitol Billing",
          "Static IP Routing",
          "Global Availability Zones"
        ],
        "answer": "Elasticity",
        "category": "Domain Review",
        "explanation": "Elasticity is the core cloud attribute allowing auto-scaling algorithms to expand or contract virtual resources dynamically to match request loads.",
        "topic": "AWS Infrastructure Design",
        "difficulty": "Hard",
        "reference": "AWS Infrastructure Design"
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
    "questionsCount": "35",
    "desc": "Entry-level certification for project team members.",
    "description": "Entry-level certification for project team members.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Certified Associate in Project Management exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "PMBOK Basics",
        "topics": [
          {
            "name": "Project Lifecycle",
            "detail": "A project lifecycle defines the structural stages (Initiating, Planning, Executing, Monitoring/Controlling, Closing) that a project transitions through from start to finish. Lifecycle maps vary from predictive sequential to adaptive agile."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Scrum Framework Core",
            "detail": "This study segment examines core methodologies in the context of Scrum Framework Core. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "PMBOK Basics",
            "detail": "This study segment examines core methodologies in the context of PMBOK Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Service Management Principles",
            "detail": "This study segment examines core methodologies in the context of Service Management Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Risk & Cost Controls",
            "detail": "This study segment examines core methodologies in the context of Risk & Cost Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Agile Methodologies",
            "detail": "This study segment examines core methodologies in the context of Agile Methodologies. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "capm-q1",
        "question": "During agile sprint number 1, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "capm-q2",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "capm-q3",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "capm-q4",
        "question": "During agile sprint number 4, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "capm-q5",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Easy",
        "reference": "Agile Methodologies"
      },
      {
        "id": "capm-q6",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "capm-q7",
        "question": "During agile sprint number 7, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "capm-q8",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "capm-q9",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "capm-q10",
        "question": "During agile sprint number 10, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "capm-q11",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "capm-q12",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "capm-q13",
        "question": "During agile sprint number 13, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "capm-q14",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "capm-q15",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "capm-q16",
        "question": "During agile sprint number 16, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "capm-q17",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "capm-q18",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "capm-q19",
        "question": "During agile sprint number 19, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "capm-q20",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "capm-q21",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "capm-q22",
        "question": "During agile sprint number 22, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "capm-q23",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "capm-q24",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "capm-q25",
        "question": "During agile sprint number 25, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "capm-q26",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "capm-q27",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "capm-q28",
        "question": "During agile sprint number 28, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "capm-q29",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "capm-q30",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "capm-q31",
        "question": "During agile sprint number 31, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "capm-q32",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "capm-q33",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "capm-q34",
        "question": "During agile sprint number 34, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "capm-q35",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
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
    "questionsCount": "35",
    "desc": "Lead Agile teams and deliver high-value results.",
    "description": "Lead Agile teams and deliver high-value results.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Certified ScrumMaster (CSM) exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Scrum Framework Core",
        "topics": [
          {
            "name": "Scrum Events",
            "detail": "Scrum defines 5 core time-boxed events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. They enable continuous inspection, product iteration, and team improvement sessions."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Scrum Framework Core",
            "detail": "This study segment examines core methodologies in the context of Scrum Framework Core. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "PMBOK Basics",
            "detail": "This study segment examines core methodologies in the context of PMBOK Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Service Management Principles",
            "detail": "This study segment examines core methodologies in the context of Service Management Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Risk & Cost Controls",
            "detail": "This study segment examines core methodologies in the context of Risk & Cost Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Agile Methodologies",
            "detail": "This study segment examines core methodologies in the context of Agile Methodologies. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "csm-q1",
        "question": "During agile sprint number 1, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "csm-q2",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "csm-q3",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "csm-q4",
        "question": "During agile sprint number 4, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "csm-q5",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Easy",
        "reference": "Agile Methodologies"
      },
      {
        "id": "csm-q6",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "csm-q7",
        "question": "During agile sprint number 7, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "csm-q8",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "csm-q9",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "csm-q10",
        "question": "During agile sprint number 10, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "csm-q11",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "csm-q12",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "csm-q13",
        "question": "During agile sprint number 13, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "csm-q14",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "csm-q15",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "csm-q16",
        "question": "During agile sprint number 16, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "csm-q17",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "csm-q18",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "csm-q19",
        "question": "During agile sprint number 19, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "csm-q20",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "csm-q21",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "csm-q22",
        "question": "During agile sprint number 22, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "csm-q23",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "csm-q24",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "csm-q25",
        "question": "During agile sprint number 25, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "csm-q26",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "csm-q27",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "csm-q28",
        "question": "During agile sprint number 28, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "csm-q29",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "csm-q30",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "csm-q31",
        "question": "During agile sprint number 31, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "csm-q32",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "csm-q33",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "csm-q34",
        "question": "During agile sprint number 34, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "csm-q35",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
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
    "questionsCount": "35",
    "desc": "Digital-first operating model for service management.",
    "description": "Digital-first operating model for service management.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the ITIL 4 Foundation exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "ITIL Service Management",
        "topics": [
          {
            "name": "Service Value System",
            "detail": "The ITIL 4 Service Value System (SVS) defines how all components and activities of an organization work together as a system to enable value creation. SVS maps the collaborative translation of opportunities into real services."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Scrum Framework Core",
            "detail": "This study segment examines core methodologies in the context of Scrum Framework Core. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "PMBOK Basics",
            "detail": "This study segment examines core methodologies in the context of PMBOK Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Service Management Principles",
            "detail": "This study segment examines core methodologies in the context of Service Management Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Risk & Cost Controls",
            "detail": "This study segment examines core methodologies in the context of Risk & Cost Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Agile Methodologies",
            "detail": "This study segment examines core methodologies in the context of Agile Methodologies. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "itil-found-q1",
        "question": "During agile sprint number 1, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "itil-found-q2",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "itil-found-q3",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "itil-found-q4",
        "question": "During agile sprint number 4, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "itil-found-q5",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Easy",
        "reference": "Agile Methodologies"
      },
      {
        "id": "itil-found-q6",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Easy",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "itil-found-q7",
        "question": "During agile sprint number 7, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Easy",
        "reference": "PMBOK Basics"
      },
      {
        "id": "itil-found-q8",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Easy",
        "reference": "Service Management Principles"
      },
      {
        "id": "itil-found-q9",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Easy",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "itil-found-q10",
        "question": "During agile sprint number 10, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "itil-found-q11",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "itil-found-q12",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Core Knowledge",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "itil-found-q13",
        "question": "During agile sprint number 13, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Core Knowledge",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "itil-found-q14",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Core Knowledge",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "itil-found-q15",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "itil-found-q16",
        "question": "During agile sprint number 16, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "itil-found-q17",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "itil-found-q18",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "itil-found-q19",
        "question": "During agile sprint number 19, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "itil-found-q20",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Medium",
        "reference": "Agile Methodologies"
      },
      {
        "id": "itil-found-q21",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Scrum Framework Core",
        "difficulty": "Medium",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "itil-found-q22",
        "question": "During agile sprint number 22, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "PMBOK Basics",
        "difficulty": "Medium",
        "reference": "PMBOK Basics"
      },
      {
        "id": "itil-found-q23",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Service Management Principles",
        "difficulty": "Medium",
        "reference": "Service Management Principles"
      },
      {
        "id": "itil-found-q24",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Medium",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "itil-found-q25",
        "question": "During agile sprint number 25, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "itil-found-q26",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "itil-found-q27",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "itil-found-q28",
        "question": "During agile sprint number 28, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "itil-found-q29",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "itil-found-q30",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
      },
      {
        "id": "itil-found-q31",
        "question": "During agile sprint number 31, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Scrum Framework Core",
        "difficulty": "Hard",
        "reference": "Scrum Framework Core"
      },
      {
        "id": "itil-found-q32",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "PMBOK Basics",
        "difficulty": "Hard",
        "reference": "PMBOK Basics"
      },
      {
        "id": "itil-found-q33",
        "question": "To determine the minimum structural duration of a project containing multiple interdependent phases, which path should be calculated?",
        "options": [
          "Critical Path Method",
          "Agile Velocity Baseline",
          "EVM Cost Variance Path",
          "Sprint Backlog Hierarchy"
        ],
        "answer": "Critical Path Method",
        "category": "Domain Review",
        "explanation": "The Critical Path Method calculates the longest sequence of dependent project phases, mapping the shortest duration to completion.",
        "topic": "Service Management Principles",
        "difficulty": "Hard",
        "reference": "Service Management Principles"
      },
      {
        "id": "itil-found-q34",
        "question": "During agile sprint number 34, the Scrum Master holds daily stand-up syncs. What is the primary purpose of this ceremony?",
        "options": [
          "Synchronize daily progress",
          "Demo completed products",
          "Conduct detailed performance reviews",
          "Re-negotiate contract scope"
        ],
        "answer": "Synchronize daily progress",
        "category": "Domain Review",
        "explanation": "Daily Stand-ups are brief ceremonies aimed at synchronizing daily team activities, identifying blockers, and adjusting plans.",
        "topic": "Risk & Cost Controls",
        "difficulty": "Hard",
        "reference": "Risk & Cost Controls"
      },
      {
        "id": "itil-found-q35",
        "question": "An organization experiences unexpected feature modifications added to a project without proper authorization. What is this phenomenon called?",
        "options": [
          "Scope Creep",
          "Sprint Retrospective",
          "Resource Levelling",
          "Process Bottleneck"
        ],
        "answer": "Scope Creep",
        "category": "Domain Review",
        "explanation": "Scope Creep refers to uncontrolled, unauthorized additions to project requirements without adjustments to budget or schedules.",
        "topic": "Agile Methodologies",
        "difficulty": "Hard",
        "reference": "Agile Methodologies"
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
    "questionsCount": "35",
    "desc": "Securely manage Linux-based IT infrastructure.",
    "description": "Securely manage Linux-based IT infrastructure.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the CompTIA Linux+ exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Linux Permissions",
        "topics": [
          {
            "name": "Octal Permissions",
            "detail": "Linux maps file permissions to Read (4), Write (2), and Execute (1). CHMOD settings like 755 assign Owner (Full), Group (Read/Execute), and Others (Read/Execute) privileges cleanly and securely."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Linux Permissions",
            "detail": "This study segment examines core methodologies in the context of Linux Permissions. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Terraform Operations",
            "detail": "This study segment examines core methodologies in the context of Terraform Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure Data Operations",
            "detail": "This study segment examines core methodologies in the context of Azure Data Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure AI Services",
            "detail": "This study segment examines core methodologies in the context of Azure AI Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Power Platform Basics",
            "detail": "This study segment examines core methodologies in the context of Power Platform Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Computer Hardware",
            "detail": "This study segment examines core methodologies in the context of Computer Hardware. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "linux-plus-q1",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "linux-plus-q2",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "linux-plus-q3",
        "question": "A system engineer configures local folder privileges using the command CHMOD 703. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "linux-plus-q4",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Easy",
        "reference": "Azure AI Services"
      },
      {
        "id": "linux-plus-q5",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Easy",
        "reference": "Power Platform Basics"
      },
      {
        "id": "linux-plus-q6",
        "question": "A system engineer configures local folder privileges using the command CHMOD 706. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Easy",
        "reference": "Computer Hardware"
      },
      {
        "id": "linux-plus-q7",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "linux-plus-q8",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "linux-plus-q9",
        "question": "A system engineer configures local folder privileges using the command CHMOD 709. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "linux-plus-q10",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "linux-plus-q11",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "linux-plus-q12",
        "question": "A system engineer configures local folder privileges using the command CHMOD 712. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "linux-plus-q13",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "linux-plus-q14",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "linux-plus-q15",
        "question": "A system engineer configures local folder privileges using the command CHMOD 715. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "linux-plus-q16",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "linux-plus-q17",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "linux-plus-q18",
        "question": "A system engineer configures local folder privileges using the command CHMOD 718. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "linux-plus-q19",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "linux-plus-q20",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "linux-plus-q21",
        "question": "A system engineer configures local folder privileges using the command CHMOD 721. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "linux-plus-q22",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "linux-plus-q23",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "linux-plus-q24",
        "question": "A system engineer configures local folder privileges using the command CHMOD 724. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "linux-plus-q25",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "linux-plus-q26",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "linux-plus-q27",
        "question": "A system engineer configures local folder privileges using the command CHMOD 727. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "linux-plus-q28",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "linux-plus-q29",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
      },
      {
        "id": "linux-plus-q30",
        "question": "A system engineer configures local folder privileges using the command CHMOD 730. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Hard",
        "reference": "Computer Hardware"
      },
      {
        "id": "linux-plus-q31",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "linux-plus-q32",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "linux-plus-q33",
        "question": "A system engineer configures local folder privileges using the command CHMOD 733. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "linux-plus-q34",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "linux-plus-q35",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
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
    "questionsCount": "35",
    "desc": "Infrastructure as Code (IaC) concepts and skills.",
    "description": "Infrastructure as Code (IaC) concepts and skills.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the HashiCorp Certified: Terraform Associate exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Terraform Operations",
        "topics": [
          {
            "name": "State File Purpose",
            "detail": "Terraform relies on state files (terraform.tfstate) to keep track of mapped infrastructure resources, metadata details, and active dependency locks. Never edit the state file directly by hand."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Linux Permissions",
            "detail": "This study segment examines core methodologies in the context of Linux Permissions. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Terraform Operations",
            "detail": "This study segment examines core methodologies in the context of Terraform Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure Data Operations",
            "detail": "This study segment examines core methodologies in the context of Azure Data Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure AI Services",
            "detail": "This study segment examines core methodologies in the context of Azure AI Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Power Platform Basics",
            "detail": "This study segment examines core methodologies in the context of Power Platform Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Computer Hardware",
            "detail": "This study segment examines core methodologies in the context of Computer Hardware. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "terraform-assoc-q1",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "terraform-assoc-q2",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "terraform-assoc-q3",
        "question": "A system engineer configures local folder privileges using the command CHMOD 703. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "terraform-assoc-q4",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Easy",
        "reference": "Azure AI Services"
      },
      {
        "id": "terraform-assoc-q5",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Easy",
        "reference": "Power Platform Basics"
      },
      {
        "id": "terraform-assoc-q6",
        "question": "A system engineer configures local folder privileges using the command CHMOD 706. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Easy",
        "reference": "Computer Hardware"
      },
      {
        "id": "terraform-assoc-q7",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "terraform-assoc-q8",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "terraform-assoc-q9",
        "question": "A system engineer configures local folder privileges using the command CHMOD 709. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "terraform-assoc-q10",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "terraform-assoc-q11",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "terraform-assoc-q12",
        "question": "A system engineer configures local folder privileges using the command CHMOD 712. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "terraform-assoc-q13",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "terraform-assoc-q14",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "terraform-assoc-q15",
        "question": "A system engineer configures local folder privileges using the command CHMOD 715. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "terraform-assoc-q16",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "terraform-assoc-q17",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "terraform-assoc-q18",
        "question": "A system engineer configures local folder privileges using the command CHMOD 718. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "terraform-assoc-q19",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "terraform-assoc-q20",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "terraform-assoc-q21",
        "question": "A system engineer configures local folder privileges using the command CHMOD 721. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "terraform-assoc-q22",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "terraform-assoc-q23",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "terraform-assoc-q24",
        "question": "A system engineer configures local folder privileges using the command CHMOD 724. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "terraform-assoc-q25",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "terraform-assoc-q26",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "terraform-assoc-q27",
        "question": "A system engineer configures local folder privileges using the command CHMOD 727. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "terraform-assoc-q28",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "terraform-assoc-q29",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
      },
      {
        "id": "terraform-assoc-q30",
        "question": "A system engineer configures local folder privileges using the command CHMOD 730. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Hard",
        "reference": "Computer Hardware"
      },
      {
        "id": "terraform-assoc-q31",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "terraform-assoc-q32",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "terraform-assoc-q33",
        "question": "A system engineer configures local folder privileges using the command CHMOD 733. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "terraform-assoc-q34",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "terraform-assoc-q35",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
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
    "questionsCount": "35",
    "desc": "Foundational knowledge of core data concepts in Azure.",
    "description": "Foundational knowledge of core data concepts in Azure.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Microsoft Azure Data Fundamentals exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Azure Data Operations",
        "topics": [
          {
            "name": "Azure Cosmos DB",
            "detail": "Azure Cosmos DB is a globally distributed, multi-model database service supporting NoSQL document tables, keys, and graphs, with single-digit millisecond latency SLAs."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Linux Permissions",
            "detail": "This study segment examines core methodologies in the context of Linux Permissions. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Terraform Operations",
            "detail": "This study segment examines core methodologies in the context of Terraform Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure Data Operations",
            "detail": "This study segment examines core methodologies in the context of Azure Data Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure AI Services",
            "detail": "This study segment examines core methodologies in the context of Azure AI Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Power Platform Basics",
            "detail": "This study segment examines core methodologies in the context of Power Platform Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Computer Hardware",
            "detail": "This study segment examines core methodologies in the context of Computer Hardware. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "dp-900-q1",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "dp-900-q2",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "dp-900-q3",
        "question": "A system engineer configures local folder privileges using the command CHMOD 703. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "dp-900-q4",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Easy",
        "reference": "Azure AI Services"
      },
      {
        "id": "dp-900-q5",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Easy",
        "reference": "Power Platform Basics"
      },
      {
        "id": "dp-900-q6",
        "question": "A system engineer configures local folder privileges using the command CHMOD 706. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Easy",
        "reference": "Computer Hardware"
      },
      {
        "id": "dp-900-q7",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "dp-900-q8",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "dp-900-q9",
        "question": "A system engineer configures local folder privileges using the command CHMOD 709. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "dp-900-q10",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "dp-900-q11",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "dp-900-q12",
        "question": "A system engineer configures local folder privileges using the command CHMOD 712. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "dp-900-q13",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "dp-900-q14",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "dp-900-q15",
        "question": "A system engineer configures local folder privileges using the command CHMOD 715. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "dp-900-q16",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "dp-900-q17",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "dp-900-q18",
        "question": "A system engineer configures local folder privileges using the command CHMOD 718. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "dp-900-q19",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "dp-900-q20",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "dp-900-q21",
        "question": "A system engineer configures local folder privileges using the command CHMOD 721. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "dp-900-q22",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "dp-900-q23",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "dp-900-q24",
        "question": "A system engineer configures local folder privileges using the command CHMOD 724. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "dp-900-q25",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "dp-900-q26",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "dp-900-q27",
        "question": "A system engineer configures local folder privileges using the command CHMOD 727. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "dp-900-q28",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "dp-900-q29",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
      },
      {
        "id": "dp-900-q30",
        "question": "A system engineer configures local folder privileges using the command CHMOD 730. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Hard",
        "reference": "Computer Hardware"
      },
      {
        "id": "dp-900-q31",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "dp-900-q32",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "dp-900-q33",
        "question": "A system engineer configures local folder privileges using the command CHMOD 733. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "dp-900-q34",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "dp-900-q35",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
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
    "questionsCount": "35",
    "desc": "Foundational knowledge of AI and ML in Azure.",
    "description": "Foundational knowledge of AI and ML in Azure.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Microsoft Azure AI Fundamentals exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Azure AI Services",
        "topics": [
          {
            "name": "Azure Cognitive Services",
            "detail": "Azure Cognitive Services provide developers with pre-built AI APIs and cognitive models for vision, speech, translation, and search engines. They allow rapid feature integration with minimal overhead."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Linux Permissions",
            "detail": "This study segment examines core methodologies in the context of Linux Permissions. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Terraform Operations",
            "detail": "This study segment examines core methodologies in the context of Terraform Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure Data Operations",
            "detail": "This study segment examines core methodologies in the context of Azure Data Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure AI Services",
            "detail": "This study segment examines core methodologies in the context of Azure AI Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Power Platform Basics",
            "detail": "This study segment examines core methodologies in the context of Power Platform Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Computer Hardware",
            "detail": "This study segment examines core methodologies in the context of Computer Hardware. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "ai-900-q1",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "ai-900-q2",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "ai-900-q3",
        "question": "A system engineer configures local folder privileges using the command CHMOD 703. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "ai-900-q4",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Easy",
        "reference": "Azure AI Services"
      },
      {
        "id": "ai-900-q5",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Easy",
        "reference": "Power Platform Basics"
      },
      {
        "id": "ai-900-q6",
        "question": "A system engineer configures local folder privileges using the command CHMOD 706. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Easy",
        "reference": "Computer Hardware"
      },
      {
        "id": "ai-900-q7",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "ai-900-q8",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "ai-900-q9",
        "question": "A system engineer configures local folder privileges using the command CHMOD 709. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "ai-900-q10",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "ai-900-q11",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "ai-900-q12",
        "question": "A system engineer configures local folder privileges using the command CHMOD 712. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "ai-900-q13",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "ai-900-q14",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "ai-900-q15",
        "question": "A system engineer configures local folder privileges using the command CHMOD 715. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "ai-900-q16",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "ai-900-q17",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "ai-900-q18",
        "question": "A system engineer configures local folder privileges using the command CHMOD 718. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "ai-900-q19",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "ai-900-q20",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "ai-900-q21",
        "question": "A system engineer configures local folder privileges using the command CHMOD 721. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "ai-900-q22",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "ai-900-q23",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "ai-900-q24",
        "question": "A system engineer configures local folder privileges using the command CHMOD 724. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "ai-900-q25",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "ai-900-q26",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "ai-900-q27",
        "question": "A system engineer configures local folder privileges using the command CHMOD 727. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "ai-900-q28",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "ai-900-q29",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
      },
      {
        "id": "ai-900-q30",
        "question": "A system engineer configures local folder privileges using the command CHMOD 730. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Hard",
        "reference": "Computer Hardware"
      },
      {
        "id": "ai-900-q31",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "ai-900-q32",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "ai-900-q33",
        "question": "A system engineer configures local folder privileges using the command CHMOD 733. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "ai-900-q34",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "ai-900-q35",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
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
    "questionsCount": "35",
    "desc": "Understanding Power Platform and its business value.",
    "description": "Understanding Power Platform and its business value.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Microsoft Power Platform Fundamentals exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Power Platform Basics",
        "topics": [
          {
            "name": "Power Automate",
            "detail": "Power Automate handles automated business workflows, scheduling background data alerts, and managing cross-platform connection triggers. It connects disparate legacy systems seamlessly."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Linux Permissions",
            "detail": "This study segment examines core methodologies in the context of Linux Permissions. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Terraform Operations",
            "detail": "This study segment examines core methodologies in the context of Terraform Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure Data Operations",
            "detail": "This study segment examines core methodologies in the context of Azure Data Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Azure AI Services",
            "detail": "This study segment examines core methodologies in the context of Azure AI Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Power Platform Basics",
            "detail": "This study segment examines core methodologies in the context of Power Platform Basics. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Computer Hardware",
            "detail": "This study segment examines core methodologies in the context of Computer Hardware. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "pl-900-q1",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "pl-900-q2",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "pl-900-q3",
        "question": "A system engineer configures local folder privileges using the command CHMOD 703. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "pl-900-q4",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Easy",
        "reference": "Azure AI Services"
      },
      {
        "id": "pl-900-q5",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Easy",
        "reference": "Power Platform Basics"
      },
      {
        "id": "pl-900-q6",
        "question": "A system engineer configures local folder privileges using the command CHMOD 706. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Easy",
        "reference": "Computer Hardware"
      },
      {
        "id": "pl-900-q7",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Easy",
        "reference": "Linux Permissions"
      },
      {
        "id": "pl-900-q8",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Easy",
        "reference": "Terraform Operations"
      },
      {
        "id": "pl-900-q9",
        "question": "A system engineer configures local folder privileges using the command CHMOD 709. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Easy",
        "reference": "Azure Data Operations"
      },
      {
        "id": "pl-900-q10",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "pl-900-q11",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "pl-900-q12",
        "question": "A system engineer configures local folder privileges using the command CHMOD 712. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Core Knowledge",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "pl-900-q13",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Core Knowledge",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "pl-900-q14",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Core Knowledge",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "pl-900-q15",
        "question": "A system engineer configures local folder privileges using the command CHMOD 715. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "pl-900-q16",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "pl-900-q17",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "pl-900-q18",
        "question": "A system engineer configures local folder privileges using the command CHMOD 718. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "pl-900-q19",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Medium",
        "reference": "Linux Permissions"
      },
      {
        "id": "pl-900-q20",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Medium",
        "reference": "Terraform Operations"
      },
      {
        "id": "pl-900-q21",
        "question": "A system engineer configures local folder privileges using the command CHMOD 721. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Medium",
        "reference": "Azure Data Operations"
      },
      {
        "id": "pl-900-q22",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Medium",
        "reference": "Azure AI Services"
      },
      {
        "id": "pl-900-q23",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Medium",
        "reference": "Power Platform Basics"
      },
      {
        "id": "pl-900-q24",
        "question": "A system engineer configures local folder privileges using the command CHMOD 724. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Medium",
        "reference": "Computer Hardware"
      },
      {
        "id": "pl-900-q25",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "pl-900-q26",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "pl-900-q27",
        "question": "A system engineer configures local folder privileges using the command CHMOD 727. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "pl-900-q28",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "pl-900-q29",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
      },
      {
        "id": "pl-900-q30",
        "question": "A system engineer configures local folder privileges using the command CHMOD 730. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Computer Hardware",
        "difficulty": "Hard",
        "reference": "Computer Hardware"
      },
      {
        "id": "pl-900-q31",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Linux Permissions",
        "difficulty": "Hard",
        "reference": "Linux Permissions"
      },
      {
        "id": "pl-900-q32",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Terraform Operations",
        "difficulty": "Hard",
        "reference": "Terraform Operations"
      },
      {
        "id": "pl-900-q33",
        "question": "A system engineer configures local folder privileges using the command CHMOD 733. Which permissions are mapped?",
        "options": [
          "System File System Access",
          "Web Server Port Filters",
          "Container Layer Caching",
          "Database Storage Partitions"
        ],
        "answer": "System File System Access",
        "category": "Domain Review",
        "explanation": "CHMOD translates read/write/execute properties for owners, groups, and guests to guarantee secure system file access.",
        "topic": "Azure Data Operations",
        "difficulty": "Hard",
        "reference": "Azure Data Operations"
      },
      {
        "id": "pl-900-q34",
        "question": "Which modern infrastructure concept manages resource architectures using repeatable configuration files and code formats?",
        "options": [
          "Infrastructure as Code (IaC)",
          "Container Orchestration",
          "Virtual Machine Hypervisor",
          "Dynamic Load Balancing"
        ],
        "answer": "Infrastructure as Code (IaC)",
        "category": "Domain Review",
        "explanation": "IaC (Infrastructure as Code) lets developers automate infrastructure provisioning using declarative configurations like Terraform.",
        "topic": "Azure AI Services",
        "difficulty": "Hard",
        "reference": "Azure AI Services"
      },
      {
        "id": "pl-900-q35",
        "question": "Which artificial intelligence category focuses on simulating human speech, text processing, and real-time translation?",
        "options": [
          "Natural Language Processing",
          "Computer Vision Modeling",
          "Supervised Classifications",
          "Relational Query Database"
        ],
        "answer": "Natural Language Processing",
        "category": "Domain Review",
        "explanation": "Natural Language Processing (NLP) enables machine intelligence to translate, process, parse, and analyze conversational human speech or documents.",
        "topic": "Power Platform Basics",
        "difficulty": "Hard",
        "reference": "Power Platform Basics"
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
    "questionsCount": "35",
    "desc": "Focus on security management and strategy.",
    "description": "Focus on security management and strategy.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Certified Information Security Manager exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Security Governance",
        "topics": [
          {
            "name": "Risk Response",
            "detail": "Information risk can be addressed through four basic strategies: Mitigation (adding controls), Acceptance (tolerating risk), Transfer (buying insurance), or Avoidance (terminating activity). Select responses based on cost-benefit metrics."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Cryptography Principles",
            "detail": "This study segment examines core methodologies in the context of Cryptography Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Network Security Controls",
            "detail": "This study segment examines core methodologies in the context of Network Security Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Identity and Access Management",
            "detail": "This study segment examines core methodologies in the context of Identity and Access Management. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Governance & Risk",
            "detail": "This study segment examines core methodologies in the context of Governance & Risk. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Threats & Vulnerabilities",
            "detail": "This study segment examines core methodologies in the context of Threats & Vulnerabilities. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "cism-q1",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cism-q2",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "cism-q3",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 152 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 152-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cism-q4",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "cism-q5",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Easy",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cism-q6",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 176 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 176-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cism-q7",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "cism-q8",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cism-q9",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 200 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 200-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "cism-q10",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cism-q11",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cism-q12",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 224 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 224-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "cism-q13",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cism-q14",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "cism-q15",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 248 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 248-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cism-q16",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cism-q17",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "cism-q18",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 272 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 272-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cism-q19",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "cism-q20",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cism-q21",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 296 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 296-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cism-q22",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "cism-q23",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cism-q24",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 320 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 320-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "cism-q25",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cism-q26",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cism-q27",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 344 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 344-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "cism-q28",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cism-q29",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "cism-q30",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 368 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 368-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "cism-q31",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "cism-q32",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "cism-q33",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 392 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 392-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "cism-q34",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "cism-q35",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
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
    "questionsCount": "35",
    "desc": "The leading penetration testing certification.",
    "description": "The leading penetration testing certification.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the Offensive Security Certified Professional exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Penetration Testing Core",
        "topics": [
          {
            "name": "Buffer Overflows",
            "detail": "A buffer overflow occurs when a program writes more data to a block of memory than it is allocated to hold. Attackers exploit this to overwrite memory stack buffers, register configurations, and execute custom shell payloads."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Cryptography Principles",
            "detail": "This study segment examines core methodologies in the context of Cryptography Principles. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Network Security Controls",
            "detail": "This study segment examines core methodologies in the context of Network Security Controls. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Identity and Access Management",
            "detail": "This study segment examines core methodologies in the context of Identity and Access Management. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Governance & Risk",
            "detail": "This study segment examines core methodologies in the context of Governance & Risk. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Threats & Vulnerabilities",
            "detail": "This study segment examines core methodologies in the context of Threats & Vulnerabilities. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "oscp-q1",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "oscp-q2",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "oscp-q3",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 152 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 152-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "oscp-q4",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "oscp-q5",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Easy",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "oscp-q6",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 176 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 176-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Easy",
        "reference": "Cryptography Principles"
      },
      {
        "id": "oscp-q7",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Easy",
        "reference": "Network Security Controls"
      },
      {
        "id": "oscp-q8",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Easy",
        "reference": "Identity and Access Management"
      },
      {
        "id": "oscp-q9",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 200 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 200-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Easy",
        "reference": "Governance & Risk"
      },
      {
        "id": "oscp-q10",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "oscp-q11",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "oscp-q12",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 224 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Core Knowledge",
        "explanation": "AES with 224-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "oscp-q13",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Core Knowledge",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "oscp-q14",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Core Knowledge",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "oscp-q15",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 248 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 248-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "oscp-q16",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "oscp-q17",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "oscp-q18",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 272 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 272-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "oscp-q19",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "oscp-q20",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Medium",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "oscp-q21",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 296 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 296-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Cryptography Principles",
        "difficulty": "Medium",
        "reference": "Cryptography Principles"
      },
      {
        "id": "oscp-q22",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Network Security Controls",
        "difficulty": "Medium",
        "reference": "Network Security Controls"
      },
      {
        "id": "oscp-q23",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Identity and Access Management",
        "difficulty": "Medium",
        "reference": "Identity and Access Management"
      },
      {
        "id": "oscp-q24",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 320 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 320-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Governance & Risk",
        "difficulty": "Medium",
        "reference": "Governance & Risk"
      },
      {
        "id": "oscp-q25",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "oscp-q26",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "oscp-q27",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 344 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 344-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "oscp-q28",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "oscp-q29",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "oscp-q30",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 368 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 368-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
      },
      {
        "id": "oscp-q31",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Cryptography Principles",
        "difficulty": "Hard",
        "reference": "Cryptography Principles"
      },
      {
        "id": "oscp-q32",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Network Security Controls",
        "difficulty": "Hard",
        "reference": "Network Security Controls"
      },
      {
        "id": "oscp-q33",
        "question": "To protect user records with strong cryptographic integrity, which block cipher configuration with a key length of 392 bits is standard?",
        "options": [
          "AES-CBC/GCM Mode",
          "Asymmetric RSA Pair",
          "MD5 Hash Digests",
          "Base64 Encoding Blocks"
        ],
        "answer": "AES-CBC/GCM Mode",
        "category": "Domain Review",
        "explanation": "AES with 392-bit GCM keys represents a standard, fast symmetric block cipher providing data confidentiality and authenticity safeguards.",
        "topic": "Identity and Access Management",
        "difficulty": "Hard",
        "reference": "Identity and Access Management"
      },
      {
        "id": "oscp-q34",
        "question": "An attacker attempts to physically follow an authorized employee into a secured data datacenter room. What is this security threat called?",
        "options": [
          "Tailgating",
          "Whaling Attack",
          "SQL Injection",
          "Distributed Denial"
        ],
        "answer": "Tailgating",
        "category": "Domain Review",
        "explanation": "Tailgating is a physical social engineering vulnerability vector where unauthorized individuals gain access by physically following verified staff members.",
        "topic": "Governance & Risk",
        "difficulty": "Hard",
        "reference": "Governance & Risk"
      },
      {
        "id": "oscp-q35",
        "question": "An organization needs to enforce a strict authorization model stating that users receive only the absolute minimum permissions required. Which principle applies?",
        "options": [
          "Least Privilege Principle",
          "Mandatory Access Control",
          "Role-Based Federation",
          "Dual Custody Authorization"
        ],
        "answer": "Least Privilege Principle",
        "category": "Domain Review",
        "explanation": "The Principle of Least Privilege limits access authorizations to the minimal subset required for job execution, minimizing attack surfaces.",
        "topic": "Threats & Vulnerabilities",
        "difficulty": "Hard",
        "reference": "Threats & Vulnerabilities"
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
    "questionsCount": "35",
    "desc": "Knowledge of the Juniper Networks Junos OS.",
    "description": "Knowledge of the Juniper Networks Junos OS.",
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
    "flashcards": [
      {
        "term": "Core Concept",
        "definition": "Critical knowledge objective for passing the JNCIA-Junos exam successfully."
      }
    ],
    "reviewer": [
      {
        "title": "Junos CLI Operations",
        "topics": [
          {
            "name": "Operational vs Configure Mode",
            "detail": "Junos CLI operates in two modes: Operational mode (to monitor devices, troubleshoot commands) and Configuration mode (to edit and commit actual active device setups). All config edits must be validated before commits."
          }
        ]
      },
      {
        "title": "Core Knowledge",
        "topics": [
          {
            "name": "Dynamic Routing Protocols",
            "detail": "This study segment examines core methodologies in the context of Dynamic Routing Protocols. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "IP Services",
            "detail": "This study segment examines core methodologies in the context of IP Services. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Switching Fundamentals",
            "detail": "This study segment examines core methodologies in the context of Switching Fundamentals. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Wireless Security",
            "detail": "This study segment examines core methodologies in the context of Wireless Security. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "Infrastructure Ports",
            "detail": "This study segment examines core methodologies in the context of Infrastructure Ports. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          },
          {
            "name": "OSI Model Operations",
            "detail": "This study segment examines core methodologies in the context of OSI Model Operations. Be sure to study standard guidelines, keep key definitions clear, and avoid common configuration pitfalls."
          }
        ]
      }
    ],
    "practiceQuestions": [
      {
        "id": "jcia-junos-q1",
        "question": "A Cisco routing interface configured at 192.168.1.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "jcia-junos-q2",
        "question": "Which standard networking protocol operates on port 22 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "jcia-junos-q3",
        "question": "For a secure virtual network segment configured as VLAN 13, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 13) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "jcia-junos-q4",
        "question": "A Cisco routing interface configured at 192.168.4.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Easy",
        "reference": "Wireless Security"
      },
      {
        "id": "jcia-junos-q5",
        "question": "Which standard networking protocol operates on port 25 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Easy",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "jcia-junos-q6",
        "question": "For a secure virtual network segment configured as VLAN 16, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 16) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Easy",
        "reference": "OSI Model Operations"
      },
      {
        "id": "jcia-junos-q7",
        "question": "A Cisco routing interface configured at 192.168.7.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Easy",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "jcia-junos-q8",
        "question": "Which standard networking protocol operates on port 28 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Easy",
        "reference": "IP Services"
      },
      {
        "id": "jcia-junos-q9",
        "question": "For a secure virtual network segment configured as VLAN 19, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 19) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Easy",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "jcia-junos-q10",
        "question": "A Cisco routing interface configured at 192.168.10.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "jcia-junos-q11",
        "question": "Which standard networking protocol operates on port 31 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "jcia-junos-q12",
        "question": "For a secure virtual network segment configured as VLAN 22, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Core Knowledge",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 22) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "jcia-junos-q13",
        "question": "A Cisco routing interface configured at 192.168.13.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Core Knowledge",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "jcia-junos-q14",
        "question": "Which standard networking protocol operates on port 34 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Core Knowledge",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "jcia-junos-q15",
        "question": "For a secure virtual network segment configured as VLAN 25, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 25) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "jcia-junos-q16",
        "question": "A Cisco routing interface configured at 192.168.16.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "jcia-junos-q17",
        "question": "Which standard networking protocol operates on port 37 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "jcia-junos-q18",
        "question": "For a secure virtual network segment configured as VLAN 28, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 28) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "jcia-junos-q19",
        "question": "A Cisco routing interface configured at 192.168.19.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Medium",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "jcia-junos-q20",
        "question": "Which standard networking protocol operates on port 40 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Medium",
        "reference": "IP Services"
      },
      {
        "id": "jcia-junos-q21",
        "question": "For a secure virtual network segment configured as VLAN 31, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 31) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Medium",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "jcia-junos-q22",
        "question": "A Cisco routing interface configured at 192.168.22.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Medium",
        "reference": "Wireless Security"
      },
      {
        "id": "jcia-junos-q23",
        "question": "Which standard networking protocol operates on port 43 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Medium",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "jcia-junos-q24",
        "question": "For a secure virtual network segment configured as VLAN 34, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 34) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Medium",
        "reference": "OSI Model Operations"
      },
      {
        "id": "jcia-junos-q25",
        "question": "A Cisco routing interface configured at 192.168.25.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "jcia-junos-q26",
        "question": "Which standard networking protocol operates on port 46 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "jcia-junos-q27",
        "question": "For a secure virtual network segment configured as VLAN 37, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 37) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "jcia-junos-q28",
        "question": "A Cisco routing interface configured at 192.168.28.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "jcia-junos-q29",
        "question": "Which standard networking protocol operates on port 49 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
      },
      {
        "id": "jcia-junos-q30",
        "question": "For a secure virtual network segment configured as VLAN 40, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 40) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "OSI Model Operations",
        "difficulty": "Hard",
        "reference": "OSI Model Operations"
      },
      {
        "id": "jcia-junos-q31",
        "question": "A Cisco routing interface configured at 192.168.31.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Dynamic Routing Protocols",
        "difficulty": "Hard",
        "reference": "Dynamic Routing Protocols"
      },
      {
        "id": "jcia-junos-q32",
        "question": "Which standard networking protocol operates on port 52 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "IP Services",
        "difficulty": "Hard",
        "reference": "IP Services"
      },
      {
        "id": "jcia-junos-q33",
        "question": "For a secure virtual network segment configured as VLAN 43, which switch port tagging mode (802.1Q) is required to route traffic across physical switches?",
        "options": [
          "Trunking Mode",
          "Access Mode",
          "Dynamic Auto Mode",
          "Passive Aggregation Mode"
        ],
        "answer": "Trunking Mode",
        "category": "Domain Review",
        "explanation": "Trunk ports carry traffic for multiple VLAN tags (like VLAN 43) across physical switches using 802.1Q encapsulation, whereas access ports carry untagged frames for one VLAN only.",
        "topic": "Switching Fundamentals",
        "difficulty": "Hard",
        "reference": "Switching Fundamentals"
      },
      {
        "id": "jcia-junos-q34",
        "question": "A Cisco routing interface configured at 192.168.34.1 needs to dynamically advertise static host networks. Which interior gateway routing protocol is most appropriate?",
        "options": [
          "OSPF",
          "BGP",
          "FTP",
          "SNMP"
        ],
        "answer": "OSPF",
        "category": "Domain Review",
        "explanation": "OSPF is a link-state interior gateway routing protocol optimized for fast dynamic route convergence within autonomous boundaries, whereas BGP is an exterior protocol.",
        "topic": "Wireless Security",
        "difficulty": "Hard",
        "reference": "Wireless Security"
      },
      {
        "id": "jcia-junos-q35",
        "question": "Which standard networking protocol operates on port 55 to resolve domain names or provide local dynamic network address allocations?",
        "options": [
          "DHCP or DNS",
          "SSH Secure Shell",
          "Simple Mail Transfer",
          "Active Web Server"
        ],
        "answer": "DHCP or DNS",
        "category": "Domain Review",
        "explanation": "DHCP and DNS represent core application-layer IP services resolving host domains and distributing localized address ranges automatically.",
        "topic": "Infrastructure Ports",
        "difficulty": "Hard",
        "reference": "Infrastructure Ports"
      }
    ]
  }
];
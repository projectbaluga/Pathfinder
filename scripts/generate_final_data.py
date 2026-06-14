import json

certs = [
    # Networking
    {"id": "ccna", "title": "Cisco Certified Network Associate (CCNA)", "issuer": "Cisco", "domain": "Networking", "level": "Intermediate", "price": 300, "duration": "120 mins", "q_count": "100-120", "desc": "Fundamentals for IT careers and networking technologies."},
    {"id": "ccnp-encor", "title": "CCNP Enterprise ENCOR", "issuer": "Cisco", "domain": "Networking", "level": "Advanced", "price": 400, "duration": "120 mins", "q_count": "90-110", "desc": "Implementing and operating core network technologies."},
    {"id": "network-plus", "title": "CompTIA Network+", "issuer": "CompTIA", "domain": "Networking", "level": "Beginner", "price": 358, "duration": "90 mins", "q_count": "Max 90", "desc": "Essential knowledge for a career in IT infrastructure."},
    {"id": "jcia-junos", "title": "JNCIA-Junos", "issuer": "Juniper", "domain": "Networking", "level": "Beginner", "price": 200, "duration": "90 mins", "q_count": "65", "desc": "Knowledge of the Juniper Networks Junos OS."},

    # Security
    {"id": "sec-plus", "title": "CompTIA Security+", "issuer": "CompTIA", "domain": "Security", "level": "Beginner", "price": 392, "duration": "90 mins", "q_count": "Max 90", "desc": "Baseline skills for core security functions and IT security career."},
    {"id": "cissp", "title": "Certified Information Systems Security Professional", "issuer": "ISC2", "domain": "Security", "level": "Advanced", "price": 749, "duration": "180 mins", "q_count": "100-150", "desc": "The gold standard for info security professionals."},
    {"id": "ceh", "title": "Certified Ethical Hacker", "issuer": "EC-Council", "domain": "Security", "level": "Intermediate", "price": 1199, "duration": "240 mins", "q_count": "125", "desc": "Master the 5 phases of ethical hacking."},
    {"id": "cism", "title": "Certified Information Security Manager", "issuer": "ISACA", "domain": "Security", "level": "Advanced", "price": 760, "duration": "240 mins", "q_count": "150", "desc": "Focus on security management and strategy."},
    {"id": "oscp", "title": "Offensive Security Certified Professional", "issuer": "OffSec", "domain": "Security", "level": "Advanced", "price": 1599, "duration": "24 hours", "q_count": "Hands-on", "desc": "The leading penetration testing certification."},

    # Cloud
    {"id": "aws-ccp", "title": "AWS Certified Cloud Practitioner", "issuer": "AWS", "domain": "Cloud", "level": "Beginner", "price": 100, "duration": "90 mins", "q_count": "65", "desc": "Overall understanding of the AWS Cloud platform."},
    {"id": "aws-sa-assoc", "title": "AWS Solutions Architect - Associate", "issuer": "AWS", "domain": "Cloud", "level": "Intermediate", "price": 150, "duration": "130 mins", "q_count": "65", "desc": "Design cost-efficient, fault-tolerant systems on AWS."},
    {"id": "az-900", "title": "Microsoft Certified: Azure Fundamentals", "issuer": "Microsoft", "domain": "Cloud", "level": "Beginner", "price": 99, "duration": "45-65 mins", "q_count": "40-60", "desc": "Foundational knowledge of cloud services and Azure."},
    {"id": "az-104", "title": "Microsoft Azure Administrator", "issuer": "Microsoft", "domain": "Cloud", "level": "Intermediate", "price": 165, "duration": "120 mins", "q_count": "40-60", "desc": "Implement, manage, and monitor Azure environments."},
    {"id": "gcp-pca", "title": "Google Professional Cloud Architect", "issuer": "Google Cloud", "domain": "Cloud", "level": "Advanced", "price": 200, "duration": "120 mins", "q_count": "50-60", "desc": "Design and manage robust solutions on Google Cloud."},
    {"id": "oci-found", "title": "OCI Foundations Associate", "issuer": "Oracle", "domain": "Cloud", "level": "Beginner", "price": 0, "duration": "60 mins", "q_count": "40", "desc": "Fundamental knowledge of OCI public cloud services."},

    # Project Management
    {"id": "pmp", "title": "Project Management Professional (PMP)", "issuer": "PMI", "domain": "Project Management", "level": "Advanced", "price": 555, "duration": "230 mins", "q_count": "180", "desc": "Gold standard of project management certification."},
    {"id": "capm", "title": "Certified Associate in Project Management", "issuer": "PMI", "domain": "Project Management", "level": "Beginner", "price": 300, "duration": "180 mins", "q_count": "150", "desc": "Entry-level certification for project team members."},
    {"id": "csm", "title": "Certified ScrumMaster (CSM)", "issuer": "Scrum Alliance", "domain": "Project Management", "level": "Beginner", "price": 500, "duration": "60 mins", "q_count": "50", "desc": "Lead Agile teams and deliver high-value results."},
    {"id": "itil-found", "title": "ITIL 4 Foundation", "issuer": "Axelos", "domain": "Project Management", "level": "Beginner", "price": 450, "duration": "60 mins", "q_count": "40", "desc": "Digital-first operating model for service management."},

    # Infrastructure
    {"id": "aplus", "title": "CompTIA A+", "issuer": "CompTIA", "domain": "Infrastructure", "level": "Beginner", "price": 246, "duration": "90 mins", "q_count": "Max 90", "desc": "Standard for entry-level IT professionals."},
    {"id": "linux-plus", "title": "CompTIA Linux+", "issuer": "CompTIA", "domain": "Infrastructure", "level": "Intermediate", "price": 358, "duration": "90 mins", "q_count": "Max 90", "desc": "Securely manage Linux-based IT infrastructure."},
    {"id": "terraform-assoc", "title": "HashiCorp Certified: Terraform Associate", "issuer": "HashiCorp", "domain": "Infrastructure", "level": "Intermediate", "price": 70, "duration": "60 mins", "q_count": "57", "desc": "Infrastructure as Code (IaC) concepts and skills."},

    # Data & AI
    {"id": "dp-900", "title": "Microsoft Azure Data Fundamentals", "issuer": "Microsoft", "domain": "Data & AI", "level": "Beginner", "price": 99, "duration": "60 mins", "q_count": "40-60", "desc": "Foundational knowledge of core data concepts in Azure."},
    {"id": "ai-900", "title": "Microsoft Azure AI Fundamentals", "issuer": "Microsoft", "domain": "Data & AI", "level": "Beginner", "price": 99, "duration": "60 mins", "q_count": "40-60", "desc": "Foundational knowledge of AI and ML in Azure."},
    {"id": "pl-900", "title": "Microsoft Power Platform Fundamentals", "issuer": "Microsoft", "domain": "Data & AI", "level": "Beginner", "price": 99, "duration": "60 mins", "q_count": "40-60", "desc": "Understanding Power Platform and its business value."},
]

domain_content = {
    "Networking": {
        "topics": [
            ("OSI Model", "Deep dive into the 7 layers and their functions."),
            ("TCP/IP Suite", "Understanding IP addressing, TCP vs UDP, and ports."),
            ("Routing", "Static vs Dynamic routing, OSPF, BGP, and RIP protocols."),
            ("Switching", "VLANs, STP, and EtherChannel configuration."),
            ("Wireless", "802.11 standards, security protocols (WPA3), and architecture."),
            ("Network Security", "Firewalls, ACLs, and VPN technologies."),
            ("Automation", "SDN concepts, Python basics for net-eng, and APIs."),
            ("Troubleshooting", "Systematic approaches to resolving connectivity issues.")
        ],
        "q_templates": [
            "Which layer of the OSI model is responsible for {key}?",
            "What is the primary difference between TCP and UDP regarding {key}?",
            "In {id}, how would you configure {key} to ensure maximum reliability?",
            "What is the default port for {key}?",
            "Which command is used to verify {key} status on a router?",
            "What is the subnet mask for a /{key} network?",
            "Which protocol is most suitable for {key} in a large enterprise?",
            "What does {key} stand for in the context of Networking?"
        ],
        "keys": ["Data Link", "Session", "Reliability", "Flow Control", "OSPF", "BGP", "VLAN tagging", "HTTPS", "DNS", "24", "30", "BGP", "STP"]
    },
    "Security": {
        "topics": [
            ("Risk Management", "Frameworks (NIST), risk assessment, and mitigation."),
            ("Cryptography", "Symmetric vs Asymmetric, hashing, and PKI."),
            ("Access Control", "IAM, MFA, RBAC, and Zero Trust architecture."),
            ("Threats & Vulnerabilities", "Malware types, social engineering, and scanning."),
            ("Incident Response", "The IR lifecycle, forensics, and business continuity."),
            ("Cloud Security", "Shared responsibility model and container security."),
            ("Compliance", "GDPR, HIPAA, PCI-DSS, and SOC2 standards."),
            ("Network Security", "IDS/IPS, WAF, and secure protocols.")
        ],
        "q_templates": [
            "What is the primary goal of {key} in a secure environment?",
            "Which encryption algorithm is considered {key}?",
            "How does {key} help in mitigating social engineering attacks?",
            "In {id}, what is the first step in the {key} process?",
            "What is the main difference between {key} and a firewall?",
            "Which compliance regulation primarily focuses on {key}?",
            "What does the principle of {key} state?",
            "Which tool is commonly used for {key}?"
        ],
        "keys": ["Confidentiality", "AES-256", "MFA", "Incident Response", "IDS", "Healthcare data", "Least Privilege", "Vulnerability Scanning"]
    },
    "Cloud": {
        "topics": [
            ("Core Services", "Compute (VMs, Serverless), Storage (Object, Block), DBs."),
            ("Identity & Access", "IAM policies, roles, and directory services."),
            ("Cloud Networking", "VPCs, Subnets, Gateways, and Load Balancing."),
            ("Architecture", "High availability, scalability, and disaster recovery."),
            ("Cost Management", "Budgeting, reserved instances, and cost optimization."),
            ("Governance", "Resource tagging, quotas, and compliance tools."),
            ("Security", "Encryption at rest/transit, WAF, and Shield."),
            ("Shared Responsibility", "Understanding who manages what in the cloud.")
        ],
        "q_templates": [
            "Which {id} service is best suited for {key}?",
            "What is the primary benefit of {key} in a cloud environment?",
            "In the Shared Responsibility Model, who is responsible for {key}?",
            "What does {key} allow you to do in a VPC?",
            "How can you optimize {key} to reduce monthly cloud spend?",
            "Which {id} tool is used for {key} compliance?",
            "What is the purpose of {key} in a multi-region deployment?",
            "Which storage class is most cost-effective for {key}?"
        ],
        "keys": ["Serverless computing", "Elasticity", "Guest OS patching", "Peering", "Reserved Instances", "HIPAA", "Traffic Management", "Long-term archiving"]
    },
    "Project Management": {
        "topics": [
            ("Agile & Scrum", "The Scrum framework, roles, artifacts, and ceremonies."),
            ("Waterfall", "Traditional project lifecycle and documentation."),
            ("Stakeholder Management", "Identification, engagement, and communication."),
            ("Risk Management", "Registers, qualitative/quantitative analysis."),
            ("Schedule & Cost", "Critical path, Earned Value Management (EVM)."),
            ("Quality Management", "Six Sigma, Lean, and quality control processes."),
            ("Procurement", "Contracts, vendor selection, and management."),
            ("Leadership", "Conflict resolution, motivation, and team building.")
        ],
        "q_templates": [
            "In {key}, what is the role of the Scrum Master?",
            "What is the main output of the {key} process?",
            "How do you handle a {key} stakeholder in a project?",
            "What does the {key} indicate in project scheduling?",
            "Which technique is used for {key} risk analysis?",
            "What is the primary focus of {key} in quality management?",
            "Which contract type is most risky for the {key}?",
            "What is the first step in {key} management?"
        ],
        "keys": ["Daily Standup", "Project Charter", "Resistant", "Critical Path", "Monte Carlo", "Continuous Improvement", "Buyer", "Resource"]
    },
    "Infrastructure": {
        "topics": [
            ("Hardware", "Processors, RAM, Storage types, and Motherboards."),
            ("Operating Systems", "Windows, Linux, and macOS administration."),
            ("Virtualization", "Hypervisors, Containers (Docker), and VMs."),
            ("Mobile Devices", "Deployment models, MDM, and security."),
            ("Troubleshooting", "Core methods for hardware and software issues."),
            ("IaC", "Terraform, Ansible, and automated provisioning."),
            ("Command Line", "Bash, PowerShell, and terminal efficiency."),
            ("Networking Basics", "Cabling, DHCP, DNS, and IP configuration.")
        ],
        "q_templates": [
            "Which hardware component is responsible for {key}?",
            "What is the primary command to {key} in Linux?",
            "What is the main advantage of {key} over traditional VMs?",
            "How does {key} protect enterprise mobile data?",
            "What is the first step in the {key} methodology?",
            "In {id}, what does {key} allow you to define?",
            "Which command is used to {key} in a Bash shell?",
            "What is the purpose of {key} in a local network?"
        ],
        "keys": ["Floating point calculations", "Change file permissions", "Containers", "Remote Wipe", "Troubleshooting", "Infrastructure as Code", "List files", "DHCP"]
    },
    "Data & AI": {
        "topics": [
            ("Data Concepts", "Relational vs NoSQL, Warehousing, and ETL."),
            ("Machine Learning", "Supervised vs Unsupervised, Regression, Classification."),
            ("Deep Learning", "Neural networks, Computer Vision, and NLP."),
            ("Analytics", "Business Intelligence, visualization (Power BI, Tableau)."),
            ("Big Data", "Spark, Hadoop, and data streaming (Kafka)."),
            ("Responsible AI", "Ethics, bias mitigation, and transparency."),
            ("Azure/AWS AI Services", "Cognitive services and pre-built models."),
            ("Databases", "SQL optimization and cloud database management.")
        ],
        "q_templates": [
            "What is the main difference between {key} and NoSQL?",
            "Which algorithm is best for {key} in machine learning?",
            "What is the role of {key} in a deep learning model?",
            "How does {key} help in data-driven decision making?",
            "What is the primary use case for {key} in big data?",
            "Why is {key} a critical consideration in AI development?",
            "Which {id} service provides {key} capabilities?",
            "What is the purpose of {key} in a database?"
        ],
        "keys": ["RDBMS", "Linear Regression", "Activation Functions", "Predictive Analytics", "Real-time streaming", "Ethical AI", "Natural Language Processing", "Indexing"]
    }
}

final_data = []

for c in certs:
    content = domain_content.get(c["domain"], {})
    topics = content.get("topics", [("Overview", "General concepts for this certification.")])
    q_templates = content.get("q_templates", ["What is {key} in {id}?"])
    keys = content.get("keys", ["Core concepts"])

    reviewer = [
        {
            "title": f"{c['domain']} Core Knowledge",
            "topics": [{"name": name, "detail": detail} for name, detail in topics]
        }
    ]

    questions = []
    for i in range(1, 51):
        topic_name, _ = topics[(i-1) % len(topics)]
        template = q_templates[(i-1) % len(q_templates)]
        key = keys[(i-1) % len(keys)]

        q_text = template.format(key=key, id=c["id"])

        # Variety in options
        options = ["Correct Answer", "Incorrect Option A", "Incorrect Option B", "Incorrect Option C"]
        if "Which" in q_text or "What" in q_text:
             options = [f"The {key} is the answer", f"A different {key}", "Not related", "None of the above"]

        questions.append({
            "id": f"{c['id']}-q{i}",
            "question": q_text,
            "options": sorted(options),
            "answer": options[0],
            "category": topic_name,
            "explanation": f"The answer explains why {key} is correct in the context of {topic_name} for the {c['id']} exam. It involves understanding {c['domain']} fundamentals."
        })

    final_data.append({
        "id": c["id"],
        "title": c["title"],
        "issuer": c["issuer"],
        "domain": c["domain"],
        "level": c["level"],
        "price": c["price"],
        "duration": c["duration"],
        "questionsCount": c["q_count"],
        "description": c["desc"],
        "reviewer": reviewer,
        "practiceQuestions": questions
    })

output = "export const certifications = " + json.dumps(final_data, indent=2) + ";"
with open("src/data/certifications.js", "w") as f:
    f.write(output)

print("Generated 25 certifications with 50 questions each and improved reviewer sections.")

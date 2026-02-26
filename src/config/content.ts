export const siteConfig = {
  name: "Eduardo Silva | Portfolio",
  title: "Eduardo Silva | Computer Science Master Student",
  description:
    "MSc Computer Science student with focus areas in Cybersecurity, IT Infrastructure and Distributed Systems",
  social: {
    github: "https://github.com/DuduzaoMT",
    linkedin: "https://linkedin.com/in/eduardomjsilva",
    email: "mailto:eduardomartimsilva.09@gmail.com",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const homeContent = {
  greeting: "Hello, I'm",
  name: "Eduardo Silva",
  role: "Software Engineer & MSc Student",
  description:
    "MSc Computer Science student with focus areas in Cybersecurity, IT Infrastructure and Distributed Systems. Strong engineering foundation with practical experience in DevOps workflows and software development.",
  buttons: {
    about: {
      text: "Explore My Work",
      href: "#projects",
    },
    cv: {
      text: "Download CV",
      href: "/assets/cv/Eduardo_Silva_CV.pdf",
      download: true,
    },
  },
};

export const aboutContent = {
  title: "About Me",
  tagline: "Building scalable, secure, and intelligent solutions",
  bio: [
    "MSc Computer Science student specializing in Cybersecurity and Distributed Systems",
    "Strong engineering foundation with practical experience in IT Infrastructure and DevOps workflows",
    "Proven academic track record — Top 10 student out of ~180",
    "Hands-on projects involving Secure Networking, LLM integration, and Distributed Systems",
    "Seeking Software Engineering roles to build scalable, secure, and intelligent solutions",
    "Natural bodybuilding athlete on the side",
  ],
  skillCategories: [
    {
      title: "Languages",
      icon: "code",
      skills: ["Java", "Python", "C", "GO", "SQL/NoSQL"],
    },
    {
      title: "Infrastructure",
      icon: "server",
      skills: [
        "Kubernetes",
        "Docker",
        "Terraform",
        "Cloud Platforms",
        "Grafana",
      ],
    },
    {
      title: "Engineering",
      icon: "wrench",
      skills: [
        "Full-stack Development",
        "Git & Git Workflows",
        "Database Management",
        "Message Brokers",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Specializations",
      icon: "shield",
      skills: [
        "Networks & Cryptography",
        "Algorithms & Data Structures",
        "GenAI / LLMs / PyTorch",
        "IAM & Security",
        "Debugging & Code Review",
      ],
    },
  ],
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "C1" },
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Eduardo Silva - Software Engineer",
  },
};

export const experienceContent = {
  title: "Experience",
  subtitle: "My journey in software engineering.",
  work: [
    {
      period: "Jun 2025 — Sep 2025",
      position: "Software Engineer",
      company: "SingleStore",
      logo: "https://www.google.com/s2/favicons?domain=singlestore.com&sz=64",
      bullets: [
        "Designed and implemented a sophisticated staged deployment system for SingleStore Helios, leading the complete redesign of deployment and lifecycle management of core services.",
        "Developed standardized rollout procedures that reduced deployment risks and minimized downtime, including automated rollback mechanisms and comprehensive health monitoring.",
        "Improved deployment flexibility while maintaining strict stability requirements — the new infrastructure solved scalability issues and reduced deployment time by 40%.",
        "Technologies: Kubernetes, Docker, CI/CD pipelines, Prometheus monitoring, and cloud infrastructure automation tools.",
      ],
    },
    {
      period: "Jul 2024 — Sep 2024",
      position: "Software Developer",
      company: "Premium Minds",
      logo: "https://www.google.com/s2/favicons?domain=premiumminds.com&sz=64",
      bullets: [
        "Developed a comprehensive web application addressing team management inefficiencies, creating an interactive interface that streamlined daily operations.",
        "Built features for real-time project tracking, resource allocation, and performance metrics visualization integrating multiple data sources.",
        "Implemented responsive design and user-centered interfaces achieving high adoption rates, reducing administrative overhead by 30%.",
        "Stack: Modern web technologies focused on user experience design and real-time data processing.",
      ],
    },
  ],
  education: [
    {
      period: "Sep 2025 — Current",
      degree: "MSc in Computer Science and Engineering",
      school: "Instituto Superior Técnico",
      location: "Lisbon, Portugal",
      details:
        "Cybersecurity, Distributed Systems, IT Infrastructure Management and AI",
    },
    {
      period: "Sep 2022 — Jul 2025",
      degree: "BSc in Computer Science and Engineering",
      school: "Instituto Superior Técnico",
      location: "Lisbon, Portugal",
      details: "AVG: 18 / 20",
      awards: [
        "10th best student on the course in the 2022/2023 academic year (~180 students)",
        "Excellence Board Student (2023/2024)",
      ],
    },
  ],
};

export const projectsContent = {
  title: "Projects",
  description:
    "A selection of my recent work in distributed systems, security, and infrastructure.",
  projects: [
    {
      title: "Self-Hosted Production Kubernetes Cluster",
      description:
        "Built and deployed a production-ready, self-hosted Kubernetes cluster with monitoring, logging, and authentication systems. Implemented automated deployment pipelines with comprehensive monitoring solutions using Prometheus and Grafana. Configured robust security controls including network policies, RBAC, and pod security standards.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop",
      tags: ["Kubernetes", "Prometheus", "Grafana", "RBAC", "Docker"],
      github: "https://github.com/DuduzaoMT/assetra",
    },
    {
      title: "DNode Security Framework",
      description:
        "Developed an advanced security framework implementing comprehensive CIA principles that go beyond traditional TLS encryption. Built multi-layered protection mechanisms with advanced key management systems and real-time integrity verification. Implemented sophisticated tamper detection algorithms and availability guarantees.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop",
      tags: ["Python", "GO", "Cryptography", "Network Security"],
      github: "https://github.com/DuduzaoMT/SIRS-Project",
    },
    {
      title: "Multi-Paxos Consensus Algorithm",
      description:
        "Designed and implemented a comprehensive Multi-Paxos consensus algorithm from scratch, addressing fundamental challenges in distributed systems coordination. Built a robust system that handles leader election, proposal phases, and maintains consistency across distributed nodes even under network partitions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      tags: ["Java", "Concurrent Programming", "Distributed Systems"],
      github: "https://github.com/DuduzaoMT/DADI-Project",
    },
    {
      title: "Software Security Vulnerability Analysis",
      description:
        "Comprehensive software security project focused on identifying and exploiting common web application vulnerabilities. Performed static and dynamic analysis, implemented exploit chains, and developed automated security testing tools for vulnerability detection in web applications.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      tags: ["Python", "Security", "Static Analysis", "Exploit Development"],
      github: "https://github.com/DuduzaoMT/SSof-Project",
    },
    {
      title: "UDF Compiler (Flex/Bison + AST)",
      description:
        "Built a complete front-end in C++ using Flex and Bison to tokenize and parse source code, constructing an AST (Abstract Syntax Tree) and integrating with the CDK framework. The project includes the language scanner/parser, AST node definitions, and compiler targets/passes, focusing on correct syntax handling, structured program representation, and a solid build pipeline via Makefile.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
      tags: ["C++", "Flex", "Bison", "Parsing", "Lexing", "AST"],
      github: "https://github.com/DuduzaoMT/CO-Project",
    },
    {
      title: "Event Management System",
      description:
        "An Event Management System in C. Built a multi-client, multi-threaded server that manages events and seat reservations under concurrent access. The server coordinates sessions with worker threads, a shared request queue, mutexes/condition variables, and atomic state, ensuring safe synchronization and a clean connection lifecycle.",
      image:
        "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1000&auto=format&fit=crop",
      tags: ["C", "Concurrency", "Multithreading", "Synchronization"],
      github: "https://github.com/DuduzaoMT/SO-Project",
    },
  ],
};

export const openSourceContent = {
  title: "Open Source",
  contributions: [
    {
      project: "MetaBase",
      description:
        "Contributed to data visualization capabilities, implementing new charting features and optimizing query systems with smart caching.",
      tags: ["JavaScript", "React", "Clojure", "PostgreSQL"],
      href: "https://github.com/metabase/metabase/issues/57705",
    },
  ],
};

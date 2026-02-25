export const siteConfig = {
  name: "Eduardo Silva | Portfolio",
  title: "Eduardo Silva | Computer Science Master Student",
  description:
    "MSc Computer Science student with focus areas in Cybersecurity, IT Infrastructure, and Distributed Systems",
  social: {
    github: "https://github.com/DuduzaoMT/PortFolio",
    linkedin: "https://linkedin.com/in/eduardomjsilva",
    email: "mailto:eduardomartimsilva.09@gmail.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Eduardo Silva",
  description:
    "MSc Computer Science student with focus areas in Cybersecurity, IT Infrastructure, and Distributed Systems. Strong engineering foundation with practical experience in DevOps workflows and software development.",
  buttons: {
    about: {
      text: "Learn More",
      href: "/about/",
    },
    cv: {
      text: "Download CV",
      href: "/assets/cv/Eduardo_Silva_CV.pdf",
      download: true,
    },
  },
  images: {
    light:
      "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Eduardo Silva",
    description: "Learn more about my background in Software Engineering",
  },
  title: "About Me",
  description:
    "MSc Computer Science, with focus areas in Cybersecurity, IT Infrastructure, and Distributed Systems. I have a strong engineering foundation with practical experience in DevOps workflows and software development, including hands-on work at SingleStore and Premium Minds. Passionate about building scalable, secure, and intelligent solutions.",
  skills: [
    "Java",
    "Python",
    "C",
    "SQL/NoSQL",
    "GO",
    "Kubernetes",
    "Docker",
    "Git & Git Workflows",
    "Terraform",
    "Grafana",
    "Cloud Platforms",
    "Database Management",
    "Full-stack Development",
    "Algorithms & Data Structures",
    "Debugging & Code Review",
    "Message Brokers",
    "GenAI/LLMs, PyTorch",
    "Networks, Cryptography, IAM",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Eduardo Silva - Software Engineer",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Jun 2025 - Sep 2025",
        position: "Software Engineer",
        company: "SingleStore",
        description:
          "Tackled critical infrastructure challenges at SingleStore by designing and implementing a sophisticated staged deployment system for SingleStore Helios. Led the complete redesign of deployment and lifecycle management of core services.\n\nDeveloped standardized rollout procedures that significantly reduced deployment risks and minimized system downtime. The solution included automated rollback mechanisms and comprehensive health monitoring throughout the deployment pipeline.\n\nSuccessfully improved deployment flexibility while maintaining strict system stability requirements. The new infrastructure solved scalability issues that were impacting service delivery and reduced deployment time by 40%.\n\nTechnologies: Kubernetes, Docker, CI/CD pipelines, monitoring systems, and various cloud infrastructure automation tools.",
      },
      {
        period: "Jul 2024 - Sep 2024",
        position: "Software Developer",
        company: "Premium Minds",
        description:
          "Developed a comprehensive web application addressing team management inefficiencies within the company. Created an interactive interface that streamlined daily operations and improved cross-team communication.\n\nBuilt features for real-time project tracking, resource allocation, and performance metrics visualization. The solution integrated multiple data sources and provided actionable insights that significantly improved team coordination.\n\nImplemented responsive design principles and user-centered interfaces that achieved high adoption rates across different departments. The application reduced administrative overhead by 30% and improved team productivity metrics.\n\nStack: Modern web technologies focused on user experience design and real-time data processing.",
      },
    ],
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Eduardo Silva",
    description:
      "Showcase of my technical projects in cybersecurity, distributed systems, and software engineering",
  },
  title: "My Projects",
  description:
    "Some personal projects and contributions I've developed or participated in over time. Each one represents a bit of what I've been learning and experimenting with in technology.",
  projects: [
    {
      title: "Self-Hosted Production Kubernetes Cluster",
      stack: "GO, Kubernetes, Docker, Prometheus, Grafana",
      description:
        "<p>Built and deployed a production-ready, self-hosted Kubernetes cluster with monitoring, logging, and authentication systems.</p><p>Implemented automated deployment pipelines with comprehensive monitoring solutions using Prometheus and Grafana. Configured robust security controls including network policies, RBAC, and pod security standards.</p><p>The cluster features multi-node setup with persistent storage management, automated backup systems, and advanced networking configurations. Successfully addresses service orchestration, resource optimization, and operational visibility challenges in containerized environments.</p>",
      fields:
        "DevOps, Cloud Infrastructure, Monitoring, Network, Container Orchestration",
      image: "/assets/images/projects/project3.png",
      href: "https://github.com/DuduzaoMT/assetra",
    },
    {
      title: "DNode Security Framework",
      stack:
        "Python, GO, Cryptographic Libraries, Network Protocols, Security Protocols",
      description:
        "<p>Developed an advanced security framework implementing comprehensive CIA (Confidentiality, Integrity, Availability) principles that go beyond traditional TLS encryption.</p><p>Built multi-layered protection mechanisms with advanced key management systems and real-time integrity verification. Implemented sophisticated tamper detection algorithms and availability guarantees that maintain service continuity even under adverse network conditions.</p><p>The framework addresses real-world security vulnerabilities in distributed communication and provides enterprise-grade protection for sensitive data transmission across untrusted networks.</p>",
      fields: "Cybersecurity, Cryptography, Network Security",
      image: "/assets/images/projects/project1.jpg",
      href: "https://github.com/DuduzaoMT/SIRS-Project",
    },
    {
      title: "Multi-Paxos Consensus Algorithm Implementation",
      stack: "Java, Concurrent Programming, Network Protocols, Maven",
      description:
        "<p>Designed and implemented a comprehensive Multi-Paxos consensus algorithm from scratch, addressing fundamental challenges in distributed systems coordination.</p><p>Built a robust system that handles leader election, proposal phases, and maintains consistency across distributed nodes even under network partitions. The implementation includes sophisticated failure detection and recovery mechanisms.</p><p>Comprehensive testing suite covers various failure scenarios including network splits, node crashes, and message delays, demonstrating deep understanding of distributed systems theory and practical fault-tolerant computing.</p>",
      fields: "Distributed Systems, Consensus Algorithms, Fault Tolerance",
      image: "/assets/images/projects/project2.jpg",
      href: "https://github.com/DuduzaoMT/DADI-Project",
    },
    {
      title: "MetaBase - Open Source Contribution",
      stack: "JavaScript, React, Clojure, PostgreSQL, Docker",
      description:
        "<p>Contributed to the MetaBase open-source project, focusing on enhancing data visualization capabilities and improving business intelligence platform functionality.</p><p>Implemented new charting features that significantly improved user interaction with complex datasets. Optimized existing query systems to handle large-scale data processing more efficiently, reducing load times by implementing smart caching mechanisms.</p><p>The contributions directly improved platform usability and extended data analysis capabilities for end users across different business domains.</p>",
      fields: "Data Visualization, Business Intelligence, Open Source",
      image: "/assets/images/projects/project3.png",
      href: "https://github.com/metabase/metabase/issues/57705",
    },
  ],
};

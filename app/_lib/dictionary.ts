export const dictionary = {
  "pt-br": {
    navbar: {
      projects: "Projetos",
      linkedin: "LinkedIn",
    },
    hero: {
      building: "Construindo produtos,",
      interactions: "interações &",
      words: ["experiências", "jornadas", "emoções", "conexões"],
      role: "Product Designer & Desenvolvedor Front-End",
    },
    services: {
      interaction: "Design de Interação",
      research: "Pesquisa com Usuário",
      stakeholder: "Gestão de Stakeholders",
      data: "Design Baseado em Dados",
      accessibility: "Especificações de Acessibilidade (WCAG)",
      system: "Design System",
    },
    projects: {
      selected: "Projetos selecionados",
      goBack: "Voltar",
    },
    cta: {
      explore: "Explore o progresso deste projeto no GitHub.",
      go: "Ir para o Github",
    },
    experience: {
      title: "Experiência",
      description:
        "Product Designer com forte background técnico em desenvolvimento front-end, permitindo criar soluções eficientes e promover integração perfeita entre design e desenvolvimento. Tenho experiência liderando processos de descoberta, criando protótipos de alta fidelidade e otimizando produtos com foco em métricas de negócio e experiência do usuário.",
      years: "4+ anos de experiência",
      coffee: "2000+ xícaras de café consumidas (Este mês)",
      autonomo: {
        role: "Sept. 2025 - Present | Gestor de trafego",
      },
      suflex: {
        role: "Set. 2023 - 2025 | Product Designer",
      },
      diwe: {
        role: "Julho 2021 – Julho 2023 | UX/UI Designer → Product Designer",
      },
      ibsystem: {
        role: "Julho 2020 – Abril 2021 | Desenvolvedor Web → Desenvolvedor Front-End / UI Designer",
      },
    },
    footer: {
      resume: "Currículo",
      based: "Baseado no Brasil",
    },
  },
  en: {
    navbar: {
      projects: "Projects",
      linkedin: "LinkedIn",
    },
    hero: {
      building: "Building products,",
      interactions: "interactions &",
      words: ["experiences", "journeys", "emotions", "connections"],
      role: "Product Designer & Front-End Developer",
    },
    services: {
      interaction: "Interaction Design",
      research: "User Research",
      stakeholder: "Stakeholder Management",
      data: "Data-Driven Design",
      accessibility: "Accessibility Specs (WCAG)",
      system: "Design System",
    },
    projects: {
      selected: "Selected projects",
      goBack: "Go back",
    },
    cta: {
      explore: "Explore the progress of this project on GitHub.",
      go: "Go to Github",
    },
    experience: {
      title: "Experience",
      description:
        "Product Designer with a strong technical background in front-end development, enabling me to craft efficient solutions and foster seamless integration between design and development. I have experience leading discovery processes, creating high-fidelity prototypes, and optimizing products with a focus on business metrics and user experience.",
      years: "4+ years of experience",
      coffee: "2000+ Coffee cups consumed (This month)",
      autonomo: {
        role: "Sept. 2025 - Present | Gestor de trafego",
      },
      suflex: {
        role: "Sept. 2023 - 2025 | Product Designer",
      },
      diwe: {
        role: "July 2021 – July 2023 | UX/UI Designer → Product Designer",
      },
      ibsystem: {
        role: "July 2020 – April 2021 | Web Developer → Front-End Developer / UI Designer",
      },
    },
    footer: {
      resume: "Resume",
      based: "Based in Brazil",
    },
  },
};

export type Language = "pt-br" | "en";
export type Dictionary = (typeof dictionary)["en"];

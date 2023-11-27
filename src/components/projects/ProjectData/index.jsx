import PortfolioArchitecte from "../../../assets/images/Portfolio_Sophie.webp";
import KasaProjectHousing from "../../../assets/images/Kasa_Project_Housing.webp";
import ArgentBank from "../../../assets/images/ArgentBank_Login.png";
import Booki from "../../../assets/images/Booki_agency.webp";
import Ohmyfood from "../../../assets/images/Ohmyfood.webp";
import Portfolio_photograph from "../../../assets/images/Portfolio_photograph.webp";
import Events from "../../../assets/images/724Events.webp";
import HTML from "../../../assets/svg/html.svg";
import CSS from "../../../assets/svg/css.svg";
import JS from "../../../assets/svg/js.svg";
import NODEJS from "../../../assets/svg/nodejs.svg";
import REACT from "../../../assets/svg/reactjs.svg";
import SASS from "../../../assets/svg/sass.svg";
import REDUX from "../../../assets/svg/redux.svg";

const projectData = [
  {
    id: 1,
    title: "Portfolio Architecte Sophie Blue",
    description: {
      en: "I am assigned as a front-end developer to design the portfolio website for an interior architect. My main tasks include developing the presentation page for the architect's works using the provided HTML, creating the site administrator's login page, and designing a modal for uploading new media using JavaScript. I have received all the necessary elements, including the Figma design, backend and frontend code, as well as a Kanban to track assigned tasks.",
      fr: "Je suis envoyé en renfort en tant que développeur front-end pour concevoir le site portfolio d'une architecte d'intérieur. Mes principales missions consistent à développer la page de présentation des travaux de l'architecte en utilisant le HTML fourni, créer la page de connexion de l'administrateur du site et concevoir une modale pour l'upload de nouveaux médias en utilisant Javascript. J'ai reçu tous les éléments nécessaires, y compris le design Figma, le code back-end et front-end, ainsi qu'un Kanban pour suivre les tâches attribuées.",
    },
    githubLink: "https://github.com/Mishou23/OpenclassroomProject6",
    liveDemoLink: "",
    images: [
      { path: PortfolioArchitecte, title: "Portfolio Architecte Sophie Blue" },
    ],
    technologies: [HTML, CSS, JS, NODEJS],
    technologiesText: ["HTML", "CSS", "JS", "NodeJS"],
  },
  {
    id: 2,
    title: "Projet Kasa",
    description: {
      en: "This project involves exploring the React framework and managing routes with React-router by integrating the provided Figma mockups. The housing listings come from a JSON file.",
      fr: "Ce projet consiste à la découverte du framework React et de la gestion des routes avec React-router en intégrant les maquettes figma qui sont fournies. Les annonces de logements proviennent d'un fichier JSON.",
    },
    githubLink: "https://github.com/Mishou23/OpenClassroomProject8",
    liveDemoLink: "https://projet-kasa-on98.onrender.com",
    images: [{ path: KasaProjectHousing, title: "Kasa Project Housing" }],
    technologies: [REACT, SASS],
    technologiesText: ["React", "SASS"],
  },
  {
    id: 3,
    title: "ArgentBank",
    description: {
      en: "Project based on the site of a new bank starting and trying to break into the sector. The goal is to set up its web application allowing clients to log in and manage their accounts and profile.",
      fr: "Projet basé sur le site d’une nouvelle banque qui démarre et essaie de percer dans le secteur. Le but est de mettre en place son application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.",
    },
    githubLink: "https://github.com/Mishou23/OpenclassroomProject11",
    liveDemoLink: "",
    images: [{ path: ArgentBank, title: "ArgentBank Login" }],
    technologies: [REACT, REDUX, CSS],
    technologiesText: ["React", "Redux", "CSS"],
  },
  {
    id: 4,
    title: "Booki",
    description: {
      en: "Booki is a project done as part of my Web Developer training at OpenClassrooms. I worked from a provided mockup to integrate the homepage of a fictional travel agency using HTML and CSS technologies. I considered adaptive design principles to ensure an optimal user experience on all types of devices (mobile, tablets, desktops). Booki is an example of my expertise in web integration.",
      fr: "Booki est un projet réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. J'ai travaillé à partir d'une maquette fournie pour intégrer la page d'accueil d'une agence de voyage fictive en utilisant les technologies HTML et CSS. J'ai pris en compte les principes de conception adaptative pour assurer une expérience utilisateur optimale sur tous les types d'appareils (mobiles, tablettes, ordinateurs de bureau). Booki est un exemple de mon expertise en matière d'intégration web.",
    },
    githubLink: "https://github.com/Mishou23/OpenclassroomProject3",
    liveDemoLink: "https://mishou23.github.io/OpenclassroomProject3/",
    images: [{ path: Booki, title: "Booki Agency" }],
    technologies: [HTML, CSS],
    technologiesText: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Ohmyfood",
    description: {
      en: "Ohmyfood is a project I completed as part of my Web Developer training at OpenClassrooms. From a provided mockup, I worked on integrating the mobile version of a foodtech site with CSS animations. This project allowed me to put my HTML and CSS skills into practice. The final result is a modern website that showcases the dishes offered by the company.",
      fr: "Ohmyfood est un projet que j'ai réalisé dans le cadre de ma formation de Développeur Web chez OpenClassrooms. À partir d'une maquette fournie, j'ai travaillé sur l'intégration de la version mobile d'un site de foodtech avec des animations CSS. Ce projet m'a permis de mettre en pratique mes compétences en HTML et CSS. Le résultat final est un site web moderne qui met en avant les plats proposés par l'entreprise.",
    },
    githubLink: "https://github.com/Mishou23/OpenClassroomProject4",
    liveDemoLink: "https://mishou23.github.io/OpenClassroomProject4/",
    images: [{ path: Ohmyfood, title: "Ohmyfood" }],
    technologies: [HTML, CSS],
    technologiesText: ["HTML", "CSS"],
  },
  {
    id: 6,
    title: "Portfolio-photographe",
    description: {
      en: "I am tasked with optimizing the website of Nina Carducci, a photographer, to improve its performance and SEO. Key interventions include optimizing images, code, and its structure, as well as implementing local SEO using Schema.org and adding metas for social networks.",
      fr: "Je suis chargé d'optimiser le site de Nina Carducci, une photographe, pour améliorer ses performances et son référencement SEO. Les principales interventions incluent l'optimisation des images, du code et de sa structure, ainsi que la mise en place du référencement local en utilisant Schema.org et l'ajout de metas pour les réseaux sociaux.",
    },
    githubLink: "https://github.com/Mishou23/OpenclassroomProject9",
    liveDemoLink: "https://mishou23.github.io/OpenclassroomProject9/",
    images: [{ path: Portfolio_photograph, title: "Portfolio Photograph" }],
    technologies: [HTML, JS, CSS],
    technologiesText: ["HTML", "JS", "CSS"],
  },
  {
    id: 7,
    title: "724Events",
    description: {
      en: "The 724 Events project, for which I handled debugging, stands out for its commitment to quality, implementing advanced methods to ensure application reliability. I used Jest to perform thorough tests on each component, ensuring systematic feature validation. The integration of breakpoints was a key strategy I employed to simplify issue detection and resolution, allowing me to inspect the application's state at crucial moments. React Dev Tools were also a valuable tool that I used to get a detailed view of component hierarchy, properties, and states, facilitating the debugging process. By combining these methods, I ensured code robustness and quality, contributing to the success of the 724 Events application.",
      fr: "Le projet 724 Events, dont j'ai assuré le débogage, se distingue par son engagement envers la qualité, mettant en œuvre des méthodes avancées pour garantir la fiabilité de l'application. J'ai utilisé Jest pour effectuer des tests approfondis sur chaque composant, assurant ainsi une validation systématique des fonctionnalités. L'intégration de points d'arrêt a été une stratégie clé que j'ai employée pour simplifier la détection et la résolution des problèmes, en me permettant d'inspecter l'état de l'application à des moments cruciaux. Les React Dev Tools ont également été un outil précieux que j'ai utilisé pour obtenir une vue détaillée de la hiérarchie des composants, des propriétés et des états, facilitant ainsi le processus de débogage. En combinant ces méthodes, j'ai veillé à la robustesse et à la qualité du code, contribuant ainsi au succès de l'application 724 Events.",
    },
    githubLink: "https://github.com/Mishou23/OpenclassroomProject10",
    liveDemoLink: "https://seven24events.onrender.com",
    images: [{ path: Events, title: "724Events" }],
    technologies: [REACT, SASS],
    technologiesText: ["React", "SASS"],
  },
];

export default projectData;

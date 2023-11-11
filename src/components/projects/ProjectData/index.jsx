import Homepage from '../../../assets/images/Portfolio_Sophie.jpg';
import Login from '../../../assets/images/Login.jpg';
import Edit from '../../../assets/images/user_edit.jpg';
import Works from '../../../assets/images/user_works.png';
import editWork from '../../../assets/images/user_editWork.jpg';
import addWork from '../../../assets/images/user_addWork.jpg';
import KasaProjectHousing from '../../../assets/images/Kasa_Project_Housing.jpeg';
import KasaProjectAbout from '../../../assets/images/About.jpg';
import KasaProjectError from '../../../assets/images/ErrorPage.jpg';
import HTML from '../../../assets/svg/html.svg';
import CSS from '../../../assets/svg/css.svg';
import JS from '../../../assets/svg/js.svg';
import NODEJS from '../../../assets/svg/nodejs.svg';
import REACT from '../../../assets/svg/reactjs.svg';
import SASS from '../../../assets/svg/sass.svg';
import REDUX from '../../../assets/svg/redux.svg';


const projectData = [
  {
    id: 1,
    title: "Portfolio Architecte Sophie Blue",
    description: "lores",
    githubLink: "https://github.com/Mishou23/OpenclassroomProject6",
    liveDemoLink: "#",
    images: [Homepage, Login, Edit, Works, editWork, addWork],
    technologies: [HTML, CSS, JS, NODEJS],
  },
  {
    id: 2,
    title: "Projet Kasa",
    description: "Ce projet consiste à la découverte du framework React et de la gestion des routes avec React-router en intégrant les maquettes figma qui sont fournies. Les annonces de logements proviennent d'un fichier JSON.",
    githubLink: "https://github.com/Mishou23/OpenClassroomProject8",
    liveDemoLink: "https://yourwebsite.com/project2",
    images: [KasaProjectHousing, KasaProjectAbout, KasaProjectError],
    technologies: [REACT, SASS],
  },
  {
    id: 3,
    title: "ArgentBank",
    description: `Projet basé sur le site d’une nouvelle banque qui démarre et essaie de percer dans le secteur.

Le but est de mettre en place son application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.`,
    githubLink: "https://github.com/yourusername/project3",
    liveDemoLink: "https://yourwebsite.com/project3",
    images: [KasaProjectHousing],
    technologies: [REACT, REDUX, CSS],
  },
];

export default projectData;

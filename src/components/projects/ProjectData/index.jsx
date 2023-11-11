import Homepage from '../../../assets/images/Portfolio_Sophie.jpg';
import Login from '../../../assets/images/Login.jpg';
import Edit from '../../../assets/images/user_edit.jpg';
import Works from '../../../assets/images/user_works.png';
import editWork from '../../../assets/images/user_editWork.jpg';
import addWork from '../../../assets/images/user_addWork.jpg';
import KasaProjectHousing from '../../../assets/images/Kasa_Project_Housing.jpeg';
import KasaProjectAbout from '../../../assets/images/About.jpg';
import KasaProjectError from '../../../assets/images/ErrorPage.jpg';

const projectData = [
  {
    id: 1,
    title: "Portfolio Architecte Sophie Blue",
    description: "lores",
    githubLink: "https://github.com/Mishou23/OpenclassroomProject6",
    liveDemoLink: "#",
    images: [Homepage, Login, Edit, Works, editWork, addWork ]
  },
  {
    id: 2,
    title: "Projet Kasa",
    description: "Description for Project 2",
    githubLink: "https://github.com/Mishou23/OpenClassroomProject8",
    liveDemoLink: "https://yourwebsite.com/project2",
    images: [KasaProjectHousing, KasaProjectAbout, KasaProjectError ],
  },
  {
    id: 3,
    title: "Project Title 3",
    description: "Description for Project 3",
    githubLink: "https://github.com/yourusername/project3",
    liveDemoLink: "https://yourwebsite.com/project3",
    images: [KasaProjectHousing,],
  },
];

export default projectData;

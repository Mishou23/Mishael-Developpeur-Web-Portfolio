import './index.css';
import Coding from '../../assets/images/web-developer-coding-img.jpg'
export default function AboutMe(){
    return(
        <section className='aboutContainer'  id='a-propos'>
        <div className='containAll'>
        <article className='aboutContent'>
        <div className='about-title'>
        <h2>A propos de moi</h2>
        </div>
        <div className='about-text'>
        <p>En tant que développeur web spécialisé dans le développement frontend, je possède une expertise solide dans un éventail de langages et technologies, notamment HTML, CSS, JavaScript, SCSS, Node.js et React.js. Mon expérience me permet de concevoir des designs web attrayants tout en optimisant les sites pour une excellente expérience utilisateur sur tous les appareils. Mon objectif est de créer des interfaces réactives qui garantissent une navigation fluide. Je suis prêt à mettre en œuvre mes compétences pour contribuer de manière significative à votre équipe de développement frontend.</p>
        </div>
        </article>
        <div className='aboutPhotos'>
        <div className='imgContainer'>
        <img src={Coding} alt="web-developer-coding"/>
        </div>
        </div>
        </div>
        </section>
    )
}
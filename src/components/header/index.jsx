import './index.css'
import Photo from '../../assets/images/bg.jpg'
import Icons from './icons/index'
export default function Intro(){
    return(
        <div className='introContainer'>
        <div className='content'>
        <div className='introTitle'>
            <h1>Developpeur FrontEnd React</h1>
            </div>
            <div className='intro-text'>
                <p>Bonjour, Je suis Mishael, et j'adore le Développement Web. Je vis à Paris, en France.</p>
            </div>
            <div className='icons-links'>
                <div className='linkedIn'>
                    <a href="https://www.linkedin.com/in/mishael-richardson-3a3a9a253/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <div className='gitLink'>
                <a href="https://github.com/Mishou23" target="_blank">
                <i class="fa-brands fa-github"></i>
                </a>
                </div>
            </div>
            <Icons/>
        </div>
         <div className='myPhoto'>
            <img src={Photo} alt='web developer photo'></img>
         </div>
        </div>
    )
}
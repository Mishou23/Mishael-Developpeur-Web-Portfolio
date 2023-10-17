import Navbar from '../../components/nav';
import Intro from '../../components/header';
import Video from '../../assets/video/Background_image.mp4'
import './index.css';

export default function Header() {
    return (
        <header>
            <Navbar />
            <section className='header-container'>
                {/* Video background */}
                <video autoPlay muted loop className='video-background'>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Intro />
            </section>
        </header>
    );
}

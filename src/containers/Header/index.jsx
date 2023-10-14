import Navbar from '../../components/nav'
import Intro from '../../components/header'
import './index.css'

export default function Header(){
    return(
        <header>
            <Navbar/>
            <section className='header-container'>
            <Intro/>
            </section>
        </header>
    )
}
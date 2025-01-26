import React,{useEffect} from 'react'
import styles from './Button.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = () => {
   useEffect(() => {
      AOS.init({duration: 1000});
    }, []);
  return (
    <a href='/diwakar-portfolio/Diwakar_UI_Developer.pdf'  target="_blank"  
    className={styles.resumeBtn} data-aos="fade-up" data-aos-delay="300" 
    rel="noopener noreferrer" download="Diwakar_UI_Developer.pdf">RESUME</a>
  )
}

export default Button
import React,{useEffect} from 'react'
import styles from './Button.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = () => {
   useEffect(() => {
      AOS.init({duration: 1000});
    }, []);
  return (
    <a href='#' className={styles.resumeBtn} data-aos="fade-up" data-aos-delay="300">RESUME</a>
  )
}

export default Button
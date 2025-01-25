import React from 'react'
import styles from './Home.module.css'
import Button from '../Button'

const Home = () => {
  return (
    <section className={styles.home} id='home'>
        <div className={styles.container}>
            <h1 data-aos="fade-right" data-aos-delay="200"> &lt;html&gt; </h1>
            <h2 data-aos="fade-up" data-aos-anchor-placement="top-center" > User Interface Developer </h2>
            <p data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">Self-taught UI Developer with 3 years of experience creating responsive and accessible interfaces. 
              Passionate about crafting visually appealing, user-friendly designs that balance creativity and functionality. 
              Currently honing React skills.</p>
            <Button />
            <div className={styles.contact} data-aos="fade-up" data-aos-delay="400">
              <a href="mailto:diwakar.b1999@gmail.com">diwakar.b1999@gmail.com</a>
              <a href="https://www.linkedin.com/in/diwakar-b-605b3a21b/" target='blank'>www.linkedin.com/in/diwakarb12</a>
            </div>
            <h1 style={{textAlign:"end",}} data-aos="fade-left" data-aos-delay="200"> &lt;/html&gt; </h1>
        </div>
    </section>
  )
}

export default Home
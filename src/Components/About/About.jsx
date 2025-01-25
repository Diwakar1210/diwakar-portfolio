import React from 'react'
import styles from './About.module.css'
import Profile from '../../assets/Profile.png'


const About = () => {
  return (
    <section className={styles.about} id='about'>
        <div>
            <h1 data-aos="fade-right">02. About Me</h1>
            <div className={styles.about_Content}>
                <img src={Profile} alt="profile-image" data-aos="zoom-in" />
                <div>
                    <p data-aos="fade-up" data-aos-duration="1000">
                    I am a passionate UI Developer with a strong dedication to crafting visually 
                    stunning, user-friendly, and accessible websites. I’ve honed my skills in building responsive interfaces, integrating interactive features, and optimizing performance. I believe in continuous learning and innovation to deliver exceptional results that balance creativity and functionality. Let’s create something amazing together!
                    </p>
                    <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Skills</h1>
                    <ul data-aos="fade-up" data-aos-duration="1000">
                        <li data-aos="fade-up" data-aos-delay="200">HTML5</li>
                        <li data-aos="fade-up" data-aos-delay="300">CSS3</li>
                        <li data-aos="fade-up" data-aos-delay="400">JavaScript</li>
                        <li data-aos="fade-up" data-aos-delay="500">React</li>
                        <li data-aos="fade-up" data-aos-delay="600">Bootstrap</li>
                        <li data-aos="fade-up" data-aos-delay="700">jQuery</li>
                        <li data-aos="fade-up" data-aos-delay="800">jQuery Plugins</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
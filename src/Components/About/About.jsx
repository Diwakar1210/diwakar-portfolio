import React from 'react'
import styles from './About.module.css'
import Profile from '../../assets/Profile.png'

const About = () => {
  return (
    <section className={styles.about} id='about'>
        <div>
            <h1>02. About Me</h1>
            <div className={styles.about_Content}>
                <img src={Profile} alt="profile-image" />
                <div>
                    <p>
                    I am a passionate UI Developer with a strong dedication to crafting visually 
                    stunning, user-friendly, and accessible websites. I’ve honed my skills in building responsive interfaces, integrating interactive features, and optimizing performance. I believe in continuous learning and innovation to deliver exceptional results that balance creativity and functionality. Let’s create something amazing together!
                    </p>
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>jQuery Plugins</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
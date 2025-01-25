import React from 'react'
import styles from './Experience.module.css'
import experience from '../../assets/experience.png'

const Experience = () => {
  return (
    <section className={styles.experience} id='experience'>
        <h1 data-aos="fade-right" >03. Experience</h1>
        <div className={styles.experience_Content}>
            <div className={styles.company}>
                <h5 data-aos="fade-up" data-aos-duration="1000">Maxpro Technologies Private Limited - UI Developer </h5>
                <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Dec 2021 - Present</span>
                <div className={styles.roles}>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Roles and Responsibilities </p>
                    <ul>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Design and develop responsive, visually appealing, and accessible user interfaces for 
                        web applications using HTML, CSS, JavaScript, and frameworks like Bootstrap and jQuery. </li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Build and customize Admin and Tutor Dashboards, as well as eCommerce and 
                        business-oriented web applications, tailored to client requirements.</li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Implement interactive features using jQuery plugins such as Select2, Spinwheel, SlimScroll,
                        and jqZoom to enhance user experience.</li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Integrate data visualization libraries like Chart.js and ApexCharts to present complex
                        data effectively.</li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">Design and develop professional email templates for various corporate communications.</li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">Ensure consistent performance and appearance across various browsers and devices.</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={experience} alt="experience-image" data-aos="zoom-in"/>
            </div>
        </div>
    </section>
  )
}

export default Experience
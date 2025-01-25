import React from 'react'
import styles from './Experience.module.css'
import experience from '../../assets/experience.png'

const Experience = () => {
  return (
    <section className={styles.experience} id='experience'>
        <h1>03. Experience</h1>
        <div className={styles.experience_Content}>
            <div className={styles.company}>
                <h5>Maxpro Technologies Private Limited - UI Developer </h5>
                <span>Dec 2021 - Present</span>
                <div className={styles.roles}>
                    <p>Roles and Responsibilities </p>
                    <ul>
                        <li>Design and develop responsive, visually appealing, and accessible user interfaces for 
                        web applications using HTML, CSS, JavaScript, and frameworks like Bootstrap and jQuery. </li>
                        <li>Build and customize Admin and Tutor Dashboards, as well as eCommerce and 
                        business-oriented web applications, tailored to client requirements.</li>
                        <li>Implement interactive features using jQuery plugins such as Select2, Spinwheel, SlimScroll,
                        and jqZoom to enhance user experience.</li>
                        <li>Integrate data visualization libraries like Chart.js and ApexCharts to present complex
                        data effectively.</li>
                        <li>Design and develop professional email templates for various corporate communications.</li>
                        <li>Ensure consistent performance and appearance across various browsers and devices.</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={experience} alt="experience-image" />
            </div>
        </div>
    </section>
  )
}

export default Experience
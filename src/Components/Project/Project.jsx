import React from "react";
import styles from "./Project.module.css";
import arrow from "../../assets/svg/arrow.svg";

const Project = () => {
  return (
    <section className={styles.project} id="project">
      <div>
        <h1 data-aos="fade-right">04. Projects</h1>
        <p className={styles.short_description} data-aos="fade-right" data-aos-duration="2000">
          "I had the opportunity to work on over <b>15+ projects</b> at Maxpro
          Technologies Pvt Ltd and would love to highlight a few of them below."
        </p>
        <div className={styles.project_Content}>
          <div className={styles.project_Card} data-aos="fade-up" data-aos-duration="2000">
            <h4>Midigiworld <a href="https://www.midigiworld.com/" target="blank"> <img src={arrow} alt="arrow-icon" /> </a> </h4>
            <ul>
              <li>
                Developed responsive Admin, Tutor, and Learner portals using
                HTML, CSS, JavaScript, and jQuery, ensuring seamless navigation
                and functionality.
              </li>
              <li>
                Leveraged Blazor, Bootstrap, and jQuery plugins to enhance
                interactivity and user experience.
              </li>
              <li>
                Implemented modular and reusable components to optimize
                development and maintainability.
              </li>
            </ul>
          </div>
          <div className={styles.project_Card} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
            <h4>Indiashopee <a href="https://indiashoppe.com/" target="blank"> <img src={arrow} alt="arrow-icon" /> </a> </h4>
            <ul>
              <li>
                Revamped the eCommerce website using a customizable template,
                aligning it with client requirements for enhanced usability and
                design.
              </li>
              <li>
                Optimized the site's responsiveness and ensured seamless
                functionality across devices using HTML, CSS, and JavaScript.
              </li>
              <li>
                Enhanced user engagement by integrating interactive elements
                with jQuery and improving page load performance.
              </li>
            </ul>
          </div>
          <div className={styles.project_Card} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <h4>Nagaarjuna Construction Company</h4>
            <ul>
              <li>
                Designed and developed the user interface for NCC Codification
                and NCC Formworks using HTML, CSS, JavaScript, Bootstrap,
                jQuery, and Radzen for UI components.
              </li>
              <li>
                Integrated interactive features with jQuery plugins and Radzen
                components to enhance the user experience and improve
                accessibility.
              </li>
            </ul>
          </div>
          <div className={styles.project_Card} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
            <h4>Farmer Producer Organization</h4>
            <ul>
              <li>
                Developed the user interface for the Tamil Nadu Farmer Producer
                Organizations (FPO) using HTML, CSS, JavaScript, Bootstrap,
                jQuery, and Radzen UI components for dynamic design.
              </li>
              <li>
                Integrated Chart.js for data visualization, allowing for clear,
                interactive representation of agricultural data.
              </li>
            </ul>
          </div>
          <div className={styles.project_Card} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
            <h4>Shrinithi Insurance</h4>
            <ul>
              <li>
                Developed the Admin Dashboard UI for Shrinithi Insurance using
                HTML, CSS, MudBlazor, and Blazor components for a modern and
                responsive design.
              </li>
              <li>
                Implemented MudBlazor components to ensure consistent,
                user-friendly interfaces with rich interactive features.
              </li>
            </ul>
          </div>
          <div className={styles.project_Card} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
            <h4>Zoomlo <a href="https://zoomlo.in/" target="blank"> <img src={arrow} alt="arrow-icon" /> </a> </h4>
            <ul>
              <li>
                Revamped the Zoomlo PhotosApp admin website using a customizable
                admin template, aligning it with client specifications for
                improved functionality and design.
              </li>
              <li>
                Implemented responsive design techniques with HTML, CSS, and
                JavaScript to ensure compatibility across all devices and screen
                sizes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

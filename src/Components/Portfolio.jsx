/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bg1.jpeg";

const imageAltText = "A person is holding a phone, capturing a moment related to communication or technology.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-Commerce Application (Dart, Flutter, Firebase) 🎉",
    description:
      "Developed a cross-platform E-Commerce application using Dart and Flutter, enabling users to browse products, manage their cart, and complete purchases seamlessly. Leveraged Firebase for real-time database management, user authentication, and cloud storage, ensuring a secure and responsive user experience.",
      url:"https://github.com/sky-720"
  },
  {
    title: "Netflix Clone",
    description:
      "A fully functional Netflix clone built using React.js, this project replicates the core features of the popular streaming service. Users can browse a wide selection of movies and TV shows, view detailed descriptions, and watch trailers. The app utilizes a responsive design to ensure a seamless experience across devices.",
    url: "https://github.com/sky-720",
  },
  {
    title: "My Resume Site",
    description:
      "Developed a responsive personal resume website utilizing HTML, CSS, and JavaScript. The site features a clean, modern design with smooth scrolling, interactive sections, and a downloadable resume option. Implemented responsive layouts to ensure compatibility across various devices and screen sizes. ",
    url: "https://github.com/sky-720",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a responsive personal portfolio using HTML, CSS, and JavaScript. The site features a clean layout, interactive navigation, and smooth scrolling animations, showcasing my projects and skills in an engaging manner.",
    url: "https://github.com/sky-720",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

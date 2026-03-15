import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Modal from "react-modal";

import team04 from "../assets/AboutImg/team-04.jpg";

const teamMembers = [
  {
    imgUrl: team04,
    name: "Harsh Prajapati",
    position: "Full Stack & Machine Learning Developer",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    instagram: "https://www.instagram.com",
  },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "hidden",
    padding: 0,
    border: "none",
    borderRadius: "10px",
    transition: "opacity 0.5s ease, transform 0.5s ease",
    opacity: 0,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    transition: "opacity 0.5s ease",
  },
};

Modal.setAppElement("#root");

function AboutPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
    setTimeout(() => {
      document.querySelector(".ReactModal__Content").style.opacity = 1;
      document.querySelector(".ReactModal__Content").style.transform =
        "translate(-50%, -50%) scale(1)";
    }, 1);
  };

  const closeModal = () => {
    document.querySelector(".ReactModal__Content").style.opacity = 0;
    document.querySelector(".ReactModal__Content").style.transform =
      "translate(-50%, -50%) scale(0.8)";
    setTimeout(() => {
      setModalIsOpen(false);
      setSelectedImage("");
    }, 500);
  };

  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">About Me</h6>
          <h2>
            Hi, I am <span className="highlight">Harsh Prajapati</span>
          </h2>
          <p className="about__description">
            PredictiX is my final year project. It is an AI-based multi-disease
            prediction platform that helps users check heart disease, diabetes,
            breast cancer, and lung cancer risk with an easy-to-use interface.
          </p>
        </div>

        <div className="project__info-card">
          <h3>Project Information</h3>
          <ul>
            <li>This project is built using the MERN stack.</li>
            <li>
              It integrates machine learning models for different disease
              predictions.
            </li>
            <li>
              Users can upload reports/images and generate downloadable PDF
              reports.
            </li>
            <li>Developed as a complete final year major project.</li>
          </ul>
        </div>

        <div className="team__wrapper single__member">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  onClick={() => openModal(item.imgUrl)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                  <span>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </span>
                  <span>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </span>
                  <span>
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Enlarged Image"
      >
        <img src={selectedImage} alt="Enlarged view" className="modal-image" />
      </Modal>
    </section>
  );
}

export default AboutPage;

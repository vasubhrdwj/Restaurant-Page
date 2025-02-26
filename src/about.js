import pfp from "../assets/Photos/WhatsappDp_July2024.jpg";
import ghIcon from "../assets/Photos/github-mark-white.svg";
import liIcon from "../assets/Photos/LI-In-Bug.png";

export default function about() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const aboutBox = document.createElement("div");
  aboutBox.classList.add("aboutBox");
  const introText = document.createElement("div");
  introText.classList.add("introText");
  const pf = document.createElement("img");
  pf.src = pfp;
  pf.classList.add("pfp");
  const txt = document.createElement("p");
  txt.classList.add("intro-txt");

  txt.textContent = `Hey, I'm Vasu Bhardwaj, a student at KIIT with a passion for web development.
   I enjoy building sleek, functional web apps and love exploring both frontend and backend tech.
    My journey started with problem-solving, and now I'm diving into JavaScript, React, and even blockchain.
     Always up for learning and creating something cool`;

  const githubIcon = document.createElement("img");
  const linkedinIcon = document.createElement("img");
  githubIcon.classList.add("icon");
  linkedinIcon.classList.add("icon");
  const iconBar = document.createElement("div");
  iconBar.classList.add("icon-bar");
  githubIcon.src = ghIcon;
  linkedinIcon.src = liIcon;
  aboutBox.appendChild(introText);
  introText.appendChild(pf);
  introText.appendChild(txt);
  iconBar.appendChild(githubIcon);
  iconBar.appendChild(linkedinIcon);
  introText.appendChild(iconBar);
  contentDiv.appendChild(aboutBox);
}

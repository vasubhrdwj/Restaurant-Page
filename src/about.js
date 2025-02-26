export default function about() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const aboutBox = document.createElement("div");
  aboutBox.classList.add("aboutBox");
  contentDiv.appendChild(aboutBox);
}

export default function addContent() {
  const contentDiv = document.querySelector("#content");

  const tagLine = document.createElement("div");
  const mainText = document.createElement("h1");
  tagLine.classList.add("tagLine");
  mainText.textContent = `More Than Coffee,
          It's an Experience.`;
  tagLine.appendChild(mainText);
  contentDiv.appendChild(tagLine);
}

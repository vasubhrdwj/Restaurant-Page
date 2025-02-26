import p1 from "../assets/Photos/americano-pic.png";
import p2 from "../assets/Photos/Cappucino-pic.png";
import p3 from "../assets/Photos/espresso-pic.png";
import p4 from "../assets/Photos/mochachino-pic.png";

export default function menu() {
  const contentDiv = document.querySelector("#content");

  const menuBox = document.createElement("div");
  const images = [p1, p2, p3, p4];
  const t1 = `Americano ☕ : A smooth and bold espresso diluted with hot water, giving it a rich yet mild flavor.`;
  const t2 = `Cappuccino ☕ : A creamy blend of espresso, steamed milk, and a thick layer of frothy foam on top.`;
  const t3 = `Espresso ☕ : A strong, concentrated shot of coffee with a deep, intense flavor and a velvety crema.`;
  const t4 = `Mochaccino ☕ : A delightful mix of espresso, steamed milk, and chocolate, topped with whipped cream.`;
  const txt = [t1, t2, t3, t4];

  menuBox.classList.add("menuBox");

  for (let i = 0; i < 4; i++) {
    const dish = document.createElement("div");
    dish.classList.add("dish");
    menuBox.appendChild(dish);
    const img = document.createElement("img");
    const t = document.createElement("p");
    t.textContent = txt[i]; 
    img.classList.add("recipe-img");
    img.src = images[i];
    dish.appendChild(img);
    dish.appendChild(t);
  }
  contentDiv.appendChild(menuBox);
}

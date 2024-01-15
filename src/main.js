import addCardsTo from "./utils/addCards.js";
import getDataFromServer from "./utils/getData.js";
import itemCard from "./templates/itemCard.hbs";

import "./css/main.css";

getDataFromServer("notebook").then((data) => {
  const cardsMarkup = itemCard(data);
  addCardsTo(cardsMarkup, document.querySelector(".js-products"));
});

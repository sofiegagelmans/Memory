import Card from "./Card.js";

class Memory {
  constructor(lvl = 1) {
    this._allIcons = [];
    this._lvl = lvl;
    this._first = null;
    this._second = null;
    this._selected = [];
    this._turned = [];
    this.fetchIcons();
  }

  fetchIcons() {
    fetch("../icons/selection.json")
      .then((response) => response.json())
      .then((data) => {
        this._allIcons = data.icons.map((el) => el.properties.name);
        this.init();
        console.log("test");
      })
      .catch((error) => console.log(error));
  }

  init() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
        <div id="grid"></div> 
      `
    );
    this._htmlRef = document.querySelector("#grid");
    this.setUpEvents();
    this.startLevel();
  }

  setUpEvents() {
    window.addEventListener("flip", (e) => {
      const flippedCard = e.detail;
      this._turned.push(flippedCard);
      if (this._turned.length === 2) {
        if (this._turned[0]._iconName === this._turned[1]._iconName) {
          //match
          setInterval(() => {
            this._turned[0].block();
            this._turned[1].block();
            this._turned = [];
          }, 1000);
        } else {
          //no match
          setInterval(() => {
            this._turned[0].turn();
            this._turned[1].turn();
            this._turned = [];
          }, 1000);
        }
      }
    });
  }

  startLevel() {
    //first 4 cards
    let card1 = new Card(this._htmlRef, "home");
    let card2 = new Card(this._htmlRef, "pencil");
    let card3 = new Card(this._htmlRef, "pencil");
    let card4 = new Card(this._htmlRef, "home");
    // }
    // }

    // new Card(".grid", "pencil||home||gear||tree||leaf");
    // const result = getUniqueItemsfromArray(this._lvl * 2)
    // const allCards = [...result, ...result];
    // allCards.shuffle() //how to suffle an array js
    // allCards.forEach((icon) => {
    //   new Card(this._htmlRef, icon);
    // })

    //1 => 2 unieke => 4
    //2 => 4 unieke => 8
    //3 => 8 unieke => 16
  }
}

export default Memory;

// stap 1
// 1 unieke elementen uit array
// stap 2

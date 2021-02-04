export default class Card {
  constructor(holder, icon) {
    this._holder = holder;
    this._icon = icon;
    this._flippedEvent = new CustomEvent("flipped", { detail: this });
    this._ref = this.init();
    this._isFlipped = false;
    this.setUpEvents();
  }
  init() {
    this._holder.insertAdjacentHTML(
      "beforeend",
      `
            <div class="card">
                ${this._icon}
            </div>
        `
    );
    return this._holder.querySelector(".card:last-child");
  }
  setUpEvents() {
    this._ref.onclick = this.flip;
  }
  flip = () => {
    if (this._isFlipped) {
      this._ref.classList.remove("flipped");
      //_isFlipped terug false zetten
    } else {
      //flip him
      // event uitsturen
      //send event that card has been flipped

      dispatchEvent(this._flippedEvent);
    }
  };
}

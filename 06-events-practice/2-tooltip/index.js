class Tooltip {
  #instance = null;
  body = document.querySelector("body");
  element = document.createElement("div");

  constructor() {
    if (Tooltip.instance) {
      return Tooltip;
    }
    Tooltip.instance = Tooltip;
  }
  initialize() {
    this.createElement();
    this.body.addEventListener("pointerover", this.show.bind(this));
    this.body.addEventListener("pointerout", this.hide.bind(this));
    this.body.addEventListener("mousemove", this.move.bind(this));
  }

  render(text) {
    this.element.style.display = "block";
    this.element.textContent = text;
  }

  createElement() {
    this.element.classList.add("tooltip");
    this.element.style.display = "none";
    this.element.style.position = "absolute";
    this.body.appendChild(this.element);
  }

  show(event) {
    this.createElement();

    const target = event.target;
    const dataTargetText = target.dataset.tooltip;

    if (!dataTargetText) {
      return;
    }

    this.render(dataTargetText);
  }

  move(event) {
    const targetPositionX = event.clientX;
    const targetPositionY = event.clientY;
    this.element.style.top = targetPositionY + "px";
    this.element.style.left = targetPositionX + 5 + "px";
  }
  hide() {
    this.destroy();
  }

  destroy() {
    this.remove();
    this.body.removeEventListener("pointerover", this.show.bind(this));
    this.body.removeEventListener("pointerout", this.hide.bind(this));
    this.body.removeEventListener("mousemove", this.move.bind(this));
  }

  remove() {
    this.element.remove();
  }
}

export default Tooltip;

export default class NotificationMessage {
  element;
  activeElement;

  constructor(message, props = {}) {
    const { duration = 1000, type = "success" } = props;
    this.message = message;
    this.duration = duration;
    this.type = type;

    this.element = this.createElement();
  }

  createTemplate() {
    return `
		<div class="notification ${this.type}" style="--value:${this.formattedDuration()}s">
		<div class="timer"></div>
		<div class="inner-wrapper">
			<div class="notification-header">
				${this.type}
			</div>

			<div class="notification-body">
				${this.message}
			</div>
		</div>
	</div>
	`;
  }

  formattedDuration() {
    return this.duration / 1000;
  }

  createElement() {
    const divElement = document.createElement("div");

    divElement.innerHTML = this.createTemplate();

    return divElement.firstElementChild;
  }

  addToHTML() {
    document.body.appendChild(this.element);
  }

  show(el) {
    if (NotificationMessage.activeElement) {
      NotificationMessage.activeElement.destroy();
    }

    NotificationMessage.activeElement = this;

    if (el) {
      el.appendChild(this.element);
      this.element = el;
    }

    this.addToHTML();
    setTimeout(this.remove.bind(this), this.duration);
  }

  destroy() {
    this.remove();
  }

  remove() {
    this.element.remove();
  }
}

export default class ColumnChart {
  element;
  chartHeight = 50;

  constructor(props = {}) {
    const {
      data = [],
      label = "",
      value = 0,
      link = "",
      formatHeading = (value) => value,
    } = props;
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.formatHeading = formatHeading;

    this.element = this.createTemplate();
  }

  createTemplate() {
    const template = document.createElement("div");
    template.classList.add("column-chart");

    if (!this.data.length) {
      template.classList.add("column-chart_loading");
    }

    template.innerHTML = this.createElement();

    return template;
  }

  createElement() {
    return `
			<div class='column-chart__title'>
				${this.label}

				${this.createLinkElement()}
			</div>

			<div class='column-chart__container'>
				<div class='column-chart__header'>
					${this.formatHeading(this.value)}
				</div>

				<div class='column-chart__chart'>
					${this.createChartElements()}
				</div>

			</div>
		`;
  }

  createLinkElement() {
    return this.link
      ? `
				<a class='column-chart__link' href='${this.link}'>
					Подробнее
				</a>
			`
      : "";
  }

  createChartElements() {
    return this.getColumnProps(this.data)
      .map((item) => {
        return `
				<div style='--value: ${item.value}' data-tooltip="${item.percent}"></div>
			`;
      })
      .join("");
  }

  getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map((item) => {
      return {
        percent: ((item / maxValue) * 100).toFixed(0) + "%",
        value: String(Math.floor(item * scale)),
      };
    });
  }

  update(newData) {
    this.data = newData;
    this.element = this.createTemplate();
  }

  destroy() {
    this.remove();
  }

  remove() {
    this.element.remove();
  }
}

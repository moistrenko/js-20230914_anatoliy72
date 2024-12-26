import SortableTableFirst from "../../05-dom-document-loading/2-sortable-table-v1/index.js";

export default class SortableTable extends SortableTableFirst {
  tableHeader;

  constructor(
    headerConfig,
    {
      data = [],
      sorted = {
        id: "title",
        title: "asc",
      },
    }
  ) {
    super(headerConfig, data);

    this.sorted = {
      id: sorted.id,
      order: sorted.order,
    };

    this.initTable();
  }

  initTable() {
    super.sort(this.sorted.id, this.sorted.order);
    this.addedEventHandler();
  }

  addedEventHandler() {
    this.tableHeader = this.subElements.header;

    this.tableHeader.addEventListener(
      "pointerdown",
      this.clickHandler.bind(this)
    );
  }

  clickHandler(event) {
    const element = event.target.closest(".sortable-table__cell");

    if (!element) {
      return;
    }

    const sortedId = element.getAttribute("data-id");
    const isSortable = element.getAttribute("data-sortable");

    if (!JSON.parse(isSortable)) {
      return;
    }

    if (this.sorted.id === sortedId) {
      this.sorted.order = this.sorted.order === "asc" ? "desc" : "asc";
    } else {
      this.sorted.id = sortedId;
      this.sorted.order = "desc";
    }

    super.sort(this.sorted.id, this.sorted.order);
  }

  destroy() {
    super.destroy();
    this.tableHeader.removeEventListener(
      "pointerdown",
      this.clickHandler.bind(this)
    );
  }
}

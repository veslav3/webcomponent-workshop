customElements.define('counter-button', class extends HTMLElement {

    /**
     * The class constructor object
     */
    constructor () {

        // Always call super first in constructor
        super();

        // Track the count
        this.count = 0;

        // Render HTML
        this.innerHTML =
            `<button>Clicked ${this.count} Times</button>`;

    }

    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback () {
        let instance = this;
        this.addEventListener('click', function () {
            instance.count++;
            instance.firstElementChild.textContent = `Clicked ${this.count} Times`;
        });
    }

});
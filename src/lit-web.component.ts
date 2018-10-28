import {LitElement, html, property} from '@polymer/lit-element';

export class LitWebComponent extends LitElement {

    @property() highlight: string;

    constructor() {
        super();
        this.highlight = 'getting better';
    }

    render() {
        return html`<style> .green { color: green; } </style>
          <slot></slot> <span class="green">${this.highlight}</span>!`;
    }

}

window.customElements.define('lit-web', LitWebComponent);
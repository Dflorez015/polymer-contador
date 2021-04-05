import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class Primer_componenteDuvanflorez extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          border: 1px solid red;          
        }
        #contador{
          text-align: center;
        }
      </style>
      <div id = "contador">
        <h1>Contador</h1>
        <h3>[[num1]]</h3>
        <button on-click="sumar">¡Sumar!</button>
      </div>
    `;
  }
  static get properties() {
    return {
      num1: {
        type: Number,
        value: 0,
      },
    };
  }

  sumar() {
    this.num1++;
  }

}

window.customElements.define('primer_componente-duvanflorez', Primer_componenteDuvanflorez);

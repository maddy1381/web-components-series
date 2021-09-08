import { LitElement, html, css } from 'lit-element';

export class MainForm extends LitElement {
     static get properties() {
          return {
               age: { type: Number },
               title: { type: String }
          };
     }

     constructor() {
          super();

          this.age = 0;
          this.title = 'hello';
     }
     render() {
          return html`
               <div>My age is ${this.age}</div>
               <div>The Title is ${this.title}</div>
          `;
     }
}

customElements.define('main-form', MainForm);
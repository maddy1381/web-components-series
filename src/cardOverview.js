import { LitElement, html, css } from 'lit-element';
import { CardElement } from './card-element.js';
import { FormElement } from './form-element.js';

export class CardOverview extends LitElement{

     static get properties(){
          return{
               cardArray: {type: Array}
          }
     }

     constructor() {
          super();

          this.cardArray = [];
         
               this.propObj = {
                    seriesName: this.seriesName,
                    directorName: this.directorName,
                    rating: this.rating
               }
               console.log(this.propObj)
     }

     render(){
          console.log(this.seriesName)
          return html `

               ${
                    this.cardArray.map((card) => html `<card-element seriesName=${card.seriesName} directorName=${card.directorName} rating=${card.rating}></card-element>`)
               }
               
          `;
     }

}

customElements.define('card-overview', CardOverview);
import { LitElement, html, css } from "lit-element";

export class CardElement extends LitElement{

     static get properties() {
          return {
               seriesName: { type: String },
               directorName: { type: String },
               rating: { type: Number }
          }
     }

     static get styles(){
          return css`
          .card {
               box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
               transition: 0.3s;
               width: 100%;
               
             }
             
             .card:hover {
               box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
             }
             
             .container {
               padding: 2px 16px;
             }
          `;
     }

     constructor() {
          super();

          this.seriesName = '';
          this.directorName = '';
          this.rating = 0;
     }

     render(){
          return html`
          <div class="card">      
               <div class="container">
                    <h4><b>Web : ${this.seriesName}</b></h4> 
                    <p>Director: ${this.directorName}</p> 
                    <p>Rating: ${this.rating}</p>
               </div>
           </div>
          `;
     }
}

customElements.define('card-element', CardElement);
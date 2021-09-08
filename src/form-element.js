// import { FormElement } from './FormElement.js';


import { LitElement, html, css} from 'lit-element';

export class FormElement extends LitElement {

     static get styles(){
          return css`
               .heading, div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin:.8rem;
                    
               }
               .heading{
                    font-size: 2em;
               }
               
               .submit{
                    font-size: 1.2rem;
                    border-radius: 10px;
               
               }
               .submit:hover{
                    cursor: pointer;
               }

              
               
          `;
     }

     _handleSubmit(e){
          e.preventDefault();
          const webSeriesName = this.shadowRoot.getElementById('webSeries-name').value;
          const directorName = this.shadowRoot.getElementById('director-name').value;
          const rating = this.shadowRoot.getElementById('rating').value;
          
          let formEvent = new CustomEvent('form-submit',{
               detail:{
                    webSeriesName: webSeriesName,
                    directorName: directorName,
                    rating: rating

               }
          })

          

          this.dispatchEvent(formEvent);

     }

     

     render() {
          return html`
               <div class='heading'>Form element</div>
               <form>
               <div>
                    <label for="webSeries-name">Web Series:</label>
                    <input type="text" id="webSeries-name" name="webSeries-name">
               </div>
               <div>
                    <label for="director-name">Director:</label>
                    <input type="text" id="director-name" name="director-name">
               </div>
               <div>
                    <label for="rating">Rating:</label>
                    <input type="text" id="rating" name="rating">
               </div>
               <div><button @click=${this._handleSubmit} class='submit'>Submit</button></div> 
               </form>
               
          `;
     }
}

customElements.define('form-element', FormElement);
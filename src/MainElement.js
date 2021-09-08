import { LitElement, html, css } from 'lit-element';
import { CardElement } from './card-element.js';
import { FormElement } from './form-element.js';
import { CardOverview } from './cardOverview.js';

export class MainElement extends LitElement {
  static get properties(){
    return {
      cardArray: {type: Array}
    }
    
  }

  
  constructor() {
    super();

    this.cardArray = [
      {
      seriesName: 'Prison Break',
      directorName: 'Dont Know',
      rating: 3
    },
    {
          seriesName: 'Money Heist',
          directorName: 'Dont Know',
          rating: 3
    }
    ];
  }

  _formSubmit(e){
    const webSeriesName = e.detail.webSeriesName;
    const directorName = e.detail.directorName;
    const rating = e.detail.rating;

  


    const propObj = {
      seriesName: webSeriesName,
      directorName: directorName,
      rating: parseInt(rating)
  }

  console.log(propObj)

 this.cardArray.push(propObj); 

  }

  

  render() {
    debugger;
    return html`
    <div class="main">
      <div class="form-part">
        <form-element @form-submit=${this._formSubmit}></form-element>
      </div>
      
      <div class="card-part">
        <card-overview .cardArray=${this.cardArray}></card-overview>
      </div>
  </div>  
    `;
  }
}

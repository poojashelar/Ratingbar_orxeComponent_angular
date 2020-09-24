import { html, customElement, LitElement, property } from 'lit-element';
import styles from './rating-bar-css';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {
  /**
   * Following property are used to give the initial and default value.
   */

  @property({ type: String, reflect: true, attribute: 'type' })
  type = 'linear';
  @property({ type: Number, reflect: true, attribute: 'rating' })
  rating = 0;
  @property({ type: String, reflect: true, attribute: 'label' })
  label = '';

  // _getRating method for converts the Rating of scale 1 - 100 by dividing it by 10.
  private _getRating(): number {
    return this.rating /10;
  }

  // This method is used to add an label attribute if it doesn’t exists by default it’s value is computed based on rating and label.
  private _addAriaLabel(): string {
    return this.label ? this.label : 'User Experiance and rating =' + this._getRating();
  }

  // This method is used to get the appropriate rotation class
  private _getRotationClass() {
    this._getIndicatorClass();
    return 'p'+this.rating;
  }

  // This method is used to return indicator color class based on ratings
  private _getLinearIndicatorColor() {
     if (this._getRating() > 0.0 && this._getRating() <= 3.0) {
       return 'rating-bad';
     } else if (this._getRating() > 3.0 && this._getRating()<= 5.0) {
       return 'rating-poor';
     } else if (this._getRating() > 5.0 && this._getRating() <= 7.0) {
      return 'rating-average';
    } else if (this._getRating() > 7.0 && this._getRating() <= 8.5) {
      return 'rating-great';
    } else if (this._getRating() > 8.5 && this._getRating() < 10.0) {
      return 'rating-excellent';
    }
  }

  // This method is used to return class for linear rating bar based on ratings
  private _getIndicatorClass() {
    if (this._getLinearIndicatorColor() && this._getLinearIndicatorColor() == 'rating-bad') {
      return 'Bad';
    } else if (this._getLinearIndicatorColor() && this._getLinearIndicatorColor() == 'rating-poor') {
      return 'Poor';
    } else if (this._getLinearIndicatorColor() && this._getLinearIndicatorColor() == 'rating-average') {
      return 'Average';
    } else if (this._getLinearIndicatorColor() && this._getLinearIndicatorColor() == 'rating-great') {
      return 'Great';
    } else if (this._getLinearIndicatorColor() && this._getLinearIndicatorColor() == 'rating-excellent') {
      return 'Excellent';
    }
  }

  // This method is used to check whether rating is greater than 50 or not for Donut progress bar
  private _isOver50() {
    return this._getRating() > 5 ? true: false;
  }

  // This method is used to render Linear Rating bar
  private _linearRatingBar() {
    return html`
    <div class="parent">
      <div class="progress-container round-xlarge"> 
        <div class="progressbar ${this._getIndicatorClass()} ${this._getLinearIndicatorColor()} round-xlarge"></div>
      </div>

      <div class="labels-div">
        <label class="textLabel"> ${this._addAriaLabel()} </label>
        <label class="textLabelNumber"> ${this._getRating()} </label>
      </div>
  </div> `;
  }

  // This method is used to render Donut Rating bar
  private _donutRatingBar() {
    return html`
    <div class="circle-container">
    <div class="indicator">
      <span class="center-num">${this._getRating()}</span>
      <div class="centr ${this._isOver50() ? 'over50': ''} ${this._getRotationClass()}">
        <div class="value-bar ${this._getLinearIndicatorColor()}"></div>
        <div class="left-half ${this._isOver50() ? this._getLinearIndicatorColor(): ''}"></div>
      </div>
      <div class="centrV"></div>
    </div>
    <div class="textLabels">
      <span>
        <span class="label">${this._getIndicatorClass()}</span><br>
        <span class="metadata">${this.label} </span>
      </span>
    </div>
  </div>
    `;
  }

  // This method is used to render specific bar based on the type(linear/donut).
  private _renderRatingBar() {
    if (this.type=="linear") {
      return this._linearRatingBar();
    } else {
        return this._donutRatingBar();
      }
  }

  /**
   * Implement `render` to define a template
   */
  render() {
    return html`
    <div >
         ${this._renderRatingBar()}
    </div>
  
    `;
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}

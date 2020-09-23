import { html, customElement, LitElement, property } from 'lit-element';
import styles from './rating-bar-css';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {
  /**
   * Following property are used to give the initial and default value.
   */

  @property({ type: String, reflect: true, attribute: 'type' })
  type = 'linear';
  @property({ type: String, reflect: true, attribute: 'rating' })
  rating = '0';
  @property({ type: String, reflect: true, attribute: 'label' })
  label = '';

  getRating(): number {
    return parseFloat(this.rating) /10;
  }

  addAriaLabel(): string {
    return this.label ? this.label : 'User Experiance and rating =' + this.getRating();
  }
  getRotationClass() {
    this.getIndicatorClass();
    return 'p'+this.rating;
  }

  getLinearIndicatorColor() {
     if (this.getRating() > 0.0 && this.getRating() <= 3.0) {
       return 'rating-bad';
     } else if (this.getRating() > 3.0 && this.getRating()<= 5.0) {
       return 'rating-poor';
     } else if (this.getRating() > 5.0 && this.getRating() <= 7.0) {
      return 'rating-average';
    } else if (this.getRating() > 7.0 && this.getRating() <= 8.5) {
      return 'rating-great';
    } else if (this.getRating() > 8.5 && this.getRating() < 10.0) {
      return 'rating-excellent';
    }
  }

  getIndicatorClass() {
    if (this.getLinearIndicatorColor() && this.getLinearIndicatorColor() == 'rating-bad') {
      return 'Bad';
    } else if (this.getLinearIndicatorColor() && this.getLinearIndicatorColor() == 'rating-poor') {
      return 'Poor';
    } else if (this.getLinearIndicatorColor() && this.getLinearIndicatorColor() == 'rating-average') {
      return 'Average';
    } else if (this.getLinearIndicatorColor() && this.getLinearIndicatorColor() == 'rating-great') {
      return 'Great';
    } else if (this.getLinearIndicatorColor() && this.getLinearIndicatorColor() == 'rating-excellent') {
      return 'Excellent';
    }
  }

  isOver50() {
    return this.getRating() > 5 ? true: false;
  }

  renderLinearRatingBar() {
    if (this.type=="linear") {
      return html`
      <div class="parent">
        <div class="progress-container round-xlarge"> 
          <div class="progressbar ${this.getIndicatorClass()} ${this.getLinearIndicatorColor()} round-xlarge"></div>
        </div>

        <div class="labels-div">
          <label class="textLabel"> ${this.addAriaLabel()} </label>
          <label class="textLabelNumber"> ${this.getRating()} </label>
        </div>
    </div> `;
    } else {
        return html`
        <div class="circle-container">
        <div class="indicator">
          <span class="center-num">${this.getRating()}</span>
          <div class="centr ${this.isOver50() ? 'over50': ''} ${this.getRotationClass()}">
            <div class="value-bar ${this.getLinearIndicatorColor()}"></div>
            <div class="left-half ${this.isOver50() ? this.getLinearIndicatorColor(): ''}"></div>
          </div>
          <div class="centrV"></div>
        </div>
        <div class="textLabels">
          <span>
            <span class="label">${this.getIndicatorClass()}</span><br>
            <span class="metadata">${this.label} </span>
          </span>
        </div>
      </div>
        `;
      }
  }

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
    <div >
         ${this.renderLinearRatingBar()}
    </div>
  
    `;
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}

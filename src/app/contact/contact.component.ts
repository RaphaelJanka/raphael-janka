import { Component, ElementRef, ViewChild } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', 'contact.component.media-query.scss']
})


export class ContactComponent {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('checkbox') checkbox!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('divName') divName!: ElementRef;
  @ViewChild('divMail') divMail!: ElementRef;
  @ViewChild('divMessage') divMessage!: ElementRef;
  @ViewChild('errorName') errorName!: ElementRef;
  @ViewChild('errorMail') errorMail!: ElementRef;
  @ViewChild('errorMessage') errorMessage!: ElementRef;
  @ViewChild('imgName') imgName!: ElementRef;
  @ViewChild('imgMail') imgMail!: ElementRef;
  @ViewChild('imgMessage') imgMessage!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('successMessage') successMessage!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('mailSent') mailSent!: ElementRef;
  

  REGEX = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

  private animationPath = 'assets/img/Animation - 1699567804264.json';

  constructor() {}


  /**
   * Initializes event listeners for input elements and checkbox to update the send button state.
   * @memberof YourComponent
   */
  ngAfterViewInit() {
    this.name.nativeElement.addEventListener('input', this.updateFormStateAndValidate.bind(this));
    this.mail.nativeElement.addEventListener('input', this.updateFormStateAndValidate.bind(this));
    this.message.nativeElement.addEventListener('input', this.updateFormStateAndValidate.bind(this));
    this.checkbox.nativeElement.addEventListener('change', this.updateFormStateAndValidate.bind(this));
  }

  
  /**
   * Updates the form state and triggers input validation for name, mail, and message fields.
   */
  updateFormStateAndValidate() {
    let nameValue = this.name.nativeElement.value;
    let mailValue = this.mail.nativeElement.value;
    let messageValue = this.message.nativeElement.value;
    let checkboxChecked = this.checkbox.nativeElement.checked;
    this.validateMailInput(mailValue);
    this.validateInputs(nameValue, this.divName, this.errorName, this.imgName);
    this.validateInputs(messageValue, this.divMessage, this.errorMessage, this.imgMessage);
    this.checkFormValidation(nameValue, mailValue, messageValue, checkboxChecked);
  }


  /**
   * Validates an input field and updates its visual representation based on the input value.
   *
   * @param {string} inputValue - The current value of the input field.
   * @param {ElementRef} borderElement - The element representing the border of the input field.
   * @param {ElementRef} errorElement - The element for displaying error messages.
   * @param {ElementRef} imgElement - The element for displaying images or icons.
   */
  validateInputs(inputValue: string, borderElement: ElementRef, errorElement: ElementRef, imgElement: ElementRef) {
    let border = borderElement.nativeElement;
    let error = errorElement.nativeElement;
    let img = imgElement.nativeElement;

    if (inputValue.length > 1) {
      this.showChecked(border, error, img);
    } else if (inputValue.length > 0) {
      this.showError(border, error, img);
    } else {
     this.restoreInputField(border, error, img);
    }
  }

  
  /**
   * Validates an email input field and updates its visual representation based on the email value.
   */
  validateMailInput(mailValue: string) {
    let border = this.divMail.nativeElement;
    let error = this.errorMail.nativeElement;
    let img = this.imgMail.nativeElement;
    if (mailValue.match(this.REGEX)) {
      this.showChecked(border, error, img);
    } else {
      this.showError(border, error, img);
    }
    if (mailValue.length == 0) {
      this.restoreInputField(border, error, img);
    }
  }


  /**
   * Updates the visual representation of an input field to indicate a checked or valid state.
   *
   * @param {HTMLElement} border - The DOM element representing the border of the input field.
   * @param {HTMLElement} error - The DOM element for displaying error messages.
   * @param {HTMLImageElement} img - The DOM element for displaying images or icons.
   */
  showChecked(border: HTMLElement, error: HTMLElement, img: HTMLImageElement) {
    border.classList.add('border-green');
    error.classList.add('hidden');
    img.src ='assets/img/check.svg';
  }


  /**
   * Updates the visual representation of an input field to indicate an error or invalid state.
   *
   * @param {HTMLElement} border - The DOM element representing the border of the input field.
   * @param {HTMLElement} error - The DOM element for displaying error messages.
   * @param {HTMLImageElement} img - The DOM element for displaying images or icons.
   */
  showError(border: HTMLElement, error: HTMLElement, img: HTMLImageElement) {
    border.classList.add('border-red');
    error.classList.remove('hidden');
    img.src = 'assets/img/missing.svg';
    img.classList.remove('hidden');
    if (border.classList.contains('border-green')) {
      border.classList.remove('border-green');
    }
  }

  
  /**
   * Restores the visual representation of an input field to its default state by removing any error or success indications.
   *
   * @param {HTMLElement} border - The DOM element representing the border of the input field.
   * @param {HTMLElement} error - The DOM element for displaying error messages.
   * @param {HTMLImageElement} img - The DOM element for displaying images or icons.
   */
  restoreInputField(border: HTMLElement, error: HTMLElement, img: HTMLImageElement) {
    if (!img.classList.contains('hidden')) {
      img.classList.add('hidden');
    }
    if (!error.classList.contains('hidden')) {
      error.classList.add('hidden');
    }
    if (border.classList.contains('border-red')) {
      border.classList.remove('border-red');
    }
    if (border.classList.contains('border-green')) {
      border.classList.remove('border-green');
    }
  }

  
  /**
   * Checks the overall form validation based on the provided input values and checkbox state.
   *
   * @param {string} name - The value of the name input field.
   * @param {string} mail - The value of the email input field.
   * @param {string} message - The value of the message input field.
   * @param {boolean} checkbox - The state of the checkbox input.
   */
  checkFormValidation(name: string, mail: string, message: string, checkbox: boolean) {
    let isFormValid = name.length > 1 && mail.match(this.REGEX) && message.length > 1 && checkbox;
    this.sendButton.nativeElement.disabled = !isFormValid;
  }


  /**
   * Initiates the process of sending an email by collecting form data and displaying loading animation.
   * Logs information about the email to be sent.
   */
  async sendMail(event: any) {
    this.showOverlay();
    try {
      event.preventDefault();
      const data = new FormData(event.target);
      await fetch("https://formspree.io/f/mknleqzb", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
      this.restoreInputContainers();
      this.displaySuccessMessage();
    }
  }


  /**
   * Displays an overlay by removing the 'd-none' class from the overlay elements.
   */
  showOverlay() {
    let overlay = this.overlay.nativeElement;
    overlay.classList.remove('d-none');
  }


  /**
   * Restores the input containers to their initial state after processing a form submission.
   */
  restoreInputContainers() {
    let name = this.name.nativeElement;
    let mail = this.mail.nativeElement;
    let message = this.message.nativeElement;
    let checkbox = this.checkbox.nativeElement;
    this.restoreInputValues(name, mail, message, checkbox);
    this.restoreInputDivsAfterSendingMail(name, mail, message);
  }


  /**
   * Resets the values of input fields and unchecks a checkbox input.
   *
   * @param {HTMLInputElement} name - The DOM element representing the name input field.
   * @param {HTMLInputElement} mail - The DOM element representing the email input field.
   * @param {HTMLInputElement} message - The DOM element representing the message input field.
   * @param {HTMLInputElement} checkbox - The DOM element representing a checkbox input.
   */
  restoreInputValues(name: HTMLInputElement, mail: HTMLInputElement, message: HTMLInputElement, checkbox: HTMLInputElement) {
    name.value = '';
    mail.value = '';
    message.value = '';
    checkbox.checked = false;
  }


  /**
   * Restores the visual representation of input fields and related elements after sending an email.
   *
   * @param {HTMLInputElement} name - The DOM element representing the name input field.
   * @param {HTMLInputElement} mail - The DOM element representing the email input field.
   * @param {HTMLInputElement} message - The DOM element representing the message input field.
   */
  restoreInputDivsAfterSendingMail(name: HTMLInputElement, mail: HTMLInputElement, message: HTMLInputElement) {
    this.validateInputs(name.value, this.divName, this.errorName, this.imgName);
    this.validateInputs(message.value, this.divMessage, this.errorMessage, this.imgMessage);
    this.validateMailInput(mail.value);
  }


  /**
   * Displays a success message and hides the overlay after sending an email.
   */
  displaySuccessMessage() {
    let overlay = this.overlay.nativeElement;
    this.playAnimation();
    setTimeout(() => {
      overlay.classList.add('d-none');
    }, 2500);
  }

  
  /**
   * Plays the animation using the Lottie library.
   */
  playAnimation() {
    let animationContainer = this.mailSent.nativeElement;
    lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: this.animationPath,
    })
  }
}



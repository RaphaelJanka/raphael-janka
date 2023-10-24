import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('checkbox') checkbox!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    // Überwache die Eingabefelder und das Kontrollkästchen auf Änderungen
    this.name.nativeElement.addEventListener('input', this.updateSendButtonState.bind(this));
    this.mail.nativeElement.addEventListener('input', this.updateSendButtonState.bind(this));
    this.message.nativeElement.addEventListener('input', this.updateSendButtonState.bind(this));
    this.checkbox.nativeElement.addEventListener('change', this.updateSendButtonState.bind(this));
  }

  updateSendButtonState() {
    let nameValue = this.name.nativeElement.value;
    let mailValue = this.mail.nativeElement.value;
    let messageValue = this.message.nativeElement.value;
    let checkboxChecked = this.checkbox.nativeElement.checked;
    let isFormValid = nameValue.length > 0 && mailValue.length > 0 && messageValue.length > 0 && checkboxChecked;
    this.sendButton.nativeElement.disabled = !isFormValid;
  }

  async sendMail() {
    console.log('Send Mail to', this.myForm);
    let name = this.name.nativeElement;
    let mail = this.mail.nativeElement;
    let message = this.message.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    name.disabled = true;
    mail.disabled = true;
    message.disabled = true;
    sendButton.disabled = true;

    //animation hinzufügen
    let formData = new FormData();
    formData.append('name', name.value);
    formData.append('mail', mail.value);
    formData.append('message', message.value);
     await fetch('url', 
    {
      method: 'POST',
      body: formData,
    });

    //Text Anzeigen. Nachricht gesendet
    name.disabled = false;
    mail.disabled = false;
    message.disabled = false;
    sendButton.disabled = false;

  }
}

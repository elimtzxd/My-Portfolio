import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as EmailJS from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.template.html'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        to_name: 'Eli', // Cambia esto al nombre del receptor
        toEmail: 'eli.mtz.dev@gmail.com', // El correo donde llegarán los mensajes
        from_email: this.contactForm.value.email,
        message_html: this.contactForm.value.message,
      };

      // Llama a EmailJS
      EmailJS.send(
        'service_wwwzrar',       // Cambia esto por tu Service ID de EmailJS
        'template_v7co91e',      // Cambia esto por tu Template ID de EmailJS
        templateParams,
        '7aJAZo5kYPYZUIAso'           // Cambia esto por tu Public Key de EmailJS
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Mensaje enviado correctamente');
          this.contactForm.reset();
        })
        .catch((err) => {
          console.error('FAILED...', err);
          alert('Hubo un error al enviar el mensaje');
        });
    } else {
      alert('Por favor, completa todos los campos requeridos');
    }
  }
}
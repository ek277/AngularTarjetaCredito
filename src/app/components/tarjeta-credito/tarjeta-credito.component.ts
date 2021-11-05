import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css'],
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    {
      titular: 'Juan Perez',
      numeroTarjeta: '2622654654',
      fechaExpiracion: '11/12',
      cvv: '123',
    },
    {
      titular: 'Miguel Gonzalez',
      numeroTarjeta: '35418484874',
      fechaExpiracion: '11/13',
      cvv: '789',
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpitacion: [''],
      cvv: [''],
    });
  }

  ngOnInit(): void {}
}

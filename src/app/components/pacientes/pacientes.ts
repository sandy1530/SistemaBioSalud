import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Paciente {
  dni: string;
  nombres: string;
  apellidos: string;
  sexo: string;
  fechaNacimiento: string;
  telefono: string;
  correo: string;
  alergias: string;
}

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.html',
  styleUrls: ['./pacientes.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule, ReactiveFormsModule] 
})
export class Pacientes implements OnInit {

  pacienteForm: FormGroup;
  pacientes: Paciente[] = [
    {
      dni: '75421589',
      nombres: 'JULIO',
      apellidos: 'DIAZ SAUCEDO',
      sexo: 'M',
      fechaNacimiento: '1998-04-27', 
      telefono: '956812548',
      correo: 'DIAZS@MAIL.COM',
      alergias: 'SI'
    },
    {
      dni: '58994257',
      nombres: 'CARLOS',
      apellidos: 'TORREZ DIAZ',
      sexo: 'M',
      fechaNacimiento: '1990-08-19',
      telefono: '958745652',
      correo: 'TORRES@MAIL.COM',
      alergias: 'NO'
    },
    {
      dni: '75489587',
      nombres: 'LAURA',
      apellidos: 'ROJAS LUNA',
      sexo: 'F',
      fechaNacimiento: '2004-09-16',
      telefono: '956874213',
      correo: 'ROJAS@MAIL.COM',
      alergias: 'NO'
    }
  ];

  mostrarFormulario: boolean = false;
  busqueda: string = '';
  pacientesFiltrados: Paciente[] = [];

  constructor(private fb: FormBuilder) {
    this.pacienteForm = this.fb.group({
      dni: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      alergias: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.pacientesFiltrados = [...this.pacientes];
  }

  mostrarFormularioRegistro(): void {
    this.mostrarFormulario = true;
  }

  ocultarFormulario(): void {
    this.mostrarFormulario = false;
    this.pacienteForm.reset();
  }

  registrarPaciente(): void {
    if (this.pacienteForm.valid) {
      const nuevoPaciente: Paciente = this.pacienteForm.value;
      this.pacientes.push(nuevoPaciente);
      this.pacientesFiltrados = [...this.pacientes];
      this.ocultarFormulario();
      console.log('Paciente registrado:', nuevoPaciente);
    }
  }

  buscarPacientes(): void {
    if (this.busqueda.trim() === '') {
      this.pacientesFiltrados = [...this.pacientes];
    } else {
      this.pacientesFiltrados = this.pacientes.filter(paciente =>
        paciente.nombres.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        paciente.apellidos.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        paciente.dni.includes(this.busqueda)
      );
    }
  }

  modificarPaciente(dni: string): void {
    console.log('Modificar paciente con DNI:', dni);
    // TODO: implementar lógica de edición
  }

  inactivarPaciente(dni: string): void {
    console.log('Inactivar paciente con DNI:', dni);
    // TODO: implementar lógica de inactivación
  }
}
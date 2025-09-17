import { Routes } from '@angular/router';
import { Pacientes } from './components/pacientes/pacientes';
import { Ordenes } from './components/ordenes/ordenes';
import { Muestras } from './components/muestras/muestras';
import { Reportes } from './components/reportes/reportes';
import { Resultados } from './components/resultados/resultados';
import { Usuarios } from './components/usuarios/usuarios';
import { Validacion } from './components/validacion/validacion';

export const routes: Routes = [
  { path: 'pacientes', component: Pacientes },
  { path: 'ordenes', component: Ordenes },
  { path: 'muestras', component: Muestras },
  { path: 'reportes', component: Reportes },
  { path: 'resultados', component: Resultados },
  { path: 'usuarios', component: Usuarios },
  { path: 'validacion', component: Validacion },
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortalDeNoticiasComponent } from './components/portal-de-noticias/portal-de-noticias.component';
import { MercadoVehiculosComponent } from './components/mercado-vehiculos/mercado-vehiculos.component';
import { GeneradorDeImagenesComponent } from './components/generador-de-imagenes/generador-de-imagenes.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { ClimaComponent } from './components/clima/clima.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'portal-de-noticias', component: PortalDeNoticiasComponent },
    { path: 'mercado-vehiculos', component: MercadoVehiculosComponent },
    { path: 'generador-de-imagenes', component: GeneradorDeImagenesComponent },
    { path: 'conversor', component: ConversorComponent },
    { path: 'clima', component: ClimaComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

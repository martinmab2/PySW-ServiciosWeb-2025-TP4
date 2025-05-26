import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-portal-de-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portal-de-noticias.component.html'
})
export class PortalDeNoticiasComponent implements OnInit {
  noticias: any[] = [];
  cargando = true;
  error: string | null = null;

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.cargando = true;
    this.error = null;
    
    this.noticiasService.getNoticias().subscribe({
      next: (data) => {
        console.log('Datos procesados:', data);
        this.noticias = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error detallado:', err);
        this.error = err.message || 'Error al cargar las noticias deportivas';
        this.cargando = false;
        this.noticias = [];
      }
    });
  }
}

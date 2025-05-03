import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuerpoPaginaComponent } from "./cuerpo-pagina/cuerpo-pagina.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CuerpoPaginaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen-final';
}

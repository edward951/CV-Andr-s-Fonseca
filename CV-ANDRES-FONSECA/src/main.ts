import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';
import { CurriculumVitaeComponent } from './app/curriculum-vitae/curriculum-vitae.component';

// Definir las rutas directamente en `main.ts` o en un archivo separado
const routes: Route[] = [
  { path: 'curriculumVitae', component: CurriculumVitaeComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // otros proveedores aquí
  ],
}).catch(err => console.error(err));

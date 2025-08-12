import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
   {
    path: 'persona-detalle',
    loadComponent: () => import('./componentes/persona-detalle-page/persona-detalle-page.component').then(m => m.PersonaDetallePage),
  },
];

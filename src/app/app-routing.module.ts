import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //DefaultPage:
  { path: '', redirectTo: '/main/mainHeader', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('src/app/components/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

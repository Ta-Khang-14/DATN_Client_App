import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './pages/page/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list-product',
    pathMatch: 'full',
  },
  {
    path: '/list-product',
    loadChildren: () =>
      import('./components/list-product/list-product.module').then(
        (m) => m.ListProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

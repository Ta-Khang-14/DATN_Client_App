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
    component: ListProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

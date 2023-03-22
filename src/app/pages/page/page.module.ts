import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { BaseComponentComponent } from './base-component/base-component.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    BaseComponentComponent,
    ListProductComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
  ],
  exports: [SidebarComponent],
})
export class PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BaseComponentComponent } from './base-component/base-component.component';

@NgModule({
  declarations: [SidebarComponent, BaseComponentComponent],
  imports: [CommonModule, NzMenuModule, NzLayoutModule],
  exports: [SidebarComponent],
})
export class PageModule {}

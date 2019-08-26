import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';

@NgModule({
  declarations: [PaginaHomeComponent],
  imports: [CommonModule],
  exports: [PaginaHomeComponent]
})
export class HomeModule {}

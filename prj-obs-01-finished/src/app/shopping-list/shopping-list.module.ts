import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoggingServices } from '../logging.services';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
    FormsModule,
    SharedModule,
  ],
  providers: [LoggingServices],
})
export class ShoppingListModule {}

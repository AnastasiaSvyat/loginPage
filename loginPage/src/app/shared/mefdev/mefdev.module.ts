import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MefDevSwitchModule }  from '@natec/mef-dev-ui-kit';
import { MefDevCardModule, MefDevPageLayoutsModule }  from '@natec/mef-dev-ui-kit';
import { MefDevTabsModule }  from '@natec/mef-dev-ui-kit';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MefDevTabsModule,
    MefDevCardModule,
    MefDevPageLayoutsModule,
    MatInputModule,
    MefDevSwitchModule
  ],
  exports: [
    MefDevTabsModule,
    MefDevCardModule,
    MefDevPageLayoutsModule,
    MatInputModule,
    MefDevSwitchModule
  ]
})
export class MefdevModule { }

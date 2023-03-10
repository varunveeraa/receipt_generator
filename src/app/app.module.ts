import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactService } from './contacts.service';
import { MaterialsModule } from './material';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';
import { SearchAllColumnPipe } from './search.column';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableFilterPipe } from './display/table-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ListComponent,
    DisplayComponent,
    SearchAllColumnPipe,
    TableFilterPipe,
  ],
  bootstrap: [AppComponent],
  providers: [ContactService],
})
export class AppModule {}

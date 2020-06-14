import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlxUiDataTable , FlxUiDatatableModule} from 'flx-ui-datatable';
import { HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';

import {  from } from 'rxjs';
import { EmployeeService } from './services/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule
  ],  
  providers: [ EmployeeService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

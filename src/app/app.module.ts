import { GalleryService } from './services/gallery.service';
import { TablesService } from './services/tables.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes ,  RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


/* Components */
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AddTableComponent } from './components/tables/add-table/add-table.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  {path: 'tables/add' , component: AddTableComponent},
  { path: 'gallery', component: GalleryComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TablesComponent,
    NavbarComponent,
    GalleryComponent,
    AddTableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [
    TablesService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

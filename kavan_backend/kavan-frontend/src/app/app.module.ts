import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // ✅ Required for API calls

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },  
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: '', component: HomeComponent },
  { path: 'shop', component: ProductListComponent },
  { path: 'cart', component: ProductListComponent }, // Replace with Cart component later
  { path: 'login', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    UsersComponent,
    CategoryListComponent,
    ProductListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // ✅ Required for API requests
    RouterModule.forRoot(routes) // ✅ Corrected Routing setup
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

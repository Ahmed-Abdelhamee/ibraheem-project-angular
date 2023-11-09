import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DocumentsComponent } from './Components/documents/documents.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home page' },
  {
    path: 'home/products',
    component: ProductsComponent,
    title: 'All products',
  },
  {
    path: 'home/documents',
    component: DocumentsComponent,
    title: 'All documents',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

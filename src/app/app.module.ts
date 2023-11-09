import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    TopicsComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundComponent,
    DocumentsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChatGPTComponent } from './components/chat-gpt/chat-gpt.component';
import { AiCustomerServiceComponent } from './components/ai-customer-service/ai-customer-service.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'ai-customer-service', component: AiCustomerServiceComponent },
      { path: 'chatGPT', component: ChatGPTComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    BottomBarComponent,
    ContactUsComponent,
    ChatGPTComponent,
    AiCustomerServiceComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

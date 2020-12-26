import { HeaderComponent } from './header/header.component';
import { ProductLayoutComponent } from './product-layout/product-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'footer',component:FooterComponent},
  {path:'shop/productlayout',component:ProductLayoutComponent},
  {path:'productlayout',component:ProductLayoutComponent},
  {path:'shop/header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullProductDetailsComponent } from './home/Components/full-product-details/full-product-details.component';
import { FullServiceDetailsComponent } from './home/Components/full-service-details/full-service-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'ar', pathMatch: "full" },
  { path: ':lang', component: HomeComponent },
  { path: ':lang/Product-Details/:id', component: FullProductDetailsComponent },
  { path: ':lang/Service-Details/:id', component: FullServiceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

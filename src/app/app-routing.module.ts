import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {path: 'customers', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)}
  // {path: 'customers', loadChildren: './modules/customers/customers.module'}
// {path: 'custoemrs', component: CustomersContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

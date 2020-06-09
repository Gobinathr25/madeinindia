import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path:'blog',component:BlogComponent},
  { path:'service/:id',component:ServiceComponent },
  { path:'about',component:AboutComponent },
  { path:'contact',component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

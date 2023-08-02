import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';




const routes: Routes = [
  {path:'' ,redirectTo :'home' ,pathMatch:'full'},
  {path:'home' ,component:HomeComponent},
  {path:'movies' ,component:MoviesComponent},
  {path:'moviedetails/:id' ,component:MoviedetailsComponent},
  {path:'gallery' ,component:GalleryComponent},
  {path:'register' ,component:RegisterComponent}, 
  {path:'login' ,component:LoginComponent},
  {path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

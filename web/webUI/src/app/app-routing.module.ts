import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// component
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { SearchResultComponent } from './components/home/search-result/search-result.component';


const routes: Routes = [
  {path : "",component : HomePageComponent },
  {path : "result/:company",component : SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

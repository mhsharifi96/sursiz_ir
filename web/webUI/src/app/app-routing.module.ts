import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomePageComponent } from './components/home/home-page/home-page.component';
import { SearchResultComponent } from './components/home/search-result/search-result.component';
import { TwitsComponent } from './components/home/twits/twits.component';


const routes: Routes = [
  {path : "",component : HomePageComponent },
  {path: "signals", component : TwitsComponent},
  {path : "result/:description",component : SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

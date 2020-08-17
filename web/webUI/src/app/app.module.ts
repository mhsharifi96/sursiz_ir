import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule} from 'ngx-pagination'



// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { SearchComponent } from './components/home/search/search.component';
import { SearchResultComponent } from './components/home/search-result/search-result.component';
import { ImageCardComponent } from './components/common/card/image-card/image-card.component';
import { TitleCardComponent } from './components/common/card/title-card/title-card.component';
import { QuoteCardComponent } from './components/common/card/quote-card/quote-card.component';
import { FancyBoxComponent } from './components/common/fancy-box/fancy-box.component';
import { TwitsComponent } from './components/home/twits/twits.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SearchComponent,
    SearchResultComponent,
    ImageCardComponent,
    TitleCardComponent,
    QuoteCardComponent,
    FancyBoxComponent,
    TwitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    NgxPaginationModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

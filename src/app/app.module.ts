import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBtnComponent, HeroBtnComponent, EventBtnComponent } from './components/buttons/buttons.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthCheckGroupComponent, AuthInputGroupComponent, InvestmentFilterSelectComponent } from './components/forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavBtnComponent,
    HeroBtnComponent,
    HeroComponent,
    SignupComponent,
    AuthInputGroupComponent,
    AuthCheckGroupComponent,
    EventBtnComponent,
    HomeComponent,
    LoginComponent,
    InvestmentsComponent,
    AppLayoutComponent,
    InvestmentFilterSelectComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

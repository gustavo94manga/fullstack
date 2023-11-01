import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { WelcomeContentComponent } from './components/welcome-content/welcome-content.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { ContentComponent } from './components/content/content.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HeaderComponent,
    LoginFormComponent,
    WelcomeContentComponent,
    AuthContentComponent,
    ContentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

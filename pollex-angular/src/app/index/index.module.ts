import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexComponent } from './index.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from '../security/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LandingPageComponent, IndexComponent, SignupPageComponent, LoginComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class IndexModule { }

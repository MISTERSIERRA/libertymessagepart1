import { DataServices } from './services/data-services';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { BLoginComponent } from './b-login/b-login.component';
import { CDiscussComponent } from './c-discuss/c-discuss.component';
import { DSettingsComponent } from './d-settings/d-settings.component';
import { NNotFoundComponent } from './n-not-found/n-not-found.component';
import { MContainerComponent } from './m-container/m-container.component';
import { IDialogueComponent } from './i-dialogue/i-dialogue.component';
import { TTermsOfUseComponent } from './t-terms-of-use/t-terms-of-use.component';
import { NewElementComponent } from './new-element/new-element.component';


const appRoutes: Routes = [
  { path: 'login', component: BLoginComponent }, 
  { path: 'discuss', canActivate: [AuthGuard], component: CDiscussComponent }, 
  { path: 'dialogue', canActivate: [AuthGuard], component: IDialogueComponent }, 
  { path: 'settings', canActivate: [AuthGuard], component: DSettingsComponent }, 
  { path: 'mentions-legales', component: TTermsOfUseComponent }, 
  { path: '', component: BLoginComponent }, 
  { path: 'not-found', component: NNotFoundComponent }, 
  { path: '**', redirectTo: 'not-found' } 
];


@NgModule({
  declarations: [
    AppComponent,
    AHeaderComponent,
    BLoginComponent,
    CDiscussComponent,
    DSettingsComponent,
    NNotFoundComponent,
    MContainerComponent,
    IDialogueComponent,
    TTermsOfUseComponent,
    NewElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataServices, 
    AuthService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

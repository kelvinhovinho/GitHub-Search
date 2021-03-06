import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubProfileDataComponent } from './github-profile-data/github-profile-data.component';
import { GithubProfileCardComponent } from './github-profile-card/github-profile-card.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubAppComponent } from './github-app/github-app.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent,
    GithubProfileDataComponent,
    GithubProfileCardComponent,
    GithubProfileComponent,
    GithubAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

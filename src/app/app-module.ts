import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddIngPipe } from './pipes/add-ing-pipe';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase-pipe';
import { User } from './user/user';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListProvider } from './list-provider/list-provider';
import { AddProvider } from './add-provider/add-provider';
import { Navbar } from './navbar/navbar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    AddProvider,
    AddIngPipe,
    FirstLetterUppercasePipe,
    User,
    ListProvider,
    Navbar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }

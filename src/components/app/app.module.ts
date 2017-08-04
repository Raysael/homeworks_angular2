import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HeaderComponent} from '../header/header.component';
import {TopComponent} from '../top/top.component';
import {AvatarComponent} from '../avatar/avatar.component';
import {AsideComponent} from '../aside/aside.component';
import {MainComponent} from '../main/main.component';
import {ListComponent} from '../list/list.component';
import {ListItemComponent} from '../list/list-item/list-item.component';
import {LinkComponent} from '../aside/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopComponent,
    AvatarComponent,
    AsideComponent,
    MainComponent,
    ListComponent,
    ListItemComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

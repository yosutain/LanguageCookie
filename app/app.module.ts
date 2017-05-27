import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LibraryComponent } from './library/library.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { PopupManagerComponent } from './popup-manager/popup-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LibraryComponent,
    CharacterDetailsComponent,
    MultipleChoiceComponent,
    PopupManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

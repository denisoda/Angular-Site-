import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MyInfoComponent } from './my-info/my-info.component';
import {MyInfo} from './my-info';

@NgModule({
  declarations: [
    AppComponent,
    MyInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


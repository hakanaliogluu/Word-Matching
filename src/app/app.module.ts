import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SentenceMatchComponent } from './sentence-match.component';
import { SentenceGeneratorService } from './sentence-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    SentenceMatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SentenceGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule} from '@angular/material';
import { TabsComponent } from './components/tabs/tabs.component';
import {AppServiceService} from './service/app-service.service';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabHeaderComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      MatToolbarModule,
      MatTabsModule,
      MatButtonModule,
      MatIconModule ,
      MatMenuModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}

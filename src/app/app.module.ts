import { PointComponent } from './Components/PointsComponent/point.component';
import { PersonalItemComponent } from './Components/PersonalPageListItemComponent/personal.item.component';
import { PropertyComponent } from './Components/PropertyComponent/property.component';
import { AvatorComponent } from './Components/AvatorComponent/avator.component';
import { SignComponent } from './Components/SignComponent/sign.component';
import { PersonalPageComponent } from './Pages/PersonalPage/personal.page';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalPageComponent,
    SignComponent,
    AvatorComponent,
    PropertyComponent,
    PersonalItemComponent,
    PersonalItemComponent,
    PointComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

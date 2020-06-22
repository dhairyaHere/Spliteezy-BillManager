import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContentComponent } from './home/content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { MeetourteamComponent } from './meetourteam/meetourteam.component';
import { JainikheaderComponent } from './jainikheader/jainikheader.component';
import { PersonalexpenseComponent } from './personalexpense/personalexpense.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SettleComponent } from './settle/settle.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { EditaccountComponent } from './myaccount/editaccount/editaccount.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    ContentComponent,
    DashboardComponent,
    MyheaderComponent,
    FriendsComponent,
    GroupsComponent,
    CreategroupComponent,
    AddexpenseComponent,
    MeetourteamComponent,
    JainikheaderComponent,
    PersonalexpenseComponent,
    SearchbarComponent,
    SettleComponent,
    ContactusComponent,
    MyaccountComponent,
    EditaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

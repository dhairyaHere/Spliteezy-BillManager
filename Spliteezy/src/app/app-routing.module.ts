import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { MeetourteamComponent } from './meetourteam/meetourteam.component';
import { PersonalexpenseComponent } from './personalexpense/personalexpense.component';
import { SettleComponent } from './settle/settle.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { EditaccountComponent } from './myaccount/editaccount/editaccount.component';


const routes: Routes = [{path:'Home',component:HomeComponent},
                        {path:'Friends',component:FriendsComponent},
                        {path:'Groups',component:GroupsComponent},
                        {path:'CreateGroup',component:CreategroupComponent},
                        {path:'AddExpense',component:AddexpenseComponent},
                        {path:'AddPersonalExpense',component:PersonalexpenseComponent},
                        {path:'MeetOurTeam',component:MeetourteamComponent},
                        {path:'Dashboard',redirectTo:'/Friends',pathMatch:'full'},
                        {path:'SettleUp',component:SettleComponent},
                        {path:'ContactUs',component:ContactusComponent},
                        {path:'MyAccount',component:MyaccountComponent},
                        {path:'Myaccount/edit',component:EditaccountComponent},
                        {path:'',redirectTo:'/Home',pathMatch:'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

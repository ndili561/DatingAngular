import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';


export const AppRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'members', component: MemberlistComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'lists', component: ListComponent},
  {path: '**',  redirectTo: 'home', pathMatch: 'full'}
];

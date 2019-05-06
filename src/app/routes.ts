import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guards/Authguard';


export const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
  {path: 'members', component: MemberlistComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'lists', component: ListComponent},

    ]
  },

  {path: '**',  redirectTo: '', pathMatch: 'full'}
];

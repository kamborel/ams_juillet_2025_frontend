import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProvider} from './add-provider/add-provider';
import { User } from './user/user';
import { ListProvider } from './list-provider/list-provider';
import { UpdateProvider } from './update-provider/update-provider';

const routes: Routes = [
  {
    path:"addProvider",
    component:AddProvider
  },
  {
    path:"users",
    component:User
  },
  {
    path:"providers",
    component:ListProvider,
  },
  {
    path:"updateProviders/:id",
    component:UpdateProvider
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

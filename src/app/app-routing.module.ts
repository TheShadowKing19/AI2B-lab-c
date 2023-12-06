import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {DetailsComponent} from "./details/details.component";
import {AddPersonComponent} from "./add-person/add-person.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "add", component: AddPersonComponent},
  { path: "", redirectTo: "/list", pathMatch: "full"},
  { path: "**", component: NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

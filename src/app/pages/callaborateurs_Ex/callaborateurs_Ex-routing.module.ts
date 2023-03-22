import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgenceListComponent } from "./agence/agence-list/agence-list.component";

const routes: Routes = [
  {
    path: "agence",
    component: AgenceListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class callaborateurs_ExRoutingModule {}

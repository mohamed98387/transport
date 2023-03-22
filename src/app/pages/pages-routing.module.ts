import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./administration/users/user-list/user-list.component";
import { DefaultComponent } from "./dashboards/default/default.component";
import { RoleListComponent } from "./administration/roles/role-list/role-list.component";
import { PermissionListComponent } from "./administration/permissions/permission-list/permission-list.component";
import { AgenceListComponent } from "./callaborateurs_Ex/agence/agence-list/agence-list.component";
import { ChauffeurListComponent } from "./callaborateurs_Ex/chauffeur/chauffeur-list/chauffeur-list.component";
import { VehiculeListComponent } from "./callaborateurs_Ex/vehicule/vehicule-list/vehicule-list.component";

const routes: Routes = [
  // { path: '', redirectTo: 'users' },
  //
  { path: "user-list", component: UserListComponent },
  { path: "role-list", component: RoleListComponent },
  { path: "permission-list", component: PermissionListComponent },
  {
    path: "administration",
    loadChildren: () =>
      import("./administration/administration.module").then(
        (m) => m.AdministrationModule
      ),
  },

  { path: "agence-list", component: AgenceListComponent },
  { path: "chauffeur-list", component: ChauffeurListComponent },
  { path: "vehicule-list", component: VehiculeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

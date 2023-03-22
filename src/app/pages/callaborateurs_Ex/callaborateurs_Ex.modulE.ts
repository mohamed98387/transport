import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { callaborateurs_ExRoutingModule } from "./callaborateurs_Ex-routing.module";
import { UIModule } from "../../shared/ui/ui.module";
import { WidgetModule } from "../../shared/widget/widget.module";
import { NgApexchartsModule } from "ng-apexcharts";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbCollapseModule,
} from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    callaborateurs_ExRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    ///
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
  ],
})
export class callaborateurs_ExModule {}

import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./accounts-routing.module";
import { ListComponent } from "./list.component";
import { AddEditComponent } from "./add-edit.component";

@NgModule({
	import: [CommonModule, ReactiveFormsModule, AccountRoutingModule],
	declarations: [ListComponent, AddEditComponent],
})
export class AccountsModule {}

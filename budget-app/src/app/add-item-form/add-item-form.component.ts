import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BudgetItem } from "src/shared/models/budget-item.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-item-form",
  templateUrl: "./add-item-form.component.html",
  styleUrls: ["./add-item-form.component.scss"],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem("", null);
  constructor() {}

  @Output formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
  }
}

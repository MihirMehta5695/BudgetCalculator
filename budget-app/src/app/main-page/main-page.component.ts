import { Component, OnInit } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget-item.model";
import { UpdateEvent } from "src/app/budget-item-list/budget-item-list.component";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() {}

  ngOnInit() {}

  addNewItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateBudget(item: UpdateEvent): void {
    this.budgetItems[this.budgetItems.indexOf(item.old)] = item.new;
    this.totalBudget += item.new.amount;
    this.totalBudget -= item.old.amount;
  }
}

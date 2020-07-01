import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget-item.model";
import { MatDialog } from "@angular/material";
import { EditItemModalComponent } from "../edit-item-modal/edit-item-modal.component";

@Component({
  selector: "app-budget-item-list",
  templateUrl: "./budget-item-list.component.html",
  styleUrls: ["./budget-item-list.component.scss"],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  deleteBudgetItem(item: BudgetItem): void {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    const dialogref = this.dialog.open(EditItemModalComponent, {
      width: "580px",
      data: item,
    });

    dialogref.afterClosed().subscribe((result) => {
      if (result) {
        //we want to replace with the updated item from the form
        this.update.emit({ old: item, new: result });
      }
    });
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

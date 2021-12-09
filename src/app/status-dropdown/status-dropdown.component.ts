import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-dropdown',
  template: `<select [(ngModel)]="selectedValue" (ngModelChange)="onChange($event, selectedValue)">
                <option value="BOOKED">Booked</option>
                <option value="DISPATCHED">Dispatched</option>
                <option value="OUT">Out For Delivery</option>
                <option value="DELIVERED">Delivered</option>
              </select>`,
  styleUrls: ['./status-dropdown.component.css']
})
export class StatusDropdownComponent implements OnInit, AfterViewInit  {

  private params: any;
  label: string;
  selectedValue: any;


  constructor() { }

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.selectedValue = this.params.node.data.status;
  }


  onChange($event: any, selectedValue: any) {
    if (this.params.onChange instanceof Function) {
      const params = {
        event: $event,
        selectedValue: selectedValue,
        rowData: this.params.node.data
      }
      this.params.onChange(params);
    }
  }

}

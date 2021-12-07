import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['./list-button.component.css']
})
export class ListButtonComponent implements OnInit {

  private params: any;
  label: string;

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label;
  }

  ngOnInit(): void {
  }

  onClick($event: any) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data
      }
      this.params.onClick(params);
    }
  }

}

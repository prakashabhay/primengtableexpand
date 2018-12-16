import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent {

  //index: number = -1;
expandedRows =[]
  constructor(private messageService: MessageService) { 
    
  }

  itemGroupList: any[];
  grp: any;
   cols: any[];
   xyz="vin"
   cars:any[]= [{'vin':'a',year:'b',brand:'c', color: 'd' },
            {'vin':'e',year:'f',brand:'g', color: 'h' }]
  options = [
    {label: "All", value: "all"},
    {label: "XZ13004-123", value: "XZ13004-123"},
    {label: "XZ13004-124", value: "XZ13004-124"},
    {label: "XZ13004-125", value: "XZ13004-125"}
  ]
  selectedItem : any;
expandall(){
  const thisRef = this;
    this.cars.forEach(function(car) {
      thisRef.expandedRows[car.vin] = 1;
    });
//this.expandedRows = [...this.cars]
}
collapse(){
    const thisRef = this;
    this.cars.forEach(function(car) {
      thisRef.expandedRows[car.vin] = 0;
    });
}
  ngOnInit() {

   this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

  }
  onChange(event) {
    this.selectedItem = event.value;
  }
}

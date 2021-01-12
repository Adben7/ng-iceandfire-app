import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IHouse } from '../../models/house';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  
 
  houses: IHouse[];
  filteredHouses: IHouse[];
  text = "";


  constructor(private houseService: HouseService, private router: Router ) { }

  ngOnInit(): void {
    this.houseService.getHouses()
    .pipe(take(1))
    .subscribe(houses => {
       this.houses = houses;
       this.filteredHouses = this.houses
      } );
  }

  filterList(text: string):void {

    let listFilter = text.toLocaleLowerCase();
    console.log(listFilter);

    this.filteredHouses = this.houses.filter(house =>
      house.name.toLocaleLowerCase().indexOf(listFilter) !== -1);
  }

  goToHouseDetail(url: string){
    let urlTab = url.split('/');
    let houseId = urlTab[5];

    this.router.navigate([`house/${houseId}`]);
  }
}

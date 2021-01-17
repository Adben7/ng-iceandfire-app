import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IHouse } from '../../models/house';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  house: IHouse;

  constructor(private houseService: HouseService, private rout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let idHouse = this.rout.snapshot.paramMap.get('id');

    this.houseService.getHouse(idHouse)
    .pipe(take(1))
    .subscribe(
      h => this.house = h
    );
  }

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }

}
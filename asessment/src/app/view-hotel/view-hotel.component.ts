import { Component } from '@angular/core';
import { HotelsService } from '../Services/hotels.service';
import { IHotel } from '../Models/IHotel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent {
  constructor(private activatedRoute: ActivatedRoute, private service: HotelsService) { }
  hid: string | null = '';
  public getHotel: IHotel = {} as IHotel;
  public allHotels: IHotel[] = [];
  




  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.hid = param.get('id')
      console.log(this.hid)
    });
    if (this.hid !== null)
      this.service.getHotel(parseInt(this.hid)).subscribe((data) => {
        this.getHotel = data;
        console.log(this.getHotel)
      })


  }
  
  viewAllHotels(): void {
    this.service.getAllHotels().subscribe((data) => {
      this.allHotels = data;
      console.log(data);
    });
  }
}




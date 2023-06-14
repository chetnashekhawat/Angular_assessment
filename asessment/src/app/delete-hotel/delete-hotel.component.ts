import { Component } from '@angular/core';
import { IHotel } from '../Models/IHotel';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../Services/hotels.service';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent {
  constructor(private activatedRoute: ActivatedRoute, private service: HotelsService) { }
  hid: string | null = '';
  public getHotel: IHotel = {} as IHotel;
  public allHotels: IHotel[] = [];
  public deleteHotelId: number | null = null;
  hotelAddedMessage: string = '';


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.hid = param.get('id');
      console.log(this.hid);
    });
    if (this.hid !== null)
      this.service.getHotel(parseInt(this.hid)).subscribe((data) => {
        this.getHotel = data;
        console.log(this.getHotel);
      });
  }

  viewAllHotels(): void {
    this.service.getAllHotels().subscribe((data) => {
      this.allHotels = data;
      console.log(this.allHotels);
    });
  }

  deleteHotel(): void {
    if (this.deleteHotelId) {
      this.service.deleteHotel(this.deleteHotelId).subscribe(() => {
        console.log('Hotel deleted successfully');
        this.hotelAddedMessage = 'Hotel Info. Deleted successfully';

      });
    }
  }
}

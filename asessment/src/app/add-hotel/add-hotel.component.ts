import { Component } from '@angular/core';
import { HotelsService } from '../Services/hotels.service';
import { IAddHotel } from '../Models/IAddHotel';


@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  constructor(private service: HotelsService) { }
  addHotel: IAddHotel = {
    hname: '',
    hlocation: '',
    hprice:0 ,
    hratings: '',
   
  }
  hotelAddedMessage: string = '';


  
  AddHotel() {
    this.service.addHotel(this.addHotel).subscribe((data) => {
      console.log(data);
      console.log(this.addHotel);
      this.hotelAddedMessage = 'Hotel Added to the database';

    })

  }

}

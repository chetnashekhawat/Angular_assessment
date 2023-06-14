import { Component } from '@angular/core';
import { HotelsService } from '../Services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { IHotel } from '../Models/IHotel';
import { IAddHotel } from '../Models/IAddHotel';


@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent {
  constructor(private activatedRoute: ActivatedRoute, private service: HotelsService) { }
  hid: number=0 ;
  public getHotel: IHotel = {} as IHotel;
  hotelAddedMessage: string = '';

  addHotel: IAddHotel = {
    hname: '',
    hlocation: '',
    hprice:0 ,
    hratings: ''
    
    
   
  }

  ngOnInit(): void {
   


  }

  updateHotel() {
   
    console.log(this.addHotel);
    if (this.hid !== null)
      this.service.updateHotel((this.hid),this.addHotel).subscribe((data) => {
        console.log(data);
        this.hotelAddedMessage = 'Hotel Info. Updated successfully';

      })
     

  }
  
}

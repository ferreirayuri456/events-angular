import { Component, Output } from "@angular/core";

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html'


})
export class EventListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2026',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleEventClicked(data){
    console.log("Received: ", data);

  }

}

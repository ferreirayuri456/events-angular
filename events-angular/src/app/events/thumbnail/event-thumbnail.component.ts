import { Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  @Input() event: any
  @Output() eventClicks = new EventEmitter()

  handleClickMe() {
    this.eventClicks.emit("Yuri");
    console.log("Clicked");

  }
}

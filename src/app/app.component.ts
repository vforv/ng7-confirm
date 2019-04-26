import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Item';

  public confirm(val) {
    this.title = null;
  }

  public confirm1(val) {
    console.log("HELLO")
  }

  public cancel() {
    console.log("canceled");
  }
}

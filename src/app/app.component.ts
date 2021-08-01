import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  Servers;
  name = 'Angular ' + VERSION.major;
  onAddServer()
    {
      this.Servers.push('Another Server');
    }
    onRemoveServer()
    {
      this.Servers.push('Another Server');
    }
  }

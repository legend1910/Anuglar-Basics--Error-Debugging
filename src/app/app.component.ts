import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Servers: string[] = [];
  name = 'Angular ' + VERSION.major;
  onAddServer() {
    this.Servers.push('Another Server');
  }

  // This will throw an error where you are trying to delete the last file, you  can debug and see on the source->mai bundle.js which on putting breakpoint  will show the ts files using sourcemap
  onRemoveServer(id: number) {
    const position = id + 1;
    this.Servers.splice(position, 1);
  }
}

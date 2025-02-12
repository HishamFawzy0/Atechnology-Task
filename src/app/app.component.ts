import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './flowbite.service';
import { ParentComponent } from "./components/parent/parent.component";

@Component({
  selector: 'app-root',
  imports: [ ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}

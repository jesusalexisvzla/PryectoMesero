import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-altamesero',
  templateUrl: './altamesero.component.html',
  styleUrls: ['./altamesero.component.css']
})
export class AltameseroComponent {
  constructor(private route:Router){}

  goBack(){
    this.route.navigate(['/administrador/meseros']);
  }
}

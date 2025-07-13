import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  formation:string = "Formation FullStack Sprint Angular & Devops";

  nom:string = "kamdem tagne thomas borel";
  email:string = "borelkamdem@gmail.com";

  noms:string[] = ["borel", "aminE", "josepH", "moïse", "nathaN"];
}

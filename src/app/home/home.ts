import { Component } from '@angular/core';
import { Provider } from '../../models';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  providers:Provider[] = [
    {
      id:1,
      name:"Orange",
      email:"orange@gmail.com",
      address:"France"
    },

    {
      id:2,
      name:"LG",
      email:"lg@gmail.com",
      address:"Japon"
    },

    {
      id:3,
      name:"Nokia",
      email:"nokia@gmail.com",
      address:"Chine"
    },

    {
      id:4,
      name:"Samsung",
      email:"samsung@gmail.com",
      address:"Koré"
    },

    {
      id:5,
      name:"Toshiba",
      email:"toshiba@gmail.com",
      address:"Japon"
    },
  ];
}

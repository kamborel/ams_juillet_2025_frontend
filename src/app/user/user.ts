import { Component, OnInit } from '@angular/core';
import {Users} from '../services/users';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{

  listUsers = new BehaviorSubject<any | null> (null);

  constructor(private userService:Users){ //// injection de la dépendance : le service Users
   
  }

  ngOnInit(): void {
    console.log("ngOnInit ...");
    this.userService.getUsers().subscribe({
      next: (data:any) => {
        console.log(this.listUsers);
        this.listUsers.next(data);
      },
      error: (err) => {
        console.error('Erreur récupération users', err);
  
      }
    });
  }

}

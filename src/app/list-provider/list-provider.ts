import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider-service'
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-provider',
  standalone: false,
  templateUrl: './list-provider.html',
  styleUrl: './list-provider.css'
})
export class ListProvider implements OnInit{

  listProviders = new BehaviorSubject<any | null> (null);

  constructor( // injection de la dépendance : le service Providers
    private providerService:ProviderService, 
    private router:Router){ 
  }

  ngOnInit(): void {

    this.loadProviders();
    
  }

  loadProviders(){
    this.providerService.getProviders().subscribe({
      next: (data:any) => {
        //console.log(this.listProviders);
        this.listProviders.next(data);
      },
      error: (err) => {
        console.error('Erreur récupération providers', err);
  
      }
    });
  }

  deleteProviders(id:any){
    this.providerService.deleteProviders(id).subscribe({
      next: (data:any) => {
        this.loadProviders();
      },
      error: (err) => {
        console.error('Erreur suppression du providers', err);
      }
    });
  }

  updateProviders(id:any){
    this.router.navigate(['updateProviders', id]);
  }

}



import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider-service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-update-provider',
  standalone: false,
  templateUrl: './update-provider.html',
  styleUrl: './update-provider.css'
})
export class UpdateProvider implements OnInit{

  
  provider = new BehaviorSubject<any | null> (null);
  providerId:any;
  providerName:any;
  providerEmail:any;
  providerAddress:any;

  constructor( // injection de la dépendance : le service Providers
    private providerService:ProviderService, 
    private router:Router,
    private activatedRoute: ActivatedRoute){ 
   
  }


  ngOnInit(): void {

    // Step 1 : Récupération de l'id à travers ActivatedRoute 
    const providerId = this.activatedRoute.snapshot.paramMap.get('id');
  

    // Step 2 : Chargement du provider 
    this.providerService.getProvidersById(providerId).subscribe({
      next: (data:any) => {
        this.provider.next(data);
        this.providerId = data.id;
        this.providerName = data.name;
        this.providerEmail = data.email;
        this.providerAddress = data.address;
       
      },
      error: (err) => {
        console.error('Erreur récupération du provider', err);
      }
    });
    
  }

 updateProvider(){

    let providerUpdated={
      'id':this.providerId,
      'name':this.providerName,
      'email':this.providerEmail,
      'address':this.providerAddress
    };

      this.providerService.updateProvider(providerUpdated).subscribe({
        next: (data:any) => {
          this.router.navigate(['providers']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du provider', err);
        }
      })
  }

}

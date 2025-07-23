import { Component, OnDestroy, OnInit } from '@angular/core';
import { Provider } from '../../models';
import { ProviderService } from '../services/provider-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css'
})

export class AddProvider implements OnInit{
  
   constructor(private providerService: ProviderService, private router:Router){}

  ngOnInit(): void {

  }

    saveProvider(provider:any){

      console.log(provider);
      
      this.providerService.addProviders(provider).subscribe({
        next: (data:any) => {
          console.log("ok"); 
          //const btn = document.getElementById('listProviders');
          //btn?.click();
          this.router.navigate(['providers/']);
        },
        error: (err) => {
          console.error('Erreur Ajout provider', err);
        }
      })
    }

}

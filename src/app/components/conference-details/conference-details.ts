import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  // PROSIT 2 : données sous forme de Signals.
  titre = signal('Découvrir Angular 21');
  intervenant = signal('Ahmed Ben Salah');
  dateEvenement = signal('20 septembre 2026');
  placesDisponibles = signal(3);
  message = signal('');
  // Informations supplémentaires utilisées quand une conférence est sélectionnée.
  description = signal('');
  lieu = signal('');
  estSelectionnee = signal(false);

/*
 @Input() conference: Conference | null = null;

 //méthode hook qui se déclenche automatiquement quand l'unedes propriétés d'entrée change
 ngOnChanges() {
    if (this.conference) {
      this.titre.set(this.conference.title);
      this.dateEvenement.set(this.conference.date);
      this.placesDisponibles.set(this.conference.maxParticipants - this.conference.nbParticipants);
      this.description.set(this.conference.description);
      this.lieu.set(this.conference .place);
      this.estSelectionnee.set(true);
      this.message.set('');
    }
  }*/
 @Input()
 set conference(value: Conference | null) {
    if (value) {
      this.titre.set(value.title);
      this.dateEvenement.set(value.date);
      this.placesDisponibles.set(value.maxParticipants - value.nbParticipants);
      this.description.set(value.description);
      this.lieu.set(value.place);
      this.estSelectionnee.set(true);
      this.message.set('');
    }
  }
/*
    
//variable classique
  titree: string = 'Conference Details';
  //définir un signal

confName = signal('Conference Details');

  f() {
    alert ("onjour, vous êtes inscrit à la conférence");
  }*/
 changerTitre(t:any) {
  }

  inscrire(){}

}

import { Component, inject, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import {UpperCasePipe, DatePipe, NgClass} from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';
import { ConferenceService } from '../../services/conference-service';
@Component({
  selector: 'app-conference-list',
  imports: [UpperCasePipe, DatePipe, NgClass, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferenceSelectionnee: Conference | null = null;
 choisirConference(conference: Conference) {
  this.conferenceSelectionnee = conference;
 }
 reserve(conference: Conference) {}
 placesRestantes(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }
 today = new Date().toISOString().split('T')[0];
 confS=inject(ConferenceService);
 conferences =signal<Conference[]>(this.confS.getAllConferences());
couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'vert';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'rouge';
    } else {    
      return 'orange';
    }
  }
 

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { UserProfile } from './components/user-profile/user-profile';
import { Footer } from './components/footer/footer';
import { Notifications } from './components/notifications/notifications';
import { FriendsList } from './components/friends-list/friends-list';
import { NavBar } from './components/nav-bar/nav-bar';
import { ConferenceList } from './components/conference-list/conference-list';
@Component({
  selector: 'app-root',
  imports: [Header, Footer, UserProfile, Notifications, FriendsList,NavBar, ConferenceList ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularSSA7');
}

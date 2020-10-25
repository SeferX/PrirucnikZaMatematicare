import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RoutesModule } from './routes';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { QuestionAddComponent } from './questions/question-add/question-add.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersGuard } from './guards/users-guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatRadioModule } from '@angular/material/radio'
import { MatInputModule } from '@angular/material/input'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { QuestionsService } from './services/questions.service';


// 2. Add your credentials from step 1
var config = {
  apiKey: "AIzaSyBQ2deuHdq4ziFn9F5h2nCbYyL7gEDX7Yw",
  authDomain: "prirucnik-za-matematicare.firebaseapp.com",
  databaseURL: "https://prirucnik-za-matematicare.firebaseio.com",
  projectId: "prirucnik-za-matematicare",
  storageBucket: "prirucnik-za-matematicare.appspot.com",
  messagingSenderId: "133664175125",
  appId: "1:133664175125:web:76c2e850e6494385104a1c",
  measurementId: "G-T6LDMPHQZ1"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    QuestionComponent,
    UserComponent,
    QuestionAddComponent,
    UserEditComponent,
    UsersComponent,
    QuestionsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    RoutesModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [UsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'
import {NotificationService} from './notification.service';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { HighlightPipe } from './highlight.pipe';
import { UserRecordComponent } from './user-record/user-record.component';
import { UserFormComponent } from './modules/admin-module/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    BodyComponent,
    RxjsComponent,
    NgforComponent,
    HighlightPipe,
    UserRecordComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 1500,
      preventDuplicates: true,
      tapToDismiss: true
    })
    //ToastrModule.forRoot({
    //timeOut:1500,
    //preventDuplicates:true,
    // progressBar:true,
    // progressAnimation:'increasing',
    //positionClass:'toast-top-center'


  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

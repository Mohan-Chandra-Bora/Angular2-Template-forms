import {Component} from '@angular/core';
import{Employee} from '../models/employee.model';
import{FormPoster} from '../services/form-poster.service';
import{ NgForm } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
languages : Observable<FormPoster[]>;
model = new Employee('Mohan','Bora',true,'W2','default');
hasPrimaryLanguageError = false;

constructor(private formPoster : FormPoster){
    this.languages = this.formPoster.getLanguages()
        //.subscribe(
          //data => this.languages = data.languages,
          //err => console.log('err', err)
       // );
    
}

submitForm(forms : NgForm){
  //validate form
  this.validatePrimaryLanguge(this.model.primaryLanguage);
  if(this.hasPrimaryLanguageError)
    return;

  this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ',  err)
      );
}

firstNameToUpperCase(value:string){
  if(value.length>0)
  this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);

  else
  this.model.firstName = value;
}

validatePrimaryLanguge(value){
  if(this.model.primaryLanguage==='default')
  {
    this.hasPrimaryLanguageError = true;
  }
  else
    this.hasPrimaryLanguageError=false;
}

}

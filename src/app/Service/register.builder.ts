import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Regisr } from './register.model';

@Injectable({
    providedIn: "root",
})

export class FormBuilderService {

    emptyRegister = new Regisr("","","","");

    // action = new BehaviorSubject<String>(null);

    constructor(private formBuilder: FormBuilder) { }

    buildFormGroupRegister(data: Regisr): FormGroup {
        console.log("data :", data);
        return this.formBuilder.group({
            userName: [data.userName, [Validators.required]],
            password: [data.password, [Validators.required]],
            mobileNumber: [data.mobileNumber, [Validators.required]],
            dateOfBirth:[data.dateOfBirth, [Validators.required]]
            //  userId:[data.userId],

            //  firstName:[data.firstName],
        
            //  lastName:[data.lastName],
        
            //  emailId:[data.emailId],
        
            //  phoneNumber:[data.phoneNumber],
        
            //  countryCode:[data.countryCode],
        
            //  password:[data.password],
        
            //  recordVersion:[data.recordVersion]
        });
    }

}
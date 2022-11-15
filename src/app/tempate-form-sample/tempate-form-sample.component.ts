import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel, Validators } from '@angular/forms';
import { User } from '../user-create-page.component/user';

@Component({
  selector: 'app-tempate-form-sample',
  templateUrl: './tempate-form-sample.component.html',
  styleUrls: ['./tempate-form-sample.component.scss']
})
export class TempateFormSampleComponent implements OnInit {

  model:User = { username:'ali.test', email:'ali.can', website:'', phone:'0545211236'};

  // html tarafındaki idlere typescript tarafında erişip bir işlem yapmak için viewChild yani view üzerindeki bir component bir element olabilir # ile erişim sağlandık. ref refransın üzerinden işlem yaptık
  // ilgili component template üzerinden bir child elemente erişim sağlar.
  @ViewChild('username') username!:NgModel;
  @ViewChild('email') email!:NgModel;
  // ilk değer template ismi ikinci değer ts değişken ismi
  @ViewChild('userCreateForm') userCreateForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
    // ilk sayfa yüklendiğinde çalışan yer
    console.log('username1',this.userCreateForm?.value);
  }

  // logicsel olarak bir api istek durumlarında aşağıdaki gibi form üzerinden belirli alanlara göre işlem yapılacaktır
  onSubmit(userCreateForm:NgForm){
      console.log('userCreateForm', userCreateForm);

      // ekstra bir kontrol amaçlı form bilgilerini NgForm üzerinden kontrol edelim.
      if(userCreateForm.valid){
        // api request at

        
      }

     const emailError = this.username.hasError('email');

     console.log('emailError', emailError);


     console.log('email-value', this.userCreateForm.form.get('email')?.value);
     this.userCreateForm.form.get('username')?.setValue('ali');

     // bazı durumlarda ilgili form alanı için validayon tanımlanmış mı gibi controller yapmamız gerekebilir. aşağıdaki örnek ile validasyon kontrolü yapılır.
     this.userCreateForm.form.get('username')?.hasValidator(Validators.required);

     console.log('username3',this.userCreateForm.form.get('username')?.hasValidator(Validators.required))

     // istenilen durumda ise dinamik olarak validator tanımlama işlemi yapabiliriz.
     this.userCreateForm.form.get('username')?.addValidators(Validators.maxLength(50));


     this.userCreateForm.form.reset(); // formu resetlemek için
     this.userCreateForm.form.clearValidators(); // tüm validasyonları kaldır.


      


  }

  onModelChange(value:string){
    console.log('event.target.value',value);
    // özel bir kontrolden geçirip bir işlem yapak istedeiğimizde
    this.model.phone = value;


  }

}

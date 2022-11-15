import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form-sample',
  templateUrl: './reactive-form-sample.component.html',
  styleUrls: ['./reactive-form-sample.component.scss']
})
export class ReactiveFormSampleComponent implements OnInit, OnDestroy, AfterViewInit {

  userForm!:FormGroup;
  emailSubs$:Subscription | undefined;

  // ElementRef angular tarafında html bir elementin referansına erişmemiz sağlayan bir nesne
  // @ViewChild('btn1') btn1!:ElementRef;
  // varsayılan olarak html de bir template elementref afterviewInit hook seviyesinde erişebiliriz.
  // aksi bir ayar yapmadığımız sürece angular default behaviour olarak bunu kabul görür.

   @ViewChild('btn1', {static:true}) btn1!:ElementRef;
   // eğer bir component içerisinde nesnenin instance ngOnit seviyesinde ihtiyaç duyarsak bu durumda {static:true} keyword ile çalıştırmayı unutmuyoruz.

  constructor(private fb:FormBuilder) { 

     this.userForm = this.fb.group({
      username:['ali', Validators.required],
      email:['ali@test.com', [Validators.email,Validators.required]]
     })

     this.EmailValueChangeSubscription();
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit','NgOnit den sonra çalışır. Component içerisindeki child component ngAfterViewInit aşamasında load edilir.');
    // ViewChild ile bir componentden başka bir component erişim bir özellini çalıştırmak amaçlı tercih ediyorum.

    console.log('btn1-ngAfterViewInit', this.btn1);
  
  }

  // Component Doma ilk girdiğinde ise bu component çalışır
  ngOnInit(): void {
    // Component açık ise component üzerinde state değişikliklerinden etkilenemz. Gende API üzerinden veri çekmek için tercih edilir.
    // Http service ile API Call işlemleri bu hook içerisinde gerçekleşir
    
    console.log('btn1-ngOnInit', this.btn1);
    console.log('ngOnInit', 'Component Doma ilk girdiğinde ise bu component çalışır');

    console.log('formValue', this.userForm.get('email')?.hasValidator(Validators.required))
  }

  // Angular Hook. 
  ngOnDestroy(): void {
    this.emailSubs$?.unsubscribe(); // subscription kapadık
    // Component DOM da kaldırılırken yapılacak olan işlemler içinb otomatik olarak uygulanan bir lifecyle
    // bir form nesnesini bir servisi takibe alma durumumuz varsa onDestroy içerisinde bunları unsubscribe edelim Yoksa uygulamanın performansını olumsuz etkiler.
    // Interval ile çalışıyorsak kesinlkle clear Interval yapmayı unutmayalım
    console.log('ngOnDestroy', 'Component DOM da kaldırılırken çalışır')

  }


  EmailValueChangeSubscription(){

    // rxJs den gelen bir özellik value değişimi gözlemlenebilir Observable tipinde tanımlıdır. subscribe operator ile observable olan bir nesne takibe alınır. ve nesnenin son hali yakalanır. // rxjs subscribe gibi bir çok farklı iş yapan operatör vardır. Angular bu tarz işlemler için rxJS kütüphanesi ile çalışır.
    this.emailSubs$ =  this.userForm.get('email')?.valueChanges.subscribe((value) => {
      if(value.includes('local')){
        alert('E-posta adresi local domain olarak tanımlanamaz')
        this.userForm.get('email')?.reset();
      }
    })

  }




  onSubmit(){

    if(this.userForm.valid) {
      const param = this.userForm.value;
      // api gönderilecek olan parametreler
    }

   
  }

}

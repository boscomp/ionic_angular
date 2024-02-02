import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/shared/services/translate-config.service';
import {TranslateService} from '@ngx-translate/core';
import { LoginServicesService } from 'src/app/shared/services/login/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string ="";
  pwd: string="";
  constructor(private translateConfigServie: TranslateConfigService,
     private translate:TranslateService,
     private loginService: LoginServicesService) { 
      this.translateConfigServie.getDefaultLanguage();
     }

  ngOnInit() {
  }
/**
 * getLogin: Llama al servicio de login
 */
  getLogin() {

    this.loginService.login(this.email, this.pwd).subscribe(data=> {
      alert("éxito");
      console.log(data);
      //Damos acceso a la página inicial de la aplicación
    },
    error => {
      alert("error");
      console.log(error)
    }
    );
   
  }

}

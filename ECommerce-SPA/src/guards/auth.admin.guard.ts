import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/services/auth.service";
import { AlertifyService } from "src/services/alertify.service";

@Injectable({
    providedIn:'root'
})

export class AuthAdminGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router,private alertify:AlertifyService){

    }
    canActivate():boolean{
        if(this.authService.loggedInAdmin()){
            return true;
        }
        this.alertify.error("You shall not pass!!");
        this.router.navigate(['/home']);
        return false;
    }
}
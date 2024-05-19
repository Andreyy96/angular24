import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this._initForm()
  }

  private _initForm(): void {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  register(): void {
    this.authService.register(this.form.value).subscribe(()=>{
      this.router.navigate(['/auth/login'])
    })

  }
}

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  //neither reactive nor template based form
  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    //do your checking here i.e. validating if needed
    this.auth
      .signIn(email, password)
      .then((response) => {
        this.router.navigateByUrl('/');
        this.toastr.success('Successfully Signed in');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('Signin failed');
      });
  }
}

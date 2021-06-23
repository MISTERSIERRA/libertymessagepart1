import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-b-login',
  templateUrl: './b-login.component.html',
  styleUrls: ['./b-login.component.scss']
})
export class BLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}

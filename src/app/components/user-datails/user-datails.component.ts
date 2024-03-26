import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-datails',
  standalone: true,
  imports: [],
  templateUrl: './user-datails.component.html',
  styleUrl: './user-datails.component.css'
})
export class UserDatailsComponent {
  @Input()
  userDetails: IUser
}

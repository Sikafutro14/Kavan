import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(
      (data) => {
        console.log("Users fetched:", data);
        this.users = data;
      },
      (error) => {
        console.error("Error fetching users:", error);
      }
    );cd 
  }
}

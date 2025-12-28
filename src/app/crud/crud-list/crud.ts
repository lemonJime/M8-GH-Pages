import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../model';
import { UsersService } from '../../services/users-service.service';
import { MatTableModule } from '@angular/material/table';

import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CrudEdit } from '../crud-edit/crud-edit';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CrudEdit],
  templateUrl: './crud.html',
  styleUrl: './crud.scss',
})
export class Crud implements OnInit {

  constructor(private userService: UsersService) { }

  private usersListForm = inject(FormBuilder);
  usersForm = this.usersListForm.group({
    newUserFirstName: ['', Validators.required],
    newUserLastName: ['', Validators.required],
    newUserEmail: ['', Validators.required],
    newUserPhone: ['', Validators.required]
  });

  users: User[] = [];
  userSelected!: User;
  userSelectedIndex: number = -1;

  dataSource = this.users;

  displayedColumns: string[] = ['Name', 'Email', 'Phone', 'Actions'];


  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response.results;
      this.dataSource = this.users;
    });

  }

  addUser(): void {
    const newUser: User = {
      name: {
        first: this.usersForm.value.newUserFirstName || '',
        last: this.usersForm.value.newUserLastName || '',
      },
      email: this.usersForm.value.newUserEmail || '',
      phone: this.usersForm.value.newUserPhone || '',
    };

    this.users.push(newUser);
    this.dataSource = [...this.users];

    this.usersForm.reset();
  }

  select(user: User, index: number): void {
    this.userSelected = { ...user };
    this.userSelectedIndex = index
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.dataSource = [...this.users];

    if (this.userSelected === user) {
      this.userSelected = undefined as any;
      this.userSelectedIndex = -1;
    }
  }

  update($event: User) {
    console.log('Actualizando usuario en índice:', this.userSelectedIndex);
    if (this.userSelectedIndex >= 0 && this.userSelectedIndex < this.users.length) {
      this.users[this.userSelectedIndex] = $event;
      this.dataSource = [...this.users];
      console.log('Usuario actualizado:', $event);
    }
  }


}

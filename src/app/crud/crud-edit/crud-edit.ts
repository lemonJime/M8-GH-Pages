import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../model';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-crud-edit',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, ReactiveFormsModule],
  templateUrl: './crud-edit.html',
  styleUrl: './crud-edit.scss',
})
export class CrudEdit {

  @Input()
  userSelected!: User;

  @Output()
  onUpdateUser: EventEmitter<User> = new EventEmitter();

  private userEditForm = inject(FormBuilder);
  userForm = this.userEditForm.group({
    editedUserFirstName: [''],
    editedUserLastName: [''],
    editedUserEmail: [''],
    editedUserPhone: ['']
  });


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['userSelected'].currentValue){
    console.log('changes: ', changes);
    }
    if (changes['userSelected'].currentValue) {
      this.userForm.patchValue({
        editedUserFirstName: this.userSelected.name.first,
        editedUserLastName: this.userSelected.name.last,
        editedUserEmail: this.userSelected.email,
        editedUserPhone: this.userSelected.phone,
      })
    }
  }

  update(): void {
    if (this.userForm.valid) {
      const userUpdated : User = {
        name: {
          first: this.userForm.value.editedUserFirstName || '',
          last: this.userForm.value.editedUserLastName || '',
        },
        email: this.userForm.value.editedUserEmail || '',
        phone: this.userForm.value.editedUserPhone || ''

      }
      this.onUpdateUser.emit(userUpdated)
    }
  }



}

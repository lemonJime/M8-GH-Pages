import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEdit } from './crud-edit';

describe('CrudEdit', () => {
  let component: CrudEdit;
  let fixture: ComponentFixture<CrudEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

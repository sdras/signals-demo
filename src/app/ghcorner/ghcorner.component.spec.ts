import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhcornerComponent } from './ghcorner.component';

describe('GhcornerComponent', () => {
  let component: GhcornerComponent;
  let fixture: ComponentFixture<GhcornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhcornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhcornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

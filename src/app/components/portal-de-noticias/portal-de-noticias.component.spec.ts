import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDeNoticiasComponent } from './portal-de-noticias.component';

describe('PortalDeNoticiasComponent', () => {
  let component: PortalDeNoticiasComponent;
  let fixture: ComponentFixture<PortalDeNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalDeNoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalDeNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

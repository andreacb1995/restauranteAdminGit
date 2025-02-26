import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabeceraAdministradorComponent } from './cabecera-administrador.component';

describe('CabeceraAdministradorComponent', () => {
  let component: CabeceraAdministradorComponent;
  let fixture: ComponentFixture<CabeceraAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraAdministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

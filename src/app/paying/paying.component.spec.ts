import { ComponentFixture, TestBed } from '@angular/core/testing';
import { concatMapTo } from 'rxjs';

import { PayingComponent } from './paying.component';

describe('PayingComponent', () => {
  let component: PayingComponent;
  let fixture: ComponentFixture<PayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mostratHora function must be return "3 horas y 45 minutos" if component had 225', () => {

    component.rangeValue = 225
    
    const resp = component.mostrarHora()

    expect(resp).toBe('3 horas y 45 minutos');

  })

  it('mostrarResultado function must be return 1575 if you had properties price equal 450 and rangeValue equal 210', () => {

    component.price = 450;
    component.rangeValue = 210;

    const result = component.mostrarResultado();

    expect(result).toBe(1575);

  })

  it('inputChanges must change properties price with a number', () => {

    component.inputChanges({target:{value:"234"}});

    expect(component.price).toBe(234)

  })

  it('rangeChanges must change properties rangeValue', () => {

    component.rangeChange({target:{value:210}});

    expect(component.rangeValue).toBe(210)

  })

  
});

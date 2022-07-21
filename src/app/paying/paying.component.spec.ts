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

  it('inputChanges must change properties equal 0 price with a number less than 0', () => {

    component.price = 0

    component.inputChanges({target:{value:"-234"}});

    expect(component.price).toBe(0)
  })

  
  it('inputChanges must change properties equal 10 million price with a number greater than 10 million', () => {

    component.price = 0

    component.inputChanges({target:{value:"100000000"}});

    expect(component.price).toBe(10000000)
  })

  it('rangeChanges must change properties rangeValue', () => {

    component.rangeChange({target:{value:210}});

    expect(component.rangeValue).toBe(210)

  })

  it('showError must be true if price is less than 0', () => {

    component.showError = false;

    component.inputChanges({target:{value:"-234"}});

    expect(component.showError).toBeTruthy();

  })

  it('showErrorGreater must be true if price is greater than 10000000', () => {

    component.showErrorGreater = false;

    component.inputChanges({target:{value:"100000000"}});

    expect(component.showErrorGreater).toBeTruthy();

  })


  
});

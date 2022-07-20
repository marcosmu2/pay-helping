import { TestBed } from '@angular/core/testing';

import { PayingService } from './paying.service';

describe('PayingService', () => {
  let service: PayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('calcularHora function must be return "1 hora" if you put 60 in parameter', () => {

    const resp = service.calcularHora(60);

    expect(resp).toBe("1 hora")

  });

  it('calcularHora function must be return "2 horas y 15 minutos" if you put 135 in parameter', () => {

    const resp = service.calcularHora(135);

    expect(resp).toBe("2 horas y 15 minutos");

  });

  it('calcularResultado function must return 200 if parameters are price equal 100 and minutes equal 120', () => {
    const resp = service.calcularResultado(100,120);

    expect(resp).toBe(200);
  })

  
});

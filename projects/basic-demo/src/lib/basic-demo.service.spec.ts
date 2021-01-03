import { TestBed } from '@angular/core/testing';

import { BasicDemoService } from './basic-demo.service';

describe('BasicDemoService', () => {
  let service: BasicDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

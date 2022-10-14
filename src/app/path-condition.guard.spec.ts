import { TestBed } from '@angular/core/testing';

import { PathConditionGuard } from './path-condition.guard';

describe('PathConditionGuard', () => {
  let guard: PathConditionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PathConditionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PreventUnsavedChangesSkipTestsGuard } from './prevent-unsaved-changes--skip-tests.guard';

describe('PreventUnsavedChangesSkipTestsGuard', () => {
  let guard: PreventUnsavedChangesSkipTestsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventUnsavedChangesSkipTestsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

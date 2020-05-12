import { LoanStatePipe } from './loan-state.pipe';

describe('LoanStatePipe', () => {
  it('create an instance', () => {
    const pipe = new LoanStatePipe();
    expect(pipe).toBeTruthy();
  });
});

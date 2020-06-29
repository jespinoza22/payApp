import { MonthPipe } from './month.pipe';

xdescribe('MonthPipe', () => {
  it('create an instance', () => {
    const pipe = new MonthPipe();
    expect(pipe).toBeTruthy();
  });
});

import { CoinPipe } from './coin.pipe';

xdescribe('CoinPipe', () => {
  it('create an instance', () => {
    const pipe = new CoinPipe();
    expect(pipe).toBeTruthy();
  });
});

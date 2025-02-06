import { ReversePipe } from './reversed.pipe';

describe('reversepipe', () => {
  let reversepipe = new ReversePipe();
  it('should create the reverse of the string', () => {
    expect(reversepipe.transform('hello')).toEqual('olleh');
  });

});
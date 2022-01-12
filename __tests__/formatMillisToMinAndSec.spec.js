import { formatMillisToMinAndSec } from '../src/utils/formatMillisToMinAndSec';

describe('format millis to min and sec', () => {
  it('should return correct format time', () => {
    expect(formatMillisToMinAndSec(0)).toBe('0:00');
    expect(formatMillisToMinAndSec(1000)).toBe('0:01');
    expect(formatMillisToMinAndSec(25000)).toBe('0:25');
    expect(formatMillisToMinAndSec(500000)).toBe('8:20');
  });
});

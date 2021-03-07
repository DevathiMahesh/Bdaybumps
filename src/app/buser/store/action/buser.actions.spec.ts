import * as fromBuser from './buser.actions';

describe('loadBusers', () => {
  it('should return an action', () => {
    expect(fromBuser.loadBusers().type).toBe('[Buser] Load Busers');
  });
});

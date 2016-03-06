import fetch from 'isomorphic-fetch';

//action types
export const TEST = 'TEST';

export function test() {
  return {
    type: TEST,
    payload: {
      running: 'It\'s running'
    }
  };
}

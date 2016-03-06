export function storeState({ getState }) {
  return (next) => (action) => {
    let state = getState();

    var result = next(action);

    localStorage.setItem('state', JSON.stringify({}));

    return result;
  };
}

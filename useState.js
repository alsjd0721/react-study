const useState = (init) => {
  let state = init;
  const setState = (val) => {
    state = val;
  };

  return [state, setState];
};

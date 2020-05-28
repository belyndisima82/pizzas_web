export const types = {
  IS_FETCHING: 'IS_FETCHING',
  IS_DONE: 'IS_DONE',
};
export const fetching = () => ({
  type: types.IS_FETCHING,
});
export const doneFetching = () => ({
  type: types.IS_DONE,
});

export default fetching;

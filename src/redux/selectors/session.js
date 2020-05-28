

export const selectVisible = (state, element) => state.session.get(`${element}Visible`, false);

export const activeModal = (state) => state.session;

export default selectVisible;

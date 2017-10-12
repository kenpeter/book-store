import initialState from './initialState';

export default function (state = initialState.books, action) {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    default:
      return state;
  }
};

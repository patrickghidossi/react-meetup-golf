// Example of an action creator

export function selectBook(book) {
  // selectBook is an action creator that needs to return an action.
  //An object with a type property. Type and payload.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

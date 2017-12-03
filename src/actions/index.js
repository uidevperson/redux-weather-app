const API_KEy = 'b0336642783a9985e75106e89c20cde0';

export function selectBook(book) {
	// selectbook is an action creator
	// it needs to return an action
	// which is an object with type property
	return {
		type: 'BOOK_SELECTED',
		payload: book,
	}
}

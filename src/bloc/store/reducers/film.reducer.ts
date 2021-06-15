import { FilmsActions } from "./../actions/film.action";

export interface FilmState {
	films: FilmInterface[];
	film: PersonInterface | Object;
	loading: boolean;
	err: null | string;
}

export const FilmsInitialState: FilmState = {
	films: [],
	film: {},
	loading: false,
	err: null,
};

export const FilmsReducer = (
	state: FilmState,
	action: ReducerAction
): FilmState => {
	const { type, value } = action;
	const { SET_FILMS, SET_LOADING, SET_ERROR } = FilmsActions;

	switch (type) {
		case SET_FILMS:
			return {
				...state,
				films: value.results,
			};

		case SET_LOADING:
			return {
				...state,
				loading: value,
			};

		case SET_ERROR:
			return {
				...state,
				err: value,
			};

		default:
			return state;
	}
};

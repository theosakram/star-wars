import { PeopleActions } from "../actions/people.action";

export interface PeopleState {
	people: PersonInterface[];
	person: PersonInterface | null;
	loading: boolean;
	err: null | string;
}

export const PeopleInitialState: PeopleState = {
	people: [],
	person: null,
	loading: false,
	err: null,
};

export const PeopleReducer = (
	state: PeopleState,
	action: ReducerAction
): PeopleState => {
	const { type, value } = action;
	const { SET_PEOPLE, SET_PERSON, SET_LOADING, SET_ERROR } = PeopleActions;

	switch (type) {
		case SET_PEOPLE:
			return {
				...state,
				people: value.results,
			};

		case SET_PERSON:
			return {
				...state,
				person: value,
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

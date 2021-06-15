import { PeopleActions } from "./../store/actions/people.action";
import { Dispatch } from "react";
import { Dispatcher } from "../../utils/helpers";

interface ServiceProps {
	dispatch: Dispatch<ReducerAction>;
}

export const PeopleService = ({ dispatch }: ServiceProps) => {
	const _peopleDispatcher = new Dispatcher("/people", dispatch);
	const { SET_PEOPLE, SET_PERSON, SET_LOADING, SET_ERROR } = PeopleActions;

	const _baseRequest: BaseRequest = {
		loading: SET_LOADING,
		err: SET_ERROR,
	};

	const getPeople = () => {
		return _peopleDispatcher.get({
			success: SET_PEOPLE,
			..._baseRequest,
			url: "",
		});
	};

	const getPerson = (id: string | number) => {
		return _peopleDispatcher.get({
			success: SET_PERSON,
			..._baseRequest,
			url: `/${id}`,
		});
	};

	return {
		getPeople,
		getPerson,
	};
};

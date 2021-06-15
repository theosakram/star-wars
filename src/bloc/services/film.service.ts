import { FilmsActions } from "./../store/actions/film.action";
import { Dispatch } from "react";
import { Dispatcher } from "../../utils/helpers";

interface ServiceProps {
	dispatch: Dispatch<ReducerAction>;
}

export const FilmService = ({ dispatch }: ServiceProps) => {
	const _filmDispatcher = new Dispatcher("/films", dispatch);
	const { SET_FILMS, SET_LOADING, SET_ERROR } = FilmsActions;

	const _baseRequest: BaseRequest = {
		loading: SET_LOADING,
		err: SET_ERROR,
	};

	const getFilms = () => {
		return _filmDispatcher.get({
			success: SET_FILMS,
			..._baseRequest,
			url: "",
		});
	};

	return {
		getFilms,
	};
};

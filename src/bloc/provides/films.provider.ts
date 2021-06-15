import { useEffect, useReducer } from "react";
import { FilmService } from "../services/film.service";
import {
	FilmsInitialState,
	FilmsReducer,
} from "../store/reducers/film.reducer";

export const FilmProvider = ({ id, isFetching }: ProviderProps) => {
	const [state, dispatch] = useReducer(FilmsReducer, FilmsInitialState);
	const { getFilms } = FilmService({ dispatch });

	useEffect(() => {
		getFilms();
	}, [id]);

	return {
		state,
	};
};

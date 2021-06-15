import { useEffect, useReducer } from "react";
import { PeopleService } from "../services";
import { PeopleInitialState, PeopleReducer } from "../store/reducers";

export const PeopleProvider = ({ id, isFetching }: ProviderProps) => {
	const [state, dispatch] = useReducer(PeopleReducer, PeopleInitialState);
	const { getPeople, getPerson } = PeopleService({ dispatch });

	const fetchPeople = () => {
		if (isFetching) {
			if (id) {
				return getPerson(id);
			}

			return getPeople();
		}

		return;
	};

	useEffect(() => {
		fetchPeople();
	}, [id]);

	return {
		state,
	};
};

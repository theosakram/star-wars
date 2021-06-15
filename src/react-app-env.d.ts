/// <reference types="react-scripts" />

declare interface ReducerAction {
	type: string;
	value: any;
}

declare interface DispatcherProps {
	loading: string;
	err: string;
	url: string;
	payload?: any;
	success: string;
}

declare interface BaseRequest {
	loading: string;
	err: string;
}

declare interface PersonInterface {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: any[];
	vehicles: string[];
	starships: string[];
	created: Date;
	edited: Date;
	url: string;
}

declare interface ProviderProps {
	isFetching?: boolean;
	id?: string | number;
}

declare interface FilmInterface {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	created: Date;
	edited: Date;
	url: string;
}

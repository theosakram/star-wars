import { FC } from "react";
import { PeopleContainer } from "../containers";

export const Home: FC = () => {
	return (
		// berguna apabila di satu page memanggil lebih dari 1 API
		<PeopleContainer />
	);
};

import { FC } from "react";
import { PersonContainer } from "../containers";

export const Person: FC = () => {
	return (
		// berguna apabila di satu page memanggil lebih dari 1 API
		<PersonContainer />
	);
};

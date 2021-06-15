import { FC } from "react";
import { FilmsContainer } from "../containers";

export const Films: FC = () => {
	return (
		// berguna apabila di satu page memanggil lebih dari 1 API
		<FilmsContainer />
	);
};

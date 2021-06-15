import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import Loader from "react-loader-spinner";

export const Loading: FC = () => {
	return (
		<Flex w="100%" justify="center" align="center" h="100vh">
			<Loader
				type="Puff"
				color="#44337a"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
		</Flex>
	);
};

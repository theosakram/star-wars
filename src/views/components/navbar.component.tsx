import { FC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
	return (
		<Flex w="100%" h="50px" bg="purple.800" align="center" p={3}>
			<Heading as="h3" size="md" color="white">
				SWAPIKU
			</Heading>

			<Flex w="15%" ml={3} justify="space-evenly">
				<Text fontSize="md" color="white" cursor="pointer">
					<Link to="/films">Films</Link>
				</Text>
				<Text fontSize="md" color="white" cursor="pointer">
					<Link to="/">People</Link>
				</Text>
			</Flex>
		</Flex>
	);
};

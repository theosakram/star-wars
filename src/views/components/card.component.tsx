import { FC } from "react";
import { Box, Flex, Heading, Divider, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface PersonCardProps {
	person: PersonInterface;
}

export const PersonCard: FC<PersonCardProps> = ({ person }) => {
	const splitted = person.url.split("/");
	const id = splitted[splitted.length - 2];

	return (
		<Flex w="100%" justify="center">
			<Box
				border="1px solid lightgray"
				borderRadius="md"
				boxShadow="md"
				p={3}
				w="80%">
				<Flex w="100%" mb={2}>
					<Heading as="h3" size="md">
						{person.name}
					</Heading>
				</Flex>
				<Divider mb={2} />
				<Text fontSize="md">Birth year: {person.birth_year}</Text>
				<Text fontSize="md" mb={2}>
					Eye Color: {person.eye_color}
				</Text>
				<Button size="sm" colorScheme="purple">
					<Link to={`/${id}`}>See More</Link>
				</Button>
			</Box>
		</Flex>
	);
};

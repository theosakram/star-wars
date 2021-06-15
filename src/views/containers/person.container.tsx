import { FC } from "react";
import { PeopleProvider } from "../../bloc/provides/prople.provider";
import { PersonCard } from "../components";
import { EmptyDataWrapper, LoadErrorWrapper } from "../wrappers";
import { Container, Heading, Divider, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const PersonContainer: FC = () => {
	const { id } = useParams<any>();
	const {
		state: { person, loading, err },
	} = PeopleProvider({ isFetching: true, id });

	return (
		<LoadErrorWrapper loading={loading} err={err}>
			<EmptyDataWrapper watchedValue={person || {}}>
				<Container p={3}>
					<Heading as="h3" size="md" mb={2}>
						{person?.name}
					</Heading>
					<Divider mb={2} />
					<Text fontSize="md">Birth year: {person?.birth_year}</Text>
					<Text fontSize="md">Eye Color: {person?.eye_color}</Text>
					<Text fontSize="md">Birth year: {person?.gender}</Text>
					<Text fontSize="md">Eye Color: {person?.hair_color}</Text>
				</Container>
			</EmptyDataWrapper>
		</LoadErrorWrapper>
	);
};

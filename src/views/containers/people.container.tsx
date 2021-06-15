import { FC } from "react";
import { PeopleProvider } from "../../bloc/provides/prople.provider";
import { LoadErrorWrapper, EmptyDataWrapper } from "../wrappers";
import { PersonCard } from "../components";
import { SimpleGrid } from "@chakra-ui/react";

export const PeopleContainer: FC = () => {
	const {
		state: { people, loading, err },
	} = PeopleProvider({ isFetching: true });

	return (
		<LoadErrorWrapper loading={loading} err={err}>
			<EmptyDataWrapper watchedValue={people}>
				<SimpleGrid columns={3} spacing={10} p={6}>
					{people.map((person, idx) => (
						<PersonCard person={person} key={idx} />
					))}
				</SimpleGrid>
			</EmptyDataWrapper>
		</LoadErrorWrapper>
	);
};

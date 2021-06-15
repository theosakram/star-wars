import { FC } from "react";
import { LoadErrorWrapper, EmptyDataWrapper } from "../wrappers";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	Box,
} from "@chakra-ui/react";
import { FilmProvider } from "../../bloc/provides/films.provider";

export const FilmsContainer: FC = () => {
	const {
		state: { films, loading, err },
	} = FilmProvider({ isFetching: true });

	console.log(films);

	return (
		<LoadErrorWrapper loading={loading} err={err}>
			<EmptyDataWrapper watchedValue={films}>
				<Box w="100%" p={6}>
					<Table variant="simple">
						<TableCaption>All Star Wars Films</TableCaption>
						<Thead>
							<Tr>
								<Th>Title</Th>
								<Th>Director</Th>
								<Th isNumeric>Year</Th>
							</Tr>
						</Thead>
						<Tbody>
							{films.map((film, idx) => (
								<Tr key={idx}>
									<Td>{film.title}</Td>
									<Td>{film.director}</Td>
									<Td isNumeric>
										{new Date(
											film.release_date
										).getFullYear()}
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
			</EmptyDataWrapper>
		</LoadErrorWrapper>
	);
};

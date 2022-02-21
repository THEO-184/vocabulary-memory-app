import { useAppSelector } from "../app/hooks";
import { selectStart } from "../features/counter/setVocabulary";
import { Container, Box } from "@mui/material";
import SelectLanguages from "./SelectLanguages";
import Vocabularies from "./Vocabularies";

const containerFlex = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const HomePage = () => {
	const isStarted = useAppSelector(selectStart);
	return (
		<Container maxWidth="md" sx={{ ...containerFlex, height: "100vh" }}>
			<Box sx={{ width: "100%", height: "300px" }}>
				{isStarted ? <Vocabularies /> : <SelectLanguages />}
			</Box>
		</Container>
	);
};

export default HomePage;

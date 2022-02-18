import { useEffect, useState, createContext } from "react";
import { Container, Box, Paper, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import styles from "@mui/material/styles";
import Modal from "./Modal";

const containerFlex = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

interface AppContextInterface {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleAddLanguage: (word: string) => void;
}

interface languageType {
	id: number;
	word: string;
}
export const AppContext = createContext<AppContextInterface | null>(null);

const HomePage = () => {
	const [open, setOpen] = useState(false);
	const [languages, setlanguages] = useState<languageType[]>([]);
	const [languageId, setSelectedLanguage] = useState<number>();

	const handleAddLanguage = (word: string) => {
		setlanguages((prev) => [...prev, { id: languages.length, word }]);
	};

	const handleSelectLanguage = (id: number) => {
		setSelectedLanguage(id);
		// console.log(id);
	};
	console.log(languageId);

	return (
		<AppContext.Provider value={{ open, setOpen, handleAddLanguage }}>
			<Container maxWidth="md" sx={{ ...containerFlex, height: "100vh" }}>
				<Modal />
				<Box sx={{ width: "100%", height: "300px" }}>
					<Paper
						sx={{ width: "100%", textAlign: "center", height: "100%", pt: 6 }}
					>
						<Typography variant="h5" sx={{ py: 1 }}>
							Add & select Language
						</Typography>
						<Typography sx={{ py: 1, color: "#999594" }}>
							Add languages which you know{" "}
							<Typography
								component={"span"}
								color="#000"
								sx={{
									mx: 0.3,
									px: 0.3,
									background: "#faece5",
									border: "1px solid #f16f37",
								}}
							>
								(Min 2)
							</Typography>{" "}
							<span>and</span>
							<Typography
								component={"span"}
								color="#000"
								sx={{
									mx: 0.3,
									px: 0.3,
									background: "#faece5",
									border: "1px solid #f16f37",
								}}
							>
								(Max 4)
							</Typography>{" "}
							and select one as your native.
						</Typography>
						{/* add selected languages */}
						{languages.map((language) => {
							return (
								<Button
									key={language.id}
									variant="outlined"
									startIcon={
										languageId === language.id ? (
											<CheckIcon
												fontSize="large"
												sx={{
													color: "#fa4b06f6",
												}}
											/>
										) : null
									}
									onClick={() => handleSelectLanguage(language.id)}
									sx={{
										my: 2,
										mx: 1,
										py: 1,
										px: 2,
										textTransform: "capitalize",
										boxShadow: "none",
										border: () =>
											languageId == language.id
												? "2px solid #fa4b06f6"
												: "2px solid #ccc",

										backgroundColor: "#f7f7f7",
										color: "#000",

										"&:hover": {
											border: () =>
												languageId == language.id
													? "2px solid #fa4b06f6"
													: "2px solid #ccc",
											backgroundColor: "#fff",
											boxShadow: "none",
										},
										"&:focus": {
											backgroundColor: "#fff",
										},
									}}
								>
									{language.word}
								</Button>
							);
						})}
						{languages.length < 4 && (
							<Button
								startIcon={<AddIcon />}
								variant="outlined"
								onClick={() => setOpen(true)}
								sx={{
									my: 2,
									py: 1,
									px: 2,
									color: "#f16f37",
									textTransform: "capitalize",
									boxShadow: "none",
									border: "2px solid #f16f37",
									"&:hover": {
										border: "2px solid #f16f37",
										boxShadow: "none",
										backgroundColor: "#fff",
										WebkitTapHighlightColor: "none",
									},
								}}
							>
								Add language
							</Button>
						)}

						<Box>
							<Button
								variant="contained"
								disabled={languages.length < 2}
								sx={{
									ml: 2,
									my: 2.5,
									width: "50%",
									"&.MuiButton-root": {
										background: () =>
											languages.length < 2 ? "#ccc" : "#fa4b06f6",
										textTransform: "none",
										color: "#fff",
									},
									"&.MuiButton-root:hover": {
										background: "#e74708df",
										boxShadow: "none",
									},
								}}
							>
								Lets make list of vocabularies
							</Button>
						</Box>
					</Paper>
				</Box>
			</Container>
		</AppContext.Provider>
	);
};

export default HomePage;

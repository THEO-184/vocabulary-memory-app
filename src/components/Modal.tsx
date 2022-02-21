import { useAppDispatch, useAppSelector } from "../app/hooks";
import { SET_START, selectStart } from "../features/counter/setVocabulary";
import { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Typography, Box, TextField, Button } from "@mui/material";
import { ModalContext } from "./SelectLanguages";
import { CloseOutlined } from "@mui/icons-material";

const Modal = () => {
	const dispatch = useAppDispatch();
	const isStarted = useAppSelector(selectStart);
	const [language, setLanguage] = useState("");
	const [error, setError] = useState("");
	const modalContextValues = useContext(ModalContext);

	const addLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		modalContextValues?.handleAddLanguage(language);
		modalContextValues?.setOpen(false);
	};

	useEffect(() => {
		if (language.length > 0 && language.length < 3) {
			setError("minimum length is 3");
		} else {
			setError("");
		}
	}, [language]);

	if (!modalContextValues?.open) return null;
	return ReactDOM.createPortal(
		<Box
			className={`modal ${modalContextValues?.open ? "open" : null}`}
			component={"aside"}
			sx={{
				maxWidth: "100vw",
				maxHeight: "100vh",
				background: "rgba(255,255,255,0.95)",
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 200,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					py: 5,
					flexDirection: "column",
					width: "300px",
					mx: "auto",
				}}
			>
				<Typography
					variant="h5"
					component={"h1"}
					sx={{
						"&.MuiTypography-root": {
							letterSpacing: "1px",
						},
					}}
				>
					Add a New Language
				</Typography>

				<Box
					// component={"form"}
					sx={{ my: 2, "&.MuiBox-root": { width: "100%" } }}
				>
					<TextField
						variant="standard"
						error={error.length > 0}
						helperText={error}
						placeholder="language Name"
						autoFocus
						required
						onChange={(e) => setLanguage(e.target.value)}
						sx={{
							"&.MuiTextField-root": {
								width: "100%",
								py: 1,
								px: 3,
							},
							"&.MuiTextField-root .MuiInput-root": {
								width: "100%",
								py: 1,
								// px: 2,
								borderBottom: "2px solid #e74b08",
								color: "#000",
							},
							"& .MuiInput-root::after": {
								borderBottom: "2px solid #e74b08",
							},
							"& .MuiInput-root::before": {
								borderBottom: "2px solid #e74b08",
							},
							"&.MuiTextField-root .MuiInput-input": {
								textAlign: "center",
							},

							"&.MuiTextField-root .MuiInput-input::placeholder": {
								fontWeight: "500",
								fontSize: "18px",
							},
						}}
					/>

					<Button
						variant="contained"
						disabled={language.length < 3}
						onClick={(e) => addLanguage(e)}
						sx={{
							ml: 2,
							my: 2.5,
							width: "100%",
							"&.MuiButton-root": {
								background: () => (language.length < 3 ? "#ccc" : "#e74b08"),
								textTransform: "none",
								fontSize: "16px",
								color: "#fff",
							},
							"&.MuiButton-root:hover": {
								background: "#e74708df",
								boxShadow: "none",
							},
						}}
					>
						I know this language
					</Button>
				</Box>
			</Box>
			<Button
				onClick={() => modalContextValues.setOpen(false)}
				sx={{
					width: "45px",
					height: "45px",
					position: "fixed",
					top: "1rem",
					right: "1rem",
					cursor: "pointer",
					transitionTimingFunction: "ease-out",
					transitionProperty: "all",
					transitionDuration: "0.3s",
					"&.MuiButton-root": {
						color: "red",
					},
					"&.MuiButton-root:hover": {
						background: "none",
						color: "red",
						transform: "scale(1.1)",
					},
					"&.MuiButton-root:focus": {
						background: "white",
					},
				}}
			>
				<CloseOutlined sx={{ color: "red", width: "100%", height: "100%" }} />
			</Button>
		</Box>,
		document.body
	);
};

export default Modal;

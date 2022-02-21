import React from "react";
import { Paper, Typography, TextField, Box } from "@mui/material";
import { border } from "@mui/system";

const Vocabularies = () => {
	return (
		<Paper sx={{ width: "100%", textAlign: "center", height: "100%", pt: 6 }}>
			<Typography variant="h5" sx={{ py: 1 }}>
				Make Vocabulary with Translation
			</Typography>
			<Typography sx={{ py: 1, color: "#999594" }}>
				Add{" "}
				<Typography
					component={"span"}
					color="#000"
					sx={{
						mx: 0.3,
						px: 0.3,
						background: "#fcfbfa",
						border: "1px solid #f7b99f",
					}}
				>
					(Min 5)
				</Typography>{" "}
				<span>words of your native language</span>
				<Typography
					component={"span"}
					color="#000"
					sx={{
						mx: 0.3,
						px: 0.3,
					}}
				>
					TWI
				</Typography>{" "}
				and Translate it into others.
			</Typography>

			<Box
				component={"form"}
				noValidate
				autoComplete="off"
				sx={{ width: "65%", mx: "auto" }}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",

						"& label": {
							transformOrigin: "top center",
						},
						"& label.Mui-focused": {
							color: "#000",
						},
					}}
				>
					<TextField
						label="Twi(Native)"
						sx={{
							width: "22%",
						}}
					/>
					<TextField
						label="In English"
						sx={{
							width: "22%",
						}}
					/>
					<TextField
						label="In English"
						sx={{
							width: "22%",
						}}
					/>
					<TextField
						label="In English"
						sx={{
							width: "22%",
						}}
					/>
				</Box>
			</Box>
		</Paper>
	);
};

export default Vocabularies;

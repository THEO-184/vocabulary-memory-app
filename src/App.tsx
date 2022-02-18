import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import HomePage from "./components/HomePage";

function App() {
	return (
		<Container
			className="App"
			id="main-App"
			component={"main"}
			sx={{ maxHeight: "100vh" }}
		>
			<HomePage />
		</Container>
	);
}

export default App;

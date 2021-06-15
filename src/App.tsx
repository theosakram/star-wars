import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Films, Person } from "./views/pages";
import { Navbar } from "./views/components";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/films" component={Films} />
					<Route exact path="/:id" component={Person} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomePage from "./component/Home.page";
import RQSuperHeroPage from "./component/RQSuperHeroes.page";
import SuperHeroesPage  from "./component/SuperHeroes.page";
import {QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtoolsPanel} from "react-query/devtools";

function App() {
  const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/super-heroes">Traditional Super Heroes</Link>
							</li>
							<li>
								<Link to="/rq-super-heroes">RQ Super Heroes</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/super-heroes" element={<SuperHeroesPage />} />
						<Route path="/rq-super-heroes" element={<RQSuperHeroPage />} />
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</Router>
			{/* <ReactQueryDevtoolsPanel initialIsOpen={false} position='bottom-right'  /> */}
		</QueryClientProvider>
	);
}

export default App;

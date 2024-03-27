import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu/MainMenu';
import GameBoyTheme from './components/GameBoyTheme';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={
						<GameBoyTheme>
							<MainMenu />
						</GameBoyTheme>
					}
				/>
				<Route
					path='/main-menu'
					element={
						<GameBoyTheme>
							<MainMenu />
						</GameBoyTheme>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

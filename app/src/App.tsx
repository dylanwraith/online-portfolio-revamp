import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu/MainMenu';
import GameBoyTheme from './components/GameBoyTheme';
import ContactMe from './pages/ContactMe/ContactMe';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
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
					<Route
						path='/contact'
						element={
							<GameBoyTheme>
								<ContactMe />
							</GameBoyTheme>
						}
					/>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

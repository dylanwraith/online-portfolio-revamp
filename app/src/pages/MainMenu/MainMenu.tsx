import { FC, useState } from 'react';
import MainMenuButton from './components/MainMenuButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainMenu: FC<{}> = () => {
	const funModeMenuSelection = [true, false, false, false, false];
	const resumeMenuSelection = [false, true, false, false, false];
	const projectsMenuSelection = [false, false, true, false, false];
	const aboutMeMenuSelection = [false, false, false, true, false];
	const contactMeMenuSelection = [false, false, false, false, true];

	const [menuSelection, setMenuSelection] = useState(funModeMenuSelection);

	const MenuGrid = styled.menu({
		display: 'grid',
		alignContent: 'center',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(5, 1fr)',
		padding: '0',
		width: '100%',
		height: '100%',
		margin: '0',
		listStyle: 'none',
	});

	const MenuWrapper = styled.div({
		width: '90%',
		height: '90%',
		border: '2.3vmin solid transparent',
		borderImage: 'url(/menu-border.svg) 100',
		whiteSpace: 'pre-wrap',
	});

	return (
		<>
			<MenuWrapper>
				<MenuGrid>
					<Link to={'/battle'}>
						<MainMenuButton
							label='FUN MODE'
							isSelected={menuSelection[0]}
							isFunMode={true}
							onMouseEnter={() => setMenuSelection(funModeMenuSelection)}
						/>
					</Link>
					<a href='/resume.pdf' target='_blank'>
						<MainMenuButton
							label='RESUME'
							isSelected={menuSelection[1]}
							isFunMode={false}
							onMouseEnter={() => setMenuSelection(resumeMenuSelection)}
						/>
					</a>
					<a href='https://github.com/dylanwraith' target='_blank'>
						<MainMenuButton
							label='GITHUB'
							isSelected={menuSelection[2]}
							isFunMode={false}
							onMouseEnter={() => setMenuSelection(projectsMenuSelection)}
						/>
					</a>
					<Link to={'/about-me'}>
						<MainMenuButton
							label='ABOUT ME'
							isSelected={menuSelection[3]}
							isFunMode={false}
							onMouseEnter={() => setMenuSelection(aboutMeMenuSelection)}
						/>
					</Link>
					<Link to={'/contact'}>
						<MainMenuButton
							label='CONTACT'
							isSelected={menuSelection[4]}
							isFunMode={false}
							onMouseEnter={() => setMenuSelection(contactMeMenuSelection)}
						/>
					</Link>
				</MenuGrid>
			</MenuWrapper>
		</>
	);
};

export default MainMenu;

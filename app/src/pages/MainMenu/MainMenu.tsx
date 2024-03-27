import { FC, useState } from 'react';
import menuBorder from './assets/menu-border.svg';
import MainMenuButton from './components/MainMenuButton';
import styled from 'styled-components';
import NonSelectableImage from '../../components/non-selectable-image';

const MainMenu: FC<{}> = () => {
	const funModeMenuSelection = [true, false, false, false, false];
	const resumeMenuSelection = [false, true, false, false, false];
	const projectsMenuSelection = [false, false, true, false, false];
	const aboutMeMenuSelection = [false, false, false, true, false];
	const contactMeMenuSelection = [false, false, false, false, true];

	const [menuSelection, setMenuSelection] = useState(funModeMenuSelection);

	const MenuBorder = styled(NonSelectableImage)({
		position: 'absolute',
		height: '100%',
		width: '100%',
	});

	const MenuGrid = styled.menu({
		display: 'grid',
		alignContent: 'center',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(5, 1fr)',
		fontSize: 'x-large',
		padding: '5% 5% 5% 5%',
		width: '90%',
		height: '90%',
		margin: '0',
		listStyle: 'none',
	});

	return (
		<>
			<MenuBorder src={menuBorder} />
			<MenuGrid>
				<MainMenuButton
					label='FUN MODE'
					isSelected={menuSelection[0]}
					isFunMode={true}
					onMouseEnter={() => setMenuSelection(funModeMenuSelection)}
				/>
				<MainMenuButton
					label='RESUME'
					isSelected={menuSelection[1]}
					isFunMode={false}
					onMouseEnter={() => setMenuSelection(resumeMenuSelection)}
				/>
				<MainMenuButton
					label='PROJECTS'
					isSelected={menuSelection[2]}
					isFunMode={false}
					onMouseEnter={() => setMenuSelection(projectsMenuSelection)}
				/>
				<MainMenuButton
					label='ABOUT ME'
					isSelected={menuSelection[3]}
					isFunMode={false}
					onMouseEnter={() => setMenuSelection(aboutMeMenuSelection)}
				/>
				<MainMenuButton
					label='CONTACT'
					isSelected={menuSelection[4]}
					isFunMode={false}
					onMouseEnter={() => setMenuSelection(contactMeMenuSelection)}
				/>
			</MenuGrid>
		</>
	);
};

export default MainMenu;

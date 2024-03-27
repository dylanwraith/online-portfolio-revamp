import styled from 'styled-components';
import gameboy from '../assets/gameboy.png';
import { FC } from 'react';
import NonSelectableImage from './non-selectable-image';

interface GameBoyThemeProps {
	children: React.ReactNode;
}

const MainGrid = styled.div({
	fontFamily: 'Pokemon Classic Regular',
	backgroundColor: 'grey',
	display: 'grid',
	gridTemplateColumns: '[screen-left-edge] 1fr [menu-left-edge] 80vmin [menu-right-edge] 1fr [screen-right-edge]',
	gridTemplateRows: '[screen-top-edge] 80vmin [menu-divider] 20vmin [screen-bottom-edge]',
});

const topDisplayBorderStyle = {
	gridColumnStart: 'menu-left-edge',
	gridRowStart: 'screen-top-edge',
	width: '100%',
};

const TopDisplayBorder = styled.div(topDisplayBorderStyle);
const GameBoyTopDisplay = styled(NonSelectableImage)(topDisplayBorderStyle);

const TopDisplayGrid = styled.div({
	width: '100%',
	height: '100%',
	display: 'grid',
	gridTemplateColumns:
		'[container-left-edge] 18.28% [display-left-edge] 62.81% [display-right-edge] 18.91% [container-right-edge]',
	gridTemplateRows:
		'[container-top-edge] 14.18% [display-top-edge] 57.09% [display-bottom-edge] 28.73% [container-bottom-edge]',
});

const TopDisplay = styled.div({
	gridColumnStart: 'display-left-edge',
	gridRowStart: 'display-top-edge',
	backgroundColor: 'white',
	height: '100%',
	position: 'relative',
});

const GameBoyTheme: FC<GameBoyThemeProps> = ({ children }: { children: React.ReactNode }) => {
	return (
		<MainGrid>
			<GameBoyTopDisplay src={gameboy} />
			<TopDisplayBorder>
				<TopDisplayGrid>
					<TopDisplay>{children}</TopDisplay>
				</TopDisplayGrid>
			</TopDisplayBorder>
		</MainGrid>
	);
};

export default GameBoyTheme;

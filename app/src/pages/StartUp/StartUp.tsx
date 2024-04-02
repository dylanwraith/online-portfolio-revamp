import { FC } from 'react';
import NonSelectableImage from '../../components/non-selectable-image';
import styled, { keyframes } from 'styled-components';
import background from './assets/start-up-background.gif';
import { Link } from 'react-router-dom';

const StackingDiv = styled.div({
	display: 'grid',
	height: '100%',
	width: '100%',
	justifyItems: 'center',
});

const Background = styled(NonSelectableImage)({
	gridColumnStart: '1',
	gridRowStart: '1',
	height: '100%',
	width: '100%',
	position: 'relative',
});

const flash = keyframes`
from { opacity: 1.0; }
50% { opacity: 0; }
to { opacity: 1.0; }
`;

const FlashLink = styled(Link)`
	animation: ${flash} 2s linear infinite;
`;

const StartLink = styled(FlashLink)({
	fontFamily: 'Pokemon Classic Regular',
	gridColumnStart: '1',
	gridRowStart: '1',
	zIndex: '2',
	height: '10%',
	marginTop: '75%',
	cursor: 'pointer',
	textDecoration: 'none',
	color: 'black',
});

const StartUp: FC<{}> = () => {
	return (
		<StackingDiv>
			<Background src={background} />
			<StartLink to={'/main-menu'}>Press Start</StartLink>
		</StackingDiv>
	);
};

export default StartUp;

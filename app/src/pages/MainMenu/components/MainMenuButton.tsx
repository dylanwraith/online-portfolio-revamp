import winky from '../assets/winky-pikachu.gif';
import selector from '../assets/menu-selector.svg';
import { FC } from 'react';
import styled from 'styled-components';
import NonSelectableImage from '../../../components/non-selectable-image';

interface MainMenuButtonProps {
	label: string;
	isSelected: boolean;
	isFunMode: boolean;
	onMouseEnter: React.MouseEventHandler<HTMLLIElement>;
}

const Winky = styled(NonSelectableImage)({
	position: 'absolute',
	top: '15%',
	height: '70%',
	left: '77%',
	cursor: 'pointer',
});

const Selector = styled(NonSelectableImage)({
	position: 'absolute',
	height: '40%',
	left: '15px',
	top: '30%',
});

const MainMenuButtonWrapper = styled.li({
	position: 'relative',
	height: '100%',
});

const MainMenuButtonStyled = styled.button({
	fontFamily: 'Pokemon Classic Regular',
	width: '100%',
	height: '100%',
	backgroundColor: 'transparent',
	borderWidth: '0',
	textAlign: 'left',
	cursor: 'pointer',
	textIndent: '15%',
	fontSize: '3vmin',
});

const MainMenuButton: FC<MainMenuButtonProps> = ({ label, isSelected, isFunMode, onMouseEnter }) => {
	return (
		<MainMenuButtonWrapper onMouseEnter={onMouseEnter}>
			<MainMenuButtonStyled>
				{label}
				{isFunMode && <Winky src={winky} />}
			</MainMenuButtonStyled>
			{isSelected && <Selector src={selector} />}
		</MainMenuButtonWrapper>
	);
};

export default MainMenuButton;

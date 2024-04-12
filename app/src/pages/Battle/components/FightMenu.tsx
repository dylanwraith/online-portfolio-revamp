import { FC } from 'react';
import styled from 'styled-components';

const MenuGrid = styled.div({
	border: '2vmin solid transparent',
	borderImage: 'url(/menu-border.svg) 100',
	width: '92%',
	height: '81%',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
});

const FightOption = styled.button({
	fontFamily: 'Pokemon Classic Regular',
	padding: '0',
	border: '0',
	cursor: 'pointer',
	fontSize: '2vmin',
	backgroundColor: 'transparent',
});

const RunOption = styled.button({
	fontFamily: 'Pokemon Classic Regular',
	padding: '0',
	border: '0',
	cursor: 'pointer',
	fontSize: '2vmin',
	backgroundColor: 'transparent',
});

const FightMenu: FC<{}> = () => {
	return (
		<MenuGrid>
			<FightOption>Fight</FightOption>
			<RunOption>Run</RunOption>
		</MenuGrid>
	);
};

export default FightMenu;

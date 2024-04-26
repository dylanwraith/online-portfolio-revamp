import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface FightMenuProps {
	handleFight: () => void;
}

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

const FightMenu: FC<FightMenuProps> = ({ handleFight }) => {
	const navigate = useNavigate();
	function run() {
		navigate('/main-menu');
	}

	return (
		<MenuGrid>
			<FightOption onClick={handleFight}>Fight</FightOption>
			<RunOption onClick={run}>Run</RunOption>
		</MenuGrid>
	);
};

export default FightMenu;

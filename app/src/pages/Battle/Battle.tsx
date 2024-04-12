import { FC } from 'react';
import styled from 'styled-components';
import NonSelectableImage from '../../components/non-selectable-image';
import cyndaquil from './assets/cyndaquil.svg';
import sentret from './assets/sentret.svg';
import opponentStats from './assets/fight_opponent_stats.png';
import fightMenu from './assets/fight_menu.png';
import SelfStats from './components/SelfStats';
import OpponentStats from './components/OpponentStats';
import FightMenu from './components/FightMenu';

const BattleGrid = styled.div({
	display: 'grid',
	gridTemplateColumns:
		'[left] 2fr [leftMenu] 6fr [leftOpStats] 8fr [leftMySprite] 48fr [rightMySprite] 8fr [leftMyStats] 16fr [rightOpStats] 29fr [leftOpSprite] 28fr [rightOpSprite] 6fr [rightMyStats] 6fr [rightMenu] 3fr [right]',
	gridTemplateRows:
		'[top] 8fr [topOpStats] 8fr [topOpSprite] 24fr [botOpStats] 20fr [topMySprite] 4fr [botOpSprite] 40fr [botMySprite] 3fr [topMenu] 44fr [botMenu] 9fr [bottom]',
	height: '100%',
});

const MySprite = styled(NonSelectableImage)({
	gridRowStart: 'topMySprite',
	gridRowEnd: 'botMySprite',
	gridColumnStart: 'leftMySprite',
	gridColumnEnd: 'rightMySprite',
	width: '100%',
});

const MyStatsWrapper = styled.div({
	gridRowStart: 'botOpSprite',
	gridRowEnd: 'botMySprite',
	gridColumnStart: 'leftMyStats',
	gridColumnEnd: 'rightMyStats',
});

const OpponentSprite = styled(NonSelectableImage)({
	gridRowStart: 'topOpSprite',
	gridRowEnd: 'botOpSprite',
	gridColumnStart: 'leftOpSprite',
	gridColumnEnd: 'rightOpSprite',
	height: '100%',
});

const OpponentStatsWrapper = styled.div({
	gridRowStart: 'topOpSprite',
	gridRowEnd: 'botOpStats',
	gridColumnStart: 'leftOpStats',
	gridColumnEnd: 'rightOpStats',
});

const FightMenuWrapper = styled.div({
	gridRowStart: 'topMenu',
	gridRowEnd: 'botMenu',
	gridColumnStart: 'leftMenu',
	gridColumnEnd: 'rightMenu',
});

const Battle: FC<{}> = () => {
	return (
		<BattleGrid>
			<OpponentStatsWrapper>
				<OpponentStats />
			</OpponentStatsWrapper>
			<OpponentSprite src={sentret} />

			<MyStatsWrapper>
				<SelfStats />
			</MyStatsWrapper>
			<MySprite src={cyndaquil} />

			<FightMenuWrapper>
				<FightMenu />{' '}
			</FightMenuWrapper>
		</BattleGrid>
	);
};

export default Battle;

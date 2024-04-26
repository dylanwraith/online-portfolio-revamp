import '../battle.css';
import { FC } from 'react';
import styled from 'styled-components';
import NonSelectableImage from '../../../components/non-selectable-image';
import cyndaquil from '../assets/cyndaquil.svg';
import sentret from '../assets/sentret.svg';
import SelfStats from './SelfStats';
import OpponentStats from './OpponentStats';
import FightMenu from './FightMenu';
import Pokemon from '../models/Pokemon';
import { animated } from '@react-spring/web';

interface BattleFieldProps {
	self: Pokemon;
	opponent: Pokemon;
	handleFight: () => void;
	battleFieldAnimation: any;
	selfSpriteAnimation: any;
	selfHealthBarAnimation: any;
	selfHealthBarColor: string;
	selfRemainingHealth: number;
	opponentSpriteAnimation: any;
	opponentHealthBarAnimation: any;
	opponentHealthBarColor: string;
}

const BattleGrid = styled.div({
	overflow: 'hidden',
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
	zIndex: '1',
});

const MyStatsWrapper = styled.div({
	gridRowStart: 'botOpSprite',
	gridRowEnd: 'botMySprite',
	gridColumnStart: 'leftMyStats',
	gridColumnEnd: 'rightMyStats',
	zIndex: '1',
});

const OpponentSprite = styled(NonSelectableImage)({
	gridRowStart: 'topOpSprite',
	gridRowEnd: 'botOpSprite',
	gridColumnStart: 'leftOpSprite',
	gridColumnEnd: 'rightOpSprite',
	height: '100%',
	zIndex: '1',
});

const SelfKnockOutCover = styled.div({
	backgroundColor: 'white',
	gridRowStart: 'topMenu',
	gridRowEnd: 'bottom',
	gridColumnStart: 'left',
	gridColumnEnd: 'right',
	zIndex: '2',
});

const OpponentKnockOutCover = styled.div({
	backgroundColor: 'white',
	gridRowStart: 'botOpSprite',
	gridRowEnd: 'bottom',
	gridColumnStart: 'leftOpSprite',
	gridColumnEnd: 'right',
	zIndex: '1',
});

const OpponentStatsWrapper = styled.div({
	gridRowStart: 'topOpSprite',
	gridRowEnd: 'botOpStats',
	gridColumnStart: 'leftOpStats',
	gridColumnEnd: 'rightOpStats',
	zIndex: '1',
});

const FightMenuWrapper = styled.div({
	gridRowStart: 'topMenu',
	gridRowEnd: 'botMenu',
	gridColumnStart: 'leftMenu',
	gridColumnEnd: 'rightMenu',
	zIndex: '2',
});

const BattleField: FC<BattleFieldProps> = ({
	self,
	opponent,
	handleFight,
	battleFieldAnimation,
	selfSpriteAnimation,
	selfHealthBarAnimation,
	selfHealthBarColor,
	selfRemainingHealth,
	opponentSpriteAnimation,
	opponentHealthBarAnimation,
	opponentHealthBarColor,
}) => {
	return (
		<BattleGrid as={animated.div} style={battleFieldAnimation}>
			<OpponentStatsWrapper>
				<OpponentStats
					name={opponent.name}
					level={opponent.level}
					healthBarColor={opponentHealthBarColor}
					gender={opponent.gender}
					animation={opponentHealthBarAnimation}
				/>
			</OpponentStatsWrapper>
			<OpponentSprite id='opponent' src={sentret} as={animated.img} style={opponentSpriteAnimation} />

			<SelfKnockOutCover />
			<OpponentKnockOutCover />

			<MyStatsWrapper>
				<SelfStats
					name={self.name}
					level={self.level}
					currentHealth={selfRemainingHealth}
					totalHealth={self.totalHealthPoints}
					totalExperiencePoints={self.totalExperiencePoints}
					requiredExperiencePoints={self.requiredExperiencePoints}
					gender={self.gender}
					healthBarColor={selfHealthBarColor}
					healthBarAnimation={selfHealthBarAnimation}
				/>
			</MyStatsWrapper>
			<MySprite src={cyndaquil} as={animated.img} style={selfSpriteAnimation} />

			<FightMenuWrapper>
				<FightMenu handleFight={handleFight} />
			</FightMenuWrapper>
		</BattleGrid>
	);
};

export default BattleField;

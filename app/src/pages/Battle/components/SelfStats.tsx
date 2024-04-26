import { FC } from 'react';
import styled from 'styled-components';
import NonSelectableImage from '../../../components/non-selectable-image';
import selfHealthAndXpMeters from '../assets/fight_self_meters.svg';
import { animated } from '@react-spring/web';

interface SelfStatsProps {
	name: string;
	level: number;
	totalHealth: number;
	currentHealth: number;
	gender: string;
	totalExperiencePoints: number;
	requiredExperiencePoints: number;
	healthBarColor: string;
	healthBarAnimation: any;
}

const SelfStatsGrid = styled.div({
	display: 'grid',
	gridTemplateRows:
		'[topName] 7fr [botName] 1fr [topGenLvl] 8fr [botGenLvl] 1fr [topHealthXp] 2fr [topHealthBar] 2fr [botHealthBar] 5fr [topHealthTot] 7fr [botHealthTot] 4fr [topXpBar] 2fr [botXpBar] 2fr [botHealthXp]',
	gridTemplateColumns:
		'[leftHealthXp] 8fr [leftXpBar] 7fr [leftHealthTot] 9fr [leftHealthBar] 17fr [leftGenLvl] 30fr [rightGenLvl] 1fr [rightHealthXpBar] 7fr [rightHealthXp]',
	width: '100%',
	height: '100%',
	fontSize: '2vmin',
	lineHeight: '2vmin',
	userSelect: 'none',
});

const Name = styled.div({
	gridRowStart: 'topName',
	gridRowEnd: 'botName',
	gridColumnStart: 'leftHealthXp',
	gridColumnEnd: 'rightHealthXp',
	textAlign: 'end',
});

const LevelAndGender = styled.div({
	gridRowStart: 'topGenLvl',
	gridRowEnd: 'botGenLvl',
	gridColumnStart: 'leftGenLvl',
	gridColumnEnd: 'rightGenLvl',
});

const HealthAndXpMeters = styled(NonSelectableImage)({
	gridRowStart: 'topHealthXp',
	gridRowEnd: 'botHealthXp',
	gridColumnStart: 'leftHealthXp',
	gridColumnEnd: 'rightHealthXp',
	width: '100%',
});

const HealthTotal = styled.div({
	gridRowStart: 'topHealthTot',
	gridRowEnd: 'botHealthTot',
	gridColumnStart: 'leftHealthTot',
	gridColumnEnd: 'rightGenLvl',
	textAlign: 'end',
	lineHeight: '1vmin',
});

const HealthBar = styled.div<{ color: string }>`
	grid-row-start: topHealthBar;
	grid-row-end: botHealthBar;
	grid-column-start: leftHealthBar;
	grid-column-end: rightHealthXpBar;
	background-color: ${(props) => props.color};
`;

const XpBar = styled.div({
	backgroundColor: 'deepskyblue',
	float: 'right',
	height: '100%',
});

const XpBarWrapper = styled.div({
	gridRowStart: 'topXpBar',
	gridRowEnd: 'botXpBar',
	gridColumnStart: 'leftXpBar',
	gridColumnEnd: 'rightHealthXpBar',
});

const SelfStats: FC<SelfStatsProps> = ({
	name,
	level,
	totalHealth,
	currentHealth,
	totalExperiencePoints,
	requiredExperiencePoints,
	gender,
	healthBarAnimation,
	healthBarColor,
}) => {
	const experiencePercentage = (totalExperiencePoints / requiredExperiencePoints) * 100;

	const xpBarStyles = {
		width: experiencePercentage + '%',
	};

	return (
		<SelfStatsGrid>
			<Name>{name}</Name>
			<LevelAndGender>
				:L{level}&nbsp;&nbsp;{gender}
			</LevelAndGender>
			<HealthAndXpMeters src={selfHealthAndXpMeters} />
			<HealthBar color={healthBarColor} as={animated.div} style={healthBarAnimation} />
			<HealthTotal>
				{currentHealth}/&nbsp; {totalHealth}&nbsp;&nbsp;&nbsp;
			</HealthTotal>
			<XpBarWrapper>
				<XpBar style={xpBarStyles} />
			</XpBarWrapper>
		</SelfStatsGrid>
	);
};

export default SelfStats;

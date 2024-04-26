import { FC } from 'react';
import styled from 'styled-components';
import NonSelectableImage from '../../../components/non-selectable-image';
import opponentMeter from '../assets/opponent_meter.svg';
import { animated, useSpring } from '@react-spring/web';

interface OpponentStatsProps {
	name: string;
	level: number;
	healthBarColor: string;
	gender: string;
	animation: any;
}

const SelfStatsGrid = styled.div({
	display: 'grid',
	gridTemplateRows: '[topName] 7fr [botName] 1fr [topGenLvl] 8fr [topMeter] 3fr [topBar] 2fr [botBar] 9fr [botMeter]',
	gridTemplateColumns: '[leftMeter] 25fr [leftBar] 18fr [leftGenLvl] 31fr [rightBar] 9fr [rightMeter]',
	width: '100%',
	height: '100%',
	fontSize: '2vmin',
	lineHeight: '2vmin',
	userSelect: 'none',
});

const Name = styled.div({
	gridRowStart: 'topName',
	gridRowEnd: 'botName',
	gridColumnStart: 'leftMeter',
	gridColumnEnd: 'rightMeter',
});

const LevelAndGender = styled.div({
	gridRowStart: 'topGenLvl',
	gridRowEnd: 'topMeter',
	gridColumnStart: 'leftGenLvl',
	gridColumnEnd: 'rightMeter',
});

const Meter = styled(NonSelectableImage)({
	gridRowStart: 'topMeter',
	gridRowEnd: 'botMeter',
	gridColumnStart: 'leftMeter',
	gridColumnEnd: 'rightMeter',
	width: '100%',
});

const HealthBar = styled.div<{ color: string }>`
	grid-row-start: topBar;
	grid-row-end: botBar;
	grid-column-start: leftBar;
	grid-column-end: rightBar;
	background-color: ${(props) => props.color};
`;

const OpponentStats: FC<OpponentStatsProps> = ({ name, level, healthBarColor, gender, animation }) => {
	return (
		<SelfStatsGrid>
			<Name>{name}</Name>
			<LevelAndGender>
				:L{level}&nbsp;&nbsp;{gender}
			</LevelAndGender>
			<Meter src={opponentMeter} />
			<HealthBar color={healthBarColor} as={animated.div} style={animation} id='opponent-health' />
		</SelfStatsGrid>
	);
};

export default OpponentStats;

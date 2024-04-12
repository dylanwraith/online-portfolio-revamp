import { FC } from 'react';
import styled from 'styled-components';
import NonSelectableImage from '../../../components/non-selectable-image';
import opponentMeter from '../assets/opponent_meter.svg';

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

const HealthBar = styled.div({
	gridRowStart: 'topBar',
	gridRowEnd: 'botBar',
	gridColumnStart: 'leftBar',
	gridColumnEnd: 'rightBar',
	backgroundColor: 'red',
	width: '20%',
});

const OpponentStats: FC<{}> = () => {
	return (
		<SelfStatsGrid>
			<Name>SENTRET</Name>
			<LevelAndGender>:L3&nbsp;&nbsp;♀</LevelAndGender>
			<Meter src={opponentMeter} />
			<HealthBar />
		</SelfStatsGrid>
	);
};

export default OpponentStats;

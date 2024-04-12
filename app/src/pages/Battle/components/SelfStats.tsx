import { FC } from 'react';
import styled from 'styled-components';
import NonSelectableImage from '../../../components/non-selectable-image';
import selfHealthAndXpMeters from '../assets/fight_self_meters.svg';

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

const HealthBar = styled.div({
	gridRowStart: 'topHealthBar',
	gridRowEnd: 'botHealthBar',
	gridColumnStart: 'leftHealthBar',
	gridColumnEnd: 'rightHealthXpBar',
	backgroundColor: 'orange',
	width: '40%',
});

const HealthTotal = styled.div({
	gridRowStart: 'topHealthTot',
	gridRowEnd: 'botHealthTot',
	gridColumnStart: 'leftHealthTot',
	gridColumnEnd: 'rightGenLvl',
	textAlign: 'end',
	lineHeight: '1vmin',
});

const XpBarWrapper = styled.div({
	gridRowStart: 'topXpBar',
	gridRowEnd: 'botXpBar',
	gridColumnStart: 'leftXpBar',
	gridColumnEnd: 'rightHealthXpBar',
});

const XpBar = styled.div({
	backgroundColor: 'deepskyblue',
	float: 'right',
	width: '80%',
	height: '100%',
});

const SelfStats: FC<{}> = () => {
	return (
		<SelfStatsGrid>
			<Name>CYNDAQUIL</Name>
			<LevelAndGender>:L5&nbsp;&nbsp;♂</LevelAndGender>
			<HealthAndXpMeters src={selfHealthAndXpMeters} />
			<HealthBar />
			<HealthTotal>5/&nbsp; 12&nbsp;&nbsp;&nbsp;</HealthTotal>
			<XpBarWrapper>
				<XpBar />
			</XpBarWrapper>
		</SelfStatsGrid>
	);
};

export default SelfStats;

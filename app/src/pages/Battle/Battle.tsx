import { Lookup, SpringRef, useSpring, useSpringRef } from '@react-spring/web';
import { FC, useState } from 'react';
import BattleField from './components/BattleField';
import Pokemon from './models/Pokemon';
import BattleEngine from './utils/BattleEngine';
import BattleManager from './utils/BattleManager';

function useNewAnimation(animationManager: SpringRef<Lookup<any>>) {
	return useSpring({ opacity: '100%', x: '0vmin', y: '0vmin', width: '100%', ref: animationManager });
}

const Battle: FC<{}> = () => {
	const self: Pokemon = new Pokemon('CYNDAQUIL', '♂', 15, 15, 0, 10, 5, 4, './assets/cyndaquil.svg');
	const opponent: Pokemon = new Pokemon('SENTRET', '♀', 10, 10, 0, 0, 3, 3, './assets/sentret.svg');
	const battleEngine: BattleEngine = new BattleEngine();

	const battleFieldAnimationManager = useSpringRef();
	const battleFieldAnimation = useNewAnimation(battleFieldAnimationManager);

	const selfSpriteAnimationManager = useSpringRef();
	const selfSpriteAnimation = useNewAnimation(selfSpriteAnimationManager);

	const selfHealthBarAnimationManager = useSpringRef();
	const selfHealthBarAnimation = useNewAnimation(selfHealthBarAnimationManager);
	const [selfHealthBarColor, setSelfHealthBarColor] = useState('limegreen');
	const [selfRemainingHealth, setSelfRemainingHealth] = useState(self.totalHealthPoints);

	const opponentSpriteAnimationManager = useSpringRef();
	const opponentSpriteAnimation = useNewAnimation(opponentSpriteAnimationManager);

	const opponentHealthBarAnimationManager = useSpringRef();
	const opponentHealthBarAnimation = useNewAnimation(opponentHealthBarAnimationManager);
	const [opponentHealthBarColor, setOpponentHealthBarColor] = useState('limegreen');
	const [opponentRemainingHealth, setOpponentRemainingHealth] = useState(opponent.totalHealthPoints);

	const battleManager: BattleManager = new BattleManager(
		battleFieldAnimationManager,
		selfSpriteAnimationManager,
		selfHealthBarAnimationManager,
		setSelfHealthBarColor,
		self.totalHealthPoints,
		selfRemainingHealth,
		setSelfRemainingHealth,
		opponentSpriteAnimationManager,
		opponentHealthBarAnimationManager,
		setOpponentHealthBarColor,
		opponent.totalHealthPoints,
		opponentRemainingHealth,
		setOpponentRemainingHealth,
		self,
		opponent
	);

	function handleFight() {
		battleEngine.attack(battleManager);
	}

	return (
		<BattleField
			self={self}
			opponent={opponent}
			handleFight={handleFight}
			battleFieldAnimation={battleFieldAnimation}
			selfSpriteAnimation={selfSpriteAnimation}
			selfHealthBarAnimation={selfHealthBarAnimation}
			selfHealthBarColor={selfHealthBarColor}
			selfRemainingHealth={selfRemainingHealth}
			opponentSpriteAnimation={opponentSpriteAnimation}
			opponentHealthBarAnimation={opponentHealthBarAnimation}
			opponentHealthBarColor={opponentHealthBarColor}
		/>
	);
};

export default Battle;

import { Lookup, SpringRef } from '@react-spring/web';
import BattleManager from '../BattleManager';
import BattleAnimationStyles from './BattleAnimationStyles';

class BattleAnimations {
	battleAnimationStyles: BattleAnimationStyles = new BattleAnimationStyles();

	selfTackle = (battleManager: BattleManager, followUpAnimation?: () => void) => {
		battleManager.selfSpriteAnimationManager.update({
			...this.battleAnimationStyles.selfTackleAnimationStyle(),
			onRest: () => {
				followUpAnimation && followUpAnimation();
			},
		});
		battleManager.selfSpriteAnimationManager.start();
	};

	opponentTackle = (battleManager: BattleManager, followUpAnimation?: () => void) => {
		battleManager.opponentSpriteAnimationManager.update({
			...this.battleAnimationStyles.opponentTackleAnimationStyle(),
			onRest: () => {
				followUpAnimation && followUpAnimation();
			},
		});
		battleManager.opponentSpriteAnimationManager.start();
	};

	selfHit = (battleManager: BattleManager, followUpAnimation?: () => void) => {
		battleManager.battleFieldAnimationManager.update({
			...this.battleAnimationStyles.selfHitAnimationStyle(),
			onRest: () => {
				followUpAnimation && followUpAnimation();
			},
		});
		battleManager.battleFieldAnimationManager.start();
	};

	opponentHit = (battleManager: BattleManager, followUpAnimation?: () => void) => {
		battleManager.opponentSpriteAnimationManager.update({
			...this.battleAnimationStyles.opponentHitAnimationStyle(),
			onRest: () => {
				followUpAnimation && followUpAnimation();
			},
		});
		battleManager.opponentSpriteAnimationManager.start();
	};

	selfFaint = (battleManager: BattleManager) => {
		battleManager.selfSpriteAnimationManager.update(this.battleAnimationStyles.faintAnimationStyle());
		battleManager.selfSpriteAnimationManager.start();
	};

	opponentFaint = (battleManager: BattleManager) => {
		battleManager.opponentSpriteAnimationManager.update(this.battleAnimationStyles.faintAnimationStyle());
		battleManager.opponentSpriteAnimationManager.start();
	};

	selfHealthBarDeplete = (battleManager: BattleManager, followUpAnimation?: () => void) => {
		this.healthBarDeplete(
			battleManager.selfHealthBarAnimationManager,
			battleManager.setSelfHealthBarColor,
			battleManager.selfTotalHealth,
			battleManager.selfRemainingHealth,
			battleManager.selfRemainingHealth - 3,
			battleManager.setSelfRemainingHealth,
			followUpAnimation
		);
	};

	opponentHealthBarDeplete = (battleManager: BattleManager, followUpAnimation?: () => void) => {
		this.healthBarDeplete(
			battleManager.opponentHealthBarAnimationManager,
			battleManager.setOpponentHealthBarColor,
			battleManager.opponentTotalHealth,
			battleManager.opponentRemainingHealth,
			battleManager.opponentRemainingHealth - 4,
			battleManager.setOpponentRemainingHealth,
			followUpAnimation
		);
	};

	private healthBarDeplete(
		animationManager: SpringRef<Lookup<any>>,
		setHealthBarColor: (value: React.SetStateAction<string>) => void,
		totalHealth: number,
		remainingHealth: number,
		calculatedRemainingHealth: number,
		setRemainingHealth: (value: React.SetStateAction<number>) => void,
		followUpAnimation?: () => void
	) {
		animationManager.update({
			...this.battleAnimationStyles.healthBarHitAnimationStyle(calculatedRemainingHealth, totalHealth),
			onChange: (result) => {
				if (parseFloat(result.value.width) < 30) setHealthBarColor('red');
				else if (parseFloat(result.value.width) < 50) setHealthBarColor('orange');
				else setHealthBarColor('limegreen');
				const healthBarRemainingHealth = Math.ceil((parseFloat(result.value.width) / 100) * totalHealth);
				if (remainingHealth > healthBarRemainingHealth) setRemainingHealth(healthBarRemainingHealth);
			},
			onRest: () => {
				followUpAnimation && followUpAnimation();
			},
		});
		animationManager.start();
	}
}

export default BattleAnimations;

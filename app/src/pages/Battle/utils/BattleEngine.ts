import BattleAnimationChains from './animations/BattleAnimationChains';
import BattleManager from './BattleManager';

class BattleEngine {
	battleAnimationChains: BattleAnimationChains = new BattleAnimationChains();

	attack = (battleManager: BattleManager) => {
		const selfCalculatedRemainingHealth = battleManager.selfRemainingHealth - battleManager.opponent.attackPower;
		const opponentCalculatedRemainingHealth = battleManager.opponentRemainingHealth - battleManager.self.attackPower;

		if (this.isSelfFirstToAttack()) {
			if (opponentCalculatedRemainingHealth <= 0) {
				this.battleAnimationChains.selfAttackOpponentFaint(battleManager);
			} else if (selfCalculatedRemainingHealth <= 0) {
				this.battleAnimationChains.selfAttackOpponentAttackSelfFaint(battleManager);
			} else {
				this.battleAnimationChains.selfAttackOpponentAttack(battleManager);
			}
		} else {
			if (selfCalculatedRemainingHealth <= 0) {
				this.battleAnimationChains.opponentAttackSelfFaint(battleManager);
			} else if (opponentCalculatedRemainingHealth <= 0) {
				this.battleAnimationChains.opponentAttackSelfAttackOpponentFaint(battleManager);
			} else {
				this.battleAnimationChains.opponentAttackSelfAttack(battleManager);
			}
		}
	};

	private isSelfFirstToAttack = () => {
		return Math.random() < 0.5;
	};
}

export default BattleEngine;

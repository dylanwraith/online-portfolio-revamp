import BattleAnimations from './BattleAnimations';
import BattleManager from '../BattleManager';

class BattleAnimationChains {
	battleAnimations: BattleAnimations = new BattleAnimations();

	/**
	 * Chain animation for displaying self attacking, then opponent attacking.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 */
	selfAttackOpponentAttack = (battleManager: BattleManager) => {
		this.chain6(
			battleManager,
			this.battleAnimations.selfTackle,
			this.battleAnimations.opponentHit,
			this.battleAnimations.opponentHealthBarDeplete,
			this.battleAnimations.opponentTackle,
			this.battleAnimations.selfHit,
			this.battleAnimations.selfHealthBarDeplete
		);
	};

	/**
	 * Chain animation for displaying self attacking, then opponent fainting.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 */
	selfAttackOpponentFaint = (battleManager: BattleManager) => {
		this.chain4(
			battleManager,
			this.battleAnimations.selfTackle,
			this.battleAnimations.opponentHit,
			this.battleAnimations.opponentHealthBarDeplete,
			this.battleAnimations.opponentFaint
		);
	};

	/**
	 * Chain animation for displaying self attacking, then opponent attacking, then self fainting.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 */
	selfAttackOpponentAttackSelfFaint = (battleManager: BattleManager) => {
		this.chain7(
			battleManager,
			this.battleAnimations.selfTackle,
			this.battleAnimations.opponentHit,
			this.battleAnimations.opponentHealthBarDeplete,
			this.battleAnimations.opponentTackle,
			this.battleAnimations.selfHit,
			this.battleAnimations.selfHealthBarDeplete,
			this.battleAnimations.selfFaint
		);
	};

	/**
	 * Chain animation for displaying opponent attacking, then  self attacking.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 */
	opponentAttackSelfAttack = (battleManager: BattleManager) => {
		this.chain6(
			battleManager,
			this.battleAnimations.opponentTackle,
			this.battleAnimations.selfHit,
			this.battleAnimations.selfHealthBarDeplete,
			this.battleAnimations.selfTackle,
			this.battleAnimations.opponentHit,
			this.battleAnimations.opponentHealthBarDeplete
		);
	};

	/**
	 * Chain animation for displaying opponent attacking, then self fainting.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 */
	opponentAttackSelfFaint = (battleManager: BattleManager) => {
		this.chain4(
			battleManager,
			this.battleAnimations.opponentTackle,
			this.battleAnimations.selfHit,
			this.battleAnimations.selfHealthBarDeplete,
			this.battleAnimations.selfFaint
		);
	};

	/**
	 * Chain animation for displaying opponent attacking, then self attacking, then opponent fainting.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 */
	opponentAttackSelfAttackOpponentFaint = (battleManager: BattleManager) => {
		this.chain7(
			battleManager,
			this.battleAnimations.opponentTackle,
			this.battleAnimations.selfHit,
			this.battleAnimations.selfHealthBarDeplete,
			this.battleAnimations.selfTackle,
			this.battleAnimations.opponentHit,
			this.battleAnimations.opponentHealthBarDeplete,
			this.battleAnimations.opponentFaint
		);
	};

	/**
	 * Chains together 4 animations.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 * @param animation1 1st animation to execute
	 * @param animation2 2nd animation to execute
	 * @param animation3 3rd animation to execute
	 * @param animation4 4th animation to execute
	 */
	private chain4 = (
		battleManager: BattleManager,
		animation1: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation2: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation3: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation4: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void
	): void => {
		animation1(battleManager, () => animation2(battleManager, () => animation3(battleManager, () => animation4(battleManager))));
	};

	/**
	 * Chains together 6 animations.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 * @param animation1 1st animation to execute
	 * @param animation2 2nd animation to execute
	 * @param animation3 3rd animation to execute
	 * @param animation4 4th animation to execute
	 * @param animation5 5th animation to execute
	 * @param animation6 6th animation to execute
	 */
	private chain6 = (
		battleManager: BattleManager,
		animation1: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation2: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation3: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation4: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation5: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation6: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void
	): void => {
		animation1(battleManager, () =>
			animation2(battleManager, () =>
				animation3(battleManager, () => animation4(battleManager, () => animation5(battleManager, () => animation6(battleManager))))
			)
		);
	};

	/**
	 * Chains together 7 animations.
	 *
	 * @param battleManager Battle Manager used to handle updates to battle state
	 * @param animation1 1st animation to execute
	 * @param animation2 2nd animation to execute
	 * @param animation3 3rd animation to execute
	 * @param animation4 4th animation to execute
	 * @param animation5 5th animation to execute
	 * @param animation6 6th animation to execute
	 * @param animation7 7th animation to execute
	 */
	private chain7 = (
		battleManager: BattleManager,
		animation1: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation2: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation3: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation4: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation5: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation6: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void,
		animation7: (battleManager: BattleManager, followUpAnimation?: (() => void) | undefined) => void
	): void => {
		animation1(battleManager, () =>
			animation2(battleManager, () =>
				animation3(battleManager, () =>
					animation4(battleManager, () => animation5(battleManager, () => animation6(battleManager, () => animation7(battleManager))))
				)
			)
		);
	};
}

export default BattleAnimationChains;

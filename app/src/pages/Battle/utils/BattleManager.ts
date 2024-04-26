import { Lookup, SpringRef } from '@react-spring/web';
import Pokemon from '../models/Pokemon';

class BattleManager {
	battleFieldAnimationManager: SpringRef<Lookup<any>>;
	selfSpriteAnimationManager: SpringRef<Lookup<any>>;
	selfHealthBarAnimationManager: SpringRef<Lookup<any>>;
	setSelfHealthBarColor: (value: React.SetStateAction<string>) => void;
	selfTotalHealth: number;
	selfRemainingHealth: number;
	setSelfRemainingHealth: (value: React.SetStateAction<number>) => void;
	opponentSpriteAnimationManager: SpringRef<Lookup<any>>;
	opponentHealthBarAnimationManager: SpringRef<Lookup<any>>;
	setOpponentHealthBarColor: (value: React.SetStateAction<string>) => void;
	opponentTotalHealth: number;
	opponentRemainingHealth: number;
	setOpponentRemainingHealth: (value: React.SetStateAction<number>) => void;
	self: Pokemon;
	opponent: Pokemon;

	constructor(
		battleFieldAnimationManager: SpringRef<Lookup<any>>,
		selfSpriteAnimationManager: SpringRef<Lookup<any>>,
		selfHealthBarAnimationManager: SpringRef<Lookup<any>>,
		setSelfHealthBarColor: (value: React.SetStateAction<string>) => void,
		selfTotalHealth: number,
		selfRemainingHealth: number,
		setSelfRemainingHealth: (value: React.SetStateAction<number>) => void,
		opponentSpriteAnimationManager: SpringRef<Lookup<any>>,
		opponentHealthBarAnimationManager: SpringRef<Lookup<any>>,
		setOpponentHealthBarColor: (value: React.SetStateAction<string>) => void,
		opponentTotalHealth: number,
		opponentRemainingHealth: number,
		setOpponentRemainingHealth: (value: React.SetStateAction<number>) => void,
		self: Pokemon,
		opponent: Pokemon
	) {
		this.battleFieldAnimationManager = battleFieldAnimationManager;
		this.selfSpriteAnimationManager = selfSpriteAnimationManager;
		this.selfHealthBarAnimationManager = selfHealthBarAnimationManager;
		this.setSelfHealthBarColor = setSelfHealthBarColor;
		this.selfTotalHealth = selfTotalHealth;
		this.selfRemainingHealth = selfRemainingHealth;
		this.setSelfRemainingHealth = setSelfRemainingHealth;
		this.opponentSpriteAnimationManager = opponentSpriteAnimationManager;
		this.opponentHealthBarAnimationManager = opponentHealthBarAnimationManager;
		this.setOpponentHealthBarColor = setOpponentHealthBarColor;
		this.opponentTotalHealth = opponentTotalHealth;
		this.opponentRemainingHealth = opponentRemainingHealth;
		this.setOpponentRemainingHealth = setOpponentRemainingHealth;
		this.self = self;
		this.opponent = opponent;
	}
}

export default BattleManager;

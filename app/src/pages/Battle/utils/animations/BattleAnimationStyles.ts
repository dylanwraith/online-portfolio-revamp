class BattleAnimationStyles {
	public selfTackleAnimationStyle = (followUpAnimation?: () => void) => {
		return {
			...this.baseAnimationStyle(followUpAnimation),
			from: { x: '0vmin' },
			to: [{ x: '3vmin' }, { x: '0vmin' }],
			config: { duration: 1000 / 6 },
		};
	};

	public opponentTackleAnimationStyle = (followUpAnimation?: () => void) => {
		return {
			...this.baseAnimationStyle(followUpAnimation),
			from: { x: '0vmin' },
			to: [{ x: '-3vmin' }, { x: '0vmin' }],
			config: { duration: 1000 / 6 },
		};
	};

	public selfHitAnimationStyle = (followUpAnimation?: () => void) => {
		return {
			...this.baseAnimationStyle(followUpAnimation),
			from: { y: '0vmin' },
			to: [{ y: '1vmin' }, { y: '0vmin' }, { y: '1vmin' }, { y: '0vmin' }, { y: '1vmin' }, { y: '0vmin' }],
			config: { duration: 1000 / 10 },
		};
	};

	public opponentHitAnimationStyle = (followUpAnimation?: () => void) => {
		return {
			...this.baseAnimationStyle(followUpAnimation),
			from: { opacity: '100%' },
			to: [
				{ opacity: '0%' },
				{ opacity: '100%' },
				{ opacity: '0%' },
				{ opacity: '100%' },
				{ opacity: '0%' },
				{ opacity: '100%' },
				{ opacity: '0%' },
				{ opacity: '100%' },
				{ opacity: '0%' },
				{ opacity: '100%' },
				{ opacity: '0%' },
				{ opacity: '100%' },
				{ opacity: '0%' },
				{ opacity: '100%' },
			],
			config: { duration: 1000 / 14 },
		};
	};

	public healthBarHitAnimationStyle = (remainingHealth: number, totalHealth: number, followUpAnimation?: () => void) => {
		return {
			...this.baseAnimationStyle(followUpAnimation),
			width: (remainingHealth / totalHealth) * 100 + '%',
			config: { duration: 1000 },
		};
	};

	public faintAnimationStyle = () => {
		return {
			...this.baseAnimationStyle,
			y: '20vmin',
		};
	};

	private baseAnimationStyle = (followUpAnimation?: () => void) => {
		return {
			onRest: () => {
				followUpAnimation && followUpAnimation();
			},
		};
	};
}

export default BattleAnimationStyles;

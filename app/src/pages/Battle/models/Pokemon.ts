class Pokemon {
	name: string;
	gender: string;
	totalHealthPoints: number;
	remainingHealthPoints: number;
	totalExperiencePoints: number;
	requiredExperiencePoints: number;
	level: number;
	attackPower: number;
	spritePath: string;

	constructor(
		name: string,
		gender: string,
		totalHealthPoints: number,
		remainingHealthPoints: number,
		totalExperiencePoints: number,
		requiredExperiencePoints: number,
		level: number,
		attackPower: number,
		spritePath: string
	) {
		this.name = name;
		this.gender = gender;
		this.totalHealthPoints = totalHealthPoints;
		this.remainingHealthPoints = remainingHealthPoints;
		this.totalExperiencePoints = totalExperiencePoints;
		this.requiredExperiencePoints = requiredExperiencePoints;
		this.level = level;
		this.attackPower = attackPower;
		this.spritePath = spritePath;
	}
}

export default Pokemon;

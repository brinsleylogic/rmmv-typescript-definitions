interface RPG_ItemBase
{
	description:string;
	iconIndex:number;
	id:number;
	name:string;
	note:string;
}

interface RPG_EquipBase extends RPG_ItemBase
{
	etypeId:number;
	params:number[];
	price:number;
	traits:Trait[];
}

interface RPG_UsableBase extends RPG_ItemBase
{
	animationId:number;
	damage:Damage;
	effects:Effect[];
	hitType:number;
	occasion:number;
	repeats:number;
	scope:UsageScope;
	successRate:number;
	tpGain:number;
}

declare enum UsageScope
{
	NONE,
	SINGLE_ENEMY,
	ALL_ENEMIES,
	ONE_RANDOM_ENEMIES,
	TWO_RANDOM_ENEMIES,
	THREE_RANDOM_ENEMIES,
	FOUR_RANDOM_ENEMIES,
	SINGLE_ALLY,
	ALL_ALLIES,
	SINGLE_DEAD_ALLY,
	ALL_DEAD_ALLIES,
	USER
}

interface Effect
{
    code:number;
    dataId:number;
    value1:number;
    value2:number;
}

interface DataArmor extends RPG_EquipBase
{
	atypeId:number;
}

interface DataItem extends RPG_UsableBase
{
	consumable:boolean;
	description:string;
	itypeId:number;
	meta:{};
	price:number;
	speed:number;
}

interface DataSkill extends RPG_UsableBase
{
	message1:string;
	message2:string;
	mpCost:number;
	requiredWtypeId1:number;
	requiredWtypeId2:number;
	stypeId:number;
	tpCost:number;
}

interface DataWeapon extends RPG_EquipBase
{
	animationId:number;
	wtypeId:number;
}
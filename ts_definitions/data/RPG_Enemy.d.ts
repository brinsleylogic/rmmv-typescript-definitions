interface DataEnemy
{
    actions:EnemyAction[];
	battlerHue:number;
	battlerName:string;
    dropItems:DropItem[];
	exp:number;
	gold:number;
	id:number;
	name:string;
	note:string;
	params:number[];
	traits:Trait[];
}

interface DropItem
{
    dataId:number;
    denominator:number;
    kind:number;
}

interface EnemyAction
{
    conditionParam1:number;
    conditionParam2:number;
    conditionType:number;
    rating:number;
    skillId:number;
}

interface DataTroop
{
	id:number;
	members:TroopMember[];
	name:string;
	pages:TroopEventPage[];
}

interface TroopCondition
{
	actorHp:number;
	actorId:number;
	actorValid:boolean;
	enemyHp:number;
	enemyIndex:number;
	enemyValid:boolean;
	switchId:number;
	turnA:number;
	turnB:number;
	turnEnding:boolean;
	turnValid:boolean;
}

interface TroopEventPage
{
	conditions:TroopCondition;
	list:EventItem[];
	span:number;
}

interface TroopMember
{
	enemyId:number;
	x:number;
	y:number;
	hidden:boolean;
}
interface DataActor
{
	battlerName:string;
	characterIndex:number;
	characterName:string;
	classId:number;
	equips:number[];
	faceIndex:number;
	faceName:string;
	initialLevel:number;
	maxLevel:number;
	name:string;
	nickname:string;
	note:string;
	profile:string;
	traits:Trait[];
}

interface DataClass
{
	expParams:number[];
	id:number;
	learnings:ClassSkill[];
	name:string;
	note:string;
	params:number[][];
	traits:Trait[];
}

interface ClassSkill
{
	level:number;
	skillId:number;
	note:string;
}
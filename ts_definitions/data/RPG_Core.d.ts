interface DataAnimation
{
	animation1Hue:number;
	animation1Name:string;
	animation2Hue:number;
	animation2Name:string;
	frames:number[][];
	id:number;
	name:string;
	position:number;
	timings:number[];
	
}

interface DataState
{
	autoRemovalTiming:number;
	chanceByDamage:number;
	iconIndex:number;
	id:number;
	maxTurns:number;
	message1:string;
	message2:string;
	message3:string;
	message4:string;
	minTurns:number;
	motion:number;
	name:string;
	note:string;
	overlay:number;
	priority:number;
	releaseByDamage:boolean;
	removeAtBattleEnd:boolean;
	removeByDamage:boolean;
	removeByRestriction:boolean;
	removeByWalking:boolean;
	restriction:number;
	stepsToRemove:number;
	traits:Trait[];
	
}

interface DataTileset
{
	flags:number[];
	id:number;
	mode:number;
	name:string;
	note:string;
	tilesetNames:string[];
	
}

interface DataPlugin
{
	name:string;
	description:string;
	parameters:{ [s:string]: string };
	status:boolean;
}

interface Trait
{
    code:number;
    dataId:number;
    value:number;
}

interface Damage
{
    critical:boolean;
    elementId:number;
    formula:string;
    type:number;
    variance:number
}

declare enum HorizontalAlign
{
	LEFT,
	MIDDLE,
	RIGHT
}

declare enum VeritcalAlign
{
	TOP,
	MIDDLE,
	BOTTOM
}

declare enum Direction
{
	UP_LEFT = 1,
	UP = 2,
	UP_RIGHT = 3,
	LEFT = 4,
	RIGHT = 6,
	DOWN_LEFT = 7,
	DOWN = 8,
	DOWN_RIGHT = 9
}
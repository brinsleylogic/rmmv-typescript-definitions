interface DataSystem
{
	airship:DataVehicle;
	armorTypes:string[];
	attackMotions:AttackMotion[];
	battleBgm:BGM;
	battleback1Name:string;
	battleback2Name:string;
	battlerHue: 0;
	battlerName:string;
	boat:DataVehicle;
	currencyUnit:string,
	defeatMe:ME;
	editMapId:number;
	elements:string[];
	equipTypes:string[];
	gameTitle:string;
	gameoverMe:ME;
	locale:string;
	magicSkills:number[];
	menuCommands:boolean[]
	optDisplayTp:boolean;
	optDrawTitle:boolean;
	optExtraExp:boolean;
	optFloorDeath:boolean;
	optFollowers:boolean;
	optSideView:boolean;
	optSlipDeath:boolean;
	optTransparent:boolean;
	partyMembers:number[]
	ship:DataVehicle;
	skillTypes:string[];
	sounds:SE[];
	startMapId: 1,
	startX:number;
	startY:number;
	switches:string[];
	terms:LangLookup;
	testBattlers:DataActor[];
	testTroopId:number;
	title1Name:string;
	title2Name:string,
	titleBgm:BGM
	variables:string[]
	versionId:number,
	victoryMe:ME;
	weaponTypes:string[];
	windowTone:number[];
}

interface DataVehicle
{
	bgm:BGM;
	characterIndex:number;
	characterName:string,
	startMapId:number;
	startX:number;
	startY:number;
}

interface AttackMotion
{
	type:number;
	weaponImageId:number
}

interface LangLookup
{
	basic:string[];
	commands:string[];
	params:string[];
	messages: { [s:string]: string }
}
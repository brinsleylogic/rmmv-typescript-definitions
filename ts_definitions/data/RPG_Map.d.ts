interface DataMap
{
	autoplayBgm:boolean;
	autoplayBgs:boolean;
	battleback1Name:string;
	battleback2Name:string;
	bgm:BGM;
	bgs:BGS;
	data:number[];
	disableDashing:boolean;
	displayName:string;
	encounterList:number[];
	encounterStep:number;
	events:MapEvent[];
	height:number;
	meta:{};
	note:string;
	parallaxLoopX:boolean;
	parallaxLoopY:boolean;
	parallaxName:string;
	parallaxShow:boolean;
	parallaxSx:number;
	parallaxSy:number;
	scrollType:number;
	specifyBattleback:boolean;
	tilesetId:number;
	width:number;
}

interface DataMapInfo
{
	expanded:boolean;
	id:number;
	name:string;
	order:number;
	parentId:number;
	scrollX:number;
	scrollY:number;
}

interface MapEvent
{
	id:string,
	name:string,
	note:string,
	pages:MapEventPage[];
	x:number;
	y:number;
}

interface MapEventConditions
{
	actorId:number;
	actorValid:boolean;
	itemId:number;
	itemValid:boolean;
	selfSwitchCh:string;
	selfSwitchValid:boolean;
	switch1Id:number;
	switch1Valid:boolean;
	switch2Id:number;
	switch2Valid:boolean;
	variableId:number;
	variableValid:boolean;
	variableValue:number
}

interface MapEventImage
{
	characterIndex:number;
	characterName:string;
	direction:number;
	pattern:number;
	tileId:number
}

interface MapEventPage
{
	conditions:MapEventConditions;
	directionFix:boolean;
	image:MapEventImage;
	list:EventItem[]
	moveFrequency:number;
	moveRoute:MoveRoute;
	moveSpeed:number;
	moveType:number;
	priorityType:number;
	stepAnime:boolean;
	through:boolean;
	trigger:number;
	walkAnime:boolean;
}

interface MoveRoute
{
	list:EventItem[];
	repeat:boolean;
	skippable:boolean;
	wait:boolean;
}
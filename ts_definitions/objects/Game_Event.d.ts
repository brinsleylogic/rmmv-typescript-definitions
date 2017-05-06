//-----------------------------------------------------------------------------
// Game_Event
//
// The game object class for an event. It contains functionality for event page
// switching and running parallel process events.

declare class Game_Event extends Game_Character
{
	protected _moveType:number;
	protected _trigger:number;
	protected _starting:boolean;
	protected _erased:boolean;
	protected _pageIndex:number;
	protected _originalPattern:number;
	protected _originalDirection:number;
	protected _prelockDirection:number;
	protected _locked:boolean;
	protected _mapId:number;
	protected _eventId:number;
	
	public constructor(mapId:number, eventId:number);

	public eventId():number;
	public event():MapEvent;

	public page():MapEventPage;
	public list():EventItem[];

	public isCollidedWithCharacters(x:number, y:number):boolean;
	public isCollidedWithEvents(x:number, y:number):boolean;
	public isCollidedWithPlayerCharacters(x:number, y:number):boolean;

	public lock():void;
	public unlock():void;

	public updateStop():void;
	public updateSelfMovement():void;

	public stopCountThreshold():number;

	public moveTypeRandom():void;
	public moveTypeTowardPlayer():void;
	public isNearThePlayer():boolean;

	public moveTypeCustom():void;

	public isStarting():boolean;
	public clearStartingFlag():void;

	public isTriggerIn(triggers:number[]):boolean;

	public start():void;
	public erase():void;
	public refresh():void;

	public findProperPageIndex():number;

	public meetsConditions(page:MapEventPage):boolean;

	public setupPage():void;
	public clearPageSettings():void;
	public setupPageSettings():void;

	public checkEventTriggerAuto():void;

	public updateParallel():void;
}
//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage
// determination functions.

declare class Game_Map
{
	protected _interpreter:Game_Interpreter;
	protected _mapId:number;
	protected _tilesetId:number;
	protected _events:Game_Event[];
	protected _commonEvents:Game_CommonEvent[];
	protected _vehicles:Game_Vehicle[];
	protected _needsRefresh:boolean;
	protected _displayX:number;
	protected _displayY:number;
	protected _nameDisplay:boolean;
	protected _scrollDirection:number;
	protected _scrollRest:number;
	protected _scrollSpeed:number;
	protected _parallaxName:string;
	protected _parallaxZero:boolean;
	protected _parallaxLoopX:boolean;
	protected _parallaxLoopY:boolean;
	protected _parallaxSx:number;
	protected _parallaxSy:number;
	protected _parallaxX:number;
	protected _parallaxY:number;
	protected _battleback1Name:string;
	protected _battleback2Name:string;

	public constructor();

	public setup(mapId:number):void;

	public isEventRunning():boolean;

	public tileWidth():number;
	public tileHeight():number;

	public mapId():number;
	public tilesetId():number;

	public displayX():number;
	public displayY():number;

	public parallaxName():string;
	public battleback1Name():string;
	public battleback2Name():string;

	public requestRefresh(mapId:number):void;

	public isNameDisplayEnabled():boolean;
	public disableNameDisplay():void;
	public enableNameDisplay():void;

	public createVehicles():void;
	public refereshVehicles():void;
	public vehicles():Game_Vehicle[];
	public vehicle(type:string|number):Game_Vehicle;
	public boat():Game_Vehicle;
	public ship():Game_Vehicle;
	public airship():Game_Vehicle;

	public setupEvents():void;
	public events():Game_Event[];
	public event(eventId:number):Game_Event;
	public eraseEvent(eventId:number):void;
	public parallelCommonEvents():Game_CommonEvent[];

	public setupScroll():void;
	public setupParallax():void;
	public setupBattleback():void;
	public setDisplayPos(x:number, y:number):void;

	public parallaxOx():number;
	public parallaxOy():number;

	public tileset():DataTileset;
	public tilesetFlags():number[];

	public displayName():string;

	public width():number;
	public height():number;

	public data():number[];

	public isLoopHorizontal():boolean;
	public isLoopVertical():boolean;
	public isDashDisabled():boolean;

	public encounterList():number[];
	public encounterStep():number;

	public isOverworld():boolean;

	public screenTileX():number;
	public screenTileY():number;

	public adjustX(x:number):number;
	public adjustY(y:number):number;
	public roundX(x:number):number;
	public roundY(y:number):number;

	public xWithDirection(x:number, d:Direction):number;
	public yWithDirection(y:number, d:Direction):number;
	public roundXWithDirection(x:number, d:Direction):number;
	public roundYWithDirection(y:number, d:Direction):number;

	public deltaX(x1:number, x2:number):number;
	public deltaY(y1:number, y2:number):number;
	public distance(x1:number, y1:number, x2:number, y2:number):number;

	public canvasToMapX(x:number):number;
	public canvasToMapY(y:number):number;

	public autoplay():void;

	public refreshIfNeeded():void;
	public refresh():void;
	public refreshTileEvents():void;

	public eventsXy(x:number, y:number):Game_Event[];
	public eventsXyNt(x:number, y:number):Game_Event[];
	public tileEventsXy(x:number, y:number):Game_Event[];
	public eventIdXy(x:number, y:number):number;

	public scrollDown(distanc:number):void;
	public scrollLeft(distance:number):void;
	public scrollRight(distance:number):void;
	public scrollUp(distance:number):void;

	public isValid(x:number, y:number):boolean;
	public checkPassage(x:number, y:number, bit:number):boolean;

	public tileId(x:number, y:number, z:number):number;
	public layeredTiles(x:number, y:number):number[];
	public allTiles(x:number, y:number):number[];

	public autotileType(x:number, y:number, z:number):number;

	public isPassable(x:number, y:number, d:Direction):void;
	public isBoatPassable(x:number, y:number):void;
	public isShipPassable(x:number, y:number):void;
	public isAirshipLandOk(x:number, y:number):void;

	public checkLayeredTilesFlags(x:number, y:number, bit:number):boolean;

	public isLadder(x:number, y:number):boolean;
	public isBush(x:number, y:number):boolean;
	public isCounter(x:number, y:number):boolean;
	public isDamageFloor(x:number, y:number):boolean;

	public terrainTag(x:number, y:number):number;
	public regionId(x:number, y:number):number;

	public update(sceneActive:boolean):void;

	public isScrolling():boolean;
	public startScroll(direction:Direction, distance:number, speed:number):void;
	public updateScroll():void;
	public scrollDistance():number;
	public doScroll(direction:Direction, distance:number):void;

	public updateEvents():void;
	public updateVehicles():void;
	public updateParallax():void;

	public changeTileset(tilesetId:number):void;
	public changeBattleback(battleback1Name:string, battleback2Name:string):void;
	public changeParallax(name:string, loopX:number, loopY:number, sx:number, sy:number):void;

	public updateInterpreter():void;

	public unlockEvent(eventId:number):void;
	public setupStartingEvent():boolean;
	public setupTestEvent():boolean;
	public setupStartingMapEvent():boolean;
	public setupAutorunCommonEvent():boolean;
	public isAnyEventStarting():boolean;
}
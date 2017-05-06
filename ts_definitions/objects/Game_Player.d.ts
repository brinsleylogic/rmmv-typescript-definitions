//-----------------------------------------------------------------------------
// Game_Player
//
// The game object class for the player. It contains event starting
// determinants and map scrolling functions.

declare class Game_Player extends Game_Character
{
	protected _vehicleType:string;
	protected _vehicleGettingOn:boolean;
	protected _vehicleGettingOff:boolean;
	protected _dashing:boolean;
	protected _needsMapReload:boolean;
	protected _transferring:boolean;
	protected _newMapId:number;
	protected _newX:number;
	protected _newY:number;
	protected _newDirection:number;
	protected _fadeType:number;
	protected _followers:Game_Followers;
	protected _encounterCount:number;

	public constructor();

	public clearTransferInfo():void;

	public followers():Game_Followers;

	public refresh():void;

	public reserveTransfer(mapId:number, x:number, y:number, d:Direction, fadeType:number):void;
	public requestMapReload():void;
	public isTransferring():boolean;
	public newMapId():number;
	public fadeType():number;
	public performTransfer():void;

	public vehicle():Game_Vehicle;
	public isInBoat():boolean;
	public isInShip():boolean;
	public isInAirship():boolean;
	public isInVehicle():boolean;
	public isNormal():boolean;

	public centerX():number;
	public centerY():number;
	public center(x:number, y:number):boolean;

	public makeEncounterCount():void;
	public makeEncounterTroopId():number;
	public meetsEncounterConditions(encounter:number):boolean;
	public executeEncounter():boolean;

	public startMapEvent(x:number, y:number, triggers:number[], normal:boolean):void;

	public moveByInput():void;
	public canMove():boolean;
	public getInputDirection():number;
	public executeMove(direction:Direction):void;

	public updateDashing():void;
	public isDashButtonPressed():boolean;

	public updateScroll(lastScrolledX:number, lastScrolledY:number):void;
	public updateVehicle():void;
	public updateVehicleGetOn():void;
	public updateVehicleGetOff():void;
	public updateNonmoving(wasMoving:boolean):void;

	public triggerAction():boolean;
	public triggerButtonAction():boolean;
	public triggerTouchAction():boolean;
	public triggerTouchActionD1(x1:number, y1:number):boolean;
	public triggerTouchActionD2(x2:number, y2:number):boolean;
	public triggerTouchActionD3(x2:number, y2:number):boolean;

	public updateEncounterCount():void;
	public canEncounter():boolean;
	public encounterProgressValue():number;

	public checkEventTriggerHere(triggers:number[]):void;
	public checkEventTriggerThere(triggers:number[]):void;
	public canStartLocalEvents():boolean;

	public getOnOffVehicle():boolean;
	public getOnVehicle():boolean;
	public getOffVehicle():boolean;

	public forceMoveForward():void;

	public isOnDamageFloor():boolean;

	public showFollowers():void;
	public hideFollowers():void;
	public gatherFollowers():void;
	public areFollowersGathering():boolean;
	public areFollowersGathered():boolean;
}
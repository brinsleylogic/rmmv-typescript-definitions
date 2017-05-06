//-----------------------------------------------------------------------------
// Game_Vehicle
//
// The game object class for a vehicle.

declare class Game_Vehicle extends Game_Character
{
    protected _type:string;
    protected _mapId:number;
    protected _altitude:number;
    protected _driving:boolean;
    protected _bgm:BGM;

	public constructor(type:string);

	public isBoat():boolean;
	public isShip():boolean;
	public isAirship():boolean;

	public resetDirection():void;
	public initMoveSpeed():void;

	public vehicle():DataVehicle;

	public loadSystemSettings():void;
	public refresh():void;

	public setLocation(mapId:number, x:number, y:number):void;

	public getOn():void;
	public getOff():void;

	public setBgm(bgm:BGM):void;
	public playBgm():void;

	public syncWithPlayer():void;

	public shadowX():number;
	public shadowY():number;
	public shadowOpacity():number;

	public canMove():boolean;

	public updateAirship():void;
	public updateAirshipAltitude():void;
	public maxAltitude():number;

	public isLowest():boolean;
	public isHighest():boolean;
	public isTakeoffOk():boolean;
	public isLandOk(x:number, y:number, d:Direction):void;
}
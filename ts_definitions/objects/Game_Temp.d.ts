//-----------------------------------------------------------------------------
// Game_Temp
//
// The game object class for temporary data that is not included in save data.
declare class Game_Temp
{
	protected _isPlayTest:boolean;
	protected _commonEventId:number;
	protected _destinationX:number;
	protected _destinationY:number;
	protected _isMapTouch:boolean;

	public constructor();

	public isPlaytest():boolean;

	public reserveCommonEvent(commonEventId:number):void;
	public clearCommonEvent():void;
	public isCommonEventReserved():boolean;
	public reservedCommonEvent():DataCommonEvent;

	public setDestination(x:number, y:number):void;
	public clearDestination():void;
	public isDestinationValid():boolean;
	public destinationX():number;
	public destinationY():number;
}
//-----------------------------------------------------------------------------
// Game_CommonEvent
//
// The game object class for a common event. It contains functionality for
// running parallel process events.
declare class Game_CommonEvent
{
	protected _commonEventId:number;
	
	public constructor(commonEventId:number);

	public event():DataCommonEvent;
	public list():EventItem[];

	public isActive():boolean;
	public update():void;
	public refresh():void;
}
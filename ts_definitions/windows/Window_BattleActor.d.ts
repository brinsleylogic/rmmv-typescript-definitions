//-----------------------------------------------------------------------------
// Window_BattleActor
//
// The window for selecting a target actor on the battle screen.

declare class Window_BattleActor extends Window_BattleStatus
{
	public constructor(x:number, y:number);
	
	public actor():Game_Actor;
}
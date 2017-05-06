//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// The window for selecting an actor's action on the battle screen.

declare class Window_ActorCommand extends Window_Command
{
	public openness:number;

	protected _actor:Game_Actor;
	
	public constructor();

	public addAttackCommand():void;
	public addSkillCommands():void;
	public addGuardCommand():void;
	public addItemCommand():void;

	public setup(actor:Game_Actor):void;

	public selectLast():void;
}
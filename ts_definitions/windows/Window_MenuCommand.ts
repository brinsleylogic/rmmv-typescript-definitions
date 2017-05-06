//-----------------------------------------------------------------------------
// Window_MenuCommand
//
// The window for selecting a command on the menu screen.

declare class Window_MenuCommand extends Window_Command
{
	protected static _lastCommandSymbol:string;

	public static initCommandPosition():void;

	public addMainCommands():void;
	public addFormationCommand():void;
	public addOriginalCommands():void;
	public addOptionsCommand():void;
	public addSaveCommand():void;
	public addGameEndCommand():void;

	public needsCommand(name:string):boolean;

	public areMainCommandsEnabled():boolean;
	public isFormationEnabled():boolean;
	public isOptionsEnabled():boolean;
	public isSaveEnabled():boolean;
	public isGameEndEnabled():boolean;

	public selectLast():void;
}
//-----------------------------------------------------------------------------
// Window_NameInput
//
// The window for selecting text characters on the name input screen.

declare class Window_NameInput extends Window_Selectable
{
	public static readonly LATIN1:string[];
	public static readonly LATIN2:string[];
	public static readonly RUSSIA:string[];
	public static readonly JAPAN1:string[];
	public static readonly JAPAN2:string[];
	public static readonly JAPAN3:string[];

	protected _editWindow:Window_NameEdit;
	protected _page:number;
	protected _index:number;

	public constructor(editWindow:Window_NameEdit);

	public windowHeight():number;

	public table():string[][];

	public character():string;

	public isPageChange():boolean;

	public isOk():boolean;

	public processHandling():void;
	public processJump():void;
	public processBack():void;

	public onNameAdd():void;
	public onNameOk():void;
}
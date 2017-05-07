//-----------------------------------------------------------------------------
// Window_Command
//
// The superclass of windows for selecting a command.

declare class Window_Command extends Window_Selectable
{
	public constructor(x:number, y:number);

	public windowWidth():number;
	public windowHeight():number;

	public numVisibleRows():number;
	public maxItems():number;

	public clearCommandList():void;
	public makeCommandList():void;

	public addCommand(name:string, symbol:string, enabled:boolean, ext:any):void;
	public commandName(index:number):string;
	public commandSymbol(index:number):string;
	public isCommandEnabled(index:number):boolean;

	public currentData():CommandData;
	public currentSymbol():string;
	public currentExt():any;

	public findSymbol(symbol:string):number;
	public selectSymbol(symbol:string):void;

	public findExt(ext:any):number;
	public selectExt(ext:any):void;

	public drawItem(index:number):void;

	public itemTextAlign():string;
}
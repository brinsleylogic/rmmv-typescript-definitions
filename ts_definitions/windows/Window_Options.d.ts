//-----------------------------------------------------------------------------
// Window_Options
//
// The window for changing various settings on the options screen.

declare class Window_Options extends Window_Command
{
	public constructor();

	public updatePlacement():void;

	public addGeneralOptions():void;
	public addVolumeOptions():void;

	public statusWidth():number;
	public statusText(index:number):string;

	public isVolumeSymbol(symbol:string):boolean;

	public booleanStatusText(value:boolean):string;

	public volumeStatusText(value:number):string;

	public volumeOffset():number;

	public changeValue(symbol:string, value:number):void;
	public getConfigValue(symbol:string):number;
	public setConfigValue(symbol:string, volume:number):void;
}
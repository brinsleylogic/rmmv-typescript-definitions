//-----------------------------------------------------------------------------
// PluginManager
//
// The static class that manages the plugins.
declare class PluginManager
{
	private static _path:string;
	private static _scripts:string[];
	private static _errorUrls:string[];
	private static _parameters:{ [s:string]: string };
	
	public static setup(plugins:DataPlugin[]):void;
	public static checkErrors():void;
	public static parameters(pluginName:string):{ [s:string]: string };
	public static setParameters(name:string, parameters:{ [s:string]: string }):void;
	public static loadScript(name:string):void;
	public static onError(e:Event):void;
}
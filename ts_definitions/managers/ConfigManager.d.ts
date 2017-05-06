//-----------------------------------------------------------------------------
// ConfigManager
//
// The public static class that manages the configuration data.
declare class ConfigManager
{
	public static alwaysDash:boolean;
	public static commandRemember:boolean;
	public static bgmVolume:number;
	public static bgsVolume:number;
	public static meVolume:number;
	public static seVolume:number;
	
	public static load():void;
	public static save():void;

	public static makeData():Config;
	public static applyData(config:Config):void;

	public static readFlag(config:Config, name: string):boolean;
	public static readVolume(config:Config, name: string):number;
}

interface Config
{
	alwaysDash:boolean;
	commandRemember:boolean;
	bgmVolume:number;
	bgsVolume:number;
	meVolume:number;
	seVolume:number;
}
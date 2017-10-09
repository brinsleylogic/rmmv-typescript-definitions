//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.
declare class DataManager
{
	private static _globalId:string;
	private static _lastAccessedId:number;
	private static _errorUrl:string;
	private static _databaseFiles:DatabaseFile[];
	
	public static loadDatabase():void;
	public static loadDataFile(name:string, src:string):void;
	public static isDatabaseLoaded():boolean;

	public static loadMapData(mapId:number):void;
	public static makeEmptyMap():void;
	public static isMapLoaded():boolean;

	public static onLoad(object:any):void;
	public static extractMetadata(data:any):void;
	public static checkError():void;

	public static isBattleTest():boolean;
	public static isEventTest():boolean;

	public static isSkill(item:RPG_ItemBase):boolean;
	public static isItem(item:RPG_ItemBase):boolean;
	public static isWeapon(item:RPG_ItemBase):boolean;
	public static isArmor(item:RPG_ItemBase):boolean;

	public static createGameObjects():void;
	public static setupNewGame():void;
	public static setupBattleTest():void;
	public static setupEventTest():void;

	public static loadGlobalInfo():SavefileInfo[];
	public static saveGlobalInfo(info:SavefileInfo[]):void;

	public static isThisGameFile(savefileId:number):boolean;
	public static isAnySavefileExists():boolean;
	public static loadAllSavefileImages():void;
	public static loadSavefileImages(info:SavefileInfo):void;
	public static maxSavefiles():number;

	public static lastAccessedSavefileId():number;
	public static latestSavefileId():number;
	public static selectSavefileForNewGame():void;

	public static loadGame(savefileId:number):boolean;
	public static loadGameWithoutRescue(savefileId:number):boolean;
	public static loadSavefileInfo(savefileId:number):Savefile;
	public static extractSaveContents(contens:Savefile):void;

	public static saveGame(savefileId:number):boolean;
	public static saveGameWithoutRescue(savefileId:number):boolean;
	public static makeSavefileInfo():SavefileInfo;
	public static makeSaveContents():Savefile;

}

interface DatabaseFile
{
	name:string;
	src:string;
}

interface SavefileInfo
{
	globalId:number;
	title:string;
	characters:any[];
	faces:any[];
	playtime:number;
	timestamp:number;
}

interface Savefile
{
	system:Game_System;
    screen:Game_Screen;
    timer:Game_Temp;
    switches:Game_Switches;
    variables:Game_Variables;
    selfSwitches:Game_SelfSwitches;
    actors:Game_Actors;
    party:Game_Party;
    map:Game_Map;
    player:Game_Player;
}
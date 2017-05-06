//-----------------------------------------------------------------------------
// Scene_Boot
//
// The scene class for initializing the entire game.
declare class Scene_Boot extends Scene_Base
{
	protected _startDate:Date;
	
	public loadSystemImages():void;
	public isGameFontLoaded():boolean;
	public updateDocumentTitle():void;
	public checkPlayerLocation():void;
}
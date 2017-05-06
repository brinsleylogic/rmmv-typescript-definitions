//-----------------------------------------------------------------------------
// Scene_Map
//
// The scene class of the map screen.
declare class Scene_Map extends Scene_Base
{
	protected _waitCount:number;
	protected _encounterEffectDuration:number;
	protected _mapLoaded:boolean;
	protected _touchCount:number;
	protected _transfer:boolean;
	
	public onMapLoaded():void;
	public updateMainMultiply():void;
	public updateMain():void;
	public needFadeIn():boolean;
	public needsSlowFadeOut():boolean;
	public updateWaitCount():boolean;
	public updateDestination():void;
	public isMapTouchOk():boolean;
	public processMapTouch():void;
	public isSceneChangeOk():boolean;
	public updateScene():void;
	public createDisplayObjects():void;
	public createSpriteset():void;
	public createAllWindows():void;
	public createMapNameWindow():void;
	public createMessageWindow():void;
	public createScrollTextWindow():void;
	public updateTransferPlayer():void;
	public updateEncounter():void;
	public updateCallMenu():void;
	public isMenuEnabled():boolean;
	public isMenuCalled():boolean;
	public callMenu():void;
	public updateCallDebug():void;
	public isDebugCalled():boolean;
	public fadeInForTransfer():void;
	public fadeOutForTransfer():void;
	public launchBattle():void;
	public stopAudioOnBattleStart():void;
	public startEncounterEffect():void;
	public updateEncounterEffect():void;
	public snapForBattleBackground():void;
	public startFlashForEncounter():void;
	public encounterEffectSpeed():number;
}
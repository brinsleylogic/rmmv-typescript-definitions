//-----------------------------------------------------------------------------
// Game_System
//
// The game object class for the system data.

declare class Game_System
{
	protected _saveEnabled:boolean;
	protected _menuEnabled:boolean;
	protected _encounterEnabled:boolean;
	protected _formationEnabled:boolean;
	protected _battleCount:number;
	protected _winCount:number;
	protected _escapeCount:number;
	protected _saveCount:number;
	protected _versionId:number;
	protected _framesOnSave:number;
	protected _bgmOnSave:BGM;
	protected _bgsOnSave:BGS;
	protected _windowTone:number[];
	protected _battleBgm:BGM;
	protected _victoryMe:ME;
	protected _defeatMe:ME;
	protected _savedBgm:BGM;
	protected _walkingBgm:BGM;

	public constructor();

	public isJapanese():boolean;
	public isChinese():boolean;
	public isKorean():boolean;
	public isCJK():boolean;
	public isRussian():boolean;

	public isSideView():boolean;

	public isSaveEnabled():boolean;
	public disableSave():void;
	public enableSave():void;

	public isMenuEnabled():boolean;
	public disableMenu():void;
	public enableMenu():void;

	public isEncounterEnabled():boolean;
	public disableEncounter():void;
	public enableEncounter():void;

	public isFormationEnabled():boolean;
	public disableFormation():void;
	public enableFormation():void;

	public battleCount():number;
	public winCount():number;
	public escapeCount():number;
	public saveCount():number;

	public versionId():number;

	public windowTone():number[];
	public setWindowTone(value:number[]):void;

	public battleBgm():BGM;
	public setBattleBgm(value:BGM):void;

	public victoryMe():ME;
	public setVictoryMe(value:ME):void;

	public defeatMe():ME;
	public setDefeatMe(value:ME):void;

	public onBattleStart():void;
	public onBattleWin():void;
	public onBattleEscape():void;
	public onBeforeSave():void;
	public onAfterLoad():void;

	public playtime():number;
	public playtimeText():string;

	public saveBgm():void;
	public replayBgm():void;

	public saveWalkingBgm():void;
	public replayWalkingBgm():void;
}
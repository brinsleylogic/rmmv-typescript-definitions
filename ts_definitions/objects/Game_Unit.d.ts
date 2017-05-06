//-----------------------------------------------------------------------------
// Game_Unit
//
// The superclass of Game_Party and Game_Troop.

declare class Game_Unit
{
	protected _inBattle:boolean;

	constructor();

	public inBattle():boolean;

	public members():Game_Battler[];

	public aliveMembers():Game_Battler[];
	public deadMembers():Game_Battler[];
	public movableMembers():Game_Battler[];

	public clearActions():void;

	public agility():number;
	public tgrSum():number;

	public randomTarget():Game_Battler;
	public randomDeadTarget():Game_Battler;
	public smoothTarget(index:number):Game_Battler;
	public smoothDeadTarget(index:number):Game_Battler;

	public clearResults():void;

	public onBattleStart():void;
	public onBattleEnd():void;

	public makeActions():void;

	public select(activeMember:Game_Battler):void;

	public isAllDead():boolean;

	public substituteBattler():Game_Battler;
}
//-----------------------------------------------------------------------------
// Spriteset_Battle
//
// The set of sprites on the battle screen.

declare class Spriteset_Battle extends Spriteset_Base
{
	protected _battlebackLocated:boolean;
	
	public createBackground():void;
	public createBattleField():void;

	public createBattleback():void;

	public updateBattleback():void;

	public locateBattleback():void;

	public battleback1Bitmap():Bitmap;
	public battleback2Bitmap():Bitmap;

	public battleback1Name():string;
	public battleback2Name():string;
	public overworldBattleback1Name():string;
	public overworldBattleback2Name():string;
	public normalBattleback1Name():string;
	public normalBattleback2Name():string;
	public terrainBattleback1Name(type:number):string;
	public terrainBattleback2Name(type:number):string;

	public defaultBattleback1Name():string;
	public defaultBattleback2Name():string;
	public shipBattleback1Name():string;
	public shipBattleback2Name():string;

	public autotileType(z:number):number;

	public createEnemies():void;
	public compareEnemySprite(a:number, b:number):number;

	public createActors():void;
	public updateActors():void;

	public battlerSprites():Sprite_Battler[];

	public isAnimationPlaying():boolean;
	public isEffecting():boolean;
	public isAnyoneMoving():boolean;
	public isBusy():boolean;
}
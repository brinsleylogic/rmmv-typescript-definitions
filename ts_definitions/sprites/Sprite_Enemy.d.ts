//-----------------------------------------------------------------------------
// Sprite_Enemy
//
// The sprite for displaying an enemy.
declare class Sprite_Enemy extends Sprite_Battler
{
	protected _enemy:Game_Enemy;
    protected _appeared:boolean;
    protected _battlerHue:number;
    protected _effectType:string;
    protected _effectDuration:number;
    protected _shake:number;
    protected _stateIconSprite:Sprite_StateIcon;

	public setBattler(battler:Game_Enemy):void;
	public loadBitmap():void;
	public initVisibility():void;

	public setupEffect():void;
	public startEffect(effectType:string):void;
	public updateEffect():void;
	public revertToNormal():void;

	public startAppear():void;
	public startDisappear():void;
	public startWhiten():void;
	public startBlink():void;
	public startCollapse():void;
	public startBossCollapse():void;
	public startInstantCollapse():void;

	public updateWhiten():void;
	public updateBlink():void;
	public updateAppear():void;
	public updateDisappear():void;
	public updateCollapse():void;
	public updateBossCollapse():void;
	public updateInstantCollapse():void;
}

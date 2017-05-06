//-----------------------------------------------------------------------------
// Sprite_Battler
//
// The superclass of Sprite_Actor and Sprite_Enemy.
declare class Sprite_Battler extends Sprite_Base
{
	protected _battler:Game_Battler;
	protected _battlerName:string;
    protected _damages:Sprite_Damage[];
    protected _homeX:number;
    protected _homeY:number;
    protected _offsetX:number;
    protected _offsetY:number;
    protected _targetOffsetX:number;
    protected _targetOffsetY:number;
    protected _movementDuration:number;
    protected _selectionEffectCount:number;

	public setBattler<T extends Game_Battler>(battler:T):void;
	public setHome(x:number, y:number):void;

	public updateMain():void;
	public updateBitmap():void;
	public updateFrame():void;
	public updateMove():void;
	public updatePosition():void;
	public updateDamagePopup():void;
	public updateSelectionEffect():void;

	public setupDamagePopup():void;
	public damageOffsetX():number;
	public damageOffsetY():number;

	public startMove():void;
	public onMoveEnd():void;
	public isEffecting():boolean;
	public isMoving():boolean;
	public inHomePosition():boolean;
}

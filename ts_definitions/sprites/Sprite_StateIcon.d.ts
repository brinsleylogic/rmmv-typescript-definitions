//-----------------------------------------------------------------------------
// Sprite_StateIcon
//
// The sprite for displaying state icons.
declare class Sprite_StateIcon extends Sprite
{
	protected static _iconWidth:number;
	protected static _iconHeight:number;

	protected _battler:Game_Battler;
    protected _iconIndex:number;
    protected _animationCount:number;
    protected _animationIndex:number;

	public initMembers():void;
	public loadBitmap():void;

	public setup(battler:Game_Battler):void;

	public animationWait():number;

	public updateIcon():void;
	public updateFrame():void;
}
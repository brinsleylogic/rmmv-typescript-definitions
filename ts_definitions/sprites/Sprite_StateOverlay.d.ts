//-----------------------------------------------------------------------------
// Sprite_StateOverlay
//
// The sprite for displaying an overlay image for a state.
declare class Sprite_StateOverlay extends Sprite_Base
{

	protected _battler:Game_Battler;
    protected _overlayIndex:number;
    protected _animationCount:number;
    protected _pattern:number;

	public initMembers():void;
	public loadBitmap():void;

	public setup(battler:Game_Battler):void;

	public animationWait():number;

	public updatePattern():void;
	public updateFrame():void;
}
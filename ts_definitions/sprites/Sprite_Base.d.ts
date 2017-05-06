//-----------------------------------------------------------------------------
// Sprite_Base
//
// The sprite class with a feature which displays animations.
declare class Sprite_Base extends Sprite
{
	protected _animationSprites:Sprite_Animation[];
    protected _effectTarget:Sprite_Base;
    protected _hiding:boolean;

	public show():void;
	public show():void;
	public updateVisibility():void;

	public updateAnimationSprites():void;
	public startAnimation():void;
	public isAnimationPlaying():boolean;
}

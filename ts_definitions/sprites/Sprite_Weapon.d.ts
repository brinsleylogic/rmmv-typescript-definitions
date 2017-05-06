//-----------------------------------------------------------------------------
// Sprite_Weapon
//
// The sprite for displaying a weapon image for attacking.
declare class Sprite_Weapon extends Sprite_Base
{
    protected _weaponImageId:number;
    protected _animationCount:number;
    protected _pattern:number;

	public initMembers():void;
	public loadBitmap():void;

	public setup(weaponImageId:number):void;

	public animationWait():number;
	public isPlaying():boolean;

	public updatePattern():void;
	public updateFrame():void;
}
//-----------------------------------------------------------------------------
// Spriteset_Base
//
// The superclass of Spriteset_Map and Spriteset_Battle.

declare class Spriteset_Base extends Sprite
{
	public createLowerLayer():void;
	public createUpperLayer():void;
	public createBaseSprite():void;
	public createToneChanger():void;
	public createWebGLToneChanger():void;
	public createCanvasToneChanger():void;
	public createPictures():void;
	public createTimer():void;
	public createScreenSprites():void;

	public updateScreenSprites():void;
	public updateToneChanger():void;
	public updateWebGLToneChanger():void;
	public updateCanvasToneChanger():void;
	public updatePosition():void;
}
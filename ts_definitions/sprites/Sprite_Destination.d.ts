//-----------------------------------------------------------------------------
// Sprite_Destination
//
// The sprite for displaying the destination place of the touch input.

declare class Sprite_Destination extends Sprite
{
    protected _frameCount:number;

	public update():void;

	public createBitmap():void;

	public updatePosition():void;
	public updateAnimation():void;
}
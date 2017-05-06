//-----------------------------------------------------------------------------
// Sprite_Picture
//
// The sprite for displaying a picture.

declare class Sprite_Picture extends Sprite
{
    protected _pictureId:number;
    protected _pictureName:string;
    protected _isPicture:boolean;

	public constructor(pictureId:number);

	public picture():Game_Picture;

	public update():void;
	public updateBitmap():void;
	public updateOrigin():void;
	public updatePosition():void;
	public updateScale():void;
	public updateTone():void;
	public updateOther():void;

	public loadBitmap():void;
}
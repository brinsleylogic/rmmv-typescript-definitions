//-----------------------------------------------------------------------------
// Sprite_Character
//
// The sprite for displaying a character.
declare class Sprite_Character extends Sprite_Base
{
    protected _character:Game_Character;
    protected _balloonDuration:number;
    protected _tilesetId:number;
    protected _upperBody:Sprite;
    protected _lowerBody:Sprite;

	public setCharacter(character:Game_Character):void;

	public isTile():boolean;
	public tilesetBitmap(tileId:number):Bitmap;
	public updateBitmap():void;

	public isImageChanged():boolean;
	public setTileBitmap():void;
	public setCharacterBitmap():void;

	public updateFrame():void;
	public updateTileFrame():void;
	public updateCharacterFrame():void;

	public characterBlockX():number;
	public characterBlockY():number;
	public characterPatternX():number;
	public characterPatternY():number;
	public patternWidth():number;
	public patternHeight():number;

	public updateHalfBodySprites():void;
	public createHalfBodySprites():void;

	public updatePosition():void;
	public updateAnimation():void;
	public updateOther():void;

	public setupAnimation():void;

	public setupBalloon():void;
	public updateBalloon():void;
	public endBalloon():void;
	public isBalloonPlaying():boolean;
}

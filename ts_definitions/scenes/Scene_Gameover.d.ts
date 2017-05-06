//-----------------------------------------------------------------------------
// Scene_Gameover
//
// The scene class of the game over screen.
declare class Scene_Gameover extends Scene_Base
{
	protected _backSprite:Sprite;
	
	public playGameoverMusic():void;
	public createBackground():void;
	public isTriggered():boolean;
	public gotoTitle():void;
}
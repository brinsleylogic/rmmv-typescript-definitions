//-----------------------------------------------------------------------------
// Weather
//
// The weather effect which displays rain, storm, or snow.
declare class Weather extends PIXI.Container
{
	public type:string;
	public power:number;
	public origin:Point;
	
	protected _width:number;
	protected _height:number;
	protected _sprites:Sprite[];
	
	public update():void;
	
	protected _createBitmaps():void;
	protected _createDimmer():void;
	protected _updateDimmer():void;
	protected _updateAllSprites():void;
	protected _addSprite():void;
	protected _removeSprite():void;
	protected _updateRainSprite(sprite:Sprite):void;
	protected _updateStormSprite(sprite:Sprite):void;
	protected _updateSnowSprite(sprite:Sprite):void;
	protected _rebornSprite(sprite:Sprite):void;
}
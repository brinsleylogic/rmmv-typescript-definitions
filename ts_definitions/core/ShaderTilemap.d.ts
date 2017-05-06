//-----------------------------------------------------------------------------
// ShaderTilemap
//
// The tilemap which displays 2D tile-based game map using shaders
declare class ShaderTilemap extends Tilemap
{
	public roundPixels:boolean;

	public renderCanvas(renderer:PIXI.SystemRenderer):void;
	public renderWebGL(renderer:PIXI.SystemRenderer):void;

	public refresh():void;
	public refreshTileset():void;
	public updateTransform():void;

	protected _hackRenderer(renderer:PIXI.SystemRenderer):PIXI.SystemRenderer

	protected _createLayers():void;
	protected _updateLayerPositions(startX:number, startY:number):void;

	protected _paintTiles(startX:number, startY:number, x:number, y:number):void;
	
	protected _drawTile(layer:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawNormalTile(layer:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawAutotile(layer:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawTableEdge(layer:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawShadow(layer:Bitmap, shadowBits:number, dx:number, dy:number):void;
}
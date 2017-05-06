//-----------------------------------------------------------------------------
// Tilemap
//
// The tilemap which displays 2D tile-based game map.
declare class Tilemap extends PIXI.Container
{
	public static TILE_ID_B:number;
	public static TILE_ID_C:number;
	public static TILE_ID_D:number;
	public static TILE_ID_E:number;
	public static TILE_ID_A5:number;
	public static TILE_ID_A1:number;
	public static TILE_ID_A2:number;
	public static TILE_ID_A3:number;
	public static TILE_ID_A4:number;
	public static TILE_ID_MAX:number;
	public static FLOOR_AUTOTILE_TABLE:number[][][];
	public static WALL_ATUOTILE_TABLE:number[][][];
	public static WATERFALL_AUTOTILE_TABLE:number[][][];
	
	public static isVisibleTile(tileId:number):boolean;
	public static isAutotile(tileId:number):number;
	public static getAutotileKind(tileId:number):number;
	public static getAutotileShape(tileId:number):number;
	public static makeAutotileId(kind:number, shape:number):number;
	public static isSameKindTile(tileId1:number, tileId2:number):boolean;
	public static isTileA1(tileId:number):boolean;
	public static isTileA2(tileId:number):boolean;
	public static isTileA3(tileId:number):boolean;
	public static isTileA4(tileId:number):boolean;
	public static isTileA5(tileId:number):boolean;
	public static isWaterTile(tileId:number):boolean;
	public static isWaterfallTile(tileId:number):boolean;
	public static isGroundTile(tileId:number):boolean;
	public static isShadowingTile(tileId:number):boolean;
	public static isRoofTile(tileId:number):boolean;
	public static isWallTopTile(tileId:number):boolean;
	public static isWallSideTile(tileId:number):boolean;
	public static isWallTile(tileId:number):boolean;
	public static isFloorTypeAutotile(tileId:number):boolean;
	public static isWallTypeAutotile(tileId:number):boolean;
	public static isWaterfallTypeAutotile(tileId:number):boolean;
	
	public bitmaps:Bitmap[];
	public origin:Point;
	public flags:number[];
	public animationCount:number;
	public horizontalWrap:boolean;
	public verticalWrap:boolean;
	public width:number;
	public height:number;
	public tileWidth:number;
	public tileHeight:number;
	
	protected _margin:number;
	protected _width:number;
	protected _height:number;
	protected _tileWidth:number;
	protected _tileHeight:number;
	protected _mapWidth:number;
	protected _mapHeight:number;
	protected _mapData:number[];
	protected _layerWidth:number;
	protected _layerHeight:number;
	protected _lastTiles:number[][][][];
	
	public constructor(bitmap:Bitmap);

	public setData(width:number, height:number, data:number[]):void;
	public isReady():boolean;
	public update():void;
	public refresh():void;
	public updateTransform():void;
	
	protected _createLayers():void;
	protected _updateLayerPositions(startX:number, startY:number):void;
	protected _paintAllTiles(startX:number, startY:number):void;
	protected _paintTiles(startX:number, startY:number, x:number, y:number):void;
	protected _readLastTiles(i:number, x:number, t:number):number[];
	protected _writeLastTiles(i:number, x:number, y:number, tiles:number[]):void;
	protected _drawTile(bitmap:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawNormalTile(bitmap:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawAutotile(bitmap:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawTableEdge(bitmap:Bitmap, tileId:number, dx:number, dy:number):void;
	protected _drawShadow(bitmap:Bitmap, shadowBits:number, dx:number, dy:number):void;
	protected _readMapData(x:number, y:number, z:number):number;
	protected _isHigherTile(tileId:number):boolean;
	protected _isTableTile(tileId:number):boolean;
	protected _isOverpassPosition(mx:number, my:number):boolean;
	protected _sortChildren():void;
	protected _compareChildOrder(a:PIXI.DisplayObject, b:PIXI.DisplayObject):number;
}
//-----------------------------------------------------------------------------
// WindowLayer
//
// The layer which contains game windows.
declare class WindowLayer extends PIXI.Container
{ 
	public width:number;
	public height:number;
	
	protected _width:number;
	protected _height:number;
	protected _tempCanvas:PIXI.SystemRenderer;
	protected _vertexBuffer:{};
	protected _translationMatrix:number[];
	protected _dummySprite:Sprite;
	
	public move(x:number, y:number, width:number, height:number):void;
	public update():void;
	
	protected _renderCanvas(renderSession:PIXI.SystemRenderer):void;
	protected _canvasClearWindowRect(renderSession:PIXI.SystemRenderer, window:Window):void;
	protected _renderWebGL(renderSession:PIXI.SystemRenderer):void;
	protected _webglMaskOutside(renderSession:PIXI.SystemRenderer):void;
	protected _webglMaskWindow(renderSession:PIXI.SystemRenderer, window:Window):void;
	protected _webglMaskRect(renderSession:PIXI.SystemRenderer,x:number, y:number, w:number, h:number):void;
}
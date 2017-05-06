//-----------------------------------------------------------------------------
// Window
//
// The window in the game.
declare class Window extends PIXI.Container
{
	public origin:Point;
	public active:boolean;
	public downArrowVisible:boolean;
	public pause:boolean;
	public windowskin:{};
	public contents:Bitmap;
	public width:number;
	public height:number;
	public padding:number;
	public margin:number;
	public opacity:number;
	public backOpacity:number;
	public contentsOpacity:number;
	public openness:number;
	
	protected _isWindow:boolean;
	protected _windowskin:Bitmap;
	protected _width:number;
	protected _height:number;
	protected _cursorRect:Rectangle;
	protected _opennes:number;
	protected _animationCount:number;
	protected _padding:number;
	protected _margin:number;
	protected _colorTone:number[];
	protected _windowSpriteContainer:Sprite;
	protected _windowBackSprite:Sprite;
	protected _windowCursorSprite:Sprite;
	protected _windowFrameSprite:Sprite;
	protected _windowContentsSprite:Sprite;
	protected _windowArrowSprites:Sprite[];
	
	public update():void;
	public move(x?:number, y?:number, width?:number, height?:number):void;
	public isOpen():boolean;
	public isClosed():boolean;
	public setCursorRect(x?:number, y?:number, width?:number, height?:number):void;
	public setTone(r:number, g:number, b:number):void;
	public addChildToBack(child:PIXI.DisplayObject):PIXI.DisplayObject;
	public updateTransform():void;
	
	protected _createAllParts():void;
	protected _onWindowskinLoad():void;
	protected _refreshAllParts():void;
	protected _refreshBack():void;
	protected _refreshFrame():void;
	protected _refreshCursor():void;
	protected _refreshContents():void;
	protected _refreshArrows():void;
	protected _refreshPauseSign():void;
	protected _updateCursor():void;
	protected _updateContents():void;
	protected _updateArrows():void;
	protected _updatePauseSign():void;
}
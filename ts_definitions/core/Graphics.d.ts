//-----------------------------------------------------------------------------
// Graphics
//
// The static class that carries out graphics processing.
declare class Graphics
{
	public static frameCount:number;
	public static BLEND_NORMAL:number;
	public static BLEND_ADD:number;
	public static BLEND_MULTIPLY:number;
	public static BLEND_SCREEN:number;
	public static width:number;
	public static height:number;
	public static boxWidth:number;
	public static boxHeight:number;
	public static scale:number;
	
	protected static _width:number;
	protected static _height:number;
	protected static _rendererType:string;
	protected static _boxWidth:number;
	protected static _boxHeight:number;
	protected static _scale:number;
	protected static _realScale:number;
	protected static _errorPrinter:HTMLParagraphElement;
	protected static _canvas:HTMLCanvasElement;
	protected static _video:HTMLVideoElement;
	protected static _upperCanvas:HTMLCanvasElement;
	protected static _renderer:PIXI.WebGLRenderer;
	protected static _fpsMeter:FPSMeter;
	protected static _modeBox:HTMLDivElement;
	protected static _skipCount:number;
	protected static _maxSkip:number;
	protected static _rendered:boolean;
	protected static _loadingImage:HTMLImageElement;
	protected static _loadingCount:number;
	protected static _fpsMeterToggled:boolean;
	protected static _canUseDifferenceBlend:boolean;
	protected static _canUseSaturationBlend:boolean;
	protected static _stretchEnabled:boolean;
	protected static _hiddenCanvas:HTMLCanvasElement;
	
	public static tickStart():void;
	public static tickEnd():void;
	public static render(stage:Stage):void;
	public static isWebGL():boolean;
	public static hasWebGL():boolean;
	public static canUseDifferenceBlend():boolean;
	public static canUseSaturationBlend():boolean;
	public static setLoadingImage():void;
	public static startLoading():void;
	public static updateLoading():void;
	public static endLoading():void;
	public static printError():void;
	public static showFps():void;
	public static hideFps():void;
	public static loadFont(name:string, url:string):void;
	public static isFontLoaded(name:string):boolean;
	public static playVideo(src:string):void;
	public static isVideoPlaying():boolean;
	public static canPlayVideoType(type:string):boolean;
	public static pageToCanvasX(x:number):number;
	public static pageToCanvasY(y:number):number;
	public static isInsideCanvas(x:number, y:number):boolean;
	
	protected static _createAllElements():void;
	protected static _updateAllElements():void;
	protected static _updareRealScale():void;
	protected static _makeErrorHtml(name:string, message:string):string;
	protected static _defaultStretchMode():boolean;
	protected static _testCanvasBlendMode():void;
	protected static _modifyExistingElements():void;
	protected static _createErrorPrinter():void;
	protected static _updateErrorPrinter():void;
	protected static _createCanvas():void;
	protected static _updateVideo():void;
	protected static _createUpperCanvas():void;
	protected static _updateUpperCanvas():void;
	protected static _clearUpperCanvas():void;
	protected static _paintUpperCanvas():void;
	protected static _createRenderer():void;
	protected static _updateRenderer():void;
	protected static _createFPSMeter():void;
	protected static _createModeBox():void;
	protected static _createGameFontLoader():void;
	protected static _createFontLoader():void;
	protected static _centerElement(element:HTMLElement):void;
	protected static _disableTextSection():void;
	protected static _disableContextMenu():void;
	protected static _applyCanvasFilter():void;
	protected static _onVideoLoad():void;
	protected static _onVideoError():void;
	protected static _onVideoEnd():void;
	protected static _updateVisibility(videoVisible:boolean):void;
	protected static _isVideoVisible():boolean;
	protected static _setupEventhandlers():void;
	protected static _onWindowResize():void;
	protected static _onKeyDown():void;
	protected static _switchFPSMeter():void;
	protected static _switchStretchMode():void;
	protected static _switchFullScreen():void;
	protected static _isFullScreen():boolean;
	protected static _requestFullScreen():void;
	protected static _cancelFullScreen():void;
}
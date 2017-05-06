//-----------------------------------------------------------------------------
// SceneManager
//
// The public static class that manages scene transitions.
declare class SceneManager
{
	private static _scene:Scene_Base;
	private static _nextScene:Scene_Base;
	private static _stack:(new() => Scene_Base)[];
	private static _stopped:boolean;
	private static _sceneStarted:boolean;
	private static _exiting:boolean;
	private static _previousClass:(new() => Scene_Base);
	private static _backgroundBitmap:Bitmap;
	private static _screenWidth:number;
	private static _screenHeight:number;
	private static _boxWidth:number;
	private static _boxHeight:number;
	
	public static run(sceneClass:new() => Scene_Base):void;
	public static goto(sceneClass:new() => Scene_Base):void;
	public static push(sceneClass:new() => Scene_Base):void;

	public static initialize():void;
	public static initGraphics():void;
	public static initAudio():void;
	public static initInput():void;
	public static initNwjs():void;

	public static preferableRendererType():string;
	public static shouldUseCanvasRenderer():boolean;

	public static checkWebGL():void;
	public static checkFileAccess():void;
	
	public static setupErrorHandlers():void;
	public static checkPluginErrors():void;
	public static catchException(e:ExceptionInformation):void;

	public static onError(e:Event):void;
	public static onKeyDown(event:KeyboardEvent):void;

	public static tickStart():void;
	public static tickEnd():void;
	public static update():void;
	public static updateInputData():void;
	public static updateMain():void;
	public static requestUpdate():void;

	public static changeScene():void;
	public static updateScene():void;
	public static renderScene():void;

	public static onSceneCreate():void;
	public static onSceneStart():void;
	public static onSceneLoading():void;
	
	public static isSceneChanging():boolean;
	public static isCurrentSceneBusy():boolean;
	public static isCurrentSceneStarted():boolean;
	public static isNextScene():boolean;
	public static isPreviousScene():boolean;

	public static pop():void;
	public static stop():void;
	public static exit():void;
	public static terminate():void;

	public static clearStack():void;
	public static prepareNextScene():void;

	public static snap():Bitmap;
	public static snapForBackground():void;
	public static backgroundBitmap():Bitmap;
}
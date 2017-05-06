//-----------------------------------------------------------------------------
// Window_Message
//
// The window for displaying text messages.

declare class Window_Message extends Window_Base
{
	protected _background:number;
	protected _positionType:number;
	protected _waitCount:number;
	protected _faceBitmap:Bitmap;
	protected _textState:TextState;
	protected _showFast:boolean;
	protected _lineShowFast:boolean;
	protected _pauseSkip:boolean;

	public constructor();

	public initMembers():void;

	public subWindows():Window_Base[];
	public createSubWindows():void;

	public windowWidth():number;
	public windowHeight():number;

	public clearFlags():void;

	public numVisibleRows():number;

	public checkToNotClose():void;

	public canStart():boolean;
	public startMessage():void;

	public updatePlacement():void;
	public updateBackground():void;

	public terminateMessage():void;

	public updateWait():boolean;
	public updateLoading():boolean;
	public updateInput():boolean;

	public isAnySubWindowActive():boolean;

	public updateMessage():boolean;

	public onEndOfText():void;

	public startInput():boolean;
	public isTriggered():boolean;
	public doesContinue():boolean;
	public areSettingsChanged():void;

	public updateShowFast():void;

	public newPage(textState:TextState):void;

	public loadMessageFace():void;
	public drawMessageFace():void;

	public newLineX():number;
	public processNewLine(textState:TextState):void;
	public processNewPage(textState:TextState):void;

	public isEndOfText(textState:TextState):boolean;
	public needsNewPage(textState:TextState):boolean;

	public processEscapeCharacter(code:string, textState:TextState):void;

	public startWait(count:number):void;
	public startPause():void;
}
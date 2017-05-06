//-----------------------------------------------------------------------------
// Window_NumberInput
//
// The window used for the event command [Input Number].

declare class Window_NumberInput extends Window_Selectable
{
	protected _messageWindow:Window_Message;
	protected _buttons:Sprite_Button[];
	protected _number:number;
	protected _maxDigits:number;

	public constructor(messageWindow:Window_Message);

	public start():void;

	public updatePlacement():void;

	public windowWidth():number;
	public windowHeight():number;

	public createButtons():void;
	public placeButtons():void;
	public updateButtonsVisiblity():void;
	public showButtons():void;
	public hideButtons():void;
	public buttonY():number;

	public processDigitChange():void;
	public changeDigit(up:boolean):void;

	public onButtonUp():void;
	public onButtonDown():void;
	public onButtonOk():void;
}
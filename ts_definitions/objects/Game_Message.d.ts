//-----------------------------------------------------------------------------
// Game_Message
//
// The game object class for the state of the message window that displays text
// or selections, etc.

declare class Game_Message
{
	protected _texts:string[];
	protected _choices:string[];
	protected _faceName:string;
	protected _faceIndex:number;
	protected _background:MessageBackgroundStyle;
	protected _positionType:VeritcalAlign;
	protected _choiceDefaultType:ChoiceDefaultType;
	protected _choiceCancelType:ChoiceCancelType;
	protected _choiceBackground:MessageBackgroundStyle;
	protected _choicePositionType:HorizontalAlign;
	protected _numInputVariableId:number;
	protected _numInputMaxDigits:number;
	protected _itemChoiceVariableId:number;
	protected _itemChoiceItypeId:number;
	protected _scrollMode:boolean;
	protected _scrollSpeed:number;
	protected _scrollNoFast:boolean;
	protected _choiceCallback:(n:number) => void;

	public constructor();

	public clear():void;

	public choices():string[];

	public faceName():string;
	public faceIndex():number;

	public background():MessageBackgroundStyle;
	public positionType():VeritcalAlign;

	public choiceDefaultType():ChoiceDefaultType;
	public choiceCancelType():ChoiceCancelType;
	public choiceBackground():MessageBackgroundStyle;
	public choicePositionType():HorizontalAlign;

	public numInputVariableId():number;
	public numInputMaxDigits():number;
	public itemChoiceVariableId():number;
	public itemChoiceItypeId():number;

	public scrollMode():boolean;
	public scrollSpeed():number;
	public scrollNoFast():boolean;
	
	public add(text:string):void;
	public hasText():boolean;

	public setFaceImage(faceName:string, faceIndex:number):void;
	public setBackground(background:MessageBackgroundStyle):void;
	public setPositionType(positionType:VeritcalAlign):void;
	public setScroll(speed:number, noFast:boolean):void;

	public isNumberInput():boolean;
	public setNumberInput(variableId:number, maxDigits:number):void;

	public isChoice():boolean;
	public setChoices(choices:string[], defaultType:ChoiceDefaultType, cancelType:ChoiceCancelType):void;
	public setChoiceBackground(background:MessageBackgroundStyle):void;
	public setChoicePositionType(positionType:HorizontalAlign):void;

	public setItemChoice(variableId:number, itemType:number):void;
	public setChoiceCallback(callback:(n:number) => void):void;
	public onChoice(n:number):void;

	public isItemChoice():boolean;

	public isBusy():boolean;

	public newPage():void;

	public allText():string;
}
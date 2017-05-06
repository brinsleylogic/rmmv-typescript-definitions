//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.

declare class Game_Enemy extends Game_Battler
{
	protected _enemyId:number;
    protected _letter:string;
    protected _plural:boolean;
    protected _screenX:number;
    protected _screenY:number;

	public constructor(enemyId:number, x:number, y:number);

	public setup(enemyId:number, x:number, y:number):void;

	public friendsUnit():Game_Troop;
	public opponentsUnit():Game_Party;

	public enemyId():number;
	public enemy():DataEnemy;

	public exp():number;
	public gold():number;

	public makeDropItems():RPG_ItemBase[];
	public dropItemRate():number;

	public itemObject(kind:number, dataId:number):RPG_ItemBase;

	public screenX():number;
	public screenY():number;

	public battlerName():string;
	public battlerHue():number;

	public originalName():string;
	public name():string;

	public isLetterEmpty():boolean;
	public setLetter(letter:string):void;
	public setPlural(plural:boolean):void;

	public transform(enemyId:number):void;

	public meetsCondition(action:EnemyAction):boolean;
	public meetsTurnCondition(param1:number, param2:number):boolean;
	public meetsHpCondition(param1:number, param2:number):void;
	public meetsMpCondition(param1:number, param2:number):void;
	public meetsStateCondition(param:number):void;
	public meetsPartyLevelCondition(param:number):void;
	public meetsSwitchCondition(param:number):void;

	public isActionValid(action:EnemyAction):boolean;
	public selectAction(actionList:EnemyAction[], ratingZero:number):EnemyAction;
	public selectAllActions(actionList:EnemyAction[]):void;
}
//-----------------------------------------------------------------------------
// Game_Interpreter
//
// The interpreter for running event commands.

declare class Game_Interpreter
{
	protected _depth:number;
    protected _branch:{ [indent:number]: number};
    protected _params:number[];
    protected _indent:number;
    protected _frameCount:number;
    protected _freezeChecker:number;
	protected _mapId:number;
	protected _eventId:number;
	protected _list:EventItem[];
	protected _index:number;
	protected _waitCount:number;
	protected _waitMode:string;
	protected _comments:string;
	protected _character:Game_Character;
	protected _childInterpreter:Game_Interpreter;
	
	public constructor(depth:number);

	public checkOverflow():void;
	public setup(list:EventItem[], eventId:number):void;

	public eventId():number;
	public isOnCurrentMap():boolean;

	public setupReservedCommonEvent():boolean;

	public isRunning():boolean;
	public update():void;
	public updateChild():boolean;
	public updateWait():boolean;
	public updateWaitCount():boolean;
	public updateWaitMode():boolean;

	public setWaitMode(waitMode:string):void;
	public wait(duration:number):void;

	public fadeSpeed():number;

	public executeCommand():boolean;

	public checkFreeze():boolean;

	public terminate():void;

	public skipBranch():void;

	public currentCommand():EventItem;

	public nextEventCode():number;

	public iterateActorId(actorId:number, callback:(actor:Game_Actor) => void):void;
	public iterateActorEx(fromVariable:number, actorId:number, callback:(actor:Game_Actor) => void):void;
	public iterateActorIndex(index:number, callback:(actor:Game_Actor) => void):void;
	public iterateEnemyIndex(index:number, callback:(actor:Game_Enemy) => void):void;
	public iterateBattler(isActor:number, param2:number, callback:(actor:Game_Battler) => void):void;

	public character(id:number):Game_Character;

	public operateValue(operation:number, operandType:number, operand:number):number;

	public changeHp(target:Game_BattlerBase, value:number, allowDeath:boolean):void;

	// Show Text
	public command101():boolean;

	// Show Choices
	public command102():boolean;
	public setupChoices(params:number[]):void;

	// When [**]
	public command402():boolean;

	// When Cancel
	public command403():boolean;

	// Input Number
	public command103():boolean;
	public setupNumInput(params:[number, number]):void;

	// Select Item
	public command104():boolean;
	public setupItemChoice(params:[number, number]):void;

	// Show Scrolling Text
	public command105():boolean;

	// Comment
	public command108():boolean;

	// Conditional Branch
	public command111():boolean;

	// Else
	public command411():boolean;

	// Loop
	public command112():boolean;

	// Repeat Above
	public command413():boolean;

	// Break Loop
	public command113():boolean;

	// Exit Event Processing
	public command115():boolean;

	// Common Event
	public command117():boolean;
	public setupChild(list:EventItem[], eventId:number):void;

	// Label
	public command118():boolean;

	// Jump to Label
	public command119():boolean;
	public jumpTo(index:number):void;

	// Control Switches
	public command121():boolean;

	// Control Variables
	public command122():boolean;
	public gameDataOperand(type:number, id:number, param?:number):number;
	public operateVariable(variableId:number, operationType:number, value:number):void;

	// Control Self Switch
	public command123():boolean;

	// Control Timer
	public command124():boolean;

	// Change Gold
	public command125():boolean;

	// Change Items
	public command126():boolean;

	// Change Weapons
	public command127():boolean;

	// Change Armors
	public command128():boolean;

	// Change Party Member
	public command129():boolean;

	// Change Battle BGM
	public command132():boolean;

	// Change Victory ME
	public command133():boolean;

	// Change Save Access
	public command134():boolean;

	// Change Menu Access
	public command135():boolean;

	// Change Encounter Disable
	public command136():boolean;

	// Change Formation Access
	public command137():boolean;

	// Change Window Color
	public command138():boolean;

	// Change Defeat ME
	public command139():boolean;

	// Change Vehicle BGM
	public command140():boolean;

	// Transfer Player
	public command201():boolean;

	// Set Vehicle Location
	public command202():boolean;

	// Set Event Location
	public command203():boolean;

	// Scroll Map
	public command204():boolean;

	// Set Movement Route
	public command205():boolean;

	// Getting On and Off Vehicles
	public command206():boolean;

	// Change Transparency
	public command211():boolean;

	// Show Animation
	public command212():boolean;

	// Show Balloon Icon
	public command213():boolean;

	// Erase Event
	public command214():boolean;

	// Change Player Followers
	public command216():boolean;

	// Gather Followers
	public command217():boolean;

	// Fadeout Screen
	public command221():boolean;

	// Fadein Screen
	public command222():boolean;

	// Tint Screen
	public command223():boolean;

	// Flash Screen
	public command224():boolean;

	// Shake Screen
	public command225():boolean;

	// Wait
	public command230():boolean;

	// Show Picture
	public command231():boolean;

	// Move Picture
	public command232():boolean;

	// Rotate Picture
	public command233():boolean;

	// Tint Picture
	public command234():boolean;

	// Erase Picture
	public command235():boolean;

	// Set Weather Effect
	public command236():boolean;

	// Play BGM
	public command241():boolean;

	// Fadeout BGM
	public command242():boolean;

	// Save BGM
	public command243():boolean;

	// Resume BGM
	public command244():boolean;

	// Play BGS
	public command245():boolean;

	// Fadeout BGS
	public command246():boolean;

	// Play ME
	public command249():boolean;

	// Play SE
	public command250():boolean;

	// Stop SE
	public command251():boolean;

	// Play Movie
	public command261():boolean;
	public videoFileExt():string;

	// Change Map Name Display
	public command281():boolean;

	// Change Tileset
	public command282():boolean;

	// Change Battle Back
	public command283():boolean;

	// Change Parallax
	public command284():boolean;

	// Get Location Info
	public command285():boolean;

	// Battle Processing
	public command301():boolean;

	// If Win
	public command601():boolean;

	// If Escape
	public command602():boolean;

	// If Lose
	public command603():boolean;

	// Shop Processing
	public command302():boolean;

	// Name Input Processing
	public command303():boolean;

	// Change HP
	public command311():boolean;

	// Change MP
	public command312():boolean;

	// Change TP
	public command326():boolean;

	// Change State
	public command313():boolean;

	// Recover All
	public command314():boolean;

	// Change EXP
	public command315():boolean;

	// Change Level
	public command316():boolean;

	// Change Parameter
	public command317():boolean;

	// Change Skill
	public command318():boolean;

	// Change Equipment
	public command319():boolean;

	// Change Name
	public command320():boolean;

	// Change Class
	public command321():boolean;

	// Change Actor Images
	public command322():boolean;

	// Change Vehicle Image
	public command323():boolean;

	// Change Nickname
	public command324():boolean;

	// Change Profile
	public command325():boolean;

	// Change Enemy HP
	public command331():boolean;

	// Change Enemy MP
	public command332():boolean;

	// Change Enemy TP
	public command342():boolean;

	// Change Enemy State
	public command333():boolean;

	// Enemy Recover All
	public command334():boolean;

	// Enemy Appear
	public command335():boolean;

	// Enemy Transform
	public command336():boolean;

	// Show Battle Animation
	public command337():boolean;

	// Force Action
	public command339():boolean;

	// Abort Battle
	public command340():boolean;

	// Open Menu Screen
	public command351():boolean;

	// Open Save Screen
	public command352():boolean;

	// Game Over
	public command353():boolean;

	// Return to Title Screen
	public command354():boolean;

	// Script
	public command355():boolean;

	// Plugin Command
	public command356():boolean;
	public pluginCommand(command:string, args:string[]):void;
}
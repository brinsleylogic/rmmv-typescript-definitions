//-----------------------------------------------------------------------------
// Game_Character
//
// The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event.

declare class Game_Character extends Game_CharacterBase
{
	public static readonly ROUTE_END:number;
	public static readonly ROUTE_MOVE_DOWN:number;
	public static readonly ROUTE_MOVE_LEFT:number;
	public static readonly ROUTE_MOVE_RIGHT:number;
	public static readonly ROUTE_MOVE_UP:number;
	public static readonly ROUTE_MOVE_LOWER_L:number;
	public static readonly ROUTE_MOVE_LOWER_R:number;
	public static readonly ROUTE_MOVE_UPPER_L:number;
	public static readonly ROUTE_MOVE_UPPER_R:number;
	public static readonly ROUTE_MOVE_RANDOM:number;
	public static readonly ROUTE_MOVE_TOWARD:number;
	public static readonly ROUTE_MOVE_AWAY:number;
	public static readonly ROUTE_MOVE_FORWARD:number;
	public static readonly ROUTE_MOVE_BACKWARD:number;
	public static readonly ROUTE_JUMP:number;
	public static readonly ROUTE_WAIT:number;
	public static readonly ROUTE_TURN_DOWN:number;
	public static readonly ROUTE_TURN_LEFT:number;
	public static readonly ROUTE_TURN_RIGHT:number;
	public static readonly ROUTE_TURN_UP:number;
	public static readonly ROUTE_TURN_90D_R:number;
	public static readonly ROUTE_TURN_90D_L:number;
	public static readonly ROUTE_TURN_180D:number;
	public static readonly ROUTE_TURN_90D_R_L:number;
	public static readonly ROUTE_TURN_RANDOM:number;
	public static readonly ROUTE_TURN_TOWARD:number;
	public static readonly ROUTE_TURN_AWAY:number;
	public static readonly ROUTE_SWITCH_ON:number;
	public static readonly ROUTE_SWITCH_OFF:number;
	public static readonly ROUTE_CHANGE_SPEED:number;
	public static readonly ROUTE_CHANGE_FREQ:number;
	public static readonly ROUTE_WALK_ANIME_ON:number;
	public static readonly ROUTE_WALK_ANIME_OFF:number;
	public static readonly ROUTE_STEP_ANIME_ON:number;
	public static readonly ROUTE_STEP_ANIME_OFF:number;
	public static readonly ROUTE_DIR_FIX_ON:number;
	public static readonly ROUTE_DIR_FIX_OFF:number;
	public static readonly ROUTE_THROUGH_ON:number;
	public static readonly ROUTE_THROUGH_OFF:number;
	public static readonly ROUTE_TRANSPARENT_ON:number;
	public static readonly ROUTE_TRANSPARENT_OFF:number;
	public static readonly ROUTE_CHANGE_IMAGE:number;
	public static readonly ROUTE_CHANGE_OPACITY:number;
	public static readonly ROUTE_CHANGE_BLEND_MODE:number;
	public static readonly ROUTE_PLAY_SE:number;
	public static readonly ROUTE_SCRIPT:number;

	protected  _moveRouteForcing:boolean;
	protected  _moveRoute:MoveRoute;
	protected  _moveRouteIndex:number;
	protected  _originalMoveRout:MoveRoute;
	protected  _originalMoveRouteIndex:number;
	protected  _waitCount:number;

	public constructor();

	public memorizeMoveRoute():void;
	public restoreMoveRoute():void;
	public isMoveRouteForcing():boolean;
	public setMoveRoute(moveRoute:MoveRoute):void;
	public forceMoveRoute(moveRoute:MoveRoute):void;
	public updateRoutineMove():void;

	public processMoveCommand(command:EventItem):void;

	public deltaXFrom(x:number):number;
	public deltaYFrom(y:number):number;

	public moveRandom():void;
	public moveTowardCharacter(character:Game_Character):void;
	public moveAwayFromCharacter(character:Game_Character):void;

	public turnTowardCharacter(character:Game_Character):void;
	public turnAwayFromCharacter(character:Game_Character):void;
	public turnTowardPlayer():void;
	public turnAwayFromPlayer():void;

	public moveTowardPlayer():void;
	public moveAwayFromPlayer():void;
	public moveForward():void;
	public moveBackward():void;

	public processRouteEnd():void;
	public advanceMoveRouteIndex():void;

	public turnRight90():void;
	public turnLeft90():void;
	public turn180():void;
	public turnRightOrLeft90():void;
	public turnRandom():void;
	public swap(character:Game_Character):void;

	public findDirectionTo(goalX:number, goalY:number):number;
	public searchLimit():number
}
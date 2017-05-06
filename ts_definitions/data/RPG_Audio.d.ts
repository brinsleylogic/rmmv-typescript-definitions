interface RPG_Audio
{
	name:string;
    pan:number;
    pitch:number;
    volume:number;
}

interface RPG_CachedAudio extends RPG_Audio
{
	pos:number;
}

interface BGM extends RPG_Audio {}

interface BGS extends RPG_Audio {}

interface ME extends RPG_Audio {}

interface SE extends RPG_Audio {}

interface BGM_Cached extends RPG_CachedAudio {}

interface BGS_Cached extends RPG_CachedAudio {}

interface ME_Cached extends RPG_CachedAudio {}

interface SE_Cached extends RPG_CachedAudio {}
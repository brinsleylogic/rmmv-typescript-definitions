// LZ-based compression algorithm, version 1.4.4
// https://github.com/pieroxy/lz-string
declare module LZString
{
	export function compressToBase64(input:string):string;
	export function decompressFromBase64(input:string):string;

	export function compressToUTF16(input:string):string;
	export function decompressFromUTF16(compressed:string):string;

	export function compressToUint8Array(uncompressed:string):Uint8Array;
	export function decompressFromUint8Array(compressed:Uint8Array):string;

	export function compressToEncodedURIComponent(input:string):string;
	export function decompressFromEncodedURIComponent(compressed:string):string;

	export function compress(input:string):string;
	export function decompress(compressed:string):string;
}
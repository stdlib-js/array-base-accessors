/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/// <reference types="@stdlib/types"/>

import { AccessorArrayLike, ArrayLike } from '@stdlib/types/array';
import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import accessors = require( './index' );

/**
* Returns an array-like object supporting the get/set protocol.
*
* @returns array-like object
*/
function accessorArray(): AccessorArrayLike<number> {
	const arr: AccessorArrayLike<number> = {
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4,
		'length': 4,
		'get': ( idx: number ): number => {
			return arr[ idx ];
		},
		'set': ( value: number, idx: number ): void => {
			arr[ idx ] = value;
		}
	};
	return arr;
}

/**
* Returns an array-like object.
*
* @returns array-like object
*/
function arrayLike(): ArrayLike<number> {
	const arr: ArrayLike<number> = {
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4,
		'length': 4
	};
	return arr;
}


// TESTS //

// The function returns an accessor object...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	accessors( x1 ); // $ExpectType GenericAccessorObject<number>

	const x2 = new Float64Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x2 ); // $ExpectType Float64AccessorObject

	const x3 = new Float32Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x3 ); // $ExpectType Float32AccessorObject

	const x4 = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x4 ); // $ExpectType Int32AccessorObject

	const x5 = new Int16Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x5 ); // $ExpectType Int16AccessorObject

	const x6 = new Int8Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x6 ); // $ExpectType Int8AccessorObject

	const x7 = new Uint32Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x7 ); // $ExpectType Uint32AccessorObject

	const x8 = new Uint16Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x8 ); // $ExpectType Uint16AccessorObject

	const x9 = new Uint8Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x9 ); // $ExpectType Uint8AccessorObject

	const x10 = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x10 ); // $ExpectType Uint8cAccessorObject

	const x11 = new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x11 ); // $ExpectType Complex128AccessorObject

	const x12 = new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] );
	accessors( x12 ); // $ExpectType Complex64AccessorObject

	const x13 = accessorArray();
	accessors( x13 ); // $ExpectType GetSetAccessorObject<number>

	const x14 = arrayLike();
	accessors( x14 ); // $ExpectType IndexedAccessorObject<number>
}

// The compiler throws an error if the function is not provided an array-like object...
{
	accessors( 123 ); // $ExpectError
	accessors( true ); // $ExpectError
	accessors( false ); // $ExpectError
	accessors( null ); // $ExpectError
	accessors( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];
	accessors(); // $ExpectError
	accessors( x, 5 ); // $ExpectError
}

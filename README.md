<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# accessors

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return element accessors for a provided array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
accessors = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessors@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-accessors/tags). For example,

```javascript
accessors = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessors@v0.0.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var accessors = require( 'path/to/vendor/umd/array-base-accessors/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessors@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.accessors;
})();
</script>
```

#### accessors( x )

Returns element accessors for a provided array-like object.

```javascript
var obj = accessors( [ 1, 2, 3, 4 ] );
// returns {...}

var bool = obj.accessorProtocol;
// returns false

var fcns = obj.accessors;
// returns [ <Function>, <Function> ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned object has the following properties:

    -   **accessorProtocol**: `boolean` indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
    -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element (i.e., a getter) and whose second element is an accessor for setting an array element (i.e., a setter).

-   The getter accessor accepts two arguments:

    -   **arr**: array-like object.
    -   **idx**: element index.

-   The setter accessor accepts three arguments:

    -   **arr**: array-like object.
    -   **idx**: element index.
    -   **value**: value to set.

-   The intent of this function is to provide a minimal abstraction over how elements are accessed when operating on indexed (i.e., array-like objects supporting element accesss via integer indices using bracket `[]` syntax) and accessor (i.e., array-like objects supporting the get/set protocol in which explicit `get` and `set` methods are used for element access) array-like objects.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessors@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an array:
var x = new Complex64Array( zeroTo( 10 ) );

// Get accessor functions for retrieving array elements:
var obj = accessors( x );
// returns {...}

// Check whether the array supports the accessor protocol:
var bool = obj.accessorProtocol;
// returns true

console.log( 'Accessor protocol: %s', bool );

// Retrieve an array element:
var v = obj.accessors[ 0 ]( x, 1 );
// returns <Complex64>

console.log( 'x[1] = %s', v.toString() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-accessors.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-accessors

[test-image]: https://github.com/stdlib-js/array-base-accessors/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/array-base-accessors/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-accessors/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-accessors?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-accessors.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-accessors/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-accessors/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-accessors/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-accessors/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-accessors/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-accessors/main/LICENSE

</section>

<!-- /.links -->

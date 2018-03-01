# Practice 2 of PL: OOP
[![Build Status](https://travis-ci.com/ULL-ESIT-PL-1718/oop-alu0100973914.svg?token=S9Gezg46GoVeGRv4GwA9&branch=master)](https://travis-ci.com/ULL-ESIT-PL-1718/oop-alu0100973914)
[![npm version](https://badge.fury.io/js/%40alu0100973914%2Foop.svg)](https://badge.fury.io/js/%40alu0100973914%2Foop)

In this practice we have designed a new type of Cell for the **Laying out a table** example of the sixth chapter of EloquentJS.

## New kind of cell
The new kind of cell implemented in this practice is the **Stretch Cell**. This type of cell wraps another cell and ensure that the resulting cell has at least the given *width* and *height*, even if the inner cell would naturally be smaller.

## Development

The development of these practice was made in a new branch of this repository called "ecma6". I have developed two classes to represent this kind of cell:
* InheritedStretchCell
* StretchCell

**InheritedStretchCell** extends the TCell class. It must be created with an string as an argument which represents the content of the cell. The second and third parameters passed to the constructor are the width and the height respectively of the new InheritedStretchCell. However, the real width/height of this new type of cell would be the maximum between the value returned by the minWidth()/minHeight() function of the inner TCell of the InheritedStretchCell and the parameter specified when the InheritedStretchCell was created. Example of creation:
```js
var inheritedStretchCell = new InheritedStretchCell("Hello!", 8, 2);
```
**StretchCell** works in the same way of InheritedStretchCell. However, this class encapsulates a reference to
a TCell object, instead of extends TCell class. Therefore,  a TCell object must be given as a parameter to the constructor. Example of creation:
```js
var stretchCell = new StretchCell(new TCell("Hi!"), 4, 3);
```

The tests created to check the behaviour of this new type of cell are located in tests/test.js file.

## Continuous integration with TravisCI

To add continuous integration to this practice i activated this repository in travis-ci.com and then, when i did a commit, the tests were executed in **TravisCI**.
[Travis CI repository](https://travis-ci.com/ULL-ESIT-PL-1718/oop-alu0100973914)

## Istanbul coverage

To check the coverage of the code developed during this practice, I executed the gulp task **cover** which invokes nyc (Istanbul command line interface):
```bash
gulp cover
```

Then the coverage folder was created with the results of the operation in some HTML files, and i was able to see the results of the analysis executing the next commands:
```bash
npm i node-static -g
static -p 8080 -a 10.6.129.67
```
Visiting the 10.6.129.67:8080/coverage direction using a browser i could see the results:
![coverage](screens/coverage.png)

## Modification for practice 2
The modification was develop in a new branch of this repo: **modification**

# Practice 3 of PL: NPM modules

## Combined repository
[Repository](https://github.com/ULL-ESIT-PL-1718/prueba-oop-alu0100973914.git) containing the tests for the module, and this is the [main repository](https://github.com/ULL-ESIT-PL-1718/npm-modules-alu0100973914.git) which contains both.

## Package publication
* [@alu0100973914/oop](https://www.npmjs.com/package/@alu0100973914/oop)
* [Test repository](https://github.com/ULL-ESIT-PL-1718/prueba-oop-alu0100973914.git)

## Npm package badge
A npm package badge have been added to the this README.md.

## Code documentation
To see the code documentation click [here](https://ull-esit-pl-1718.github.io/oop-alu0100973914/).

## Open / Closed Principle
Now the users of the package can add it's own types of cell without modifying the code, they have to use the methods of the registry class **addMapClass** and **findClass**. These two methods are exported as a part of the module.
```js
	var module = require("@alu0100973914/oop");

	class ChuchuCell {
	
	}
	module.Registry.addMapClass("ChuchuCell", ChuchuCell);
```

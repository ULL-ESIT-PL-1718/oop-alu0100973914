# Practice 2 of PL: OOP
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
	  var stretchCell = new StretchCell("Hi!", 4, 3);
```

The tests created to check the behaviour of this new type of cell are located in tests/test.js file.


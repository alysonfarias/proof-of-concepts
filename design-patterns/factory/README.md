# Factory

- Object creation logic becomes too convoluted
- Initializer is not descriptive
--- Name is always __init__
--- Cannot overload with same sets of arguments with different names
--- Can turn into 'optional parameter hell'
- Wholesale object creation(non-piecewise, unlike Builder) can be outsourced to
--- A separete method (factory method)
--- that may exist in a separate class(Factory)
--- Can create hierarchy of factories with abstract factory

## A component responsible solely for the wholesale(not piecewise) creation of objects.

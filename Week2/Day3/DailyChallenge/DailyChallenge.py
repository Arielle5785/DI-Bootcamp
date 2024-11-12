# A Circle can be defined by either specifying the radius or the diameter.
# The radius is the distance from the center of the circle to any point on its edge.
# If you have the diameter(d), you can find the radius with: r = d/2
# The diameter is the distance across the circle, passing through the center: d = 2*r
# The user can query the circle for either its radius or diameter. ok
# Other abilities of a Circle instance:
# Compute the circle’s area:
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean - use a dunder method
# Be able to put them in a list and sort them
# Bonus(not mandatory): Install the Turtle module, and draw the sorted circles

class Circle:
    pi = 3.14159

    def __init__(self, radius=0, diameter=0):
        if radius:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError('Either radius or diameter must be specified.')

    def area(self):
        a = self.pi * (self.radius ** 2)
        return a

    def __str__(self):
        return f'Circle with radius {self.radius} and diameter {self.diameter}'

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError('Can only add another Circle.')

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return False

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented


c1 = Circle(3, 0)
c2 = Circle(0, 8)
c3 = Circle(5, 10)
c4 = Circle(0, 14)
c5 = Circle(6, 0)

# print(c1)
# print(f'Area: {c1.area()} cm2')

# c6 = c1 + c2
# print('New Circle after addition:', c6)

# print('Is c1 equal to c3?', c1 == c3)
# print('Is c1 smaller than c3?', c1 < c3)

circles = [c1, c2, c3, c4, c5]
sorted_circles = sorted(circles)
print('Sorted circles by radius:', [str(circle) for circle in sorted_circles])

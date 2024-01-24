# Material Designer

Overview:

This is a take home project from Exabyte-io (https://github.com/Exabyte-io/rewotes/blob/dev/Materials-Designer.md)
The purpose of the app is to build a UI that displays a file's contents (.xyz) and a 3D representation of the contents.

I will be using React/vite and Three.js

Some Background/Thoughts:
I have never used Three.js or worked with the file types POSCAR and XYZ.
From what I've read, those file types aren't standardized. For example, xyz files will display a coord on a single line. This coord line CAN start with a element's symobl or not and the xyz coords can be separated by a space, tab, comma, or comma+space.

From the projects repo:

Requirements:
Build a general layout with focus areas (eg. toolbar, structure viewer, source viewer)
Implement two edit modes:
source editor (to edit material in textual representation)
visual editor (to adjust material visual representation)
Support import from a file format, (eg. POSCAR, XYZ)

Expectations:
up and running application OR high fidelity clickable mockups
general IDE layout (e.g. menu, toolboxes)
reactive material editor (edit material file → immediately see results on 3D representation)
clean and documented code
tests

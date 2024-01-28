# nearest pixel issue

at the edge of any surface, the last row of pixels mixes with the 'nearest pixel' which lies in theory behind that pixel. (in case of a texture fitted to face, the nearest pixel will be from the repeating texture tile) this can create weird lines between faces when the pixel color is different on e.g. the top and bottom edge of a texture tile. the solution to that problem would be to pad the texture image with 1px of duplicate pixels around the border, then scale the texture onto the face to where this 1px border is outside the face.

However, now a new problem occurs where the line between two faces doesnt appear anymore, but only until you move a few hundred units away from it, then it appears again.
this is due to the engine downscaling textures at a certain distance.
You can either go around this issue by making a thicker border or by using 'nomipmaps' in the shader which will prevent the downscaling.

The simpler solution is to use 'clampmap' which does essentially the same thing automatically.

**Solution 1:**
Instead of 'map' use 'clampmap' in the shader. This effectively creates an infinite repeating pixel border around the texture.

**Solution 2:**
Create a 1px repeating pixel border around the image. Create a brush with the same dimensions. (e.g. 1024 x 1024 px image -> 1024 x 1024 unit brush) then, with the resize tool (Q, not transform tool) bring each edge in by 1 unit.
*(with this solution you also need to use 'nomipmaps'. alternatively, if you don't want to use that, you can make the border 2px/units or thicker)*


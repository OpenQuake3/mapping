# Different '.map' formats.

Different map formats can be chosen in custom netradiant:
**preferences > brush > new map brush type**

Map format only applies on new map. So to convert a map into a different map format you either:
copy everything > start new map > paste
or:
start new map > import old map

Garux:
AP has axially aligned orthogonal basis, thus natively every 1/6 part of faces directions is mapped seamlessly + texture is stretched the more, the closer to 45 degrees.
BP has face aligned arbitrary basis, thus textures aren't stretched and are 'readable' by default; also allows full texture lock and any sort of mapping due to basis not being locked to orthogonal (for example imitating AP).
Valve220 has arbitrarily aligned basis, so allows mappings, which BP does + for example may behave like AP on edits w/o texture lock.

##**tl;dr: use Valve220**

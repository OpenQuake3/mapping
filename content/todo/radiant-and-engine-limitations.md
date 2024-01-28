# radiant and engine limitations

**some of these are q3map2 limitations, some are q3a limitations**
**some of these might be outdated! mark tested if you have**
Models - 1024
~~Brushes - 32,768~~ (wrong. can be higher)
Entities - 2048 (might be 1024)
~~Textures - 512 (q3map2 limitation)~~ (in older q3map2 versions)
Textures - 2048 (q3 limitation (MAX_DRAWIMAGES)
Shaders - 1024
Areas - 256
Planes - 65,536
Nodes - 65,536
Brush sides - 65,536
Leafs - 65,536
Leaf faces - 65,536
Leaf brushes - 65,536
Portals - 65,536
MAX_MAP_DRAW_SURFS (131072)
Lighting - 4,194,304
file path character limit - 63 (e.g. file path to sound file within speaker entity noise key)

SubModels - 255 (tested q3a and idfe)

The following entities count as 'SubModel':
func_bobbing, func_button, func_door, func_pendulum, func_plat, func_rotating, func_static, func_train, target_teleporter, misc_teleporter_dest - mby more
Each of these entities count as one Submodel regardless of how many brushes/models are within the entity

Further tests on SubModels:
made a map with 255 func_doors which is the exact submodel limit
running it on a server, its all fine with 2 clients connected
once you connect the 3rd client, the door #255 will just disappear, and another door will disappear with every additional client you connect
mby that could be useful for something




## Attachments

- [Topic: max # of entities in a quake 3 map?](https://www.quake3world.com/forum/viewtopic.php?t=46343)
- [Topic: qfiles.h](https://www.quake3world.com/forum/viewtopic.php?p=802872)
- [Topic: GTK's limit thread [aka. MAX_xxx]](https://www.quake3world.com/forum/viewtopic.php?f=10&t=40880)

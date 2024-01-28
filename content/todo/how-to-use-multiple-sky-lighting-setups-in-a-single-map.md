# How to use multiple sky/lighting setups in a single map

---

Method discovered by **ulbens** (from the Urban Terror community)
Guide and [Tutorial Files](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/6256d55590dffe38008a262f/download/merge_tutorial.pk3 "‌") by **ulbens** and **quBit**

**Discord:**
ulbens
qubit.q3

---

Example Video: [https://streamable.com/0emxlk](https://streamable.com/0emxlk "‌")

---

**Requirements**: [q3map2 (bundled with Netradiant Custom)](https://trello.com/c/ozD1Pj9I/64-actively-developed-netradiant "‌") (Version 2022-02-11 or newer)

The idea is to compile different BSPs for each room with a different sky/lighting setting, then merge the different rooms into a single BSP.

---

## Setup the rooms .map and BSP files

Create different map files for each room with a different sky. This example will use 2 simple ones, mergetut\_room1.map and mergetut\_room2.map. Each room must have at least one entity in it (info_null for a worthless one).

mergetut_room1.map:

![a.png](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/625491f532cf48503aba7d93/download/a.png)

mergetut_room2.map:

![b.png](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/625491f71514e22398d93f6e/download/b.png)

Compile each of these rooms with the light settings you want.

---

## Setup the main .map and BSP file

Brushes will be merged as detail, so you'll need a main BSP that will have the portals you want in the final one. To do this, build a caulk skeleton of the rooms with the structural brushes that are needed (caulkskeleton.map). Use import function to be sure of the position of the brushes. Put all the actual entities you need in this .map (spawn, triggers, targets, ecc).

![c.png](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/625491f8e27b9357135fe8a3/download/c.png)

Compile. (light stage is not required for this one)

---

## Merge the BSPs

Finally, merge the room BSPs into the main one using q3map2. First, we merge the first room BSP into the main BSP:

`q3map2 -mergebsp -world -fixnames mergetut_caulkskeleton.bsp mergetut_room1.bsp`

This will create a new BSP named mergetut\_caulkskeleton\_merged.bsp. Now merge the second room BSP into this one:

`q3map2 -mergebsp -world -fixnames mergetut_caulkskeleton_merged.bsp mergetut_room2.bsp`

This will create the final BSP named Mergetut\_caulkskeleton\_merged_merged.bsp. You can rename this BSP into your final map name.

_A .bat file is included in the_ [_Tutorial Files_](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/6256d55590dffe38008a262f/download/merge_tutorial.pk3 "‌")_. You just need to edit the file paths in the .bat file to match your map files and q3map2 location._

---

## External lightmaps

_credit to **Aciz** for this portion of the guide_

This method currently (as of 2023-08-30) only works with internal lightmaps. If you’re using external lightmaps, you will have to manually rename and append the external lightmap textures generated for each map:

Let's say you merge 4 maps together, each having one or more lightmaps:

```
map1.bsp - lm_0000.tga
map2.bsp - lm_0000.tga, lm_0001.tga
map3.bsp - lm_0000.tga
map4.bsp - lm_0000.tga, lm_0001.tga, lm_0002.tga
```

The merging order is important - this determines the numbering order of lightmaps for the final merged map. Let's say that we first merge in this order:

```
merge map2.bsp into map1.bsp
merge map3.bsp into resulted bsp
merge map4.bsp into resulted bsp
```

This merging order means that we need to rename the lightmaps to be in this order

```none
map1.bsp - lm_0000.tga
map2.bsp - lm_0001.tga, lm_0002.tga
map3.bsp - lm_0003.tga
map4.bsp - lm_0004.tga, lm_0005.tga, lm_0006.tga
```

‌

---

## Additional info

- `-world` will merge in the brushes
  `-fixnames` will prevent target/targetnames naming collisions if you used such entities in room BSPs
- You can use q3map2 to make the pk3 for you. The command for that would be: `q3map2 -pk3 mergetut_caulkskeleton_merged_merged.bsp`
  _(Or whatever you renamed the final bsp to)_
  _A .bat file is included in the_ [_Tutorial Files_](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/6256d55590dffe38008a262f/download/merge_tutorial.pk3 "‌")_. You just need to edit the file paths in the .bat file to match your .bsp file and q3map2 location._
- This same result can also be achieved with just two .map files and one merge operation. If you just copy the mergetut\_caulkskeleton.map brushes/entities and paste it into mergetut\_room1.map and compile that, then merge mergetut_room2.bsp into that, the result will be effectively the same. We just use three .map files for the tutorial as it's easier to visualize and understand the whole concept that way.
- You can use this same process to have multiple floodlights, gridsizes, _ambient or other worldspawn values in a BSP.

---

## Attachments

- [2022-04-11_22-13-03.png](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/62548bd6d9278b844f15ba42/download/2022-04-11_22-13-03.png)
- [a.png](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/625491f532cf48503aba7d93/download/a.png)
- [b.png](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/625491f71514e22398d93f6e/download/b.png)
- [c.png](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/625491f8e27b9357135fe8a3/download/c.png)
- [merge_tutorial.pk3](https://trello.com/1/cards/625432da520dca3fc4576fb6/attachments/6256d55590dffe38008a262f/download/merge_tutorial.pk3)

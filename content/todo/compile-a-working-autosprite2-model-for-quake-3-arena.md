# Compile a working autosprite2 model (for Quake 3 Arena)

Using a autosprite2 shader on a md3 model *(or a patch or any model for that matter)* breaks the geometry of the face. This is an issue in Q3A, but not in some other games e.g. Warsow.

Supposedly, q3dm6.bsp has a working md3 autosprite2 model. (models/mapobjects/slamp/slamp.md3)

If anyone could manage to **compile a working autosprite2 model for Q3A**, this might lead us closer to understanding and ultimately fixing the issue.

**How you can help:**
Share this with your communities and anyone you think might have a lot of knowledge about id Tech 3 related things.

** If you can help or have ideas, please get in contact with me on discord (quBit#0137)**


## Attachments

- [example 2](https://trello.com/1/cards/5f41c333e45cdf5b7b1085f5/attachments/5f41c4fe5bfb58284277068d/download/2020-08-21_02-28-14.mp4)
- [working brush | broken model | broken patch](https://trello.com/1/cards/5f41c333e45cdf5b7b1085f5/attachments/5f41c5339d851961aacfe163/download/2020-08-21_05-23-48.mp4)
- [working brush | broken model | broken patch](https://trello.com/1/cards/5f41c333e45cdf5b7b1085f5/attachments/5f41c937b3b676627e6a0764/download/iDFe.x64_2020-08-23_03-40-56.png)

## Comments

### megamindbrian on 2022-06-23

I wrote an "autosprite3" for this purpose I need to move it to tr_main.c.
https://github.com/briancullinan/multigame/blob/master/code/cgame/cg_ents.c#L924
Basically just subtract the current view angle from the model's rotation so the entire model appears to always face the camera at whatever original side it started with.

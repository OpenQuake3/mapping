# Background video in oDFe/iDFe menu (q3 defrag)

This is a 192 frame long video of the [DFWC map Serenity](https://ws.q3df.org/map/DFWC2019-6/ "‌") running at 24fps. Footage is taken from the video [Moontrip by Ryan_H](https://youtu.be/mw1yKEEyhEU "‌").
It's basically 192 jpeg frames being played with an animmap shader, replacing the default defrag menu background.

**How to install:**

- [Download the pk3](https://u.teknik.io/EtbqO.zip "‌")
- Place the pk3 inside your `quake3/defrag` folder
- Make sure you have the [latest version of oDFe](https://github.com/JBustos22/oDFe/releases/tag/latest "‌") or [iDFe](https://goo.gl/3pyDS3 "‌")
  This will **not** work with the vulkan versions!

**How it works:**
**A neatly written in-depth documentation is included in the shaderx file**
Understanding this concept can be useful for creating ingame shaders as well.

_Feel free to use this or edit it with your own video. Make sure that the 4 corner pixels in each image are black, otherwise it will not work. (see documentation in shaderx file)_

_Aspect ratio of defrag menu is always forced into 4:3. While 1440x1080 would be optimal, the video starts stuttering when both dimensions are over 1024. That's why i chose 1440x1024 here which runs smoothly._

**Note that this significantly increases loading times of iDFe and between switching maps and vid_restart.**
Loading times can be reduced by:

- Compressing images
- Downscaling image resolution
- Using fewer images

---

```
//----------------------------------------------------------------------------------------//
//                                                                                        //
//                            iDFe menu video shader by quBit                             //
//                                                                                        //
//                                version 1.0   2021-01-04                                //
//                                                                                        //
//----------------------------------------------------------------------------------------//


//----------------------------------------------------------------------------------------//
//                                                                                        //
//                               feel free to share and modify                            //
//                    consider linking https://trello.com/b/zJp4pE3m/                     //
//                                                                                        //
//----------------------------------------------------------------------------------------//


//   Requirements:
//   iDFe version 1708 (2020-04-04) or higher


//   How it works:

//----------------------------------------------------------------------------------------//
//                                       animMap 24                                       //
//----------------------------------------------------------------------------------------//
//                                                                                        //
//   ->  Plays 24 images per second                                                       //
//   ->  Can play up to 8 images in q3a (shader format)                                   //
//       and up to 24 images in iDFe (shaderX format)                                     //
//   ->  A shader can have up to 8 shaderstages which means a total of up to 64/192       //
//       animated images.                                                                 //
//                                                                                        //
//----------------------------------------------------------------------------------------//
//                        alphaGen wave square 0.5 0.5 1.000 0.125                        //
//----------------------------------------------------------------------------------------//
//                                                                                        //
//   ->  Alters this stage between visible/invisible (alpha 0/1) once every cycle.        //
//       With both the 'base' and 'amplitude' value at 0.5, the alphaGen value            //
//       alternates between '1' (invisible) and '0' (visible).                            //
//   ->  Each cycle lasts 8 seconds as set by the frequency value 0.125 (1/8)             //
//   ->  It is invisible for the first half of the cycle, then visible for the last       //
//       half.                                                                            //
//                                                                                        //
//----------------------------------------------------------------------------------------//
//                        tcMod stretch square 0.5 0.5 0.875 0.125                        //
//----------------------------------------------------------------------------------------//
//                                                                                        //
//   ->  This effectively achieves the same result as the alphaGen above but does         //
//       so in a different way.                                                           //
//   ->  Instead of using alphagen, the image is squished (negative stretch) in           //
//       order to make it invisible. With both the 'base' and 'amplitude' value at        //
//       0.5, the stretched image size alternates between 'size 0' and 'size 1'.          //
//   ->  It is important to note that 'size 0' doesn't make it entirely invisible         //
//       but essentially squishes it down to a tiny dot. Think of this tiny dot as        //
//       consisting of only the four corner pixels of the original image.                 //
//       If the corner pixels are blue, the whole screen will be blue, because the        //
//       texture is always tiled across the screen.                                       //
//       This is why the four corner pixels have to be black, so the blendFunc can        //
//       make the tiny dot (black pixels) invisible.                                      //
//   ->  It is visible for the first half of the cycle, then invisible for the last       //
//       half. This is the reverse of the alphaGen visibility.                            //
//   ->  The picture will only be actually visible whenever BOTH, the alphaGen AND        //
//       tcMod modifiers are 'set to visible'. If tcMod makes it visible for the          //
//       first half of the cycle, and alphaGen makes it visible for the last half,        //
//       it will never be actually visible. That's why we offset this waveform by         //
//       one eighth of a cycle, so the 'visible' conditions of both waveforms             //
//       overlap for one eighth of each cycle. This offset is achieved by                 //
//       offsetting the phase value by one eighth back against the alphaGen phase         //
//       value. (1.000 - 0.125 = 0.875)                                                   //
//   ->  Now each of the eight stages will be visible for one eighth of a cycle.          //
//       To make each stage visible one after the other, each phase as a whole is         //
//       also offset by one eighth of a cycle.                                            //
//                                                                                        //
//                        The 1st cycle phases are 1.000 and 0.875                        //
//                        The 2nd cycle phases are 0.875 and 0.750                        //
//                        The 3rd cycle phases are 0.750 and 0.625                        //
//                                          ....                                          //
//                        The 8th cycle phases are 0.125 and 0.000                        //
//                                                                                        //
//       This part is rather counterintuitive because it goes from 1 to 0 rather          //
//       than from 0 to 1. A lower phase value means that the waveform starts             //
//       drawing from an earlier point which in turn shifts the waveform forwards,        //
//       not backwards.                                                                   //
//                                                                                        //
//----------------------------------------------------------------------------------------//
```

## Attachments

- [latest iDFe engine](https://goo.gl/3pyDS3)
- [iDFe_menu.gif](https://trello.com/1/cards/5fced13549e8072e93242674/attachments/5ff2acdf31fdd138b3a99586/download/iDFe_menu.gif)
- [pk3 download](https://u.teknik.io/EtbqO.zip)
- [quBit_menu-serenity.shaderx](https://trello.com/1/cards/5fced13549e8072e93242674/attachments/60b65bbc4a3c890d981eb7ba/download/quBit_menu-serenity.shaderx)

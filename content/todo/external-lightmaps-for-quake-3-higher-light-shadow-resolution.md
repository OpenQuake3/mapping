# External lightmaps for quake 3 (higher light/shadow resolution)

---

🛈 *While this will work in any id Tech 3 based game, some of those games/mods have actual support for external lightmaps implemented. This method for quake 3 is more of a workaround.*

---

###What is a 'lightmap'?
When you compile a map with lights in it, the compiler will calculate (raytracing) where all the shadows and lights are on your map. Imagine this as a huge texture spanning across your whole map where it paints in lights and shadows on top of your regular textures. In reality, it splits this up into a bunch of small 128*128px tga textures which are then embedded inside your .bsp map file. These textures are called 'lightmaps', more specifically, 'internal lightmaps', because they're inside the bsp.

---



###What is an 'external lightmap'
An 'external lightmap' in quake 3 is essentially the same thing as an 'internal lightmap', but it doesn't have the 128px resolution size limitation. It's really just a texture which is applied to your map as a shader. The compiler can create these textures and shaders instead of the regular 'internal lightmaps'.

---



###Why and when should I use them?
The big advantage of external lightmaps is that they make it easier for your map to have detailed high resolution shadows, instead of pixely or blurry shadows. This is because any surface can only span across a single lightmap. So if you have a big brush with a shadow on it, this shadow will have a max. resolution of 128 pixels using internal lightmaps, but can go up to 1024 pixels using external lightmaps.

🛈 *An external lightmap (1024px) has the same size as 64 internal lightmaps!*

---

###Sounds great! How do I do it?

There are two guides for this online:

---

[Guide by **Joe Kari**](https://sgq3-mapping.blogspot.com/2009/01/using-hi-resolution-external-lightmap.html)

This old guide by **Joe Kari** visualizes the concept very well with example screenshots, but the method is slightly outdated. (still works though)

---

[Guide by **swelt**](https://docs.google.com/document/d/1J2xTacyVZcBi3a4fOdQ_oZ0wsQWcLKpp2R7-JgtBkpg/edit?usp=sharing)

This more recent, practical text guide by **swelt** explains how to generate external lightmaps. It describes the old way of doing it as well as an easier new way of doing it.

---

Reading both guides should give you a good understanding for what external lightmaps are, how to create them as well as why and when it makes sense to do so.


---

###But my pk3 is huge now

Keep in mind that  you can convert all your external TGA lightmaps into JPG (make sure to use little to no compression to avoid jpg artefacts) to lower your overall file size. However, TGA files actually compress a lot when packed into a PK3, so your final PK3 size might not be much smaller with JPG.

---




## Attachments

- [Guide by swelt](https://docs.google.com/document/d/1J2xTacyVZcBi3a4fOdQ_oZ0wsQWcLKpp2R7-JgtBkpg/edit?usp=sharing)
- [Guide by Joe Kari](https://sgq3-mapping.blogspot.com/2009/01/using-hi-resolution-external-lightmap.html)
- [vivaldi_2021-06-08_04-46-24.png](https://trello.com/1/cards/60becdf23453510b9eb36605/attachments/60bedb66b13f376e3014fea7/download/vivaldi_2021-06-08_04-46-24.png)

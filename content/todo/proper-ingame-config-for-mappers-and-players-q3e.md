# Proper ingame config for mappers and players (q3e)

---

**last updated 2022-02-15**
> -> [Download mapper_config_2022-02-15.cfg](https://trello.com/1/cards/60683fe0098bec589754e750/attachments/620c234cc17393861045d06b/download/mapper_config_2022-02-15.cfg) \<-

*To easily apply this config, place the file in your baseq3 folder, launch the game and type this into the console:*
`/exec mapper_config_2022-02-15`

---

 This applies to q3e and idfe/odfe specifically, but probably also applies in large parts to other engines and games.

---

Please make sure that your map looks good on a standard config,
Most notably **r_overbrightbits 1** in fullscreen mode. *(Does not display in windowed mode unless* **r_fbo 1** *and* **r_ignorehwgamma 0** *is also set)*

Feel free to copy this cfg, rename it to your mapname and include it in the pk3 of your map. I do this and prompt players to type `/exec mapname` with a little note at the spawn of my map.

Here is my wip list of settings that i think every player (and especially every mapper) should have:
*(Neits [Defrag Bundle](https://defrag.racing/help/get-started) also has these as default to help establish a standard.*

---



`r_fbo 1`
`r_ignorehwgamma 0`
`r_vbo 1`
`r_gamma 1`
`r_intensity 1`
`r_picmip 0`
`r_overbrightbits 1`
`r_mapoverbrightbits 2`
`r_hdr 0`
`r_ext_supersample 0`
`r_vertexlight 0`
`r_ext_multisample 4`
`r_ext_max_anisotropy 32`
`r_ext_texture_filter_anisotropic 1`
`r_drawsun 0`
`r_textureMode "GL_LINEAR_MIPMAP_LINEAR"`
`r_subdivisions 4`
`r_fullbright 0`
`r_dynamiclight 1`
`r_fastsky 0`


---



Some of these are more essential than others. A few might even be down down to personal preference or system specs. But generally i think this is a good baseline which we really need in order to put an end to maps being way too dark or bright and all that.

---

###A few descriptions/explanations:

**r_fbo 1**
- Enables r_ext.. options for antialiasing and more. Also required for r_overbrightbits 1 to work in windowed mode.

**r_ignorehwgamma 0**
- Required for r_overbrightbits 1 to work in windowed mode.

**r_vbo 1**
- Usually increases performance

**r_gamma 1**
- Can be increased situationally if a map is to dark. Remember to set back to 1 after
**r_overbrightbits 1**
- By default only works in fullscreen mode which is one of the biggest reasons why some maps are way too dark or bright. Requires r_fbo 1 and r_ignorehwgamma 0 in order to also work in windowed mode.

**r_hdr 0**
- Enabling this hits performance by quite a bit for a very small and situational benefit. Should usually stay disabled.

**r_ext_supersample 0**
- Enabling this hits performance by quite a bit for a very small and situational benefit. Should usually stay disabled.

**r_ext_multisample 4**
- Anti-Aliasing. Requires r_fbo 1. Usually not very taxing on performance but could be lowered to 2 or 0 if needed. Max value is 8.

**r_drawsun 0**
- Stupid and misleading. Always disable.


## Attachments

- [Photoshop_2021-04-06_11-45-56.png](https://trello.com/1/cards/60683fe0098bec589754e750/attachments/606c2df1fa62fa61ac6374dd/download/Photoshop_2021-04-06_11-45-56.png)
- [mapper_config_2022-02-15.cfg](https://trello.com/1/cards/60683fe0098bec589754e750/attachments/620c234cc17393861045d06b/download/mapper_config_2022-02-15.cfg)

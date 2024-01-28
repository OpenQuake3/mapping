# about models

---

**Update 2022-02-13**

A new version of [NetRadiant](https://trello.com/c/ozD1Pj9I "") has been released! This version supports FBX models and a bunch of other formats. MD3, ASE, and other formats are still fine to use, but modern formats such as FBX might be preferred when creating new models as to avoid the limitations of older formats.
**All formats should be equal to MD3 in terms of performance now.**
I should rewrite this whole card eventually, as it was written at a time when MD3 was the superior format and there were no alternatives.

---

**Update 2022-02-01**

### New workflow for detailed high poly maps with amazing lighting

misc_models will perform best without ticking the 'forcemeta' box in the entity editor. The problem with that however, is that you need to enable 'forcemeta' if you want your model to be lightmapped by q3map2. Otherwise it can only be vertex lit.

One workaround to still have your high performence non-forcemeta models lightmapped, is to duplicate the model in blender, give it a new texture and bake your lighting into that. You can then write a shader with `polygonOffset` for the lightmap texture and put that model on top of the regular textured model so the lightmap displays on top of the textures.
I used this exact technique to create the defrag map [A01-Race](https://ws.q3df.org/map/A01-Race/ ""). More info in the readme inside the pk3.

This is the only way to get very detailed high-poly models with lightmaps in Quake 3 without taking a big hit on performance. Also note that q3e based clients such as iDFe and oDFe have much better performance with these models compared to vanilla Quake 3, mainly due to the `r_vbo 1` setting. You can still [optimize your map](https://trello.com/c/r724EX0v "") with hints and such.

---

### **This following part was written back when MD3 was the only good option. as stated in the updates above, this is not the case anymore. while some is outdated due to this, most info below is still useful and relevant for models.**

**Info about (mostly MD3) models**

_All the following info about surfs/groups does not apply to models with forcemeta enabled. Custom normals also do not work with forcemeta models._

- In current radiant/q3map2 versions, MD3 is the superior file format for non-forcemeta models. (this is because the compiler was never adjusted for formats other than md3. see [attached card](https://trello.com/c/TU76XELa/160-different-model-formats-behaving-drastically-different-need-testers-different-idt3-games "")) However, in the [beta version](https://www.dropbox.com/s/uqq46o8grlrolu4/netradiant-custom-wip.7z?dl=1 ""), the compiler is adjusted to where MD3 has no advantage over other formats.
- Use the blender addon from the blender section (see [attachment](https://trello.com/c/aMEbgAXC/151-bsp-lightmapper-bake-lightmaps-in-blender-%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-md3-exporter-with-custom-normals-bsp-importer "")) to export MD3 models.
- Make sure to export the model into your baseq3/models folder or a subfolder of it. Radiant won't load it properly from other places.
- Each material in blender represents a separate shader/texture. Give your materials the name of the shader you want in it's place. (e.g. textures/base_floor/concretefloor1)
- If you would rather name your materials more simple in blender (e.g. floor), you can use the '\_remap' key in radiant's entity editor to assign the correct shader. (e.g. floor;textures/base\_floor/concretefloor1)
- You can UV-map a texture to your mesh in blender. The uv coordinates will be exported into the md3 and your shader will be mapped accordingly ingame.
- If you want your model to have custom normals (more specifically, the so called 'split normals') (see [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "")), make sure to enable 'Set Auto Smooth' for your mesh object in blender and add 'Weighted Normal' (tick 'keep sharp') modifier before exporting. _(or 'Normal Edit' modifier or 'Data Transfer' modifier with 'Face Corner Data' and 'Custom Normals' enabled)_
  ![blender\_2021-06-26\_07-31-51.png](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f428c2a55f7dc3b83ded087/dfd1105a20759234d209c6ae2e448b60/blender_2021-06-26_07-31-51.png)

  Enabling 'Auto Smooth' with a value of '30' will smooth all corners that are less than 30° while keeping corners sharper than 30° sharp. You might want to adjust this value to whatever fits your model best. For example, the left cube in the [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "") would have a value above 45° so it smooths the 45° bevels, while the right cube has a value of 0° to keep all edges sharp.
  !
  If you want your model to have custom normals (more specifically, the so called 'split normals') (see [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "")), make sure to enable 'Set Auto Smooth' for your mesh object in blender and add 'Weighted Normal' (tick 'keep sharp') modifier before exporting. _(or 'Normal Edit' modifier or 'Data Transfer' modifier with 'Face Corner Data' and 'Custom Normals' enabled)_
  !
  Enabling 'Auto Smooth' with a value of '30' will smooth all corners that are less than 30° while keeping corners sharper than 30° sharp. You might want to adjust this value to whatever fits your model best. For example, the left cube in the [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "") would have a value above 45° so it smooths the 45° bevels, while the right cube has a value of 0° to keep all edges sharp.
  \![blender\_2021-06-26\_07-35-06.png](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f428c2a55f7dc3b83ded087/c7e34ec356de2c0d49d825e223e12e6f/blender_2021-06-26_07-35-06.png "")
  If you want your model to have custom normals (more specifically, the so called 'split normals') (see [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "")), make sure to enable 'Set Auto Smooth' for your mesh object in blender and add 'Weighted Normal' (tick 'keep sharp') modifier before exporting. _(or 'Normal Edit' modifier or 'Data Transfer' modifier with 'Face Corner Data' and 'Custom Normals' enabled)_
  \![blender\_2021-06-26\_07-31-51.png](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f428c2a55f7dc3b83ded087/dfd1105a20759234d209c6ae2e448b60/blender_2021-06-26_07-31-51.png "")
  Enabling 'Auto Smooth' with a value of '30' will smooth all corners that are less than 30° while keeping corners sharper than 30° sharp. You might want to adjust this value to whatever fits your model best. For example, the left cube in the [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "") would have a value above 45° so it smooths the 45° bevels, while the right cube has a value of 0° to keep all edges sharp.
  !
  If you want your model to have custom normals (more specifically, the so called 'split normals') (see [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "")), make sure to enable 'Set Auto Smooth' for your mesh object in blender and add 'Weighted Normal' (tick 'keep sharp') modifier before exporting. _(or 'Normal Edit' modifier or 'Data Transfer' modifier with 'Face Corner Data' and 'Custom Normals' enabled)_
  !
  Enabling 'Auto Smooth' with a value of '30' will smooth all corners that are less than 30° while keeping corners sharper than 30° sharp. You might want to adjust this value to whatever fits your model best. For example, the left cube in the [example video](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f0e8cbf3fd404756f991b26/393be2bd0e53faee63055a2f78d9ce56/custom_normals_002.mp4 "") would have a value above 45° so it smooths the 45° bevels, while the right cube has a value of 0° to keep all edges sharp.
  ![blender\_2021-06-26\_07-35-06.png](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f428c2a55f7dc3b83ded087/c7e34ec356de2c0d49d825e223e12e6f/blender_2021-06-26_07-35-06.png)
  - If the value next to the 'Auto Smooth' tickbox is greyed out after importing a model, you first have to 'Clear Custom Split Normals Data' in order to be able to manipulate the split normals. (This might happen with imported MD3 objects or other models that already have split normals data baked into them)
    ![blender\_2021-06-26\_07-32-30.png](https://trello-attachments.s3.amazonaws.com/5bf16ccc3e07335e7c3ddb49/5f428c2a55f7dc3b83ded087/45f95c9981354aec2aff8b354fb8c42c/blender_2021-06-26_07-32-30.png)
- You do not need to triangulate faces before exporting. The exporter will do the best job triangulating your mesh in an efficient way.
- Another important thing about vertex normals (or 'split normals') is that the compiler will split vertices wherever a shared vertex has different split normals. This will result in vastly more vertices in your map compared to having smoothed vertex normals that are identical on shared vertices. A simple way to achieve this is to 'object>shade smooth', enable autosmooth, and add a weighted normal modifier.
- Size limitation: Vertices can only be in the area within _-512_ units to _511 units_ on each axis. If you have vertices outside of that range, it won't export.
- Vertex position coordinates will snap to multiples of 0.015625 units (1/64) when exporting from blender
- A MD3 model in Q3A can have a maximum of 32 'groups'. A 'group', also called a 'surf', holds a maximum of 999 vertices, 1999 triangles and 1 material/shader. (The exporter distributes the geometry into groups automatically) When creating a model in blender, the vertex limit might be lower due to how the model is exported and edges being split -> resulting in more vertices than the original mesh in blender.
- If your mesh has too many vertices/triangles, you can just split it into two (or more) objects and export them separately. In this case, since each of these 'groups' only holds geometry with the same material, it makes sense to split your mesh by material so you get all geometry with the same material in the same MD3. This can drastically improve ingame performance as compared to just splitting your model in half and having half-filled 'groups' in each model. Generally, fewer surfs equals higher performance.
- After exporting, it's always good to check the result by importing your md3 with 'Import Preset: Objects'. (download latest addon version if this is missing) This will import each group/surf as a separate object, so you can see if the exporter split your mesh into groups efficiently. optimally, each object will be one clean patch of connected mesh. However, if the splits are very messy (e.g. irregular meshes with lots of holes in them) you will have to adjust things. In this case, take your original mesh, go into edit mode, select everything and do 'Mesh > Sort Elements > View X Axis'. This will essentially re-order the faces for the exporter to know where to split it into surfs. This isn't always optimal but usually better than a messy mesh with holes in it. Hopefullly a better sorting algorithm will soon be implemented into q3map2 to make this step obsolete.

## Attachments

- [relinked](https://trello.com/c/TU76XELa/160-different-model-formats-behaving-drastically-different-need-testers-different-idt3-games)
- [https://trello.com/c/aMEbgAXC/151-bsp-lightmapper-bake-lightmaps-in-blender-%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80](https://trello.com/c/aMEbgAXC/151-bsp-lightmapper-bake-lightmaps-in-blender-%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-md3-exporter-with-custom-normals-bsp-importer)
- [blender_2021-06-26_07-31-51.png](https://trello.com/1/cards/5f428c2a55f7dc3b83ded087/attachments/60d6bcaefc6cfb5e77c82f06/download/blender_2021-06-26_07-31-51.png)
- [blender_2021-06-26_07-32-30.png](https://trello.com/1/cards/5f428c2a55f7dc3b83ded087/attachments/60d6bcb02264f5026acac4cf/download/blender_2021-06-26_07-32-30.png)
- [blender_2021-06-26_07-35-06.png](https://trello.com/1/cards/5f428c2a55f7dc3b83ded087/attachments/60d6bcb20d94b01843d3cc4d/download/blender_2021-06-26_07-35-06.png)
- [shot-20210626-080206.jpg](https://trello.com/1/cards/5f428c2a55f7dc3b83ded087/attachments/60d6c2f4a3bda120b5a28d1c/download/shot-20210626-080206.jpg)

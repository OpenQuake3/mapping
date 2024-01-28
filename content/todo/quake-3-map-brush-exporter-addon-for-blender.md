# Quake 3 map/brush exporter addon for Blender

---

.map exporter for blender developed by **chedap**

---

###**Instructions/Info below is for Version 1 of this addon. I have to look at Version 2 and update. Refer to the github for more info on Version 2 for now.**

---

Supported Blender versions: 2.83 - 3.4+

- Exports meshes as brushes.
- Retains texture coordinates.

---

[Readme](https://github.com/c-d-a/io_export_qmap/blob/master/README.md)

---

###Instructions:

- Remember to set 'Geo' to 'Brushes' in exporter settings.
- 1 unit in blender = 1 unit in radiant
- To assign a shader/texture to your brush, set the material name of your mesh to e.g. base_floor/concrete. (textures/ is omitted here, same as surface inspector in radiant)
- Use UV mapping in blender to map textures to your meshes.
- If you want to texture things in radiant instead, you don't need to use any materials or UV.
- Set grid to the appropriate number in export settings. 0 if you want no snapping. You might want to set something like 0.01, 0.1 or even 1 depending on your geometry. With 0, you might get lots of decimals which can slow down or even crash radiant when importing lots of brushes.
- Export [Valve220](https://trello.com/c/DLYWy0oT/24-different-map-formats) Format and also make sure that your radiant (and the map you're importing into) is set to [Valve220](https://trello.com/c/DLYWy0oT/24-different-map-formats) as well.
- In blender, do not join separate objects into one. each object that you want to be a brush needs to be it's own object. If there are multiple meshes inside the same object, the exporter will merge them into a convex hull.
- Remember that brushes can only be convex hulls. If a mesh is not convex, the exporter will make it convex.

---

## Attachments

- [explorer_2020-07-20_11-12-49.png](https://trello.com/1/cards/5f0e8b6d71c8202119f56d94/attachments/5f15622493ff3835480350ba/download/explorer_2020-07-20_11-12-49.png)
- https://github.com/c-d-a/io_export_qmap
- [Addon Download (v2-2022_08_29)](https://trello.com/1/cards/5f0e8b6d71c8202119f56d94/attachments/6317e87c850cf401c2172ffd/download/io_export_qmap-v2-2022_08_29.zip)
- [Addon Download (v1-2021_08_09)](https://trello.com/1/cards/5f0e8b6d71c8202119f56d94/attachments/6317e8b5c5f8a702931c75ff/download/io_export_qmap-v1-2021_08_09.zip)

# - BSP lightmapper (bake lightmaps in blender)⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ - MD3 exporter (with custom normals)⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀- BSP importer

`in active development`

---

Incredible blender addon, actively developed by **SomaZ**.

---

### **ZIP download links updated on 2023-09-24**

_(Latest addon version released on 2023-09-24)_

_note:_ q3 external lightmap (q3map2 generated fake lightmaps) import broke at some point. the latest version where this feature works is 2021-01-13 which is also attached below.

---

Addon versions for Blender 3.X and 2.91 attached below.

---

### **For patchnotes, questions, feedback and more info, please join our** [**Discord server**](https://discord.gg/BD6r3mKPqS "‌")**!**

---

## **Features:**

- Import BSP files to view your map in blender (many shader functions are supported. even animations like tcmap scroll)
- Bake lightmaps in blender / Edit lightmap coordinates
- Bake lightgrid
- Bake vertex colors
- Edit texture coordinates
- Edit normals
- Edit entities

(all edits can be patched back into the BSP)

- Import MD3 files
- Export MD3 files with custom normals (e.g. for smooth shading. see attached [video](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/5f1042adc4d1af457547f63f/download/custom_normals_002.mp4 "‌") and [more about MD3 models](https://trello.com/c/sE516Emm/161-md3-models "‌"))

---

## **How to install:**

- Download the addon zip file (see attachments below)
- Open Blender
- Go to 'edit -> preferences -> Add-ons'
- Click the 'Install...' button on the top right and navigate to the zip you downloaded, then click 'Install Add-on'
- Tick the checkbox next to 'Import-Export: Import id Tech 3 BSP' to enable the addon
- Expand the entry next to 'basepath' navigate to your 'quake3/baseq3' directory.
  _(or whatever the equivalent folder is for your game. its usually the folder that contains paks, texture/scripts/shaders/maps folders)_
- Note that the addon can **not** read pk3 files, so you have to extract the pak files in order for the addon to be able to read the default textures and shaders. Also extract contents from any pk3 files you want to load. (If you want to keep your game directory clean, you can also create a separate directory for the addon to read from)
  ![blender\_2021-01-08\_07-44-53.png](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/5ff7ff86617df018b58371ef/download/blender_2021-01-08_07-44-53.png)
- Click the little button on the bottom left and save preferences.
  ![blender\_2021-01-08\_07-50-40.png](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/5ff800cab0a0ed1b9759e485/download/blender_2021-01-08_07-50-40.png)
- Restart Blender!

---

## Attachments

- [blender_2020-07-15_07-22-39-min.png](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/5f10427971fcd40b82c91177/download/blender_2020-07-15_07-22-39-min.png)
- [custom_normals_002.mp4](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/5f1042adc4d1af457547f63f/download/custom_normals_002.mp4)
- https://trello.com/c/sE516Emm/161-md3-models
- [blender_2021-01-08_07-44-53.png](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/5ff7ff86617df018b58371ef/download/blender_2021-01-08_07-44-53.png)
- [blender_2021-01-08_07-50-40.png](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/5ff800cab0a0ed1b9759e485/download/blender_2021-01-08_07-50-40.png)
- [Discord server](https://discord.gg/BD6r3mKPqS)
- https://github.com/SomaZ/Blender_BSP_Importer
- [Addon Download 2021-01-13 (for Blender 2.91) ⠀⠀⠀⠀⠀ (q3 external fake lightmap import working)](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/618de9aa02ad133ef3a309c5/download/import_bsp_2021-01-13.zip)
- [Addon Download 2023-02-04 (for Blender 3.x) ⠀⠀⠀⠀⠀ (q3 external fake lightmap import broken but usable after some manual UV adjustments. see discord pinned messages for detailed guide)](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/6483785e4589a323bc003d80/download/import_bsp_2023-02-04.zip)
- [Addon (Experimental Build) Download 2023-09-24 (for Blender 3.6) (new features: pk3 support, .map file import and more)](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/6510a137fb8bf68500dc2616/download/import_bsp_experimental_2023-09-24.zip)
- [Addon Download 2023-11-23 (Experimental Version with pk3 support) (for Blender 4.0)](https://trello.com/1/cards/5f0e8cbf3fd404756f991b26/attachments/65602c3f076fdd592dee2b1f/download/import_bsp_experimental_2023-11-22.zip)

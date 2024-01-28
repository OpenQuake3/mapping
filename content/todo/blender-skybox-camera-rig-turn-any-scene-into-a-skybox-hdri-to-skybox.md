# Blender skybox camera rig. (Turn any scene into a skybox) (HDRI to Skybox)

---

## **Description:**

This .blend file includes a camera rig consisting of 6 cameras to render the 6 skybox images. This lets you turn any blender scene into a skybox for quake 3 and other games.

Made by **quBit**

---

### [DOWNLOAD](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413b86ef04130428188b68b/download/skybox_cam_rig_008.zip "‌")

---

## **Overview:**

Open the .blend file in Blender. (recommended version 3.0 or higher)
You will see the following things:

- **A camera view of your image**. This serves as a preview for you final textures.
  ![blender\_2023-03-17\_00-06-26.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a11ec6ca256156a0fe2d/download/blender_2023-03-17_00-06-26.png)
  _(Should you ever lose your preview by accident, simply press ‘0' on the numpad or navigate to '_[_View > Cameras > Active Camera_](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a17d963ae831fb7c915e/download/blender_2023-03-17_00-08-39.png "‌")_’)_
  .
- **World shader node editor**. This allows you to load your HDRI (360° image) or customize your sky in any way.
  ![blender\_2023-03-16\_23-59-52.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/64139f6decc0f3145f0bc3f6/download/blender_2023-03-16_23-59-52.png)
- **The timeline**. Dragging the blue cursor along positions 1 to 6 will change your preview to the respective view direction.
  ![blender\_2023-03-17\_00-00-08.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/64139f7f0c8e9f3ef86220c9/download/blender_2023-03-17_00-00-08.png)
- Output properties. Here you can specify the resolution and format of your final skybox textures.
  ![blender\_2023-03-17\_00-32-44.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a76d089c9c026f5139ce/download/blender_2023-03-17_00-32-44.png)

---

## **Example usecase: Turn an HDRI (360° panoramic image) into a skybox.**

- When you open the file, a HDRI images is already loaded. This only serves as a placeholder as it’s very low resolution to save on filesize.
- If you want your skybox textures to have a resolution of 1024*1024, you should use an HDRI with a resolution of at least 8k. You can download free HDRI images from here: [https://hdri-haven.com/](https://hdri-haven.com/ "smartCard-inline")
- First, remove the placeholder HDRI by clicking the 'X':
  ![blender\_2023-03-17\_00-22-15.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a4ac32444be44903e360/download/blender_2023-03-17_00-22-15.png)
- Then load your high resolution HDRI:
  ![blender\_2023-03-17\_00-22-31.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a4be42616066e930106a/download/blender_2023-03-17_00-22-31.png)
  ![blender\_2023-03-17\_00-25-03.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a566cc921131840e332b/download/blender_2023-03-17_00-25-03.png)
- This might take a little while to load. You should now see your new sky in the preview:
  ![blender\_2023-03-17\_02-43-19.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c5c0d3898eff54614067/download/blender_2023-03-17_02-43-19.png)
- (Optional) With HDRI images, you may find that the colors are flattened which is especially noticeable in the clouds. In this case, go to the Render Properties tab, scroll down and change the Color Management View Transform from ‘Filmic’ to ‘Standard’
  ![blender\_2023-03-17\_02-44-55.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c6a9963fcefd0f0549f4/download/blender_2023-03-17_02-44-55.png)
  ![blender\_2023-03-17\_02-48-30.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c6f6b5d97641d97d0315/download/blender_2023-03-17_02-48-30.png)
- (Optional) Now the image is likely too bright. To combat this, just turn down the ‘Strength’ value in your Background node:
  ![blender\_2023-03-17\_02-49-14.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c71c967a0d4670d8e41b/download/blender_2023-03-17_02-49-14.png)
  ![blender\_2023-03-17\_02-49-26.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c7369bb63ddf1f651df1/download/blender_2023-03-17_02-49-26.png)
- (Optional) Feel free to play around with the values in the mapping node to see how it changes the look/orientation of your skybox:
  ![blender\_2023-03-17\_00-30-10.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a6a6ca06aba7dc390e7a/download/blender_2023-03-17_00-30-10.png)

---

## **Export settings:**

Once you set up your scene, whether it’s a HDRI image, a sky shader, a fully modeled out scene or anything else, it’s time to do your export settings for your final skybox textures.

- First, specify your desired texture resolution in the Output Properties window on the right:
  ![blender\_2023-03-17\_00-36-20.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a7f5f9cda7b5ff0d3c1b/download/blender_2023-03-17_00-36-20.png)
- Now specify the directory where your textures should be saved to by clicking on the folder icon, then navigating to your directory:
  ![blender\_2023-03-17\_00-36-47.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a8509178185093a7fd30/download/blender_2023-03-17_00-36-47.png)
  ![blender\_2023-03-17\_00-39-29.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a8f67baf987736d4637c/download/blender_2023-03-17_00-39-29.png)

- Make sure to type in the name for your sky here as well:
  ![blender\_2023-03-17\_00-41-52.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a947f24bb0b5581fe17e/download/blender_2023-03-17_00-41-52.png)
- Finally, pick your image format and quality. You can choose JPG, TGA, PNG or whatever you need.
  ![blender\_2023-03-17\_00-43-29.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a9a58bee7aea7fcf86c5/download/blender_2023-03-17_00-43-29.png)

---

## **Exporting the Textures:**

When you’re all set up and ready to receive your new skybox textures, all that’s left to do is to tell Blender to render them out.

- Navigate to ‘Render > Render Animation’ (or hit ‘Ctrl + F12')
  ![blender\_2023-03-17\_00-48-29.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413aad40323213fbf16401c/download/blender_2023-03-17_00-48-29.png)
- Your six images are now saved in your specified directory.
  ![explorer\_2023-03-17\_00-52-11.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413abb6c36656bc62b90c3d/download/explorer_2023-03-17_00-52-11.png)
- In order to use them in a [quake 3 skybox shader](http://q3map2.robotrenegade.com/docs/shader_manual/general-directives.html#skyParms "‌"), they need to be renamed with the suffix \_ft, \_dn,_ up, etc.
  - Option 1: Use the included ‘rename.bat’ script:
    \- Place rename.bat in the same folder as the images and double click it. It will open a console window and rename your images automatically.
  - Option 2: Rename manually as follows
    0001 to _bk
    0002 to _dn
    0003 to _ft
    0004 to _lf
    0005 to _rt
    0006 to _up
    ![cmd\_2023-03-17\_01-20-51.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413b2713271621e1df9a34a/download/cmd_2023-03-17_01-20-51.png)
- Now your skybox textures are ready and can be used with [Skybox Shader](http://q3map2.robotrenegade.com/docs/shader_manual/general-directives.html#skyParms "‌") ingame.

---

## **What else?**

- You can also use this camera rig to turn _any_ blender scene into a skybox, whether it’s just a sky shader, a HDRI, a fully modeled landscape, or anything else you can imagine.
- In fact, I included my own ‘sky generator’ shader that I used to create a skybox for [A01-Race](https://defrag.racing/records/id:13455 "‌"). To access it, just change the world shader to ‘Sky Generator’ and have fun messing around with it:
  ![blender\_2023-03-17\_01-28-25.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413b440c09d528ec4ff0ba9/download/blender_2023-03-17_01-28-25.png)
- You can move and rotate the ‘Camera Rig’ object any way you like in order to change the viewpoint and orientation of your skybox.
  ![blender\_2023-03-17\_02-54-16.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c879123283a9bdc3d9eb/download/blender_2023-03-17_02-54-16.png)

---

For any questions or feedback, feel free to contact me on Discord:
**quBit#0137**

---

## Attachments

- [blender_2023-03-16_23-59-52.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/64139f6decc0f3145f0bc3f6/download/blender_2023-03-16_23-59-52.png)
- [blender_2023-03-17_00-00-08.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/64139f7f0c8e9f3ef86220c9/download/blender_2023-03-17_00-00-08.png)
- [blender_2023-03-17_00-06-26.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a11ec6ca256156a0fe2d/download/blender_2023-03-17_00-06-26.png)
- [blender_2023-03-17_00-08-39.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a17d963ae831fb7c915e/download/blender_2023-03-17_00-08-39.png)
- [blender_2023-03-17_00-22-15.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a4ac32444be44903e360/download/blender_2023-03-17_00-22-15.png)
- [blender_2023-03-17_00-22-31.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a4be42616066e930106a/download/blender_2023-03-17_00-22-31.png)
- [blender_2023-03-17_00-25-03.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a566cc921131840e332b/download/blender_2023-03-17_00-25-03.png)
- [blender_2023-03-17_00-26-29.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a5a9b1af00c97f648337/download/blender_2023-03-17_00-26-29.png)
- [blender_2023-03-17_00-30-10.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a6a6ca06aba7dc390e7a/download/blender_2023-03-17_00-30-10.png)
- [blender_2023-03-17_00-32-44.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a76d089c9c026f5139ce/download/blender_2023-03-17_00-32-44.png)
- [blender_2023-03-17_00-36-20.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a7f5f9cda7b5ff0d3c1b/download/blender_2023-03-17_00-36-20.png)
- [blender_2023-03-17_00-36-47.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a8509178185093a7fd30/download/blender_2023-03-17_00-36-47.png)
- [blender_2023-03-17_00-39-29.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a8f67baf987736d4637c/download/blender_2023-03-17_00-39-29.png)
- [blender_2023-03-17_00-41-52.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a947f24bb0b5581fe17e/download/blender_2023-03-17_00-41-52.png)
- [blender_2023-03-17_00-43-29.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413a9a58bee7aea7fcf86c5/download/blender_2023-03-17_00-43-29.png)
- [blender_2023-03-17_00-48-29.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413aad40323213fbf16401c/download/blender_2023-03-17_00-48-29.png)
- [explorer_2023-03-17_00-52-11.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413abb6c36656bc62b90c3d/download/explorer_2023-03-17_00-52-11.png)
- [cmd_2023-03-17_01-20-51.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413b2713271621e1df9a34a/download/cmd_2023-03-17_01-20-51.png)
- [blender_2023-03-17_01-28-25.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413b440c09d528ec4ff0ba9/download/blender_2023-03-17_01-28-25.png)
- [blender_2023-03-17_01-44-40.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413b81d1ff92157c1dfb743/download/blender_2023-03-17_01-44-40.png)
- [skybox_cam_rig_008.zip](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413b86ef04130428188b68b/download/skybox_cam_rig_008.zip)
- [blender_2023-03-17_02-43-19.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c5c0d3898eff54614067/download/blender_2023-03-17_02-43-19.png)
- [blender_2023-03-17_02-44-55.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c6a9963fcefd0f0549f4/download/blender_2023-03-17_02-44-55.png)
- [blender_2023-03-17_02-48-30.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c6f6b5d97641d97d0315/download/blender_2023-03-17_02-48-30.png)
- [blender_2023-03-17_02-49-14.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c71c967a0d4670d8e41b/download/blender_2023-03-17_02-49-14.png)
- [blender_2023-03-17_02-49-26.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c7369bb63ddf1f651df1/download/blender_2023-03-17_02-49-26.png)
- [blender_2023-03-17_02-54-16.png](https://trello.com/1/cards/64139d39e0ed61d2522d32ef/attachments/6413c879123283a9bdc3d9eb/download/blender_2023-03-17_02-54-16.png)

# BSP Entity Edit

Name: BSP Entity Edit

Authors: SomaZ

‌

File Name: BspEntityEdit.zip

File Size: ~21mb

Date Released : 06/10/2023

‌

Credits: illwieckz for some lines of code, Jon Wright for pyopengltk, Insidious for his simple text editor tutorial

Download: [https://jkhub.org/files/file/4127-bsp-entity-edit/](https://jkhub.org/files/file/4127-bsp-entity-edit/ "smartCard-inline")

Source: [https://github.com/SomaZ/BSP-Entitiy-Edit](https://github.com/SomaZ/BSP-Entitiy-Edit "‌")

‌

Description: This is an id tech 3 bsp entity editor. It can render opened bsp files with vertex colors, you can pick entities in the render with a simple click, you can edit the entity string, you can save the bsp file afterwards or choose to save as .ent file instead. The preview is updated when you click the button under the viewport.

‌

Viewport Controlls:

W - Move camera forward

A - Move camera to the left

S - Move camera backwards

D - Move camera to the right

SPACE - Move camera upwards

C - Move camera downwards

LMC - Select Object under the cursor

RMC Hold and Drag - Rotate view

Mouse Scrolling - Move camera forwards or backwards

H - Hide currently selected entity

Alt-H - Unhide all entities

ESC - Deselect entity

‌

‌

\ \*How to install \*

I build an exe for ease of use. It's build via pyinstaller with following command:

‌

pyinstaller --noconfirm --onefile --windowed --name "BSP Entity Edit" --add-data "C:/Users/.../Desktop/BspEntityEdit/pyidtech3lib;pyidtech3lib/" --hidden-import "numpy" --hidden-import "ctypes" --hidden-import "pyopengltk" --add-data "C:/Users/.../Desktop/BspEntityEdit/edit\_menu.py;." --add-data "C:/Users/.../Desktop/BspEntityEdit/file\_menu.py;." --add-data "C:/Users/.../Desktop/BspEntityEdit/format\_menu.py;." --add-data "C:/Users/.../Desktop/BspEntityEdit/help\_menu.py;." --add-data "C:/Users/.../Desktop/BspEntityEdit/ogl\_fbo.py;." --add-data "C:/Users/.../Desktop/BspEntityEdit/ogl\_frame.py;." --add-data "C:/Users/.../Desktop/BspEntityEdit/ogl_objects.py;."  "C:/Users/.../Desktop/BspEntityEdit/main.py"

‌

I included the full source code, so you can build it yourself or run it in your python environment of your choice. You need to install following packages to run the code: numpy, ctypes, pyopengltk

Tk must be installed too, but usually it's part of the standard python install

You can run the code afterwards with:

‌

python [main.py](http://main.py "‌")

‌

‌

Supported games (or at least tested game bsp files):

Star Wars Jedi Outcast

Star Wars Jedi Academy

Star Trek Elite Force

Quake 3

Xonotic

‌

‌

THIS FILE IS NOT MADE, DISTRIBUTED, OR SUPPORTED BY ACTIVISION PUBLISHING, INC., RAVEN SOFTWARE, OR LUCASARTS ENTERTAINMENT COMPANY, LLC. ELEMENTS™ & © LUCASFILM LTD.™ & DISNEY, INC.™ AND/OR ITS LICENSORS. STAR WARS®, JEDI®, & JEDI KNIGHT® ARE REGISTERED TRADEMARKS OF LUCASFILM LTD™ AND WALT DISNEY, INC.™ STAR WARS®, JEDI®, & JEDI KNIGHT® ARE REGISTERED TRADEMARKS OF LUCASFILM LTD™ & DISNEY, INC.™

## Attachments

- [bsp_entity_edit.jpeg](https://trello.com/1/cards/648ab3f032e8ef0a2e24c109/attachments/648ab50f770cd8bf2dcf6165/download/bsp_entity_edit.jpeg)

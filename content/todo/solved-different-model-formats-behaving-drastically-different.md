# (SOLVED) Different model formats behaving drastically different.

---

**Update 2022-02-13**

A new version of [NetRadiant](https://trello.com/c/ozD1Pj9I "‌") has been released! This version supports FBX models and a bunch of other formats. MD3, ASE, and other formats are still fine to use, but modern formats such as FBX might be preferred when creating new models as to avoid the limitations of older formats.
**All formats should be equal to MD3 in terms of performance now.**

---

**Update 2021-04-20:**

The explanation provided by **Garux** is that the MD3 format is inherently optimized for use in Quake 3. Apparently, the compiler splits the geometry into 64 verts per surf **if** the original model has more than 999 verts per surf. Since MD3 is limited to 999 verts per surf, (md3 exporter already splits geometry into max. 999 verts per surf) MD3 models will never be split by the compiler (unless using forcemeta), while other formats get split into 64 verts per surf if they have more than 999 verts per surf, which performs much worse ingame.

_EDIT: This issue has been fixed in the new NetRadiant version 20220211_

---

### **Original post for archival purposes:**

In this example test map, depending on the model format being used, compile times range from 5 to 450 seconds and ingame performance from 6 to 420 fps. (See attached table)

**What causes these huge differences?**
Especially the huge difference in surfs and fps.
Is it a compiler thing? Is it a engine thing?

**~~How you can help:~~**

- ~~Compile the attached maps with different compilers and test it in different -games/engines. (attached tilefloor.ZIP file)~~
  ~~Please provide all the same test data (see table)~~
- ~~Share this with your communities and anyone you think might have a lot of knowledge about id Tech 3 related things.~~

**~~If you can help or have ideas, please get in contact with me on discord (quBit.q3)~~**

## Attachments

- [r_speeds idfe.jpg](https://trello.com/1/cards/5f41eb16a10ca30b1e92d123/attachments/5f41f85b972b51410000aad6/download/r_speeds_idfe.jpg)
- [r_speeds q3a.jpg](https://trello.com/1/cards/5f41eb16a10ca30b1e92d123/attachments/5f41f85f2078350514c0904e/download/r_speeds_q3a.jpg)
- [table idfe.png](https://trello.com/1/cards/5f41eb16a10ca30b1e92d123/attachments/5f41f8601eb4ed83fb086ab1/download/table_idfe.png)
- [tilefloor.zip](https://trello.com/1/cards/5f41eb16a10ca30b1e92d123/attachments/5f41f8eb78a9478a8b771c84/download/tilefloor.zip)
- [table q3a.png](https://trello.com/1/cards/5f41eb16a10ca30b1e92d123/attachments/5f41f9cca56419337f690916/download/table_q3a.png)

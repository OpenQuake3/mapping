# Adding a custom 'airjump' item/powerup by oranjemetal

---

_Note: While this guide has been made for the 'Quake 3 Defrag' mod, this same principle might also work for vanilla q3 and other games._

---

## **Air Jump Item Tutorial For Defrag**

by **oranjemetal**

---

### **WHAT IT DOES**

As demonstrated in the [**dfwc2021-6**](https://ws.q3df.org/map/dfwc2021-6/ "‌") map, this 'airjump' powerup will allow you to jump again mid-air by pressing the 'use' button.

**NOTE**: The same technique can be used to trigger _anything_, not just an 'airjump'. Get creative!

---

### **HOW IT WORKS**

There is a global trigger on the whole map that attempts to give you a medkit, the trick is if you have one already then you can't pick up a new one. So whenever you use your medkit, you get a new one, and all the triggers associated with picking it up.

The trigger logic looks something like this:

**trigger_multiple** ⇒ **target_give** ⇒ **holdable_medkit** ⇒ **whatever you want**

In the dfwc2021-6 map I also used fragfilters to determine when you can or can't use an air jump. You would start with 0 frags, get 1 frag upon air jump pickup, using it would set your frags to 2. So this means:

**0 frags**: You don't have the air jump and cannot use it.
**1 frags**: You have the air jump and can use it.
**2 frags**: You have the air jump and have used it.

There is a small 1 unit trigger on every surface you can stand on that sets your frag count to 1, if you have 2.
You can see this in action if you type /fraglimit 1 on the map while offline.
The trigger logic for getting a medkit has to change to incorporate that as well, so now it looks like:

---

**trigger_multiple**
⇓
**target_fragsFilter** _(check if you have at least 1 frag)_
⇓
**target_give**
⇓
**holdable_medkit**
⇓
**target_fragsFilter** _(check if you have exactly 1 frag, meaning you can use your air jump)_
⇓
**target_speed** _(to set your z velocity)_
**target_score** _(to set your frags to 2, meaning you can't use air jump again)_
**target_speaker** _(to fake a player jump sound)_

---

With this setup this also means that you could have and use the original medkit in the map.

I've also discovered that if you give multiple items while using/picking up a medkit, they will overwrite some effects, I chose to use item_invis with a count of -1 because it has the quietest pickup sound which is not very audible when combined with the player jump sound. Now the medkit has an additional target:

**holdable_medkit** ⇒ **target_give** ⇒ **item_invis**, **item_invis**

This also nullifies the medkit heal effect, so you can use it in quick succession without having to wait until your health ticks down below 125.

**NOTE**: the heal effect still happens occasionally online so it's not perfect, but it will only be a problem in very fringe cases.

**NOTE**: The icon remapping will not work that well in multiplayer because shader remapping is global, and will change for all players
if you don't want the icon remap, simply remove all the targetShaderName and targetShaderNewName lines from the .map file.

---

_I hid all the air jump reset triggers from the trigger render by turning them into patches (as can be seen on half of the example map), it was a painful process but it was worth it._

---

I have provided **tut\_airjump\_pickup.map** and **tut\_airjump\_spawnwith.map** files within the [pk3](https://trello.com/1/cards/61a3d673b5fcd789c90ccbb2/attachments/61a3d7304ac2fb08587cbd8f/download/tut_airjump.pk3 "‌"), which can be easily used as templates to create new maps.

---

## Attachments

- [i_view64_2021-11-28_20-21-32.png](https://trello.com/1/cards/61a3d673b5fcd789c90ccbb2/attachments/61a3d6c18009b7607f16b7f0/download/i_view64_2021-11-28_20-21-32.png)
- [tut_airjump.pk3](https://trello.com/1/cards/61a3d673b5fcd789c90ccbb2/attachments/61a3d7304ac2fb08587cbd8f/download/tut_airjump.pk3)

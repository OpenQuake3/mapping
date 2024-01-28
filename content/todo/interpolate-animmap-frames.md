# Interpolate animMap frames


---

###Two shader stages work together to interpolate (smoothly fade between) animMap frames:

 - The first stage starts with frame #1 and fades it from visible to invisible using a sawtooth wave.
 - At the same time, the second stage fades frame #2 from invisible to visible using an inversed sawtooth wave.

➜⠀This results in a smooth transition between frames #1 and #2.

---

🛈 *This technique was already used in the original q3a shaders by id.*

---

While each animMap shader stage is limited to a maximum of 8 frames, multiple shader stages can be combined to extend the animation. This technique is described [here](https://trello.com/c/hVxaKLjW/246-background-video-in-idfe-menu-q3-defrag)

---


## Attachments

- [ezgif-2-74b2e2734847.gif](https://trello.com/1/cards/60afae7f6866b423e0e522cb/attachments/60afae860c883d253a0a84cd/download/ezgif-2-74b2e2734847.gif)
- [blueflame2.mp4](https://trello.com/1/cards/60afae7f6866b423e0e522cb/attachments/60afb0af5df55816567e0026/download/blueflame2.mp4)
- [blueflame2.pk3](https://trello.com/1/cards/60afae7f6866b423e0e522cb/attachments/60afb25839c6e233e0c96c54/download/blueflame2.pk3)
- https://trello.com/c/hVxaKLjW/246-background-video-in-idfe-menu-q3-defrag

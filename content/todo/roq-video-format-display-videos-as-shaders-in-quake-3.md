# RoQ Video format: Display videos as shaders in Quake 3.

---

### **Info:**

[https://wiki.thedarkmod.com/index.php?title=Playing_ROQ_Video_Files](https://wiki.thedarkmod.com/index.php?title=Playing_ROQ_Video_Files "smartCard-inline")

[https://wiki.multimedia.cx/index.php/RoQ](https://wiki.multimedia.cx/index.php/RoQ "smartCard-inline")

[RoQ format documentation by Dr. Tim Ferguson](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64c2cfcdfbaa87b50c1d98f7/download/id_ROQ_Video_-_Dr_Tim_Ferguson_2001.txt "‌")

---

### **Video to RoQ converters:**

[https://ffmpeg.org/download.html](https://ffmpeg.org/download.html "smartCard-inline")

[Quake Video Maker v1.4.2](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64c2cdf5d9bf1a4ee3162b77/download/QuakeVideoMaker-1.4.2.zip "‌")

[Switchblade v3.11](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64c2cdf6f75af40d1eb72fb1/download/switchblade_v311.zip "‌")

[RoQ Encoder](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64ecff54aa13e475b2713aee/download/roq.zip "‌")

---

### **Usage:**

[https://www.indiedb.com/tutorials/how-to-create-a-roq-file-by-wh1t34gl3-sas](https://www.indiedb.com/tutorials/how-to-create-a-roq-file-by-wh1t34gl3-sas "smartCard-inline")

[https://www.moddb.com/tutorials/how-to-create-a-roq-video-file1](https://www.moddb.com/tutorials/how-to-create-a-roq-video-file1 "smartCard-inline")

---

### **Limitations:**

**Framerate**: 30fps
**Resolution**: 256x256 px should always work. 512 might work depending on video/game/engine.

Ingame, only one video can be visible at a time.

---

### **Shader example:**

```
textures/path/shadername
{
	qer_editorimage textures/path/image.tga
	surfaceparm nonsolid
	{
		videomap video/path/video.roq
		rgbGen identity
	}
}
```

---

## Attachments

- [QuakeVideoMaker-1.4.2.zip](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64c2cdf5d9bf1a4ee3162b77/download/QuakeVideoMaker-1.4.2.zip)
- [switchblade_v311.zip](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64c2cdf6f75af40d1eb72fb1/download/switchblade_v311.zip)
- [id_ROQ_Video_-_Dr_Tim_Ferguson_2001.txt](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64c2cfcdfbaa87b50c1d98f7/download/id_ROQ_Video_-_Dr_Tim_Ferguson_2001.txt)
- [roq.zip](https://trello.com/1/cards/64c2c5f3d4428c689284a111/attachments/64ecff54aa13e475b2713aee/download/roq.zip)

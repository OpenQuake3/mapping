# AI Generated Skyboxes

---

Guide by **Hejazi**

---

**BlockadeLabs Skybox** is a tool to generate skyboxes using **AI.**
We can utilize this to generate Quake 3 / Quake engine skyboxes by following these steps:

1. First, Go to the website: [https://skybox.blockadelabs.com/](https://skybox.blockadelabs.com/ "smartCard-inline") and type in your prompt, In our example I will type “desert at night landscape”, and click **Generate**.
   ![Screenshot\_from\_2023-06-05\_04-20-45.png](https://trello.com/1/cards/647d3668b9012aff4f450ad4/attachments/647d389e527ca466e3f0b143/download/Screenshot_from_2023-06-05_04-20-45.png)
2. Second, we can then click **Download.** The downloaded image is a single 360degree panorama Image, which we cannot use in Quake engine.
3. In order to convert it to a 6 sided cube (6 images representing each side of the cube), we can use this tool here: [https://skybox.hejazi.tech/](https://skybox.hejazi.tech/ "smartCard-inline")
4. In the **Q3 Skybox Generator Tool** , choose the image you just downloaded, and type in a name (This name will be the name of the shader and the name of the images that are generated), then click **Generate.**
   ![Screenshot\_from\_2023-06-05\_04-26-17.png](https://trello.com/1/cards/647d3668b9012aff4f450ad4/attachments/647d39fe8265d2a26fa03b8b/download/Screenshot_from_2023-06-05_04-26-17.png)
5. After generating, we will see a list of 6 images, and a shader file. We can then click on each image to download it, as well as click **Download Shader** button, which will download the shader with the appropriate name.
6. Then, we can then add the images to a _textures/shader_name folder in your baseq3 folder (or whatever mod you use such as defrag), and add the shader to the_ scripts folder.
7. Finally you need to add the _shader_name to the_ **scripts/shaderlist.txt** file. Then you can use the skybox in your maps.

Needless to say, you are highly encouraged to expirement with different types of generations not only **Digital Painting** , the **BlockadeLabs Skybox** tool also has a remix which allows you to take a skybox and modify it for your needs and generate variations of the same skybox.

Happy mapping =)

---

## Attachments

- [Screenshot from 2023-06-05 04-20-45.png](https://trello.com/1/cards/647d3668b9012aff4f450ad4/attachments/647d389e527ca466e3f0b143/download/Screenshot_from_2023-06-05_04-20-45.png)
- [Screenshot from 2023-06-05 04-26-17.png](https://trello.com/1/cards/647d3668b9012aff4f450ad4/attachments/647d39fe8265d2a26fa03b8b/download/Screenshot_from_2023-06-05_04-26-17.png)
- [digital_painting_desert_at_night_landscape.jpg](https://trello.com/1/cards/647d3668b9012aff4f450ad4/attachments/647d3aa81ff97b76dca0606c/download/digital_painting_desert_at_night_landscape.jpg)

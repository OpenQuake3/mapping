# Map optimization, hint brushes (vis culling) and portals, etc.

---

### When testing vis optimizations, always compile **without** `-fast` in the vis stage. Your optimizations might not work otherwise.

---

There are many ways to optimize a map to run smoother, and the most effective way might be very different for every map. Even if the map runs well for you, it might be worth comparing FPS with other maps and seeing how it runs on a weaker computer.

Some important concepts to understand include 'structural vs detail brushes' and 'hint brushes'

One of the most notable techniques, especially for hallway maps, are hint brushes. These brushes divide the map into sections in a way where only the currently visible parts of the map will be rendered for the player at any point, while the rest of the map is not rendered, therefor saving a lot of performance in some cases.

This might be less relevant for very open maps (e.g. space maps) where the whole map is visible to the player at all times. In these cases it might be important to choose a higher '_blocksize' worldspawn value and make most if not all brushes [detail](https://ws.q3df.org/level_design/detail_brushes/ "‌"). Using [non forcemeta models](https://trello.com/c/sE516Emm/161-about-md3-models "‌") is also cheaper in terms of performance than using brushes where applicable.

The following guides go over the mentioned concepts and more. These should be good for most maps, but there are many other ways that could be utilized for specific maps or parts of them. If your map still runs bad, do intensive troubleshooting to try and find out which parts of the map, which shaders, etc. are causing the performance drop, then go from there.

---

## Attachments

- https://openarena.fandom.com/wiki/Mapping_manual/Optimization_and_troubleshooting
- https://openarena.fandom.com/wiki/Mapping_manual/Hint_brushes
- [http://leveldk.co.uk/tut7.htm](https://web.archive.org/web/20210516214943/http://leveldk.co.uk/tut7.htm)
- [map_optimising](https://ws.q3df.org/level_design/map_optimising/)
- [10.3.jpg](https://trello.com/1/cards/603427c3dbdceb744cd0d3e4/attachments/60343027f4023c13fbb7a8c9/download/10.3.jpg)
- http://linradiant.intron-trans.hu/docs/Vis%20and%20Hint%20Brushes.html
- https://web.archive.org/web/20190103124351/https://www.quake3world.com/forum/viewtopic.php?t=3620
- http://web.archive.org/web/20040804165350/http://www.quake3world.com/ubb/Archives/Archive-000004/HTML/20020703-6-020488.html
- https://www.moddb.com/company/hazardmodding/tutorials/bsp-level-based-game-engines
- [detail brushes](https://ws.q3df.org/level_design/detail_brushes/)

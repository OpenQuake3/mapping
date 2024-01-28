# Master servers

Quake III Arena original came with a "master" server architecture. A client with `set dedicated 2` will check-in with a master server every 3 minutes by sending a "heartbeat" message. The master server then immediately sends a `getinfo` request back to the client-hosted server.

Various implementations have been attempted, the easiest to compile and use is dp_master. This is a basic implementation that is compatible with generic Quake 3 and mods.

QuakeJS complicates this slightly by adding a web-socket web service in Nodejs. This can be made compatible with any native server simply by adding a UDP socket.

Another great implementation provided by the Elite Force community, ef_master_server is a C# implementation of master server. Thanks to 7Saturn!


## Attachments

- [DarkPlaces master server](https://github.com/kphillisjr/dpmaster)
- [QuakeJS Nodejs master](https://github.com/inolen/quakejs/blob/master/bin/master.js)
- [EF master server in C#](https://github.com/7Saturn/ef_master_server)

const { io } = require("../server");

io.on("connection", client => {
  console.log("User connected");

  client.emit("sendMessage", {
    user: "Admin",
    msg: "Welcome to this app"
  });

  client.on("disconnect", () => {
    console.log("User disconnected");
  });

  //Listen client
  client.on("sendMessage", (data, cb) => {
    console.log(data);

    client.broadcast.emit("sendMessage", data);

    // if (msg.user) {
    //   cb({
    //     resp: "All good"
    //   });
    // } else {
    //   cb({
    //     resp: "All wrong!!"
    //   });
    // }
  });
});

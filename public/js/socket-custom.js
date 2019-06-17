var socket = io();

//listen
socket.on("connect", () => {
  console.log("Conected to server");
});

//listen
socket.on("disconnect", () => {
  console.log("Server connection lost");
});

//listen
socket.on("sendMessage", msg => {
  console.log(msg);
});

//Send info
socket.emit(
  "sendMessage",
  {
    user: "Adrian",
    msg: "Hola mundo!"
  },
  resp => {
    console.log("server response: ", resp);
  }
);

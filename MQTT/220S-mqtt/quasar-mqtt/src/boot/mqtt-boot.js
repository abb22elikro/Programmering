import mqtt from "mqtt/dist/mqtt";

const options = {
  port: 8884,
  clientId: "Mephisto",
  clean: false,
};

let client = mqtt.connect("ws:localhost", options); // create a client

export { client };

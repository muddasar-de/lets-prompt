import moongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  moongoose.set("strictQuery");
  if (isConnected) {
    console.log("already connected");
    return;
  } else {
    try {
      moongoose.console(process.env.MONGODB_URI, {
        dbName: "lets_share",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
    } catch (error) {
      console.log("DB connected");
      console.log("error", error);
    }
  }
};

import mongoose, { ConnectOptions } from "mongoose";
import { MongoURI } from "./keys";

export class MongooseService {
  private static connectivity: MongooseService;

  private constructor() {}

  static getInstance() {
    if (!this.connectivity) {
      this.connectivity = new MongooseService();
    }

    return this.connectivity;
  }

  static connectToDatabase() {
    this.getInstance();
    mongoose
      .connect(MongoURI, {
        useNewUrlParser: true,
      } as ConnectOptions)
      .then(() => console.log("MongoDB connection established successfully"))
      .catch((e: mongoose.Error) =>
        console.log(`MongoDB connection failed with error: ${e}`)
      );
  }
}

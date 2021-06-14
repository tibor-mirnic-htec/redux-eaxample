import { IGetRandomIncrementResponse } from "../models/response/counter/get-random-increment";

export class CounterService {
  static async getRandomIncrement(): Promise<IGetRandomIncrementResponse> {
    try {
      const response: IGetRandomIncrementResponse = await new Promise(
        (resolve) => {
          setTimeout(() => {
            resolve({
              increment: Math.floor(Math.random() * 100),
            } as IGetRandomIncrementResponse);
          }, 500);
        }
      );

      return response;
    } catch (error) {
      throw error;
    }
  }
}

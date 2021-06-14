import { IGetCountIncrementResponse } from "../models/response/counter/get-count-increment";

export class CounterService {
  static async getCountIncrement(): Promise<IGetCountIncrementResponse> {
    try {
      const response: IGetCountIncrementResponse = await new Promise(
        (resolve) => {
          setTimeout(() => {
            resolve({
              count: Math.floor(Math.random() * 100),
            } as IGetCountIncrementResponse);
          }, 500);
        }
      );

      return response;
    } catch (error) {
      throw error;
    }
  }
}

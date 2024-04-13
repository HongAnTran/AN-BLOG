import { AxiosError, isAxiosError } from "axios";

class BaseService {
  isUser: boolean = false;
  constructor() {
    const isClient = typeof window !== "undefined";
    if (isClient) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }
}

export default BaseService;

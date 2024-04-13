interface ErrorResponeInterFace {
  status: number;
  errors: string[];
  data?: any;
}

class ErrorRespone {
  status: number;
  errors: string[];
  data?: any;

  constructor({ status, errors, data }: ErrorResponeInterFace) {
    (this.status = status), (this.errors = errors);
    this.data = data;
  }
}

type ConfigAPi = RequestInit & {
  timeout?: number;
  params?: { [x: string]: any };
  baseURL?: string;
  url?: string;
  isLogger?: boolean;
};

type ResponseCustom = Response & { data?: any };
type Interceptor = {
  request?: (config: ConfigAPi) => Promise<ConfigAPi>;
  response?: (
    response: ResponseCustom,
    data : any,
    config: ConfigAPi,
  ) => Promise<ResponseCustom>;
};

export type { ConfigAPi, Interceptor };

export default ErrorRespone;

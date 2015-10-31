declare function Proxyquire (): Proxyquire.Request;

declare module Proxyquire {
  interface Request {
    (module: string, stubs: any): any;
    <T> (module: string, stubs: any): T;

    load (module: string, stubs: any): any;
    load <T> (module: string, stubs: any): T;

    noCallThru(): Request;
    callThru(): Request;

    noPreserveCache(): void;
    preserveCache(): void;
  }
}

export = Proxyquire;

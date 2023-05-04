
// env ts
declare namespace NodeJS {
  interface ProcessEnv {
    readonly WECHAT_TOKEN: string;
    readonly WECHAT_APP_ID: string;
    readonly WECHAT_APP_SECRET: string;
    readonly HOSTNAME: string;
    readonly WECHAT_STATE: string; 
  }
}

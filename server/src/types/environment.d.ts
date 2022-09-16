export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      ENV: 'test' | 'dev' | 'prod';
      OPENWEATHER_API: 'string'
    }
  }
}


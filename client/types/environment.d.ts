export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OPENWEATHER_API: 'string'
    }
  }
}


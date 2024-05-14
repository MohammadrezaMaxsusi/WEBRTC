export interface IConfig {
  app: {
    name: string;
    port: number;
    superAdmin: { username: string; password: string };
  };
  db: {
    host: string;
    name: string;
    port: number;
    username: string;
    password: string;
  };
  jwt: {
    secret: string;
    accessTtl: string;
    refreshTtl: string;
  };
}

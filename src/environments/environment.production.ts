export const environment = {
    name: "production",
    production: true,
    appVersion: require('../../package.json').version,
    apis: {
        websocket: "https://nest-websocket.rnd.teras.dev"
    }
};

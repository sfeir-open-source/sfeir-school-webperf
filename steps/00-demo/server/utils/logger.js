import logger from 'pino';

const loggerInstance = logger({ level: 'info', transport: { target: "pino-pretty"} })

export default loggerInstance
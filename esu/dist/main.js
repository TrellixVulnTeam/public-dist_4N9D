"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const class_validator_1 = require("class-validator");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: false, transform: true }));
    app.use(bodyParser.json());
    app.enableCors({
        origin: "*",
        methods: "*",
        allowedHeaders: "*"
    });
    await app.listen(4012, '0.0.0.0').then(e => {
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
}
bootstrap();
//# sourceMappingURL=main.js.map
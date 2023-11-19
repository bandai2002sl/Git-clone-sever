"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_test_auth_dto_1 = require("./create-test-auth.dto");
class UpdateTestAuthDto extends (0, swagger_1.PartialType)(create_test_auth_dto_1.CreateTestAuthDto) {
}
exports.UpdateTestAuthDto = UpdateTestAuthDto;
//# sourceMappingURL=update-test-auth.dto.js.map
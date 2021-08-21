"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryController = void 0;
const inventory_outofstock_dto_1 = require("./dtos/inventory-outofstock.dto");
const inventory_service_1 = require("./inventory.service");
const common_1 = require("@nestjs/common");
const inventory_restock_dto_1 = require("../inventory/dtos/inventory-restock.dto");
let InventoryController = class InventoryController {
    constructor(InventoryService) {
        this.InventoryService = InventoryService;
    }
    reStockInventory(body) {
        console.log(body);
        return this.InventoryService.reStockInventory(body.warehouseId, body.productIds, body.newInventories);
    }
    OutOfStockInventory(body) {
        console.log(body);
        return this.InventoryService.OutOfStockInventory(body.warehouseId, body.productIds);
    }
};
__decorate([
    common_1.Post('/restock'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_restock_dto_1.InventoryReStockDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "reStockInventory", null);
__decorate([
    common_1.Post('/stockout'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_outofstock_dto_1.InventoryStockOutDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "OutOfStockInventory", null);
InventoryController = __decorate([
    common_1.Controller('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
exports.InventoryController = InventoryController;
//# sourceMappingURL=inventory.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const toStream = require("buffer-to-stream");
let CloudinaryService = class CloudinaryService {
    constructor() { }
    async uploadFile(id, file, type) {
        const folder = this.getFolderByType(type);
        const result = await new Promise((resolve, reject) => {
            const upload = cloudinary_1.v2.uploader.upload_stream({
                resource_type: "auto",
                folder,
                public_id: id,
            }, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            });
            toStream(file.buffer).pipe(upload);
        });
        const secure_url = result.secure_url;
        await this.updateFileUrl(id, secure_url, type);
        return { secure_url };
    }
    getFolderByType(type) {
        switch (type) {
            case 'user':
                return 'users';
            case 'companyLogo':
                return 'companyLogos';
            case 'product':
                return 'products';
            case 'farmerCertification':
                return 'farmerCertifications';
            default:
                throw new common_1.BadRequestException('Invalid type for file upload');
        }
    }
    async updateFileUrl(id, url, type) {
        switch (type) {
            case 'user':
                break;
            case 'companyLogo':
                break;
            case 'product':
                break;
            case 'farmerCertification':
                break;
            default:
                throw new common_1.BadRequestException('Invalid type for file update');
        }
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
                email
            }
        });
        console.log(response);
    });
}
//insertUser("username112","eswarpassword","eswar","landa","hello@gmail.com")
//insertUser("uddsername112","eswarpassword","eswar","landa","hellddo@gmail.com")
function createTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.create({
            data: {
                title: "learn prisma",
                description: "learning and coding using prisma",
                user_id: 1
            }
        });
    });
}
function getTodos(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                id: userid
            },
            select: {
                title: true,
                description: true,
                user: true //all the detials of the user (JOIN)
            }
        });
        console.log(response);
    });
}
createTodos(1);
getTodos(1);
//

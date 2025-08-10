"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUserNames = void 0;
var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
]; // m
var userIdsToSearch = [2, 3, 5]; // n
var searchUserNames = function (userIdsToSearch) {
    var userNames = [];
    var _loop_1 = function (id) {
        var user = users.find(function (u) { return u.id === id; });
        userNames.push(user ? user.name : null);
    };
    for (var _i = 0, userIdsToSearch_1 = userIdsToSearch; _i < userIdsToSearch_1.length; _i++) {
        var id = userIdsToSearch_1[_i];
        _loop_1(id);
    }
    return userNames;
};
exports.searchUserNames = searchUserNames;
console.log((0, exports.searchUserNames)(userIdsToSearch));

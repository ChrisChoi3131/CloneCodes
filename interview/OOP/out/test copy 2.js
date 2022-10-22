var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FileSystemEntity = /** @class */ (function () {
    function FileSystemEntity(isDir, name, size) {
        this.isDir = isDir;
        this.name = name;
        this.size = size;
        this.children = [];
    }
    return FileSystemEntity;
}());
var FSFile = /** @class */ (function (_super) {
    __extends(FSFile, _super);
    function FSFile(fileName, fileSize) {
        var _this = _super.call(this, false, fileName, fileSize) || this;
        _this.extension = _this.getExtensionFromFile(fileName);
        return _this;
    }
    FSFile.prototype.getExtensionFromFile = function (fileName) {
        return fileName.slice(fileName.lastIndexOf(".") + 1);
    };
    return FSFile;
}(FileSystemEntity));
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory(dirName) {
        return _super.call(this, true, dirName, 0) || this;
    }
    Directory.prototype.addEntity = function (entity) {
        this.children.push(entity);
    };
    return Directory;
}(FileSystemEntity));
var ExtensionFilter = /** @class */ (function () {
    function ExtensionFilter(allowedExtension) {
        this._allowedExtension = allowedExtension;
    }
    ExtensionFilter.prototype.apply = function (fsEntity) {
        return fsEntity.extension === this._allowedExtension;
    };
    return ExtensionFilter;
}());
var SizeFilter = /** @class */ (function () {
    function SizeFilter(sizeLimit) {
        this._sizeLimit = sizeLimit;
    }
    SizeFilter.prototype.apply = function (fsEntity) {
        return fsEntity.size <= this._sizeLimit;
    };
    return SizeFilter;
}());
var SearchCommand = /** @class */ (function () {
    function SearchCommand() {
    }
    SearchCommand.prototype.search = function (directory, filters) {
        var _this = this;
        if (!directory.isDir) {
            return [];
        }
        var filterResult = [];
        directory.children.forEach(function (child) {
            if (child.isDir) {
                filterResult = __spreadArray(__spreadArray([], filterResult, true), _this.search(child, filters), true);
            }
            if (filters.every(function (filter) { return filter.apply(child); })) {
                filterResult.push(child);
            }
        });
        return filterResult;
    };
    return SearchCommand;
}());
function main() {
    //construct directory
    var rootDir = new Directory("/");
    var movieDir = new Directory("movies");
    //make files
    var file1 = new FSFile("file1.txt", 2000);
    var file2 = new FSFile("somegif.gif", 2000000);
    var movie1 = new FSFile("ringOfPowerS01.avi", 2000000);
    var movie2 = new FSFile("ringOfPowerS02.avi", 4000000);
    var movie3 = new FSFile("ringOfPowerS03.mp4", 3000000);
    //add files,dirs to dir
    rootDir.addEntity(movieDir);
    rootDir.addEntity(file1);
    rootDir.addEntity(file2);
    movieDir.addEntity(movie1);
    movieDir.addEntity(movie2);
    movieDir.addEntity(movie3);
    //search with filters like size, extenstion
    var searchApi = new SearchCommand();
    var searchResult1 = searchApi.search(rootDir, [new ExtensionFilter("avi"), new SizeFilter(2000000)]);
    var searchResult2 = searchApi.search(rootDir, [new ExtensionFilter("mp4")]);
    console.log(searchResult1, searchResult2);
}
main();
//# sourceMappingURL=test%20copy%202.js.map
// abstract class FileSystemEntity {
//   public name: string;
//   public size: number;
//   public extension: string;
//   public isDirectory: boolean;
//   public children: FileSystemEntity[];
//   constructor(isDirectory: boolean, name: string) {
//     this.name = name;
//     this.isDirectory = isDirectory;
//     this.children = [];
//   }
// }
// class FSFile extends FileSystemEntity {
//   constructor(name: string, size: number) {
//     super(false, name);
//     this.size = size;
//     this.extension = this.extractExtension(name);
//   }
//   private extractExtension(fileName: string): string {
//     const indexOfDot = fileName.lastIndexOf(".");
//     return fileName.substring(indexOfDot + 1);
//   }
// }
// class Directory extends FileSystemEntity {
//   constructor(name: string) {
//     super(true, name);
//     this.size = 0;
//   }
//   addEntity(entity: FileSystemEntity) {
//     this.children.push(entity);
//   }
// }
// /**
//  * Filter utilities
//  */
// interface IFilter {
//   apply(fsEntity: FileSystemEntity): boolean;
// }
// class SizeFilter implements IFilter {
//   private _sizeLimit: number;
//   constructor(sizeLimit: number) {
//     this._sizeLimit = sizeLimit;
//   }
//   apply(fsEntity: FileSystemEntity): boolean {
//     return fsEntity.size <= this._sizeLimit;
//   }
// }
// class ExtensionFilter {
//   private allowedExtension: string;
//   constructor(allowedExtension: string) {
//     this.allowedExtension = allowedExtension;
//   }
//   apply(fsEntity: FileSystemEntity): boolean {
//     return fsEntity.extension == this.allowedExtension;
//   }
// }
// class SearchCommand {
//   public search(directory: FileSystemEntity, filters: IFilter[]): FileSystemEntity[] {
//     if (!directory.isDirectory) {
//       return [];
//     }
//     let filterResult: FileSystemEntity[] = [];
//     directory.children.forEach((child: FileSystemEntity) => {
//       if (child.isDirectory) {
//         filterResult = [...filterResult, ...this.search(child, filters)];
//       }
//       if (filters.every((filter) => filter.apply(child))) {
//         filterResult.push(child);
//       }
//     });
//     return filterResult;
//   }
// }
// function main() {
//   // declare some folder
//   const file1 = new FSFile("file1.txt", 10);
//   const file2 = new FSFile("somegif.gif", 40_000);
//   const dir = new Directory("/");
//   const movie1 = new FSFile("movie1.mp4", 2_000_000);
//   const movie2 = new FSFile("movie2.mp4", 1_000_000);
//   const movie3 = new FSFile("movie3.mp4", 5_000_000);
//   const nestedDir = new Directory("movies");
//   nestedDir.addEntity(movie1);
//   nestedDir.addEntity(movie2);
//   nestedDir.addEntity(movie3);
//   dir.addEntity(file1);
//   dir.addEntity(file2);
//   dir.addEntity(nestedDir);
//   // Apply filters
//   const searchApi = new SearchCommand();
//   const searchResults1 = searchApi.search(dir, [new ExtensionFilter("mp4"), new SizeFilter(2_000_000)]);
//   const searchResults2 = searchApi.search(dir, [new ExtensionFilter("gif")]);
//   console.log(searchResults1);
//   console.log("=====");
//   console.log(searchResults2);
// }
// console.log(2_000_000);
// main();
//# sourceMappingURL=test.js.map
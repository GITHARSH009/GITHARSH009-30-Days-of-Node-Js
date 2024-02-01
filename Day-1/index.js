var fs=require("fs");


function readFileContent(filePath) {
    try {
    let data=fs.readFileSync(filePath,"utf-8");
    console.log(data);
    } catch (error) {
        console.log("Error reading file: ENOENT: no such file or directory...")
    }
    
}

readFileContent('text-files/file1.txt');
readFileContent('text-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');
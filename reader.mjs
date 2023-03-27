import { promises, readFile, stat } from 'fs';
import * as path from 'path';
import { join } from 'path';


async function readFolders(pathFolder) {
    const stats = await promises.stat(pathFolder);
    if (stats.isDirectory()) {
        console.log(pathFolder, 'es una carpeta');
        const files = await promises.readdir(pathFolder);
        for (const file of files) {
            const subPathName = path.join(pathFolder, file);
            await readFolders(subPathName); 
        }
    } else if (stats.isFile()) {
        console.log(pathFolder, 'es un archivo');
    }
}

(async () => {
    try {
        // const content = await Promise.all(readFiles);
        await readFolders('./gallery-images/images');

    } catch (error) {
        console.log(error);
    }
})();




/* if(stats.isDirectory()) {
            console.log(item, 'es una carpeta')
            const file = await promises.readdir(pathName)
            file.forEach(async subItem => {
                const subPathName = path.join(pathName, subItem);
                const subStats = await promises.stat(subPathName);
                if(subStats.isDirectory()) {
                    console.log(subItem, 'es una carpeta');
                    const subFile = await promises.readdir(subPathName);
                    subFile.forEach(item => console.log(item))
                }
            })
        }  */
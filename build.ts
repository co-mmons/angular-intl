import {removeSync} from "fs-extra";
import * as packager from "ng-packagr";

(async () => {

    try {

        try {
            await packager
                .ngPackagr()
                .forProject(`package.json`)
                .build();
        } catch (error) {
            console.error(error);
            process.exit(0);
        }

        // removeSync("dist/package.json");

        for (const dir of ["esm5", "fesm5", "fesm2015", "bundles"]) {
            removeSync(`dist/${dir}`);
        }

    } catch (error) {
        console.error(error);
        process.exit(0);
    }

})();

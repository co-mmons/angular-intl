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

    } catch (error) {
        console.error(error);
        process.exit(0);
    }

})();

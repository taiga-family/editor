# angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "demo": {
      "root": "",
      "sourceRoot": "",
      "projectType": "application",
      "prefix": "my-app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/demo",
            "index": "src/index.html",
            "main": "src/main.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.less"]
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": false,
              "outputHashing": "all",
              "sourceMap": true,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": false,
              "vendorChunk": false,
              "buildOptimizer": false
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "demo:build"
          }
        }
      }
    }
  },
  "defaultProject": "demo"
}
```

# tsconfig.json

```json
{
  "compilerOptions": {
    "sourceMap": false,
    "declaration": false,
    "downlevelIteration": false,
    "experimentalDecorators": true,
    "module": "es2020",
    "target": "es6",
    "moduleResolution": "node",
    "importHelpers": true,
    "lib": ["esnext", "dom"]
  }
}
```

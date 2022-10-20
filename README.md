# Introduction
This is a boilerplate/template for Melvor Idle mods. Using Webpack, this will compile your mod to a single, uglified script file, largely reducing mod size and improving compatibilty with IDE features. The downside to this is it makes debugging in the browser a bit more difficult with the uglified source.

# Prerequisites
Requires [Node.js](https://nodejs.org/en/)

# Use
1. Fork and clone repository.
2. Run `npm install`
3. Update `package.json`'s `name` property to match your mod.
4. Update `manifest.json`'s `namespace` property.
5. Run `npm run build` to build.
6. Upload the generated `.zip` file in the `dist` folder to mod.io.

# Important Notes/Caveats
* Don't use `loadModule` to import modules. Use ES6 `import` instead.
* Image files that you want to bundle with your mod **must** be in the `img` folder and be imported somewhere in the code.
* The `img` folder cannot have subdirectories.
* As mentioned above, the minification and uglification of code makes debugging error messages a bit more tedious.
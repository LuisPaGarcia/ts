# TS examples

## How to create a local ts env.

1. Install typescript for a local repo

```bash
$ npm init --y
$ npm i typescript
```

2. Create a `src` folder and add your .ts files to this folder.
3. Add a `tsconfig.json` to the root, like this:

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "commonjs",
    "target": "es5",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noImplicitAny": true,
    "sourceMap": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

4. Run ts compiler on watch mode using:

```bash
$ tsc --watch
```

5. The output files will be on `dist` folder on save

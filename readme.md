#### Tech Clin

libs:

```
npm init -y
npm install express
npm install nodemon -D
npm install @types/express -D
npm install -D typescript
npx tsc --init
npm install -D ts-node
npm install dotenv @types/dotenv --save-dev
npm install typeorm
npm install pg --save
npm install cors
```

opções de configuração do typescript para funcionar com express e typeorm tsconfig.json:

```
{
  "compilerOptions": {
     "lib": [
        "es5",
        "es6"
     ],
     "target": "es2016",
     "module": "commonjs",
     "moduleResolution": "node",
     "esModuleInterop": true,
     "outDir": "./build",
     "emitDecoratorMetadata": true,
     "experimentalDecorators": true,
     "sourceMap": true
  }
}
```

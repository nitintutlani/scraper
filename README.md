# scraper
Elegant web scraper

Make sure you have gulp, tsd, mocha in global
```
npm install -g gulp mocha tsd typescript
```

Install npm dependencies, inside project folder
```
npm install
```
Alternately, npm link will also work
```
npm link
```
> On server deployment we do not have root or sudo access due to which we must install all dependencies inside the project.

Install tsd typings
```
tsd install
```

Build
```
gulp build
```

Test
```
gulp test
```

All in one + WATCH
```
gulp
```

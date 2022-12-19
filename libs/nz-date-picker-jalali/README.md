<p align="center">
  <a href="http://ng.ant.design">
    <img width="230" src="https://img.alicdn.com/tfs/TB1TFFaHAvoK1RjSZFwXXciCFXa-106-120.svg">
  </a>
</p>

<h1 align="center">
NG-ZORRO-DATE-PICKER-JALALI
</h1>

<div align="center">

Angular DatePicker component library based on Ant Design.

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.com/package/nz-date-picker-jalali)
[![NPM downloads](http://img.shields.io/npm/dm/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.com/package/nz-date-picker-jalali)
[![extension-for-VSCode](https://img.shields.io/badge/extension%20for-VSCode-blue.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

</div>

## 🖥 Environment Support

* Angular `^14.0.0` [![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd)

## 📦 Installation

**We recommend using `@angular/cli` to install**. It not only makes development easier, but also allows you to take advantage of the rich ecosystem of angular packages and tooling.

```bash
$ ng new PROJECT_NAME
$ cd PROJECT_NAME
$ ng add ng-zorro-antd
```

> More information about `@angular/cli` [here](https://github.com/angular/angular-cli).

You can also install `ng-zorro-antd` with npm or yarn,
Then install `nz-date-picker-jalali` with npm or yarn for Jalali

```bash
$ npm install ng-zorro-antd
$ npm install nz-date-picker-jalali
```


## Provide custom DateAdapter
If you need to present another calendar like [Jalali](https://en.wikipedia.org/wiki/Jalali_calendar) or [Hijri](https://en.wikipedia.org/wiki/Islamic_calendar), you can provide a custom NzDateAdapter which implements required methods to deal with native date object.

### Example
```ts
import { NzDateAdapter } from 'nz-date-picker-jalali';

export class CustomDateAdapter extends NzDateAdapter<any> {
    // implementation of abstract methods
}

@NgModule({
  providers: [
    {provide: NzDateAdapter, useClass: CustomDateAdapter}
  ]
})
export class AppModule {}
```
#### Sample
[Jalali-Moment date adapter](https://gist.github.com/psychomet/22798ab7552b38751ac44a665fe1c512)

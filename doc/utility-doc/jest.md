## jest
配置文件
`jest.config.js`

```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  testMatch: [
    '**/__tests__/**/*.test.ts'
  ],
  collectCoverageFrom: [
    '**/environment/**/*.{ts,tsx}',
    '!dist/**',
  ],
};


```


## mock 回调

`baseapi.ts`
```

class BaseApi {
  public curEnv: string;

  constructor(curEnv: string) {
  }


  onReady(cb: any) {
    cb && cb();
  }
}

```

`baseapi.test.ts`

```
let baseInstance: BaseApi; 
beforeAll(() => {
  baseInstance = new BaseApi(curEnv);
});


describe('onReady', () => {
  test('onReady 调用次数', () => {
    const mockFun = jest.fn(); // 模拟回调函数
    baseInstance.onReady(mockFun);
    expect(mockFun.mock.calls.length).toBe(1);  // 回调函数掉用户次数
  });
});

```



## mock window.location.href

`baseapi.ts`
```
...
openUrl (url) {
  window.location.href = url;
}

```


`baseapi.test.ts`

```
let baseInstance: BaseApi; 

const { location } = window;
const getHrefSpy = jest.fn(() => 'example.com');
const setHrefSpy = jest.fn((href:string) => (href));

beforeAll(() => {
  baseInstance = new BaseApi(curEnv);

  // mock window 
  delete (window as any).location;
  window.location = {} as Location;
  Object.defineProperty(window.location, 'href', {
    get: getHrefSpy,
    set: setHrefSpy,
  });
});


describe('openUrl', () => {
  test('openUrl', () => {
    expect(setHrefSpy).toHaveBeenCalled();
  });
});

```



### 参考资料
[ts-jest/docs](https://kulshekhar.github.io/ts-jest/docs/getting-started/presets/)
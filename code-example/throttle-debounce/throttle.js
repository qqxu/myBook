import throttle from 'lodash/throttle';

const LODASH_CONFIG = {
  wait: 1000,
  options: {
    leading: true,
    trailing: false
  }
};

/**
 * @description: 判断值是否存在且为numebr，如果是则返回，否则返回默认值
 * @param {number} wait 默认值 LODASH_CONFIG.wait
 * @return {number}
 */
const getWaitTime = (wait: number | undefined) =>
  wait && typeof wait === 'number' ? wait : LODASH_CONFIG.wait;

/**
 * @description 装饰器工厂，给class 内的方法（不能是箭头函数)添加节流
 * @param {number} wait 节流时间 单位ms，非必填
 */
export const throttleWrapper = (wait) => (target, name, descriptor) => {
  const orignFun = descriptor.value;
  if (!orignFun) {
    // eslint-disable-next-line no-console
    console.error(
      `throttleWrapper shouldn't be arrow function, plz check ${name}`,
    );
    return;
  }
  descriptor.value = throttle(
    orignFun,
    getWaitTime(wait),
    LODASH_CONFIG.options,
  );
};


/**
 * @description: 给通用method 添加节流函数
 * @param {function} func
 * @param {number} wait 节流时间，单位ms，非必填
 * @return {*}
 */
 export const onThrottle = (func, wait?: number) => throttle(func, getWaitTime(wait), LODASH_CONFIG.options);

import { styleFn } from 'styled-system';

/**
 * Allows you to pass in a styled-system function and split out
 * in a typesafe manner, the props that match and do not match
 * the styled function.
 */
export const splitProps = <T>(mixin: styleFn) => {
  const re = new RegExp(`^(${mixin.propNames!.join('|')})$`);

  return <U>(props: U): [T, Omit<U, keyof T>] => {
    const leftProps: { [key: string]: any } = {};
    const rightProps: { [key: string]: any } = {};
    Object.keys(props).forEach((key) => {
      if (re.test(key)) {
        leftProps[key] = (props as any)[key];
      } else {
        rightProps[key] = (props as any)[key];
      }
    });

    return [(leftProps as T), (rightProps as Omit<U, keyof T>)];
  };
};

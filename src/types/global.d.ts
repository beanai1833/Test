import type { ComponentRenderProxy, VNode, VNodeChild, PropType as VuePropType } from 'vue';

declare global {

  // vue
  declare type PropType<T> = VuePropType<T>;
  declare type VueNode = VNodeChild | JSX.Element;

  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  declare type TimeoutHandle = ReturnType<typeof setTimeout>;
  declare type IntervalHandle = ReturnType<typeof setInterval>;

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  declare interface WheelEvent {
    path?: EventTarget[];
  }

  declare interface ViteEnv {
    VITE_USE_MOCK: Boolean;
    VITE_USE_ERUDA: Boolean;
    VITE_USE_COMPRESS: Boolean;
    VITE_USE_REPORT: Boolean;
  }

  declare function parseInt(s: string | number, radix?: number): number;

  declare function parseFloat(string: string | number): number;

}

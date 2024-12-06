interface Window {
  scroll2Bottom(): void;
}

declare module '@vant/area-data' {
  export declare const areaList: {
    province_list: Record<string, string>;
    city_list: Record<string, string>;
    county_list: Record<string, string>;
  };
  type CascaderOption = {
    text: string;
    value: string;
    children?: CascaderOption[];
  };
  export declare function useCascaderAreaData(): CascaderOption[];
  export {};
}
// 申明 数组
declare type EmptyArrayType<T = any> = T[];

// 申明 对象
declare type EmptyObjectType<T = any> = {
	[key: string]: T;
};
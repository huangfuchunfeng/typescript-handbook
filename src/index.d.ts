export { }

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: Function,
    $slots: {
      [key: string]: any
    }
    [key: string]: any
  }
}
declare global {
  interface Window {
    $e: unknown
  }
}

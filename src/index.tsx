import UiManagerIos from './NativeUiManagerIos';

export function registerView(viewTag: number): void {
  UiManagerIos.registerView(viewTag);
}

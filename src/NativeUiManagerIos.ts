import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  registerView(viewTag: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('UiManagerIos');

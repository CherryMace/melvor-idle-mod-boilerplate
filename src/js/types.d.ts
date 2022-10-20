interface ModContext {
  gameData: {
    addPackage: (data: string | GameDataPackage) => Promise<void>;
    buildPackage: (builder: (p: any) => void) => { package: GameDataPackage; add: () => Promise<void>; };
  };
  characterStorage: ModStorage;
  accountStorage: ModStorage;
  settings: {
    section: (name: string) => {
      get: (name: string) => unknown;
      set: (name: string, value: any) => void;
      add: (config: SettingConfig | SettingConfig[]) => void;
    };
    type: (name: string, config: SettingConfig) => void;
  };
  getResourceUrl: (resourcePath: string) => string;
  loadTemplates: (resourcePath: string) => void;
  loadStylesheet: (resourcePath: string) => void;
  loadScript: (resourcePath: string) => Promise<void>;
  loadModule: (resourcePath: string) => Promise<any>;
  loadData: (resourcePath: string) => Promise<any>;
  onModsLoaded: (callback: ModContextCallback) => void;
  onCharacterSelectionLoaded: (callback: ModContextCallback) => void;
  onCharacterLoaded: (callback: ModContextCallback) => void;
  onInterfaceReady: (callback: ModContextCallback) => void;
  api: (endpoints: Record<string, unknown>) => any;
  patch: (classHandle: ClassDecorator, methodName: string) => Patch;
  isPatched: (classHandle: ClassDecorator, methodName: string) => boolean;
}

interface GameDataPackage {
  data?: Record<string, any>;
  modifications?: Record<string, any>;
}

interface ModStorage {
  setItem(key: string, data: any): void;
  getItem(key: string): any;
  removeItem(key: string): void;
  clear(): void;
}

interface SettingConfig {
  type: 'text' | 'number' | 'switch' | 'dropdown' | 'button' | 'checkbox-group' | 'radio-group' | 'label' | 'custom';
  name: string;
  default: unknown;
  label: string;
  hint: string;
  render(name: string, onChange: () => void, config: SettingConfig): HTMLElement;
  onChange(value: unknown, previousValue: unknown): void | boolean | string;
  get(root: HTMLElement): unknown;
  set(root: HTMLElement, value: unknown): void;
}

interface Patch {
  before(hook: (...args: any[]) => unknown): void;
  after(hook: (returnValue: any, ...args: any[]) => unknown): void;
  replace(replacement: (o: (...args: any[]) => any, ...args: any[]) => any): void;
}

type ModContextCallback = (ctx: ModContext) => void;

interface UI {
  create(component: any, host: Element): Element;
  createStatic(template: string, host: Element): Element;
  createStore(props: any): any;
}

declare const ui: UI;
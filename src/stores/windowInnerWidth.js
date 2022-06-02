import { defineStor } from 'pinia';

export const useStoreWidth = defineStore({
  id: 'windowInnerWidth',
  state: () => {
    return {
      windowInnerWidht: null;
    }
  }
  actions: {
    setWidth(width){
      width = parseInt(width);
      this.windowInnerWidth = width;
    }
  }
});
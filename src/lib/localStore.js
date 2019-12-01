import { writable } from 'svelte/store';
import devalue from 'devalue';

function create(key, value) {
  const { subscribe, set, update } = writable(value);
  return {
    subscribe,
    set,
    update,
    useLocalStorage: () => {
      if(!process.browser) return;

      const json = localStorage.getItem(key);
      if(json) {
        set((0, eval)('(' + json + ')'));
      }

      return subscribe(current => {
        localStorage.setItem(key, devalue(current));
      });
    }
  };
}

export default {
  create
};

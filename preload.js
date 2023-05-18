const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron', {
      doThing: (btn) => ipcRenderer.invoke('ctrls', btn)
    });

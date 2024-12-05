// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  encryptFileRequest: (filePath: string, password: string) => ipcRenderer.invoke('encryptFileRequest', [filePath, password]),
  decryptFileRequest: (filePath: string, password: string) => ipcRenderer.invoke('decryptFileRequest', [filePath, password])
})

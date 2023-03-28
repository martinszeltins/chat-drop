// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer, webFrame } from 'electron';

window.addEventListener('message', (event) => {
    if (event.data === 'hide-main-window') {
        ipcRenderer.send('hide-main-window');
    }
});

window.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
            case '=':
            case '+':
                webFrame.setZoomFactor(webFrame.getZoomFactor() + 0.1);
            break;

            case '-':
                webFrame.setZoomFactor(webFrame.getZoomFactor() - 0.1);
            break;

            case '0':
                webFrame.setZoomFactor(1);
            break;
        }
    }
});

webFrame.setZoomFactor(1.3);

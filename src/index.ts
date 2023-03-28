import * as path from 'path';
import { app, BrowserWindow, screen, ipcMain, globalShortcut } from 'electron';

if (require('electron-squirrel-startup')) {
    app.quit();
}

let mainWindow: BrowserWindow | null = null
let isMainWindowVisible = true

const createWindow = (): void => {
    const { x, y, width, height } = getWindowBounds()

    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        frame: false,
        resizable: false,
        transparent: true,
        maximizable: false,
        alwaysOnTop: true,
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, '../renderer/main_window/preload.js'),
            allowRunningInsecureContent: true,
            webviewTag: true,
            contextIsolation: false
        }
    });

    setWindowPosition(x, y);

    mainWindow.loadURL('https://chat.openai.com/chat?model=gpt-4');

    mainWindow.loadURL('https://chat.openai.com/chat?model=gpt-4').then(() => {
        mainWindow.webContents.executeJavaScript(`
            window.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    window.postMessage("hide-main-window", "*");
                }
            });
        `);
    });
};

const toggleMainWindow = () => {
    if (isMainWindowVisible) {
        mainWindow.hide();
        isMainWindowVisible = false;
    } else {
        mainWindow.show();
        isMainWindowVisible = true;
    }
}

ipcMain.on('hide-main-window', () => {
    if (mainWindow) {
        mainWindow.hide();
    }
});

app.on('ready', createWindow);

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+I', () => {
        toggleMainWindow()
    })
})

const setWindowPosition = (x: number, y: number) => {
    mainWindow.setPosition(x, y)
}

const getWindowBounds = () => {
    const primaryDisplay = screen.getPrimaryDisplay()
    const width          = primaryDisplay.size.width - 100
    const height         = primaryDisplay.size.height - 300

    // Center the window in the center of the primary screen
    const bounds = screen.getPrimaryDisplay().bounds
    const x = Math.floor(bounds.x + ((bounds.width - width) / 2))
    const y = Math.floor(bounds.y + ((bounds.height - height) / 2)) - 130

    return { x, y, width, height }
}


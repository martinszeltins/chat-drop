import * as os from 'os'
import * as fs from 'fs'
import * as path from 'path'
import { app, BrowserWindow, screen, ipcMain, globalShortcut } from 'electron'

const appName = 'chat-drop'

const configHome = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), '.config')
const appConfigDir = path.join(configHome, appName)
const settingsFile = path.join(appConfigDir, 'settings.json')

function debounce(func: any, wait: number) {
    let timeout: any

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}
  

// Create the config directory if it doesn't exist
if (!fs.existsSync(appConfigDir)) {
    fs.mkdirSync(appConfigDir, { recursive: true });
}

const getWindowBounds = () => {
    const primaryDisplay = screen.getPrimaryDisplay()
    const width = primaryDisplay.size.width - 100
    const height = primaryDisplay.size.height - 300

    // Center the window in the center of the primary screen
    const bounds = screen.getPrimaryDisplay().bounds
    const x = Math.floor(bounds.x + (bounds.width - width) / 2)
    const y = Math.floor(bounds.y + (bounds.height - height) / 2) - 130

    // If a settings file exists with window position, use that instead, otherwise return the default and save them to the settings file
    if (fs.existsSync(settingsFile)) {
        const settings = JSON.parse(fs.readFileSync(settingsFile, 'utf8'))
        
        return { x: settings.x, y: settings.y, width, height }
    } else {
        const windowBounds = { x, y, width, height }
        fs.writeFileSync(settingsFile, JSON.stringify({ x, y }, null, 2))

        return windowBounds
    }
}

if (require('electron-squirrel-startup')) {
    app.quit()
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
        maximizable: false,
        alwaysOnTop: true,
        transparent: false,
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, '../renderer/main_window/preload.js'),
            allowRunningInsecureContent: true,
            webviewTag: true,
            contextIsolation: false,
        },
    })

    setWindowPosition(x, y)

    mainWindow.loadURL('https://chat.openai.com/chat?model=gpt-4')
        .then(() => {
            mainWindow.webContents.executeJavaScript(`
            window.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    window.postMessage("hide-main-window", "*");
                }
            });
        `)
        })
        .catch(() => {
            mainWindow.hide()
            isMainWindowVisible = false
        })

    mainWindow.on('move', debounce(() => {
        const [x, y] = mainWindow.getPosition();
        
        // If settings file exists, update the window position, otherwise create the file and save the window position
        if (fs.existsSync(settingsFile)) {
            const settings = JSON.parse(fs.readFileSync(settingsFile, 'utf8'))
            settings.x = x
            settings.y = y
            fs.writeFileSync(settingsFile, JSON.stringify(settings, null, 2))
        } else {
            fs.writeFileSync(settingsFile, JSON.stringify({ x, y }, null, 2))
        }
    }, 2000));

    // Hide window on start
    mainWindow.hide()
    isMainWindowVisible = false

    // Really make sure the window is hidden
    setTimeout(() => {
        mainWindow.hide()
        isMainWindowVisible = false
    }, 2000)

    hideWindowIfNoInternetConnection()
}

const hideWindowIfNoInternetConnection = () => {
    mainWindow.webContents.on('did-fail-load', () => {
        mainWindow.hide()
        isMainWindowVisible = false
    })

    fetch('https://www.google.com').catch(() => {
        mainWindow.hide()
        isMainWindowVisible = false
    })
}

const toggleMainWindow = () => {
    if (isMainWindowVisible) {
        mainWindow.hide()
        isMainWindowVisible = false
    } else {
        mainWindow.show()
        isMainWindowVisible = true
    }
}

ipcMain.on('hide-main-window', () => {
    if (mainWindow) {
        mainWindow.hide()
    }
})

app.on('ready', createWindow)

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+I', () => {
        toggleMainWindow()
    })

    globalShortcut.register('CommandOrControl+1', () => {
        toggleMainWindow()
    })
})

const setWindowPosition = (x: number, y: number) => {
    mainWindow.setPosition(x, y)
}

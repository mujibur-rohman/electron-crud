const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Test App",
    width: 1000,
    height: 800,
  });

  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});

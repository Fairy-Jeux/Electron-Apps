const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cree la fenetre du navigateur.
  let win = new BrowserWindow({
    width: 1920,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

// Ouvre les DevTools.
win = null


// Quitter si toutes les fenêtres ont été fermées.
app.on('window-all-closed', () => {
 // Sur macOS, il est commun pour une application et leur barre de menu
 // de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
 if (process.platform !== 'darwin') {
   app.quit()
 }
})

app.on('activate', () => {
 // Sur macOS, il est commun de re-créer une fenêtre de l'application quand
 // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
 if (win === null) {
   createWindow()
 }
})

// Dans ce fichier, vous pouvez inclure le reste de votre code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.
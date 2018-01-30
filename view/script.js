const fs = require('fs')
const marked = require('marked')
const hljs = require('highlight.js')

const { dialog } = require('electron').remote

const readFile = (file) => {
  fs.readFile(file, (err, data) => {
    document.querySelector('.md').innerHTML = marked(data.toString())
    Array.from(document.querySelectorAll('pre code')).forEach(block => hljs.highlightBlock(block))
  })
}

const openFilePicker = () => {
  dialog.showOpenDialog(fileNames => {
    if (fileNames) {
      readFile(fileNames[0])
    }
  })
}

document.getElementById('select-file').addEventListener('click', openFilePicker)

'use strict';
// Tutta la configurazione dei task è dentro il metodo module.exports
module.exports = function(grunt) {

  // Inizializzazione della configurazione dei task
  grunt.initConfig({
    // Leggiamo il file package.json al cui contenuto potrai poi accedere per parametrizzare i task
    pkg: grunt.file.readJSON('package.json'),
    // Configurazione specifica per il plugin grunt-contrib-copy
    copy: {
      // Puoi definire task di copia diversi chiamandoli con nomi da richiamare in seguito, per esempio lib
      lib: {
        // Quando copia un file, ricostruisce e mantiene la struttura delle directory che lo contengono
        expand: true,
        // La cartella in cui sono contenuti i file originali da copiare
        cwd: 'bower_components/',
        // I file da copiare: una lista di nomi di file (stringhe), ma da cui si può accedere alle informazioni lette dal package.json
        src: ['<%= pkg.files %>'], // Elenco di tutti i file delle librerie da cui dipende il tuo progetto
        // La cartella di destinazione dei file copiati
        dest: 'lib/',
        // Applicazione di un filtro: devono essere copiati solo i file veri, non cartelle, link simbolici o altro
        filter: 'isFile'
      }
    }
  });

  // Caricamento del plugin che gestisce il task di copia (deve essere stato installato nella cartella npm_modules/)
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Gli shortcut con cui eseguire da linea di comando i vari task e sotto task
  // Quello di default viene eseguito al semplice comando grunt senza ulteriori specificazioni
  grunt.registerTask('default', ['copy:lib']);

};

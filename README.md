PuC-Kategorie-Seite
===================

Für die Installation werden folgende Komponenten benötigt:

* Ruby https://www.ruby-lang.org/en/downloads/ oder http://rubyinstaller.org/ (Win)
* http://nodejs.org/ (npm - node package manager wird benötigt)
* git


```sh
gem update --system
gem install compass --pre
npm install -g grunt-cli
npm install -g bower
```

Nach der Installation der genannten Komponenten muss dieses git-repository geclont werden. 

```sh
git clone https://github.com/aggreggator/pc-kategorie.git
```
Nun muss in das von git erzeugte Verzeichnis gewechselt werden und es können alle npm-dependecies installiert werden:
```sh
npm install
```
Jetzt fehlen nur noch die bower-components
```sh
bower install
```
Jetzt sollten alle benötigten Pakete vorhanden sein.

Mit dem folgenden Kommando kann ein preview server gestartet werden.
```sh
grunt serve
```
Vorgenommene Änderungen an Dateien werden durch einen grunt Task beobachtet, bei Bedarf neu generiert und der Browser wird durch Live-Reload aktualisiert.

Um Produktions-Daten zu erhalten nutzt man folgendes Kommando:
```sh
grunt build
```
Im Verzeichnis "dist" werden die Produktions-Daten abgelegt.
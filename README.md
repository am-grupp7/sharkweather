# sharkweather

## Install and buildinstructions

Navigate in your terminal of choice to a directory where you would like to store the project. 

Run this command to clone the project.
```
git clone git@github.com:am-grupp7/sharkweather.git
```
When the project is completly downloaded to your machine you will use node to build it. 

Use this command to make node download all necessary files.
```
npm install
```
(If the command is not recognized, it might meen that you haven't installed node yet. If you haven't, please install it from https://nodejs.org/en/download/)

When all files have been downloaded, installed and node gives you a "build complete"-message you should be ready to build the project. (If you want to run the project through node server you can skip this step and continue at Run the project alternative 1.  [Alternative 1](#runwithnode))

```
npm run build
```

## Run the project

## <a name="runwithnode"></a> Alternative 1 - With Node

```
npm run serve
```
## Alternative 2 - With VScode and live server 
(https://ritwickdey.github.io/vscode-live-server/)
Navigate to the project and open the project folder with VSCode.
Press the "Go Live" button in the bottom right corner of VScode and the project should open in your default browser. If you cannot see this button, make sure you have installed Live Server correctly and restart VSCode.


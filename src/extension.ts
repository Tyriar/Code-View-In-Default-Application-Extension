'use strict';

import * as vscode from 'vscode';

var open = require('open');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "view-in-default-application" is now active!');
              
    let disposable = vscode.commands.registerCommand('extension.viewInDefaultApp', () => {
        new ApplicationLauncher().showInDefaultApp();
    });
    
    context.subscriptions.push(disposable);
}

export function deactivate() {
    
}

class ApplicationLauncher {
    
    _editor: vscode.TextEditor;
    
    constructor() {
        
        this._editor = vscode.window.activeTextEditor;
        
    }
    
    showInDefaultApp() {
        
        if (!this._editor) {
            
            return; // No open text editor
            
        }
        
        var fileName = this._editor.document.fileName;
        
        open(fileName);
	}
}
'use strict';

import * as vscode from 'vscode';
var open = require('open');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "view-in-browser" is now active!');

	let disposable = vscode.commands.registerCommand('extension.viewInBrowser', () => {
		var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        var fileName = editor.document.fileName;
        open(fileName);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
}
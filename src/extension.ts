'use strict';

import * as vscode from 'vscode';
var open = require('open');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "view-in-default-application" is now active!');

	let disposable = vscode.commands.registerCommand('extension.viewInDefaultApp', () => {
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
chrome.devtools.panels.applyStyleSheet(`
body, .platform-windows, .monospace, .source-code {
	font-family: Arial, Tahoma, sans-serif !important;
}

.tabbed-pane-header-tab {
	width: auto !important;
}
.tabbed-pane-header-tab.selected {
	font-weight: bold;
	background-color: transparent;
	/*background-color: #dedede;*/
}
.tabbed-pane-tab-slider {
	display: none;
}

:host-context(.platform-windows) .monospace,
:host-context(.platform-windows) .source-code,
.platform-windows .monospace,
.platform-windows .source-code
{
    font-size: 12px !important;
    font-family: "Terminus (TTF) for Windows", Consolas, monospace !important;
}

::shadow :host-context(.platform-windows) .monospace,
::shadow :host-context(.platform-windows) .source-code,
::shadow .platform-windows .monospace,
::shadow .platform-windows .source-code {
    font-size: 12px !important;
    font-family: "Terminus (TTF) for Windows", Consolas, monospace !important;
}

.styles-section.read-only {
	font-style: normal !important;
}
.metrics .label {
	font-size: 11px !important;
}
`);
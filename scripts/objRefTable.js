const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.HTMLElement,
		C3.Plugins.iframe
	];
};
self.C3_JsPropNameTable = [
	{HTMLЭлемент: 0},
	{iframe: 0}
];

self.InstanceType = {
	HTMLЭлемент: class extends self.IHTMLElementInstance {},
	iframe: class extends self.IIframeInstance {}
}
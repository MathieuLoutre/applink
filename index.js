(function (root, factory) {
	
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} 
	else if (typeof module !== "undefined" && module.exports) {
		module.exports = factory();
	} 
	else {
		root.AppLink = factory();
	}
}(this, function () {

	function AppLink (options) {

		this.options = options || {};
		this.nativeApp = null;
	}

	AppLink.prototype.open = function (options) {

		this.options = options || this.options;

		if ((this.nativeApp === null || this.nativeApp === true) && (navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod'))) {

			if (this.nativeApp) {
				window.open(this.options.nativeURL)
			}
			else {
				var now = Date.now();
				var nativeWait = null;
				var _this = this;

				var wait = function () {

					if (Date.now() - now > 1000) {

						cancelAnimationFrame(nativeWait);
						iframe.remove();

						if (Date.now() - now < 1500) {
							_this.nativeApp = false;
							_this.options.error();
						}
						else {
							_this.nativeApp = true;
							_this.options.success();
						}
					}
					else {
						nativeWait = requestAnimationFrame(wait);
					}
				}

				nativeWait = requestAnimationFrame(wait);

				var iframe = document.createElement("iframe");
				iframe.src = this.options.nativeURL;
				iframe.setAttribute("style", "display: none;");
				document.body.appendChild(iframe);
			}
		}
		else {
			this.nativeApp = false;
			this.options.error();
		}
	}

	return AppLink
}));
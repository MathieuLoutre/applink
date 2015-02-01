# AppLink

> Open apps with a URI Scheme from a webpage

AppLink allows you to open apps with a URI Scheme from a webpage instead of for instance opening widgets. Useful for Facebook, Tiwtter, Pinterest sharing.

## Usage

Install using bower: `bower install applink`  
Or using npm: `npm install applink`  
Or just by downloading the [tarball](https://github.com/MathieuLoutre/applink/archive/master.zip)

```js

	var twitter = new AppLink()

	twitter.open({
		error: function () {
			window.open(encodeURI("https://twitter.com/intent/tweet?text=Look at this awesome thing"), "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" + Math.round((screen.height - 450)/2) + ",left=" + Math.round((screen.width - 550)/2))
		},
		success: function () {},
		nativeURL: encodeURI("twitter://post?message=Look at this awesome thing")
	})

```

## TODO

- Testing

## Changelog

- 0.1.0 - First release
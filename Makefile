build:
		ng build --output-path docs --base-href /Portfolio/
		mv docs/browser/* docs
		rmdir docs/browser
		rm docs/3rdpartylicenses.txt
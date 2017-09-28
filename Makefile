PKG_NAME = web-ext-mapycz.zip
SRC = \
background.js \
LICENSE \
_locales \
manifest.json \
mapycz-large.png \
mapycz-small.png \
mapycz-tiny.png

all:
	zip -r ${PKG_NAME} ${SRC}

clean:
	rm -rf ${PKG_NAME}

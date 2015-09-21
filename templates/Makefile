
NPM ?= npm
OUT = build

build: prepare
	@$(NPM) run build

prepare:
	@mkdir -p $(OUT)

node_modules:
	@$(NPM) install -sq

distclean: clean
	rm -fr node_modules

clean:
	rm -fr $(OUT)

.PHONY: build node_modules

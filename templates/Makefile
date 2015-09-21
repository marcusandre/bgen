
NPM ?= npm

node_modules:
	@$(NPM) install -s

distclean: clean
	rm -fr node_modules

clean:
	rm -fr build coverage

.PHONY: node_modules


NPM ?= npm

test:
	@$(NPM) run test

test-cov:
	@$(NPM) run test-cov

build:
	@$(NPM) run build

node_modules:
	@$(NPM) install -s

distclean: clean
	rm -fr node_modules

clean:
	rm -fr build coverage

.PHONY: node_modules test build

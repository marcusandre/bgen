
NPM ?= npm

install:
	@$(NPM) link .

uninstall:
	@$(NPM) uninstall bgen -g

node_modules: package.json
	@$(NPM) install --silent

.PHONY: test

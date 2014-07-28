
PROVA = ./node_modules/.bin/prova

test: node_modules
	@NODE_ENV=test $(PROVA) test/*.js

install:
	@npm link .

uninstall:
	@npm uninstall bgen -g

node_modules: package.json
	@npm install --silent

.PHONY: test

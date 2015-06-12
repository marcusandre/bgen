
OUT = ./build
GULP = ./node_modules/.bin/gulp

build: node_modules clean
	@$(GULP) $@

watch: node_modules clean
	@$(GULP) $@

node_modules: package.json
	@npm install

clean:
	rm -fr $(OUT)

.PHONY: clean


OUT = ./build
GULP = ./node_modules/.bin/gulp
JSCS = ./node_modules/.bin/jscs
SRCS = $(wildcard assets/scripts/**.js)

build: node_modules lint
	@$(GULP) $@

watch: build
	@$(GULP) $@

lint: $(SRCS)
	@$(JSCS) $<

node_modules: package.json
	@npm install -s

clean:
	rm -fr $(OUT)

.PHONY: clean

.DEFAULT_GOAL := help

ifeq ($(OS),Windows_NT)
NPM ?= npm.cmd
else
NPM ?= npm
endif

NODE ?= node
export TITLE SLUG

.PHONY: help install dev check build preview post

help:
	@echo make install - Install dependencies from the lockfile
	@echo make dev     - Start the development server
	@echo make check   - Run Astro and TypeScript diagnostics
	@echo make build   - Generate the production site in dist/
	@echo make preview - Serve the production build locally
	@echo make post TITLE="Post title" - Create a Markdown draft

install:
	$(NPM) ci

dev:
	$(NPM) run dev

check:
	$(NPM) run check

build:
	$(NPM) run build

preview:
	$(NPM) run preview

post:
	$(NODE) scripts/new-post.mjs

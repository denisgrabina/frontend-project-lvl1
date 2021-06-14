install:
	npm ci

brain-games:
	node bin/brain-games.js

start:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

format:
	npx prettier --write "**/*.{js,json,yml,css,html}"

prepublishOnly:
	make format
	make lint
	npm run prepublishOnly
	make publish
	npm link

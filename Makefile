# runs jekyll with live reload
serve:
	bundle exec jekyll serve -l

# runs staging build
staging:
	bundle exec jekyll build -d ~/src/ceic -b /staging/ceic

# puts the bundle process in the background
background:
	bundle exec jekyll serve -l &

# kills the background process
kill:
	pkill ruby2.7

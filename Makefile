# runs jekyll with live reload
serve:
	bundle exec jekyll serve -l

# puts the bundle process in the background
background:
	bundle exec jekyll serve -l &

# kills the background process
kill:
	pkill ruby2.7

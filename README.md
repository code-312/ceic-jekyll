# CEIC Website [In Development]
Most recent build can be seen on the staging server [here](https://nickdolf.com/jekyll-ceic)

[Code for Chicago](https://codeforchicago.org/) is developing a new website for [Cannabis Equity Illinois Coalition](https://cannabisequityil.org/)

### Design and Supporting Docs

[Design System](https://www.figma.com/file/GdtORowLCJ95LE28ESWsFo/CEIC-Design-System?node-id=502%3A2) on Figma

[Design Working File](https://www.figma.com/file/C4pcLvWyQBz2fKCvJ2fMdT/CEIC-Working-File?node-id=3660%3A0) on Figma

[Site layout](https://docs.google.com/document/d/1D74Eb7aSYbjoU7gelxx_sEGSNmSwgsM6luxeaF7NluY/edit) on Google Docs

### Technology
This project is being developed with [Jekyll](https://jekyllrb.com/) and uses HTML, SCSS, Markdown and Liquid.

## Setup
- Get Jekyll running on your local machine by following their [guide](https://jekyllrb.com/docs/)
- Make sure you have your ssh key [setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- Clone this repository `git clone git@github.com:Code-For-Chicago/ceic-jekyll.git`
- cd into the directory `cd ceic-jekyll`
- Install dependencies with `bundle install`
- Start the local server with `bundle exec jekyll serve`
- check site at http://localhost:4000/
- to use live reload `bundle exec jekyll serve -l` (changes to _config.yml require a manual restart)

### Step by Step guide to Jekyll
If you are new to Jekyll(I was) they have an excellent [Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/). I strongly recommend going through it, it took me a couple hours and was well worth it. We use their structure as a guide for this project.

## Development Workflow
Thank you for joining up and helping us develop this site for an amazing non-profit!

We have few coding and workflow conventions we ask all contributors to follow, in order to maintain a clean, well documented code base. This site could be a nice portfolio piece that some devs may use during job search etc. Please read through them and feel free to discuss if you have any suggestions on how to improve them.

### Please don't break the build, do your work in a branch
It's not the end of world of course, we can always revert the commit, but the workflow I use is:
- create a new branch with a meaningful name `git branch amazing-feature`
- switch to it with `git switch amazing-feature`
- do your amazing work in the new branch with meaningful commits`git add .` and `git commit -m 'added excellent api connection for amazing feature'`
- check if master has diverged `git pull origin master`, merge it back `git merge master` and deal with any conflicts
- push the branch to the repo `git push -u origin amazing-feature` and make a [pull request](https://github.com/Code-For-Chicago/ceic-jekyll/pulls)
- One other developer should look over the changes and approve or suggest changes

If you see a merge request and want to approve it:
- pull the branch and test it to make sure it doesn't break the build and all the new code works as intended
- do a code review and suggest changes if needed
- approve the merge request after any needed changes are resolved

After merging delete the branch `git branch -d amazing-feature` to keep our repo pruned, new features can go in new well named branches


### Code review
We don't do big formal reviews, but productive discussions between developers is encouraged especially when merging. Please give and receive suggestions with grace. It is not personal, we have all written good and bad code at times and another person's eye can sometimes see what we missed.

### Double spaces for all indents
Please use two spaces when indenting.
##### Why not tabs??
YAML [forbids tabs](https://yaml.org/faq.html) and Jekyll really likes YAML (tbh, I like tabs, but I prefer consistency)

##### Why not 4 spaces??
We should make a choice for consistency. If a majority prefer 4, we can change. I just chose 2, cause I find 4 makes for very long lines ¯\\\_(ツ)\_/¯

### Document your work
Well documented code (and readmes :) helps with maintenance and getting new developers (and sometimes future you) up to speed quickly and pleasantly. Assume the reader can program and has read the [Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/), but is a recent graduate and new to the project.
- make sure all dependencies are clearly documented
- test that all steps work on a clean environment (like say a fresh Ubuntu install)

### Follow the naming convention
Please try to keep the names of classes, images etc. in a consistent format.

### Only merge clean code to master, keep all experiments in branches
We'd like to keep all the code in master branch as close to production as possible. Feel free to keep a personal branch(s) to play around in when testing etc. When you are ready: create a new branch, write only the code needed, test it, document it, make meaningful commits and then make a merge request.

### Where should I start?
Complete the [first issue](https://github.com/Code-For-Chicago/ceic-jekyll/issues/12). Yes it's silly, but it lets a new dev test out the whole dev flow and all the tech works. 

Look through the [issues](https://github.com/Code-For-Chicago/ceic-jekyll/issues), and assign one to yourself. Or create an issue if you see something else that needs fixing.

#### Welcome onboard! (=^ ◡ ^=)

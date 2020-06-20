# The Frontend Companion
My small and manually curated collection of tools, commands and useful stuff that makes my life as frontend web engineer
a bit easier.

## Server
### Quick HTTP server
Start a simple HTTP Server with Python:
+ Python 2: `python -m SimpleHTTPServer 8000`
+ Python 3: `python -m http.server 8000`

## Version-Control System
### Git
**Undo last commit:**  
`git reset --soft HEAD~1`

**Amend the last commit (changing a commit message)**  
`git commit --amend`  
**or**  
`git revert HEAD`

**Revert (reset) a single file**  
`git checkout -- filename`

**Remove local branches no longer on remote and merged into current branch**  
`git branch --merged >/tmp/merged-branches && vi /tmp/merged-branches && xargs git branch -d </tmp/merged-branches`

**List all local branches and force delete**  
`git branch >/tmp/merged-branches && vi /tmp/merged-branches && xargs git branch -D </tmp/merged-branches`

> VI commands:  
> Delete line: d,d  
> Save & exit: Shift+z,z


**Clean-up outdated references:**  
`git remote prune origin`

**Update repository and automatically clean-up all stale references**  
`git fetch -p`

**Commit count by committer:**  
`git shortlog -s -n`

**Change file write permissions**  
`git ls-files --stage`
`git update-index --chmod=+x filename`

------------------

# License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
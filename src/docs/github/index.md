# GitHub Overview

GitHub is a web-based platform for version control and collaboration. It's widely used for managing and hosting software projects. GitHub allows multiple people to work on the same codebase, track changes, and collaborate efficiently. It's particularly popular among developers for its ease of use and integration with the Git version control system.

## Git Commands for Beginners

### `git add .`

- **Purpose**: This command is used to stage changes in your working directory for the next commit. It prepares the files to be included in the commit.
- **Usage**: `git add .` stages all the changes (new files, modified files, and deletions) in the current directory.
- **Example**: Suppose you have made changes to multiple files in your project directory. To prepare them for the next commit, you run `git add .`.

### `git commit -m`

- **Purpose**: This command is used to save the staged changes as a new commit in your version control history.
- **Usage**: `git commit -m "Your commit message"` creates a new commit with a descriptive message.
- **Example**: After staging your changes using `git add .`, you commit them with a message like `git commit -m "Add new feature"`.

### `git pull`

- **Purpose**: This command is used to fetch changes from a remote repository and merge them into your local branch.
- **Usage**: `git pull` updates your local branch with the latest changes from the remote repository.
- **Example**: To sync your local branch with the remote one, you use `git pull`.

### `git push`

- **Purpose**: This command is used to push your local commits to a remote repository, making your changes available to others.
- **Usage**: `git push` sends your local commits to the remote repository.
- **Example**: After committing your changes, you share them with your team by using `git push`.

### `git merge`

- **Purpose**: This command is used to combine changes from one branch into another.
- **Usage**: `git merge branch-name` merges the specified branch into the current one.
- **Example**: If you have a feature branch and want to incorporate its changes into the main branch, you execute `git merge feature-branch`.

### `git fetch`

- **Purpose**: This command is used to retrieve changes from a remote repository but does not automatically merge them into your working branch. It's useful for inspecting changes before merging.
- **Usage**: `git fetch origin` fetches changes from the remote named "origin."
- **Example**: To see what changes are available in the remote repository without merging them, you use `git fetch`.

### `git restore`

- **Purpose**: This command is used to discard changes in your working directory or unstage changes from the staging area.
- **Usage**:
  - `git restore --staged <file>` untracks a file previously added to the staging area.
  - `git restore <file>` discards changes made to a file in your working directory.
- **Example**: If you mistakenly add a file to the staging area and want to unstage it, you can use `git restore --staged <file>`. To discard changes in a file you no longer wish to keep, you can use `git restore <file>`.

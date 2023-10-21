# How to start a new branch

GitHub provides a convenient way to create a new branch directly from an issue. This allows you to work on a specific task or feature without having to manually create a branch. Here's how you can do it using the GitHub UI:

## Step 1: Open the Issue

1. Go to the GitHub repository where the issue is located.
2. Navigate to the "Issues" tab by clicking on it.
3. Find the issue you want to work on and click on its title to open it. (make is not taken)

## Step 2: Create a New Branch

1. In the issue view, you will see the issue details and conversation.
2. Just on the side, under development, you will find a button labeled "Create a branch."
3. Click on that button.

## Step 3: Create the Branch

1. A pop-up window will appear, prompting you to choose a name for your new branch.
2. GitHub will suggest a branch name based on the issue title. Keep it like that.
3. Make sure "Checkout locally" is checked.
4. Click on "Create branch"
5. Now you will have a command to copy paste in a terminal.

At this point Github already have create a branch (remotely)

## Step 4: VSCode

1. Open your VSC with project.
2. At the root of the project make sure you open a terminal and paste the command.

## Step 5: Work on the Branch

1. You are now on the new branch and can start working on the issue.
2. Commit your changes and make any necessary updates.

### Useful git commands

- git add .
- git commit -m "write your messafe of what you did" (works like a savepoint)
- git merge main "It will take the latest main and merge it in your code". (care about conflicts)
- git restore . "IT will undo everything you have done until the last commit"
- git push "push your changes to github."

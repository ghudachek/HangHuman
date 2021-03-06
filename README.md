# HangHuman

Title: HangHuman

Description: Hangman (but gender-nuetral) online! Varying levels of difficulty where you must guess the words/phrases to save your hang-human!

[Wireframes](https://drive.google.com/file/d/1GcjEYM1GT5iRfDvmRHxNyvqRrSsGkgUF/view?usp=sharing)

![Component Hierarchy](https://drive.google.com/file/d/1HnzzlCxdl3m2t56aIFi6bpKU4dtNzxLD/view?usp=sharing)

API: Airtable will hold my levels. Easy,medium, and hard as well as a topic (descriptor for the word/phrase to be guessed) and the answer (hidden to be guessed). Users will be given the ability to make up their own hangman words/phrases and they will be added to appropriate level for others to play.

![Example API Data](ApiExampleData.png)

MVP:

- starter page: selecting level of difficulty
- three levels of difficulty each with at least three pre-made questions and answers for users to guess.
- buttons with letters A-Z for users to click when playing
- a form where users can create their own words to be played with.
- a stick figure and animation for when the user gets answer wrong or right
- a winners and losers alerct that plays when user wins or loses

Post-MVP:

- Choose player option: users can pick a character for their stick figure
- Choose your background: background options of danger ! where the hangman/women is placed while the game is played
- Add a next button and a score for each level

Project Schedule:

- feb 16: Project Proposal/ approval and boiler plating, component links, airtable linking.
- feb 17: Create components JS for starter page, game page.
- feb 18: Create correct/incorrect/winner/loser alerts/animations.
- feb 19: Create Form for added levels, Css, mediaqueries.
- feb 20/21: added Css or Post MVP.
- feb 22: additional css or pMVP.
- feb 23: Present.

Timeframes:

| Component                                                                                                          | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------------------------------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Create API in Airtable                                                                                             |    H     |     1 hrs      |    .30 hrs    |   .30 hrs   |
| Create App Js boiler and components boilers                                                                        |    H     |      1hrs      |     1hrs      |    1hrs     |
| Add call to airtable Api, make sure we grab data accordignly and add to page                                       |    H     |      3hrs      |     1hrs      |    1hrs     |
| Construct easy, medium, hard buttons with links to proper page                                                     |    H     |      2hrs      |     1hrs      |    1hrs     |
| Construct easy, medium, hard questions game play page: where the answers are hidden and alphebet is shown for user |    H     |      4hrs      |     5hrs      |    5hrs     |
| Conditionals for right/wrong alphabet disabling and answer showing                                                 |    M     |      4hrs      |     6hrs      |    6hrs     |
| Make stickFigures and hangman                                                                                      |    M     |      4hrs      |     6hrs      |    6hrs     |
| Create animations for wrong answer and right answer                                                                |    H     |      3hrs      |     4hrs      |    4hrs     |
| Create "you lose" and "you win" alert/animations                                                                   |    M     |      3hrs      |     1hrs      |    1hrs     |
| Js conditionals to connect alerts and stickfigure to play at proper times                                          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Construct form for users to make their own hangman words                                                           |    H     |      2hrs      |     1hrs      |    1hrs     |
| Add Css to main & component pages                                                                                  |    M     |      4hrs      |     6hrs      |    6hrs     |
| Create MediaQuery for tablet breakpoint and phone break points                                                     |    M     |      3hrs      |     3hrs      |    3hrs     |
| Add next button and score counter                                                                                  |    M     |      4hrs      |     4hrs      |    4hrs     |

| Total | | 29hrs| 42.5hrs | 42.5hrs |

SWOT Analysis:

- Strengths: Using/making: Forms, Css Grid, components.
- Weaknesses: designing any animations/ creating hangman figure.
- Opportunities: creating an alternative design to hangman and some cool added features with animations.
- Threats: Time limit to complete, complications with airtable data.

# goit-final-project

1. Для початку роботи з фронтендом перейдіть в гілку dev, де вже створюйте свою гілку, аналогічно для бекенду перейдіть в гілку back.

2.Зміни в master.
- На [heroky](dashboard.heroku.com) залито сервер,функціональні тільки раути реєстрації, логінізації, додавання і видалення проекту.
- Додавання проекту: https://project-manager-goit20.herokuapp.com/projects/ в body масив (id,title, deckr) - (id користувача, заголовок проекту, опис). 
- Далі body прокидується в servises->project->createProject.
- this.repositories.project.createNewProject() створює пустий документ в колекції projects і повертає її. Id таблиці, як projectId передається для додавання в бд користувача.
- this.repositories.user.createNewProject( id, projectId, title, descr)-> створює новий об"єкт з метаданими про новий проект в документі користувача;
- DELETE відбувається в тому ж порядку.
- На бекенді підключена база даних, сервер піднімається, .env шукайте тут [https://nodejs20online.slack.com/archives/C01H91M5X29/p1608909867008100](https://nodejs20online.slack.com/archives/C01H91M5X29/p1608909867008100).
 - Всі pull request прийнято, шліфувати фронт буду після того, як буде функціональний бекенд для тестування.

3. По всім питанням пишіть в Slack в групу чи в дірект, або в Telegram . Нема хороших чи поганих питаннь, є задані і незадані.

4. Якщо в Trello берете картки з бекенду, пишіть мені для консультації.




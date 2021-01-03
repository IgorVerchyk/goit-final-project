# goit-final-project

1. Для початку роботи з фронтендом перейдіть в гілку dev, де вже створюйте свою гілку, аналогічно для бекенду перейдіть в гілку back.

2.Зміни в master.
- На [heroky](dashboard.heroku.com) залито сервер, функцональні наступні раути:
- Додавання проекту post: https://project-manager-goit20.herokuapp.com/projects/c в body масив (id,title, deckr) - (id користувача, заголовок проекту, опис). 
- Отримання проекту з серверу get https://project-manager-goit20.herokuapp.com/projects/ :id.
- Видалення проекту delete https://project-manager-goit20.herokuapp.com/ :id,:projectId,:repId де id- id користувача, projectId- id проекту в таблиці користувача, repId- id  в колекції поектів.
- Додавання спрінта post https://project-manager-goit20.herokuapp.com/ sprints/:projectId де projectId- id проекту, в body запроса {"title":"заголовок спринта","startDate":"дата початку","endDate":"дата завершення"}.
- Видалення спрінта delete https://project-manager-goit20.herokuapp.com/ sprints/:projectId,:sprintId -idшніки відповідно проекту і спрінта.
- Додавання таска post https://project-manager-goit20.herokuapp.com/ tasks/:projectId,:sprintId - idшніки відповідно проекту і спрінта, в body {"descr":"інфо таска","planTime":"запланований час в год."}.
- Видалення таска delete https://project-manager-goit20.herokuapp.com/ tasks/:projectId,:sprintId,:taskId -idшніки відповідно проекту і спрінта і таска.
 - Всі pull request прийнято, шліфувати фронт буду після того, як буде функціональний бекенд для тестування.

3. По всім питанням пишіть в Slack в групу чи в дірект, або в Telegram . Нема хороших чи поганих питаннь, є задані і незадані.

4. Якщо в Trello берете картки з бекенду, пишіть мені для консультації.




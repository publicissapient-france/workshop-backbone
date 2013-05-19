workshop-backbone
=================

Bootstrap and log table
-----------------------
- open index.html, its fills with static content
- open http://-ourserver-:3000/logs, here are the true datas
- add app.js and require.js to index.html as script
- create a LogsView and load it in app.js
- create a LogCollection and fetch it in LogsView
- careful, the server doesn't returns an array, so LogCollection.parse method have to be implemented
- listenTo LogCollection sync event and check it's actually triggered
- bind #content to LogsView.el in app.js
- cut/paste the table in index.html#content into a templates/table.html
- import this template in LogsView with text! plugin
- add this template to LogsView.el in its render method
- add <%= mustash %> to the template markup and inject collection.toJSON into it
- format every data in the template file with <% any js code you need %>

Filter by status and method
---------------------------
- create a LogsFilterView and extract the filter.tmpl from index.html
- listen to click events on statuses & methods ul
- create a LogsAppModel with two collections, statuses and methods, to store the filters states
- give this model to both views
- hydrate this model when LogsView is rendered for the first time
- listenTo this model in LogsFilterView and <%= mustash %> the template with the unique values
- listenTo this model collections in LogsView and filter the LogCollection following the selected filters

Search
------
- create a LogsSearchView
- give it the LogsAppModel instance shared among the app
- listen to keyup event on the input
- set the search attribute of the model
- change the LogsView filter with this value
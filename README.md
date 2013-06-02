# workshop-backbone

## prerequisite

You'll need node.js for this workshop. If you don't have it already, you'll have to install it.
- on Ubuntu or other apt, node is available on universes repositories.
- on Window or MacOS, use the installer : http://nodejs.org/download/

## Step by step tutorial


### First Step : Bootstraping application and displaying the log table

0. launch the server (node server.js) and open http://localhost:4000. Ensure the page is displayed correctly.

1. Open your favorite IDE then open index.html, which is filled with static content.

2. add require.js and app.js to index.html as script

3. log table : show static data in Backbone View
    - cut/paste the table in index.html#content into the templates/table.html
    - create LogsView in app.js :
    - bind #content to LogsView.el in app.js : 2 methods (at construct view or after)
    - implement LogsView "render" method : add the html template in the "el" element
    - call "render" in initialize
    - test in navigator

4. log Table : show real data
    - define data url in LogsCollection
    - in the initialize LogView method:
        - create a LogCollection as view collection attribute,
        - listenTo collection sync event for rendering view, (instead of calling explicitly render !)
        - fetch collection
    - Modify template : add <%= mustash %> to the template markup
    - format every data in the template file with <% any js code you need %>
    - LogsView render method : inject collection.toJSON into template
    - careful, json data from server doesn't match exactly the columns expected : you have to implement the parse method of the model of LogCollection


### Step two : Displaying search filter and using it

- create a LogsSearchView
- give it the LogsAppModel instance shared among the app
- listen to keyup event on the input
- set the search attribute of the model
- change the LogsView filter with this value


### Step three : Displaying log filter (by status and method) and using it

- create a LogsFilterView and extract the filter.tmpl from index.html
- listen to click events on statuses & methods ul
- create a LogsAppModel with two collections, statuses and methods, to store the filters states
- give this model to both views
- hydrate this model when LogsView is rendered for the first time
- listenTo this model in LogsFilterView and <%= mustash %> the template with the unique values
- listenTo this model collections in LogsView and filter the LogCollection following the selected filters

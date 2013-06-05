# Xebia's "mois du js" Backbone workshop

## Prerequisites

You'll need node.js for this workshop. If you don't have it already, you'll have to install it.
- on Ubuntu or other apt, node is available on universes repositories.
- on Window or MacOS, use the installer : http://nodejs.org/download/

## Step by step tutorial

### Bootstraping

1. go to the projet folder and type "npm install"

2. launch the server ("node server.js") and open http://localhost:4000.

3. Ensure the page is displayed correctly.

4. Open your favorite IDE then open index.html, which is filled with static content. The main objective of this workshop
will be to dynamise this content using Backbone and the data delivered by the server.

### First Step : Bootstraping application and displaying the log table

In this first step, we gonna use a Backbone View (LogsView) to display the static data previously contained in index.html, then we gonna load the real data from the server and display it instead. 


1. #### Displaying static data in Backbone View
    - Cut/paste the table in index.html#content into the templates/table.html
    - Instantiate the LogView in app.js
    - Bind #content to LogsView.el in app.js : 2 methods (at construct view or after)
    - Implement LogsView "render" method : inject the html template in the "el" element. (Feel free to use your prefered template engine : underscore tmpl or Handlebars. Both are included in global scope.)
    - Call "render" in initialize
    - Test in navigator

2. #### Using real data
    - Define data url in LogsCollection
    - In the initialize method of LogView :
        - create a LogCollection as view collection attribute
        - listenTo collection sync event for rendering view, (instead of calling explicitly render !)
        - fetch the collection
    - LogsView render method : inject collection.toJSON into template
    - Dynamise and adapt template : (using <%= underscore %> or {{#handlebars}} to the template markup)
    - Format every data in the template file with <% any js code you need %>
   
    - !!! careful, json data from server doesn't match exactly the columns expected : you have to implement the parse method of the model (Log) of LogCollection


### Step two : Displaying search filter and using it

1. ### Displaying static search element in Backbone View
    - We gonna use LogsSearchView.
    - Cut/past the header content in index.html into templates/search.tmpl
    - Instantiate the LogsSearchView in app.js
    - Implement the LogsSearchView "render" method (like step 1) and call it.

2. ### Make it works for real
    - Instantiate LogsFilterModel and share between views, we'll use it to share informations among the app.
    - Listen to keyup event on the input
    - Bind the event to new method that will set its model with new input field value.
    - Add listener in LogsView in order to re-render filtered table on LogsFilterModel change.
    - Create method into LogsCollection to filter logs by text search (see Collection filter method http://backbonejs.org/#Collection-Underscore-Methods).
    - Add method into LogsView to re-render new filtered collection.


### Step three : Displaying log filter (by status and method) and using it

1. ### Displaying static filter element in Backbone View
    - We gonna use LogsFilterView
    _ Cut/past the #navigation content in index.html into templates/filter.tmpl
    - Instantiate the LogsFilterView in app.js (do not forget to define LogsFilterModel too).
    - Emplement the LogsFilterView "render" method (like step 1 and 2) and call it.

2. ### Make it works for real !
    - Subscribe to status and method checkbox click. It will filter log list.
    - add methods to update filterModel with new filter's values.
    - Improve the re-render filter method in LogsView to catch new filters (statuses and methods).

- create a LogsFilterView and extract the filter.tmpl from index.html
- listen to click events on statuses & methods ul
- create a LogsAppModel with two collections, statuses and methods, to store the filters states
- give this model to both views
- hydrate this model when LogsView is rendered for the first time
- listenTo this model in LogsFilterView and <%= mustash %> the template with the unique values
- listenTo this model collections in LogsView and filter the LogCollection following the selected filters

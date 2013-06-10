# Xebia's "mois du js" Backbone workshop

## Prerequisites

You'll need node.js for this workshop. If you don't have it already, you'll have to install it.
- on Ubuntu or other apt, node is available on universes repositories.
- on Window or MacOS, use the installer: http://nodejs.org/download/

## Step by step tutorial

### Bootstraping

1. Go to the projet folder and type "npm install".

2. Launch the server ("node server.js") and open [localhost:4000](http://localhost:4000).

3. Ensure the page is displayed correctly.

4. Open your favorite IDE then open index.html, which is filled with static content. The main objective of this workshop will be to make this content dynamic using Backbone and the data delivered by the server.

5. Open [Backbone documentation](http://backbonejs.org/) and put your hands on!


### First Step: Bootstraping application and displaying the log table

In this first step, we gonna use a Backbone View (LogsView) to display the static data previously contained in index.html, then we gonna load the real data from the server and display it instead. 


1. #### Displaying static data in Backbone View
    - Cut/paste the table in index.html#content into the templates/table.html
    - Instantiate the LogView in app.js
    - Bind #content to LogsView.el in app.js: 2 methods (at construct view or after)
    - Implement LogsView "render" method: inject the html template in the "el" element. (Feel free to use your favorite template engine: [underscore](http://underscorejs.org/#template) or [Handlebars](http://handlebarsjs.com/expressions.html). Both are included in global scope.)
    - Call "render" in initialize
    - Test in navigator

2. #### Using real data
    - Define data url in LogsCollection
    - In the initialize method of LogView:
        - create a LogCollection as view collection attribute
        - listenTo collection sync event for rendering view, (instead of calling explicitly render!)
        - fetch the collection
    - LogsView render method: inject collection.toJSON into template
    - Make template dynamic: (using <%= underscore %> or {{#handlebars}} to the template markup)
    - Format every data in the template file with <% any js code you need %>
    -!!! careful, json data from server doesn't match exactly the columns expected: you have to implement the parse method of the model (Log) of LogCollection


### Step 2: Displaying search filter and using it

1. ### Displaying static search element in Backbone View
    - We gonna use SearchView.
    - Cut/past the header content in index.html into templates/search.tmpl
    - Instantiate the SearchView in app.js
    - Implement the SearchView "render" method (like step 1) and call it.

2. ### Make it works for real
    - Instantiate FilterModel and share it between views, we'll use it to share information among the app
    - Listen and bind the keyup event to a new method that will set its model with the new input field value
    - Add listener in LogsView in order to re-render filtered table on FilterModel change
    - Create a method into LogsCollection to filter models by a search term (@see [Backbone.Collection#filter method](http://backbonejs.org/#Collection-Underscore-Methods)) (you can return a new collection with the filtered models)
    - LogsView's "render" method should now only render the filtered logs :
        - You should add a "filterCollection" method into LogsView that call the collection method and be called by render


### Step 3: Displaying log filter (by status and method) and using it

1. ### Displaying static filter element in Backbone View
    - We gonna use LeftPanelView
    - Cut/past the #navigation content in index.html into templates/filter.tmpl
    - Instantiate the LeftPanelView in app.js (do not forget to define FilterModel too)
    - Implement the LeftPanelView "render" method (like step 1 and 2) and call it

2. ### Make it works for real!
    - Subscribe to status and method checkboxes click: it will filter logs list
    - Add methods to update filterModel with the new filter's values
    - Improve the filter method in LogsView to match new filters (statuses and methods)


### Step 4: Show a log's details when clicking on table line

In this final step, we gonna show details panel on the right, with selected log data. Each table line needs to know the log model it displays, to trigger an appropriate event.

1. #### Displaying static data in Backbone View
    - Cut/paste the #detail content in index.html into the templates/details.tmpl
    - Create a DetailsView and instanciate it in app.js
    - Use the template as dynamic html (look at previous views construction)
    - Implement render method, and insert the template
    - Call "render" in initialize
    - Test in navigator

2. #### Trigger an event and share the log that is clicked in table
    - Isolate logs table lines creating a new view: LogLineView
        - as the DOM element we need is a tr (not a div), do not forget to specify the tagName attribute of the view (@see [view extension with a tagName](http://backbonejs.org/#View-extend))
    - Cut/past the each loop content from templates/table.tmpl to templates/table-line.tmpl
    - Make the LogLineView render the template passing it its model
    - Delegate rendering from LogsView to LogLineView:
        - modify LogsView render method, in order to loop on the collection
        - in this loop, append each time a new LogLineView that is responsible for its log as a model
        - do not forget to declare the dependency to LogLineView with requirejs
    - In LogLineView, bind the click event:
        - to trigger a Backbone event (@see [Backbone.trigger](http://backbonejs.org/#Events-trigger)), for example "details:show", with the log as an argument
        - to add the css class "selected" on the view el

3. #### Listen to this event and refresh details panel
    - In DetailsView, subscribe to the "details:show" event with listenTo
    - Call a method (that takes a parameter) that renders the template with the log model
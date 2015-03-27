angular.module('myTemplates', ['public/templates/About.html', 'public/templates/AddTalk.html', 'public/templates/Directives.html', 'public/templates/EditTalk.html', 'public/templates/TalkList.html', 'public/templates/greetingTempl.html']);

angular.module("public/templates/About.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/templates/About.html",
    "<div id=\"cont\" class=\"row\">\n" +
    "    <span>{{aboutText}}</span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("public/templates/AddTalk.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/templates/AddTalk.html",
    "<div class=\"row\">\n" +
    "    <form name=\"newTalkForm\" novalidate=\"\">\n" +
    "        <table style=\"width: 50%\">\n" +
    "            <tr>\n" +
    "                <td>Title: </td>\n" +
    "                <td>\n" +
    "                    <input name=\"title\" type=\"text\" required data-ng-model=\"newTalk.title\" unique-tech-talk />\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Speaker: </td>\n" +
    "                <td>\n" +
    "                    <input name=\"speaker\" type=\"text\" required data-ng-model=\"newTalk.speaker\" />\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Category: </td>\n" +
    "                <td>\n" +
    "                    <select name=\"category\" data-ng-model=\"newTalk.category\" data-ng-options=\"c for c in categories\"></select>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Duration: </td>\n" +
    "                <td>\n" +
    "                    <input name=\"duration\" type=\"text\" data-ng-model=\"newTalk.duration\" required data-ng-pattern=\"integerval\" />\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Level: </td>\n" +
    "                <td>\n" +
    "                    <select name=\"level\" data-ng-model=\"newTalk.level\" data-ng-options=\"l for l in levels\"></select>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Rating: </td>\n" +
    "                <td>\n" +
    "                    <select name=\"rating\" data-ng-model=\"newTalk.rating\" data-ng-options=\"r for r in ratings\"></select>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"addTalk()\" data-ng-disabled=\"newTalkForm.$invalid\">Add</button></td>\n" +
    "                <td>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-ng-click=\"cancelAddingTalk()\">Cancel</button></td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "        <br />\n" +
    "        <div data-ng-show=\"newTalkForm.title.$dirty && newTalkForm.title.$invalid\">\n" +
    "            <span data-ng-show=\"newTalkForm.title.$error.required\">Title cannot be left blank</span>\n" +
    "            <span data-ng-show=\"newTalkForm.title.$error.uniqueTechTalk\">This title is already added</span>\n" +
    "        </div>\n" +
    "        <div data-ng-show=\"newTalkForm.duration.$dirty && newTalkForm.duration.$invalid\">\n" +
    "            <span data-ng-show=\"newTalkForm.duration.$error.required\">Duration cannot be left blank</span> \n" +
    "            <span data-ng-show=\"newTalkForm.duration.$error.pattern\">Duration should be an integer</span>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("public/templates/Directives.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/templates/Directives.html",
    "<div class=\"row\">\n" +
    "    <div data-accordion=\"\" data-close-others=\"true\">\n" +
    "        <div data-accordion-group=\"\" data-heading=\"A Basic Directive\">\n" +
    "            <div data-greet-person=\"text\"></div>\n" +
    "            <br />\n" +
    "\n" +
    "            <input type=\"text\" data-ng-model=\"text\" />\n" +
    "\n" +
    "            <!--<script type=\"text/ng-template\" id=\"greetingTempl.html\">\n" +
    "                        Hello, <span></span>\n" +
    "            </script>-->\n" +
    "        </div>\n" +
    "\n" +
    "        <div data-accordion-group=\"\" data-heading=\"Form validation\">\n" +
    "            <form novalidate=\"\" name=\"itemForm\">\n" +
    "                <table>\n" +
    "                    <tr>\n" +
    "                        <td>Name: </td>\n" +
    "                        <td>\n" +
    "                            <input name=\"name\" type=\"text\" data-ng-model=\"item.Name\" required=\"required\" data-ng-pattern=\"name\" /></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Price: </td>\n" +
    "                        <td>\n" +
    "                            <input name=\"price\" type=\"text\" data-ng-model=\"item.Price\" required=\"required\" data-valid-price=\"\" /></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Quantity: </td>\n" +
    "                        <td>\n" +
    "                            <input name=\"quantity\" type=\"number\" data-ng-model=\"item.Quantity\" min=\"1\" max=\"90\" data-ng-pattern=\"integerval\" required=\"required\" /></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td colspan=\"2\">\n" +
    "                            <input type=\"button\" value=\"Add\" data-ng-click=\"addItem(item)\" data-ng-disabled=\"itemForm.$invalid\" />\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </form>\n" +
    "            <div data-ng-show=\"itemForm.name.$dirty && itemForm.name.$invalid\">\n" +
    "                <span data-ng-show=\"itemForm.name.$error.required\">Name cannot be left blank</span>\n" +
    "                <span data-ng-show=\"itemForm.name.$error.pattern\">Name cannot contain numbers or special characters</span>\n" +
    "            </div>\n" +
    "            <div data-ng-show=\"itemForm.price.$dirty && itemForm.price.$invalid\">\n" +
    "                <span data-ng-show=\"itemForm.price.$error.required\">Price cannot be blank</span>\n" +
    "                <span data-ng-show=\"itemForm.price.$error.validPrice\">Price should be a number between 50 and 5000 with maximum 2 digits after decimal point</span>\n" +
    "            </div>\n" +
    "            <div data-ng-show=\"itemForm.quantity.$dirty && itemForm.quantity.$invalid\">\n" +
    "                <span data-ng-show=\"itemForm.quantity.$error.required\">Quantity cannot be blank</span>\n" +
    "                <span data-ng-show=\"itemForm.quantity.$error.pattern || itemForm.quantity.$error.min || itemForm.quantity.$error.max\">Quantity should be an integer between 1 and 90</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div data-accordion-group=\"\">\n" +
    "            <div data-accordion-heading=\"\">\n" +
    "                jQuery UI Calendar <i class=\"icon-check\"></i>\n" +
    "            </div>\n" +
    "            <input type=\"text\" data-date-picker=\"\" data-ng-model=\"date\" />\n" +
    "            <br />\n" +
    "            <span>{{date}}</span>\n" +
    "            <br />\n" +
    "            <span>{{someVal}}</span>\n" +
    "            <input type=\"button\" value=\"Increment Value\" data-ng-click=\"increment()\" />\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("public/templates/EditTalk.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/templates/EditTalk.html",
    "<div class=\"row\">\n" +
    "    <form name=\"newTalkForm\" novalidate=\"\">\n" +
    "        <table style=\"width: 50%\">\n" +
    "            <tr>\n" +
    "                <td>Title: </td>\n" +
    "                <td>\n" +
    "                    <!--<input name=\"title\" type=\"text\" data-ng-model=\"talk.title\" />-->\n" +
    "                    <span>{{talk.title}}</span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Speaker: </td>\n" +
    "                <td>\n" +
    "                    <input name=\"speaker\" type=\"text\" data-ng-model=\"talk.speaker\" />\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Category: </td>\n" +
    "                <td>\n" +
    "                    <select name=\"category\" data-ng-model=\"talk.category\" data-ng-options=\"c for c in categories\"></select>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Duration: </td>\n" +
    "                <td>\n" +
    "                    <input name=\"duration\" type=\"text\" data-ng-model=\"talk.duration\" />\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Level: </td>\n" +
    "                <td>\n" +
    "                    <select name=\"level\" data-ng-options=\"l for l in levels\" data-ng-model=\"talk.level\" ></select>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Rating: </td>\n" +
    "                <td>\n" +
    "                    <select name=\"rating\" data-ng-options=\"r for r in ratings\" data-ng-model=\"talk.rating\"></select>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"editTalk()\">Edit</button></td>\n" +
    "                <td>\n" +
    "                    <button type=\"button\" class=\"btn btn-danger\" data-ng-click=\"deleteTalk()\">Delete</button></td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("public/templates/TalkList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/templates/TalkList.html",
    "<div class=\"row\">\n" +
    "    Search by any:\n" +
    "    <input type=\"text\" name=\"search\" data-ng-model=\"searchTerm.$\" />\n" +
    "    &nbsp;\n" +
    "    &nbsp;\n" +
    "    Search by title:\n" +
    "    <input type=\"text\" name=\"searchName\" data-ng-model=\"searchTerm.title\" />\n" +
    "    &nbsp;\n" +
    "    &nbsp;\n" +
    "    Sort By: \n" +
    "    <select data-ng-model=\"sortField\">\n" +
    "        <option value=\"title\">Title</option>\n" +
    "        <option value=\"duration\">Duration</option>\n" +
    "        <option value=\"level\">Level</option>\n" +
    "    </select>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <section class=\"view-list\">\n" +
    "        <article data-ng-repeat=\"talk in talks | filter:searchTerm | orderBy:sortField\" class=\"repeat-animation article-left-content\">\n" +
    "            <div>\n" +
    "                <img class=\"img-polaroid\" src=\"styles/Images/Web.png\" />\n" +
    "                <span>{{talk.title}}</span> by <em>{{talk.speaker}}</em>\n" +
    "                <br />\n" +
    "                <small>{{talk.category}}</small>\n" +
    "                <br />\n" +
    "                <small class=\"left\">Level: {{talk.level}}</small>\n" +
    "                <small class=\"right\">Duration: {{talk.duration | duration}}</small>\n" +
    "                <small class=\"right\">Rated: {{talk.rating}}</small>\n" +
    "                <br />\n" +
    "                <a href=\"#/edit/{{talk.title}}\" class=\"btn-link\">Edit</a>\n" +
    "            </div>\n" +
    "        </article>\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "<div data-busy-indicator=\"\" data-ng-hide=\"isListLoaded\"></div>");
}]);

angular.module("public/templates/greetingTempl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/templates/greetingTempl.html",
    "Hello, <span></span>");
}]);

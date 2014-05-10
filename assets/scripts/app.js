(function () {
    'use strict';

    /**
     * @desc The form used to create to-dos
     * @type {HTMLElement}
     */
    var form = document.getElementById('toDoForm');

    /**
     * @desc The unordered list where to-dos will be shown.
     * @type {HTMLElement}
     */
    var ul = document.getElementById('toDoList');

    /**
     * @desc New ToDoList
     * @type {ToDoList}
     */
    var toDoList = new ToDoList(ul, form);

    toDoList.loadLocalStore();

})();
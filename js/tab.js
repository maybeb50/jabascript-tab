/* Tab Menu */
var tabList = document.querySelectorAll('.tab .tab-list');

Array.prototype.forEach.call(tabList, function(list) {
    list.children[0].addEventListener('click', function(event) {
        event.preventDefault();

        var tabContent = document.querySelectorAll('.tab-content');
        var tabNum = this.parentElement.getAttribute('data-num');


        Array.prototype.forEach.call(tabContent, function(cont, i) {
            cont.style.display = 'none';
            tabList[i].className = 'tab-list'
        });

        tabContent[tabNum].style.display = 'block';

        if(list.className.indexOf('tab-active') == -1) {
            list.className = 'tab-list tab-active'
        } 

    });
});
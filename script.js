(function () {
    //list items
    let listItems = [{ "value": "1", "color": "#6F98A8" }, { "value": "2", "color": "#2B8EAD" },
    { "value": "3", "color": "#000000" }, { "value": "4", "color": "#2B8EAD" },
    { "value": "5", "color": "#000000" }, { "value": "6", "color": "#BFBFBF" },
    { "value": "7", "color": "#BFBFBF" }, { "value": "8", "color": "#6F98A8" },
    { "value": "9", "color": "#000000" }];

    function createUpdateView(listItems) {
        //resetting view.
        document.getElementsByClassName('shuffle-sort-section')[0].innerHTML = '';

        //creating view
        listItems.forEach((item) => {
            // creating box element
            let boxDiv = document.createElement('div');

            //creating text node element inside box element
            var textnode = document.createTextNode(item.value);
            boxDiv.appendChild(textnode);

            //setting css for box element
            boxDiv.className = 'box';
            boxDiv.style.backgroundColor = item.color;
            boxDiv.style.color = '#FFFFFF';
            boxDiv.style.borderLeft = '10px solid';
            boxDiv.style.borderLeftColor = item.color;

            //appending box element 
            document.getElementsByClassName('shuffle-sort-section')[0].append(boxDiv);
        })

    }

    //shuffling the list items
    function shuffle() {
        let items = JSON.parse((JSON.stringify(listItems)));
        for (let i = items.length - 1; i > 0; i--) {

            // Generate random number 
            let j = Math.floor(Math.random() * (i + 1));

            //swapping 
            let temp = items[i];
            items[i] = items[j];
            items[j] = temp;
        }

        createUpdateView(items);

    }

    //sorting the list items
    function sort() {
        let items = JSON.parse((JSON.stringify(listItems)));
        let sortedItems = items.sort((a, b) => parseInt(a.value) - parseInt(b.value))
        createUpdateView(items);
    }

    //click handlers for shuffling and sorting
    var shuffleBtn = document.getElementById("shuffleBtn");
    shuffleBtn.addEventListener("click", function () {
        shuffle();
    });

    var sortBtn = document.getElementById("sortBtn");
    sortBtn.addEventListener("click", function () {
        sort();
    });

    //initalizing view
    createUpdateView(listItems);
})();



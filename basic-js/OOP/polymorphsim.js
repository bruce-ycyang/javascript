function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused;')
}


function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItme = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
        <select>${this.items.map(item =>
            `<option>${item}</option>`).join('')}
        </select>`;
    }
}


//compare two inhritance methods  
//this one not only get the object method 'click' but prototype method 'focus'
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
//this one would get a empty object and a prototype method 'focus'
// HtmeSelectlement.prototype = Object.create(HtmlElement.prototype)

function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src="${this.src}" />`; //pass argument x using ${x}
    }
}

HtmlImageElement.prototype = new HtmlImageElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


var hello = new Vue({
    el: '#hello',
    data: {
        msg: 'Hello Vue',
        pessoas: [
            {name: "Maria"},
            {name: "Pedro"},
            {name: "Gustavo"},
            {name: "Denis"}
        ],
        newElement: '',
        elements: [],
        objectA: {
            'font-size': '30px',
        },
        objectB: {
            color:'red'
        },
        myListForm: [],
        myForm: {
            name: '',
            email: ''
        }
    },
    methods: {
        addElement: function(){
           var titulo = this.newElement.trim()
           if(titulo){
               this.elements.push({titulo: titulo})
               this.newElement = ''
           }
        },
        removeElement: function(e, index){
            e.preventDefault();
            this.elements.splice(index, 1)
        },
        myClick: function(){
            alert('Click')
        },
        myKeyUp: function(){
            alert('keyup')
        },
        addForm: function(){
            this.myListForm.push({name: this.myForm.name ,email: this.myForm.email});
            this.myForm.name = ''
            this.myForm.email = ''
        }
    }
})
class Comment{
    constructor(text) {
        this.text = text;
        this.decorat = 0
    }

    nowFood(){
        this.decorat -= 1
    }

    static mergeComments(first, second){
        return ${first} ${second}
    }
}

Comment.mergeComments('First comm', 'Second comm');
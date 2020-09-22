
//module.require(Stack)

/* Write your class below */
class MinStack {
    constructor() {
        this.stack = new Stack(),
        this.minValue = new Stack()
    }

    print = () => {
        this.stack.print()
        
    }

    push = item => {
        if(this.minValue.peek() > item || this.minValue.isEmpty()){
            this.minValue.push(item)
        }

        this.stack.push(item)
    }

    pop = () => {
        if(this.stack.isEmpty()){
            return null
        } else {
            if(this.stack.pop() === this.minValue.peek()){
                this.minValue.pop()
            }
        } 
    }

    peek = () => {
        return this.stack.peek()
    }

    isEmpty = () => {
        this.stack.isEmpty()
    }

    getMin = () => {
        if(!this.minValue.isEmpty()){
            return this.minValue.peek()
        } else {
            return null
        }
    }
}

//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
ms.print()
console.log(ms.getMin())    //12
ms.pop()
ms.print()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19

/* Do not remove the exports below */
//module.exports = MinStack
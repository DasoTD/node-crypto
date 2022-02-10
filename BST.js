class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
     constructor(){
         this.root = null;
     }

//      find(value){
//          if(this.root === null) return false;
//          var current = this.root;
//          found = false;
//          while(current && !found){
//              if(value < current.value){
//                  current = current.left;
//              } else if(current > current.value){
//                  current = current.right;
//              } else {
//                  found = true;
//              }
//          }
//          if(!found) return undefined;
//          return current;
//      }

contains(value){
         if(this.root === null) return false;
         var current = this.root;
         found = false;
         while(current && !found){
             if(value < current.value){
                 current = current.left;
             } else if(current > current.value){
                 current = current.right;
             } else {
                 return true;
                 //found = true;
             }
         }
         //if(!found) return undefined;
         return false;
     }
}
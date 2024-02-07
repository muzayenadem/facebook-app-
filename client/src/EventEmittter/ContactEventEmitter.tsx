const  ContactEventEmitter={
    listeners:{},
    subscriber:function(eventName,callback){
        if(!this.listeners[eventName]){
            this.listeners[eventName] =[];
        }
        this.listeners[eventName].push(callback)
    },
    emit:function(eventName,data){
        if(this.listeners[eventName]){
            this.listeners[eventName].forEach((callback)=>callback(data));
        }
    },
};
export default ContactEventEmitter
export class TabClass {
    public header;
    public content;
    public active;
    
    constructor(options : any = {}){
        this.header = options.header || 'Заголовок по умолчанию';
            this.content = options.content || 'Содержимое по умолчанию';
            this.active = options.active || false  ;
    }
    
}

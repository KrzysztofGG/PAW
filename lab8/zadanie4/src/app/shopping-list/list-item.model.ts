export class ListItem {
    isImportant: boolean;
    itemContent: string;
    isChecked: boolean;

    constructor(isImportant: boolean, itemContent: string, isChecked: boolean){
        this.isImportant = isImportant;
        this.itemContent = itemContent;
        this.isChecked = isChecked;
    }
}

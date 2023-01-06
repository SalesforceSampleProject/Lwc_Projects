import { LightningElement } from 'lwc';

export default class SearchComponent extends LightningElement {
     queryTerm;

    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            this.queryTerm = evt.target.value;
        }
    }
}
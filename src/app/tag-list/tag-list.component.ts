import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent {

  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    this.clearInput(topic);
  }

  clearInput(input: HTMLInputElement){
    input.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray
  }

}

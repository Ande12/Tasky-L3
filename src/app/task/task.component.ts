import { Component } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss','./mobile.component.scss']
})
export class TaskComponent {

    // Popups for add and edit
    addPop = false
    Popup = false
  
    // for the forms
  taskForm: FormGroup

  taskId = new Date().getTime()
  constructor( public firestore: Firestore, private formGroup: FormBuilder){

    this.taskForm = this.formGroup.group(
      {
        taskName: '',
        status: '',
        level: '',
        difficulty: '',
        startDate: '',
        dueDate: '',
        id: this.taskId,
      })
    }

    // For the ststus, level and difficulty
    status: string[] = [
      'pending',
      'success',
      'paused',
      'not started'
  
    ];
    difficulty: string[] = [
      'very hard',
      'medium',
      'easy',
      'not determined'
  
    ];
    level: string[] = [
      'completed',
      'not completed',
      'in progress'
  
    ]

       // For the View
       public data: any = [ ];
    
       // when you add to firestore
     addData(value: any) {
       // this.storage.addTask(this.task);
       const addTasks = collection(this.firestore, 'ITask');
       addDoc(addTasks, value)
       // helps get the data when added
       getDocs(addTasks)
       .then((respond)=> {
         this.data = [...respond.docs.map((item) =>{
             return{ ...item.data(), id: item.id}})]
        alert('Added Task Successfully')
       this.addPop = !this.addPop
       //  window.location.reload()
       })
       .catch((error) => {
        alert('Opps an error occured => ' + error)
       })
      }

      popUp(){
        this.addPop = !this.addPop
        
       }
       pop(){
        this.Popup = !this.Popup
       }

         // getting data
  getData(){
    const addData = collection(this.firestore, 'ITask');
    getDocs(addData)
    .then((respond) => {
      // alert('Data Gotten')
      this.data = 
       [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
       console.log(this.data);
    })    
  }
  // Helps the view to stay on the page
  ngOnInit(): void {
    const addData = collection(this.firestore, 'ITask');
    getDocs(addData)
    .then((respond) => {
      // alert('Data Gotten')
      this.data = 
       [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
       console.log(this.data);
    }) 
  }
  deleteTask(id: string){
    const dataDelete = doc(this.firestore, 'ITask', id);
    deleteDoc(dataDelete) 
     .then(()=>{
       window.location.reload()
      alert('Task Deleted')
      this.getData
     })
     .catch((err)=>{
       alert(err)
     })
  }
  // edit
  editTask(id: string){
    this.Popup = !this.Popup
    // get Product based n its id
   let currentTask =  this.data.find((task: { id: any; }) => {
     return task.id ===id
    })
    console.log(currentTask);
    // we use the setValue method to set the value for the formControls, we pass an opject an
    // in the object we specify the values  assigned to the inputs
//  this.form?.setValue({
//       taskName: 'bread',
//       status: '',
//       level: '',
//       difficulty: '',
//       startDate: '',
//       dueDate: ''
//     });
   
  }
}

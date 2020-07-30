class Student{
    static numberOfStudents = undefined;
    constructor(studentData,id){
        

        this.studentData = studentData

        
        this.fullName = this.studentData.fullName
        this.age = this.studentData.age
        this.schoolYear = this.studentData.schoolYear
        this.address = this.studentData.address
        this.future = this.studentData.future
        this.anythingElse = this.studentData.anythingElse
        this.socialMedia = this.studentData.socialMedia
        this.quote = this.studentData.quote
        this.images = this.studentData.images
        this.cartoonImage = `url(${this.studentData.cartoonImage})` 
        this.friendNotes = this.studentData.friendNotes
        this.theam = this.studentData.theam
        this.bgImage = `url(${this.studentData.bgImage})`
        this.studentId = id
        this.next = (this.studentId == Student.studNumber - 1 ) ? this.studentId : this.studentId + 1// consider the case at the end and at the begning
        this.previous = (this.studentId == 0 ) ? this.studentId : this.studentId - 1;
    }

    load(target){

        //this function formats the traget block
        //passed to it and sets them with the new values

        target.style.backgroundImage = this.bgImage//this works perfectly nice  
        let colorTintBlock = target.children[0]

        //set the theam color
        //This may change depending on the format of the theam color
        colorTintBlock.style.backgroundImage = `linear-gradient(to bottom, white,${this.theam}`;


        let album = colorTintBlock.children[0].children[0].children;
        for(let i = 0; i<album.length;i++)
        {
           
            album[i].children[0].children[0].src = this.images[i][0];
            album[i].children[0].children[0].alt = this.images[i][1][0];
            album[i].children[1].children[0].innerText = this.images[i][1][1];           
        }

        colorTintBlock.children[0].children[1].children[1].innerText = this.quote;
    
        colorTintBlock.querySelector("blockquote").style.color = getContrast(this.theam); 
        colorTintBlock.querySelector(".quote").querySelector("span").style.color= getContrast(this.theam); 
        colorTintBlock.children[1].children[0].style.backgroundImage = this.cartoonImage;//may be the url isnt neccessary just figure it out later

        let table = colorTintBlock.querySelector("#moreInfo").querySelector("table");
        table.innerHTML =  `                                
            <tbody>
                <tr>
                    <td><label for="name">Name:</label></td>
                        
                    <td class="values"><input disabled="" id="name" type="text" value="${this.fullName}"></td>
                </tr>
                <tr>
                    <td><label for="age">Age:</label></td>
                        
                    <td class="values"> <input disabled="" id="age" type="text" value="${this.age}"></td>
                </tr>
                <tr>
                    <td><label for="schoolYear">School Year:</label></td>
                    <td class="values"><input disabled="" id="schoolYear" type="text" value="${this.schoolYear}"></td>
                </tr>
                <tr>
                    <td><label for="permanentAdress">Permanent Adress:</label></td>
                    <td class="values"><textarea disabled="" id="permanentAdress">
                            ${this.address}
                        </textarea>
                    </td>
                </tr>
                <tr>
                    <td><label for="future">Future:</label></td>
                    <td class="values"><textarea disabled="" id="future">
                           ${ this.future}
                        </textarea>
                    </td>
                </tr>
                <tr>
                    <td><label for="anythingElse">Anything Else:</label></td>
                    <td class="values">
                        <textarea disabled="" id="anythingElse"> 
                           ${this.anythingElse}
            
                        </textarea>
                    </td>
                </tr>
                <tr>
                    <td><label for="availableAt">Availaible at:</label></td>
                    <td class="values">
                        <textarea disabled="" id="anythingElse">                     
                           ${ this.socialMedia }
            
                        </textarea>
                    </td>
                </tr>
            </tbody>
              
            
        `   


        //remove thos starting annoying white space in each text area
        let allTextArea = target.querySelectorAll('textarea')
        
        for(let i=0;i<allTextArea.length;i++ ){
           
            allTextArea[i].value = allTextArea[i].value.trim();
            // console.log("treamed")
        }
        
  
    }

    nextStud(){
        return new Student(data[this.next],this.next)
    }
    previousStud(){

        return new Student(data[this.previous],this.previous)
    }
    firstStu(){
        return new Student(data[0],0)
    }
    lastStu(){
       
        return new Student(data[Student.studNumber - 1],Student.studNumber - 1)
    }

    set studNumber(number){
       
        numberOfStudents = number;
        
    }
    get studNumber(){
        return numberOfStudents;
    }


}
Student.studNumber = data.length;

var currentStudent = new Student(data[0],0)
currentStudent.load(document.body.querySelector("main"))

function getContrast (hexcolor){

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};
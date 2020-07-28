# first take the google form and creat the proper directories

def getFromGForm(file_name):
    # open and read the whole csv file with csv reader
    raw_file = open(file_name,encoding="utf-16")
    all_students = csv.reader(raw_file) # full_data is object of reader
    #change the above 'full_data' object to list - readable data
    all_students = list(all_students)
    all_students.remove(all_students[0])

    for student in all_students:
        # extract the datas that will be written on the text file
        # this assume the order of the questions will not be changed

        # get name of the student
        student_name = student[1]
        if student_name.endswith(' '):
            student_name = student_name[:-1]

        # get theam 
        theam = checkTheamColor(student[2]) 

        #get quote
        quote = student[4]

        # get start and leaving year
        start_year = student[6][-4:]
        leave_year = student[7][-4:]
        year = start_year + ' - ' + leave_year

        # get adress 
        adress = student[8]

        # get future plan 
        future = student[9]

        # get social media
        social_media = student[10]
        
        # get anything else 
        anything_else = student[11]

        # make directory with the student's name
        if not os.path.exists(student_name):
            os.makedirs(student_name)

        #create a new text file with the same name for all studnets
        path = student_name + "/" + "data.txt"
        data = open(path, "w")
        data.write("theam:" + str(theam) + ";")
        data.write("quote:" + quote + ";")
        data.write("year:" + year + ";")
        data.write("adress:" + adress + ";")
        data.write("future:" + future + ";")
        data.write("socialMedia:" + social_media + ";")
        data.write("anythingElse:" + anything_else)
        data.close()
getFromGForm("formData.csv")

def creatImageDisc():
    pass
def creatData():
    allStudentData = []
for eachStudent in allStudents:
    name, middleName, lastName = eachStudent.split(" ")
    studentId = name[0:3]+middleName[0:3]+lastNam[0:3]
    
    os.chdir(eachStudent)
    informations = os.listdir()
    extraData = open("data.txt","r").read().split(";")
    imgData = open("imageData.txt","r").read().split(";")
    textInformmation = {data.split(":")[0]:data.split(":")[1] for data in extraData})
    imageDeiscriptions = {data.split(":")[0]:[data.split(":")[1].split(",")[0], data.split(":")[1].split(",")[1]] for data in imgData}}
    
    individualData = {
    "fullName":eachStudent,
    "quote":textInformmation["quote"],
    "age":textInformmation["age"],
    "schoolYear":textInformmation["year"],
    "address":textInformmation["adress"],
    "future":textInformmation["future"],
    "anythingElse":textInformmation["anythingElse"],
    "socialMedia":textInformmation["socialMedia"],
    "images":[
        [eachStudent+"1.png",[imageDeiscriptions[eachStudent+"1"][0],imageDeiscriptions[eachStudent+"1"][1]]],
        [eachStudent+"2.png",[imageDeiscriptions[eachStudent+"1"][0],imageDeiscriptions[eachStudent+"1"][1]]],
        [eachStudent+"3.png",[imageDeiscriptions[eachStudent+"1"][0],imageDeiscriptions[eachStudent+"1"][1]]],
        [eachStudent+"4.png",[imageDeiscriptions[eachStudent+"1"][0],imageDeiscriptions[eachStudent+"1"][1]]],
        [eachStudent+"5.png",[imageDeiscriptions[eachStudent+"1"][0],imageDeiscriptions[eachStudent+"1"][1]]],
        [eachStudent+"6.png",[imageDeiscriptions[eachStudent+"1"][0],imageDeiscriptions[eachStudent+"1"][1]]],
    "cartoonImage":eachStudent+"cartoonImage.png",
    "friendNotes": ["",""],
    "theam":textInformmation["theam"],
    "bgImage":eachStudent+"bgImage.jpg"
    }
    allStudentData.append(individualStudent)
        
#use the jpg forma to find the background imge and givee it its poper name during procesing
    os.chdir("..")



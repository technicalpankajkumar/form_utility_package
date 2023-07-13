## ***  IMPORTANT GUIDE OF FORM UTITLITY  ***

### *** !Most Important props ***
-----------------------
#### => control  => 
        This props are define which component are you used like... 
        [ input,button,checkbox,file,radio,select,textarea and add on... ]

###  => Small example used our predefine form_utility_package component.
----------------------------------------------------------
#### code => 
#### import Field  from  './file_path'

         <Field 
        control="input" || control="button" || control="radio" || many more...
        type= "text" 
        label="First Name"  || not complesory
        name="fname" 
        outerClass={{background:"green",margin:"2px"}}
        more...
        />

        Note:- 
        only for input control type props values => 
        [ "number" ||"date-time" || "date" || "datetime-local" || "color" || "email" || "hidden" || "month" || "password" || "range" || "tel"
        "url" || "week" || "time" ]

### *** 1. Input Component Important props ***
---------------------------------  
        {control="input", name,label,type,outerClass,...rest}

#### name  => 
        This will be the name of input field and id of input field.
#### label => 
        This props not compulsory. but you can show lable before input field. 
        so you can pass this props. lable of field name.
#### type  => 
        This props accept type of input field like text,number,date, 
        date-time or many more...
#### outerClass => 
        pass outerClass props to add css in parent node of input field to 
        add like margin, padding or more...
#### other props (...rest) => 
        You can pass another props to the input field like placeholder,className, min, max , pattern or many more.. 

### *** 2. Button Component Important props ***
-----------------------------------
        { control="button",type,lable,...rest}
#### type => 
        This attribute accept three value like this  submit | button | reset.
#### lable => 
        This is name of button.
#### other props  => 
        Pass another props like className, id many more in button tag.

### *** 3. Select Componenet Important props ***
-----------------------------------

        { control="select" options, onChange, outerClass, name,label,...rest}

#### options  => 
        you pass all the options in array of object like....

###### note =>
        only one object contain seleted key, if you add selected option , it selected props by 
        default false for every options.

        [{value:"value",key:"Key",selected:true},{value:"value2",key:"Key2"},{value:"value3",key:"Key3"}]

#### control => 
        "select"
#### name => 
        This will be the id of select field and id of label.
#### onChange => 
        Pass onChange function as a props and get select field values.
#### lable => 
        This props not compulsory. but you can show lable before input field. 
         so you can pass this props. lable of field name.
#### outerClass => 
        same as other fields.
#### other props (...rest) => 
        You can pass another props to the input field like placeholder, className, min, max , pattern or many more.. 


###  *** 4. Radio Button Componenet Important props ***
-----------
        { label, options,name,outerClass, ...rest }

#### options => 
        You pass all the options in array of object like....
        [{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"other",label:"Other"}]
####  label => 
        This props not compulsory. but you can show lable before Radio field.so you can pass this props. lable of field name like Gender.
#### name =>
        This props use to set name of radio input field like Gender.
#### outerClass => 
        same as other fields.
#### other props (...rest) => 
        You can pass another props to the input field like className, min, max , pattern or many more.. 


###  *** 5. Checkbox Componenet Important props ***
-----
        { options,label,outerClass,checkLabelClass,...rest }

#### options => 
        You pass all the options in array of object like....
        [{name:"html", value:"html",label:"HTML"},{name:"other", value:"other",label:"OTHER"}]
####  label => 
        This props not compulsory. but you can show lable before Checkbox field.so you can pass this props. lable of field name like Choose languages.
#### outerClass =>
        same as other fields.
#### checkLabelClass =>
        Apply custom css in checkboxes.
#### other props (...rest) => 
        You can pass another props to the input field like className, min, max , pattern or many more.. 


###  *** 6. Textarea Componenet Important props ***
-----
        {name, label,outerClass,...rest}
#### name =>
        This is id or name of textarea element and id or label.
#### label =>
        This is label of textarea element. It is not compulsary props. If you need then pass otherwise all is ok.
#### outerClass =>
        same as other fields.
#### other props (...rest) => 
        You can pass another props to the input field like placeholder,className, min, max , pattern or many more.. 

###  *** 7. File Componenet Important props ***
-----
        {label,outerClass,name,...rest}
#### name =>
        This is id or name of file input field and id of label.
#### label =>
        This props not required. It depend your need.
#### outerClass =>
        same as other fields.
#### other props (...rest) => 
        You can pass another props to the input field like className, min, max , pattern or many more.. 

#### Learn this package on youtube video => 
    copy & paste  =>   https://www.youtube.com/@developersways

###  *** Thanks for reading this document  ***
